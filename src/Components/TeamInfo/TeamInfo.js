import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamInfo.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebook, faTwitterSquare, faYoutube} from '@fortawesome/free-solid-svg-icons'

const TeamInfo = () => {
    const { idTeam } = useParams();
    const [teamInfo, SetTeamInfo] = useState([])
    const { intFormedYear, strGender, strCountry, strTeam, strSport, strTeamBadge, strStadiumThumb } = teamInfo;
    
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                SetTeamInfo(data.teams[0])
                // console.log(data.teams)
            })
    }, [idTeam])
    console.log(strTeamBadge)
    return (
        <div>
            <div>
                <img src={strStadiumThumb} width="100%" height="200vh" />
                {/* <img src={strTeamBadge} /> */}
            </div>
            <div id="main-area">
                <div className="container">
                    <div className="team-info">
                        <div id="team-details">
                            <h4>{strTeam}</h4>
                            <p> <span><ing src="../../Icon/found 1.png" /></span> Founded: {intFormedYear}</p>
                            <p> <span></span> Country: {strCountry}</p>
                            <p> <span></span> Sport: {strSport}</p>
                            <p> <span></span> Gender: {strGender}</p>
                        </div>
                        <div id="team-img">
                            <img src="https://i2-prod.mirror.co.uk/incoming/article9373836.ece/ALTERNATES/s1200c/Football-Soccer-Spanish-La-Liga-Santander-Sevilla-v-Barcelona.jpg" width="100%" height="250vh" />
                        </div>
                    </div>
                    <div className="mt-5">
                        <p>Football is played in accordance with a set of rules known as the Laws of the Game.
                        The ball is 68–70 cm (27–28 in) in circumference and known as the football.
                        The two teams each compete to get the ball into the other team's goal
                        (between the posts and under the bar), thereby scoring a goal.
                        Players are not allowed to touch the ball with hands or arms while it is in play,
                        except for the goalkeepers within the penalty area.
                        </p>

                        <p>Other players mainly use their feet to strike or pass the ball, but may also use any other
                        part of their body except the hands and the arms. The team that
                        has scored more goals at the end of the game is the winner;
                        if both teams have scored an equal number of goals either a draw is declared or the
                        game goes into extra time or a penalty shootout depending on the format of the competition.
                        ptain who has only one official responsibility as mandated by the Laws of the Game:
                        to represent their team in the coin toss prior to kick-off or penalty kicks.
                        </p>
                    </div>
                    <footer>
                        {/* <span><a href=""><FontAwesomeIcon icon={faFacebook} /></a></span> */}
                        {/* <span><FontAwesomeIcon icon={faTwitterSquare} /></span> */}
                        {/* <span><a href=""><FontAwesomeIcon icon={faYoutube} /></a></span> */}
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default TeamInfo;