import { useState, useEffect } from 'react';
import './style/index.less';
import { words } from '../../data/word';
import { Space, Typography, Divider, Radio, message } from 'antd';
import speakWord from '../../common/utils/speak.js';

const { Title, Paragraph } = Typography;
const { ielts } = words;

const Word = () => {
  const [number, setNumber] = useState(0);
  const [visibleZh, setVisibleZh] = useState(true);

  const currentIeltsWord = ielts[number];

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown); // 添加全局事件
    return () => {
      window.removeEventListener('keydown', onKeyDown); // 销毁
    };
  }, []);

  const onKeyDown = (e) => {
    if (e.keyCode === 39 || e.keyCode === 40) {
      setNumber((pre) => {
        if (pre < ielts.length - 1) {
          return pre + 1;
        } else {
          return pre;
        }
      });
    }
    if (e.keyCode === 37 || e.keyCode === 38) {
      setNumber((pre) => {
        if (pre > 0) {
          return pre - 1;
        } else {
          return pre;
        }
      });
    }
  };

  const speak = (word) => {
    speakWord(word);
  };

  const equal = (e, word) => {
    if(e.keyCode === 13 && e.currentTarget.value.trim() === word) {
      message.success("success");
    }
    console.log(e.keyCode);
    console.log(e.currentTarget.value);
  }

  return (
    <div className="word">
      <Radio.Group
        value={visibleZh}
        onChange={(e) => setVisibleZh(e.target.value)}
      >
        <Radio.Button value={true}>showZH</Radio.Button>
        <Radio.Button value={false}>hiddenZH</Radio.Button>
      </Radio.Group>
      <div className="current-word">
        <Space align="baseline" size={20}>
          <Title level={4} onClick={() => speak(currentIeltsWord.eng)}>
            {currentIeltsWord.eng}
          </Title>
          <Paragraph>
            {currentIeltsWord.type}
            <span>{visibleZh ? currentIeltsWord.zh : '-'}</span>
            <input onKeyDown={(e) => equal(e,currentIeltsWord.eng)} />
          </Paragraph>
          <div>
            {currentIeltsWord.root.map((item, index) => {
              return (
                <Paragraph key={index}>
                  <pre>
                    <div className="root">
                      {item.eng}
                      <Divider
                        type="vertical"
                        style={{ borderColor: '#ffa940' }}
                      />
                      {visibleZh ? item.zh : '-'}
                    </div>
                  </pre>
                </Paragraph>
              );
            })}
          </div>
        </Space>
      </div>

      <div>
        {currentIeltsWord.eg.map((item, index) => {
          return (
            <Paragraph key={index} onClick={() => speak(item.eng)}>
              <pre>
                <div>{item.eng}</div>
                <div>{visibleZh ? item.zh : '-'}</div>
              </pre>
            </Paragraph>
          );
        })}
      </div>
      <div>
        <ul>
          {currentIeltsWord.similar.map((item, index) => {
            return (
              <li key={index}>
                <div>{item.eng}</div>
                <div>{visibleZh ? item.zh : '-'}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Word;
