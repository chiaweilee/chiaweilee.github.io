import React from 'react';
import { connect } from 'dva';
import { withRouter } from 'react-router-dom';
import { Flex, WingBlank } from 'antd-mobile';
import { Timeline, Spin } from 'antd';
import { map } from 'aliba';

function Index({ airasia }) {
  return (
    <Flex>
      <Flex.Item>
        <WingBlank>
          {!airasia ? (
            <Spin />
          ) : (
            map(airasia, (prices, key) => {
              const bestPrice = map(prices, (price, date) => {
                return [date, price];
              }).sort((a, b) => a[1] - b[1]);

              bestPrice.length = 20;

              return (
                <Timeline key={key}>
                  {map(bestPrice, priceDate => {
                    const [date, price] = priceDate;

                    return (
                      <Timeline.Item key={date}>
                        {date} {price}
                      </Timeline.Item>
                    );
                  })}
                </Timeline>
              );
            })
          )}
        </WingBlank>
      </Flex.Item>
    </Flex>
  );
}

export default withRouter(
  connect(({ airasia }) => ({
    airasia,
  }))(Index)
);
