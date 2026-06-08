
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if(!clerkPubKey){
  throw new Error('Clerk publishable key is not defined in environment variables')
}
createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={clerkPubKey}>
      <BrowserRouter> 
        <App />
      </BrowserRouter>,
  </ClerkProvider>
  
)
