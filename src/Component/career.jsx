/* esLint-disable */
import React, {useState} from 'react'

function Career(props){
  let [img, ch_img] = useState(['👇']);
  let [careerDate, ch_careerDate] = useState([]);

  function img_UpClick(date){
    var image = [...img];
    image = '☝'
    ch_img(image);

    var cur_date = [...careerDate];
    cur_date = date;
    ch_careerDate(cur_date);
  }

  const datevalue = props.date;

  return(
    <div className = 'list1'>
         <h4> {props.value} <scan onClick ={ () => {img_UpClick(datevalue)}}>{img}</scan> </h4>
         <p> {careerDate}</p>
         <hr/>
    </div>
  )
}

export default Career

/*
<p> {props.date}</p>
*/
