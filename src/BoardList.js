import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Axios from "axios";

const submitTest = ()=>{
  //react->서버 요청을 보내고, 그 결과를 출력
  Axios.get('http://localhost:8000/')
  .then(function (response) {
    alert('등록 완료!');
    console.log(response);
  })
  .catch(function (error) {
    // 에러 핸들링
    console.log(error);
  });
}


export default class BoardList extends Component {
  render() {
    return (
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>안녕하세요</td>
              <td>admin</td>
              <td>2024-11-04</td>
            </tr>
            <tr>
              <td>2</td>
              <td>안녕하세요</td>
              <td>admin</td>
              <td>2024-11-04</td>
            </tr>
            <tr>
              <td>3</td>
              <td>안녕하세요</td>
              <td>admin</td>
              <td>2024-11-04</td>
            </tr>
          
          </tbody>
        </Table>
        <div className="d-flex gap-1">
          <Button variant="primary" onClick={submitTest}>글쓰기</Button>
          <Button variant="secondary">수정하기</Button>
          <Button variant="danger">삭제하기</Button>
        </div>      
      </>
    )
  }
}
