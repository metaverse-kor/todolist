import React from "react";

const OPTION = [
    { value: "", name: "직접입력" },
    { value: "@naver.com", name: "naver.com" },
    { value: "@daum.net", name: "daum.net" },
    { value: "@google.com", name: "google.com" },
];


const SelectBox= () => {
    const changeSelectOptionHandler = (e) => {
        console.log(e.target.value);
    };

    return (
      <select onChange={changeSelectOptionHandler} >
          {OPTION.map((option) => (
              <option key={option.value} value={option.value}>
                  {option.name}
              </option>
          ))}
      </select>
  )
}

export default SelectBox