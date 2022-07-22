// CHAKRA:
import { Box, Table, TableCaption, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react'

// REDUX:
import { useGetIssuesQuery } from '../redux/services/issues'

// COMPONENTS:
import HomeTableRow from './HomeTableRow'

export default function HomeTable() {
  // Data Tools ------------->
  const { data, isError, error } = useGetIssuesQuery()
  // ----<

  return (
    <Box border="1px" borderColor="red" w="100%" position="relative">
      <TableContainer bg="lightgrey" w="100%" position="relative">
        <Table variant="simple">
          <TableCaption>Bugsly</TableCaption>
          <Thead>
            <Tr>
              <Th>Project Name</Th>
              <Th>Issue Brief</Th>
              <Th>Created By</Th>
              <Th>Created Date</Th>
              <Th textAlign={'right'}>Issue Priority</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((data) => (
              <HomeTableRow key={data.id} issue={data} />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}
