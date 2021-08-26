import axios from 'axios';

var token = localStorage.getItem("token");
export default axios.create({
    baseURL:"https://expensetracker-be.herokuapp.com",
    headers:{
            Authorization:token
    }
});