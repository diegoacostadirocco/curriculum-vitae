import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import ShareButtons from './ShareButtons';

const DownBar = () => {
    return (
        <div className="ui inverted vertical masthead center aligned segment">
            <a href="https://github.com/diegoacostadirocco" 
               className="item" target="_blank" rel="noopener noreferrer">
             <AiFillGithub style={{color:"white"}}/> <span className="ui inverted header">
                 https://github.com/diegoacostadirocco
              </span>
            </a>
        <ShareButtons />
        </div>
    );
};

export default DownBar;