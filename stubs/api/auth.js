const { Router } = require('express')
const router = Router()

const users = new Map()

users.set('nikita', {
    "login": "nikita",
    "password": "123"
})

router.post('/', (req, res) => {
    const { login, email, password } = req.body;

    if (!login || !password) res.status(400).send({ok: false, message: 'Неправильные данные'})

    if (users.has(login)) {
        throw new Error('Пользователь уже существет')
    }
    users.set(login, {
        login, email, password
    })
    res.send({
        ok: true
    })
})

router.post('/login', (req, res) => {
    const { login, password } = req.body;

    if (!users.has(login)) {
        res.status(401).send({ ok: false })
    }

    if (users.get(login)?.password === password) {
        res.send({
            ok: true
        })
    } else {
        throw new Error('Ошибка');
    }
})



module.exports = router;
