import React, { useState } from "react";

const MemberCard = ({ member }) => {
  const [status, setStatus] = useState(member.status);

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    // optionally dispatch to redux here
  };

  return (
    <div className="member-card">
      <img src={member.avatar} alt={member.name} />
      <h3>{member.name}</h3>
      <p>{member.email}</p>

      <select value={status} onChange={handleStatusChange}>
        <option value="Idle">Working</option>
        <option value="Working">Meeting</option>
        <option value="Blocked">Break</option>
        <option value="Completed">Offline</option>
      </select>
    </div>
  );
};

export default MemberCard;
