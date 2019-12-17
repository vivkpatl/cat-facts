import React from 'react';

class App extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="col md 3">
      {this.props.children}
      Woo buddy got some Bootstrap in here
    </div>
  }
}

export default App;