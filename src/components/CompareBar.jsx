import React from 'react';

const CompareBar = ({ selected, onCompare }) => {
  return (
    <div style={{ margin: '1rem 0' }}>
      <button
        onClick={onCompare}
        disabled={selected.length < 2}
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: selected.length >= 2 ? '#2563eb' : '#ccc',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: selected.length >= 2 ? 'pointer' : 'not-allowed'
        }}
      >
        Compare Selected Mobiles
      </button>
    </div>
  );
};

export default CompareBar;