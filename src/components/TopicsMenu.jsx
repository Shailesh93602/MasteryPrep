import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/TopicsMenu.css';

const TopicsMenu = ({ topics, topic, onTopicClick }) => {
    const location = useLocation();

    const handleTopicClick = (selectedTopic) => {
        onTopicClick(selectedTopic);
    };

    return (
        <div className="topics-menu">
            <ul>
                {topics.map((t, index) => (
                    <li key={index}>
                        <Link
                            className={`link ${location.pathname.includes(`${topic}/${encodeURIComponent(t.toLowerCase())}`) ? 'active' : ''}`}
                            to={`/${topic}/${encodeURIComponent(t.toLowerCase())}`}
                            onClick={() => handleTopicClick(t)}
                        >
                            {t}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TopicsMenu;
