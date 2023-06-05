import { useState } from 'react'
import reactLogo from './assets/react.svg'
import logo from './assets/images/avatar-angela-gray.webp'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Notifications from './components/AllNotifications'

function App() {
  const [count, setCount] = useState(0)

  const notifications = [
    {
      id: 1,
      action: 'Notification 1',
      relatedTo: 'Chess club',
      time: '1 hour',
      read: false,
      user: {
        name: 'John',
        avatar: logo
      }
    }
  ]

  return (
    <>
      <Header />
      <Notifications notifications={notifications} />
    </>
  )
}

export default App
