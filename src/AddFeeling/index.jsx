import React from 'react';
import './style.css';
import RadioFeeling from './RadioFeeling';

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
          <RadioFeeling feeling="good" />
          <RadioFeeling feeling="nice" />
          <RadioFeeling feeling="angry" />
          <RadioFeeling feeling="disappointed" />
          <RadioFeeling feeling="sad" />
        </div>
        <div>있었던 일</div>
        <div className="what-happened"><textarea /></div>
      </div>
    );
  }
}

export default AddFeeling;
