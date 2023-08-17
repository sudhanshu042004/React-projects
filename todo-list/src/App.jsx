import { Component } from 'react'
import { useState } from 'react'
import './App.css'
import ClassInput from './components/ClassInput';

class App extends Component{
  constructor (props){
    super (props);
  }
  render (){
    return(
      <div>
        <ClassInput />
      </div>
    )
  }
}

export default App
