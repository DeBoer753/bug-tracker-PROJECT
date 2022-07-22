// CHAKRA:
import { Link as Anchor, Box, Container, Image, Text } from '@chakra-ui/react'

// REACT ROUTER:
import { Link } from 'react-router-dom'

// SECONDARY NAV:
export default function SecondaryNav() {
  return (
    <Container>
      <Box>
        <Anchor as={Link} borderBottom="1px" borderColor="red" py={3} to="/login"></Anchor>
        <Anchor as={Link} borderBottom="1px" borderColor="red" py={3} to="/register"></Anchor>
      </Box>
    </Container>
  )
}
