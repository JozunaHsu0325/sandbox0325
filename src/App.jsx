import React from 'react';
import './reset.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import './App.css'

export default function App() {
  return (
    <div className='app'>
      <Header/>
      <MainContent/>
    </div>
    )
}
