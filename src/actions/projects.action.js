/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
import 'babel-polyfill';
import getEndPoint from '@Configurations/config';
import { getLocalStorage } from '@Helpers/localstorage.helper';
import { GET_ALL_PROJECTS, GET_ORDERED_PROJECTS } from '@Configurations/constants';

const endpoint = getEndPoint({ service: 'users' });
const userID = getLocalStorage('userID');
const token = getLocalStorage('token');
const apiHost = `${endpoint}/${userID}/projects`;
const toQueryString = obj => `?${Object.keys(obj).map(key => `${key}=${obj[key]}`).join('&')}`;
const dispatchFormat = (type, payload) => ({type, payload});

export const getAllProjectsAction = dispatch => _ => {
  request().then(result => dispatch(
    dispatchFormat(GET_ALL_PROJECTS, {projects: result.projects, loader: false})
  ));
}

export const getOrderedProjectsAction = dispatch => ordered_by => {
  request('/ordered', { ordered_by }).then(result => dispatch(
    dispatchFormat(GET_ORDERED_PROJECTS, {projects: result.projects, loader: false})
  ));
}

const request = async (url = '', params = '', method = 'GET') => {
  const options = {
    method,
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
  };
  if (params) (method === 'GET') ? url += toQueryString(params) : options.body = JSON.stringify(params);
  const response = await fetch(apiHost + url, options);
  const result = await response.json();
  return result;
}
