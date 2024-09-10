import { footer } from "../../components/footer";
import { header } from "../../components/header";
import { getData } from "../../libs/http";
import { userName } from "../../libs/utils";

header()
footer()

 export function userProfile (user) {
    let firstName = document.getElementById('name')
    firstName.value = user.name
    
    let number = document.getElementById('phone-number')
    number.value = user.phone
    }
    
    let token = localStorage.getItem("token")
    getData(`accounts?token=${token}`)
    .then(res => {
      userProfile(res.data[0])
      userName(res.data[0])
    })
    .catch(error => console.log(error))