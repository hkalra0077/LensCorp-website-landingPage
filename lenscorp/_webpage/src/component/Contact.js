import React, { useState } from 'react';

function Contact() {
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email);
    };

    return (
        <div className="Contact_container__uG6JO">
            <div className="Contact_left__0bxLz">
                <h2 className="Contact_head__VtrxH" >Get in touch with us</h2>
                <p className="Contact_subHead__f5Lgr">Send your enquiry now!</p>
                <form className="Contact_inputField__6ePN3" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        className="Contact_input__sgdfh"
                        placeholder="Enter email address"
                        required=""
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button className="Contact_button__0335_" type="submit">Request Demo</button>
                </form>
            </div>
            <div className="Contact_right__N6g_I">
                <img alt="map" loading="lazy" width="720" height="538" decoding="async" data-nimg="1"
                    className="NewContact_img__GUuU5" style={{ color: 'transparent' }}
                    srcSet="2Fmap_2_white.1bdb3808.png"
                    src="2Fmap_2_white.1bdb3808.png" />
            </div>
        </div>
    );
}

export default Contact;