import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mt-4">
      <h1>Welcome to Your Fitness App</h1>

      <p>
        Start your fitness journey by adding and tracking your workouts with our
        easy-to-use platform.
      </p>

      <Link to="/workouts" className="btn btn-primary">
        Build Your Workout
      </Link>
    </div>
  );
}

export default Home;
