import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

import { getUserDataGoogle } from "./services/home-services"


interface UserdataGoogle {
 name: string
 picture: string
 email: string
}

const HomePage = () => {
 const [userDataGoogle, setUserDataGoogle] = useState<null | UserdataGoogle>(null)

 const loginWith = useRef(localStorage.getItem("loginWith"))

 const navigate = useNavigate()

 useEffect(() => {
  const accessToken = localStorage.getItem("accessToken")

  if (accessToken && loginWith.current === "Google") {
   getUserDataGoogle(accessToken).then(resp => {
    setUserDataGoogle(resp)
   })
  }
 }, [loginWith])

 const setLogOut = () => {
  localStorage.removeItem("accessToken")
  localStorage.removeItem("loginWith")
  navigate("/")
 }

 if (!userDataGoogle) return null

 return (
  <>
   <div>
    {userDataGoogle?.name}
    <button onClick={() => setLogOut()}>Log out</button>
   </div>
   <div>
    <div>
     <div>
      <h4>Login with {loginWith.current}</h4>
     </div>
    </div>
   </div>
  </>
 )
}

export default HomePage