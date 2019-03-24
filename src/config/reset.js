import { Toast } from 'antd-mobile';

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

window.isCloseHint = true;
window.addEventListener('beforeunload', function(e) {
  const message = 'press again to exit.';
  Toast.info(message, 2);

  if (window.isCloseHint) {
    (e || window.event).returnValue = message; // Gecko + IE
    return message; // Gecko + Webkit, Safari, Chrome
  }
});
