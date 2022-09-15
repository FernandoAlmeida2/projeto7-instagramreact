export default function Story(props) {
  return (
    <div class="story">
      <div class="imagem">
        <img
          src={`assets/img/${props.usuario}.svg`}
          alt="Não foi possível carregar a imagem"
        />
      </div>
      <div class="usuario">{props.usuario}</div>
    </div>
  );
}
