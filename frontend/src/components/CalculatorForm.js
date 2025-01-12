import React, { useState } from 'react';

const CalculatorForm = () => {
  const [formValues, setFormValues] = useState({
    epi: '',
    ppi: '',
    reedSpace: '',
    denier: '',
    warpTapeLength: '',
    weftTapeLength: ''
  });

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
    const result = await response.json();
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" name="epi" value={formValues.epi} onChange={handleChange} placeholder="EPI" />
      <input type="number" name="ppi" value={formValues.ppi} onChange={handleChange} placeholder="PPI" />
      <input type="number" name="reedSpace" value={formValues.reedSpace} onChange={handleChange} placeholder="Reed Space" />
      <input type="number" name="denier" value={formValues.denier} onChange={handleChange} placeholder="Denier" />
      <input type="number" name="warpTapeLength" value={formValues.warpTapeLength} onChange={handleChange} placeholder="Warp Tape Length" />
      <input type="number" name="weftTapeLength" value={formValues.weftTapeLength} onChange={handleChange} placeholder="Weft Tape Length" />
      <button type="submit">Calculate</button>
    </form>
  );
};

export default CalculatorForm;