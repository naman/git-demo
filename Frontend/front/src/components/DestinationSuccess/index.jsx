// 文件路径: src/components/DestinationSuccess/index.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function DestinationSuccess() {
  return (
    <div>
      <h2>Destination Submitted Successfully!</h2>
      <p>Your destination has been recorded. Safe travels!</p>
      <Link to="/">Back to Main Page</Link>
    </div>
  );
}

export default DestinationSuccess;
