import React from 'react';

export type BasicLayoutComponent<Props> = React.SFC<Props>;

export interface BasicLayoutProps extends React.Props<any> {
  history?: History;
  location?: Location;
}

const BasicLayout: BasicLayoutComponent<BasicLayoutProps> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default BasicLayout;
