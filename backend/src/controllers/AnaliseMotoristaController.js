const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const analise_motoristas = await connection('analise_motoristas').select('*');

        return response.json(analise_motoristas);

    },

    async create(request, response){
        const { nome, idade, cpf} = request.body;
        const matricula_usuarioChefe = request.headers.authorization;

        const [id] = await connection('analise_motoristas').insert({
            nome,
            idade,
            cpf,
            matricula_usuarioChefe
        })
        
        return response.json({ id });
    },

    async delete(request, response){
        const { id } = request.params;

        await connection('analise_motoristas').where('id', id).first().delete();

        return response.status(204).send();
    }
}