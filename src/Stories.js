import Story from "./Story";
const usuariosStories = ['9gag'];

usuariosStories.push('meowed');
usuariosStories.push('barked');
usuariosStories.push('nathanwpylestrangeplanet');
usuariosStories.push('wawawicomics');
usuariosStories.push('respondeai');
usuariosStories.push('filomoderna');
usuariosStories.push('memeriagourmet');

export default function Stories() {
  return (
    <div class="stories">     
        {usuariosStories.map(item => <Story usuario = {item}/>)}

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
