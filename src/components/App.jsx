import React from 'react';
import Searchbar from './searchbar/Searchbar';

class App extends React.Component {
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        {/* React homework template */}
        <Searchbar  />
      </div>
    );
  }
};

export default App;