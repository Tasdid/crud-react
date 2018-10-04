import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addContact} from '../../actions/contactActions'

class Add extends Component {
  state={ name: 'Saitama', phone: '', email: ''}
  onChange = e => this.setState({[e.target.name]: e.target.value})
  onSubmit = e => {
      e.preventDefault()
      const {name,phone,email} = this.state
      const newContact = {
        name: name,
        email,
        phone
      }
      this.props.addContact(newContact)
      this.setState({ name: '', email: '', phone: '' })
      this.props.history.push('/')
  }
  render() {
    const {name,phone,email} = this.state
    return (
        <div className="card mb-2">
            <div className="card-header">Add Contacts</div>
            <div className="card-body">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                            <input type="text" name="name" 
                                className="form-control"
                                placeholder="Enter Name..."
                                value={name}
                                onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                            <input type="text" name="email" 
                                className="form-control"
                                placeholder="Enter Email..."
                                value={email}
                                onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                            <input type="text" name="phone" 
                                className="form-control"
                                placeholder="Enter Phone..."
                                value={phone}
                                onChange={this.onChange}/>
                    </div>
                    <input type="submit" value="Add" 
                        className="btn btn-secondary btn-block btn-lg"/>
                </form>
            </div>
        </div>
        )
  }
}
export default connect(null, {addContact})(Add)