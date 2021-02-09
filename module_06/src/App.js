import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import './App.css';
import ChatListItem from './components/ChatListItem';

export default () => {

    const [chatList, setChatList] = useState([{}, {}, {}, {}]);

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
                    <div className="search-input">
                        <SearchIcon fontSize="small" style={{ color: '#919191' }} />
                        <input type="search" placeholder="Search or start a new conversation" />
                    </div>

                </div>

                <div className="chatList">
                    {chatList.map((chat, key) => (
                        <ChatListItem
                            key={key}
                        />
                    ))}
                </div>
            </div>

            <div className="content-area">
                content area
            </div>
        </div>
    );
}