import React from "react";
import Pictures from "./MosquitoBreeding/Pictures";
import Details from "./Details";
import Location from "./GetLocation";
import UserLayout from "./user-layout";
import axios from 'axios';
import API from './api.js';
import { Spinner } from 'spin.js';
import 'spin.js/spin.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,

} from "react-router-dom";

const routes = [
  {
    path: "/Pictures",
    component: Pictures
  },
  {
    path: "/Location",
    component: Location
  },
  {
    path: "/Details",
    component: Details
  }
];

export default class MosquitoBreeding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ""
    };
  }
  submitDetails = e => {
    event.preventDefault();

    var fileToUpload = this.state.image;
    let config = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    };

    let fd = new FormData();
    fd.append("avatar", fileToUpload);
    fd.append("user_id", e.user_id);
    fd.append("latitude", this.state.latitude);
    fd.append("longitude", this.state.longitude);
    fd.append("address", e.address);
    fd.append("description", e.description);
    let spinner = new Spinner().spin();
    document.body.append(spinner.el);
    axios
      .post(API.reportMosquitoBreeding, fd, config)
      .then(response => {
        spinner.stop();
        this.setState({ redirect: true });

      })
      .catch(err => {
        console.error("Image post failed: ", err);
      });
  };
  onPictureTaken = e => {
    let files = e.files;
    let img = document.getElementById("photoImage");
    this.setState({ image: files[0] });
    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = e => {
      img.src = e.target.result;
    };
  };
  onCordinatesSet = cords => {
    this.setState(cords);
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to={{ pathname: '/dashboard' }}></Redirect>;
    }
    return (
      <UserLayout>
        {!this.props.location.state ? <Redirect to={{ pathname: '/Pictures', state: { redirect: true } }}></Redirect> :
          <Router>
            <div className="tabs">
              <ul>
                <li>
                  <NavLink to="/Pictures" activeClassName="is-active">
                    Take Picture
                </NavLink>
                </li>
                <li  >
                  <NavLink to="/Location" activeClassName="is-active">Location</NavLink>
                </li>
                <li  >
                  <NavLink to="/Details" activeClassName="is-active">Details</NavLink>
                </li>
              </ul>
            </div>
            <Switch>
              <Route
                path="/Pictures"
                children={<Pictures onPictureTaken={this.onPictureTaken} />}
              />
              <Route
                path="/Location"
                children={<Location onCordinatesSet={this.onCordinatesSet} />}
              />
              <Route
                path="/Details"
                children={<Details latitude={this.state.latitude} longitude={this.state.longitude} submitDetails={this.submitDetails} />}
              />
            </Switch>
          </Router>}
      </UserLayout>
    );
  }
}
