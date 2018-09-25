import React, { Component } from 'react';
import { Layout, Button } from 'antd';

const { Content, Footer } = Layout;
class Home extends Component {

  render() {
    const { page, history, fetchLogoutAction } = this.props
    const userName = (page.userInfo) ? page.userInfo.cn : '...'


    return (
        <Layout> 
        <Layout align="middle">
            <Footer style={{ fontSize: "x-large" }}>
                Домашняя страница
            </Footer>
            <Content>
              <div>
                Поздравляю {userName}, вы авторизованы!
              </div>
              <div>
              <Button type="primary" onClick={() => fetchLogoutAction(history)}>Выйти</Button>
              </div>
            
            </Content>
            <Footer></Footer>
        </Layout>
        <Footer id="footer">© Вячеслав Шилин</Footer>
        </Layout> 
    );
  }
}

export default Home
