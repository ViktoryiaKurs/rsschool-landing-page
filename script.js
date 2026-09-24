const themeToggle = document.getElementById('theme-toggle');
const bodyElement = document.body;
function savedThemeCheck() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme==='dark') {
        bodyElement.setAttribute('data-theme', 'dark');
    }
}
savedThemeCheck();
themeToggle.addEventListener('click', () => {
    const isDark= bodyElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
        bodyElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    } else {
        bodyElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }  });