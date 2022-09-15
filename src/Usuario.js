export default function Usuario(props) {
  function editarNome() {
    const novoNome = prompt("Digite um nome");
    document.querySelector(".nomeUsuario").innerHTML = novoNome;
  }

  function editarImagem() {
    const novaImagem = prompt("Digite o link da nova imagem");
    document.querySelector(".sidebar .usuario img").src = novaImagem;
  }

  return (
    <div class="usuario">
      <img
        src={`assets/img/${props.perfil}.svg`}
        alt="Não foi possível carregar a imagem"
        onClick={editarImagem}
      />
      <div class="texto">
        <strong>{props.perfil}</strong>
        <span>
          <span class="nomeUsuario">{props.nome}</span>
          <ion-icon name="pencil" onClick={editarNome}></ion-icon>
        </span>
      </div>
    </div>
  );
}
