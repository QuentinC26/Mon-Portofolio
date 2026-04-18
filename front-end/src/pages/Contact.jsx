import contacter_moi from "../assets/contacter_moi.png"
import email from "../assets/email.png"
import linkedin from "../assets/linkedin.png"
import telephone from "../assets/telephone.png"
import github from "../assets/github.png"

function Contact() {
  return (
    <div>
    <img className="contact_img" src={contacter_moi} alt="Logo email"/>
    <p className="contact_sentence">N’hésitez pas à me contacter pour toute opportunité via les moyens ci-dessous.</p>
    <div className="cards-grid">
    <div className="card ">
    <div className="card-title "> Email :</div>
    <div className="card-img"><img src={email} alt="Logo email"/></div>
    <div className="card-content"> <a href="mailto:qzuzlewski@gmail.com"> qzuzlewski@gmail.com </a></div>
    </div>
    <div className="card ">
    <div className="card-title "> Téléphone :</div>
    <div className="card-img"><img src={telephone} alt="Logo telephone"/></div>
    <div className="card-content"> <a href="tel:0670064975"> 0670064975 </a></div>
    </div>
    <div className="card ">
    <div className="card-title "> Linkedin :</div>
    <div className="card-img"><img src={linkedin} alt="linkedin"/></div>
    <div className="card-content"> <a href="https://www.linkedin.com/in/quentinzuzlewski/"> Mon Linkedin</a> </div>
    </div>
    <div className="card ">
    <div className="card-title "> Github :</div>
    <div className="card-img"><img src={github} alt="github"/></div>
    <div className="card-content"> <a href="https://github.com/QuentinC26">  Mon Github</a> </div>
    </div>
    </div>
    </div>
  );
}

export default Contact;