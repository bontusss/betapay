// The service provides three important methods with the help of axios for HTTP requests & reponses:

// login(): POST {username, password} & save JWT to Local Storage
// logout(): remove JWT from Local Storage
// register(): POST {username, email, phone, password}


import axios from "axios";

class AuthService {
    async login(user) {
        const response = await axios.post('login', {
            username: user.username,
            password: user.password,
        });
        if (response.data.accessToken) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
    }
    logout() {
        localStorage.removeItem('user')
    }
    register(user) {
        return axios.post('register', {
            username: user.username,
            email: user.email,
            phone: user.phone,
            password: user.password,
        })
    }
}

export default new AuthService()