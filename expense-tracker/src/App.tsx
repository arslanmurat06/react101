import SignUp from './components/SignUp';
import {Route} from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
 
const { Header, Content, Footer } = Layout;

function App() {
  return (

  

    <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
     

      <h1 style={{color:"white"}}>REGISTER PAGE</h1>
          </Header>
    <Content className="site-layout" style={{ padding: '50px', marginTop: 64 }}>
    
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
       
    <Route path="/register" component={SignUp}/>

      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Expense Tracker ©2021 Created by Murat Arslan</Footer>
  </Layout>

    
  );
}

export default App;
