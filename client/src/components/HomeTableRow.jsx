// CHAKRA:
import { Link as Anchor, Box, Button, Flex, Td, Text, Tr } from '@chakra-ui/react'

// REACT:
import { useState } from 'react'

// REACT ROUTER:
import { Link } from 'react-router-dom'

// REDUX:
import { useDeleteIssueMutation, useGetIssuesQuery } from '../redux/services/issues'

// COMPONENTS:
import IssuesEdit from './IssuesEdit'

// HOME TABLE ROW:
export default function HomeTableRow({ issue }) {
  const [deleteIssue] = useDeleteIssueMutation()
  const [showEditForm, setShowEditForm] = useState(false)

  return (
    <Box>
      {showEditForm ? (
        <Tr key={issue.id}>
          <Td>
            <IssuesEdit issue={issue} onSuccess={() => setShowEditForm(false)} />
          </Td>
        </Tr>
      ) : (
        <Tr key={issue.id}>
          <Td>
            <Anchor as={Link} to={`/projects/${issue.ProjectId}`}>
              {issue.Project.name}
            </Anchor>
          </Td>
          <Td>
            <Anchor as={Link} to={`/projects/${issue.ProjectId}/issues/${issue.id}`}>
              {issue.name}: {issue.description}
            </Anchor>
          </Td>
          <Td>{issue.User.username}</Td>
          <Td>{new Date(issue.createdAt).toDateString()}</Td>
          <Td>
            <Flex justifyContent={'flex-end'} gap={3} alignItems="center">
              <Text>{issue.priority}</Text>
              <Button size="sm" onClick={() => setShowEditForm(true)}>
                📝
              </Button>
              <Button size="sm" onClick={() => deleteIssue({ projectId: issue.ProjectId, issueId: issue.id })}>
                ❌
              </Button>
            </Flex>
          </Td>
        </Tr>
      )}
    </Box>
  )
}
