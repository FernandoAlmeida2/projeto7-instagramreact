import Sugestao from "./Sugestao";

export default function Sugestoes() {
  const sugestoesLista = [{ usuario: "bad.vibes.memes", razao: "Segue você" }];
  sugestoesLista.push({ usuario: "chibirdart", razao: "Segue você" });
  sugestoesLista.push({
    usuario: "razoesparaacreditar",
    razao: "Novo no Instagram",
  });
  sugestoesLista.push({ usuario: "adorable_animals", razao: "Segue você" });
  sugestoesLista.push({ usuario: "smallcutecats", razao: "Segue você" });
  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {sugestoesLista.map((sugestao) => (
        <Sugestao usuario={sugestao.usuario} razao={sugestao.razao} />
      ))}
    </div>
  );
}
