import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import axios from 'axios';
import { baseApiUrl } from '../global'

class MapContainer extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          latitude: 0.0, 
          longitude: 0.0,
          local: ''
        }

        
        this.local = ''
      }

      getAnnouncements(Id){
        const url = `${baseApiUrl}/announcements/${Id}`
        axios.get(url).then(res =>{
            this.anuncio = res.data
        })
        this.local = this.anuncio.name +"- R$: "+ String(this.anuncio.preco)
        this.setState({latitude: this.anuncio.latitude, longitude: this.anuncio.longitude, local: this.local})
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
            google={this.props.google}
            zoom={7}
            initialCenter={{ lat: -23.2084514, lng: -45.8716233 }}
          >
        
    
            {this.displayMarkers()}
          </Map>
    
        );
      }

}

export default GoogleApiWrapper(
    (props) => ({
      apiKey:  '1018672477709-66ruqslkhumtbsotal1psldvefohhhi1.apps.googleusercontent.com',
    }
    ))(MapContainer)