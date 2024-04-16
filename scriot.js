function toggleMode() {
   const html = document.documentElement;
   const img = document.querySelector('#profile img');

   html.classList.toggle('light');

   if (html.classList.contains('light')) {
       img.src = './imagensrocke/lipe.jpg';
   } else {
       img.src = './imagensrocke/lipe1.jpg';
   }
}
