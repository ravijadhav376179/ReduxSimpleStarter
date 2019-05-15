import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './component/search_bar';
import MyClass from './component/map';
import Contact from './component/contact';
import Banner from './component/banner';
import {Container, Row, Col, Button, Alert} from 'reactstrap';

const API_KEY = 'AIzaSyC9iOYj6FECHTUvGV8fDSFrrxmJqB6uD8E';
const App = ()=>{
return (
    <div>
    <div className="banner_div"><Banner/></div>
    <Row>
      <Col sm="6"><SearchBar/><Contact/></Col>
      <Col sm="6"><div className="map"> <MyClass/></div></Col>
    </Row>
    </div>
);
}

ReactDOM.render(<App />, document.querySelector('.container'));
