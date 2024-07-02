import { NextRequest, NextResponse } from "next/server";
import { Database } from '@sqlitecloud/drivers';

const SQLITECLOUD_URL = process.env.SQLITECLOUD_URL;
const SQLITECLOUD_TOKEN = process.env.SQLITECLOUD_TOKEN;

// SQLITECLOUD_URL=https://nspcsdqyiz.sqlite.cloud:8090
// SQLITECLOUD_TOKEN=sqlitecloud://admin2:tester1234@nspcsdqyiz.sqlite.cloud:8860
// Reference code: https://blog.devgenius.io/apis-in-next-js-update-delete-request-6ca90d929cab

export async function DELETE(request: NextRequest) {
    // Requesting data from the front end
    const req = await request.json();
    // Making a connection with the database
    let database = new Database(`${SQLITECLOUD_TOKEN}/chinook.sqlite`);
    try {
        if (req.CustomerId) {
            // Deleting the customer where the CustomerId matches the one we received
            await database.sql`DELETE FROM customers WHERE CustomerId=${req.CustomerId};`;
            const data = await database.sql`SELECT * FROM customers`;
            return NextResponse.json({ data }, { status: 200 });
        } else {
            throw new Error("CustomerId field is required");
        }
    } catch (error) {
        return NextResponse.json({ message: (error as { message: string }).message });
    }
}
