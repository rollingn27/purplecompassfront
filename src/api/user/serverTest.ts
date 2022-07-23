import client from "../client"

export async function serverTest() {
  const response = await client.post('/test')
  return response.data
}