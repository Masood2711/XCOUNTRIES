import React, {useEffect,useState} from "react";
import "./App.css";

function App(){
    const [countries, setCountries]= useState([]);

    useEffect(()=>{
        const fetchCountries= async()=>{
            try{
                const response=await fetch("https://xcountries-backend.labs.crio.do/all");

                const data=await response.json();
                setCountries(data);
            }catch(error){
                console.error("Error fetching data: ",error);
            }
        }
        fetchCountries();
    },[]);

    return (
        <div className="App">
            <div className="countries-container">
                {countries.map((country)=>{
                    return(
                        <div className="country-card" key={country.abbr}>
                            <img className="country-flag" src={country.flag} alt={country.name}/>
                            <p className="country-name">{country.name}</p>
                        </div>
                    );
                })};
            </div>
        </div>
    )
}

export default App;