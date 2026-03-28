import React from "react";
import { Bookmark } from 'lucide-react';

const Cards=(props)=>{
    return(
        <div className="card" style={{backgroundColor:props.bg}}>
            <div className="top">
                <div className="salary">
                    <h3>{props.rate}</h3>
                    <Bookmark />
                </div>
                <h1>{props.title}</h1>
            </div>
            <hr className="divider" />
            <div className="bottom">
                <div className="bottom-box">
                    <div className="circle-logo">
                        <img src={props.img} alt ={props.cmp}/>
                    </div>
                    
                    <h3>{props.title}</h3>
                </div>
                    <button>view</button>

            </div>
            
        </div>
    );
}


export default Cards;