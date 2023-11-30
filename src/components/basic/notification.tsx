import React, { useMemo } from 'react';
import { Button, Divider, notification, Space } from 'antd';
import type { NotificationPlacement } from 'antd/es/notification/interface';

const Context = React.createContext({ name: 'Default' });

const Notification = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      message: `Notification ${placement}`,
      description: `Hello`,
      placement,
    });
  };

  return { openNotification };
};

export default Notification;
