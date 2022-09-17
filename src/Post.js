import { useState } from "react";

export default function Post(props) {
  const [iconeSalvar, salvarPost] = useState("bookmark-outline");
  const [iconeCurtir, avaliaCurtir] = useState("heart-outline");
  const [corIconeCurtir, coloreCurtir] = useState("#262626");
  const [numCurtidas, alteraCurtidas] = useState(props.curtidas);

  function curtirPost(tipoCurtida) {
    if (iconeCurtir === "heart-outline") {
      avaliaCurtir("heart");
      coloreCurtir("#ED4956");
      alteraCurtidas(numCurtidas + 1);
    } else if (tipoCurtida === true) {
      avaliaCurtir("heart-outline");
      coloreCurtir("#262626");
      alteraCurtidas(numCurtidas - 1);
    }
  }

  return (
    <div className="post">
      <div className="topo">
        <div className="usuario">
          <img
            src={`assets/img/${props.usuario}.svg`}
            alt="Não foi possível carregar a imagem"
          />
          {props.usuario}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img
          onClick={() => {
            curtirPost(false);
          }}
          src={`assets/img/${props.conteudo}.svg`}
          alt="Não foi possível carregar a imagem"
        />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon
              name={iconeCurtir}
              style={{ color: corIconeCurtir }}
              onClick={() => {
                curtirPost(true);
              }}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon
              name={iconeSalvar}
              onClick={() => {
                if (iconeSalvar === "bookmark-outline") salvarPost("bookmark");
                else salvarPost("bookmark-outline");
              }}
            ></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img
            src={`assets/img/${props.curtiu}.svg`}
            alt="Não foi possível carregar a imagem"
          />
          <div className="texto">
            Curtido por <strong>{props.curtiu}</strong> e
            <strong> outras {numCurtidas} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
