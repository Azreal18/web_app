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