import axios, { AxiosInstance } from 'axios';
import { someServiceCall } from './service';

jest.mock('axios');

const axiosMock = jest.mocked(axios);

axiosMock.create.mockReturnValue({
  get: jest.fn().mockResolvedValue({ status: 200, data: 'mocked response' }),
} as unknown as AxiosInstance);

/**
 * Als je de _someServiceCall_ import (van regel 2) hiernaartoe verplaatst zul je zien
 * dat de _console.dir_ (service.spec.ts regel 5) ipv _undefined_ wel output geeft.
 * Om de een of andere reden is volgordelijkheid van import relevant :/
 */
// import { someServiceCall } from './service';

describe('Service', () => {
  it('should delegate service call to axios and return the result', async () => {
    expect(await someServiceCall()).toEqual('Result from call is: mocked response');
  });
});
