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
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  useDisclosure,
  Wrap,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { useDeleteProjectMutation } from '../redux/services/projects'
import ProjectEdit from './ProjectEdit'

function ProjectResult({ project }) {
  const [deleteProject, data] = useDeleteProjectMutation()
  const [error, setError] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [onClose, setOnClose] = useState(true)

  const cancelRef = React.useRef()

  return (
    <Box border="1px" borderColor="red" w={200} textAlign="center">
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
            <Text fontSize={12}>Description:</Text>
            <Text textAlign={'center'} px={2}>
              {project.description.length > 100 ? project.description.substring(0, 85) + '...' : project.description}
            </Text>
          </Box>
          <Box>
            <Box mb={2}>
              <Text>0 Contributions</Text>
              <Text>{project.status}</Text>
            </Box>
            <Flex gap="2" justifyContent={'center'}>
              <Popover placement="left">
                <PopoverTrigger>
                  <Button size="sm" aria-label="icon">
                    📝
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
                ❌
              </Button>
            </Flex>
          </Box>
        </Box>
      </Wrap>
    </Box>
  )
}

export default ProjectResult

// WITH OR WITHOUT ACCORDION??

// <Box border="1px" borderColor="red" w={200} textAlign="center">
//       {showEditForm ? (
//         <ProjectEdit project={project} onSuccess={() => setShowEditForm(false)} />
//       ) : (
//         <Wrap spacing={10}>
//           <Box w={200} h={300}>
//             <Accordion allowToggle>
//               <AccordionItem>
//                 <h2>
//                   <AccordionButton>
//                     <Box flex="1" textAlign="left">
//                       {project.name}
//                     </Box>
//                     <AccordionIcon />
//                   </AccordionButton>
//                 </h2>
//                 <AccordionPanel pb={4}>{project.description}</AccordionPanel>
//               </AccordionItem>
//             </Accordion>
//             <Text>{project.status}</Text>
//             <Flex gap="2" justifyContent={'center'}>
//               <Button size="sm" aria-label="icon" onClick={() => setShowEditForm(true)}>
//                 📝
//               </Button>
//               <Button size="sm" onClick={() => deleteProject(project.id)} aria-label="icon">
//                 ❌
//               </Button>
//             </Flex>
//           </Box>
//         </Wrap>
//       )}
//     </Box>
