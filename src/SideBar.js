import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";



export default function SideBar() {
  const usuario = { perfil: "catanacomics", nome: "Catana" };
  return (
    <div class="sidebar">
      <Usuario perfil={usuario.perfil} nome={usuario.nome} />

      <Sugestoes />

      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}
