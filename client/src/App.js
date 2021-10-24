import React from 'react';
// import './App.css';

import { Header } from './components/Header';
import { ItemList } from './components/ItemList';
import { AddItem } from './components/AddItem';

function App() {
  return (

    <div className='flex flex-col place-items-center mx-auto pt-4 w-2/3 gap-y-10'>



      <Header title={`To Do List`} />
      <ItemList />
      <AddItem />


    </div>

  );
}

export default App;
