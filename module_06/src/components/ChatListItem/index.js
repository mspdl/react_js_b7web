import React from 'react';
import './index.css'

export default ({ chatInfo, onClick, active }) => {
    return (
        <div className={`chat-list-item ${active ? 'active' : ''}`}
            onClick={onClick}
        >
            <img className="chat-list-item-avatar" src={chatInfo.image} alt="" />
            <div className="chat-list-item-lines">
                <div className="chat-list-item-line">
                    <div className="chat-list-item-name">{chatInfo.title}</div>
                    <div className="chat-list-item-date">11:34</div>
                </div>
                <div className="chat-list-item-line">
                    <div className="chat-list-item-last-message">
                        <p>
                            Hi, how are you?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}