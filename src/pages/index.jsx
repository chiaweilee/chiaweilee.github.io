import React from 'react';

const fonts = ['thin', 'extra-light', 'demi-light', '', 'medium', 'blod', 'black'];
const preview = '还没来得及去沾花惹草，就被人拔光了。';

function renderText(text, className) {
  return <div className={className}>{text}</div>;
}

export default function() {
  return (
    <div style={{ fontSize: '26px' }}>
      {fonts.map(font => (
        <div key={font}>
          {font || 'regular'}:{preview | renderText(font)}
        </div>
      ))}
    </div>
  );
}
