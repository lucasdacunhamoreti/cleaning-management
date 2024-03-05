'use client';

import styles from "./page.module.css";

import { ChakraProvider } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons';
import { useState } from "react";
import ModalFormCustomer from "@/app/components/form-customer/page";

export default function MainPage() {
  const [openedModal, setModal] = useState(false);

  const handleModal = () => {
    setModal(true);
  }

  return (
    <ChakraProvider>
      <main className={styles.main}>
        <Button leftIcon={<AddIcon />} colorScheme='blue' variant='solid' onClick={ handleModal }>
          Novo cliente
        </Button>
        { openedModal && <ModalFormCustomer onClose={() => setModal(false)} /> }
      </main>
    </ChakraProvider>
  );
}
