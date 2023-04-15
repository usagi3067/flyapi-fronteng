import { PageContainer } from '@ant-design/pro-components';
import { Typography } from 'antd';
import React from 'react';
// import ReactDOM from 'react-dom'
import ReactMarkdown from 'react-markdown'
const { Title, Paragraph} = Typography;

const NewMenu: React.FC = () => {
  const markdownContent = `
\`\`\`xml
<dependency>
    <groupId>com.dango</groupId>
    <artifactId>flyapi-client-sdk</artifactId>
    <version>0.0.1</version>
</dependency>
\`\`\`
`;

  return (
    <PageContainer title="帮助文档">
      <Title>首页</Title>
      <Paragraph>
        主页菜单下可查看开放平台下所有的接口， 点击任一接口可查看详情， 支持在线调试，
        接口详情下有在线调试示例（可复制在线调试）， 用户可以使用json格式工具搭配使用
      </Paragraph>
      <Title>用户使用API接口</Title>
      <Title level={2}>步骤</Title>
      <Paragraph>
        第一步：git clone xxx, 在pom.xml下<code>mvn install</code>
      </Paragraph>
      <Paragraph>
        第二步： 在使用平台中API接口的项目
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </Paragraph>


    </PageContainer>
  );
};

export default NewMenu;
