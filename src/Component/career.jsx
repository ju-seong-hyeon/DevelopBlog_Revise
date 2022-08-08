/* esLint-disable */
import React, {useState} from 'react'

function Career(props){
  var [img, ch_img] = useState(['👇']);
  var [count, ch_count] = useState(0);
  var [careerDate, ch_careerDate] = useState([]);

   function img_UpClick(date){
            var image = [...img];
            if(image == '👇'){
              image = '☝'
              ch_img(image);

              var cur_date = date;
              ch_careerDate(cur_date);
            }
            else{
              image = '👇'
              ch_img(image);
              ch_careerDate("");
            }
          }

  var datevalue = props.date;
  var param = props.param;
  return(
    <div className = 'list1'>

    {param === 0 && <h3> {props.value} <span onClick = { ()=>{ ch_count(count+1) } }> 😀 </span> {count}</h3>}
    {param === 0 && <font size = "3"> {props.date} </font>}
    {param === 1 && <h4> {props.value} <scan onClick ={ () => {img_UpClick(datevalue)}}>{img}</scan> </h4>}
       <p> {careerDate}</p>
       <hr/>
    </div>
  )
}

export default Career
