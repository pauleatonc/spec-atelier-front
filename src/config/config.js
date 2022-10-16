import {
  FIREBASE_API_KEY,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MSG_SENDER_ID,
  FIREBASE_APP_ID,
  FIREBASE_MEASUREMENT_ID,
  FIREBASE_DATABASE_URL,
  FIREBASE_AUTH_DOMAIN,
} from './constants/environment';
/* eslint-disable no-undef */
const mapApiUrls = {
  development: 'http://localhost:8882',
  integration: 'http://spec-atelier.herokuapp.com',
  production: 'https://spec-atelier.herokuapp.com',
};

export const mapFrontUrls = {
  development: 'http://localhost:8080',
  integration: 'http://localhost:8080',
  production: 'https://www.specatelier.com',
};

export const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  databaseURL: FIREBASE_DATABASE_URL,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MSG_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID,
};

export const handleGetEnvironment = () => ENVIRONMENT;
const handleGetApiUrl = () => mapApiUrls[handleGetEnvironment()];

const handleGetEntryPointApi = (path) => {
  switch (path) {
    case 'api':
      return '/api/';
    case 'googleOauth':
      return '/auth/';
    default:
      return '/api/';
  }
};

const getEndPoint = ({ path = 'api', service = '' }) =>
  `${handleGetApiUrl()}${handleGetEntryPointApi(path)}${service}`;

export default getEndPoint;
