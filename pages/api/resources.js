import axios from "axios"
export default async function resources(req, res){
    if(req.method === 'GET'){
        const DataRes = await fetch(`${process.env.API_URL}/resources`)
        const data = await DataRes.json()
        return res.send(data)
    }
    if(req.method === 'POST' || req.method === 'PATCH'){
        console.log(req.body)
        const {id, title, description, link, timeToFinish, priority} = req.body
        if(!title || !description || !link || !timeToFinish || !priority){
            return res.status(422).send('data are missing')
        }

        const url = req.method === 'POST' ? `${process.env.API_URL}/resources` : `${process.env.API_URL}/resources/` + id 
        
        try{
            const axiosRes = await axios[req.method.toLowerCase()](url, req.body)
            return res.send(axiosRes.data)
        }catch{
            return res.status(422).send('Data cannot be stored')
        }
    }
    
}