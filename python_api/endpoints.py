"""Endpoints."""
import logging
from app import db
from models import Programa
from flask import Blueprint, request, jsonify
from serialize import programa_schema, programas_schema

app = Blueprint('programs', __name__)


@app.route('/api/programs/', methods=['GET', 'OPTIONS'])
def list():
    """Lista os programas."""
    all_programas = Programa.query.all()
    result = programas_schema.dump(all_programas)
    return jsonify(result.data), 200


@app.route('/api/programs/', methods=['POST'])
def save():
    """Retorna uma instância de Programa."""
    try:
        program_json = request.json
        program_loaded = programa_schema.load(program_json)
        status = 500
        logging.error(str(program_loaded.errors))
        if program_loaded:
            data = program_loaded.data
            program = Programa(**program_loaded.data)
            if not data.get('id'):
                db.session.add(program)
                status = 201
            else:
                db.session.merge(program)
                status = 200
            db.session.commit()
        return programa_schema.jsonify(program), status
    except Exception as e:
        logging.error(str(e))
        return jsonify({"message": str(e)}), 500


@app.route('/api/programs/<id>', methods=['GET'])
def detail(id):
    """Retorna uma instância de Programa."""
    program = Programa.query.get(id)
    return programa_schema.jsonify(program), 200


@app.route('/api/programs/<id>', methods=['DELETE'])
def delete(id):
    """Retorna uma instância de Programa."""
    program = Programa.query.get(id)
    if program:
        try:
            db.session.delete(program)
            db.session.commit()
            return "", 200
        except Exception as e:
            logging.error(str(e))
            return jsonify({"message": str(e)}), 500
    return "", 404
