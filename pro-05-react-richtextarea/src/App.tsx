import React from 'react';

const showNotification = () => {
    if ("Notification" in window) {
        Notification.requestPermission().then((permission) => {
            if (permission === "granted") {
                const notification = new Notification("Notification Title", {
                    body: "Notification Body",
                });

                notification.addEventListener("click", () => {
                    window.focus(); // it will open the browser tab that has the web app that showing the notification.
                    notification.close();
                });
            }
        });
    }
};

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <button onClick={showNotification}>Show Notification</button>
            </header>
        </div>
    );
}

export default App;
