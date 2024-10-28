import { Button, Input, message, Tabs } from 'antd'
import React, { useState } from 'react'
import { signupUser, signupAdmin } from "../../services/authService"

const SignupPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);

    const handleSignup = async () => {
        try {
            const response = isAdmin ? await signupAdmin(email, password, name) : await signupUser(email, password, name);
            if (response) {
                message.success("Signup sucessful!");
            }
        } catch (error) {
            message.error("Signup failed. Please try again.")
        }
    }

  return (
    <div>
        <h2>{isAdmin ? "Admin Signup" : "User Signup"}</h2>
        <Input placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
        <Input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <Input.Password placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>

        <div>
            <Tabs>
                <Tabs.TabPane tab="User Signup" key="user"/>
                <Tabs.TabPane tab="Admin Signup" key="admin" />
            </Tabs>
        </div>

        <Button type='primary' onClick={handleSignup}>
            {isAdmin ? "Sign Up as Admin": "Sign Up as User"}
        </Button>
    </div>
  )
}

export default SignupPage
