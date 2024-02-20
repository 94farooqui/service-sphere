 
 
 const LogoutUser = () => {
    localStorage.removeItem("jwtToken") // Remove token from localStorage
}

export default LogoutUser;