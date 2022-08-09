/* esLint-disable */
import React, {useState} from 'react'

function Career(props){
  var param = props.param;
  return(
    <div className = 'list1'>
        {param === 0 && <h3> {props.value1} {props.value}  😀  </h3>}
        {param === 0 && <font size = "3"> {props.date1}{props.date} </font>}
        {param === 1 && <h4> {props.value1} {props.value} </h4>}
        {param === 1 && <p> {props.date1}{props.date}</p>}

       <hr/>
    </div>
  )
}

export default Career