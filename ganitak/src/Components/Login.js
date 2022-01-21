// import 'react-router' from 'react-router';
import React, { useState } from "react"
import { Button, FormGroup, InputGroup } from "@blueprintjs/core"
// import Login from './Components/Login.js'


const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  return (
    <>

      <form className="auth-form">

        <FormGroup label="Email" labelFor="email">
          <InputGroup

            id="email"
            placeholder="Email"

            type="email"
            value={email}

            onChange={e => setEmail(e.target.value)}

      />
        </FormGroup>

        <FormGroup label="Password" labelFor="password">
          <InputGroup

            id="password"
            placeholder="Password"
            // style={{InputGroup}}

            type="password"
            value={password}

            onChange={e => setPassword(e.target.value)}
      />
        </FormGroup>

        <Button intent="primary" 
        fill type="submit" 
        // onClick={this.handleSubmit}
        style={{ color: '#369f14', margin: '15px', size:'calc(15px + 2vmin)'}} 
        text="Sign In" />

      </form>

    </>

  )

}


export default Login;