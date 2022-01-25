import React from "react"
import Button from "./components/button";
import Input from "./components/input";
import Select from "./components/select";



const App = () => {

  return (
    <div>
      <h1>회원가입 신청</h1>

      <h3>회원 ID</h3>
        <label htmlFor="">회원 ID</label>
        <Input placeholder="아이디를 입력해주세요"/><br/>
        <label htmlFor="">비밀번호</label>
        <Input placeholder="비밀번호를 입력해주세요"/><br/>
        <label htmlFor="">비밀번호 확인</label>
        <Input placeholder="비밀번호를 다시 입력해주세요"/><br/>
        <label htmlFor="">이메일</label>
        <Input placeholder="이메일 주소를 입력해주세요"/>@<Select />
        <br/>
      <Button>회원가입</Button>
    </div>
  );
}

export default App;
