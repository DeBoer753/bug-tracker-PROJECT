// CHAKRA:
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  StackDivider,
  VStack,
} from '@chakra-ui/react'

// REACT:
import { useState } from 'react'
import { useAddNewProjectMutation } from '../redux/services/projects'

import ProjectDisplay from './ProjectDisplay'

// PROJECT:

export function Project() {
  const [addNewProject] = useAddNewProjectMutation()
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
    <>
      <Flex gap="10px" flexDirection="column">
        <form onSubmit={handleSubmit}>
          <Flex flexWrap="wrap" justifyContent="space-between">
            <Heading style={{ color: 'white' }}>Project Dashboard</Heading>
          </Flex>
          <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
            <FormControl>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                id="name"
                type="name"
                required
                value={form.name}
                placeholder="Project name here."
                onChange={(e) => updateProject('name', e.target.value)}
              />
              <FormLabel htmlFor="description">Description</FormLabel>
              <Input
                id="description"
                type="description"
                required
                value={form.description}
                onChange={(e) => updateProject('description', e.target.value)}
                placeholder="Write a description for your project here"
              />
              <FormLabel>Operational Status</FormLabel>
              <Select placeholder="Select progress" value={form.status}>
                <option value="option1">Progress</option>
                <option value="option2">Finish</option>
              </Select>
            </FormControl>
            <Button type="submit" h="2rem" size="lg">
              Submit
            </Button>
          </VStack>
        </form>
      </Flex>
      <div style={{ margin: '30px', justifyContent: 'center', alignItems: 'center' }}>
        <Container style={{ boxShadow: '0px 10px 10px gray' }}>
          <Box>
            <ProjectDisplay />
          </Box>
        </Container>
      </div>
    </>
  )
}
