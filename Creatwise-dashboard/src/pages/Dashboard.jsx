import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Table from "@/components/Table";

const Dashboard = () => {
  const tabs = [
    "Generated Articles",
    "Published Articles",
    "Scheduled Articles",
    "Archived Articles",
  ];

  const [activeTab, setActiveTab] = useState("Generated Articles");

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-gray-50 p-6">
        {/* Page Title */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Articles</h1>
        </div>

        {/* Navigation Tabs - Centered */}
        <div className="flex justify-center mb-4">
          <div className="flex gap-4 border rounded-full bg-white shadow-sm px-4 py-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm px-4 py-1 rounded-full transition-all ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search for Title & Keywords..."
          className="w-full px-4 py-2 border rounded mb-6 text-sm"
        />

        {/* Show Table only on "Generated Articles" */}
        {activeTab === "Generated Articles" ? (
          <Table />
        ) : (
          <div className="text-center text-gray-400 text-sm mt-20">
            No data to display for "{activeTab}"
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
