import React from "react";
import { BrowserRouter as Router, Link, Redirect } from "react-router-dom";
import mosquiteer from "../resources/img/mosquiteer.png";

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timeout: false };
  }
  componentDidMount() {
  
  }
  render() {
    return (
      <div>
          <Redirect
            to={{
              pathname: "/dashboard"
            }}
          />
      </div>
    );
  }
}
