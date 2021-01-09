export const onTouch = (opt = {}) => {
  // @ts-ignore
  const { longTouchTimeout, onLongPress, onClick } = {
    longTouchTimeout: 1000,
    ...opt,
  };
  let originEvent;
  let timeOutEvent: any = 0;
  let isLongTouch;
  return {
    onContextMenu: function(e) {
      e.preventDefault();
    },
    onTouchStart: function(e) {
      isLongTouch = false;
      originEvent = e;
      timeOutEvent = setTimeout(function() {
        isLongTouch = true;
        if (typeof onLongPress === 'function') {
          onLongPress(originEvent);
        }
      }, longTouchTimeout);
      e.preventDefault();
    },
    onTouchMove: function(e) {
      var touch = e.touches[0];
      if (Math.abs(touch.clientY - originEvent.touches[0].touchY) < 10) {
        e.preventDefault();
      }
    },
    onTouchEnd: function(e) {
      if (timeOutEvent && !isLongTouch) {
        clearTimeout(timeOutEvent);
        timeOutEvent = 0;
        if (typeof onClick === 'function') {
          onClick(originEvent);
        }
      }
      return false;
    },
  };
};
