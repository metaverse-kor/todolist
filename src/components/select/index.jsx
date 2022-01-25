import React, { useState } from "react";

const OPTION = [
    { value: "", name: "직접입력" },
    { value: "naver.com", name: "naver.com" },
    { value: "daum.net", name: "daum.net" },
    { value: "google.com", name: "google.com" },
    { value: "yhooo.co.kr", name: "yhooo.co.kr" },
    { value: "엔타로테사다르", name: "엔타로테사다르.com" },
];


const SelectBox= () => {
    const [inputValue, setInputValue] = useState('');
    let inputRef = false;
    const changeSelectOptionHandler = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value);
        if(e.target.value!==""){
            console.log('들어옴')
            inputRef = true;
            console.log('inputRef =' +inputRef)
        }
    };

    return (
      <>
      <input type="text" value={inputValue} onChange={changeSelectOptionHandler} disabled={inputRef}/>

      <select onChange={changeSelectOptionHandler} >
          {OPTION.map((option) => (
              <option key={option.value} value={option.value}>
                  {option.name}
              </option>
          ))}
      </select>
      </>
  )
}

export default SelectBox