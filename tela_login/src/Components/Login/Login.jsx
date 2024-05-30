import React from 'react'
import { useState } from 'react'
import Logo from "../../assets/imagem2.png"
import "./Login.css"

const Login = () => {

    return (
        <div className="container">
            <img className="img" src={Logo} alt="Texto alternativo"></img>
            <div className='form'>
            <form>
                <div><button>Login</button></div>
                <div><button>Criar conta</button></div>
            </form>
            </div>
        </div>
    )
}

export default Login