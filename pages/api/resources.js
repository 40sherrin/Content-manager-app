import axios from "axios"
export default async function resources(req, res){
    if(req.method === 'GET'){
        const DataRes = await fetch('http://localhost:3001/api/resources' || 'http://127.0.0.1:3001/api/resources')
        const data = await DataRes.json()
        return res.send(data)
    }
    if(req.method === 'POST'){
        console.log(req.body)
        const {title, description, link, timeToFinish, priority} = req.body
        if(!title || !description || !link || !timeToFinish || !priority){
            return res.status(422).send('data are missing')
        }
        try{
            const axiosRes = await axios.post('http://127.0.0.1:3001/api/resources', req.body)
            return res.send(axiosRes.data)
        }catch{
            return res.status(422).send('Data cannot be stored')
        }
    }
    
}