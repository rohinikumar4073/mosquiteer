import React from "react";
import axios from "axios";
import Protected from "./protected";
import UserLayout from "./user-layout";
import {
    
    Redirect,
  
  } from "react-router-dom";
export default class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        user_id: ""
      },
      address:''
    };
  }
  async load() {
    let response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.props.latitude},${this.props.longitude}&key=AIzaSyCkq8e6Wp58o-iTjAwhbAxVeScdhLInsTI`
    );

    if (response.ok) {
      // if HTTP-status is 200-299
      // get the response body (the method explained below)
      let json = await response.json();
     this.setState({address:json.plus_code.compound_code})

    } else {
      alert("HTTP-Error: " + response.status);
    }
  }
  componentDidMount() {
    this.load();
  }

  handleChange = event => {
    console.log("value", event.target.value);
    this.setState({
      user_id: event.target.value
    });
  };

  handleAddressChange = event => {
    this.setState({
      address: event.target.value
    });
  };

  handleDescriptionChange = event => {
    this.setState({
      description: event.target.value
    });
  };
  submitDetails = event => {
    this.props.submitDetails({
      user_id: this.state.user_id,
      address: this.state.user_id,
      description: this.state.description
    });
  };
  render() {
     
    return (
        
      <div className='details' >
        <div className='columns'>
          <label className='column is-2 '>Name:</label>
          <input className='column'
            type="text"
            name="name"
            onChange={this.handleChange}
          />
        </div>
        <div className='columns'>
          <label className='column is-2'>Address:</label>
          <textarea className='column'
            type="textarea"
            name="address"
            value={this.state.address}
            onChange={this.handleAddressChange}
          />
        </div>
        <div className='columns'>
          <label className='column is-2'>Description:</label>
          <textarea className='column'
            type="textarea"
            name="description"
            onChange={this.handleDescriptionChange}
          />
        </div>
        <button
          className="button"
          id="submit"
          onClick={this.submitDetails}
        >
          Submit
        </button>
      </div>
    );
  }
}
