import React, { useEffect, useState } from 'react';
import Teams from '../Teams/Teams';

const Home = () => {
    const [teams, setTeams] = useState([])
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League'
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setTeams(data.teams)
            // console.log(data.teams)
        })
    }, [])
    // console.log(teams[0].strTeam)
    return (
        <div>
            <img src="https://www.bison.co.uk/wp-content/uploads/2018/08/Wembely.jpg" width="100%" height="200vh"/>
            <div className="row">
                {
                        teams.map(team => <Teams team = {team}></Teams>)
                }
            </div> 
        </div>
        
    );
};

export default Home;