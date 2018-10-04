import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getContact,updateContact} from '../../actions/contactActions'

class Edit extends Component {
  state={ name: '', phone: '', email: ''}
  onChange = e => this.setState({[e.target.name]: e.target.value})
  componentWillReceiveProps(nextProps, nextState) {
    const { name, email, phone } = nextProps.contact
    this.setState({ name, email, phone })
  }
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getContact(id)
  }
  onSubmit = e => {
    e.preventDefault()
    const {name,phone,email} = this.state
    const {id} = this.props.match.params
    const update = {id,name,phone,email}
    this.props.updateContact(update)
    this.setState({ name: '',email: '',phone: '' })
    this.props.history.push('/')
  }
  render() {
      const {name,phone,email} = this.state
    return(
        <div className="card mb-2">
          <div className="card-header">Edit Contacts</div>
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
              <input type="submit" value="Edit"
                className="btn btn-secondary btn-block btn-lg"/>
            </form>
          </div>
        </div>
        )   
  }
}
const mapStateToProps = state => ({
    contact: state.contact.contact
  })
export default connect(
    mapStateToProps,
    { getContact, updateContact }
  )(Edit);