import { useState } from 'react';
export default function ContactMe () {
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    return(
        <section id="contact" className="contact--section">
            <div> 
                <p className="sub-title">Get in Touch</p>
                <h2>Contactez Moi</h2>
                <p className="test-lg">
                Que vous vouliez me proposer une alternance, me poser des questions sur Ada Tech School<br></br> et ma formation, ou discuter de mes projets, je serai ravie de vous répondre!
                </p>
            </div>
        <form method="post" className="contact--form--container" action={`mailto:clara.jacot@gmail.com?subject=${subject}&body=${message}`}>
            
            <label htmlFor="choose-topic" className="contact--label">
                <span className="text-md">Choisir un sujet</span>
                <select id="choose-topic" className="contact--input text-md" value={subject}  onChange={e => setSubject(e.target.value)}>
                        <option value="select">Sélectionner</option>
                        <option value="Alternance">Alternance</option>
                        <option value="Ada">Ada</option>
                        <option value="Portfolio">Portfolio</option>
                </select> 
            </label>
            <label htmlFor="message" className="contact--label">
                    <span className="text-md">Message</span>
                    <textarea 
                    value={message} 
                    onChange={e=> setMessage(e.target.value)}
                    className="contact--input text-md"
                    id="message"
                    rows="8"
                    placeholder="Ecrivez votre message..."
                    name='msg'
                    />
            </label>
            <label htmlFor="checkbox" className="checkbox--label">
                    <input 
                    type="checkbox"
                    name="checkbox"
                    id="checkbox"
                    required
                    />
                    <span className="text-sm">Autoriser à ouvrir votre application de mail par défaut</span>
            </label>
            <div>
                <button className="btn btn-primary contact--form--btn">Envoyer un mail</button>
            </div>
        </form>
    </section>
    );
}