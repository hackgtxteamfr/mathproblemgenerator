import getPoints from "../../../server/mongodb/actions/readPoints";
import auth from "../../../server/utils/auth"

export default async function handler(req, res) {
    let data
    if (req.method == 'GET') {
        try {
            data = await getPoints(auth(req)._id)
        } catch (e) {
            console.log(auth(req)._id)
            console.log(e)
            return res.status(500).send("Unable to get points")
        }
        return res.status(200).send(data)
    }
    return res.status(400).send("Incorrect req method type")
}