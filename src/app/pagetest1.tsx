//
// page.tsx - minimal example of displaying data from SQLite Cloud with Next.js
//

import Image from 'next/image'
import styles from './page.module.css'
import React from 'react'

import { Database } from '@sqlitecloud/drivers';
// const Database = require('@sqlitecloud/drivers');


let database = new Database('sqlitecloud://admin2:test1234@nspcsdqyiz.sqlite.cloud:8860/chinook.sqlite');
// let database = new Database('sqlitecloud://nspcsdqyiz.sqlite.cloud:8860?apikey=gVRd4SbfNxFJwHt1iaJXMVdcLFlKS0VjcfcGTmmCyvA');
// or use sqlitecloud://xxx.sqlite.cloud:8860?apikey=xxxxxxx
// sqlitecloud://user:password@xxx.sqlite.cloud:8860/chinook.sqlite
let name = 'Breaking The Rulescc';


// let results2 = (async function main () {
//     let results = await database.sql`SELECT * FROM customers`
//     // console.log(results[2].FirstName)
//     return results
// })();
// console.log(results2[6].FirstName)
// => returns [{ AlbumId: 1, Name: 'Breaking The Rules', Composer: 'Angus Young... }]


export default async function Home() {
  const results2=  await database.sql`SELECT * FROM customers`
  console.log(results2)
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;<code className={styles.code}>src/app/page.tsx</code> v1.0.3
        </p>
        <div>
          <a href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
            By <Image src="/vercel.svg" alt="Vercel Logo" className={styles.vercelLogo} width={100} height={24} priority />
          </a>
        </div>
      </div>

      <div style={{ margin: '24px' }}>
        <table>
          <thead>
            <tr>
              <th>First Name</th> <th>Last Name</th> <th>Company</th>
              {/* Add more columns as needed */}
            </tr>
          </thead>
          <tbody>
            {results2 &&
              results2.map((item, index) => (
                <tr key={index}>
                  <td>{item.FirstName}</td> <td>{item.LastName}</td> <td>{item.Company}</td>
                  {/* Add more cells as needed */}
                </tr>
              ))}
          </tbody>
        </table>
        <p style={{ marginTop: '24px' }}>
       
        </p>
      </div>

      <div className={styles.grid}>
        <a href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app" className={styles.card} target="_blank" rel="noopener noreferrer">
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app" className={styles.card} target="_blank" rel="noopener noreferrer">
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app" className={styles.card} target="_blank" rel="noopener noreferrer">
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app" className={styles.card} target="_blank" rel="noopener noreferrer">
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>Instantly deploy your Next.js site to a shareable URL with Vercel.</p>
        </a>
      </div>
    </main>
  )
}
