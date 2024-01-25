import { useGoogleLogin } from "@react-oauth/google"
import { useNavigate } from "react-router-dom"

import { Card, Spacer, Button } from "@nextui-org/react"

import { IconGoogle } from "../../assets/icons"


const LoginPage = () => {
 const navigate = useNavigate()

 const loginToGoogle = useGoogleLogin({
  onSuccess: tokenResponse => {
   localStorage.setItem("loginWith", "Google")
   localStorage.setItem("accessToken", tokenResponse.access_token)
   navigate("/home")
  },
 })

 return (
  <div style={{display: "flex", alignItems: 'center', justifyContent: "center", minHeight: "100vh"}}>
   <Card css={{ mw: "420px", p: "20px" }}>
    <h5>
     Login with
    </h5>
    <Spacer y={1} />
    <Spacer y={1} />

    <Button color='gradient' auto ghost onClick={() => loginToGoogle()}>
     <IconGoogle />
     <Spacer x={0.5} />
     Google
    </Button>
   </Card>
  </div>
 )
}

export default LoginPage