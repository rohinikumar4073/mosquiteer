import React from "react";
import { Link } from "react-router-dom";
export default class Pictures extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    this.handlePhotoUpload = e =>
      this._handlePhotoUpload(e.currentTarget, this.refs.photImg);
  }

  _handlePhotoUpload(e) {
    this.props.onPictureTaken(e);
  }

  render() {
    return (
      <div className='container-child'>
        <div className="columns is-vcentered">
          <div className="column is-vcentered">
            <input
              type="file"
              id="input-photo"
              accept="image/*"
              onChange={this.handlePhotoUpload}
            ></input>
            <img id="photoImage"></img>
          </div>
        </div>
        <div className="columns is-vcentered">
          <div className="column ">
            <button className="button" onClick={() => { document.querySelector('#input-photo').click() }}> Take A Picture</button>

          </div>
          <div className="column ">
            <Link to="/Location">
              <button className="button"> Next</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
