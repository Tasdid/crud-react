import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteContact} from '../../actions/contactActions'

class Contact extends Component {
  state = { showToggle : true }
  toggle = showToggle => this.setState({showToggle : !showToggle})
  delete = id => this.props.deleteContact(id)

  render() {
      const {id, name, email, phone} = this.props.contact
      const {showToggle} = this.state
       return(
         <div className="card card-body mb-3">
          <h4 style={{ color: '#00b894' }}>
            {name} {' '}
            <i className="fas fa-sort-down"
                style={{ color: '#a29bfe', cursor: 'pointer' }}
                onClick={this.toggle.bind(this, showToggle)} />
            <i className="fas fa-user-times"
                style={{ cursor: 'pointer', float: 'right', color: '#ff7675' }}
                onClick={this.delete.bind(this, id)} />
            <Link to={`contact/edit/${id}`}>
              <i className="fas fa-user-edit"
                  style={{ cursor: 'pointer', float: 'right', color: '#74b9ff', marginRight: '1rem' }}/>
            </Link>
          </h4>
            {showToggle ? 
             (<ul className="list-group">
                <li className="list-group-item">{email}</li>
                <li className="list-group-item">{phone}</li>
              </ul>) : null}
         </div>
        )
  }
}
export default connect(null, {deleteContact})(Contact)