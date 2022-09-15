export default function Post(props) {
  function salvarPost(post) {
    const botaoSalvar = document.querySelector(`${post} .iconeSalvar`);
    if (botaoSalvar.name === "bookmark-outline") botaoSalvar.name = "bookmark";
    else botaoSalvar.name = "bookmark-outline";
  }

  function curtirPost(post) {
    const botaoCurtir = document.querySelector(`${post} .iconeCurtir`);
    const numeroCurtidas = document.querySelector(`${post} .numeroCurtidas`);
    if (botaoCurtir.name === "heart-outline") {
      botaoCurtir.name = "heart";
      botaoCurtir.style = "color: #ED4956";
      numeroCurtidas.innerHTML = Number(numeroCurtidas.innerHTML) + 1;

    } else{
      botaoCurtir.name = "heart-outline";
      botaoCurtir.style = "color: #262626"
      numeroCurtidas.innerHTML = Number(numeroCurtidas.innerHTML) - 1;
    }
  }

  return (
    <div class={`post ${props.usuario}`}>
      <div class="topo">
        <div class="usuario">
          <img
            src={`assets/img/${props.usuario}.svg`}
            alt="Não foi possível carregar a imagem"
          />
          {props.usuario}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img
          src={`assets/img/${props.conteudo}.svg`}
          alt="Não foi possível carregar a imagem"
        />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon
              name="heart-outline"
              class="iconeCurtir"
              style={{color:"#262626"}}
              onClick={() => {
                curtirPost(`.${props.usuario}`);
              }}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon
              name="bookmark-outline"
              class="iconeSalvar"
              onClick={() => {
                salvarPost(`.${props.usuario}`);
              }}
            ></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img
            src={`assets/img/${props.curtiu}.svg`}
            alt="Não foi possível carregar a imagem"
          />
          <div class="texto">
            Curtido por <strong>{props.curtiu}</strong> e
            <strong> outras <span class="numeroCurtidas">{props.curtidas}</span> pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
