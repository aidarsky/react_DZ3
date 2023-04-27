import React, { useState } from 'react';

function App() {
  const [square1Color, setSquare1Color] = useState('red');
  const [square2Color, setSquare2Color] = useState('blue');

  function handleClickSquare1() {
    setSquare1Color(square2Color);
    setSquare2Color(square1Color);
  }

  function handleClickSquare2() {
    setSquare2Color(square1Color);
    setSquare1Color(square2Color);
  }

  return (
    <div>
      <div
        style={{ width: '100px', height: '100px', backgroundColor: square1Color }}
        onClick={handleClickSquare1}
      />
      <div
        style={{ width: '100px', height: '100px', backgroundColor: square2Color }}
        onClick={handleClickSquare2}
      />
    </div>
  );
}

export default App;
