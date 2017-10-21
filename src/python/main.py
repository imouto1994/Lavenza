from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route('/quickTranslator')
def api_quick_translator():
    if 'text' in request.args:
        return jsonify({"text": "Fuck"})
    else:
        return jsonify({"text": "Hello, World!"})


if __name__ == '__main__':
    app.run(debug=True)
