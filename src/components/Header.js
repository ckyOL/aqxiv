import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import config from '../../config';
export default function Footer() {
  return (
    <header id="header">
      <h1>{config.authorName}</h1>
      <p>{config.authorHeading}</p>
      <nav>
        <ul>
          {config.authorSocialLinks.map((social, index) => {
            const { icon, name, url } = social;
            return (
              <li key={index}>
                <a href={url} className='icon'>
                  <FontAwesomeIcon icon={icon} size={'2x'}/>
                  <span>{name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
