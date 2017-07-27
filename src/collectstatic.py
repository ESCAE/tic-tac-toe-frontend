"""Module to automate static collection."""
import flask_s3
from tictac import app
flask_s3.create_all(app)
