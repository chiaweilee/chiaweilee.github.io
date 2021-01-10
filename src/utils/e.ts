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
    onContextMenu(e) {
      e.preventDefault();
    },
    onTouchStart(e) {
      isLongTouch = false;
      originEvent = e;
      timeOutEvent = setTimeout(function () {
        isLongTouch = true;
        if (typeof onLongPress === 'function') {
          onLongPress(originEvent);
        }
      }, longTouchTimeout);
      e.preventDefault();
    },
    onTouchMove(e) {
      const touch = e.touches[0];
      if (Math.abs(touch.clientY - originEvent.touches[0].touchY) < 10) {
        e.preventDefault();
      }
    },
    onTouchEnd(e) {
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
