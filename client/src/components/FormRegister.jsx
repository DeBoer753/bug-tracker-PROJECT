// CHAKRA:
import { Alert, AlertIcon, Box, Button, Flex, FormControl, FormLabel, Input } from '@chakra-ui/react'

// REACT:
import { useState } from 'react'

// REACT ROUTER:
import { Link, useNavigate } from 'react-router-dom'

// FORM REGISTER:
export default function FormRegister() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    state: '',
    city: '',
    DOB: '',
  })

  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    setSuccess('')
    fetch('/api/v1/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false)
        if (data.error) {
          setError(data.error)
        } else {
          setSuccess('Registered Successfully')
        }
      })
  }

  // setting each specific form to each field
  const updateField = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <Alert status="error">
          <AlertIcon /> {error}
        </Alert>
      )}
      {success && (
        <Alert status="success">
          <AlertIcon /> {success}
        </Alert>
      )}

      <FormControl my="5">
        <FormLabel htmlFor="username">Username</FormLabel>
        <Input
          value={form.username}
          id="username"
          type="username"
          onChange={(e) => updateField('username', e.target.value)}
          required
        />
      </FormControl>
      <FormControl my="5">
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input
          value={form.email}
          id="email"
          type="email"
          onChange={(e) => updateField('email', e.target.value)}
          required
        />
      </FormControl>
      <FormControl my="5">
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          value={form.password}
          id="password"
          type="password"
          onChange={(e) => updateField('password', e.target.value)}
          required
        />
      </FormControl>
      <div>
        <FormControl my="5">
          <FormLabel htmlFor="state">State</FormLabel>
          <Input
            value={form.state}
            id="state"
            type="state"
            onChange={(e) => updateField('state', e.target.value)}
            required
          />
        </FormControl>
        <FormControl my="5">
          <FormLabel htmlFor="city">City</FormLabel>
          <Input
            value={form.city}
            id="city"
            type="city"
            onChange={(e) => updateField('city', e.target.value)}
            required
          />
        </FormControl>
        <FormControl my="5">
          <FormLabel htmlFor="date">Date of Birth</FormLabel>
          <Input value={form.DOB} id="date" type="date" onChange={(e) => updateField('DOB', e.target.value)} required />
        </FormControl>
      </div>

      <Flex alignItems={'center'} justifyContent={'space-evenly'}>
        <Button isLoading={isLoading} type="submit" colorScheme="orange">
          Submit
        </Button>
        <Link to="/login">
          <Button>Return To Login</Button>
        </Link>
      </Flex>
    </form>
  )
}
