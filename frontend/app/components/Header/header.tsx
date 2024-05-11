export default function Header(){
  return (
    <header>
      <a href="allArticles.html">все<br/>задачи</a>
      <a href="index.html" className="title">makesometasks</a>
      <input type="checkbox" id="burgerCheckbox" className="burgerCheckbox" />
      <label htmlFor="burgerCheckbox" className="burger"></label>
      <div className="burgerLinks">
          <a href="allArticles.html">все задачи</a>
          <a href="aboutAuthor.html">об авторе</a>
      </div>
      <a href="aboutAuthor.html">об<br/>авторе</a>
    </header>
  );
};