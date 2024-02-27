import { Button, Spacer } from '@chakra-ui/react'
import { useState } from 'react'
import './App.css'
import PrimaryInput from './components/Input/PrimaryInput'
import SuccessModal from './components/Modal/modal'
import { useIdentityMutation } from './hooks/useIdentityMutation'

function App() {
  const { mutate, isSuccess } = useIdentityMutation()
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [secondName, setSecondName] = useState("")

  const submit = () => {
    mutate({
      email,
      firstName,
      lastName: secondName
    })
  }

  return (
    <div className='container'>
      <SuccessModal 
        title='Successfully confirmed' 
        isVisible={isSuccess}
        subText='Keep an eye on your email, you should soon receive confirmation of your subscription.'
      />
      <form>
        <div className='name-form-container'>
          <PrimaryInput 
            value={firstName} 
            onChange={event => setFirstName(event.target.value)}
            name="firstName"
            label="FirstName"
            placeholder="Luiz"
          />
          <PrimaryInput 
            value={secondName} 
            onChange={event => setSecondName(event.target.value)}
            name="secondName"
            label="Sobrenome"
            placeholder="Ferreira"
          />
        </div>
        <Spacer height="4" />
        <PrimaryInput 
          value={email} 
          onChange={event => setEmail(event.target.value)}
          name="email"
          label="Type your e-mail"
          placeholder="luizferreira@gmail.com"
        />
        <Spacer height="4" />
        <Button colorScheme='green' width="100%" onClick={submit}>enviar</Button>
      </form>
      <div className="product-details">
        <h2>Monthly signature</h2>
        <Spacer height="4" />
        <p>you will pay</p>
        <span>£ 250,00</span>
        <Spacer height="4" />
        <p>Regras: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      </div>
    </div>
  )
}

export default App