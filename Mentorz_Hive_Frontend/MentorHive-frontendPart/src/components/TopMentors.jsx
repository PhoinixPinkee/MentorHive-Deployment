import React, { useEffect, useState } from "react";
import MentorCard from "./MentorCard";
import mentorAPI from "../apiManger/mentor";
import useMentorStore from "../store/mentors";
import { NavLink } from "react-router-dom";
import { Button, Spin } from "antd";

const TopMentors = () => {
  const { setMentorsData } = useMentorStore();
  const [topMentors, setTopMentors] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to get 4 random mentors from the array
  const selectTopMentors = (mentors) => {
    const selected = [];
    const totalMentors = mentors.length;

    while (selected.length < 4 && selected.length < totalMentors) {
      const randomIndex = Math.floor(Math.random() * totalMentors); // Get random index
      const randomMentor = mentors[randomIndex];

      // Check if the random mentor has already been selected
      if (!selected.includes(randomMentor)) {
        selected.push(randomMentor); // Add unique mentor
      }
    }

    return selected; // Return the selected mentors
  };

  const fetchAllMentors = async () => {
    setLoading(true);
    try {
      const response = await mentorAPI.getAllMentors();
      const allMentors = response?.data?.mentors || [];
      setMentorsData(allMentors); // Store all mentors

      setTopMentors(selectTopMentors(allMentors)); // Set 4 random mentors directly from the API response
    } catch (error) {
      console.error("Error fetching mentors:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllMentors();
  }, []);

  return (
    <div className="container mx-auto my-10">
      <h2 className="mb-8 text-3xl font-bold text-center text-orange-color">
        Top Mentors
      </h2>
      {loading ? (
        <div className="flex justify-center my-10">
          <Spin size="large" />
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {topMentors.map((mentor) => {
            return <MentorCard mentor={mentor} key={mentor?._id} />;
          })}
        </div>
      )}
      <div className="mt-8 text-center">
        {/* Redesigned button */}
        <NavLink to="/mentors">
          <Button
            type="default"
            style={{
              background: "linear-gradient(135deg, #e0e0e0, #f7f7f7)",
              color: "#4a4a4a",
              padding: "12px 20px",
              fontSize: "1rem",
              fontWeight: "bold",
              borderRadius: "25px",
              border: "none",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "linear-gradient(135deg, #d1d1d1, #bfbfbf)";
              e.target.style.color = "white";
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 6px 10px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "linear-gradient(135deg, #e0e0e0, #f7f7f7)";
              e.target.style.color = "#4a4a4a";
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
            }}
          >
            View All
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default TopMentors;
