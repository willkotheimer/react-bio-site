import React from 'react';
import './App.scss';
import Header from '../Components/Header';
import Bio from '../Components/Bio';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Bio/>
      </div>
    );
  }
}

export default App;
