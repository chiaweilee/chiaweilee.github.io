window.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

document.body.addEventListener(
  'touchmove',
  function(e) {
    e.preventDefault();
  },
  { passive: false }
);
