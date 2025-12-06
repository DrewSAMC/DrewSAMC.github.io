// Navegação móvel e tema
(function(){
  const navToggle = document.getElementById('nav-toggle');
  const siteNav = document.getElementById('site-nav');
  const themeToggle = document.getElementById('theme-toggle');

  if(navToggle){
    navToggle.addEventListener('click', ()=> {
      siteNav.classList.toggle('show');
    });
  }

  // Tema: salva preferência no localStorage
  const root = document.documentElement;
  const themeKey = 'academic_site_theme';
  const saved = localStorage.getItem(themeKey);
  if(saved === 'dark') root.setAttribute('data-theme','dark');

  if(themeToggle){
    themeToggle.addEventListener('click', ()=>{
      const isDark = root.getAttribute('data-theme') === 'dark';
      if(isDark){
        root.removeAttribute('data-theme');
        localStorage.setItem(themeKey,'light');
      } else {
        root.setAttribute('data-theme','dark');
        localStorage.setItem(themeKey,'dark');
      }
    });
  }
})();
