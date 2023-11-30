import React from "react";

function Settings() {
    return (
        <div className="container">
            <h1>Settings Page</h1>

            <section>
                <h2>Account Settings</h2>
                <p>Change your password:</p>
                <button>Change Password</button>
                <p>Manage your email preferences:</p>
                <button>Email Preferences</button>
                <p>Set up two-factor authentication:</p>
                <button>Two-Factor Authentication</button>
            </section>

            <section>
                <h2>Profile Settings</h2>
                <p>Upload a profile picture or avatar:</p>
                <input type="file" />
                <p>Set your display name:</p>
                <label>Display Name: <input type="text" /></label>
                <p>Write a short bio:</p>
                <textarea placeholder="Write a short bio"></textarea>
            </section>

            <section>
                <h2>Notification Settings</h2>
                <p>Manage your notification preferences:</p>
                <button>Manage Notifications</button>
                <p>Receive promotional emails:</p>
                <label>
                    <input type="checkbox" /> Yes, I want to receive promotional emails
                </label>
            </section>
        </div>
    );
}

export default Settings;
