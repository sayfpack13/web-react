

const WEB_NAME = "CV"
const PAGES = [
    {
        url: "/",
        name: "Home"
    },
    {
        url: "/login",
        name: "Login"
    }
]

const LOGGEDIN_PAGES = [
    {
        url: "/",
        name: "Home"
    },
    {
        url: "/logout",
        name: "Logout"
    }
]


const fields_style = { width: "max-content", marginLeft: "auto", marginRight: "auto", backgroundColor: "#ffffff80" }


const users = [
    {
        username: "sayfpack",
        password: "sayfpack",
        name: "sayf pack",
        age: 23,
        job: "student"
    }
]


module.exports = { WEB_NAME, PAGES,LOGGEDIN_PAGES, fields_style,users }