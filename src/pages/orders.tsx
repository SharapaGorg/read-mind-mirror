import React, { useState } from 'react'
import { Badge, Box, Button, Container, Heading, HStack, Input, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react'

interface OrderItem {
  id: string
  customer: string
  car: string
  price: number
  status: 'new' | 'in_progress' | 'paid' | 'shipped' | 'delivered'
}

const initialOrders: OrderItem[] = [
  { id: '1', customer: 'Иван', car: 'Kia K5 2021', price: 2100000, status: 'in_progress' },
  { id: '2', customer: 'Мария', car: 'Hyundai Tucson 2020', price: 2400000, status: 'new' },
]

const OrdersPage = () => {
  const [orders, setOrders] = useState<OrderItem[]>(initialOrders)
  const [customer, setCustomer] = useState('')
  const [car, setCar] = useState('')
  const [price, setPrice] = useState('')

  const create = () => {
    if (!customer || !car || !price) return
    setOrders((prev) => ([...prev, { id: String(prev.length + 1), customer, car, price: Number(price), status: 'new' }]))
    setCustomer(''); setCar(''); setPrice('')
  }

  const nextStatus = (s: OrderItem['status']): OrderItem['status'] => (
    s === 'new' ? 'in_progress' : s === 'in_progress' ? 'paid' : s === 'paid' ? 'shipped' : 'delivered'
  )

  return (
    <Container maxW="container.xl" py={8}>
      <Heading size="lg" mb={6}>Заказы</Heading>
      <Stack direction={{ base: 'column', md: 'row' }} spacing={6} align="start">
        <Box borderWidth="1px" borderRadius="md" p={4} minW="320px">
          <Heading size="sm" mb={3}>Новый заказ</Heading>
          <Stack spacing={3}>
            <Input placeholder="Клиент" value={customer} onChange={(e)=>setCustomer(e.target.value)} />
            <Input placeholder="Автомобиль" value={car} onChange={(e)=>setCar(e.target.value)} />
            <Input placeholder="Цена" value={price} onChange={(e)=>setPrice(e.target.value)} />
            <Button onClick={create} colorScheme="blue">Создать</Button>
          </Stack>
        </Box>
        <Box flex="1">
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
            {orders.map(o => (
              <Box key={o.id} borderWidth="1px" borderRadius="md" p={4}>
                <VStack align="stretch" spacing={2}>
                  <HStack justify="space-between">
                    <Text fontWeight="bold">{o.customer}</Text>
                    <Badge>{o.status}</Badge>
                  </HStack>
                  <Text>{o.car}</Text>
                  <Text fontWeight="semibold">{o.price.toLocaleString()} ₽</Text>
                  {o.status !== 'delivered' && (
                    <Button size="sm" onClick={() => setOrders((prev)=> prev.map(p => p.id===o.id ? { ...p, status: nextStatus(p.status) } : p))}>Далее</Button>
                  )}
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Stack>
    </Container>
  )
}

export default OrdersPage


