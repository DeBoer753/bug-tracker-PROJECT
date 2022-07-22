// CHAKRA:
import { Button, Flex, FormControl, Input, Select } from '@chakra-ui/react'

// REACT:
import { useState } from 'react'

// REDUX:
import { useUpdateIssueMutation } from '../redux/services/issues'

// ISSUE EDIT:
export default function IssuesEdit({ issue, onSuccess }) {
  const [updateIssues] = useUpdateIssueMutation()
  const [form, setForm] = useState({
    name: issue.name,
    description: issue.description,
    status: issue.status,
    priority: issue.priority,
  })
  const updateField = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateIssues({ projectId: issue.ProjectId, issueId: issue.id, updatedIssue: form })
      .unwrap()
      .then(() => {
        onSuccess()
      })
      .catch((e) => {})
  }

  return (
    <>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <Flex alignItems="flex-end" justifyContent="space-between" gap="2" w="100%">
          <FormControl flexGrow="0" flexBasis="50%" w="auto">
            <Input
              id="name"
              type="name"
              value={form.name}
              onChange={(e) => updateField('name', e.target.value)}
              required
            />
          </FormControl>
          <FormControl flexGrow="0" flexBasis="50%" w="auto">
            <Input
              id="description"
              type="description"
              value={form.description}
              onChange={(e) => updateField('description', e.target.value)}
              required
            />
          </FormControl>
          <FormControl w="120px" flexShrink="0">
            <Select
              placeholder="Status?"
              id="status"
              value={form.status}
              onChange={(e) => updateField('status', e.target.value)}
            >
              <option value="Closed">Closed</option>
              <option value="Open">Open</option>
            </Select>
          </FormControl>
          <FormControl w="120px" flexShrink="0">
            <Select
              placeholder="Priority?"
              id="priority"
              value={form.priority}
              onChange={(e) => updateField('priority', e.target.value)}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </Select>
          </FormControl>

          <Button type="submit" colorScheme="blue">
            Save
          </Button>
        </Flex>
      </form>
    </>
  )
}
