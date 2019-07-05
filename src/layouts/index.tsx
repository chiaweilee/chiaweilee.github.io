import React from 'react';

interface Props {
  children: any;
  location: Location;
}

export default (props: Props) => {
  if (/^docs\//.test(props.location.pathname)) {
    return <div><h3>docs</h3>{props.children}</div>;
  }

  return props.children;
};
