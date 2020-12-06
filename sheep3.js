document.addEventListener("DOMContentLoaded", function(e) {
  var homeButton = document.createElement("sheep-btn");
  homeButton.setAttribute('tabindex', 0);
  homeButton.setAttribute('aria-label', 'Clicca qui se hai bisogno di aiuto');
  homeButton.addEventListener('click', function(e) {
    document.body.classList.add('sheep-blockscreen');
    homeButton.addEventListener('transitionend', function(e) {
      setTimeout(function() {
        window.location = 'www.ezhub.it';
      }, 100);
    });
  });
  homeButton.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) homeButton.click();
  });
  document.body.appendChild(homeButton);
}, {once: true});
