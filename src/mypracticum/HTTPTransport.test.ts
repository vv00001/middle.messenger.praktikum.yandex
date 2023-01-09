import  {HTTPTransport}  from './HTTPTransport';
const HEADERS = {'Content-Type': 'application/json'};
const URLS = 'https://ya-praktikum.tech/api/v2'
describe('./HTTPTransport', () => {
  const https = new HTTPTransport();
  describe('auth', () => {
    it('return error', async () => {
      await https.get(`${URLS}/auth/user`, {}).catch((err) => {
        const textError = JSON.parse(err.responseText).reason;
        expect(textError).toEqual('Cookie is not valid');
      });
    });

    it('OK try login', async () => {
      await https.post(`${URLS}/auth/signin`, {
          headers: HEADERS,data: { login: 'pppppppmsksk', password: 'HHHHHhhh11112' },
        })
        .then((data: any) => expect(data.responseText).toEqual('OK'));
    });

    it('return error try login', async () => {
      await https.post(`${URLS}/auth/signin`, {headers: HEADERS,data: { login: 'pppppppmsksk', password: 'HHHHHhhh11112' },
        })
        .catch((err) => {
          const textError = JSON.parse(err.responseText).reason;
          expect(textError).toEqual('User already in system');
        });
    });
  });
});
