// CHAKRA:
import { Badge, Box, Flex, Heading, Image, Text, Wrap } from '@chakra-ui/react'

// REACT ROUTER:
import { useParams } from 'react-router-dom'

// REDUX:
import { useGetCurrentUserQuery } from '../redux/services/user'
import { useGetProjectsByIDQuery } from '../redux/services/projects'

// IMGS:
import profileImg from '../imgs/profilePhoto.png'

// PROJECT PAGE:
export default function ProjectPage() {
  const { projectId } = useParams()
  const { data } = useGetProjectsByIDQuery(projectId)
  const { dataB } = useGetCurrentUserQuery() // create

  function statusColor(status) {
    switch (status) {
      case 'Not Yet Started':
        return 'orange'
      case 'In Progress':
        return 'blue'
      case 'Finished':
        return 'green'
      default:
        return ''
    }
  }
  return (
    <Box bg="white">
      <Heading fontSize={25} textAlign={'center'}>
        {data?.name.toUpperCase()}
      </Heading>
      <Flex justifyContent={'center'} alignItems="center" gap={5}>
        <Badge rounded={16} my={2} alignItems={'center'} colorScheme={statusColor(data?.status)} fontSize="1.5em">
          {data?.status}
        </Badge>
      </Flex>
      <Text textAlign={'center'}>Last Updated: {new Date(data?.updatedAt).toDateString()}</Text>
      <Text textAlign={'center'}>Issue Opened: {new Date(data?.createdAt).toDateString()}</Text>
      <Flex flexDir={'column'} alignItems="center" justifyContent="center" border="1px" borderColor="red">
        <Heading mt={5} size="md">
          Description
        </Heading>

        <Text mt={5}>{data?.description}</Text>
      </Flex>
      <Box>
        <Heading size="md" textAlign={'center'} borderBottom="1px" borderColor="red">
          Collaborators
        </Heading>
        <Wrap spacing={10}>
          <Box border="1px" borderColor="red" w={200} textAlign="center">
            <Image w={150} maxW="80%" borderRadius="full" src={profileImg} alt="" m={'0 auto'} mt={2} mb={2} />
            <Text>{dataB?.username}</Text>
            <Text fontSize={13}>{dataB?.email}</Text>
            <Text fontSize={13} mb={2}>
              {dataB?.city}, {dataB?.state}
            </Text>
            <hr></hr>
            <Text>4 contributions</Text>
            <hr></hr>
            <Text>Frontend</Text>
            <hr></hr>
            <Text mb={2}>Teammate</Text>
          </Box>
        </Wrap>
      </Box>
    </Box>
  )
}
