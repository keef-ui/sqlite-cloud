//
// page.tsx - minimal example of displaying data from SQLite Cloud with Next.js
//

import Image from 'next/image'
import styles from './page.module.css'
import React from 'react'
import sqlitecloud,{ Database } from '@sqlitecloud/drivers';
import Editable from "./editable"

const SQLITECLOUD_URL = process.env.SQLITECLOUD_URL
const SQLITECLOUD_TOKEN = process.env.SQLITECLOUD_TOKEN

// Customers table in chinook.sqlite demo database
interface Customers {
  FirstName: string
  LastName: string
  Company: string,
  CustomerId: number
  // ...more columns
}

// async function getCustomers(): Promise<{ customers: Customers[]; elapsedMs: number; receivedOn: string }> {
//   const startedOn = new Date()

//   // read "customers" from "chinook.sqlite"
//   const response = await fetch(`${SQLITECLOUD_URL}/
// weblite/chinook.sqlite/tables/customers/rows`, {
//     cache: 'no-store', // This disables caching
//     headers: {
//       Authorization: `Bearer ${SQLITECLOUD_TOKEN}`
//     }
//   })

//   const json = await response.json()

//   console.log(json)
//   return { customers: json.data, elapsedMs: new Date().getTime() - startedOn.getTime(), receivedOn: new Date().toISOString() }
// }


let database = new Database(`sqlitecloud://admin2:test1234@nspcsdqyiz.sqlite.cloud:8860/chinook.sqlite`);

export default async function Home() {
  // const { elapsedMs, receivedOn } = await getCustomers()
  const customers=  await database.sql`SELECT * FROM customers`
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
            {customers &&
              customers.map((item : Customers, index) => (
                <tr key={index}>
                  <td>{item.FirstName}</td> <td>{item.LastName}</td> <td>{item.Company}<Editable company={[item.CustomerId,item.Company]}/></td>
                  {/* Add more cells as needed */}
                </tr>
              ))}
          </tbody>
        </table>
        <p style={{ marginTop: '24px' }}>
          {/* {receivedOn} in {elapsedMs}ms */}
        </p>
      </div>


    </main>
  )
}
