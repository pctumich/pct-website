import React from 'react';
import { Layout } from 'antd';
const { Content } = Layout;

const Error = () => {
    return (
      <Content className="content">
          <p>Error: Page does not exist!</p>
      </Content>
    );
}

export default Error;
