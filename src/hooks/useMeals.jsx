import { useEffect, useState } from "react"
import useAxiosSecure from "./useAxiosSecure"
import axios from "axios"
import { useQuery } from "@tanstack/react-query"

const useMeals=()=>{
    // const [meals ,setMeals]=useState([])
    // const [loading,setLoading]=useState(true)

    // useEffect(()=>{
    //     fetch('http://localhost:5000/meals')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setMeals(data)
    //         setLoading(false)
    //     })
    // },[])

    const axiosSecure=useAxiosSecure()
    const {data : meals = [] } =useQuery({
        queryKey : ['meals'] ,
        queryFn : async ()=>{
            const res= await axiosSecure.get('/meals')
            return res.data
        }
    })
    return [meals ]
}

export default useMeals