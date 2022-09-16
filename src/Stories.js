import Story from "./Story";

export default function Stories() {
  const usuariosStories = ['9gag'];

  usuariosStories.push('meowed');
  usuariosStories.push('barked');
  usuariosStories.push('nathanwpylestrangeplanet');
  usuariosStories.push('wawawicomics');
  usuariosStories.push('respondeai');
  usuariosStories.push('filomoderna');
  usuariosStories.push('memeriagourmet');
  return (
    <div className="stories">     
        {usuariosStories.map(item => <Story usuario = {item}/>)}

      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
