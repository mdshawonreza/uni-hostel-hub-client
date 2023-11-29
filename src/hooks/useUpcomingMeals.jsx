import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"

const useUpcomingMeals=()=>{
    

    const axiosSecure=useAxiosSecure()
    const {data : upcomingMeals = [], refetch } =useQuery({
        queryKey : ['meals'] ,
        queryFn : async ()=>{
            const res= await axiosSecure.get('/upcomingMeals')
            return res.data
        }
    })
    return [upcomingMeals , refetch ]
}

export default useUpcomingMeals