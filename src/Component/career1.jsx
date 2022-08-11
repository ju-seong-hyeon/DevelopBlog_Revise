/* esLint-disable */
import React, {useState} from 'react'

function Career1(props){
  var [img, ch_img] = useState(['👇']);
  var [count1, ch_count] = useState(0);
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

<<<<<<< HEAD
  var datevalue = props.date;
  var param = props.param;

  return(
    <div className = 'list1'>

    {param === 0 && <h3> {props.value} <span onClick = { ()=>{ ch_count(count1+1) } }> 😀 </span> {count1}</h3>}
    {param === 0 && <font size = "3"> {props.date} </font>}
=======
  var datevalue = props.date1;
  var param = props.param1;
  return(
    <div className = 'list1'>

    {param === 0 && <h3> {props.value1} <span onClick = { ()=>{ ch_count(count1+1) } }> 😀 </span> {count1}</h3>}
    {param === 0 && <font size = "3"> {props.date1} </font>}
>>>>>>> 76b55475949973aa458db1fb689ef9124b8a3564
    {param === 1 && <h4> {props.value} <scan onClick ={ () => {img_UpClick(datevalue)}}>{img}</scan> </h4>}
       <p> {careerDate}</p>
       <hr/>
    </div>
  )
}

<<<<<<< HEAD
export default Career1
=======
export default Career1
>>>>>>> 76b55475949973aa458db1fb689ef9124b8a3564
