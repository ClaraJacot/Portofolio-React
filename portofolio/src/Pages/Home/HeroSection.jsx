import {Link} from "react-scroll";
export default function HeroSection () {
    return (
        <section id = "heroSection" className="hero-section">
            <div className="hero-section-content-box">
                <div className="hero-section-content">
                    <p className="section-title">Salut, Je suis Clara J.</p>
                    <h1 className="hero-section-title">
                        <span className="hero-section-title-color">Développeuse</span>{""}
                        <br/>
                        Full-Stack
                    </h1>
                    <p className="hero-section-description">
                        Actuellement en reconversion professionnelle, je suis la formation de "concepteur développeur d'applications" chez <a href="https://adatechschool.fr/programme/" target="_blank">Ada Tech School</a> Lyon. 
                        <br/>
                        Je suis à la recherche d'une alternance de 12 mois, sur un rythme de 4 jours/semaine en entreprise.
                    </p>
                </div>
                <Link to="skills--section"><button className="btn btn-primary">Découvrez mes skills</button></Link>
            </div>
            <div className ="hero-section-img">
                <img src="./img/moi.png" alt="Hero Section"/>
            </div>
        </section>
    )
}