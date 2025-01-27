import { useEffect, useState } from "react";

export default function Home() {

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const buscarUsuario = async () => {
      try {
        const resposta = await fetch("http://localhost:3000/usuarios");
        const dados = await resposta.json();
        setUsuarios(dados);
      } 
      catch {
        alert('Ocorreu um erro no app!');
      }
    }
    buscarUsuario();
  }, [usuarios]);

  const deletar = async(id)=>{
    try{
        await fetch('http://localhost:3000/usuarios/' + id, { method: 'DELETE' });
    setUsuarios(usuario.filter(usuario =>usuario.id !== id));
    }catch{
      alert("");
    }
}
  return (
    <table>
      <tr>
        <td>Nome</td>
        <td>E-mail</td>
      </tr>
      {usuarios.map((usuario) =>
        <tr key={usuario.id}>
          <td>{usuario.nome}</td>
          <td>{usuario.imagem}</td>
          <td><button onAuxClick={()=> deletar(usuario.id)}>X</button></td>
        </tr>
      )}
     
    </table>
  );


}