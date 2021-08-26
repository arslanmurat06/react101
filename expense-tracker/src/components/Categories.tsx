import { Table, Tag, Space,Modal,Button, Form,Input,Select, Spin } from 'antd';
import { Category, CategoryForm } from '../types/category';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect,useState } from 'react';
import { addCategory, getCategories, updateCategory } from '../store/actions/categoryActions';
import { AppState } from '../store';
import {SketchPicker} from 'react-color';
import {DeleteOutlined, EditOutlined} from '@ant-design/icons';

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
      const [updateID, setUpdateID] =useState<number | null>(null);
    

      const handleEdit= (cat:Category)=>{
      showModal("edit");
      // setForm({...form, name:cat.name, type: cat.type ==="expense" ? "expense": "income", color:cat.color});

      setUpdateID(cat.id);
      setForm(cat);
      }

      const handleDelete =(id:number)=>
      {
        console.log(`I will delete you ${id} `)
      }

      const showModal = (mode:Mode) => {
        setIsModalVisible(true);
        setMode(mode);
      };
    
      const handleOk = () => {  
        if(mode == "edit"){
         dispatch(updateCategory(form,updateID as number));
        }
        else{
          dispatch(addCategory(form));
        }
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
        {
            title: 'Action',
            key: 'action',
            render: (text:string, category:Category) => (
              loading && category.id === updateID ? <Spin/>: 
              <Space size="middle">
                <EditOutlined style={{color:"blue"}}  onClick={()=>handleEdit(category)}/>
                <DeleteOutlined style={{color:"red"}} onClick={()=> handleDelete(category.id)} />
              </Space>
            ),
          },
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
          <Select  defaultValue={"expense"} value={form.type} onChange={(e)=> setForm({...form, type:e})}>
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

