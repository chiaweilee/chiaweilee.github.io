import React, { useState } from 'react';
import moment from 'moment';

export default function(props: { date: any; nights?: number }) {
  const [detail, setDetail] = useState(false);
  const { date, nights } = props;
  return (
    <div
      onClick={() => {
        setDetail(!detail);
      }}
      style={{ marginBottom: '16px' }}
    >
      <i>{moment(date).format('Do MMM, YYYY')}</i>
      {detail && typeof nights === 'number' && (
        <i>
          {' '}
          to{' '}
          {moment(date)
            .add(nights - 1, 'd')
            .format('Do MMM, YYYY')}
        </i>
      )}
      {!detail && typeof nights === 'number' && <i>, {nights} nights</i>}
    </div>
  );
}
