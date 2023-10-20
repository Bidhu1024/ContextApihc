
import './App.css'
import UserContextProvider from './context/UserContextProvider'

function App() {


  return (
    <UserContextProvider>
      Hi all
    </UserContextProvider>
  )
}

export default App
