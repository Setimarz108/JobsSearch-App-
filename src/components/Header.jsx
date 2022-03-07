import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
 
  return (  

  <div>
     <div style={{display:"flex", alignItems: "center", justifyContent: "space-between",backgroundColor:"#5865F2", width:"100%", color:"#FFFFFF", 
    boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px "}}>
         <h1 style={{marginLeft:"15%"}}>JOB SEARCH</h1>
     
     <Link to="/favourites" className="btn btn-primary">
              Favourites
            </Link></div>
  </div>);
}


