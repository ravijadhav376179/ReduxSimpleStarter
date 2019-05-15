import React, {Component} from 'react';
//import contactData from './jsonApi/contact.json';

class Contact extends Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
      <div className="addr">Contact Us
      <div className="add_class1 text-primary"><b>Wipro Technologies</b></div>
      <div className="add_class2">Divyashree Technopark</div>
      <div className="add_class3">whitefield Bangalore</div>
      <div className="add_class4">Karnataka,India 560023</div><br/>
      <div>Wipro Limited is an Indian Information Technology Services corporation headquartered in Bengaluru, India.</div>
      </div>

    );
  }
}

export default Contact;
