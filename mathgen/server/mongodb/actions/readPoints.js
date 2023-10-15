import connectDB from "../index.js"
import User from "../models/user.js"

export default async function getPoints(identifier) {
    await connectDB()
    let val
    try {
        const val = await User.findOne({ _id: identifier });
        return val.points;
    } catch (e) {
        throw new Error("Unable to find user.")
    }
}