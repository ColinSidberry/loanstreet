import os

from flask import Flask, request, jsonify
from flask_debugtoolbar import DebugToolbarExtension
from flask_cors import CORS

from models import db, connect_db, Loan

import dotenv
dotenv.load_dotenv()

app = Flask(__name__)
CORS(app)

# Get DB_URI from environ variable (useful for production/testing) or,
# if not set there, use development local db.
app.config['SQLALCHEMY_DATABASE_URI'] = (os.environ['DATABASE_URL'].replace("postgres://", "postgresql://"))
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = False
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = True
app.config['SECRET_KEY'] = os.environ['SECRET_KEY']
toolbar = DebugToolbarExtension(app)

connect_db(app)


##############################################################################
# User signup/login/logout

@app.post('/')
def add_loan():
    """Adds a loan to the loan database"""
    data = request.json
    
    loan = Loan(
        amount=data['amount'], 
        interest_rate=data['interest_rate'],
        term = data['term'],
        month_payment = data['month_payment'],
    )

    db.session.add(loan)
    db.session.commit()
    serialized = Loan.serialize(loan)
    return jsonify(loan=serialized)

@app.get('/<int:loan_id>')
def get_loan(loan_id):
    """Gets a loan via its id"""
    loan = Loan.query.get_or_404(loan_id)
    serialized = Loan.serialize(loan)

    return jsonify(loan=serialized)

@app.patch('/<int:loan_id>')
def update_loan(loan_id):
    """Updates a loan. Reutrns updated loan."""
    loan = Loan.query.get_or_404(loan_id)
    newData = request.json
    for key, value in newData.items():
        setattr(loan,key,value)
    
    db.session.add(loan)
    db.session.commit()
    updated_loan = Loan.query.get_or_404(loan_id)
    serialized = Loan.serialize(updated_loan)

    return jsonify(loan=serialized)

@app.errorhandler(404)
def page_not_found(e):
    """404 NOT FOUND method."""

    error = {"status_code": 404, "message": "Method not found"}
    return jsonify(error=error)
