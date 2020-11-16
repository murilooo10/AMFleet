const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const veiculos = await connection('veiculos').select('*');

        return response.json(veiculos);

    },

    async create(request, response){
        const { chassi, renavam, placa, ano, cor, fabricante, modelo, quilometragem, avarias} = request.body;
        const codigo_perfil = request.headers.authorization;

        const [id] = await connection('veiculos').insert({
            chassi,
            renavam,
            placa,
            ano, 
            cor, 
            fabricante,
            modelo,
            quilometragem,
            avarias,
            codigo_perfil
        })
        
        return response.json({ id });
    },

    async delete(request, response){
        const { id } = request.params;

        await connection('veiculos').where('id', id).first().delete();

        return response.status(204).send();
    },

    async update(request, response){
        const{quilometragem, avarias, id} = request.params;

        await connection('veiculos').where('id', id).update({
            quilometragem,
            avarias
        })

        return response.json({ id });
    }
}