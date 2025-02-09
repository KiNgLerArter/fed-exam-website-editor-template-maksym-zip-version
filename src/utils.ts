export const debounce = (callback: () => void, wait: number) => {
  let timeoutId: number;
  return (...args: []) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback(...args);
    }, wait);
  };
};
