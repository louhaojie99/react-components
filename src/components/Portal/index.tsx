/**
 * @file 可脱离文档流组件
 */
import type { ReactNode } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';

export interface PortalProps {
  children?: ReactNode;
  /** 指定挂载的节点，并在容器内展现 */
  container?: HTMLElement | undefined;
}

const Portal: React.FC<PortalProps> = ({ children, container }) => {
  return ReactDOM.createPortal(children, container || document.body);
};

export default Portal;
