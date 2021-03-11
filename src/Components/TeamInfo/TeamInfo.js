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
    const { intFormedYear, strGender, strCountry, strTeam, 
            strSport, strTeamBadge, strStadiumThumb, strFacebook, 
        strTwitter, strYoutube, strTeamFanart4, strDescriptionEN,
        strDescriptionFR } = teamInfo;
    
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                SetTeamInfo(data.teams[0])
            })
    }, [idTeam])    
    console.log(teamInfo)
    return (
        <div>
            <header className="team-banner">
                <img className="team-stadium" src={strStadiumThumb} width="100%" height="250vh" />
                <img className="logo-overly" src={strTeamBadge} width="100px" />
                <div className="color-overlay"></div>
            </header>
            <section id="main-area">
                <div className="container" >
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
                        <h2 className="text-center pb-3">Club Description</h2>
                        <p>{strDescriptionEN}</p>
                        
                        {
                            strDescriptionFR ? <p>{strDescriptionFR}</p>
                            : <p>
                                    Football is a family of team sports that involve, to varying degrees, 
                                    kicking a ball to score a goal. Unqualified, the word football normally 
                                    means the form of football that is the most popular where the word is used.
                                    Sports commonly called football include association football 
                                    (known as soccer in some countries); gridiron football (specifically American football or Canadian football);
                                    Australian rules football; rugby football (either rugby union or rugby league); and Gaelic football.
                                    These various forms of football 
                                    share to varying extent common origins and are known as football codes
                              </p>
                        }
                        
                    </div>
                    <footer>
                        <h3>Stay With</h3>
                        <ul>
                            <li><a href={`https://${strFacebook}`} target="blank" ><img src={fb} /></a></li>
                            <li><a href={`https://${strTwitter}`} target="blank" ><img src={tw} /></a></li>
                            <li><a href={`https://${strYoutube}`} target="blank" ><img src={yt} /></a></li>
                        </ul>
                    </footer>
                </div>
            </section>
            
        </div>
    );
};

export default TeamInfo;