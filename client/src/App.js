// CHAKRA:
import { Box, Container, Flex } from '@chakra-ui/react'

// REACT ROUTER:
import { Route, Routes } from 'react-router-dom'

// ROUTES:
import Home from './routes/Home'
import Login from './routes/Login'
import Register from './routes/Register'
import Projects from './routes/Projects'
import Issues from './routes/Issues'
import Collaborators from './routes/Collaborators'

// COMPONENTS:
import PrimaryNav from './components/PrimaryNav'
import SiteTitle from './components/SiteTitle'

// STYLING
import './App.css'
import Protected from './components/Protected'
import { useGetCurrentUserQuery } from './redux/services/user'
import ProjectPage from './routes/ProjectPage'
import IssuePage from './routes/IssuePage'
import Comment from './routes/Comment'

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Protected>
            <Home />
          </Protected>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/projects/:projectId"
        element={
          <Protected>
            <ProjectPage />
          </Protected>
        }
      />
      <Route
        path="/projects/:projectId/issues/:issueId"
        element={
          <Protected>
            <IssuePage />
          </Protected>
        }
      />
      <Route
        path="/projects"
        element={
          <Protected>
            <Projects />
          </Protected>
        }
      />
      <Route
        path="/issues"
        element={
          <Protected>
            <Issues />
          </Protected>
        }
      />
      <Route
        path="/collaborators"
        element={
          <Protected>
            <Collaborators />
          </Protected>
        }
      />
      <Route
        path="/comment"
        element={
          <Protected>
            <Comment />
          </Protected>
        }
      />
    </Routes>
  )
}
// APP:
export default function App() {
  const { data } = useGetCurrentUserQuery()
  if (!data || data.error === 'unauthorized') {
    return <AppRoutes />
  } else {
    return (
      <Box className="App" paddingY="50px">
        <Container maxW={'1600px'}>
          <Flex gap="5" w="100%" justifyContent={'center'}>
            <PrimaryNav />
            <Flex
              flexDirection={'column'}
              alignItems="center"
              maxW="full"
              gap="10px"
              flexGrow="1"
              w="calc(100% - 220px)"
            >
              <SiteTitle />
              <Box w="100%" h="100%">
                <AppRoutes />
              </Box>
            </Flex>
          </Flex>
        </Container>
      </Box>
    )
  }
}
