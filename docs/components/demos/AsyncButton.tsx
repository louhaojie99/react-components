import { AsyncButton } from '@louhaojie99/react-components';
import React from 'react';

function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

const Demos = () => {
  // 异步函数
  const handleSubmit = async () => {
    await sleep(1500);
  };

  // 普通函数
  const handleClick = () => {
    alert('1');
  };

  return (
    <>
      <p>
        <AsyncButton type="primary" onClick={handleSubmit}>
          点击我-执行异步函数
        </AsyncButton>
      </p>

      <p>
        <AsyncButton type="default" onClick={handleClick}>
          点击我-执行普通函数
        </AsyncButton>
      </p>
    </>
  );
};

export default Demos;
