import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamInfo.css';
import fb from '../../Icon/Facebook.png';
import tw from '../../Icon/Twitter.png';
import yt from '../../Icon/YouTube.png';
import found from "../../Icon/found.png";
import flag from "../../Icon/flag.png";
import football from "../../Icon/football.png";
import gender from "../../Icon/gender-sign.png";
import femaleImg from '../../Photo/female2.png';

const TeamInfo = () => {
    const { idTeam } = useParams();
    const [teamInfo, SetTeamInfo] = useState([])
    const { intFormedYear, strGender, strCountry, strTeam, strSport, strTeamBadge, strStadiumThumb, strFacebook, strTwitter, strYoutube, strTeamFanart4 } = teamInfo;
    
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                SetTeamInfo(data.teams[0])
            })
    }, [idTeam])    
    return (
        <div>
            <header id="team-banner">
                <img id="team-stadium" src={strStadiumThumb} width="100%" height="250vh" />
                <div width="100%" height="200vh"></div>
                <img id="team-badge" src={strTeamBadge} width="125px"/>
            </header>

            <section id="main-area">
                <div className="container" id="team">
                    <div className="team-info">
                        <div id="team-details">
                            <h4>{strTeam}</h4>
                            <p> <span><img src={found} width="25px" /></span>  Founded: {intFormedYear}</p>
                            <p> <span><img src={flag} width="25px" /></span>  Country: {strCountry}</p>
                            <p> <span><img src={football} width="25px" /></span>  Sport: {strSport}</p>
                            <p> <span><img src={gender} width="25px" /></span>  Gender: {strGender}</p>
                        </div>
                        <div id="team-img">
                            {
                                strGender === 'Female' ? <img src={femaleImg} width="100%" height="250vh" />
                                : <img src={strTeamFanart4} width="100%" height="250vh" />
                            }
                        </div>
                    </div>
                    <div className="description">
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
                        <h3>Stay With</h3>
                        <ul>
                            <li><a href={strFacebook} target="blank" ><img src={fb} /></a></li>
                            <li><a href={strTwitter} target="blank" ><img src={tw} /></a></li>
                            <li><a href={strYoutube} target="blank" ><img src={yt} /></a></li>
                        </ul>
                    </footer>
                </div>
            </section>
            
        </div>
    );
};

export default TeamInfo;