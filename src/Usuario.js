import { useState } from "react";
export default function Usuario(props) {
  const [nome, alterarNome] = useState(props.nome);
  const [fonte, alterarImagem] = useState(`assets/img/${props.perfil}.svg`); 
  return (
    <div className="usuario">
      <img
        src={fonte}
        alt="Não foi possível carregar a imagem"
        onClick={() => alterarImagem(prompt("Digite o link da nova imagem:"))}
      />
      <div className="texto">
        <strong>{props.perfil}</strong>
        <span>
          {nome}
          <ion-icon name="pencil" onClick={() => alterarNome(prompt("Digite um nome:"))}></ion-icon>
        </span>
      </div>
    </div>
  );
}
