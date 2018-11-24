import React from 'react';

const LostDog = (props) => {
    return (
        <div>
            <h1>These dogs are lost:</h1>
            <ul>
                {props.data.length <= 0 ? "NO DB ENTRIES YET" : props.data.map(dat => (
                    <li style={{ padding: "10px" }}>
                        <span style={{ color: "gray" }}> id: </span> {dat.id} <br />
                        <span style={{ color: "gray" }}> data: </span>
                        {dat.message}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default LostDog;