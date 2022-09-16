import { useState } from 'react';

export default function Post(props) {
  const [iconeSalvar, salvarPost] = useState("bookmark-outline");
  const [iconeCurtir, curtirPost] = useState("heart-outline");
  const [corIconeCurtir, coloreCurtir] = useState("#262626");
  const [numCurtidas, alteraCurtidas] = useState(props.curtidas);

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
          src={`assets/img/${props.conteudo}.svg`}
          alt="Não foi possível carregar a imagem"
        />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon
              name={iconeCurtir}
              style={{color:corIconeCurtir}}
              onClick={() => {
                if (iconeCurtir === "heart-outline") {
                  curtirPost("heart");
                  coloreCurtir("#ED4956");
                  alteraCurtidas(numCurtidas + 1);
            
                } else{
                  curtirPost("heart-outline");
                  coloreCurtir("#262626");
                  alteraCurtidas(numCurtidas - 1);
                }
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
