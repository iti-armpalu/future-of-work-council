import { useLayoutEffect } from "react";

export default function useLockBodyScroll(isLocked) {
  useLayoutEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow;
    // Prevent scrolling on mount
    if (isLocked) {
      document.body.style.overflow = "hidden";
    }
    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isLocked]); // Only re-call effect when isLocked changes
}
