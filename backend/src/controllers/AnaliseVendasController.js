const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const analise_vendas = await connection('analise_vendas').select('*');

        return response.json(analise_vendas);

    },

    async create(request, response){
        const { nome, placa, cpf, data, km_inicial, km_final} = request.body;
        const matricula_usuarioChefe = request.headers.authorization;

        const [id] = await connection('analise_vendas').insert({
            nome,
            placa,
            cpf,
            data,
            km_inicial,
            km_final,
            matricula_usuarioChefe
        })
        
        return response.json({ id });
    },

    async delete(request, response){
        const { id } = request.params;

        await connection('analise_vendas').where('id', id).first().delete();

        return response.status(204).send();
    }
}