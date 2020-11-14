const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const manutencao = await connection('manutencao').select('*');

        return response.json(manutencao);

    },

    async create(request, response){
        const { data, motivo, valor, placa_veiculo, data_saida, obs} = request.body;
        const matricula_usuarioChefe = request.headers.authorization;

        const [id] = await connection('manutencao').insert({
            data,
            motivo,
            valor,
            placa_veiculo,
            data_saida,
            obs,
            matricula_usuarioChefe
        })
        
        return response.json({ id });
    },

    async delete(request, response){
        const { id } = request.params;

        await connection('manutencao').where('id', id).first().delete();

        return response.status(204).send();
    }
}