import React,{useState, useEffect} from 'react';

import api from './services/api'

import './App.css'

export default function App() {
  /*Criação dos estados que armazenam:
    Lista de membros
    nome inserido no input
    idade inserida no input
    cargo inserida no input
  */
  const [membros,setMembros] = useState([])
  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [cargo, setCargo] = useState("")

  /* Chamado após a renderização para que busque os dados 
     no nosso backend e renderize a lista retornada */
  useEffect(()=>{
    /* O async nos indica que esta função pode demorar
       await nos indica que parte está esperando uma resposta */
    async  function loadMembers(){
      const res = await api.get('/user')
      const {data}= res

      //Define meu estado de Membros para os dados inseridos
      setMembros(data)
    }

    loadMembers()
    
    /*O segundo parâmetro é um array de estados
      que o useEffect aguardá ser alterado para
      executar a função anteriormente executada
      novamente*/
  },[membros])


  async function handleSubmit(e){
    /*Evita que o formulário redirecione*/
    e.preventDefault();

    const res = await api.post('/user',{nome,idade,cargo})
    const {data} = res
    /* Copia os dados em membros usando ...membros e adiciona no
      fim do array o membro recém cadastrado, inverta a ordem e
      o membro será adicionado no topo da lista */
    setMembros([...membros,data])
  }

  return (
    <div className="container">
      <div className="ShowItems">
        <ul>
          {
            membros.map(membro=>(
              <li>
                <h2> {membro.nome} </h2>
                <p> {membro.cargo} </p>
                <span> {membro.idade} </span>
              </li>    
            ))
          }
        </ul>
      </div>
    
      <div>
        <form className="Formulario">
          <label> Nome </label>
          <input value={nome} onChange={(e) => setNome(e.target.value)}/>
          <label> Cargo </label>
          <input value={cargo} onChange={(e)=> setCargo(e.target.value)}/>
          <label> Idade </label>
          <input value={idade} onChange={(e)=> setIdade(e.target.value)}/>

          <button onClick={(e)=> handleSubmit(e)} > Enviar! </button>
        </form>
      </div>
  </div>
  );
}
