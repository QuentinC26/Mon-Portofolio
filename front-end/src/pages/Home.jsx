import quentinzuzlewski from "../assets/quentinzuzlewski.png"

function Home() {
  return (
    <div>
      <br></br>
      <h2>Quentin Zuzlewski</h2>
      <br></br>
      <img src={quentinzuzlewski} alt="Quentin Zuzlewski"/>
      <br></br>
      <br></br>
      <h2>Développeur web</h2>
      <br></br>
      <a className="a_cv" href="https://www.canva.com/design/DAGr0MT1XQw/Deed52pzNYvUyZpdWZDE2Q/view?utm_content=DAGr0MT1XQw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h52064ce82c">Consulter mon CV</a>
      <br></br>
      <br></br> 
      <br></br>
    </div>
  );
}

export default Home;