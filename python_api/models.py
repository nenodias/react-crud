"""Modulo dos Modelos."""
from app import db


class Programa(db.Model):
    """Classe representa a tabela programa."""

    __tablename__ = 'programa'

    id = db.Column('id', db.Integer, primary_key=True)
    nome = db.Column('nome', db.String(60), nullable=False)
    valor = db.Column('valor', db.Float, nullable=False)
