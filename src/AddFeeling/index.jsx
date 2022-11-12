import React from 'react';
import './style.css';

class AddFeeling extends React.Component {
  render() {
    return (
      <div className="add-feeling">
        <div>날짜</div>
        <div>2022. 11. 29</div>
        <div>날씨</div>
        <div>맑음</div>
        <div>기분</div>
        <div>
          <label htmlFor="feeling-good">
            <input type="radio" id="feeling-good" />
            <img src={`${process.env.PUBLIC_URL}/images/feeling-good.svg`} alt="" />
          </label>
          <label htmlFor="feeling-nice">
            <input type="radio" id="feeling-nice" />
            <img src={`${process.env.PUBLIC_URL}/images/feeling-nice.svg`} alt="" />
          </label>
          <label htmlFor="feeling-disappointed">
            <input type="radio" id="feeling-disappointed" />
            <img src={`${process.env.PUBLIC_URL}/images/feeling-disappointed.svg`} alt="" />
          </label>
          <label htmlFor="feeling-angry">
            <input type="radio" id="feeling-angry" />
            <img src={`${process.env.PUBLIC_URL}/images/feeling-angry.svg`} alt="" />
          </label>
          <label htmlFor="feeling-sad">
            <input type="radio" id="feeling-sad" />
            <img src={`${process.env.PUBLIC_URL}/images/feeling-sad.svg`} alt="" />
          </label>
        </div>
        <div>있었던 일</div>
        <div className="what-happened"><textarea /></div>
      </div>
    );
  }
}

export default AddFeeling;
