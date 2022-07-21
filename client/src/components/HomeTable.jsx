import React from 'react'
import {
  Box,
  Button,
  Flex,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import { useGetIssuesQuery } from '../redux/services/issues'
import HomeTableRow from './HomeTableRow'

function HomeTable() {
  const { data, isError, error } = useGetIssuesQuery()
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

export default HomeTable
