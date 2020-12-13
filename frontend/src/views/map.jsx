import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import axios from 'axios';
import { baseApiUrl } from '../global'
//import './mapa.css'

class MapContainer extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          latitude: -23.28, 
          longitude: -45.8716233,
          local: 'quadrado'
        }        
        
      }

      getAnnouncements(Id){
        const url = `${baseApiUrl}/announcements/${Id}`
        axios.get(url).then(res =>{
            this.anuncio = res.data
        })
        this.local = this.anuncio.name +"- R$: "+ String(this.anuncio.preco)
        this.setState({latitude: this.anuncio.latitude, longitude: this.anuncio.longitude, local: this.state.local})
    }

      displayMarkers = () => {
        
          return <Marker position={{
            lat: this.state.latitude,
            lng: this.state.longitude
          }}
          />
        
      }
    
      render() {
        return (
    
          <Map
            className="quadrada"
            google={this.props.google}
            zoom={15}
            initialCenter={{ lat: -23.2084514, lng: -45.8716233 }}
          >
        
    
            {this.displayMarkers()}
          </Map>
    
        );
      }

}

export default GoogleApiWrapper(
    (props) => ({
      apiKey:  'AIzaSyD116QAn_lABifYKFDbFLdAYVCD5lw4VSs',
    }
    ))(MapContainer)