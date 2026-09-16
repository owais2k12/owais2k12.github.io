(function() {
  const btn = document.getElementById('theme-toggle');
  const html = document.documentElement;
  const iconSun = btn?.querySelector('[data-sun]');
  const iconMoon = btn?.querySelector('[data-moon]');

  function updateIcons(isDark) {
    if (iconSun) iconSun.hidden = !isDark;
    if (iconMoon) iconMoon.hidden = isDark;
    btn?.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }

  function init() {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = saved === 'dark' || (!saved && prefersDark);
    html.classList.toggle('dark', isDark);
    updateIcons(isDark);
  }

  btn?.addEventListener('click', () => {
    const isDark = html.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateIcons(isDark);
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      const isDark = e.matches;
      html.classList.toggle('dark', isDark);
      updateIcons(isDark);
    }
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();