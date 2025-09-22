import React, { useMemo } from 'react'
import { Box, Container, Heading, SimpleGrid, Stat, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react'

const AnalyticsPage = () => {
  const kpis = useMemo(() => ([
    { label: 'Лиды', value: 128, help: '+14% за 7д' },
    { label: 'Заказы', value: 42, help: '+8% за 7д' },
    { label: 'Средний чек', value: '2.3 млн ₽', help: '+3% за 7д' },
    { label: 'Конверсия', value: '6.5%', help: '+0.4 п.п.' },
  ]), [])

  return (
    <Container maxW="container.xl" py={8}>
      <Heading size="lg" mb={6}>Аналитика</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4}>
        {kpis.map((k, i) => (
          <Box key={i} borderWidth="1px" borderRadius="md" p={4}>
            <Stat>
              <StatLabel>{k.label}</StatLabel>
              <StatNumber>{k.value}</StatNumber>
              <StatHelpText>{k.help}</StatHelpText>
            </Stat>
          </Box>
        ))}
      </SimpleGrid>
      <Box mt={6} borderWidth="1px" borderRadius="md" p={4} h="320px">Графики (заглушка)</Box>
    </Container>
  )
}

export default AnalyticsPage


