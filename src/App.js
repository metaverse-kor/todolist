import React from "react"
import Button from "./components/button";
import Input from "./components/input";

const App = () => {
  const [radio, setRadio] = React.useState()

  const handleChangeRadio = (e) => {
    setRadio(e.target.value)
  }

  return (
    <div>
      <h1>회원가입 신청</h1>

      <h3>회원 ID</h3>
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />



      <h3>Button</h3>
      <Button>클릭</Button>
    </div>
  );
}

export default App;
