import React from "react"
// import { Link } from 'gatsby'
import {
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialFacebook,
  // TiSocialTelegram,
} from "react-icons/ti"

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-social">
          <div className="footer-social-text">Follow Us</div>
          <div className="footer-social-icons">
            <a
              target="_blank"
              href="https://twitter.com/merklepal"
              rel="noopener noreferrer"
            >
              <span className="icon-container" id="tw-icon">
                <TiSocialTwitter className="footer-social-icon" />
              </span>
            </a>
            {/* <a
              target="_blank"
              href="https://www.youtube.com/"
              rel="noopener noreferrer"
            >
              <span className="icon-container" id="yt-icon">
                <TiSocialYoutube className="footer-social-icon" />
              </span>
            </a> */}
            <a
              targecast="_blank"
              href="https://www.linkedin.com/company/merklepal"
              rel="noopener noreferrer"
            >
              <span className="icon-container" id="li-icon">
                <TiSocialLinkedin className="footer-social-icon" />
              </span>
            </a>
            {/* <a
              target="_blank"
              href="https://www.t.me/cassypost"
              rel="noopener noreferrer"
            >
              <span className="icon-container" id="li-icon">
                <TiSocialTelegram className="footer-social-icon" />
              </span>
            </a> */}
            <a
              target="_blank"
              href="https://www.facebook.com/Merklepal"
              rel="noopener noreferrer"
            >
              <span className="icon-container" id="fb-icon">
                <TiSocialFacebook className="footer-social-icon" />
              </span>
            </a>
          </div>
        </div>
        <div>© {new Date().getFullYear()} Merklepal </div>
        {/* <div><Link to="/rss.xml">RSS feed</Link></div> */}
      </div>
    </footer>
  )
}
export default Footer
