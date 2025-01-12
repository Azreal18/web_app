from fastapi import FastAPI
from api.calculate import calculate_weight

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to the Fabric Calculator API"}

@app.post("/calculate-weight/")
def calculate_weight_api(epi: int, ppi: int, reed_space: float, denier: int, warp_tape_length: int = 107, weft_tape_length: int = 105):
    return calculate_weight(epi, ppi, reed_space, denier, warp_tape_length, weft_tape_length)
