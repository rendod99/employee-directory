import API from "../utils/API";
import React, { Component } from "react"
import SearchBox from "./SearchBox"
import TableData from "./TableData"
import "./style.css";

class Employees extends Component {
  state = {
    employees: [],
    filteredEmployees: []
        

  };

  //Displays on initial load
  componentDidMount() {
    API.searchEmployees().then(res => this.setState({
      employees: res.data.results,
      filteredEmployees: res.data.results
    })).catch(err => console.log(err))
    
  }

  //Handles input change in input box
  handleInputChange = event => {

    const employees = this.state.employees;
    const UserInput = event.target.value;
    const filteredEmployees = employees.filter(employee => employee.name.first.toLowerCase().indexOf(UserInput.toLowerCase()) > -1);
      
    this.setState({
      filteredEmployees
    });


  };


 //API call 
  employeeSearch = () => {
    API.searchEmployees()
    .then(res => this.setState({

      filteredEmployees: res.data.results,
      employees: res.data.results

    }))

    .catch(err => console.log(err))
  }
// renders page
  render() {
  return (
    <div>
      <SearchBox
        employee={this.state.employees}
        handleInputChange={this.handleInputChange} />
        
        <TableData results={this.state.filteredEmployees}/>
    </div >


    )
  }
}

export default Employees