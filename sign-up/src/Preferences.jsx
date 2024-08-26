import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Preferences.css'; // Import the CSS file

const Preferences = () => {
    const [preferences, setPreferences] = useState({
        "Business-journalism": true,
        "Sports-journalism": true,
        "World-news": true,
        "Entertainment": true,
        "Art-news": true,
        "Investigative-journalism": true,
        "Press-Releases": true,
        "SelectAll": false,
    });

    const navigate = useNavigate(); // Initialize the navigate hook

    const handleChange = (e) => {
        const { name, checked } = e.target;
        setPreferences(prev => ({
            ...prev,
            [name]: checked,
        }));
    };

    const handleUnsubscribeAll = (e) => {
        const { checked } = e.target;
        setPreferences({
            "Business-journalism": !checked,
            "Sports-journalism": !checked,
            "World-news": !checked,
            "Entertainment": !checked,
            "Art-news": !checked,
            "Investigative-journalism": !checked,
            "Press-Releases": !checked,
            "SelectAll": checked,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Updated Preferences:', preferences);
        // Navigate to the Main Page after updating preferences
        navigate('/home');
    };

    return (
        <form onSubmit={handleSubmit} className="preferences-form">
            <h2>Choose Your Preferences</h2>
            <p>Select the types of content you'd like to receive updates on:</p>
            
            <div className="preference-item">
                <label>
                    <input
                        type="checkbox"
                        name="Business-journalism"
                        checked={preferences["Business-journalism"]}
                        onChange={handleChange}
                    />
                    Business Journalism
                </label>
                <p>Get the latest insights and trends from the world of business every week.</p>
            </div>
            
            <div className="preference-item">
                <label>
                    <input
                        type="checkbox"
                        name="Sports-journalism"
                        checked={preferences["Sports-journalism"]}
                        onChange={handleChange}
                    />
                    Sports Journalism
                </label>
                <p>Stay updated with the latest scores, player news, and major sports events.</p>
            </div>
            
            <div className="preference-item">
                <label>
                    <input
                        type="checkbox"
                        name="World-news"
                        checked={preferences["World-news"]}
                        onChange={handleChange}
                    />
                    World News
                </label>
                <p>Receive comprehensive news from around the globe, delivered daily.</p>
            </div>
            
            <div className="preference-item">
                <label>
                    <input
                        type="checkbox"
                        name="Entertainment"
                        checked={preferences["Entertainment"]}
                        onChange={handleChange}
                    />
                    Entertainment
                </label>
                <p>Get the latest on movies, TV shows, celebrities, and entertainment events.</p>
            </div>
            
            <div className="preference-item">
                <label>
                    <input
                        type="checkbox"
                        name="Art-news"
                        checked={preferences["Art-news"]}
                        onChange={handleChange}
                    />
                    Art News
                </label>
                <p>Explore updates on the art world, including exhibitions and artist features.</p>
            </div>
            
            <div className="preference-item">
                <label>
                    <input
                        type="checkbox"
                        name="Investigative-journalism"
                        checked={preferences["Investigative-journalism"]}
                        onChange={handleChange}
                    />
                    Investigative Journalism
                </label>
                <p>In-depth investigations uncovering the stories behind the headlines.</p>
            </div>
            
            <div className="preference-item">
                <label>
                    <input
                        type="checkbox"
                        name="Press-Releases"
                        checked={preferences["Press-Releases"]}
                        onChange={handleChange}
                    />
                    Press Releases
                </label>
                <p>Receive official press releases from major companies and organizations.</p>
            </div>
            
            <div className="preference-item">
                <label>
                    <input
                        type="checkbox"
                        name="unsubscribeAll"
                        checked={preferences.SelectAll}
                        onChange={handleUnsubscribeAll}
                    />
                   Clear All
                </label>
            </div>
            
            <button type="submit" className="update-button">
                NEXT
            </button>
        </form>
    );
};

export default Preferences;
