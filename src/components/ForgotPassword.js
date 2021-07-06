import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <>
    <div className="pl-10 sm:pl-72  py-20 ">
      <Card className="h-full border-2 rounded-2xl p-10 bg-blue-100 w-2/3">
        <Card.Body>
          <h2 className="text-center mb-6 font-bold text-2xl">Password Reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label className="text-center mb-4 text-lg" >Email</Form.Label>
              <Form.Control className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="email" ref={emailRef} required />
            </Form.Group>
            <div className="bg-blue-400 my-5 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full">
            <Button  disabled={loading} className="w-100" type="submit">
              Reset Password
            </Button>
            </div>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/login">Login</Link>
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
