"""SQLAlchemy models for Loanstreet."""

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Loan(db.Model):
    """Loan in the system."""

    __tablename__ = 'loan'

    id = db.Column(
        db.Integer,
        primary_key=True,
    )

    amount = db.Column(
        db.Integer,
        nullable=False,
    )

    interest_rate = db.Column(
        db.Text,
        nullable=False,
    )

    term = db.Column(
        db.Integer,
        nullable=False,
    )

    month_payment = db.Column(
        db.Integer,
        nullable=False,
    )

    @classmethod
    def serialize(cls, self):
        """Serialize to dictionary"""
        return {
            "id": self.id,
            "amount": self.amount,
            "interest_rate": self.interest_rate,
            "term": self.term,
            "month_payment": self.month_payment,
        }


def connect_db(app):
    """Connect this database to provided Flask app.

    You should call this in your Flask app.
    """

    db.app = app
    db.init_app(app)
