const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const veiculos = await connection('veiculos').select('*');

        return response.json(veiculos);

    },

    async create(request, response){
        const { chassi, renavam, placa, ano, cor, fabricante, modelo, quilometragem, tipo_combustivel, avarias} = request.body;
        const matricula_usuarioChefe = request.headers.authorization;

        const [id] = await connection('veiculos').insert({
            chassi,
            renavam,
            placa,
            ano, 
            cor, 
            fabricante,
            modelo,
            quilometragem,
            tipo_combustivel,
            avarias,
            matricula_usuarioChefe
        })
        
        return response.json({ id });
    },

    async delete(request, response){
        const { id } = request.params;

        await connection('veiculos').where('id', id).first().delete();

        return response.status(204).send();
    }
}