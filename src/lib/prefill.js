const EVENT = 'wsl:preselect-category';

export function preselectCategory(category) {
  window.dispatchEvent(new CustomEvent(EVENT, { detail: category }));
}

export function onPreselectCategory(handler) {
  const listener = (e) => handler(e.detail);
  window.addEventListener(EVENT, listener);
  return () => window.removeEventListener(EVENT, listener);
}
