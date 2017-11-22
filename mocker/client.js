import 'service-mocker-polyfills'
import { createClient } from 'service-mocker/client'
import scriptURL from 'sw-loader!./server.js'
import bootstrap from '../src/bootstrap'

const client = createClient(scriptURL)

client.ready.then(async () => {
  const response = await fetch('/api/greet')
  console.log(await response.text())

  bootstrap()
})
