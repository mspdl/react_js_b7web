import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import './App.css';
import ChatIntro from './components/ChatIntro';
import ChatListItem from './components/ChatListItem/';
import ChatWindow from './components/ChatWindow';

export default () => {

    const [chatList, setChatList] = useState([
        {id: 1, title: 'John', image: 'https://www.w3schools.com/howto/img_avatar.png'},
        {id: 2, title: 'Annie', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
        {id: 3, title: 'Danny', image: 'https://www.w3schools.com/howto/img_avatar.png'},
        {id: 4, title: 'Andrea', image: 'https://www.w3schools.com/howto/img_avatar.png'},
        {id: 5, title: 'Olivia', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
        {id: 6, title: 'Oliver', image: 'https://www.w3schools.com/howto/img_avatar.png'},
        {id: 7, title: 'Sophia', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
        {id: 8, title: 'William', image: 'https://www.w3schools.com/howto/img_avatar.png'},
        {id: 9, title: 'Ethan', image: 'https://www.w3schools.com/howto/img_avatar.png'},
        {id: 10, title: 'Evelyn', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
    ]);
    const [activeChat, setActiveChat] = useState({});

    return (
        <div className="app-window">
            <div className="sidebar">
                <header>
                    <img className="header-avatar" src="https://www.w3schools.com/howto/img_avatar.png" alt=""></img>
                    <div className="header-buttons">
                        <div className="header-button">
                            <DonutLargeIcon style={{ color: '#919191' }} />
                        </div>
                        <div className="header-button">
                            <ChatIcon style={{ color: '#919191' }} />
                        </div>
                        <div className="header-button">
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

                <div className="chat-list">
                    {chatList.map((chat, key) => (
                        <ChatListItem
                            key={key}
                            onClick={()=>setActiveChat(chat)}
                            chatInfo={chat}
                        />
                    ))}
                </div>
            </div>

            <div className="content-area">
                {activeChat.id !== undefined &&
                    <ChatWindow />
                }
                {activeChat.id === undefined &&
                    <ChatIntro />
                }
            </div>
        </div>
    );
}