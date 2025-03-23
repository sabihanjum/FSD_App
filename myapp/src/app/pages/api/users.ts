import { NextApiRequest, NextApiResponse } from "next";
import db from "../../lib/db"; // Ensure your MySQL connection is correctly set up

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
    const [rows] = await db.execute("SELECT id, name, email FROM users"); // Query MySQL
    res.status(200).json(rows);
    } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal Server Error" });
    }
}
