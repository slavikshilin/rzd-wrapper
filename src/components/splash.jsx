import React from 'react';
import { Spin, Layout } from 'antd';

const { Content, Footer } = Layout;

const Splash = () => {
    return (
        <Layout align="middle">
            <Footer style={{ fontSize: "x-large" }}>
            </Footer>
            <Content>
                <Spin tip="Загрузка..." size="large" />
            </Content>
            <Footer></Footer>
        </Layout>
    );
}

export default Splash