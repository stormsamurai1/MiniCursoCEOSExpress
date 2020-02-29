const data  = require('./data')

module.exports = {
    async index(req,res){

        return res.send(data)
    
    },
    
    async create(req,res){
        const {idade, cargo, nome} = req.body;

        await data.push({nome,idade,cargo})
        
        return res.send(data)
    },

    async update(req,res){
        //Usando nome como a referencia para alterar idade e cargo
        const {nome, idade, cargo} = req.body

        await data.map((member)=>{
            if (member.nome == nome){
                member.cargo = cargo
                member.idade = idade
            }
        })

        return res.send(data)
    }
}