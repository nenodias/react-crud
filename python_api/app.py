"""Aplicação Rest Flask + Marshmallow."""
# -*- coding:utf-8 -*-
# from pdb import set_trace
import logging
from flask import Flask, jsonify, request, abort
from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

from models import create_model_programa

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////home/nenodias/programa.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
db = SQLAlchemy(app)
ma = Marshmallow(app)

Programa = create_model_programa(db)
db.create_all()


class ProgramaSchema(ma.Schema):
    """Classe para receber o programa como JSON."""

    class Meta:
        """Metaclasse com configurações."""

        fields = ('id', 'nome', 'valor', '_links')

    _links = ma.Hyperlinks({
        'self': ma.URLFor('programa_detail', id='<id>'),
        'collection': ma.URLFor('programas')
    })


programa_schema = ProgramaSchema()
programas_schema = ProgramaSchema(many=True)


@app.route('/api/programs/', methods=['GET', 'OPTIONS'])
def programas():
    """Lista os programas."""
    all_programas = Programa.query.all()
    result = programas_schema.dump(all_programas)
    return jsonify(result.data), 200


@app.route('/api/programs/', methods=['POST'])
def programa_save():
    """Retorna uma instância de Programa."""
    erros = ""
    try:
        program_json = request.json
        program_loaded = programa_schema.load(program_json)
        status = 500
        erros += str(program_loaded.errors)
        if program_loaded:
            data = program_loaded.data
            program = Programa(**program_loaded.data)
            if not data.get('id'):
                try:
                    db.session.add(program)
                    status = 201
                except Exception as e:
                    logging.error(str(e))
            else:
                try:
                    db.session.merge(program)
                    status = 200
                except Exception as e:
                    logging.error(str(e))
            db.session.commit()
        return programa_schema.jsonify(program), status
    except Exception as e:
        logging.error(str(e))
        return abort(500)


@app.route('/api/programs/<id>', methods=['GET'])
def programa_detail(id):
    """Retorna uma instância de Programa."""
    program = Programa.query.get(id)
    return programa_schema.jsonify(program), 200


@app.route('/api/programs/<id>', methods=['DELETE'])
def programa_delete(id):
    """Retorna uma instância de Programa."""
    program = Programa.query.get(id)
    if program:
        db.session.delete(program)
        db.session.commit()
        return "", 200
    return "", 404


if __name__ == '__main__':
    app.run(debug=True, use_reloader=True)
