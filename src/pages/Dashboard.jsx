import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMembers } from "../redux/slice/memberSlice";
import MemberCard from "../components/MemberCard";
import Sidebar from "../components/Sidebar";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#3b82f6", "#f87171"]; // Blue: men, Red: women

const Dashboard = () => {
  const dispatch = useDispatch();
  const members = useSelector((state) => state.members.list);
  const loading = useSelector((state) => state.members.loading);

  useEffect(() => {
    dispatch(fetchMembers());
  }, [dispatch]);

  if (loading) return <p className="loading-text">Loading members...</p>;

  const genderData = [
    { name: "Men", value: members.filter((m) => m.gender === "male").length },
    {
      name: "Women",
      value: members.filter((m) => m.gender === "female").length,
    },
  ];

  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="main-content">
        <div className="dashboard-grid">
          {/* Left: Member Cards */}
          <div className="member-cards">
            {members.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>

          {/* Right: Pie Chart */}
          <div className="chart-container">
            <h2>Employee Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={genderData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {genderData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
