"""Simple flask web app."""
from flask import (
    Flask,
    render_template,
    request,
    jsonify
)
from flask_s3 import FlaskS3
import os

app = Flask(__name__)
app.config['FLASKS3_BUCKET_NAME'] = os.environ.get('FLASKS3_BUCKET_NAME')
app.config['AWS_ACCESS_KEY_ID'] = os.environ.get('AWS_ACCESS_KEY_ID')
app.config['AWS_SECRET_ACCESS_KEY'] = os.environ.get('AWS_SECRET_ACCESS_KEY')
app.config['FLASKS3_FORCE_MIMETYPE'] = True

s3 = FlaskS3()
s3.init_app(app)


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
