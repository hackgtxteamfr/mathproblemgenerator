import connectDB from "../index.js"
import User from "../models/user.js"

export default async function getPoints(identifier) {
    await connectDB()
    try {
        const val = await User.findOne({ _id: identifier });
        return val.points;
    } catch (e) {
        console.log(e)
        throw new Error("Unable to find user.")
    }
}