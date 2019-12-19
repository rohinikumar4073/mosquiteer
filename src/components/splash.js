import React from "react";
import { BrowserRouter as Router, Link, Redirect } from "react-router-dom";
import mosquiteer from "../resources/img/mosquiteer.png";
let splashFunc = () => (
  <section className="hero is-info is-fullheight mosquiteer">
    <div className="hero-body">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column">
              <div className='splash-wrapper'>          <Link to="/dashboard" className="splashImg">
              <img src={mosquiteer}></img>
            </Link>
            <h1 className="title">MOSQUITEER</h1>
            <h6 className="subtitle">
            A medium designed to identify mosquito breeding and vector borne
            diseases breakout
          </h6>
          </div>
          </div>
  
        </div>
       
      </div>
    </div>
  </section>
);
export default class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timeout: false };
  }
  componentDidMount() {
    setTimeout(() => {
       this.setState({ timeout: true });
    }, 4000);
  }
  render() {
    return (
      <div>
        {this.state.timeout ? (
          <Redirect
            to={{
              pathname: "/dashboard"
            }}
          />
        ) : (
          splashFunc()
        )}
      </div>
    );
  }
}
