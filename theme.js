(() => {
  const key = 'portfolio-theme';
  let theme = 'system';
  try {
    const saved = localStorage.getItem(key);
    if (saved === 'light' || saved === 'dark') theme = saved;
  } catch (error) {
    console.warn('Theme preference cannot be read on this device.', error.name);
  }
  document.documentElement.dataset.theme = theme;
  document.addEventListener('DOMContentLoaded', () => {
    const control = document.getElementById('theme');
    const next = {system: 'light', light: 'dark', dark: 'system'};
    function showMode() {
      const label = `Color theme: ${theme}. Switch to ${next[theme]} theme`;
      control.setAttribute('aria-label', label);
      control.title = label;
      control.querySelector('use').setAttribute('href', `/theme-icons.svg#${theme}`);
    }
    showMode();
    control.hidden = false;
    control.addEventListener('click', () => {
      theme = next[theme];
      document.documentElement.dataset.theme = theme;
      showMode();
      try {
        localStorage.setItem(key, theme);
      } catch (error) {
        console.warn('Theme changed for this page but could not be saved.', error.name);
      }
    });
  });
})();
