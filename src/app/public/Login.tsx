import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { initUser } from '../redux/userSlice';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading,setLoading]=useState(false);
    //   dispatch est utilisé pour ecrire dans le reducer 
    const dispatch = useAppDispatch();
    //   const user = useAppSelector((state)=>state.user);
    //   console.log("user : ",user);
    //   const [error, setError] = useState('');

    const waitingToLoad = (dataLogin) => { 
        setTimeout(()=>{
            console.log('WaitingToLoad Start');
            setLoading(false);
            dataLogin.data.token && dispatch(initUser(dataLogin.data));
            console.log('WaitingToLoad End');
        },5000)
    }

    const readPost = async () => { 
        try {
            const posts = await axios.get('http://127.0.0.1:8000/api/posts');
            console.log("Mes posts : " , posts);
        } catch (error) {
            console.log(error);
        }
    }



    const login = async (email:string , password:string) => {
        setLoading(true);
        try {
            const params = {
                email : email,
                password : password
            }
            const dataLogin = await axios.post('http://127.0.0.1:8000/api/login', params);
            // console.log("data : ",dataLogin.data);
            waitingToLoad(dataLogin);
            
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (e) => {
    e.preventDefault();
        console.log('Email :', email,'Password : ',password);
        login(email , password);
    };

    useEffect(()=>{
        readPost();
        // waitingToLoad();
    },[]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Connexion</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
                Email
                </label>
                <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                // required
                />
            </div>

            <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-2">
                    Mot de passe
                </label>
                <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                // required
                />
            </div>

            {/* {error && <p className="text-center text-red-500 text-sm mb-4">{error}</p>} */}

            <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
                {loading? 'Chargement' : 'Se connecter'}
            </button>
            </form>
        </div>
        </div>
    );
};

export default Login;
