import React from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Route,  Link,} from "react-router-dom";
  
function App() {
  const handleClick = () => {
    // Redirect to the TinyPesa website
    <a href = "https://tinypesa.com"/>
  };

  const handlePay = async () => {
    const url = "https://tinypesa.com/api/v1/express/initialize";
    const data = new URLSearchParams();
    data.append("amount", "1");
    data.append("msisdn", "0757450716");
    data.append("account_no", "200");

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          ApiKey: "erwyuweoyf",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data,
      });

      if (!response.ok) {
        throw new Error("Request failed with status: " + response.status);
      }

      const responseData = await response.json();
      console.log("Payment response:", responseData);
    } catch (error) {
      alert("sorry this site is restricted")
    }
  };

  return (
    <div className="App  flex flex-col items-center justify-center ">
 

       <Router>
      <div className=" text-white text-8xl gap-5">
           
            <Link to="/">Home</Link>
            
        
      </div>
    </Router>

     
       
      <h1 className="text-4xl font-bold text-green-500 mb-8">
        Make Your Transactions Easy with CosyPay
      </h1>
      <div>
        <button
          onClick={handleClick}
          className="bg-green-300 py-2 px-4 rounded-md text-white font-semibold hover:bg-green-400 transition duration-300"
        >
          Get Started
        </button>
      </div>
      <button
        onClick={handlePay}
        className="bg-green-400 py-4 px-6 mt-4 rounded-md text-white font-semibold hover:bg-green-500 transition duration-300"
      >
        Send Money
      </button>
    </div>
  );
}

export default App;
