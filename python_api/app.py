"""Aplicacao Rest Flask + Marshmallow."""
# -*- coding:utf-8 -*-
# from pdb import set_trace
from flask import Flask
from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
ma = Marshmallow()


def create_app(database_uri, debug=False):
    """Cria a aplicacao."""
    app = Flask(__name__)
    app.debug = debug
    app.config['SQLALCHEMY_DATABASE_URI'] = database_uri
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
    from endpoints import app as program_endpoint
    from models import db
    app.register_blueprint(program_endpoint)
    db.init_app(app)
    ma.init_app(app)
    with app.app_context():
        db.create_all()

    return app


if __name__ == '__main__':
    app = create_app('sqlite:////home/nenodias/programa.db', debug=True)
    app.run()
