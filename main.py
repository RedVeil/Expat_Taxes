import os
from flask_wtf import FlaskForm
from wtforms import StringField, RadioField, SubmitField
from flask import Flask, render_template, redirect, request, jsonify
from flask_cors import CORS
import json



app = Flask("__main__",)
cors = CORS(app)

@app.route('/', methods=("GET","POST"))    
def index():
    test_object=[{"key":"value1"},{"key":"value2"}]
    return jsonify(test_object)


if __name__=="__main__":
    app.run(debug=True)