import "./App.css";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spiner from "./components/Spiner";
import {filterData, apiUrl} from "./data";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const App = ()=> {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData(){
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      // output
      setCourses(output.data);
    }
    catch(error){
      toast.error("Network me koi dikat hai !")
    }
    setLoading(false);
  }
  
  useEffect(()=>{
    fetchData();
  },[]) 


  return (
    <div className="h-full bg-slate-500">
      <div><Navbar></Navbar></div>
      <div><Filter filterData={filterData}/></div>
      <div>
        {
          loading ? (<Spiner></Spiner>) : (<Cards courses={courses}></Cards>)
        }
      </div>
    </div>
  
  );
}

export default App;
