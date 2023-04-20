import type { ProDescriptionsActionType } from '@ant-design/pro-components';
import { ProDescriptions } from '@ant-design/pro-components';
import { Button } from 'antd';
import { useRef } from 'react';
import {getLoginUserAKSKUsingGET} from "@/services/flyapi-backend/userController";

export default () => {
  const actionRef = useRef<ProDescriptionsActionType>();
  return (
    <ProDescriptions
      actionRef={actionRef}
      title="您的接口调用签名{accessKey, secretKey}"
      request={async () => {
        // 发起远程调用
        const res = await getLoginUserAKSKUsingGET();
        console.log(res.data);
        if (res.data) {
          return Promise.resolve({
            success: true,
            data: res.data,
          });
        }


        return Promise.resolve({
          success: true,
          data: { accessKey: 'xxx', secretKey: 'xxxx'},
        });
      }}
      extra={<Button type="link">修改</Button>}
    >
      <ProDescriptions.Item dataIndex="accessKey" label="accessKey"/>
      <ProDescriptions.Item dataIndex="secretKey" label="secretKey"/>

      <ProDescriptions.Item label="文本" valueType="option">
        <Button
          type="primary"
          onClick={() => {
            actionRef.current?.reload();
          }}
          key="reload"
        >
          刷新
        </Button>
        <Button key="rest">重置</Button>
      </ProDescriptions.Item>
    </ProDescriptions>
  );
};
