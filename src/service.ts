import axios from 'axios';

const client = axios.create({ baseURL: 'http://some-service-base-url'});

console.dir(client);

export async function someServiceCall(): Promise<string> {
  const result = await client.get<string>('/some-path');

  return `Result from call is: ${result.data}`;
}
