// lib/gtag.ts

// Replace 'G-XXXXXXXXXX' with your actual Measurement ID
export const GA_TRACKING_ID: string = process.env.NEXT_PUBLIC_GA_TRACKING_ID || 'G-TC7D9FC5PL';

// Function to log page views
export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// Function to log specific events
interface GtagEvent {
  action: string;
  category: string;
  label: string;
  value?: number;
}

export const event = ({ action, category, label, value }: GtagEvent) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
