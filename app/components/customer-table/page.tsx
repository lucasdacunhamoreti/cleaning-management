import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, Box } from "@chakra-ui/react";

export default function CustomerTable() {
    const customers = [
        { name : 'Lucas da Cunha', email: 'lucasdacunha00@gmail.com', phone: 991827374 },
        { name : 'Lucas da Cunha', email: 'lucasdacunha00@gmail.com', phone: 991827374 },
        { name : 'Lucas da Cunha', email: 'lucasdacunha00@gmail.com', phone: 991827374 },
        { name : 'Lucas da Cunha', email: 'lucasdacunha00@gmail.com', phone: 991827374 },
        { name : 'Lucas da Cunha', email: 'lucasdacunha00@gmail.com', phone: 991827374 },
        { name : 'Lucas da Cunha', email: 'lucasdacunha00@gmail.com', phone: 991827374 },
        { name : 'Lucas da Cunha', email: 'lucasdacunha00@gmail.com', phone: 991827374 },
        { name : 'Lucas da Cunha', email: 'lucasdacunha00@gmail.com', phone: 991827374 },
        { name : 'Lucas da Cunha', email: 'lucasdacunha00@gmail.com', phone: 991827374 },
        { name : 'Lucas da Cunha', email: 'lucasdacunha00@gmail.com', phone: 991827374 },
        { name : 'Lucas da Cunha', email: 'lucasdacunha00@gmail.com', phone: 991827374 },
        { name : 'Lucas da Cunha', email: 'lucasdacunha00@gmail.com', phone: 991827374 },
        { name : 'Lucas da Cunha', email: 'lucasdacunha00@gmail.com', phone: 991827374 },
        { name : 'Lucas da Cunha', email: 'lucasdacunha00@gmail.com', phone: 991827374 },
        { name : 'Lucas da Cunha', email: 'lucasdacunha00@gmail.com', phone: 991827374 },
    ]

    return (
        <Box border="1px solid #E2E8F0" borderRadius="md" overflow="hidden" marginTop={ 20 }>
            <TableContainer>
                <Table variant='simple'>
                    <TableCaption>Lista de clientes</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Nome</Th>
                            <Th>E-mail</Th>
                            <Th>Telefone</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        { customers.map((customer) => (
                            <Tr>
                                <Td>{ customer.name }</Td>
                                <Td>{ customer.email }</Td>
                                <Td>{ customer.phone }</Td>
                            </Tr>
                        )) }
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    )
}
