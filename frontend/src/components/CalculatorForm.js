import React, { useState } from "react";

const CalculatorForm = () => {
  const [formValues, setFormValues] = useState({
    epi: "",
    ppi: "",
    reedSpace: "",
    denier: "",
    warpTapeLength: 107,
    weftTapeLength: 105,
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/calculate-weight/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formValues,
        epi: parseInt(formValues.epi),
        ppi: parseInt(formValues.ppi),
        reed_space: parseFloat(formValues.reedSpace),
        denier: parseInt(formValues.denier),
        warp_tape_length: parseInt(formValues.warpTapeLength),
        weft_tape_length: parseInt(formValues.weftTapeLength),
      }),
    });
    const data = await response.json();
    setResult(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>EPI:</label>
        <input type="number" name="epi" value={formValues.epi} onChange={handleChange} required />

        <label>PPI:</label>
        <input type="number" name="ppi" value={formValues.ppi} onChange={handleChange} required />

        <label>Reed Space:</label>
        <input type="number" name="reedSpace" value={formValues.reedSpace} onChange={handleChange} required />

        <label>Denier:</label>
        <input type="number" name="denier" value={formValues.denier} onChange={handleChange} required />

        <label>Warp Tape Length:</label>
        <input type="number" name="warpTapeLength" value={formValues.warpTapeLength} onChange={handleChange} />

        <label>Weft Tape Length:</label>
        <input type="number" name="weftTapeLength" value={formValues.weftTapeLength} onChange={handleChange} />

        <button type="submit">Calculate</button>
      </form>

      {result && (
        <div>
          <h3>Results:</h3>
          <p>Warp Weight: {result.warp_weight.toFixed(2)}</p>
          <p>Weft Weight: {result.weft_weight.toFixed(2)}</p>
          <p>Total Weight: {result.total_weight.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default CalculatorForm;
