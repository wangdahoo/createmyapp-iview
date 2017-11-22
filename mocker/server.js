import { createServer } from 'service-mocker/server';
const { router } = createServer()

router.get('/api/greet', 'Data Mocker is Ready!')

router.post('/api/login', {err_code: 0})

// router.post('/api/login', (req, res) => res.status(500).end())
// router.post('/api/login', (req, res) => res.status(403).end())
// router.post('/api/login', (req, res) => res.status(400).send({err_code: 40001, err_msg: '用户名或密码错误'}))

router.get('/api/dashboard', {
  err_code: 0,
  payload: {
    username: '王大虎',
    avatar: 'https://avatars3.githubusercontent.com/u/8207553'
  }
})
