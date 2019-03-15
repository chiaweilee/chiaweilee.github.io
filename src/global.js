import device from 'current-device';
import { config as configIconfont } from 'iconfont-symbol';
import Notify from 'notifyjs';

function notification() {
  const note = new Notify('Dear red', {
    body: 'Hope is a good thing, maybe the best of things, and no good thing ever dies.',
  });

  note.show();
}

if (!Notify.needsPermission) {
  notification();
} else {
  Notify.requestPermission(() => {
    notification();
  });
}

configIconfont('1089854_phq99uk0x5');

device.onChangeOrientation((/* orientation */) => {
  //
});

window.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});
