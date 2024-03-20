import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
//import ReactDOM from 'react-dom';
import { Header } from './components/header/Header';
import './smartHomeData'
import { Dashboard } from './components/dashboard/Dashboard';
import smartHomeData from './smartHomeData';


const App = () => (
  <>
<div className="container">
  <Header title={'Chytrý dům'}></Header>
  <Dashboard data={smartHomeData}></Dashboard>
</div>
  </>
);

createRoot(
  document.querySelector('#app'),
).render(<App />);