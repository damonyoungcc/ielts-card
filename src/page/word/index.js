import './style/index.less';
import { words } from '../../data/word';
import { useState } from 'react';
import { useEffect } from 'react';
import { Space, Typography, Divider } from 'antd';
const { Title, Paragraph } = Typography;

console.log(words);
const { ielts } = words;

const Word = () => {
  const [number, setNumber] = useState(0);

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
        console.log(pre, ielts.length);
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

  return (
    <div className="word">
      <div className="current-word">
        <Space align="baseline" size={20}>
          <Title level={4}>{currentIeltsWord.eng}</Title>
          <Paragraph>
            {currentIeltsWord.type} {currentIeltsWord.zh}
          </Paragraph>
          <div>
            {currentIeltsWord.root.map((item) => {
              return (
                <Paragraph>
                  <pre>
                    <div className="root">
                      {item.eng}
                      <Divider
                        type="vertical"
                        style={{ borderColor: '#ffa940' }}
                      />
                      {item.zh}
                    </div>
                  </pre>
                </Paragraph>
              );
            })}
          </div>
        </Space>
      </div>

      <div>
        {currentIeltsWord.eg.map((item) => {
          return (
            <Paragraph>
              <pre>
                <div>{item.eng}</div>
                <div>{item.zh}</div>
              </pre>
            </Paragraph>
          );
        })}
      </div>
      <div>
        <ul>
          {currentIeltsWord.similar.map((item) => {
            return (
              <li>
                <div>{item.eng}</div>
                <div>{item.zh}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Word;
