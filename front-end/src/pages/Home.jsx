import quentinzuzlewski from "../assets/quentinzuzlewski.png"

function Home() {
  return (
    <div>
      <h2>Quentin Zuzlewski</h2>
      <img className="home_img" src={quentinzuzlewski} alt="Quentin Zuzlewski"/>
      <h2>Développeur web</h2>
      <a className="a_cv" href="https://www.canva.com/design/DAGr0MT1XQw/Deed52pzNYvUyZpdWZDE2Q/view?utm_content=DAGr0MT1XQw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h52064ce82c">Consulter mon CV</a>
    </div>
  );
}

export default Home;