import axios from 'axios';
import apiKeys from './apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const projectData = () => new Promise((resolve, reject) => {
  const retArray = [];
  axios
    .get(`${baseUrl}/projects.json`)
    .then((response) => {
      retArray.push(response.data);
      resolve(retArray);
    })
    .catch((error) => reject(error));
});

const projectDataFiltered = (criteria) => new Promise((resolve, reject) => {
  const retArray = [];
  const tech = criteria.toLowerCase();
  axios
    .get(`${baseUrl}/projects.json`)
    .then((response) => {
      Object.values(response.data).forEach((item) => {
        if (item.typeString.includes(tech)) {
          retArray.push(item);
        }
      });
      resolve(retArray);
    }).catch((error) => reject(error));
});

// eslint-disable-next-line
export default {
  projectData,
  projectDataFiltered,
};
