import type { LoginParams } from '@/interface/user/login';
import type { FC } from 'react';

import './index.less';

import { Button, Checkbox, Form, Input } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { LocaleFormatter, useLocale } from '@/locales';
import { loginAsync } from '@/stores/user.store';
import { auth_url, handleSetCookie } from '@/stores/utils';
import { formatSearch } from '@/utils/formatSearch';

const initialValues: LoginParams = {
  username: 'guest',
  password: 'guest',
  // remember: true
};

const LoginForm: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { formatMessage } = useLocale();

  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  console.log(user);

  const onFinished = async (form: LoginParams) => {
    const res = dispatch(await loginAsync(form));

    if (!!res) {
      const search = formatSearch(location.search);
      const from = search.from || { pathname: '/' };

      navigate(from);
    }

    if (user.username === 'guest' && user.password === 'guest') {
      const search = formatSearch(location.search);
      const from = search.from || { pathname: '/' };

      navigate(from);
    }
  };

  const onLogin = async () => {
    console.log('hello');
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    };

    const response = await fetch(`${auth_url}/api/auth/sigin`, requestOptions);
    const responseData = await response.json();

    if (response.status === 200) {
      alert('logged in');
      handleSetCookie('auth', responseData?.accessToken);
    } else {
      alert(responseData?.message);
    }
  };

  return (
    <div className="login-page">
      <Form<LoginParams> onFinish={onLogin} className="login-page-form" initialValues={initialValues}>
        <h2>Kovela Admin</h2>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: formatMessage({
                id: 'gloabal.tips.enterUsernameMessage',
              }),
            },
          ]}
        >
          <Input
            name="username"
            placeholder={formatMessage({
              id: 'gloabal.tips.username',
            })}
            value={user.username}
            onChange={e => setUser({ ...user, username: e.target.value })}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: formatMessage({
                id: 'gloabal.tips.enterPasswordMessage',
              }),
            },
          ]}
        >
          <Input
            type="password"
            name="password"
            placeholder={formatMessage({
              id: 'gloabal.tips.password',
            })}
            value={user.password}
            onChange={e => setUser({ ...user, password: e.target.value })}
          />
        </Form.Item>
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>
            <LocaleFormatter id="gloabal.tips.rememberUser" />
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary" className="login-page-form_button">
            <LocaleFormatter id="gloabal.tips.login" />
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
