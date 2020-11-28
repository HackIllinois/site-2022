import { MethodType, FileType, RegistrationType, EventResType } from './types';

const API = 'https://api.hackillinois.org';
export const isAuthenticated = () => sessionStorage.getItem('token');

function request(method: MethodType, endpoint: string, body?: any) {
  const getSessionToken = (): string => {
    const token = isAuthenticated();
    if (token === null) {
      throw new Error('token is null');
    }
    return token;
  };
  return fetch(API + endpoint, {
    method,
    headers: {
      Authorization: getSessionToken(),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((res: Response) => {
      if (res.status === 200) {
        return res.json();
      }
      throw new Error('response status code not 200');
    })
    .catch((err: Error) => {
      console.error(err.message);
    });
}

export function authenticate(to: string) {
  if (process.env.REACT_APP_TOKEN) {
    sessionStorage.setItem('token', process.env.REACT_APP_TOKEN);
  } else {
    to = `${API}/auth/github/?redirect_uri=${to}`;
  }
  window.location.replace(to);
}

export function getToken(code: string | string[] | null) {
  return request('POST', '/auth/code/github/', { code }).then((res) => res.token);
}

type GetRolesResType = {
  id: string;
  roles: string[];
};

export function getRoles() {
  return request('GET', '/auth/roles/').then(
    (res) => (res as GetRolesResType).roles,
  );
}

export function getRolesSync(): string[] {
  const token = sessionStorage.getItem('token');
  if (token) {
    try {
      const tokenData = JSON.parse(atob(token.split('.')[1]));
      return tokenData.roles;
    } catch (e) {
      // if the token is incorrectly formatted, we just ignore it and return the default []
    }
  }
  return [];
}

export function getRegistration(role: string): Promise<EventResType> {
  return request('GET', `/registration/${role}/`);
}

// this function does not have a return type because different roles have different response types
export function register(
  isEditing: boolean,
  role: string,
  registration: RegistrationType,
) {
  const method = isEditing ? 'PUT' : 'POST';
  return request(method, `/registration/${role}/`, registration);
}

type GetRsvpResType = {
  id: string;
  isAttending: boolean,
};

export function getRSVP(): Promise<GetRsvpResType> {
  return request('GET', '/rsvp/');
}

export function rsvp(isEditing: boolean, registration: RegistrationType): Promise<GetRsvpResType> {
  const method = isEditing ? 'PUT' : 'POST';
  return request(method, '/rsvp/', registration);
}

export function uploadFile(file: File, type: FileType) {
  return request('GET', `/upload/${type}/upload/`)
    .then((res) => fetch(res[type], {
      method: 'PUT',
      headers: { 'Content-Type': file.type },
      body: file,
    }))
    .then((res) => {
      if (res.ok) {
        return res;
      }
      throw new Error('response did not have status 200');
    })
    .catch((err: Error) => {
      console.error(err);
    });
}

type GetQrResType = {
  id: string;
  qrInfo:string;
};

export function getQR():Promise<GetQrResType> {
  return request('GET', '/user/qr/');
}

export function getPrizes() {
  return request('GET', '/upload/blobstore/prizes/').then((res) => res.data);
}

type RefreshTokenResType = {
  token: string;
};
export function refreshToken(): Promise<void> {
  return request('GET', '/auth/token/refresh/').then((res:RefreshTokenResType) => sessionStorage.setItem('token', res.token));
}

export function getMentorTimeslots() {
  return request('GET', '/upload/blobstore/mentor-timeslots/').then(
    (res) => res.data,
  );
}

export function setMentorTimeslots(data: Record<string, string>) {
  return request('PUT', '/upload/blobstore/', {
    id: 'mentor-timeslots',
    data,
  })
    .then((res: Response) => res.json())
    .then((res: any) => res.data)
    .catch((err: Error) => console.log(err));
}

type GetEventsResType = {
  events: EventResType[]
};

export function getEvents() {
  return request('GET', '/event/').then((res: GetEventsResType) => res.events);
}
