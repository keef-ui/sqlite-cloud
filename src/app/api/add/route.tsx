
import {NextRequest,NextResponse} from "next/server";
import { Database } from '@sqlitecloud/drivers';

const SQLITECLOUD_URL = process.env.SQLITECLOUD_URL
const SQLITECLOUD_TOKEN = process.env.SQLITECLOUD_TOKEN

// SQLITECLOUD_URL=https://nspcsdqyiz.sqlite.cloud:8090
// SQLITECLOUD_TOKEN=sqlitecloud://admin2:tester1234@nspcsdqyiz.sqlite.cloud:8860
// refrerence code: https://blog.devgenius.io/apis-in-next-js-update-delete-request-6ca90d929cab


export async function PUT(request: NextRequest){
    // requesting data from front-end
        const req = await request.json();
        console.log(req)
    // making connection with the database
    let database = new Database(`${SQLITECLOUD_TOKEN}/chinook.sqlite`);
        try {
            if (req.FirstName) {
    // updating user data here where user id matches the one we received
                    await database.sql`INSERT INTO customers (CustomerId,FirstName,LastName,Company,Email)
                    VALUES( ${req.CustomerId},	${req.FirstName} ,${req.LastName},${req.Company},"test@test.com");`;
                const data = await database.sql`SELECT * FROM customers WHERE CustomerId=${req.CustomerId}`;
                    return NextResponse.json({data},{status:201})
                }
                else{
                    throw new Error("Task field is required")
                }
            } catch (error) {
                return NextResponse.json({message:(error as {message:string}).message})
            }
        
    }

   
