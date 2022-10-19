import React from 'react';
import { TabBar } from 'antd-mobile';
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons';
import { useHistory, useLocation } from 'react-router-dom';

const tabs = [
  {
    key: '/',
    title: 'Sentence',
    icon: <AppOutline />,
  },
  {
    key: '/reading',
    title: 'Read',
    icon: <UnorderedListOutline />,
  },
  {
    key: '/write',
    title: 'Write',
    icon: <MessageOutline />,
  },
  {
    key: '/me',
    title: 'Me',
    icon: <UserOutline />,
  },
];

const Layout = () => {
  const history = useHistory();
  const location = useLocation();
  const { pathname } = location;

  const setRouteActive = (value: string) => {
    console.log('1111', value);
    history.push(value);
  };
  return (
    <TabBar
      safeArea
      activeKey={pathname}
      onChange={(value) => setRouteActive(value)}
    >
      {tabs.map((item) => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  );
};

export default Layout;
