import React from 'react';
import { useHistory } from 'react-router';
import './Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Teams = (props) => {
    const { strTeam, idTeam, strTeamBadge, strSport } = props.team;
    const history = useHistory();
    const exploreInfo = (idTeam) => {
        history.push(`team/${idTeam}`)
    }
    // console.log(strTeamBadge)
    return (
        <div className="col-md-4 col-sm-5 col-xm-6">
            <div className="team-style">
                <img src={strTeamBadge} width="80px" alt="" />
                <h3>{strTeam}</h3>
                <p>Sports type: {strSport}</p>
                <button className="btn btn-danger" onClick={() => exploreInfo(idTeam)}>
                    Explore    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
       
    );
};

export default Teams;