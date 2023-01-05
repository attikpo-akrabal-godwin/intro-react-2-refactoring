import { useState } from "react"
import { useNavigate } from "react-router-dom"



export const Login = ()=>{
    let [pseudo,setPseudo] = useState("")
    let [password,setPassword] = useState("")
    let [pseudoErrMsg,setPseudoErrMsg] = useState("")
    let [passwordErrMsg,setPasswordMsg] = useState("")
    let navigate = useNavigate();

    const handleChange = (e)=>{
        setPasswordMsg("")
        setPseudoErrMsg("")
        
        if (e.target.name==="pseudo") {
            setPseudo(e.target.value)
        }else{
            setPassword(e.target.value)
        }
    }
    
    const  handleSubmit = (e)=>{
        if (!pseudo) {
            setPseudoErrMsg("veillez renseigner votre pseudo")
            setPseudo("")
        }

        if (!password) {
            setPasswordMsg("veillez renseigner votre mots de passe") 
            setPassword("")
        }
        if (pseudo&&password) {
            if (password!=="boncool") {
                setPasswordMsg("pseudo ou mot de passe  incorrecte")
            }else{
                setPseudo("")
                setPassword("")
                localStorage.setItem("user","conected")
                navigate("/calendar")
            }
        }
        
       
    }
   
    let viewPseudoErrMsg=null
    if (pseudoErrMsg) {
        viewPseudoErrMsg = (<span className="hd-red" > {pseudoErrMsg} </span>)
    }

    let viewPasswordErrMsg=null
    if (passwordErrMsg) {
        viewPasswordErrMsg = (<span className="hd-red" > {passwordErrMsg} </span>)
    }

    return (
        <>
            <div className="container" >
                <div className="form" >
                        
                        <div className="imput-content">  
                            <label className="imput-label" htmlFor="pseudo" >
                                <input name="pseudo" onChange={handleChange}  className="input-txt"  placeholder="pseudo"  type="text"   />
                                {viewPseudoErrMsg}
                            </label>    
                            <label className="imput-label" htmlFor="pseudo" >
                                <input name="password" onChange={handleChange}  className="input-txt" placeholder="mot de passe"  type="password"  />
                                {viewPasswordErrMsg}
                            </label>
                            <button onClick={handleSubmit} className="btn-b"> se connecter  </button>
                        </div>
                </div>
            </div>
        </>
    )
}