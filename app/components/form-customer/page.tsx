import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
  } from '@chakra-ui/react';
import React, { useEffect } from 'react';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import InputMask from 'react-input-mask';

interface ModalProps {
  onClose: () => void;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Campo obrigatório.'),
  email: Yup.string().email('Digite um e-mail válido').required('Campo obrigatório.'),
  phone: Yup.string().test('phone', 'O telefone deve conter 11 dígitos.', (value) => {
    const phoneNumber = value?.replace(/\D/g, '');
    return phoneNumber?.length === 11;
  }).required('Campo obrigatório.')});

const ModalFormCustomer: React.FC<ModalProps> = ({ onClose }) => {
  const { isOpen, onOpen } = useDisclosure()

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  useEffect(() => {
    onOpen();
  }, []);

  const getFormValues = (values: ICustomerForm) => {
    const { name, email, phone } = values;
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Telefone:', phone?.replace(/\D/g, ''));
  };

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cadastrar novo cliente</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Formik
              initialValues={{ name: '', email: '', phone: '' }}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                getFormValues(values);
                resetForm();
                onClose();
              }}
            >
              {() => (
                <Form>
                  <Field name="name">
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.name && form.touched.name}>
                        <FormLabel htmlFor="name">Nome</FormLabel>
                        <Input {...field} placeholder="Maria da Silva" />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="email">
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.email && form.touched.email} mt={4}>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input {...field} placeholder="maria.silva@email.com" />
                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="phone">
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.phone && form.touched.phone} mt={4}>
                        <FormLabel htmlFor="phone">Telefone</FormLabel>
                        <Input as={ InputMask } mask="(99) 99999-9999" {...field} placeholder="(01) 12345-6789" />
                        <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <ModalFooter>
                    <Button colorScheme='blue' mr={3} type="submit">
                      Salvar
                    </Button>
                    <Button onClick={onClose}>Cancelar</Button>
                  </ModalFooter>
                </Form>
              )}
            </Formik>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalFormCustomer;