import React from "react";
import { Link } from "react-router-dom";
import { MAP_HEIGHT } from './MosquiteerEnum';
export default class GetLocation extends React.Component {
  getLocation() {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(this.loadMap);
    } else {
      console.log("Geo Location not supported by browser");
    }
  }
  loadMap = pos => {
    let mosquitoBreedingMapDOM = document.querySelector(".mosquito-breeding-map");
    if (mosquitoBreedingMapDOM) {
      mosquitoBreedingMapDOM.innerHTML = "";
      var cords = { lat: pos.coords.latitude, lng: pos.coords.longitude };
      this.setState({ cords });
      mosquitoBreedingMapDOM.style.height = `${window.innerHeight - MAP_HEIGHT}px`
      var map = new window.google.maps.Map(
        mosquitoBreedingMapDOM
        ,
        { zoom: 15, center: cords }
      );
      this.props.onCordinatesSet(pos.coords);
      // The marker, positioned at Uluru
      var marker = new google.maps.Marker({
        position: cords,
        map: map,
        draggable: true
      });
      let onCordinatesSet = this.props.onCordinatesSet;
      marker.addListener("dragend", function () {
        onCordinatesSet({
          latitude: this.position.lat(),
          longitude: this.position.lng()
        });
      });
    }
  };

  componentDidMount() {
    this.loadMap({
      coords: { latitude: 17.433095129274008, longitude: 78.3736156970283 }
    });
    this.getLocation();
  }
  render() {
    return (
      <div className="container-child">
        <div className="columns">
          <div className="mosquito-breeding-map columns"></div>
        </div>
        <div className="columns">
          <div className="column">
            <Link to="/Details">
              <button className="button"> Next</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
