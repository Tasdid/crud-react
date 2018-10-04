import React from 'react'
import { Link } from 'react-router-dom';

const Header = props => {
  const { brand } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-light mb-3 py-0" style={{ backgroundColor: '#e3f2fd' }}>
      <div className="container">
        <a href="/" className="navbar-brand">{brand}</a>
         <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fab fa-fort-awesome" style={{ color: '#6c5ce7' }}  />
              </Link>
            </li>
            <li className="nav-item">
             <Link to="/contact/add" className="nav-link">
                <i className="fas fa-user-plus" style={{ color: '#00b894' }} />
             </Link>
            </li>
          </ul>
         </div>
      </div>
    </nav>
  )
}
export default Header