export {};

declare global {
  interface Window {
    openBookingModal?: (service?: string) => void;
  }
}
