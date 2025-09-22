import React, { useMemo, useState } from 'react'
import { Box, Button, Container, Grid, GridItem, Heading, HStack, Input, Select, SimpleGrid, Stack, Tag, Text, VStack, Image, Badge } from '@chakra-ui/react'

interface CarItem {
  id: string
  title: string
  make: string
  model: string
  year: number
  price: number
  mileage: number
  city: string
  images: string[]
}

const mockCars: CarItem[] = Array.from({ length: 12 }).map((_, i) => ({
  id: String(i+1),
  title: `Hyundai Sonata ${2018 + (i%5)}`,
  make: 'Hyundai',
  model: 'Sonata',
  year: 2018 + (i % 5),
  price: 1200000 + i * 50000,
  mileage: 40000 + i * 1500,
  city: 'Seoul',
  images: ['/stubs/images/dummy']
}))

const CatalogPage = () => {
  const [q, setQ] = useState('')
  const [make, setMake] = useState('')
  const [yearFrom, setYearFrom] = useState('')
  const [yearTo, setYearTo] = useState('')

  const filtered = useMemo(() => {
    return mockCars.filter(c => (
      (!q || c.title.toLowerCase().includes(q.toLowerCase())) &&
      (!make || c.make === make) &&
      (!yearFrom || c.year >= Number(yearFrom)) &&
      (!yearTo || c.year <= Number(yearTo))
    ))
  }, [q, make, yearFrom, yearTo])

  return (
    <Container maxW="container.xl" py={8}>
      <Heading size="lg" mb={6}>Каталог автомобилей</Heading>
      <Grid templateColumns={{ base: '1fr', md: '280px 1fr' }} gap={6}>
        <GridItem>
          <Stack borderWidth="1px" borderRadius="md" p={4} spacing={4}>
            <Heading size="sm">Фильтры</Heading>
            <Input placeholder="Поиск" value={q} onChange={(e)=>setQ(e.target.value)} />
            <Select placeholder="Марка" value={make} onChange={(e)=>setMake(e.target.value)}>
              <option>Hyundai</option>
              <option>Kia</option>
              <option>Genesis</option>
              <option>Samsung</option>
            </Select>
            <HStack>
              <Input placeholder="Год от" value={yearFrom} onChange={(e)=>setYearFrom(e.target.value)} />
              <Input placeholder="Год до" value={yearTo} onChange={(e)=>setYearTo(e.target.value)} />
            </HStack>
            <Button onClick={()=>{ setQ(''); setMake(''); setYearFrom(''); setYearTo('') }}>Сбросить</Button>
          </Stack>
        </GridItem>
        <GridItem>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
            {filtered.map(car => (
              <Box key={car.id} borderWidth="1px" borderRadius="md" overflow="hidden">
                <Box h="160px" bg="gray.100" />
                <Box p={4}>
                  <HStack justify="space-between">
                    <VStack align="start" spacing={0}>
                      <Text fontWeight="bold">{car.title}</Text>
                      <HStack fontSize="sm" color="gray.600">
                        <Tag>{car.year}</Tag>
                        <Tag>{car.mileage} км</Tag>
                        <Tag>{car.city}</Tag>
                      </HStack>
                    </VStack>
                    <Badge colorScheme="green">{car.price.toLocaleString()} ₽</Badge>
                  </HStack>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </GridItem>
      </Grid>
    </Container>
  )
}

export default CatalogPage


