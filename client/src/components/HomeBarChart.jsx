// CHAKRA:
import { Box, Heading } from '@chakra-ui/react'

// REACHARTS:
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

// REDUX:
import { useGetProjectsQuery } from '../redux/services/projects'

// HOME BAR CHART:
export default function HomeBarChart() {
  // Data Tools ------------->
  const { data } = useGetProjectsQuery()
  const barData = data?.map((data) => {
    return {
      name: data.name,
      low: data.Issues.filter((issue) => issue.priority === 'low' || issue.priority === 'Low').length,
      medium: data.Issues.filter((issue) => issue.priority === 'Medium' || issue.priority === 'medium').length,
      high: data.Issues.filter((issue) => issue.priority === 'High' || issue.priority === 'high').length,
    }
  })
  // ----<

  return (
    <Box>
      <Heading size="md" textAlign="center" my={2}>
        Issue Priority Levels by Project
      </Heading>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          width={800}
          height={400}
          data={barData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="low" stackId="a" fill="#51A3A3" />
          <Bar dataKey="medium" stackId="a" fill="#FFB20F" />
          <Bar dataKey="high" stackId="a" fill="#DB5A42" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  )
}
