import os
from flask_wtf import FlaskForm
from wtforms import StringField, RadioField, SubmitField
from flask import Flask, render_template, redirect, request, jsonify, send_file, make_response, send_from_directory
from flask_cors import CORS
import json
import print_pages
import db_connection


app = Flask("__main__")
cors = CORS(app)

@app.route('/', methods=["GET", "POST"])
def index():
    inputs = db_connection.set_up()
    return jsonify(inputs)


@app.route("/download", methods=["GET", "POST"])
def download():
    data = request.get_json()
    print(data)
    if os.path.isfile("Steuerliche Erfassung.pdf"):
        os.remove("Steuerliche Erfassung.pdf")
    print_pages.__init__(data)
    resp = make_response("successfull", 200)
    return resp

@app.route("/pdf", methods=["GET"])
def root():
    return send_from_directory('C://Users//Leon//Expat_Taxes', "Steuerliche Erfassung.pdf", as_attachment=True)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port="80", debug=True)
