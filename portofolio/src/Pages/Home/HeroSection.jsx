import {Link} from "react-scroll";
export default function HeroSection () {
    return (
        <section id = "heroSection" className="hero-section">
            <div className="hero-section-content-box">
                <div className="hero-section-content">
                    <p className="section-title">Salut, Je suis Clara J.</p>
                    <h1 className="hero-section-title">
                        <span className="hero-section-title-color">Developpeuse</span>{""}
                        <br/>
                        Full-Stack
                    </h1>
                    <p className="hero-section-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolore iusto consequatur aut quis non cumque, magnam consectetur neque sed? Veritatis, saepe dignissimos consequuntur autem eum nam quisquam quia repudiandae.
                        <b/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque consequuntur expedita quisquam!
                    </p>
                </div>
                <Link to="skills--section"><button className="btn btn-primary">Découvrez mes skills</button></Link>
            </div>
            <div className ="hero-section-img">
                <img src="./img/hero_img.png" alt="Hero Section"/>
            </div>
        </section>
    )
}