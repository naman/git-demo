// 文件路径: src/components/DestinationConfirmation/index.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function DestinationConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { destination } = location.state; // 从state获取目的地信息

  const handleConfirm = () => {
    navigate('/destination/success'); // 用户确认后导航到成功页面
  };

  return (
    <div>
      <h2>Confirm Your Destination</h2>
      <p>You entered: {destination}</p>
      <button onClick={handleConfirm}>Confirm</button>
    </div>
  );
}

export default DestinationConfirmation;
