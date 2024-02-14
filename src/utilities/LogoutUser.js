 const LogoutUser = () => {
    localStorage.removeItem("jwtToken") // Remove token from localStorage
    setAuth({ isLoggedIn: false, user: null });
}

export default LogoutUser;