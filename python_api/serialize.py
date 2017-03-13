"""Schemas."""
from app import ma


class ProgramaSchema(ma.Schema):
    """Classe para receber o programa como JSON."""

    class Meta:
        """Metaclasse com configurações."""

        fields = ('id', 'nome', 'valor', '_links')

    _links = ma.Hyperlinks({
        'self': ma.URLFor('programs.detail', id='<id>'),
        'collection': ma.URLFor('programs.list')
    })


programa_schema = ProgramaSchema()
programas_schema = ProgramaSchema(many=True)
