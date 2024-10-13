import type { Metadata } from "next";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import Flex from 'antd/lib/flex';
import Layout from 'antd/lib/layout';
import Content from 'antd/lib/layout';
import AppHeader from '../components/AppHeader';
import { ConfigProvider } from "antd";
import theme from "@/config/themeConfig";
const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: '100%'
};
export const metadata: Metadata = {
  title: "EasyGen Analytics",
  description: "EasyGen Analytics for your activities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ConfigProvider theme={theme}>
          <AntdRegistry>
            <Flex gap="middle" wrap>
              <Layout style={layoutStyle}>
                <AppHeader />
                <Content>{children}</Content>
              </Layout>
            </Flex>
          </AntdRegistry>
        </ConfigProvider>
      </body>
    </html >
  );
}
