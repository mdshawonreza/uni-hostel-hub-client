
import useAxiosSecure from "./useAxiosSecure"

import { useQuery } from "@tanstack/react-query"

const useMeals=()=>{
    

    const axiosSecure=useAxiosSecure()
    const {data : meals = [], refetch } =useQuery({
        queryKey : ['meals'] ,
        queryFn : async ()=>{
            const res= await axiosSecure.get('/meals')
            return res.data
        }
    })
    return [meals , refetch ]
}

export default useMeals