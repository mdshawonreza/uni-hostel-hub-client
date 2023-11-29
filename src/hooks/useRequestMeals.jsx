import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useRequestMeals = () => {
    const axiosSecure=useAxiosSecure()
    const {data : requestMeals = [], refetch } =useQuery({
        queryKey : ['requestMeals'] ,
        queryFn : async ()=>{
            const res= await axiosSecure.get('/mealRequests')
            return res.data
        }
    })
    return [requestMeals , refetch ]
};

export default useRequestMeals;