// src/components/Header.jsx
import React, { useEffect, useState } from "react";

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch random user data
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
        const fetchedUser = data.results[0];
        setUser({
          name: `${fetchedUser.name.first} ${fetchedUser.name.last}`,
          avatar: fetchedUser.picture.thumbnail,
          role: Math.random() > 0.5 ? "Team Lead" : "Team Member", // random role for demo
        });
      })
      .catch((err) => console.log("Failed to fetch user:", err));
  }, []);

  if (!user) return <div className="header">Loading...</div>;

  return (
    <header className="header">
      <div className="dashboard-title">Team Pulse Dashboard</div>

      <div className="header-right">
        <div className="date">{new Date().toLocaleDateString()}</div>

        <div className="user-info">
          <img src={user.avatar} alt="avatar" className="user-avatar" />
          <div className="user-details">
            <div className="user-name">{user.name}</div>
            <div className="user-role">{user.role}</div>
          </div>
        </div>

        <button
          className="mode-toggle"
          onClick={() => document.body.classList.toggle("dark")}
        >
          Toggle Mode
        </button>
      </div>
    </header>
  );
};

export default Header;
