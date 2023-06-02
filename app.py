#!/usr/bin/env python3
"""This is the main module."""


from flask import Flask, render_template, request, redirect, url_for, session
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from uuid import uuid4
from flask_cors import CORS
import json


app = Flask(__name__, template_folder="client/build",
            static_folder="client/build/static")
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://ckefa:ckefa@localhost/store'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = "Ckefa93948349234"
CORS(app)

db = SQLAlchemy(app)


class Customer(db.Model):
    id = db.Column(db.String(36), primary_key=True, default=str(uuid4()))
    fname = db.Column(db.String(25))
    lname = db.Column(db.String(25))
    email = db.Column(db.String(25), unique=True)
    passwd = db.Column(db.String(36))
    created = db.Column(db.Date, default=datetime.now())
    updated = db.Column(db.Date, default=datetime.now())

    def __repr__(self):
        return f"{self.fname} {self.email}"


with app.app_context():
    db.create_all()


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        user = dict(request.form)
        cust = Customer(**user)

        if res := all(i for i in cust.__dict__.values()):
            db.session.add(cust)
            db.session.commit()
            return "signup success"

        return "signup failed"

    else:
        return redirect("/")


@app.route('/login', methods=['GET', 'POST'])
def login():
    print(request.data, request.method)

    if "email" in session:
        return redirect(url_for('service'))

    elif request.method == "POST":
        user = json.loads(request.data)
        email = user["email"]
        passwd = user["passwd"]

        user = Customer.query.filter_by(email=email, passwd=passwd).first()

        if user:
            temp = user.__dict__.copy()
            del temp['passwd']
            del temp['_sa_instance_state']

            for key, val in temp.items():
                session[key] = val

            return "login success"

        else:
            print('user not found')
            return "login failed"

    else:
        return redirect("/")


@app.route('/status')
def status():
    if "email" in session:
        return json.dumps({'status': "true", 'fname': session['fname']})

    else:
        return json.dumps({"status": False})


@app.route('/logout')
def logout():
    session.pop('email', None)

    return redirect("/")


if __name__ == "__main__":
    app.run(debug=True)
