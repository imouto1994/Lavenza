from flask import Flask, request

app = Flask(__name__)


@app.route('/quickTranslator')
def api_quick_translator():
    if 'text' in request.args:
        return "FUCK"
    else:
        return "Hello, World!"


if __name__ == '__main__':
    app.run(debug=True)
