import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom';
import Contacts from './components/contacts/Contacts'
import {Provider} from 'react-redux'
import Header from './components/layout/Header'
import Add from './components/contacts/Add'
import Edit from './components/contacts/Edit'
import store from './store'


class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
         <div className="App">
          <Header brand="Guest List"/>
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={Add} />
                <Route exact path="/contact/edit/:id" component={Edit} />
              </Switch>
            </div>
         </div>
        </HashRouter>
      </Provider>
    );
  }
}
export default App
