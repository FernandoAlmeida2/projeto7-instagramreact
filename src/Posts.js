import Post from "./Post";

export default function Posts() {
  const postsLista = [
    {
      usuario: "meowed",
      conteudo: "gato-telefone",
      curtiu: "respondeai",
      curtidas: 101523,
    },
  ];
  postsLista.push({
    usuario: "barked",
    conteudo: "dog",
    curtiu: "adorable_animals",
    curtidas: 99159,
  });

  return (
    <div className="posts">
      {postsLista.map((post) => (
        <Post
          usuario={post.usuario}
          conteudo={post.conteudo}
          curtiu={post.curtiu}
          curtidas={post.curtidas}
        />
      ))}
    </div>
  );
}
