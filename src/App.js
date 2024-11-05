import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BoardList from './BoardList';
import Write from './Write';
import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

export default class App extends Component {
  state = {
    isModifyMode: false, // 수정모드
    isComplete: true, // 렌더 완료(목록 출력 완료)
    boardId: 0, // 수정, 삭제할 글 번호
    redirect: false // 주소 변경 상태 추가
  }

  handleModify = (checkList) => {
    if (checkList.length === 0) {
      alert('수정할 게시글을 선택하세요');
    } else if (checkList.length > 1) {
      alert('하나의 게시글만 선택하세요');
    }
    this.setState({
      isModifyMode: checkList.length === 1,
      boardId: checkList[0] || 0,
      redirect: true
    });
  }

  handleCancel = () => {
    this.setState({
      isModifyMode: false,
      isComplete: false,
      boardId: 0
    });
  }

  componentDidUpdate() {
    // 리다이렉트 후 redirect 상태 초기화
    if (this.state.redirect) {
      this.setState({ redirect: false });
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <h1>React Board</h1>
          {this.state.redirect && <Navigate to="/write" replace />}  {/* Navigate로 조건부 리다이렉트 */}
          <Routes>
            <Route path="/" element={<BoardList isComplete={this.state.isComplete} handleModify={this.handleModify} />} />
            <Route path="/write" element={<Write 
              isModifyMode={this.state.isModifyMode}
              boardId={this.state.boardId}
              handleCancel={this.handleCancel}
            />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
