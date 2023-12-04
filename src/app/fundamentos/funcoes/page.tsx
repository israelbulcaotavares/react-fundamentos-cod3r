export default function Page() {

  function renderizarTitulo() {
    return (
      <div>
        <h1>Titulo</h1>
        <h1>Subtitulo</h1>
      </div>
    );
  }

  function renderizarConteudo() {
    return (
      <ul>
        <li>Ana</li>
        <li>Carlos</li>
        <li>Zico</li>
      </ul>
    );
  }

  return (
    <div>
      <div>{renderizarTitulo()}</div>
      <hr />
      <div>{renderizarConteudo()}</div>
    </div>
  );
}
