import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import IconsButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import '../Style/header.css';
function Header(){
    return(
        <div className="header">

            <div className="header-left">
                <IconsButton>
                    <PersonIcon />
                </IconsButton>
            </div>
            <div className="header-center">
                <img className="logo" src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" />
            </div>
            <div className="header-right">
                <ForumIcon />
            </div>

        </div>
    );
}

export default Header;