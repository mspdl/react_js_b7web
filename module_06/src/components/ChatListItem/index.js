import React from 'react';
import './index.css'

export default () => {
    return (
        <div className="chat-list-item">
            <img className="chat-list-item-avatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
            <div className="chat-list-item-lines">
                <div className="chat-list-item-line">
                    <div className="chat-list-item-name">Morgan</div>
                    <div className="chat-list-item-date">11:34</div>
                </div>
                <div className="chat-list-item-line">
                    <div className="chat-list-item-last-message">
                        <p>
                            Hi, how are you? Hello!? Hello!? Hello!? Hello!? Hello!? Hello!? Hello!? Hello!? Hello!? Hello!? Hello!? Hello!? Hello!? Hello!? Hello!? Hello!? Hello!?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}