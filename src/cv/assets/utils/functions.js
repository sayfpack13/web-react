const { users } = require("./vars")

function sendResult(status, data) {

    return { status: status, data: data }
}



function getUser() {
    var user = sessionStorage.getItem("user")
    if (user != null) {
        return sendResult(true, JSON.parse(user))
    }else{
        return sendResult(false, "Please login !!")
    }
}

function loginUser(username, password) {
    // check if already loggedin
    var user=getUser()
    if(user.status){
        return sendResult(true,user.data)
    }


    // log in user
    for (user of users) {
        if (user.username == username) {
            if (user.password != password) {
                return sendResult(false, "Check Password !!")
            } else {
                sessionStorage.setItem("user", JSON.stringify(user))
                return sendResult(true, user)
            }
        }
    }

    return sendResult(false, "Check Username !!")
}


function logoutUser() {
    sessionStorage.removeItem("user");
}

module.exports = { loginUser,getUser,logoutUser }