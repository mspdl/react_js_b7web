import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import './index.css';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import AttachmentIcon from '@material-ui/icons/Attachment';
import MicIcon from '@material-ui/icons/Mic';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';

export default () => {
    return (
        <div className="chat-window">
            <div className="chat-window-header">
                <div className="chat-window-header-info">
                    <img className="chat-window-header-avatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
                    <div className="chat-window-header-name"></div>
                </div>
                <div className="chat-window-buttons">
                    <div className="chat-window-button">
                        <SearchIcon style={{ color: '#919191' }} />
                    </div>
                    <div className="chat-window-button">
                        <AttachFileIcon style={{ color: '#919191' }} />
                    </div>
                    <div className="chat-window-button">
                        <MoreVertIcon style={{ color: '#919191' }} />
                    </div>
                </div>
            </div>
            <div className="chat-window-body">
            </div>
            <div className="chat-window-footer">
                <div className="chat-window-footer-left-buttons">
                    <div className="chat-window-button">
                        <EmojiEmotionsIcon style={{ color: '#919191' }} />
                    </div>
                </div>
                <div className="chat-window-footer-input-area">
                    <input
                        className="chat-window-footer-input"
                        type="text"
                        placeholder="Type a message"
                    />
                </div>
                <div className="chat-window-footer-right-buttons">
                    <div className="chat-window-button">
                        <SendIcon style={{ color: '#919191' }} />
                    </div>
                </div>
            </div>
        </div>
    );
}