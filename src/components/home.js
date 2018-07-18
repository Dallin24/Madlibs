import React, { Component } from 'react';

import Header from './header';
import Card from './card';

class Home extends Component {
  render() {
    return (
      <div className="home">
        {Header() }
        <Card />
      </div>
    );
  }
}

// need to fix
//placeholder
//number label color green/grey
//black number labels
//generate button space
export default Home;