// CHAKRA:
import { Box, Heading } from '@chakra-ui/react'

// RECHARTS:
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

// REDUX:
import { useGetProjectsQuery } from '../redux/services/projects'

// Recharts Tools ------------->
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']
const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}
// ----<

// HOME PIE CHART 1:
export default function HomePieChart1() {
  const { data } = useGetProjectsQuery()
  const pieData = [
    {
      name: 'In Progress',
      value: data?.filter((project) => project.status === 'In Progress' || project.status === 'in progress').length,
    },
    {
      name: 'Finished',
      value: data?.filter((project) => project.status === 'Finished' || project.status === 'finished').length,
    },
    {
      name: 'To Start',
      value: data?.filter((project) => project.status === 'Not Yet Started' || project.status === 'not yet started')
        .length,
    },
  ]

  return (
    <Box>
      <Heading size="md" textAlign="center" my={2}>
        Status Levels by Project
      </Heading>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart width={400} height={100}>
          <Pie data={pieData} labelLine={false} label={renderCustomizedLabel} fill="#8884d8" dataKey="value">
            {data?.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="top" />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  )
}
