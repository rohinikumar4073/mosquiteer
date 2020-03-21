import React from "react";
import axios from "axios";
import UserLayout from './user-layout.js';
import API from './api.js';
import { MAP_HEIGHT } from './MosquiteerEnum';
import withSpinner from './withSpinner';
let visualRef = React.createRef();
class Visualization extends React.Component {
  createInfoMap (data) {
    var src = `data:image/png;base64,${data.img}`;
    var html = `<div class='wrapper-vis'>
       <div class='description'>${data.description} </div>
       <div class='reported-by'> reported by : ${data.user_id} </div>
        <img src=${src} width='200'>   
     
      </div>`;
    return html;
  }
  
  loadMap = data => {
    let diseaseBreedingVis = document.querySelector(".disease-breeding-visualization");
    if (diseaseBreedingVis) {
      diseaseBreedingVis.innerHTML = "";
      diseaseBreedingVis.style.height = `${window.innerHeight - MAP_HEIGHT}px`;
      let map = new google.maps.Map(
        diseaseBreedingVis,
        {
          zoom: 13,
          center: { lat: 17.4415342, lng: 78.3820794 },
          mapTypeId: "terrain"
        }
      );
      let results = data;
      // The marker, positioned at Uluru
      for (let i = 0; i < results.length; i++) {
        let coords = results[i];
        let latLng = new google.maps.LatLng(coords.latitude, coords.longitude);
        let marker = new google.maps.Marker({
          position: latLng,
          map: map,
          index: i
        });
        let createInfoMap = this.createInfoMap;
        let createInfoMapWithSpiner = this.props.startSpinner;
        let j = i;
        google.maps.event.addListener(marker, "click", function () {
          let divElement = document.createElement('div');
          divElement.classList.add('info-marker');
          let spiner = createInfoMapWithSpiner(divElement)
          var infowindow = new google.maps.InfoWindow({
            content: divElement
          });
          infowindow.open(map, marker);
          axios
            .get(
              `${API.getAllMosquitoBreeding}/${data[j]['_id']}`
            )
            .then(response => {
              divElement.innerHTML = createInfoMap(response.data);
            });

        });
      }
    }
  };
  onCordinatesSet () {
    this.props.onCordinatesSet(this.state.cords);
  }
  componentDidMount () {
   let spinner = this.props.startSpinner(visualRef.current);
    axios
      .get(
        API.getAllMosquitoBreeding
      )
      .then(response => {
        spinner.stop();
        this.loadMap(response.data);
      });
  }
  render () {

    return (
      <UserLayout>
        <div className="columns" ref={visualRef}>
          <div className="disease-breeding-visualization columns"></div>
        </div>
      </UserLayout>
    );
  }
}
export default withSpinner(Visualization);
