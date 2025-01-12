from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.json
    epi = data.get('epi')
    ppi = data.get('ppi')
    reed_space = data.get('reed_space')
    denier = data.get('denier')
    warp_tape_length = data.get('warp_tape_length', 107)
    weft_tape_length = data.get('weft_tape_length', 105)

    warp_weight = (epi * reed_space * denier * warp_tape_length) / 90000
    weft_weight = (ppi * reed_space * denier * weft_tape_length) / 90000
    total_weight = warp_weight + weft_weight

    return jsonify({
        'warp_weight': warp_weight,
        'weft_weight': weft_weight,
        'total_weight': total_weight
    })

if __name__ == '__main__':
    app.run(debug=True)
