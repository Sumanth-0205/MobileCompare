import React from 'react';

const MobileCard = ({
  mobile,
  onSelect,
  isSelected,
  batteryWinnerId,
  cameraWinnerId,
  showComparison
}) => {
  const isBatteryWinner = mobile.id === batteryWinnerId;
  const isCameraWinner = mobile.id === cameraWinnerId;

  return (
    <div
      onClick={() => onSelect(mobile)}
      style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
        margin: '12px',
        padding: '16px',
        cursor: 'pointer',
        border: isSelected ? '2px solid #3b82f6' : '1px solid #ccc'
      }}
    >
      <img
        src={mobile.image}
        alt={mobile.name}
        style={{
          width: '100%',
          height: '190px',
          objectFit: 'cover',
          borderRadius: '8px'
        }}
      />
      <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '10px' }}>
        {mobile.name}
      </h2>

      <div style={{ marginTop: '10px', fontSize: '14px', color: '#374151' }}>
        <p style={{ margin: 0 }}>Battery: {mobile.battery}mAh</p>
        {showComparison && isBatteryWinner && (
          <div style={{
            backgroundColor: 'limegreen',
            color: 'white',
            padding: '4px 8px',
            fontSize: '12px',
            fontWeight: 'bold',
            borderRadius: '12px',
            display: 'inline-block',
            marginTop: '4px'
          }}>
            🔋 Best Battery
          </div>
        )}
        <p style={{ marginTop: '10px', marginBottom: 0 }}>Camera: {mobile.camera}MP</p>
        {showComparison && isCameraWinner && (
          <div style={{
            backgroundColor: 'dodgerblue',
            color: 'white',
            padding: '4px 8px',
            fontSize: '12px',
            fontWeight: 'bold',
            borderRadius: '12px',
            display: 'inline-block',
            marginTop: '4px'
          }}>
            📸 Best Camera
          </div>
        )}
        <p style={{ marginTop: '10px' }}>RAM: {mobile.ram}</p>
      </div>
    </div>
  );
};

export default MobileCard;