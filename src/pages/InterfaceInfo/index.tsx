import { PageContainer } from '@ant-design/pro-components';
import React, { useEffect, useState } from 'react';
import {Button, Card, Descriptions, Form, message, Input, Space, Divider} from 'antd';
import {
  getInterfaceInfoByIdUsingGET,
  invokeInterfaceInfoUsingPOST,
} from '@/services/flyapi-backend/interfaceInfoController';
import { useParams } from '@@/exports';
import ReactJson from "react-json-view";
import {addUserInterfaceInfoCountUsingPOST} from "@/services/flyapi-backend/userInterfaceInfoController";
import {toNumber} from "lodash";
import {getInterfaceInfoByIdUsingGET1} from "@/services/flyapi-backend/interfaceInfoInvokeController";



/**
 * 主页
 * @constructor
 */



const Index: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<API.InterfaceInfoInvokeVO>();
  const [invokeRes, setInvokeRes] = useState<any>();
  const [invokeLoading, setInvokeLoading] = useState(false);

  const params = useParams();

  const loadData = async () => {
    if (!params.id) {
      message.error('参数不存在');
      return;
    }
    setLoading(true);
    try {
      const res = await getInterfaceInfoByIdUsingGET1({
        id: Number(params.id),
      });
      setData(res.data);
    } catch (error: any) {
      message.error('请求失败，' + error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const onFinish = async (values: any) => {
    if (!params.id) {
      message.error('接口不存在');
      return;
    }
    setInvokeLoading(true);
    try {
      const res = await invokeInterfaceInfoUsingPOST({
        id: params.id,
        ...values,
      });
      setInvokeRes(JSON.parse(res.data));
      message.success('请求成功');
    } catch (error: any) {
      message.error('操作失败，' + error.message);
    }
    setInvokeLoading(false);
  };

  const addInvoke = async (values: number) =>{

    await addUserInterfaceInfoCountUsingPOST({
      interfaceInfoId: toNumber(params.id),
      count: values,
    });
    await loadData();
    message.success("购买成功")
  }

  return (
    <PageContainer title="查看接口文档">
      <Card>
        {data ? (
          <Descriptions title={data.name} column={1}>
            <Descriptions.Item label="接口状态">{data.status ? '开启' : '关闭'}</Descriptions.Item>
            <Descriptions.Item label="描述">{data.description}</Descriptions.Item>
            <Descriptions.Item label="请求地址">{data.url}</Descriptions.Item>
            <Descriptions.Item label="请求方法">{data.method}</Descriptions.Item>
            <Descriptions.Item label="请求参数">{data.requestParams}</Descriptions.Item>
            <Descriptions.Item label="请求头">{data.requestHeader}</Descriptions.Item>
            <Descriptions.Item label="响应头">{data.responseHeader}</Descriptions.Item>
            <Descriptions.Item label="创建时间">{data.createTime}</Descriptions.Item>
            <Descriptions.Item label="更新时间">{data.updateTime}</Descriptions.Item>
            <Descriptions.Item label="剩余调用次数"><p style={{color: "red"}}>{data.leftNum}</p></Descriptions.Item>
          </Descriptions>
        ) : (
          <>接口不存在</>
        )}
        <Space size="large">
          <Button type="primary" onClick={()=> addInvoke(1000)}>
            购买1000次调用次数
          </Button>
          <Button type="primary" onClick={()=> addInvoke(2000)}>
            购买2000次调用次数
          </Button>
          <Button type="primary" onClick={()=> addInvoke(5000)}>
            购买5000次调用次数
          </Button>
        </Space>
      </Card>
      <Divider />
      <Card title="在线测试">
        <Form name="invoke" layout="vertical" onFinish={onFinish}>
          <Form.Item label="请求参数" name="userRequestParams">
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ span: 16 }}>
            <Button type="primary" htmlType="submit">
              调用
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <Divider />
      <Card title="返回结果" loading={invokeLoading}>
        <ReactJson src={invokeRes}/>
      </Card>
    </PageContainer>
  );
};


//
export default Index;
