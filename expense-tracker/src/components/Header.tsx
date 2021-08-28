import { Layout,Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { AppState } from '../store';
import React from 'react';
const { Header } = Layout;



const AppHeader =()=> {

    const {pathname} =useLocation();

    const {data} = useSelector((state:AppState) => state.user);

    console.log(data.token)
    return(
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Menu theme="dark" mode="horizontal" selectedKeys={[pathname]}>
           {
               !data.username ? null :(
            <React.Fragment>
            <Menu.Item key="1"><Link to ="/categories">Categories</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/logout">Logout</Link></Menu.Item>
            </React.Fragment>)
}
            
        </Menu>
    </Header>
    );
}

export default AppHeader;