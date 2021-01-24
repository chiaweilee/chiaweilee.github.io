import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default function useModal(children: any, el = document.body as any) {
  if (!children || !el) {
    return () => {
      // nothing
    };
  }

  const div: any = document.createElement('div');
  el.appendChild(div);

  function unmount() {
    ReactDOM.unmountComponentAtNode(div);
    if (div && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }

  if (typeof children.type === 'function') {
    ReactDOM.render(
      React.cloneElement(children, {
        __unmount__: unmount,
      }),
      div,
    );
  } else {
    ReactDOM.render(children, div);
  }

  return unmount;
}
