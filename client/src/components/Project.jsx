// CHAKRA:
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
} from '@chakra-ui/react'

// REACT:
import { useState } from 'react'
import { useAddNewProjectMutation } from '../redux/services/projects'

// COMPONENTS:
import ProjectDisplay from './ProjectDisplay'

// PROJECT:
export function Project() {
  const [addNewProject] = useAddNewProjectMutation()
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [form, setForm] = useState({
    name: '',
    description: '',
    status: '',
  })

  const updateProject = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addNewProject(form)
      .unwrap()
      .then(() => {
        setForm({
          name: '',
          description: '',
          status: '',
        })
      })
      .catch((e) => {})
  }
  return (
    <Box>
      <Box border="1px" borderColor="red" mb={5}>
        <Heading fontSize={25}>Projects</Heading>
      </Box>
      <form onSubmit={handleSubmit}>
        <FormControl border="1px" borderColor="red" mb={5}>
          <Heading fontSize={17} mb={5}>
            Create a Project:
          </Heading>
          <FormLabel htmlFor="name">Project Name</FormLabel>
          <Input
            mb={5}
            id="name"
            type="name"
            required
            value={form.name}
            placeholder="Enter project name"
            onChange={(e) => updateProject('name', e.target.value)}
          />
          <FormLabel htmlFor="description">Description</FormLabel>
          <Textarea
            id="description"
            required
            value={form.description}
            onChange={(e) => updateProject('description', e.target.value)}
            placeholder="Enter project description here..."
          />
          <FormLabel mb={5}>Operational Status</FormLabel>
          <Select
            border="1px"
            borderColor="red"
            mb={5}
            placeholder="Select progress"
            value={form.status}
            onChange={(e) => updateProject('status', e.target.value)}
          >
            <option value="Not Yet Started">Not Yet Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Finished">Finished</option>
          </Select>
          <Button type="submit" h="2rem" size="lg" bg="green">
            Submit
          </Button>
        </FormControl>
      </form>
      <Box border="1px" borderColor="red">
        <Heading fontSize={17} mb={2}>
          Projects List:
        </Heading>
        <ProjectDisplay />
      </Box>
    </Box>
  )
}
