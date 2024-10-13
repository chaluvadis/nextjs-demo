import React from 'react';
import { Header } from 'antd/es/layout/layout';
import Title from 'antd/es/typography';
import SignalFilled from '@ant-design/icons/SignalFilled';
import Splitter from 'antd/es/splitter/Splitter';
import Panel from 'antd/es/splitter/Panel';
import Flex from 'antd/lib/flex';
const AppHeader = () => {
    return <Header style={{ backgroundColor: "white" }}>
        <Splitter>
            <Panel defaultSize="40%" min="20%" max="70%" resizable={false}>
                <Flex vertical={false} align='center' gap={"middle"} justify='flex-start'>
                    <SignalFilled style={{ fontSize: '32px', color: '#1677ff' }} />
                    <Title style={{ fontSize: '36px' }}>EasyGen Analytics</Title>
                </Flex>
            </Panel>
            <Panel resizable={false}>

            </Panel>
        </Splitter>
    </Header >;
};

export default AppHeader;