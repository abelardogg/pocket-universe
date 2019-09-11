const fs = require('fs');

const DB_PLANETS_RAW = fs.readFileSync('private/db/planets.json');
const DB_PLANETS = JSON.parse(DB_PLANETS_RAW);

let planetsDao = () =>{
    return {
        getAllPlanets: () => {
            const planets = DB_PLANETS.planets;
            return planets;
        },
        getAllPlanetsShortInfo: () => {
            const planets = DB_PLANETS.planets;
            planetShortInfoList = [];
            
            for(let p of planets){
                const newPlanet = {
                    key: p.key,
                    name: p.name,
                    type: p.type,
                    mass: `${p.mass.base}x${p.mass.multipler} ${p.mass.unit}`,
                    diameter: `${p.diameter.base}x${p.diameter.multipler} ${p.diameter.unit}`,
                    gravity: `${p.gravity.base} ${p.gravity.unit}`
                }
                planetShortInfoList.push(newPlanet);
            }

            return planetShortInfoList;
        }
    }
}

module.exports = planetsDao;
