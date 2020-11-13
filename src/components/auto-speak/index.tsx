import React from 'react';
import Speak from '../speak';

const tagBlackList = ['h1', 'h2', 'h3', 'h4', 'h5'];

export default function AutoSpeak(props: any) {
  if (typeof props.children === 'undefined') {
    return null;
  }

  // deeper loop
  if (Array.isArray(props.children)) {
    return props.children.map((section: any, i: number) => (
      <AutoSpeak key={`${i}`} children={section} />
    ));
  }

  if (
    typeof props.children === 'object' &&
    props.children.props &&
    Array.isArray(props.children.props.children)
  ) {
    return props.children.props.children.map((li: any) => {
      if (li.props && tagBlackList.indexOf(li.props.originalType) === -1 && typeof li.props.children === 'string') {
        return React.createElement(li.props.originalType, {
          key: li.props.children,
          children: <AutoSpeak>{li.props.children}</AutoSpeak>,
        });
      }
      return li;
    });
  }

  // convert word to speak
  if (typeof props.children === 'string') {
    return props.children.split(/([a-z']+)(\s)/gi).map((text: string) => {
      if (/^[a-z']+$/i.test(text)) {
        return <Speak key={text}>{text}</Speak>;
      }
      return text;
    });
  }

  return props.children;
}
