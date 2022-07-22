// CHAKRA:
import { Box, Button, Flex, FormControl, Input, Select } from '@chakra-ui/react'

// REACT:
import { useState } from 'react'

// COMPONENTS:
import { useUpdateProjectMutation } from '../redux/services/projects'

// PROJECT EDIT:
export default function ProjectEdit({ project, onSuccess }) {
  const [updateProject] = useUpdateProjectMutation()
  const [form, setForm] = useState({
    name: project.text,
    description: project.description,
    status: project.status,
  })
  const updateField = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateProject({ id: project.id, updatedProject: form })
      .unwrap()
      .then(() => {
        onSuccess()
      })
      .catch((e) => {})
  }

  return (
    <Box>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <Flex alignItems="flex-end" justifyContent="space-between" gap="2" w="100%">
          <FormControl flexGrow="0" flexBasis="50%" w="auto">
            <Input id="text" type="text" value={form.name} onChange={(e) => updateField('name', e.target.value)} />
          </FormControl>
          <FormControl flexGrow="0" flexBasis="50%" w="auto">
            <Input
              id="text"
              type="text"
              value={form.description}
              onChange={(e) => updateField('description', e.target.value)}
            />
          </FormControl>
          <FormControl w="120px" flexShrink="0">
            <Select id="status" value={form.status} onChange={(e) => updateField('status', e.target.value)}>
              <option value="Not Yet Started">Not Yet Started</option>
              <option value="In Progress">In Progress</option>
              <option value="Finished">Finished</option>
            </Select>
          </FormControl>

          <Button type="submit" colorScheme="blue">
            Save
          </Button>
        </Flex>
      </form>
    </Box>
  )
}
