import React from 'react';
import ReactDOM from 'react-dom/client';
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import App from './App.jsx'
import axios from 'axios';
import customFetch from './utils/customFetch.js';


// const data = await customFetch.get('/test');
// console.log(data);


fetch('/api/v1/test')
  .then((res) => res.json())
  .then((data) => console.log(data));



  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
