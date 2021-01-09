export const onTouch = (opt = {}) => {
  const { longTouchTimeout, onLongPress, onClick } = {
    longTouchTimeout: 1000
    ...opt,
  };
  let originEvent;
  let timeOutEvent;
  let isLongTouch;
  return {
    onTouchStart: function(e){
      isLongTouch = false;
      timeOutEvent = setTimeout(function(){
        isLongTouch = true;
        if (typeof onLongPress === 'function') {
          onLongPress(originEvent);
        }
      }, longTouchTimeout);
      originEvent = e; 
    },
    onTouchMove: function(){
      clearTimeout(timeOutEvent);
      timeOutEvent = null;
      var touch = e.touches[0]
      if(Math.abs(touch.clientY - touchY) < 10){
        e.preventDefault();
      }
    },
    onTouchEnd: function(e){
      clearTimeout(timeOutEvent);
      if(timeOutEvent && !isLongTouch){
        clearTimeout(timeOutEvent);
        timeOutEvent = null;
        if (typeof onClick === 'function') {
          onClick(originEvent);
        }
      }
      return false;
    }
  };
};
