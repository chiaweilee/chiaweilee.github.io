import React, { useEffect } from 'react';
import { onTouch } from '@/utils/e';
import useModal from '@/utils/useModal';
import Modal from '@/components/modal';

let modalDestroyer;

export default function ({ src, alt, origin = false }) {
  const props = {
    src: origin
      ? src
      : process.env.NODE_ENV === 'development'
      ? `../assets/${src}`
      : `/home/assets/${src}`,
    alt,
  };
  useEffect(() => {
    return () => {
      if (typeof modalDestroyer === 'function') {
        modalDestroyer();
      }
    };
  }, []);

  return (
    <img
      {...props}
      {...onTouch({
        onDblClick: () => {
          modalDestroyer = useModal(
            <Modal>
              <img {...props} width="100%" />
            </Modal>,
          );
        },
      })}
    />
  );
}
