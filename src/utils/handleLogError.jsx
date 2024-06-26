const handleLogError = (error) => {
    if (error.response) {
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
    } else if (error.request) {
        console.log(error.request)
    } else {
        console.log(error.message)
    }
}
export default handleLogError;