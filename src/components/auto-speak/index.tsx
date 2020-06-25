import React from 'react';
import Speak from '../speak';

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
    Array.isArray(props.children.props.children) &&
    props.children.props.originalType === 'ul'
  ) {
    return props.children.props.children.map((li: any) => {
      if (li.props && li.props.originalType === 'li' && typeof li.props.children === 'string') {
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
