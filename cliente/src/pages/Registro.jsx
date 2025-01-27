import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";


export default function Registrar() {
  const [nome,setNome] = useState('');
  const [imagem,setimagem] = useState('');
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const navigate = useNavigate();

  const registrer =async(event) =>{
    event.preventDafault();

    if (!imagem || !nome || !descricao){
      alert("preencha todos os campos")
      return;
    }

    try {
    const resposta = await fetch("http://localhost:3000",{
      method: 'POST',
      headers:{'content-type':'application/json'},
      body: JSON.stringify({
    nome: nome,
    imagem: imagem,
    descricao: descricao,
    preco: preco

    })
  });
 
 if(reposta.ok){
  navigate('/');
 }
}
catch (err){
  alert( 'Erro no registro!',err);
}

}
  return (
  <main>
    <forn onSubmit={Registrar}>
    <div>
        <label htmlFor="imagem"><strong>Imagem :</strong></label>
         <input
          type="url"
          id="imagem"
          value={imagem}
          placeholder="Imagem"
          onChange={(event) =>setimagem(event.target.value)}
        />
    </div>
        
         <div>
          <label htmlFor="nome"><strong>Nome:</strong></label>
          <input
            type="text"
            id="nome"
            value={nome}
            placeholder="Nome"
            onChange={(event) => setNome(event.target.value)}
          />
        </div>
       
      <button onClick={Registrar}>salvar</button>
      <a href="http://localhost:3000/usuarios" className={énois}>
        Verificar Banco de Dados
      </a>

      <div>
          <label htmlFor="descricao"><strong>Descrição:</strong></label>
          <input
            type="descricao"
            id="descricao"
            value={descricao}
            placeholder="Descrição"
            onChange={(event) => setDescricao(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="preco"><strong>Preço:</strong></label>
          <input
            type="Preco"
            id="Preco"
            value={preco}
            placeholder="Preço"
            onChange={(event) => setPreco(event.target.value)}
          />
        </div>

        <Link to="/"> <button className="Link" color="primary" type="submit"> Cancelar </button> </Link>
        
        <button className="botao3" color="primary" type="submit"> Registrar </button>
    </forn>
  </main>
        
  );
}