import os
from flask_wtf import FlaskForm
from wtforms import StringField, RadioField, SubmitField
from flask import Flask, render_template, redirect, request, jsonify, send_file, make_response
from flask_cors import CORS
import json
import print_pages


app = Flask("__main__")
cors = CORS(app)


@app.route('/', methods=("GET", "POST"))
def index():
    test_object = [
        {"id": 0, "title": "Title", "inputFields": [{"name": "Text One", "placeholder": "Text One"}, {
            "name": "Text Two", "placeholder": "Text Two"}]},
        {"id": 1, "title": "Title Two", "inputFields": [{"name": "Text Three", "placeholder": "Text Three"}, {
            "name": "Text Four", "placeholder": "Text Four"}]},
        {"id": 2, "title": "Title 3", "inputFields": [
            {"name": "Text 5", "placeholder": "Text 5", "type": "password"}, {"name": "Text 6", "placeholder": "Text 6"}]},
        {"id": 3, "title": "Title 4", "inputFields": [{"name": "Text 7", "placeholder": "Text 7", "type": "radio"}, {"name": "Text 8", "placeholder": "Text 8"}]}]
    return jsonify(test_object)


@app.route("/download", methods=("GET", "POST"))
def download():
    data = request.get_json()
    print(data)
    if os.path.isfile("Steuerliche Erfassung.pdf"):
        os.remove("Steuerliche Erfassung.pdf")
    print_pages.__init__(data)
    path = "Steuerliche Erfassung.pdf"
    print("send_pdf")
    resp = make_response(send_file(path, attachment_filename="Steuerliche Erfassung.pdf", as_attachment=True),200)
    resp.mimetype = "attachment/pdf"
    return resp


if __name__ == "__main__":
    app.run(host="0.0.0.0", port="80")
