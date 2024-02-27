import { useMutation } from "@tanstack/react-query";
import { PersonData } from "../interfaces/person-data";
import axios from "axios";


// try catch para testar a aplicação
const postData = async (data: PersonData) => {
    try {
        const response = await axios.post("http://localhost:3200/send", data);
        console.log("Request successful:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error while sending data:", error);
        throw error;
    }
}

export function useIdentityMutation(){
    const { mutate, isLoading, isSuccess, isError } = useMutation({
        mutationFn: (data: PersonData) => postData(data)
    })

    return {
        mutate,
        isLoading,
        isSuccess,
        isError
    }
}