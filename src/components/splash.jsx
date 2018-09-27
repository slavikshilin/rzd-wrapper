import React, { Component } from 'react';
import { Spin, Layout } from 'antd';

const { Content, Footer } = Layout;

class Splash extends Component {

    render() {
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
}

export default Splash