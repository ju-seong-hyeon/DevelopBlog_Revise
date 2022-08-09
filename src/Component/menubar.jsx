import React from 'react'
import Main from './main';

function Menubar(){
  const com = 1;
  function ch_com1(com){
    com = 1;
    return com;
  }
  function ch_com2(com){
    com = 2;
    return com;
  }
    return(
        <div className = 'gray-nav'>
        <button onClick ={ () => {}}> 동원 엔터프라이즈</button>
        <button onClick ={ () => {}}> 전자통신연구원   </button>
        <Main com = {com}/>
        </div>
    )
}

export default Menubar;