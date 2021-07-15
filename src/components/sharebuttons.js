import React from 'react'
import "../components/stylesbuttons.css"

import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  // EmailShareButton,
  // EmailIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon
} from 'react-share'

const ShareButtons = ({title, url, twitterHandle, tags}) => {

    return(
        <div className="share-button">
          <FacebookShareButton url={url} >
                <FacebookIcon  size={40} round={true} className="icon"/>
         </FacebookShareButton>

         {/* <EmailShareButton url={url} >
                <EmailIcon  size={40} round={true} className="icon"/>
         </EmailShareButton> */}

          <TwitterShareButton url={url} title={title} via={twitterHandle} hashtags={tags}>
                <TwitterIcon  size={40} round={true} className="icon"/>
          </TwitterShareButton>

          <LinkedinShareButton url={url} >
            <LinkedinIcon  size={40} round={true} className="icon"/>
          </LinkedinShareButton>

          <RedditShareButton url={url} title={title} >
            <RedditIcon  size={40} round={true}  className="icon"/>
          </RedditShareButton>

          <WhatsappShareButton url={url} title={title}>
               <WhatsappIcon  size={40} round={true} className="icon"/>
           </WhatsappShareButton>
        </div>
      )

}
export default ShareButtons