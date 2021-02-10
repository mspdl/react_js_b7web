import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import './index.css';

export default () => {
    return (
        <div className="chat-window">
            <div className="chat-window-header">
                <div className="chat-window-header-info">
                    <img className="chat-window-header-avatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
                    <div className="chat-window-header-name"></div>
                </div>
                <div className="chat-window-header-buttons">
                    <div className="chat-window-header-button">
                        <SearchIcon style={{ color: '#919191' }} />
                    </div>
                    <div className="chat-window-header-button">
                        <AttachFileIcon style={{ color: '#919191' }} />
                    </div>
                    <div className="chat-window-header-button">
                        <MoreVertIcon style={{ color: '#919191' }} />
                    </div>
                </div>
            </div>
            <div className="chat-window-body">
            </div>
            <div className="chat-window-footer">
            </div>
        </div>
    );
}