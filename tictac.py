"""Simple flask web app."""
from flask import (
    Flask,
    render_template,
    request,
    jsonify
)

app = Flask(__name__)


@app.route("/")
def game():
    """Game Viev."""
    return render_template('game.html')


@app.route("/about")
def about():
    """About View."""
    return "Hello World!"


@app.route('/api/v1.0/move', methods=['POST'])
def send_move():
    """."""
    data = request.json
    data['board'] = data['board'].replace(' ', 'O', 1)
    return jsonify(data), 201

if __name__ == "__main__":
    app.run(debug=True)
