import React from "react"
import "./App.css";

function App(){
    return (
    <div className="App">
        <h1>CUSTOMER REVIEWS</h1>

        <div className="form">

        <label>First Name:</label>  
        <input type="text" name="First Name"/>
        <label>Last Name:</label>
        <input type="text" name="Last Name"/>
        <label>Address:</label>  
        <input type="text" name="Address"/>
        <label>City:</label>  
        <input type="text" name="City"/>
        <label>State:</label>  
        <input type="text" name="State"/>
        <label>Zipcode:</label>
        <input type="text" name="Zipcode"/>
        <label>Review:</label>  
        <input type="text" name="Review"/>

        <button> SUBMIT</button>
        </div>
    </div>
    );
    }

export default App;