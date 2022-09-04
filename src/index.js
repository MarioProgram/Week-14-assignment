import '../node_modules/bootstrap/dist/css/bootstrap.css'
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MovieData from './main_page/movie_data';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
   <MovieData/>
    </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
