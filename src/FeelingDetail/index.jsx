import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cover from '../Cover';
import AddFeeling from '../AddFeeling';

class FeelingDetail extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Cover />} />
        <Route path="/add-feeling" element={<AddFeeling />} />
      </Routes>
    );
  }
}

export default FeelingDetail;
