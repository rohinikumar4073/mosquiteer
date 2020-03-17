import React from "react";
import UserLayout from "./user-layout.js";
import { MAP_HEIGHT } from './MosquiteerEnum';

export default class diseaseBreakout extends React.Component {
  getLocation() {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(this.loadMap);
    } else {
      console.log("Geo Location not supported by browser");
    }
  }
  loadMap = pos => {
    let diseaseBreakOutMap = document.querySelector(".disease-breakout-map");
    if (diseaseBreakOutMap) {
      diseaseBreakOutMap.innerHTML = "";
      diseaseBreakOutMap.style.height = `${window.innerHeight - MAP_HEIGHT}px`

      var india = new google.maps.LatLng(20.5937, 78.9629);
      let map = new google.maps.Map(
        diseaseBreakOutMap,
        {
          zoom: 3,
          center: india,
          mapTypeId: "satellite"
        }
      );
      var heatmapData = [
        {
          location: new google.maps.LatLng(11.059821, 78.387451),
          weight: 4779
        }, //Tamilnadu
        {
          location: new google.maps.LatLng(17.123184, 79.208824),
          weight: 8917
        }, //Telangana
        {
          location: new google.maps.LatLng(17.874857, 78.100815),
          weight: 8917
        }, //Chandoor Telangana
        { location: new google.maps.LatLng(18.4386, 79.1288), weight: 8917 }, //Chandoor Telangana
        {
          location: new google.maps.LatLng(23.473324, 77.947998),
          weight: 2070
        }, //Madhya Pradesh
        {
          location: new google.maps.LatLng(25.794033, 78.116531),
          weight: 2070
        }, //Madhyapradesh
        { location: new google.maps.LatLng(29.238478, 76.431885), weight: 368 }, //Haryana
        { location: new google.maps.LatLng(21.295132, 81.828232), weight: 462 }, //Chattisgarh
        {
          location: new google.maps.LatLng(19.601194, 75.552979),
          weight: 9899
        }, //Maharashtra
        { location: new google.maps.LatLng(19.66328, 75.300293), weight: 9899 }, //Maharashtra
        { location: new google.maps.LatLng(23.745127, 91.746826), weight: 90 }, //Tripura
        {
          location: new google.maps.LatLng(15.317277, 75.71389),
          weight: 14139
        }, //Karnataka
        { location: new google.maps.LatLng(10.850516, 76.27108), weight: 3486 }, //Kerala
        { location: new google.maps.LatLng(28.207609, 79.82666), weight: 4801 }, //Uttarpradesh
        { location: new google.maps.LatLng(26.244156, 92.537842), weight: 147 }, //Assam
        { location: new google.maps.LatLng(22.309425, 72.13623), weight: 8410 }, //Gujarat
        { location: new google.maps.LatLng(20.94092, 84.803467), weight: 2296 }, //Odisha
        {
          location: new google.maps.LatLng(27.391277, 73.432617),
          weight: 3642
        }, //Rajasthan
        { location: new google.maps.LatLng(32.084206, 77.571167), weight: 276 } //Himachal
      ];
      var heatmap = new google.maps.visualization.HeatmapLayer({
        data: heatmapData
      });
      heatmap.setMap(map);
    }
  };
  onCordinatesSet() {
    this.props.onCordinatesSet(this.state.cords);
  }
  componentDidMount() {
    this.loadMap({ coords: { latitude: -25.344, longitude: 131.036 } });
    this.getLocation();
  }
  render() {
    return (
      <UserLayout>
        <div className="columns">
          <div className="disease-breakout-map column"></div>
        </div>
      </UserLayout>
    );
  }
}
