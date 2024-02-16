export default function ContactMe () {
    return(
        <section id="contact" className="contact--section">
            <div> 
                <p className="sub-title">Get in Touch</p>
                <h2>Contactez Moi</h2>
                <p className="test-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla delectus provident quam expedita eaque unde ullam ratione ipsa rerum? Quisquam quae facilis debitis nemo aliquam nobis suscipit veniam totam beatae.
                </p>
            </div>
        <form className="contact--form--container">
            <div className="container">
                <label htmlFor="first-name" className="contact--label">
                    <span className="text-md">Prénom</span>
                    <input 
                    type="text"
                    className="contact--input text-md"
                    name="first-name"
                    id="first-name"
                    required
                    />
                </label>
                <label htmlFor="last-name" className="contact--label">
                    <span className="text-md">Nom</span>
                    <input 
                    type="text"
                    className="contact--input text-md"
                    name="last-name"
                    id="last-name"
                    required
                    />
                </label>
                <label htmlFor="email" className="contact--label">
                    <span className="text-md">Email</span>
                    <input 
                    type="email"
                    className="contact--input text-md"
                    name="email"
                    id="email"
                    required
                    />
                </label>
            </div>
            <label htmlFor="choose-topic" className="contact--label">
                <span className="text-md">Choisir un sujet</span>
                <select id="choose-topic" className="contact--input text-md">
                        <option>Selectionner</option>
                        <option>Alternance</option>
                        <option>Ada</option>
                        <option>Portofolio</option>
                </select> 
            </label>
            <label htmlFor="message" className="contact--label">
                    <span className="text-md">Message</span>
                    <textarea  
                    className="contact--input text-md"
                    id="message"
                    rows="8"
                    placeholder="Ecrivez votre message..."
                    />
            </label>
            <label htmlFor="checkbox" className="checkbox--label">
                    <input 
                    type="checkbox"
                    name="checkbox"
                    id="checkbox"
                    required
                    />
                    <span className="text-sm">J'accepte les termes</span>
            </label>
            <div>
                <button className="btn btn-primary contact--form--btn">Envoyer</button>
            </div>
        </form>
    </section>
    );
}