import axios from 'axios'

//making a call to out api/backend

const API_URL = '/api/users/'

const register = async(userData) => {
    const response = await axios.post(API_URL, userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

// Logout user
const logout = () => {
    localStorage.removeItem('user')
  }
const authService ={
    register,
}

export default authService