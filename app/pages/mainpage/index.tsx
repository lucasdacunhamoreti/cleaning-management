'use client';

import styles from "./page.module.css";

import { ChakraProvider } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons';

export default function Home() {
  return (
    <ChakraProvider>
      <main className={styles.main}>
        <Button leftIcon={<AddIcon />} colorScheme='blue' variant='solid'>
          New Customer
        </Button>
      </main>
    </ChakraProvider>
  );
}
