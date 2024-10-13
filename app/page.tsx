import React from 'react';
import Text from "antd/es/typography/Text";
import { Button } from 'antd';
import Flex from 'antd/lib/flex';
export default function Home() {
  return (
    <div className="App">
      <Flex vertical align={'center'} justify={'center'} gap={'large'} style={{ height: '90vh' }}>
        <Text style={{ fontSize: "75px" }}>
          Welcome to EasyGen Analytics
        </Text>
        <Text style={{ fontSize: '50px' }}>
          One place shop to view your market analytics
        </Text>
        <Button type="primary" size='large'>Login to View your Analytics</Button>
      </Flex>
    </div>
  );
}
