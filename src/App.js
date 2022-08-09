/* esLint-disable */

import React, {useState} from 'react'
import './App.css';
import Career from './Component/career';
import Career1 from './Component/career1';
import Header from './Component/header';
import Menubar from './Component/menubar';
import Main from './Component/main';

function App() {


  return (
    <div>
        <Header/>
        <Main/>
    </div>
  );
}


export default App;
/*
function Change_title(){
    var newArray = [...title];
    newArray[0] = '동원 엔터프라이즈 퇴사'
    ch_title(newArray);
  }

{com == 0 && <Career value = {title[0]} date = {carearDate[0]} param = {0}/>}
        {com == 0 && <Career value = {title[1]} date = {carearDate[1]} param = {1}/>}
        {com == 0 && <Career value = {title[2]} date = {carearDate[2]} param = {1}/>}
        {com == 0 && <Career value = {title[3]} date = {carearDate[3]} param = {1}/>}

        {com == 1 && <Career1 value1 = {title1[0]} date1 = {carearDate1[0]} param1 = {0}/>}
        {com == 1 && <Career1 value1 = {title1[1]} date1 = {carearDate1[1]} param1 = {1}/>}
        {com == 1 && <Career1 value1 = {title1[2]} date1 = {carearDate1[2]} param1 = {1}/>}

let [title, ch_title] = useState(['동원 엔터프라이즈 입사', '프로젝트 1 : 사용자 귀속부서 변경' , '프로젝트 2 : SMS 전송 내역 및 통계 현황', '인턴 프로젝트 발표']);
  let [carearDate, ch_carearDate] = useState(['2022년 6월 27일 ~', '2022년 7월 4일 ~ 2022년 7월 25일', '2022년 7월 27일 ~ 2022년 8월 3일' , '2022년 8월 3일']);

  let [title1, ch_title1] = useState(['전자통신연구원 입사', '프로젝트 : 머신러닝 기반 소방도면기호 인식 알고리즘 개발', '인턴 프로젝트 발표']);
  let [carearDate1, ch_carearDate1] = useState(['2020년 7월 1일 ~ 2020년 8월 31일', '2020년 7월 6일 ~ 2020년 8월 26일', '2020년 8월 27일']);
  const com = 0;
let [title1, ch_title1] = useState(['전자통신연구원 입사', '프로젝트 : 머신러닝 기반 소방도면기호 인식 알고리즘 개발', '인턴 프로젝트 발표']);
  let [carearDate1, ch_carearDate1] = useState(['2020년 7월 1일 ~ 2020년 8월 31일', '2020년 7월 6일 ~ 2020년 8월 26일', '2020년 8월 27일']);
function ch_com1(com){
    com = 0;

    var newArray = [...title1];
    newArray[0] = ''
    newArray[1] = ''
    newArray[2] = ''
    ch_title1(newArray);

    var newArray1 = [...carearDate1]
    newArray1[0] = ''
    newArray1[1] = ''
    newArray1[2] = ''
    ch_carearDate1(newArray1);

    var newArray2 = [...title];
    newArray2[0] = '동원 엔터프라이즈 입사'
    newArray2[1] = '프로젝트 1 : 사용자 귀속부서 변경'
    newArray2[2] = '프로젝트 2 : SMS 전송 내역 및 통계 현황'
    newArray2[3] = '인턴 프로젝트 발표'
    ch_title(newArray2);

    var newArray3 = [...carearDate]
    newArray3[0] = '2022년 6월 27일 ~'
    newArray3[1] = '2022년 7월 4일 ~ 2022년 7월 25일'
    newArray3[2] = '2022년 7월 27일 ~ 2022년 8월 3일'
    newArray3[3] = '2022년 8월 3일'
    ch_carearDate(newArray3);

    return com;
  }
  function ch_com2(com){
    com = 1;

    var newArray = [...title];
    newArray[0] = ''
    newArray[1] = ''
    newArray[2] = ''
    newArray[3] = ''
    ch_title(newArray);

    var newArray1 = [...carearDate]
    newArray1[0] = ''
    newArray1[1] = ''
    newArray1[2] = ''
    newArray1[3] = ''
    ch_carearDate(newArray1);

    var newArray3 = [...title1];
    newArray3[0] = '전자통신연구원 입사'
    newArray3[1] = '프로젝트 : 머신러닝 기반 소방도면기호 인식 알고리즘 개발'
    newArray3[2] = '인턴 프로젝트 발표'
    ch_title1(newArray3);

    var newArray4 = [...carearDate1]
    newArray4[0] = '2020년 7월 1일 ~ 2020년 8월 31일'
    newArray4[1] = '2020년 7월 6일 ~ 2020년 8월 26일'
    newArray4[2] = '2020년 8월 27일'
    ch_carearDate1(newArray4);
    return com;
  }
*/