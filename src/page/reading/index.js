import './style/index.less';
import { useState, useEffect } from 'react';
import { sentenceList } from '../../data/sentence';
import { Space, Typography, Radio, Input } from 'antd';
import speakWord from '../../common/utils/speak';

const { Paragraph } = Typography;
const { TextArea } = Input;

const Reading = () => {
  const [number, setNumber] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [visibleType, setVisibleType] = useState(0);

  const currentSentence = sentenceList[number];

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown); // 添加全局事件
    return () => {
      window.removeEventListener('keydown', onKeyDown); // 销毁
    };
  }, []);

  const onKeyDown = (e) => {
    if (e.keyCode === 39 || e.keyCode === 40) {
      setNumber((pre) => {
        if (pre < sentenceList.length - 1) {
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

  const onChangeInputValue = (e) => {
    console.log(e);
    setInputValue(e.currentTarget.value);
  };

  return (
    <div className="word">
      <Radio.Group
        value={visibleType}
        onChange={(e) => setVisibleType(e.target.value)}
      >
        <Radio.Button value={0}>All</Radio.Button>
        <Radio.Button value={2}>EN</Radio.Button>
        <Radio.Button value={1}>ZH</Radio.Button>
      </Radio.Group>
      <div>
        <Paragraph onClick={() => speak(currentSentence.eng)}>
          <pre>
            <div>
              {visibleType === 2 || visibleType === 0
                ? currentSentence.eng
                : inputValue}
            </div>
            <div>
              {visibleType === 1 || visibleType === 0
                ? currentSentence.zh
                : '-'}
            </div>
          </pre>
        </Paragraph>
      </div>
      <div>
        <TextArea rows={5} value={inputValue} onChange={onChangeInputValue} />
      </div>
      <div>
        {currentSentence.words.map((item, index) => {
          return (
            <div key={index}>
              <Space>
                <div onClick={() => speak(item.eng)}>
                  {visibleType === 2 || visibleType === 0 ? item.eng : '--'}
                </div>
                <div>
                  {visibleType === 1 || visibleType === 0 ? item.zh : '-'}
                </div>
              </Space>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Reading;
