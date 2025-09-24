import React from "react";
import { useDispatch } from "react-redux";
import { updateStatus } from "../redux/slice/memberSlice";

const StatusSelector = ({ member }) => {
  const dispatch = useDispatch();

  return (
    <select
      value={member.status}
      onChange={(e) =>
        dispatch(updateStatus({ id: member.id, status: e.target.value }))
      }
    >
      <option value="Idle">Idle</option>
      <option value="Working">Working</option>
      <option value="Blocked">Blocked</option>
      <option value="Completed">Completed</option>
    </select>
  );
};

export default StatusSelector;
