const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const vendas = await connection('vendas').select('*');

        return response.json(vendas);

    },

    async create(request, response){
        const { matricula_motorista, nome, placa, cpf, data, hora_chegada, hora_saida, percurso, km_inicial, km_final, obs, id_veiculo} = request.body;
        const matricula_usuarioChefe = request.headers.authorization;

        const [id] = await connection('vendas').insert({
            matricula_motorista,
            nome,
            placa,
            cpf,
            data,
            hora_chegada,
            hora_saida,
            percurso,
            km_inicial,
            km_final,
            obs,
            id_veiculo,
            matricula_usuarioChefe
        })
        
        return response.json({ id });
    },

    async delete(request, response){
        const { id } = request.params;

        await connection('vendas').where('id', id).first().delete();

        return response.status(204).send();
    }
}