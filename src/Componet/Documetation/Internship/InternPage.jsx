/** @format */

import "./internpage.css";
import DataDB from "../../../DB/DataBase.json";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
let InternPage = () => {
  // Dispatch and Subscribe
  const button = document.querySelectorAll("viewMore");
  const ref = useRef(null);
  const theme = useSelector((state) => state.theme.theme);


  useEffect(() => {
    let body=document.querySelector('body');
    let box=document.querySelectorAll('.BoxContent');
    body.classList.toggle('alternate');
    box.forEach((element)=>{
      element.classList.toggle('alternate');
    });
    

    //eslint-disable-next-line
  }, [theme==='dark']); 

  //
  // function handleClick(){

  //   // console.log(ref.current.className + ' ' +"MoreDetails");
  //   // console.log(ref.current)
  //   let see=ref.current.parentElement.classList.toggle('MoreDetails');
  //   // console.log(see)
  //   // btn.parentElement.classList.toggle
  //   // see.classList.toggle('MoreDetails');

  // }
  // for(let btn in button){
  // btn.parentElement.classList.toggle('MoreDetails');
  // }

  return (
    <div style={{
      backgroundColor: theme === "light" ? "white" : "black",
      color: theme === "light" ? "black" : "white",
     }}>
      <div className="internBox">
        {DataDB.map((item, index) => {
          return (
            <div className="BoxContent" key={index}>
              <img className="ApiImg"  src={item.image} alt="" />
              <h2 className="InternTitle" ref={ref}>
                {item.internship_name}
              </h2>
              <div className="time">
                <div className="mode">{item.mode}</div>
                <div className="duration">{item.duration}</div>
              </div>
              <p className="desc">{item.description}</p>
              {/* ----------write logic for this */}
              {/* <div className="fullBox">
              <h5 className='company_name'>{item.company_name}</h5>
              <h5 className='Stipend'>{item.award}</h5>
              <h5 className='internship_type'>{item.internship_type}</h5>
              <button className='ApplyButton'>Apply Now ✅</button>
            </div> */}

              <button
                className="viewMore"
                id="btn"
                style={{ cursor: "pointer" }}
                ref={ref}
                onClick={() => {
                  window.open(item.link);
                }}
              >
                Apply Now
              </button>
            </div>
          );
        })}
      </div>
      <hr style={{width:'90vw',marginInline:'auto'}} />
      
    </div>
  );
};

export default InternPage;
