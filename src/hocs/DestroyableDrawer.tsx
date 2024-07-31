/**
 * @file 直接销毁的抽屉，虽然 antd 的抽屉有 destroyOnClose 但是也只能销毁抽屉内的内容，一些抽屉外组件中的状态还是需要手动清理，这个高阶组件直接把整个组件不渲染
 */
import type { DrawerProps } from 'antd';
import { Drawer } from 'antd';
import React, { useEffect, useState } from 'react';

export const DestroyableDrawer =
  <T extends DrawerProps>(Component: typeof Drawer) =>
  (props: T) => {
    /* eslint-disable react-hooks/rules-of-hooks */
    const {
      destroyOnClose,
      visible: propsVisible,
      open: propsOpen,
      afterOpenChange,
    } = props;

    const [shouldDestroy, setShouldDestroy] = useState(false);

    useEffect(() => {
      if (propsVisible || propsOpen) {
        setShouldDestroy(false);
      }
    }, [propsVisible, propsOpen]);

    return !(destroyOnClose && shouldDestroy) ? (
      <Component
        afterOpenChange={(open) => {
          afterOpenChange?.(open);
          if (!open) {
            // 在动画结束后再销毁组件
            setShouldDestroy(true);
          }
        }}
        {...props}
      />
    ) : (
      <></>
    );
  };
