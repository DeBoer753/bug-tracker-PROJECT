// CHAKRA:
import { Box, Flex } from '@chakra-ui/react'

// REACT:
import { useState } from 'react'

// RECHARTS:
import { ResponsiveContainer } from 'recharts'

// REDUX
import { Link } from 'react-router-dom'

// REACT ROUTER:
import HomeBarChart from './HomeBarChart'
import HomePieChart1 from './HomePieChart1'
import HomePieChart2 from './HomePieChart2'
import HomeTable from './HomeTable'

// HOME PAGE:
export default function HomePage() {
  return (
    <Flex gap="10px" flexDirection="column">
      <Box border="1px" borderColor="red">
        <Flex flexWrap="wrap" justifyContent="space-evenly">
          <Box borderRight="1px" width={{ base: '100%', sm: '100%', md: '50%' }} borderColor="red">
            <HomeBarChart />
          </Box>
          <Box borderRight="1px" maxW={'100%'} width={{ base: '100%', sm: '100%', md: '25%' }} borderColor="red">
            <HomePieChart1 />
          </Box>
          <Box maxW={'100%'} width={{ base: '100%', sm: '100%', md: '25%' }} borderColor="red">
            <HomePieChart2 />
          </Box>
        </Flex>
      </Box>
      <Box border="1px" borderColor="red" w="100%" position="relative">
        <HomeTable />
      </Box>
    </Flex>
  )
}
