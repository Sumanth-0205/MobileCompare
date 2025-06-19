import React from 'react';

const ComparisonView = ({ selected }) => {
  if (selected.length < 2) return null;

  // Utility to get numeric RAM value
  const ramValue = (ram) => parseInt(ram.replace(/\D/g, '')) || 0;

  // Determine best specs
  const batteryWinner = selected.reduce((max, m) =>
    m.battery > max.battery ? m : max
  );
  const cameraWinner = selected.reduce((max, m) =>
    m.camera > max.camera ? m : max
  );
  const ramWinner = selected.reduce((max, m) =>
    ramValue(m.ram) > ramValue(max.ram) ? m : max
  );

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '1rem'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', width: '100%' }}>
        {selected.map((mobile) => (
          <div key={mobile.id} style={{ textAlign: 'center', margin: '1rem' }}>
            <h2>{mobile.name}</h2>
            <img src={mobile.image} alt={mobile.name} width="100" />
            <p>Battery: {mobile.battery}mAh</p>
            <p>RAM: {mobile.ram}</p>
            <p>Camera: {mobile.camera}MP</p>
          </div>
        ))}
      </div>

      {/* 🏆 Smart Summary */}
      <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
        <p><strong>{batteryWinner.name}</strong> has the most battery</p>
        <p><strong>{ramWinner.name}</strong> has the most RAM</p>
        <p><strong>{cameraWinner.name}</strong> has the highest camera megapixels</p>
      </div>
    </div>
  );
};

export default ComparisonView;