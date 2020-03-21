import React from 'react';
import Protected from './protected';
import UserLayout from './user-layout';
import { Link } from "react-router-dom";
export default () => (
  <Protected>
    <UserLayout>
      <div className="title">Report</div>

      <div className="columns is-multiline">
        <div className="column is-half-desktop is-half-tablet">
          <div className="box notification is-info">
            <div className="level mq-box is-mobile ">
              <div className="level-left">
                <div className="level-item">
                  <span className="icon is-medium">
                    <i className="fas fa-lg fa-bug"></i>
                  </span>
                </div>
              </div>
              <div className="level-item">
                <div className="">
                  <Link to="/MosquitoBreeding" >
                    <div className="title is-5">Mosquito Breeding</div>
                  </Link >
                </div>
              </div>
              <div className="level-right">
                <div className="level-item">
                  <span className="icon is-medium">
                    <i className="fas fa-lg fa-arrow-right"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="title">Visualizations</div>
      <div className="columns is-multiline">
        <div className="column ">
          <div className="box notification is-info">
            <div className="level mq-box is-mobile ">
              <div className="level-left">
                <div className="level-item">
                  <span className="icon is-medium">
                    <i className="fas fa-lg fa-map-marked"></i>
                  </span>
                </div>
              </div>
              <div className="level-item">
                <div className="">
                  <Link to="/visualization" >
                    <div className="title is-5">Breedings</div>
                  </Link >
                </div>
              </div>
              <div className="level-right">
                <div className="level-item">
                  <span className="icon is-medium">
                    <i className="fas fa-lg fa-arrow-right"></i>
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="column">
          <div className="box notification is-info">
            <div className="level is-mobile ">

              <div className="level-left">
                <div className="level-item">
                  <span className="icon is-medium">
                    <i className="fas fa-lg fa-user-injured"></i>
                  </span>
                </div>
              </div>
              <div className="level-item ">
                <div className="">
                  <Link to="/diseaseBreakout" >
                    <div className="title is-5">Disease Breakout</div>
                  </Link >
                </div>
              </div>
              <div className="level-right">
                <div className="level-item">
                  <span className="icon is-medium">
                    <i className="fas fa-lg fa-arrow-right"></i>
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="title">News</div>
      <div className="columns is-multiline">
        <div className="column">
          <div className="box notification is-info">
            <div className="level mq-box is-mobile ">

              <div className="level-left">
                <div className="level-item">
                  <span className="icon is-medium">
                    <i className="fas fa-lg fa-newspaper"></i>
                  </span>
                </div>
              </div>
              <div className="level-item">
                <div className="">
                  <Link to="/Articledata" >
                    <div className="title is-5">Articles</div>
                  </Link >
                </div>
              </div>

              <div className="level-right">
                <div className="level-item">
                  <span className="icon is-medium">
                    <i className="fas fa-lg fa-arrow-right"></i>
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="column">
       </div>
      </div>
    </UserLayout>
  </Protected>
);
