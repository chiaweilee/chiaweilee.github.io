import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default function useModal(children: any, el = document.body as any) {
  if (!children && !el) {
    return () => {};
  }

  const div: any = document.createElement('div');
  el.appendChild(div);

  function unmount() {
    ReactDOM.unmountComponentAtNode(div);
    if (div && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }

  ReactDOM.render(
    React.cloneElement(children, {
      __unmount__: unmount,
    }),
    div,
  );

  return unmount;
}
