import { Swiper } from 'antd-mobile';

import { sentenceList } from '../../data';
// import speakWord from '../../common/utils/speak';

import styles from './style.module.less';

const items = sentenceList.map((item, index) => (
  <Swiper.Item key={index}>
    <div className={styles.content} style={{ background: '#f0f1f2' }}>
      {index + 1}
    </div>
  </Swiper.Item>
));

const Reading = () => {
  return (
    <Swiper
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
