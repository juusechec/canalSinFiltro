import React from 'react'
import NavLink from './components/NavLink'

export default React.createClass({
  render() {
    return <div>
      About
      <ul role="nav">
        <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
        <li><NavLink to="/ingresar">Ingresar</NavLink></li>
        <li><NavLink to="/about">Mi mismo</NavLink></li>
      </ul>
    </div>
  }
})
