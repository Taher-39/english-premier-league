import React from 'react';
import { useHistory } from 'react-router';

const Teams = (props) => {
    const { strTeam, idTeam, strTeamBadge } = props.team;
    const history = useHistory();
    const exploreInfo = (idTeam) => {
        history.push(`team/${idTeam}`)
    }
    const teamStyle = {
        border: '2px solid lightblue',
        margin: "20px",
        padding: '20px',
        borderRadius: "10px",
        textAlign: 'center',
        width: '250px',
        height: '200px'
    }
    console.log(strTeamBadge)
    return (
        <div className="col-lg-3 col-md-4 col-sm-5 col-xm-6">
            <div style={teamStyle}>
                <img src={strTeamBadge}  width="50px"/>
                <h3>{strTeam}</h3>
                <p>Sports type: Football</p>
                <button className="btn btn-info" onClick={() => exploreInfo(idTeam)}>Explore</button>
            </div>
        </div>
       
    );
};

export default Teams;