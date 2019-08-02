import React from 'react';

export default (props)=>{
    if(props.msg==="uploaded")
    return (
        <div>
            <div className="animated fadeInLeftBig">
          
      <div className=" card bg-danger  text-black flashcard" >
        <div className="card-body">uploaded Successfully</div>
      </div>
    </div>
            </div>
    )
    else{
        return(
            <div>
            <div className="animated fadeInLeftBig">
          
      <div className=" card bg-danger  text-black flashcard" >
        <div className="card-body">Somthing went wrong</div>
      </div>
    </div>
            </div>
        )
    }
}