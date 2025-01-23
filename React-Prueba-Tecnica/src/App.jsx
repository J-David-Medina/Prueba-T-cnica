import { Users } from './page/users.jsx'
import { Ejercicio1 } from './components/ejercicio-1.jsx'
import { Ejercicio2 } from './components/ejercicio-2.jsx'

function App() {
  return (
    <>
      <div className="">
        <Ejercicio1 />
        <hr />
        <Ejercicio2 />
        <hr />
        <Users />
      </div>

    </>
  )
}

export default App
