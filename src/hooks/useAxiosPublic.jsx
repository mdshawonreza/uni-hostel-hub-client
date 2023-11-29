import axios from "axios";


const axiosPublic=axios.create({
    baseURL: 'https://uni-hostel-hub-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;