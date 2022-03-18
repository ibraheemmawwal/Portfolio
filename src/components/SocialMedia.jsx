import React from 'react';
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';
// import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://twitter.com/ibraheem_mawwal">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/ibraheem-muhammadawwal-690276201/">
        <BsLinkedin />
      </a>
    </div>

    <div>
      <a href="https://github.com/ibraheemmawwal">
        <BsGithub />
      </a>
    </div>
  </div>
);

export default SocialMedia;
