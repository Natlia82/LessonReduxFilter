import './App.css';
import React from 'react';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';
import ServiseFilter from './components/ServisFilter';

function App() {
    return ( 
      <>
        <ServiseFilter />
        <ServiceAdd />
        <ServiceList />
      </>
    );

}

export default App;