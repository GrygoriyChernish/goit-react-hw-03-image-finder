import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Searchbar from './components/Searchbar/Searchbar';
import RenderImagesApi from './components/RenderImagesApi/RenderImagesApi';
import './App.css';

class App extends Component {
  state = {
    imageName: '',
  };

  handleSearchFormSubmit = imageName => {
    this.setState({ imageName });
  };
  render() {
    const { imageName } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        <RenderImagesApi imageName={imageName} />
        <ToastContainer />
      </div>
    );
  }
}

export default App;
