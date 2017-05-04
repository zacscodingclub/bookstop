import React from 'react';
import { Link, IndexLink } from 'react-router';

class App = (props) => {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">BookStop</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/books">Books</Link></li>
                <li><Link to="/cart">Cart</Link></li>
              </ul>
            </div>
          </div>
        </nav>

        {props.children}
      </div>
    );
  }
}

export default App;
