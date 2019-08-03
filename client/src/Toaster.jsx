import React from 'react';
import "./Toaster.css"
export default (props)=>{
    if(props.msg==="uploaded")
    return (
        <div>
            <div className="animated fadeInLeftBig">
           
      <div className=" card bg-success  text-black flasher" >
        <div className="card-body">uploaded Successfully</div>
      </div>
    </div>
            </div>
    )
    else{
        return(
            <div>
            <div className="animated fadeInLeftBig">
          
      <div className=" card bg-danger  text-black flasher" >
        <div className="card-body">Somthing went wrong</div>
      </div>
    </div>
            </div>
        )
    }
}