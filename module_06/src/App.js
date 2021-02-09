import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React from 'react';
import './App.css';

export default () => {
    return (
        <div className="app-window">
            <div className="sidebar">
                <header>
                    <img className="header-avatar" src="https://www.w3schools.com/howto/img_avatar.png" alt=""></img>
                    <div className="header-buttons">
                        <div className="header-button">
                            <DonutLargeIcon style={{ color: '#919191' }} />
                            <ChatIcon style={{ color: '#919191' }} />
                            <MoreVertIcon style={{ color: '#919191' }} />
                        </div>
                    </div>
                </header>

                <div className="search">
                    search
                </div>

                <div className="chatList">
                    chatlist
                </div>
            </div>

            <div className="content-area">
                content area
            </div>
        </div>
    );
}