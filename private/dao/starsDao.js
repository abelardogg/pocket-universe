const fs = require('fs');

const DB_STARS_RAW = fs.readFileSync('private/db/stars.json');
const DB_STARS = JSON.parse(DB_STARS_RAW);

let planetsDao = () =>{
    return {
        getAllStars: () => {
            const stars = DB_STARS.stars;
            return stars;
        },
        getAllStarsShortInfo: () => {
            const stars = DB_STARS.stars;
            starsShortInfoList = [];
            
            for(let s of stars){
                const newStar = {
                    key: s.key,
                    name: s.name,
                    type: s.type,
                    mass: `${s.mass.base}x${s.mass.multipler} ${s.mass.unit}`,
                    diameter: `${s.diameter.base}x${s.diameter.multipler} ${s.diameter.unit}`,
                    gravity: `${s.gravity.base} ${s.gravity.unit}`
                }
                starsShortInfoList.push(newStar);
            }

            return starsShortInfoList;
        }
    }
}

module.exports = planetsDao;
