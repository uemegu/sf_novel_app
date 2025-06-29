import React from 'react';

const Characters = ({ characters, speaker }) => {
  if (!characters || characters.length === 0) return null;

  return (
    <div className="characters-container">
      {characters.map((char) => (
        <div key={char.name} className={`character ${char.position} ${speaker !== char.name ? 'inactive' : ''}`}>
          <img src={`/images/${char.id}_${char.emotion || 'normal'}.png`} alt={char.name} />
        </div>
      ))}
    </div>
  );
};

export default Characters;