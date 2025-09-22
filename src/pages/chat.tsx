import React, { useState } from 'react'
import { Box, Button, Container, Heading, HStack, Input, Stack, Text, VStack, Badge } from '@chakra-ui/react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const ChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Здравствуйте! Я ИИ-консультант KoreaCarAI. Чем могу помочь?' }
  ])
  const [text, setText] = useState('')

  const send = async () => {
    if (!text.trim()) return
    const next = [...messages, { role: 'user', content: text } as Message]
    setMessages(next)
    setText('')
    // TODO: integrate with backend chat stub
    setTimeout(() => {
      setMessages((prev) => ([...prev, { role: 'assistant', content: 'Спасибо! Я обработаю ваш запрос и подберу варианты.' }]))
    }, 400)
  }

  return (
    <Container maxW="container.lg" py={8}>
      <Heading size="lg" mb={6}>ИИ-Консультант</Heading>
      <VStack align="stretch" spacing={4}>
        <Box borderWidth="1px" borderRadius="md" p={4} minH="320px">
          <Stack spacing={3}>
            {messages.map((m, i) => (
              <HStack key={i} align="start" justify={m.role === 'user' ? 'flex-end' : 'flex-start'}>
                {m.role === 'assistant' && <Badge colorScheme="purple">AI</Badge>}
                <Box bg={m.role === 'user' ? 'blue.50' : 'gray.50'} borderRadius="md" p={3} maxW="80%">
                  <Text whiteSpace="pre-wrap">{m.content}</Text>
                </Box>
                {m.role === 'user' && <Badge colorScheme="blue">Вы</Badge>}
              </HStack>
            ))}
          </Stack>
        </Box>
        <HStack>
          <Input value={text} onChange={(e) => setText(e.target.value)} placeholder="Опишите желаемый авто, бюджет, сроки..." onKeyDown={(e)=>{ if(e.key==='Enter') send() }} />
          <Button colorScheme="blue" onClick={send}>Отправить</Button>
        </HStack>
      </VStack>
    </Container>
  )
}

export default ChatPage


