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
    control.value = theme;
    control.closest('.theme').hidden = false;
    control.addEventListener('change', () => {
      document.documentElement.dataset.theme = control.value;
      try {
        localStorage.setItem(key, control.value);
      } catch (error) {
        console.warn('Theme changed for this page but could not be saved.', error.name);
      }
    });
  });
})();
