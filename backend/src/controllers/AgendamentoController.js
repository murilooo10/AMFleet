const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const agendamento = await connection('agendamento').select('*');

        return response.json(agendamento);

    },

    async create(request, response){
        const { data, hora, matricula_motorista, id_pecas, id_veiculo} = request.body;
        const matricula_usuarioChefe = request.headers.authorization;

        const [id] = await connection('agendamento').insert({
            data,
            hora,
            matricula_motorista,
            id_pecas,
            id_veiculo,
            matricula_usuarioChefe
        })
        
        return response.json({ id });
    },

    async delete(request, response){
        const { id } = request.params;

        await connection('agendamento').where('id', id).first().delete();

        return response.status(204).send();
    }
}