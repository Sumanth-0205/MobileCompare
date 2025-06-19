import React, { useState, useEffect } from 'react';
import { mobiles } from './data/mobiles';
import MobileList from './components/MobileList';
import CompareBar from './components/CompareBar';
import ComparisonView from './components/ComparisonView';

function App() {
  const [selected, setSelected] = useState([]);
  const [showComparison, setShowComparison] = useState(false);
  const [batteryWinnerId, setBatteryWinnerId] = useState(null);
  const [cameraWinnerId, setCameraWinnerId] = useState(null);

  const handleSelect = (mobile) => {
    setSelected((prev) =>
      prev.some((m) => m.id === mobile.id)
        ? prev.filter((m) => m.id !== mobile.id)
        : [...prev, mobile]
    );
    setShowComparison(false);
    setBatteryWinnerId(null);
    setCameraWinnerId(null);
  };

  const handleCompare = () => {
    if (selected.length >= 2) {
      setShowComparison(true);
    }
  };

  const getWinners = (phones) => {
    if (phones.length < 2) return { batteryId: null, cameraId: null };

    const batteryWinner = phones.reduce((a, b) => (a.battery > b.battery ? a : b));
    const cameraWinner = phones.reduce((a, b) => (a.camera > b.camera ? a : b));

    return {
      batteryId: batteryWinner.id,
      cameraId: cameraWinner.id,
    };
  };

  useEffect(() => {
    if (showComparison && selected.length >= 2) {
      const { batteryId, cameraId } = getWinners(selected);
      setBatteryWinnerId(batteryId);
      setCameraWinnerId(cameraId);
    }
  }, [showComparison, selected]);

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Mobile Comparison App</h1>
      <MobileList
        mobiles={mobiles}
        onSelect={handleSelect}
        selected={selected}
        batteryWinnerId={batteryWinnerId}
        cameraWinnerId={cameraWinnerId}
        showComparison={showComparison}
      />
      <CompareBar selected={selected} onCompare={handleCompare} />
      <ComparisonView selected={selected} />
    </div>
  );
}

export default App;