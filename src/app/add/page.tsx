"use client"
import Image from 'next/image'
import styles from '../page.module.css'
import React , {useState} from 'react'
import { Database } from '@sqlitecloud/drivers';
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


// let database = new Database(`sqlitecloud://admin2:test1234@nspcsdqyiz.sqlite.cloud:8860/chinook.sqlite`);

export default function Home() {


    const [customer, setCustomer] = useState({
    CustomerId: 0,
    FirstName: '',
    LastName: '',
    Company: '',
    Address: '',
    City: '',
    State: '',
    Country: '',
    PostalCode: '',
    Phone: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await fetch('http://localhost:3000/api/add',{
      method:'PUT',
      cache:'no-cache',
      body:JSON.stringify({
          'FirstName':customer.FirstName,
          'CustomerId':customer.CustomerId,
          'LastName':customer.LastName,
          'Company':customer.Company

      })
  })
  const response = await resp.json();
  
  if(response.data.length < 1){
      toast.error("No Data Found!",{
          duration : 1500,
          position:'top-center'
      })

     
  }
  else if(resp.status == 201){
      toast.success("Data Updated Successfully!",{
          duration : 1500,
          position:'top-center'
      })
      setTimeout(function(){ location.reload(); }, 1500);
      
  }

  };
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
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="CustomerId"
        placeholder="Customer ID"
        value={customer.CustomerId}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="FirstName"
        placeholder="First Name"
        value={customer.FirstName}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="LastName"
        placeholder="Last Name"
        value={customer.LastName}
        onChange={handleInputChange}
      />
      {/* Add input fields for other properties similarly */}
      <button type="submit">Add Customer</button>
    </form>
        <p style={{ marginTop: '24px' }}>
          {/* {receivedOn} in {elapsedMs}ms */}
        </p>
      </div>


    </main>
  )
}
