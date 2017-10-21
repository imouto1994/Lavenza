from flask import Flask, request, jsonify
from QuickTranslator.translate import translate

app = Flask(__name__)


@app.route('/quickTranslator')
def api_quick_translator():
    if 'text' in request.args:
        return jsonify({"text": translate(request.args['text'])})
    else:
        return jsonify({"text": "No text query"})


if __name__ == '__main__':
    app.run(debug=True)
