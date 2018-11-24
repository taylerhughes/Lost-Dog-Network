import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
    <div>
        <h1>Home</h1>
        <Link to="/found-dog">I've Lost a Dog</Link>
        <Link to="/lost-dog">I've Found a Dog</Link>
    </div>
    )
}

export default Home;