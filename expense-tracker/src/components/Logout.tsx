import { useDispatch,useSelector } from 'react-redux';
import { logout } from '../store/actions/userActions';

import { useEffect } from 'react';
import { AppState } from '../store';
import { Redirect } from 'react-router-dom';

const Logout = ()=>{

    const dispatch =useDispatch();

    const{data} =useSelector((state:AppState)=>state.user);

    useEffect(() => {
      dispatch(logout());
    }, [])

    if (!data.username) return <Redirect to="/login" />;


    return(<p>Loging out...</p>);

}

export default Logout;