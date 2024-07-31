import { OverlaySpin } from '@louhaojie99/react-components';
import { Button } from 'antd';
import React, { useEffect, useState } from 'react';

const Demos = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!loading) return;
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [loading]);

  return (
    <div style={{ position: 'relative' }}>
      <Button
        type="primary"
        onClick={() => {
          setLoading(true);
        }}
      >
        点击测试
      </Button>

      <OverlaySpin spinning={loading} />
      <ul>
        <li>小酷同学</li>
        <li>小樱同学</li>
      </ul>
    </div>
  );
};

export default Demos;
