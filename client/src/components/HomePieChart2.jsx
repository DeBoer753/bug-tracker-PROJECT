// CHAKRA:
import { Box, Heading } from '@chakra-ui/react'

// RECHARTS:
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

// REDUX:
import { useGetIssuesQuery } from '../redux/services/issues'

// Recharts Pie Data ------------->
const pieData = [
  { name: 'Open', value: 20 },
  { name: 'In Progress', value: 15 },
  { name: 'Close', value: 30 },
]
// ----<

// Recharts Tools  ------------->
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

// HOME PIE CHART 2:
export default function HomePieChart2() {
  const { data } = useGetIssuesQuery()
  const pieData = [
    { name: 'Open', value: data?.filter((issue) => issue.status === 'Open' || issue.status === 'open').length },
    { name: 'Closed', value: data?.filter((issue) => issue.status === 'Closed' || issue.status === 'closed').length },
  ]
  return (
    <Box>
      <Heading size="md" textAlign="center" my={2}>
        Status Levels by Issues
      </Heading>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart width={400} height={400}>
          <Legend verticalAlign="top" />
          <Pie data={pieData} labelLine={false} label={renderCustomizedLabel} fill="#8884d8" dataKey="value">
            {data?.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  )
}
