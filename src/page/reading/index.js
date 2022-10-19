import { Swiper, Space } from 'antd-mobile';

import { sentenceList } from '../../data';
import styles from './style.module.less';

const items = sentenceList.map((item, index) => (
  <Swiper.Item key={index}>
    <div className={styles.content}>
      <Space direction={'vertical'}>
        <div>{item.eng}</div>
        <div>{item.zh}</div>
      </Space>
    </div>
  </Swiper.Item>
));

const Reading = () => {
  return (
    <Swiper
      direction="vertical"
      style={{ '--height': '100%' }}
      indicator={(total, current) => (
        <div className={styles.customIndicator}>
          {`${current + 1} / ${total}`}
        </div>
      )}
    >
      {items}
    </Swiper>
  );
};
export default Reading;
