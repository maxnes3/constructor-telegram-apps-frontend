(props) => {
    return (
        <div className="search-container">
            <div className="search-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="7" stroke="#9E9E9E" strokeWidth="2"></circle>
                    <line x1="16" y1="16" x2="21" y2="21" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round"></line>
                </svg>
            </div>
            <span type="text" className="search-input">Search</span>
            <button className="clear-button">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="6" y1="6" x2="18" y2="18" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round"></line>
                    <line x1="6" y1="18" x2="18" y2="6" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round"></line>
                </svg>
            </button>
        </div>
    );
}

(props) => {
    return (
        <div class="search-container">
            <div class="search-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="7" stroke="#9E9E9E" stroke-width="2"></circle>
                    <line x1="16" y1="16" x2="21" y2="21" stroke="#9E9E9E" stroke-width="2" stroke-linecap="round"></line>
                </svg>
            </div>
            <input type="text" class="search-input" placeholder="Search"/>
            <button class="clear-button">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="6" y1="6" x2="18" y2="18" stroke="#9E9E9E" stroke-width="2" stroke-linecap="round"></line>
                    <line x1="6" y1="18" x2="18" y2="6" stroke="#9E9E9E" stroke-width="2" stroke-linecap="round"></line>
                </svg>
            </button>
        </div>
    );
}