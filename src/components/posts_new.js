import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from "../actions";

class PostsNew extends Component {
  renderField(field) { //feild is by convention and takes a single 'Field'
    const { meta: { touched, error } } = field; // field.meta.error
    const className = `form-group ${touched && error ? "has-danger" : ""}`;
  // field.label, field.input, field.meta.error came from single 'Field'
  // {touched ? error : ""} Here 'error' means show error if error exist
  // {...field.input} means every keystroke
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input} />
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push("/");// This second arg refers to 'callback' actionCreator at ../action file inside --> .then(() => callback())
    });
  }

  render() {
    const { handleSubmit } = this.props; // handleSubmit is default. It comes from reduxForm({.. at last line with other tons of default props

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field //it can interact with reduxForm but can't show JSX on screen
          label="Title For Post"
          name="title"//connects with '!values.title' from validate function
          component={this.renderField} // shows JSX on screen
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  // console.log(values) -> { title: 'asdf', categories: 'asdf', content: 'asdf' }
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.title) {
    errors.title = "Enter a title";
  }
  // if (values.title.leangth <3 ) { 
  // // (values.title.leangth <3  || !values.title)
  //   errors.title = "Must be greater than 3";
  // }
  if (!values.categories) {
    errors.categories = "Enter some categories";
  }
  if (!values.content) {
    errors.content = "Enter some content please";
  }

  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({ // reduxForm is written just like 'connect'
  validate, // validate: validate
  form: "PostsNewForm"
})(// PostsNew)
  connect(null, { createPost })(PostsNew)
);
// This is how to write/stack-up multiple 'connect' like helpers