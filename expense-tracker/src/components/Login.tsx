import { Form, Input, Button } from 'antd';
import { useDispatch,useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { AppState } from '../store';
import { login } from '../store/actions/userActions';
import { LoginForm } from '../types/user';
import api from '../utils/api';
import showError from '../utils/showError';
import { useEffect } from 'react';
import showSuccess from '../utils/showSucces';

const Login= ()=> {

  const history =useHistory();
  const location =useLocation<{newSignup:boolean}>();

  const {data, loading, error} =useSelector((state:AppState)=> state.user);
  const dispatch = useDispatch();

  const onFinish = (values:LoginForm)=>{
    dispatch(login(values));
  }

  useEffect(() => {
   error && showError(error);
  }, [error])


useEffect(() => {
 data.username && showSuccess("Login Success")
}, [data.username])



useEffect(() => {
 var token = localStorage.getItem("token");
 if(token){
   history.push("/categories");
 }
}, [data])

    return(
        <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >

        {location?.state?.newSignup && <p>Registration succesfull completed!</p>}

        
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
}


export default Login;