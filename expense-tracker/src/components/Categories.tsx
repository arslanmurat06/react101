import { Table, Tag, Space,Modal,Button, Form,Input,Select } from 'antd';
import { Category, CategoryForm } from '../types/category';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect,useState } from 'react';
import { addCategory, getCategories } from '../store/actions/categoryActions';
import { AppState } from '../store';
import {SketchPicker} from 'react-color';


type Mode = "new"|"edit";
const Categories = ()=> {

    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(getCategories());
    }, [])

    const {data, error, loading} = useSelector((state:AppState)=>state.categories);

    const initialForm:CategoryForm ={
      name:"",
      type:"expense",
      color:"black"
    }

      const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
      const [mode, setMode] = useState<Mode>("new");
      const [form, setForm] = useState<CategoryForm>(initialForm);
    
      const showModal = (mode:Mode) => {
        setIsModalVisible(true);
        setMode(mode);
      };
    
      const handleOk = () => {
        dispatch(addCategory(form));
        setIsModalVisible(false);
        setMode("new");
        setForm(initialForm);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
        setMode("new");
        setForm(initialForm);
      };

    console.log(data,error,loading);
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Type',
          dataIndex: 'type',
          key: 'id',
          render: (text:string,category:Category) =>{
              
                return <Tag color={category.color}>{text.toUpperCase()}</Tag>
          }
        },
        // {
        //     title: 'Action',
        //     key: 'action',
        //     render: (text, record) => (
        //       <Space size="middle">
        //         <a>Invite {record.name}</a>
        //         <a>Delete</a>
        //       </Space>
        //     ),
        //   },
      ];

    return(
      <>
      <Button style={{margin:5}} type="primary" onClick={()=>showModal("new")}>
       New Category
      </Button>
      <Modal title={mode === "new" ? "Create new category": "Update category"}
      okButtonProps={{ disabled : !form.name}}
      visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <Form labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal">
      <Form.Item label="Category Name">
          <Input name="name" value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} />
        </Form.Item>
        <Form.Item label="Category Type">
          <Select  defaultValue={"expense"} onChange={(e)=> setForm({...form, type:e})}>
            <Select.Option value="income">Income</Select.Option>
            <Select.Option value="expense">Expense</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Color">
        <SketchPicker color={form.color} onChange={color => setForm({...form, color:color.hex})}/>
        </Form.Item>
        </Form>
      </Modal>
        <Table columns={columns} dataSource={data} />
        </>
    );
}


export default Categories;

