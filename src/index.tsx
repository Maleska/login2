import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
<<<<<<< HEAD
import { BrowserRouter, Routes,Route,Link  } from 'react-router-dom';
import MainRouter from './router/router';


=======
>>>>>>> 4da5f967192b25ccf5191b20a23bf4517fb14d3b


const firebaseConfig = {
  apiKey: "AIzaSyChhr07kd1tv_kl5nYTMBachF_QUkmoVA4",
  authDomain: "careerai-385fe.firebaseapp.com",
  projectId: "careerai-385fe",
  storageBucket: "careerai-385fe.appspot.com",
  messagingSenderId: "893056502664",
  appId: "1:893056502664:web:788b42337be06a1dce883d",
  measurementId: "G-D5PD3BY0PF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
<<<<<<< HEAD
  {/* <BrowserRouter> */}
  <MainRouter />
    
 
  {/* </BrowserRouter> */}
=======
    <App />
>>>>>>> 4da5f967192b25ccf5191b20a23bf4517fb14d3b
  </React.StrictMode>
)
