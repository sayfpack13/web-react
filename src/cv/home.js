import React from 'react'
import { getUser } from './assets/utils/functions'

export default function Home() {
  var user = getUser()

  return (
    <div>WELCOME {user.status ? user.data.name : ""} TO CV !!</div>
  )
}
