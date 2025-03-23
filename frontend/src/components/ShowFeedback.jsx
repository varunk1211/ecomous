import React, { useState, useEffect } from 'react';
export default function ShowFeedback() {
    const [branches, setBranches] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch("http://localhost:5001/branches") // Update if your backend is deployed
        .then((response) => response.json())
        .then((data) => {
          setBranches(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching branches:", error);
          setLoading(false);
        });
    }, []);
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">people opinoins</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className="list-disc pl-6">
            {branches.map((branch, index) => (
              <li key={index} className="mb-2 p-2 bg-gray-100 rounded shadow">
                {branch.message}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
}
