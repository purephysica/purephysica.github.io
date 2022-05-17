window.addEventListener('DOMContentLoaded', () => {
   let jsTargets = document.getElementsByClassName('js-target');

   for (var i = 0; jsTargets.length > i; i++) {
   let isActive = jsTargets[i].href === location.href
   if (isActive) {
     jsTargets[i].classList.add('active');
   }
}
})