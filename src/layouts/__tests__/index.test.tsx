import 'jest';
import BasicLayout from '..';
import React from 'react';
import renderer, { ReactTestInstance, ReactTestRenderer } from 'react-test-renderer';

const location = { pathname: '/' };
const history = { goBack: new Function() };

describe('Layout: BasicLayout', () => {
  it('Render correctly', () => {
    const wrapper: ReactTestRenderer = renderer.create(
      <BasicLayout location={location} history={history} />
    );
    expect(wrapper.root.children.length).toBe(1);
    const outerLayer = wrapper.root.children[0] as ReactTestInstance;
    expect(typeof outerLayer.type).toBe('function');
  });
});
