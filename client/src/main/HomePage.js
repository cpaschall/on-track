// import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Outlet, Link } from 'react-router-dom';
import WorkoutForm from '../workout/WorkoutForm';
import './HomePage.css';

const HomePage = () => {

    return (
        <div>
            <header className="masteHead">
            <div><h3>Profile</h3></div>
            <div><h3>App Name</h3></div>
            <div><h3>Alerts</h3></div>
            </header>
            <main>
                <section className="fitness">
                    <div><a href="./workoutLog.html"><h3>Today's Workout</h3></a></div>
                    <div><h3>All Workouts</h3></div>
                    <div><h3>Exercises</h3></div>
                    <Link to="/workouts">Workouts</Link>
                    {/* <BrowserRouter>
                        <Routes>
                            <Route path="/workouts" element={<WorkoutForm />} />
                        </Routes>
                    </BrowserRouter> */}
                </section>
                <section className="nutrition">
                    <div><h3>Today's Nutrition Stats</h3></div>
                    <div><h3>Nutrition Tracking History</h3></div>
                    <div><h3>Recipes</h3></div>
                    <div><h3>Food Database</h3></div>
                </section>
                <section className="calendar">
                    <div><h3>Calendar</h3></div>
                </section>
                <section className="misc">
                    <div><h3>Misc1</h3></div>
                    <div><h3>Misc2</h3></div>
                    <div><h3>Misc3</h3></div>
                    <div><h3>Misc4</h3></div>
                </section>
            </main>
            <footer className="footerNav">
                <nav>
                    <ul>
                        <li><a href="">Link1</a></li>
                        <li><a href="">Link2</a></li>
                        <li><a href="">Link3</a></li>
                        <li><a href="">Link4</a></li>
                    </ul>
                </nav>
            </footer>
        </div> 
    )
}

export default HomePage;