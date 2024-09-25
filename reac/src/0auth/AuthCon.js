import {createContext, useState, useContext} from 'react'; from "react";
import axios from 'axios'
import Alert from '../component/alert.js'

const AuthContext = createContext;

export const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null);
    const[token, setToken] = useState(localStorage.getItem('token') || null);

    const login = async (email, password)=>{
        try{
            const response = await axios.post('http://localhost:8000/api/login', {email, password});
                setToken(response.data.token);
                setUser(response.data.user);
                localStorage.setItem('token', response.data.token);
            }catch(error){
            console.error("login failed", error);
        }
    };
    //Register
    const register = async(name, email, password)=>{
        //input validation to avoi unnecessary calls and improve UX
        if(!name || !password || !email){
           return <Alert/>
        }
        try{
            const response = await axios.post('http://localhost:8000/api/register', {name, email, password});
            if(response.status === 201){
                return <Alert/> //with route after successful registration--> token input
            }
        }catch{
            if(error.response){
                console.error('Registration failed:', error.response.data.message || 'An error occured')
            }else{
                console.log('error in setting up registration credentials:', error.message);
            }
        };

    //LOGOUT==> clearing all the tokens cached, cleanup of localstorage to ensure user can not access protected routes without re-auth
     const logout = async(){
         try{
             await axios.post('http://localhost:8000/api/logout', {}, {
                 header: {Authorization: `Bearer ${token}`}
             });
             //clearing user data
             setToken(null);
             setUser(null);
             localStorage.removeItem('token');

             alert("logout successful")
         }catch(error){
             if(error.response){
                 console.log("Logout failed:", error.response.data.message || "An error occured");

             }else if(error.request){
                 console.log("no response received from the server.");
             }else{
                 console.log("Error during logout:", error.message)
             }
         }
        }
    }
};