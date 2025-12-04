function App() {
    // 1. Create state for Like
    const [likeCount, setLikeCount] = React.useState(0);

    // 2. Create state for Dislike
    const [dislikeCount, setDislikeCount] = React.useState(0);

    // 3. Create state for Random (Star)
    const [starCount, setStarCount] = React.useState(0);

    return (
        <div className="app-container">
            <h1>React Counters</h1>
            
            <div className="button-group">
                
                {/* LIKE SECTION */}
                <div className="card">
                    <button className="btn-like" onClick={() => setLikeCount(likeCount + 1)}>
                        Like 👍
                    </button>
                    <div className="count-text">{likeCount}</div>
                </div>

                {/* DISLIKE SECTION */}
                <div className="card">
                    <button className="btn-dislike" onClick={() => setDislikeCount(dislikeCount + 1)}>
                        Dislike 👎
                    </button>
                    <div className="count-text">{dislikeCount}</div>
                </div>

                {/* RANDOM SECTION */}
                <div className="card">
                    <button className="btn-random" onClick={() => setStarCount(starCount + 1)}>
                        Star 🌟
                    </button>
                    <div className="count-text">{starCount}</div>
                </div>

            </div>
        </div>
    );
}

// Select the 'root' div from index.html
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

// Render the App component
root.render(<App />);
