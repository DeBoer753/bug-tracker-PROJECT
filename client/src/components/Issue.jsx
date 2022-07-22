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
  Text,
  Textarea,
} from '@chakra-ui/react'

// REACT:
import { useState } from 'react'

// REACT ROUTER:
import { useNavigate } from 'react-router-dom'

// REDUX:
import { useAddNewIssueMutation } from '../redux/services/issues'
import { useGetProjectsQuery } from '../redux/services/projects'

// ISSUE:
export default function Issue() {
  const { data } = useGetProjectsQuery()
  const [addIssue] = useAddNewIssueMutation()
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [project, setProject] = useState('')
  const [issue, setIssue] = useState({
    name: '',
    description: '',
    status: '',
    priority: '',
  })

  const updateIssue = (name, value) => {
    setIssue({
      ...issue,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addIssue({ projectId: project, newIssue: issue })
      .unwrap()
      .then((data) => {
        setIsLoading(false)
        if (data.error) {
          setError(data.error)
        } else {
          setSuccess('Issue Submitted')
        }
      })
      .then(() => {
        setIssue({
          name: '',
          description: '',
          status: '',
          priority: '',
        })
        setProject('')
      })
      .catch((e) => {})
  }
  return (
    <Box>
      <Box border="1px" borderColor="red" mb={5}>
        <Heading fontSize={25}>Issues</Heading>
      </Box>
      <form onSubmit={handleSubmit}>
        <FormControl border="1px" borderColor="red" mb={5}>
          <Heading fontSize={17} mb={5}>
            Create an Issue:
          </Heading>
          <FormLabel htmlFor="project">Choose project</FormLabel>
          <Select
            border="1px"
            borderColor="red"
            mb={5}
            id="project"
            required
            placeholder="Select a Project"
            // value={project}
            onChange={(e) => setProject(e.target.value)}
          >
            {data?.map((project, i) => (
              <option key={i} value={project.id}>
                {project.name}
              </option>
            ))}
          </Select>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            border="1px"
            borderColor="red"
            placeholder="Enter Issue Title"
            id="name"
            type="name"
            required
            value={issue.name}
            onChange={(e) => updateIssue('name', e.target.value)}
          ></Input>
          <FormLabel htmlFor="description">Description</FormLabel>
          <Textarea
            border="1px"
            borderColor="red"
            id="description"
            required
            value={issue.description}
            onChange={(e) => updateIssue('description', e.target.value)}
          ></Textarea>
          <FormLabel htmlFor="status">Status</FormLabel>
          <Select
            border="1px"
            borderColor="red"
            mb={5}
            id="status"
            placeholder="Status?"
            value={issue.status}
            onChange={(e) => updateIssue('status', e.target.value)}
          >
            <option value="Open">Open</option>
            <option value="Closed">Closed</option>
          </Select>
          <FormLabel htmlFor="priority">Priority</FormLabel>
          <Select
            border="1px"
            borderColor="red"
            mb={5}
            id="priority"
            value={issue.priority}
            placeholder="Priority?"
            onChange={(e) => updateIssue('priority', e.target.value)}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </Select>
          <Flex justifyContent={'space-between'} border="1px" borderColor="red">
            <Button type="submit" bg="green">
              Add New Issue
            </Button>
            <Box w="50%" alignContent={'center'}>
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
            </Box>
          </Flex>
        </FormControl>
      </form>
      <Box border="1px" borderColor="red">
        <Heading fontSize={17}>Issue Selected:</Heading>
        <Box>
          <Text>PetMates</Text>
        </Box>
      </Box>
    </Box>
  )
}
