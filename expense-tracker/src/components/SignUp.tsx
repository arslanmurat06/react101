
import { Form, Input, Button, message } from 'antd';
import { useHistory } from "react-router-dom";
import api from '../utils/api';
import { AxiosResponse } from 'axios';
import showError from '../utils/showError';




const  SignUp = ()=>  {

    const history = useHistory();

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      };

      const validateMessages = {
        required: '${label} is required!',
        types: {
          email: '${label} is not a valid email!',
          number: '${label} is not a valid number!',
        },
        number: {
          range: '${label} must be between ${min} and ${max}',
        },
      };

      const onFinish = async (values: any) => {
        try {
            await api().post("/users/register",values);  
         history.push("/login",{newSignup:true});  
        } catch (error) {
            showError((error as any).response.data.errorMessage);
        }
        
      };

    return (
        <div>
             <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item name="username" label="User Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!',min:6 }]}>
        <Input.Password />
      </Form.Item>
      <Form.Item name="email" label="Email" rules={[{ type: 'email',required:true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="full_name" label="Full Name">
      <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
        </div>
    );}


export default SignUp;