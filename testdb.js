import { Database } from '@sqlitecloud/drivers';
// const Database = require('@sqlitecloud/drivers');


let database = new Database('sqlitecloud://admin2:test1234@nspcsdqyiz.sqlite.cloud:8860/chinook.sqlite');
// let database = new Database('sqlitecloud://nspcsdqyiz.sqlite.cloud:8860?apikey=gVRd4SbfNxFJwHt1iaJXMVdcLFlKS0VjcfcGTmmCyvA');
// or use sqlitecloud://xxx.sqlite.cloud:8860?apikey=xxxxxxx
// sqlitecloud://user:password@xxx.sqlite.cloud:8860/chinook.sqlite
let name = 'Breaking The Rulescc';


(async function main () {
    let results = await database.sql`SELECT * FROM tracks WHERE name = 'Breaking The Rules'`
    console.log(results)
})();

// => returns [{ AlbumId: 1, Name: 'Breaking The Rules', Composer: 'Angus Young... }]
