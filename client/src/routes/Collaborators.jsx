// CHAKRA:
import { Box, Button, Container, Flex, Heading, Image, Link, Text, Wrap } from '@chakra-ui/react'

// REDUX:
import { useGetCurrentUserQuery } from '../redux/services/user'

// IMGS:
import profileImg from '../imgs/profilePhoto.png'

// COLLABORATORS:
export default function Collaborators() {
  const { data } = useGetCurrentUserQuery()
  return (
    <Box bg="white" p={5} w="100%" h="100%">
      <Box border="1px" borderColor="red" mb={5}>
        <Heading fontSize={25}>Collaborators</Heading>
      </Box>
      <Box border="1px" borderColor="red" mb={5}>
        <Box display={'flex'} justifyContent={'space-between'}>
          <Heading fontSize={20} mb={2}>
            PetMates
          </Heading>
          <Box display={'flex'} flexDir={'row'} gap={2}>
            <Text>3</Text>
            <Text>person icon</Text>
          </Box>
        </Box>
        <Wrap spacing={10}>
          <Box border="1px" borderColor="red" w={200} textAlign="center">
            <Image w={150} maxW="80%" borderRadius="full" src={profileImg} alt="" m={'0 auto'} mt={2} mb={2} />
            <Text>{data?.username}</Text>
            <Text fontSize={13}>{data?.email}</Text>
            <Text fontSize={13} mb={2}>
              {data?.city}, {data?.state}
            </Text>
            <hr></hr>
            <Text>4 contributions</Text>
            <hr></hr>
            <Text>Frontend</Text>
            <hr></hr>
            <Text mb={2}>Teammate</Text>
          </Box>
          <Box border="1px" borderColor="red" w={200} textAlign="center">
            <Image w={150} maxW="80%" borderRadius="full" src={profileImg} alt="" m={'0 auto'} mt={2} mb={2} />
            <Text>Gerardo D.</Text>
            <Text fontSize={13}>@Gerdawgdelta8</Text>
            <Text fontSize={13} mb={2}>
              Houston, TX
            </Text>
            <hr></hr>
            <Text>8 contributions</Text>
            <hr></hr>
            <Text>Fullstack</Text>
            <hr></hr>
            <Text mb={2}>Admin</Text>
          </Box>
          <Box border="1px" borderColor="red" w={200} textAlign="center">
            <Image w={150} maxW="80%" borderRadius="full" src={profileImg} alt="" m={'0 auto'} mt={2} mb={2} />
            <Text>Daniel L.</Text>
            <Text fontSize={13}>@DanDizzle44</Text>
            <Text fontSize={13} mb={2}>
              Atlanta, GA
            </Text>
            <hr></hr>
            <Text>5 contributions</Text>
            <hr></hr>
            <Text>Backend</Text>
            <hr></hr>
            <Text mb={2}>Teammate</Text>
          </Box>
        </Wrap>
      </Box>
      <Box border="1px" borderColor="red" mb={5}>
        <Box display={'flex'} justifyContent={'space-between'}>
          <Heading fontSize={20} mb={2}>
            JustToDoIt
          </Heading>
          <Box display={'flex'} flexDir={'row'} gap={2}>
            <Text>2</Text>
            <Text>person icon</Text>
          </Box>
        </Box>
        <Wrap spacing={10}>
          <Box border="1px" borderColor="red" w={200} textAlign="center">
            <Image w={150} maxW="80%" borderRadius="full" src={profileImg} alt="" m={'0 auto'} mt={2} mb={2} />
            <Text>Gerardo D.</Text>
            <Text fontSize={13}>@Gerdawgdelta8</Text>
            <Text fontSize={13} mb={2}>
              Houston, TX
            </Text>
            <hr></hr>
            <Text>3 contributions</Text>
            <hr></hr>
            <Text>Fullstack</Text>
            <hr></hr>
            <Text mb={2}>Teammate</Text>
          </Box>
          <Box border="1px" borderColor="red" w={200} textAlign="center">
            <Image w={150} maxW="80%" borderRadius="full" src={profileImg} alt="" m={'0 auto'} mt={2} mb={2} />
            <Text>Daniel L.</Text>
            <Text fontSize={13}>@DanDizzle44</Text>
            <Text fontSize={13} mb={2}>
              Atlanta, GA
            </Text>
            <hr></hr>
            <Text>7 contributions</Text>
            <hr></hr>
            <Text>Backend</Text>
            <hr></hr>
            <Text mb={2}>Admin</Text>
          </Box>
        </Wrap>
      </Box>
      <Box border="1px" borderColor="red">
        <Box display={'flex'} justifyContent={'space-between'}>
          <Heading fontSize={20} mb={2}>
            Weather Box
          </Heading>
          <Box display={'flex'} flexDir={'row'} gap={2}>
            <Text>1</Text>
            <Text>person icon</Text>
          </Box>
        </Box>
        <Wrap spacing={10}>
          <Box border="1px" borderColor="red" w={200} textAlign="center">
            <Image w={150} maxW="80%" borderRadius="full" src={profileImg} alt="" m={'0 auto'} mt={2} mb={2} />
            <Text>Myles D.</Text>
            <Text fontSize={13}>@DeBoer753</Text>
            <Text fontSize={13} mb={2}>
              San Francisco, CA
            </Text>
            <hr></hr>
            <Text>1 contribution</Text>
            <hr></hr>
            <Text>Frontend</Text>
            <hr></hr>
            <Text mb={2}>Admin</Text>
          </Box>
        </Wrap>
      </Box>
    </Box>
  )
}
