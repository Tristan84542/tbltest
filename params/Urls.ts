export const baseURL = 'https://stage.tombola.co.uk'
//
type url = 'login' | 'home';
export const fullUrl: Record<url, string> = {
    login: `${baseURL}/userauthenticationids/loginsso#/login`,
    home: `${baseURL}/bingo-home`
}

