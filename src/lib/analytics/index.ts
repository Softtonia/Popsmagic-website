// Analytics event tracking helpers
export function trackEvent(eventName: string, properties?: Record<string, unknown>) {
  if (typeof window !== "undefined") {
    console.log(`[Analytics] ${eventName}`, properties);
  }
}
