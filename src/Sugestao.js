export default function Sugestao(props){
    return(
        <div className="sugestao">
        <div className="usuario">
          <img
            src={`assets/img/${props.usuario}.svg`}
            alt="Não foi possível carregar a imagem"
          />
          <div className="texto">
            <div className="nome">{props.usuario}</div>
            <div className="razao">{props.razao}</div>
          </div>
        </div>

        <div className="seguir">Seguir</div>
      </div>
    );
}