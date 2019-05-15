// import React from 'react';
// const SearchBar = ()=>{
// return <input />;
// };
//
// export default SearchBar;

import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Row } from 'reactstrap';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state ={value:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({[event.target.name]:event.target.value});
  }

  handleSubmit(event){
    alert("Name: " + this.state.name +" Gender: "+ this.state.gender + " Company "+ this.state.company + " Address "+ this.state.address);
    event.preventDefault();
    var hidden = false;
        hidden = !hidden;
        if(hidden) {
            document.getElementById('abc').style.visibility = 'hidden';
        } else {
            document.getElementById('abc').style.visibility = 'visible';
        }

  }

  render(){
    return(
      <div><Row>
      <form onSubmit={this.handleSubmit}>
      <FormGroup><label>
       Name: <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
      </label></FormGroup>

      <FormGroup><label>
       Gender: <select name="gender" value={this.state.gender} onChange={this.handleChange}>
            <option value="Male">Please select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>
      </label></FormGroup>

      <FormGroup><label>
       Company: <input type="text" name="company" value={this.state.company} onChange={this.handleChange} />
      </label></FormGroup>

      <FormGroup><label>
       Address: <input type="text" name="address" value={this.state.address} onChange={this.handleChange} />
      </label></FormGroup>

       <FormGroup>
       <Button type="submit" color="success">Submit</Button>
       </FormGroup>
       <p id='abc'>Thank you for submit. we will get in touch Mr. <span className="text-success"> {this.state.name}</span></p>
       </form>
       </Row></div>

    );
  }


}
export default SearchBar;
