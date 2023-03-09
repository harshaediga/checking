import React from 'react';
import{link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <ul>
        <link to="/"><li>Home</li> </link>
        <link to="/dashboard"> <li>Dashboard</li> </link>
        <link to="/about"> <li>About</li> </link>
      </ul>
    </div>
  )
}

export default Navbar

