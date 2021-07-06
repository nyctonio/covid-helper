import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/dashboard")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <>
    <div className="pl-10 sm:pl-56 py-20">
      <Card className="h-full border-2 rounded-2xl p-10 bg-blue-100 w-2/3">
        <Card.Body>
          <h2 className="text-center mb-6 font-bold text-2xl">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="password" ref={passwordRef} required />
            </Form.Group>
            <div className="bg-blue-400 my-5 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full">
            <Button disabled={loading} className="w-100" type="submit">
              Log In
            </Button>
            </div>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
          <div className="w-100 text-center mt-2">
          Need an account? <Link to="/signup">Sign Up</Link>
          </div>
        </Card.Body>
      </Card>
      </div>
    </>
  )
}
