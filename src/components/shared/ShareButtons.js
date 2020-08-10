import React from 'react';
import { FacebookShareButton,
         FacebookIcon,
         WhatsappIcon,
         TwitterIcon,
         LinkedinIcon,
         WhatsappShareButton,
         TwitterShareButton,
         LinkedinShareButton,} from "react-share"

const ShareButtons = () => {
    return (
        <div>
            <FacebookShareButton
                url="https://hurray-resume.netlify.app/user-resume"
                quote="Mi CV con Hurray!"
                hashtags={["#Hurray", "#Resume", "#EasyPeazy", "#LemonSqueezano"]} >
                <FacebookIcon size={36} logoFillColor="white" round={true}/>
            </FacebookShareButton>
            <WhatsappShareButton
                url="https://hurray-resume.netlify.app/user-resume"
                title="Hurray! Crea tu curriculum facil, rapido.. y gratis!"
                separator="" >
                <WhatsappIcon size={36} logoFillColor="white" round={true}/>
            </WhatsappShareButton>
            <LinkedinShareButton
                url="https://hurray-resume.netlify.app/user-resume"
                source={"https://hurray-resume.netlify.app/user-resume"}
                summary={"Mi CV con Hurray!"}
                hashtags={["Hurray", "Resume", "EasyPeazy", "LemonSqueezano"]} >
                <LinkedinIcon size={36} logoFillColor="white" round={true}/>
            </LinkedinShareButton>
            <TwitterShareButton
                url={"https://hurray-resume.netlify.app/user-resume"}
                title={"Hurray! Crea tu curriculum facil, rapido.. y gratis!"}
                hashtags={["#Hurray", "#Resume", "#EasyPeazy", "#LemonSqueezano"]}>
                <TwitterIcon size={36} logoFillColor="white" round={true}/>
            </TwitterShareButton>
            
        </div>
    );
};

export default ShareButtons;