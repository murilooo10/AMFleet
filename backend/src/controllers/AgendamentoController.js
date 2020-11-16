const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const agendamento = await connection('agendamento').select('*');

        return response.json(agendamento);

    },

    async create(request, response){
        const { data, hora, titulo, descricao, id_pecas, id_veiculo} = request.body;
        const codigo_perfil = request.headers.authorization;

        const [id] = await connection('agendamento').insert({
            titulo,
            data,
            hora,
            descricao,
            id_pecas,
            id_veiculo,
            codigo_perfil,
        })
        
        return response.json({ id });
    },

    async delete(request, response){
        const { id } = request.params;

        await connection('agendamento').where('id', id).delete();

        return response.status(204).send();
    }
}