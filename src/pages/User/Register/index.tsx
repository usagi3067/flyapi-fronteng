import Footer from '@/components/Footer';
import {
  AlipayCircleOutlined,
  LockOutlined,
  TaobaoCircleOutlined,
  UserOutlined,
  WeiboCircleOutlined,
} from '@ant-design/icons';
import {
  LoginForm,
  ProFormText,
} from '@ant-design/pro-components';
import { history, } from '@umijs/max';
import { message, Tabs } from 'antd';
import React, { useState } from 'react';

import styles from './index.less';
import {userRegisterUsingPOST} from '@/services/flyapi-backend/userController';


const Register: React.FC = () => {
  const [type, setType] = useState<string>('account');


  const handleSubmit = async (values: API.UserRegisterRequest) => {

    const {userPassword, checkPassword} = values;
    if (userPassword !== checkPassword) {
      message.error("再次输入的密码不一致");
      return;
    }

    try {
      // 注册

      const res = await userRegisterUsingPOST({
        ...values
      });

      if (res.data && res.data > 0) {
        const defaultRegisterSuccessMessage = '注册成功';
        message.success(defaultRegisterSuccessMessage);
        history.push('/user/login' + "?redirect=/");
      } else {
        throw new Error(`register error id = ${res.data}`);
      }
    } catch (error) {
      const defaultLoginFailureMessage = '注册失败，请重试！';
      console.log(error);
      message.error(defaultLoginFailureMessage);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <LoginForm
          submitter={{
            searchConfig: {
              submitText: '注册'
            }
          }}
          logo={<img alt="logo" src="/logo.svg" />}
          title="鸿鹄接口"
          subTitle={'API 开放平台'}
          initialValues={{
            autoLogin: true,
          }}
          actions={[
            '其他注册方式 :',
            <AlipayCircleOutlined key="AlipayCircleOutlined" className={styles.icon} />,
            <TaobaoCircleOutlined key="TaobaoCircleOutlined" className={styles.icon} />,
            <WeiboCircleOutlined key="WeiboCircleOutlined" className={styles.icon} />,
          ]}
          onFinish={async (values) => {
            await handleSubmit(values as API.UserRegisterRequest);
          }}
        >
          <Tabs
            activeKey={type}
            onChange={setType}
            centered
            items={[
              {
                key: 'account',
                label: '账户密码注册',
              },
            ]}
          />

          {type === 'account' && (
            <>
              <ProFormText
                name="userAccount"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={styles.prefixIcon} />,
                }}
                placeholder={'用户名: 请输入账号'}
                rules={[
                  {
                    required: true,
                    message: '用户名是必填项！',
                  },
                  {
                    min: 4,
                    type: 'string',
                    message: '账号位数不能小于4'
                  }
                ]}
              />
              <ProFormText.Password
                name="userPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={styles.prefixIcon} />,
                }}
                placeholder={'密码: 请输入密码'}
                rules={[
                  {
                    required: true,
                    message: '密码是必填项！',
                  },
                  {
                    min: 8,
                    type: 'string',
                    message: '账号位数不能小于8'
                  }
                ]}
              />
              <ProFormText.Password
                name="checkPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={styles.prefixIcon} />,
                }}
                placeholder={'密码: 再次输入密码'}
                rules={[
                  {
                    required: true,
                    message: '确认密码是必填项！',
                  },
                  {
                    min: 4,
                    type: 'string',
                    message: '账号位数不能小于8'
                  }
                ]}
              />
            </>
          )}


          <div
            style={{
              marginBottom: 24,
            }}
          >
          </div>
        </LoginForm>
      </div>
      <Footer />
    </div>
  );
};
export default Register;
