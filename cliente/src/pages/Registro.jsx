import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Registrar() {
  const [nome,setNome] = useState('');
  const [email,setEmail] = useState('');

  const navigate = useNavigate();

  const registrer =async(event) =>{
    event.preventDafault();
    try {
    const resposta = await fetch("http://localhost:3000",{
      method: 'POST',
      headers:{'content-type':'application/json'},
      boody: JSON.stringify({
        nome:nome,
        email:email
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
  return (<main>
    <forn action=""onSubmit={Registrar}>
      <input
      type="text"
      value={nome}
      onChange={(event)=>setNome(event.target.value)}
      />
      <input
      type="email"
      value={email}
      onChange={(event)=>setEmail(event.target.value)}
      />
      </forn>
      <button onClick={Registrar}>salvar</button>
      <a href="http://localhost:3000/usuarios" className={énois}>
        Verificar Banco de Dados
      </a>


    
  </main>
        
  );
}