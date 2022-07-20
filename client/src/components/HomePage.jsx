import React, { useState } from 'react'

// CHAKRA:
import { Box, Button, Flex, Heading } from '@chakra-ui/react'

import { CloseButton, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'

import { ResponsiveContainer } from 'recharts'

// REACT ROUTER:
import { Link } from 'react-router-dom'
import HomeBarChart from './HomeBarChart'
import HomePieChart1 from './HomePieChart1'
import HomePieChart2 from './HomePieChart2'

// HOME PAGE:
export default function HomePage() {
  return (
    <Flex gap="10px" flexDirection="column">
      <Box border="1px" borderColor="red">
        <Flex flexWrap="wrap" justifyContent="space-evenly">
          <Box border="1px" width={{ base: '100%', sm: '100%', md: '50%' }} borderColor="red">
            <HomeBarChart />
          </Box>
          <Box border="1px" maxW={'100%'} width={{ base: '100%', sm: '100%', md: '25%' }} borderColor="red">
            <HomePieChart1 />
          </Box>
          <Box border="1px" maxW={'100%'} width={{ base: '100%', sm: '100%', md: '25%' }} borderColor="red">
            <HomePieChart2 />
          </Box>
        </Flex>
      </Box>
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
              <Tr>
                <Td>PetMates</Td>
                <Td>Cant figure out how to render pa...</Td>
                <Td>GerDawg420</Td>
                <Td>07/18/2022</Td>
                <Td textAlign={'right'}>red</Td>
                <Td>
                  <Flex>
                    <Button size="sm">❌</Button>
                    <Button size="sm">📝</Button>
                  </Flex>
                </Td>
              </Tr>
              <Tr>
                <Td>JustToDoIt</Td>
                <Td>Data not linking to calander...</Td>
                <Td>DanDizzle44</Td>
                <Td>07/03/2022</Td>
                <Td textAlign={'right'}>yellow</Td>
                <Td>
                  <Flex>
                    <Button size="sm">❌</Button>
                    <Button size="sm">📝</Button>
                  </Flex>
                </Td>
              </Tr>
              <Tr>
                <Td>Weather Box</Td>
                <Td>Redux issues...</Td>
                <Td>DeBoer753</Td>
                <Td>6/23/2022</Td>
                <Td textAlign={'right'}>blue</Td>
                <Td>
                  <Flex>
                    <Button size="sm">❌</Button>
                    <Button size="sm">📝</Button>
                  </Flex>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Flex>
  )
}
