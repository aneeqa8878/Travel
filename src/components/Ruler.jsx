import React, { useState } from 'react';

function Ruler() {
  const [maxPrice, setMaxPrice] = useState(0); // State to store the max price value

  // Handle the change event of the input range
  const handleOnChange = (e) => {
    setMaxPrice(e.target.value); // Update the max price value in the state
  };

  return (
    <div className="ruler-container">
      {/* Display the max price value */}
      <p className='' style={{color:'black'}}>Max Price: ${maxPrice}</p>

      {/* Your ruler implementation */}
      <input 
        type="range" 
        min="0" 
        max="100" 
        step="1" 
        value={maxPrice} // Set the value of the input to maxPrice
        onChange={handleOnChange} // Handle the change event
      />
    </div>
  );
}

export default Ruler;
