import axios from "axios";
import { NOTIFICATION_STATUS } from "../components/notification";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newObject, setNotification) => {
  const request = axios.post(baseUrl, newObject);
  return request
    .then((response) => response.data)
    .then((person) => {
      setNotification({
        message: `Added ${person.name}`,
        status: NOTIFICATION_STATUS.SUCCESS,
      });
      return person;
    })
    .finally(() => {
      setTimeout(
        () =>
          setNotification({
            message: null,
          }),
        3000
      );
    });
};

const update = (id, newObject, setNotification) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request
    .then((response) => response.data)
    .then((person) => {
      setNotification({
        message: `Number of ${person.name} updated`,
        status: NOTIFICATION_STATUS.SUCCESS,
      });
      return person;
    })
    .finally(() => {
      setTimeout(
        () =>
          setNotification({
            message: null,
          }),
        3000
      );
    });
};

const deletePerson = (person, setNotification) => {
  const request = axios.delete(`${baseUrl}/${person.id}`);
  return request
    .then(
      (response) => {
        setNotification({
          message: `Person ${person.name} was deleted`,
          status: NOTIFICATION_STATUS.SUCCESS,
        });
        return response.data;
      },
      (failure) => {
        setNotification({
          message: `Information of ${person.name} has already been removed from server`,
          status: NOTIFICATION_STATUS.FAILURE,
        });
      }
    )
    .finally(() => {
      setTimeout(
        () =>
          setNotification({
            message: null,
          }),
        3000
      );
    });
};

export default {
  getAll,
  create,
  update,
  deletePerson,
};
