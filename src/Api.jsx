import axios from "axios"
const Http = `https://api.github.com/users`;
const Api = {
    getUser: async (user) =>{
        try {
            let response = await axios.get(`${Http}/${user}`)
            return response.data
        } catch (error) {
            return 'Usuário não encontrado';
        }
    }
}

export default Api;