import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Layout } from 'antd';
import 'antd/dist/antd.css';

const { Content, Footer } = Layout;
class Home extends Component {
 
  render() {
    const { page } = this.props

    return (
        <Layout> 
        <Layout align="middle">
            <Footer style={{ fontSize: "x-large" }}>
                Домашняя страница
            </Footer>
            <Content>Поздравляю {page.userInfo.cn}, вы авторизованы!</Content>
            <Footer></Footer>
        </Layout>
        <Footer id="footer">© Вячеслав Шилин</Footer>
        </Layout> 
    );
  }
}

const mapStateToProps = store => {
    return {
      page: store.page,
    }
  }
  
  export default withRouter(connect(
    mapStateToProps
  )(Home))
