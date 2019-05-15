import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
//import css from 'style.css';

//const AnyReactComponent = ({ text }) => <div>{text}</div>;
const AnyReactComponent = ({  img_src }) => <div><img src={img_src} className="map_class" style={{}} /></div>;

class MyClass extends Component {
  constructor(props){
    super(props);
    this.state = {
        markers: [],
      }
  }


  componentDidMount(){
      this.setState({
        markers: [{lat: 12.97, lng: 77.58, img_src: 'images/map_logo2.png'},
                  {lat: 11.97, lng: 76.58, img_src: 'images/map_logo2.png'},
                  {lat: 17.3297, lng: 76.8343, img_src: 'images/map_logo2.png' }], });
  }


  render(){
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom} >
        {this.state.markers.map((marker, i) =>{
             return(
               <AnyReactComponent
                 lat={marker.lat}
                 lng={marker.lng}
                 img_src={marker.img_src} />
             )
           })}

      </GoogleMapReact>
    );
  }
}
MyClass.defaultProps = {
  center: {lat: 12.97, lng: 77.58},
  zoom: 9
};

export default MyClass;
