import axios from "axios";

export const getTransactionHistory = async (url:string) => {
    return axios.get(url,
        {
            timeout: 60000,
        },
    );
}