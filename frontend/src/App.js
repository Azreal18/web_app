import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [epi, setEpi] = useState('');
  const [ppi, setPpi] = useState('');
  const [reedSpace, setReedSpace] = useState('');
  const [denier, setDenier] = useState('');
  const [warpTapeLength, setWarpTapeLength] = useState(107);
  const [weftTapeLength, setWeftTapeLength] = useState(105);
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:5000/calculate', {
      epi,
      ppi,
      reed_space: reedSpace,
      denier,
      warp_tape_length: warpTapeLength,
      weft_tape_length: weftTapeLength
    });
    setResult(response.data);
  };

  return (
    <div>
      <h1>Fabric Weight Calculator</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>EPI:</label>
          <input type="number" value={epi} onChange={(e) => setEpi(e.target.value)} required />
        </div>
        <div>
          <label>PPI:</label>
          <input type="number" value={ppi} onChange={(e) => setPpi(e.target.value)} required />
        </div>
        <div>
          <label>Reed Space:</label>
          <input type="number" value={reedSpace} onChange={(e) => setReedSpace(e.target.value)} required />
        </div>
        <div>
          <label>Denier:</label>
          <input type="number" value={denier} onChange={(e) => setDenier(e.target.value)} required />
        </div>
        <div>
          <label>Warp Tape Length:</label>
          <input type="number" value={warpTapeLength} onChange={(e) => setWarpTapeLength(e.target.value)} />
        </div>
        <div>
          <label>Weft Tape Length:</label>
          <input type="number" value={weftTapeLength} onChange={(e) => setWeftTapeLength(e.target.value)} />
        </div>
        <button type="submit">Calculate</button>
      </form>
      {result && (
        <div>
          <h2>Results</h2>
          <p>Warp Weight: {result.warp_weight}</p>
          <p>Weft Weight: {result.weft_weight}</p>
          <p>Total Weight: {result.total_weight}</p>
        </div>
      )}
    </div>
  );
}

export default App;
