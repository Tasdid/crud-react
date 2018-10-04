import {GET_ALL,GET_ONE,DELETE,ADD,EDIT} from './types'
import axios from 'axios'
export const getContacts = () => async dispatch => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    dispatch ({
        type: GET_ALL,
        payload: res.data
    })
}
export const getContact = id => async dispatch => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    dispatch({
      type: GET_ONE,
      payload: res.data
    })
  }
export const deleteContact = id => async dispatch => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      dispatch({
        type: DELETE,
        payload: id
      })
    } catch (e) {
      dispatch({
        type: DELETE,
        payload: id
      })
    }
}
export const addContact = contact => async dispatch => {
    const res = await axios.post('https://jsonplaceholder.typicode.com/users', contact)
    dispatch({
      type: ADD,
      payload: res.data
    })
}
export const updateContact = contact => async dispatch => {
    const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${contact.id}`, contact)
    dispatch({
      type: EDIT,
      payload: res.data
    })
  }
  