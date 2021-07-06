import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/dashboard")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <div className="pl-10 sm:pl-72  py-20 ">
      <Card className="h-full border-2 rounded-2xl p-10 bg-blue-100 w-2/3">
        <Card.Body >
          <h2 className="text-center mb-6 font-bold text-2xl">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label className="">Email</Form.Label>
              <Form.Control className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label className="">Password</Form.Label>
              <Form.Control className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group  id="password-confirm">
              <Form.Label className="">Password Confirmation</Form.Label>
              <Form.Control className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <div className="bg-blue-400 my-5 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full">
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
            </div>
          </Form>
          <div className="w-100 text-center mt-2">
              Already have an account? <Link to="/login">Log In</Link>
          </div>
        </Card.Body>
      </Card>
      
    </div>
  )
}


