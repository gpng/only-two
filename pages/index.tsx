import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  Tbody,
  Td,
  Text,
  Textarea,
  Th,
  Thead,
  Tr,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import format from 'date-fns/format';

import { BOT_TOKEN, CHAT_ID, LAST_UPDATED, LIST } from 'constants/index';
import { Place } from 'models/place';

const orderList = (list: Array<Place>): Array<Place> =>
  list.sort((a, b) => a.name.localeCompare(b.name));

const orderedList = orderList(LIST);

const parse = (str: string): string => str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

const Index: FC = () => {
  const [results, setResults] = useState(LIST);
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [name, setName] = useState('');
  const [sources, setSources] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const search = (text: string): void => {
    if (!text || text === '') {
      setResults(orderedList);
      return;
    }
    setResults(orderedList.filter((place) => parse(place.name).includes(parse(text))));
  };

  const submit = async (): Promise<void> => {
    axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      text: `name: ${name}\nsources: ${sources}`,
    });
    setSubmitted(true);
  };

  useEffect(() => {
    if (!isOpen) {
      setName('');
      setSources('');
      setSubmitted(false);
    }
  }, [isOpen]);

  return (
    <Container className="root" py={6}>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Submit a new place</ModalHeader>
          <ModalBody>
            {submitted ? (
              <Text>Thanks for contributing! We will review the place ASAP.</Text>
            ) : (
              <>
                <Input type="text" placeholder="Name" onChange={(ev) => setName(ev.target.value)} />
                <Textarea
                  mt={4}
                  placeholder="Sources (Instagram, Facebook etc.)"
                  onChange={(ev) => setSources(ev.target.value)}
                />
              </>
            )}
          </ModalBody>
          <ModalFooter justifyContent="space-between">
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
            {!submitted && (
              <Button colorScheme="blue" mr={3} onClick={submit}>
                Submit
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
      <VStack spacing={4} alignItems="flex-start">
        <Heading as="h1">Only two diners allowed</Heading>
        <Text fontSize="md">
          From 19 July to 8 August 2021 (Last updated {format(LAST_UPDATED, 'd MMM yyyy, HH:mm')})
        </Text>
        <Text fontSize="xs" color="red">
          Dining in no longer allowed from 22 July.{' '}
          <Link href="https://www.straitstimes.com/singapore/no-dining-in-social-group-sizes-cut-to-2-from-july-22-as-spore-returns-to-phase-2">
            Read more here
          </Link>
        </Text>
        <Text fontSize="xs">
          This list shows those that only allow 2 to dine in regardless of vaccination status.
        </Text>
        <Text fontSize="xs">
          All Hawkers, Food Courts, Coffee Shops &amp; F&amp;B that don&apos;t have system in place
          to check vaccination / PET results are restricted to 2pax.
        </Text>
        <Box>
          <Button type="button" onClick={onOpen}>
            Something missing? Submit here
          </Button>
        </Box>
        <Box w="full">
          <Input
            w="full"
            type="text"
            placeholder="Search this list"
            onChange={(ev) => search(ev.target.value)}
          />
        </Box>
        <Table>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Sources</Th>
            </Tr>
          </Thead>
          <Tbody>
            {results.map((place) => (
              <Tr key={place.name}>
                <Td>{place.name}</Td>
                <Td>
                  {place.insta && (
                    <Link d="block" href={place.insta} target="_blank">
                      Instagram
                    </Link>
                  )}
                  {place.fb && (
                    <Link d="block" href={place.fb} target="_blank">
                      Facebook
                    </Link>
                  )}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </VStack>
    </Container>
  );
};

export default Index;
