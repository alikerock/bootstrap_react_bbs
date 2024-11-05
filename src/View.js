import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Axios from "axios";
import { Link } from "react-router-dom";


export default class View extends Component {
  state= {
    title:'',
    content:''
  }

  datail = () =>{
    //글번호에 맞는 데이터 조회, 글 결과를 title, content반영, 수정모드 true    
    Axios.get(`http://localhost:8000/detail?id=${this.props.boardId}`)
    .then((res) => {
      const {data} = res;  
      this.setState({
        title:data[0].BOARD_TITLE,
        content: data[0].BOARD_CONTENT     
      })
    })
    .catch((e)=> {
      // 에러 핸들링
      console.log(e);
    });     
  }
  //this.prop.isModifyMode에 변동사항이 생기면 detail 함수 실행, componentDidUpdate 함수로 

  componentDidMount() {    
    // if () {  
    //   this.datail();
    // }
  }
  render() {
    return (     
      <div>
        {this.state.title}
        {this.state.content}
        <Link to="/" className="btn btn-secondary">목록</Link>  
      </div>      
    )
  }
}
