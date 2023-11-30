import React, { useState } from "react";

function Workouts() {


    const [plan, setPlan] = useState([]);

    const [newWorkout, setNewWorkout] = useState({ name: "", category: "" });

    const updatePlan = () => {
        if (newWorkout.name && newWorkout.category) {
            setPlan([...plan, newWorkout]);
            setNewWorkout({ name: "", category: "" });
        }
    };

    const handleChange = (event) => {
        setNewWorkout({
            ...newWorkout,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <div className="container mt-4">
            <h1>Workouts Page</h1>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Category</th>
                        <th scope="col">Exercise</th>
                    </tr>
                </thead>
                <tbody>
                    {plan.map((exercise, index) => (
                        <tr key={index}>
                            <td>{exercise.category}</td>
                            <td>{exercise.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="mt-4">
                <h2>Add Your Workout</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exerciseName" className="form-label">
                            Exercise Name:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exerciseName"
                            name="name"
                            value={newWorkout.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exerciseCategory" className="form-label">
                            Exercise Category:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exerciseCategory"
                            name="category"
                            value={newWorkout.category}
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={updatePlan}
                    >
                        Add to Plan
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Workouts;
