import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Div from './Div';

const Contact = () => (
  <Div className="section">
    <h2>Me contacter :</h2>
    <p><FontAwesomeIcon icon={faAt} /> <a href="mailto:li.lipou@gmail.com">li.lipou@gmail.com</a></p>
    <p><FontAwesomeIcon icon={faLinkedin} /> <a target="_blanck" rel="noopener noreferrer" href="https://www.linkedin.com/in/lipou-li-861a1a145/">Ma page Linkedin</a></p>
    <p><FontAwesomeIcon icon={faGithub} /> <a target="_blanck" rel="noopener noreferrer" href="https://github.com/lipouli">Ma page Github</a></p>
  </Div>
);

export default Contact;
