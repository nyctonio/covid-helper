import React from 'react'
import { AuthProvider } from "../contexts/AuthContext"
import {Link} from 'react-router-dom'
import PrivateRoute from "./PrivateRoute"

export default function Hello() {
    return (
        <div>
            <Link to="/dashboard">Dashboard</Link>
        </div>
    )
}
