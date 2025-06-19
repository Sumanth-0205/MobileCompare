import React from 'react';
import MobileCard from './MobileCard';

const MobileList = ({
  mobiles,
  onSelect,
  selected,
  batteryWinnerId,
  cameraWinnerId,
  showComparison
}) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {mobiles.map((mobile) => (
        <MobileCard
          key={mobile.id}
          mobile={mobile}
          onSelect={onSelect}
          isSelected={selected.some((m) => m.id === mobile.id)}
          batteryWinnerId={batteryWinnerId}
          cameraWinnerId={cameraWinnerId}
          showComparison={showComparison}
        />
      ))}
    </div>
  );
};

export default MobileList;