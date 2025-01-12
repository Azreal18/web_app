def calculate_weight(epi, ppi, reed_space, denier, warp_tape_length=107, weft_tape_length=105):
    warp_weight = (epi * reed_space * denier * warp_tape_length) / 90000
    weft_weight = (ppi * reed_space * denier * weft_tape_length) / 90000
    total_weight = warp_weight + weft_weight
    return {"warp_weight": warp_weight, "weft_weight": weft_weight, "total_weight": total_weight}