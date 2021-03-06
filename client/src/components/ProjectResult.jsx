import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Link as Anchor,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  Wrap,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { useDeleteProjectMutation } from '../redux/services/projects'

// IMGS:
import trashIcon from '../imgs/trashIcon.png'
import editIcon from '../imgs/editIcon.png'

// COMPONENTS:
import ProjectEdit from './ProjectEdit'

function ProjectResult({ project }) {
  const [deleteProject, data] = useDeleteProjectMutation()
  const [error, setError] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [onClose, setOnClose] = useState(true)
  const cancelRef = React.useRef()

  return (
    <Box borderRadius="20px" bg="rgba(213, 213, 213, 0.682)" w={200} textAlign="center">
      <Wrap spacing={10}>
        <Box w={200} h={300} display="flex" flexDir="column" justifyContent={'space-between'}>
          <Box>
            <Heading fontSize={17} mt={2} mb={2} px={2}>
              {error && (
                <AlertDialog
                  isOpen={isOpen}
                  leastDestructiveRef={cancelRef}
                  // @ts-ignore
                  onClose={onClose}
                >
                  <AlertDialogOverlay>
                    <AlertDialogContent>
                      <AlertDialogHeader fontSize="lg" fontWeight="bold">
                        Error
                      </AlertDialogHeader>
                      <AlertDialogBody>{error}</AlertDialogBody>
                      <AlertDialogFooter>
                        <Button
                          colorScheme="red"
                          onClick={() =>
                            setOnClose(
                              // @ts-ignore
                              setIsOpen(!isOpen)
                            )
                          }
                          ml={3}
                        >
                          OK
                        </Button>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialogOverlay>
                </AlertDialog>
              )}
              <Anchor as={Link} to={`/projects/${project.id}`}>
                {project.name}
              </Anchor>
            </Heading>
            <Text>Created by @{project.User.username}</Text>
            <Text fontSize={12}>Description:</Text>
            <Text textAlign={'center'} px={2}>
              {project.description.length > 90 ? project.description.substring(0, 85) + '...' : project.description}
            </Text>
          </Box>
          <Box>
            <Box mb={2}>
              <Text borderBottom="1px" borderColor="white" w={'90%'} alignItems="center" margin={'0 auto'}></Text>
              <Text>
                # of Issues: <span style={{ fontWeight: '800', color: 'navy' }}>{project.Issues.length}</span>
              </Text>
              <Text borderBottom="1px" borderColor="white" w={'90%'} alignItems="center" margin={'0 auto'}></Text>
              <Text>{project.status}</Text>
              <Text borderBottom="1px" borderColor="white" w={'90%'} alignItems="center" margin={'0 auto'}></Text>
            </Box>
            <Flex gap="2" mb="2" justifyContent={'center'}>
              <Popover placement="left">
                <PopoverTrigger>
                  <Button size="sm" aria-label="icon">
                    <Image width={5} h={5} src={editIcon} alt="" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverCloseButton />
                  <PopoverArrow />
                  <PopoverHeader>Edit {project.name}</PopoverHeader>
                  <PopoverBody>
                    <ProjectEdit project={project} />
                  </PopoverBody>
                </PopoverContent>
              </Popover>
              <Button
                size="sm"
                onClick={() =>
                  deleteProject(project.id)
                    .unwrap()
                    .then((data) => {})
                    .catch((error) => {
                      setError(error.data.error)
                      setIsOpen(!isOpen)
                      setOnClose(!onClose)
                    })
                }
                aria-label="icon"
              >
                <Image width={5} h={5} src={trashIcon} alt="" />
              </Button>
            </Flex>
          </Box>
        </Box>
      </Wrap>
    </Box>
  )
}

export default ProjectResult
