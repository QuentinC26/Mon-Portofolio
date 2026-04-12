import contacter_moi from "../assets/contacter_moi.png"
import email from "../assets/email.png"
import linkedin from "../assets/linkedin.png"

function Contact() {
  return (
    <div>
      <br></br>
      <img src={contacter_moi} alt="Me contacter"/>
      <br></br>
      <br></br>
      <p><img src={email} alt="Mon email"/> : qzuzlewski@gmail.com</p>
      <p>Linkedin : <a href="https://www.linkedin.com/in/quentinzuzlewski/"> <img src={linkedin} alt="Mon Linkedin"/></a></p>
      <br></br>
    </div>
  );
}

export default Contact;