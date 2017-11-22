import { createServer } from 'service-mocker/server';
const { router } = createServer()

router.get('/greet', 'Data Mocker is Ready!')
