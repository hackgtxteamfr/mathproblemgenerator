import { verify } from "jsonwebtoken"

export default function auth(req) {
    const jwt = req.cookies.OurJWT
    if (!jwt) {
        throw new Error("Please Login first")
    }
    try {
        const decoded = verify(jwt, process.env.SECRET)
        return decoded
    } catch (e) {
        throw new Error("Token is invalid")
    }
}