export default function Story(props) {
  return (
    <div className="story">
      <div className="imagem">
        <img
          src={`assets/img/${props.usuario}.svg`}
          alt="Não foi possível carregar a imagem"
        />
      </div>
      <div className="usuario">{props.usuario}</div>
    </div>
  );
}
