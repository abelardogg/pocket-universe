const fs = require('fs');
 
const DB_DATA_RAW = fs.readFileSync('private/db/blog.json');
const DB_DATA = JSON.parse(DB_DATA_RAW);

let blogDao = () => {
    return {
        readAll: () => {
            return DB_DATA.blog;
        }
    }
}

module.exports = blogDao;

