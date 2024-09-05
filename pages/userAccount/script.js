import { footer } from "../../components/footer";
import { header } from "../../components/header";
import { getData } from "../../libs/http";

header()
footer()

 function userProfile (user) {
    let firstName = document.getElementById('first-name')
    firstName.value = user.name
    
    let number = document.getElementById('phone')
    number.value = user.phone
    }
    
    let token = localStorage.getItem("token")
    getData(`users?token=${token}`)
    .then(res => {
      userProfile(res.data[0])
    })
    .catch(error => console.log(error))