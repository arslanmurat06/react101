import { Layout,Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const { Header } = Layout;



const AppHeader =()=> {

    const {pathname} =useLocation();

    console.log(pathname)
    return(
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Menu theme="dark" mode="horizontal" selectedKeys={[pathname]}>
            <Menu.Item key="1"><Link to ="/categories">Categories</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/logout">Logout</Link></Menu.Item>
        </Menu>
    </Header>
    );
}

export default AppHeader;