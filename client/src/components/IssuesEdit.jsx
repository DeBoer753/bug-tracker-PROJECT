import { Button, Flex, FormControl, Input, Select } from '@chakra-ui/react'

import { useState } from 'react'
import { useUpdateIssueMutation } from '../redux/services/issues'

function IssuesEdit({ Issues, onSuccess }) {
  const [updateIssues] = useUpdateIssueMutation()
  console.log(Issues)
  const [form, setForm] = useState({
    name: Issues.name,
    description: Issues.description,
    status: Issues.status,
  })
  const updateField = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateIssues({ projectId: Issues.Project.id, issueId: Issues.id, updatedIssues: form })
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
            <Select id="status" value={form.status} onChange={(e) => updateField('status', e.target.value)}>
              <option value="Closed">Closed</option>
              <option value="Open">Open</option>
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

export default IssuesEdit