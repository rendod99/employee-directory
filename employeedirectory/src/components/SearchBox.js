import React from "react"
import "./style.css";

function SearchBox(props) {

 return (
  <div className="container-fluid">
    <header>
     <div>
       <div>
         <h3 className="headerText">Employee Directory</h3>
       </div>
          
         <div>
            <input size="50" class="search"
              onChange={props.handleInputChange}
              value={props.value}
              placeholder="Search by name" />
          </div>
     </div>
    </header>
  </div >
    )
}

export default SearchBox