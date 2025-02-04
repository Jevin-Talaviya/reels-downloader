"use client";

import React, { useEffect, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Download, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { downloadFile } from "@/lib/utils";
import { getHttpErrorMessage } from "@/lib/http";
import { useVideoInfo } from "@/services/api/queries";

// Define the form schema
const formSchema = z.object({
  postUrl: z.string().url({
    message: "Provide a valid Instagram post link",
  }),
  autoDownload: z.boolean().optional().default(false),
});

export function InstagramVideoForm() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [tempfilename, setTempFileName] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      postUrl: "",
      autoDownload: false,
    },
  });

  const { error, isPending, mutateAsync: getVideoInfo } = useVideoInfo();
  const httpError = getHttpErrorMessage(error);

  // Load user preference for autoDownload from localStorage
  useEffect(() => {
    const storedAutoDownload = localStorage.getItem("autoDownload");
    if (storedAutoDownload !== null) {
      form.setValue("autoDownload", JSON.parse(storedAutoDownload));
    }
  }, [form]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { postUrl, autoDownload } = values;
    try {
      const videoInfo = await getVideoInfo({ postUrl });
      const { filename, videoUrl } = videoInfo;

      // Save autoDownload preference
      localStorage.setItem("autoDownload", JSON.stringify(autoDownload));

      setPreviewUrl(videoUrl);
      setTempFileName(filename); // Just store the filename string

      // If autoDownload is enabled, immediately download using a string filename
      if (autoDownload) {
        downloadFile(videoUrl, filename);
      }
    } catch (error: any) {
      console.error(error);
    }
  }

  async function handlePaste() {
    if (navigator?.clipboard?.readText) {
      try {
        const text = await navigator.clipboard.readText();
        form.setValue("postUrl", text);
      } catch (err) {
        console.error("Failed to read clipboard contents: ", err);
      }
    } else {
      alert("Clipboard API not supported on this browser.");
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="bg-accent/20 my-4 flex w-full flex-col items-center rounded-lg border px-4 pb-16 pt-8 shadow-md sm:px-8"
        >
          <div className="mb-2 h-6 w-full px-2 text-start text-red-500">
            {httpError}
          </div>

          <div className="mb-6 w-full flex items-center gap-2">
            <FormField
              control={form.control}
              name="postUrl"
              render={({ field }) => (
                <FormItem className="flex-grow">
                  <FormControl>
                    <Input
                      disabled={isPending}
                      type="url"
                      placeholder="Paste URL Instagram"
                      className="h-12 w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="button"
              onClick={handlePaste}
              className="h-12 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded"
            >
              Paste
            </Button>

            <Button
              disabled={isPending}
              type="submit"
              className="h-12 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded flex items-center"
            >
              {isPending ? (
                <Loader2 className="mr-2 animate-spin" />
              ) : (
                <Download className="mr-2" />
              )}
              Download
            </Button>
          </div>

          {/* Checkbox for Auto Download */}
          <div className="mb-4 w-full flex items-center space-x-2">
            <FormField
              control={form.control}
              name="autoDownload"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-2">
                  <FormControl>
                    <input
                      type="checkbox"
                      checked={field.value}
                      onChange={(e) => field.onChange(e.target.checked)}
                      className="rounded border-gray-300 text-primary-600 shadow-sm focus:ring-primary-500"
                    />
                  </FormControl>
                  <FormLabel className="text-sm font-medium text-gray-300">
                    Auto Download
                  </FormLabel>
                </FormItem>
              )}
            />
          </div>

          <p className="text-muted-foreground text-center text-xs">
            One click Instagram Download.
          </p>
        </form>
      </Form>

      {previewUrl && (
        <div className="mt-8 w-full flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-2 text-center">Search result</h2>
          <div className="border rounded-lg shadow-md p-4 flex flex-col items-center max-w-md w-full">
            <video
              src={previewUrl}
              controls
              className="w-full h-auto mb-4"
            />
            <Button
              // Pass the filename as a string directly, not as an object
              onClick={() => downloadFile(previewUrl, tempfilename ?? "video.mp4")}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
            >
              Download
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
