import React, { useState, useEffect } from "react";

function Goals() {

    const [fitnessData, setFitnessData] = useState([]);

    useEffect(() => {
        fetch('https://6567b2d09927836bd973c1d2.mockapi.io/my/api/fitness')
            .then((response) => response.json())
            .then((fitnessData) => setFitnessData(fitnessData))
        console.log(fitnessData);
    }, []);
    return (
        <div>
            <h1 className="d-flex align-items-center flex-column greeting-container">Nutritional Meals To Meet Your Goals</h1>
            <ul>
                {fitnessData.map(item => (
                    <i><h2 className="bi bi-dash-circle" key={item.id}> {item.name} </h2>
                        <ul>
                            {item.ingredients.map(ingredient => (
                                <li key={ingredient.name}>
                                    <i><h3 className="text-muted bi bi-arrow-90deg-up">{ingredient.name}: {ingredient.measurement}</h3> - Carbs: {ingredient.carbs}g, Fats: {ingredient.fats}g, Proteins: {ingredient.protein}g</i>
                                    
                                </li>
                                
                            ))}
                            <br />
                        </ul>
                    </i>
                ))}
            </ul>
        </div>
    )
}

export default Goals;