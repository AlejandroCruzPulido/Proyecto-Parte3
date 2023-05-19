import { ref, get, remove, push, set } from "firebase/database";
import database from "../firebase.js";

const commentsRef = ref(database, "/comments");

const getAllComments = () => {
  return get(commentsRef);
};

const removeComment = (key) => {
  const commentToDeleteRef = ref(database, `/comments/${key}`);
  return remove(commentToDeleteRef);
};

const addComment = (nombre, problema, descripción) => {
  return push(commentsRef, {
    nombre: nombre,
    problema: problema,
    descripción: descripción,
  });
};

const updateComment = (key, updatedName, updatedIssue, updatedDescription) => {
  const commentToUpdateRef = ref(database, `/comments/${key}`);
  return set(commentToUpdateRef, {
    nombre: updatedName,
    problema: updatedIssue,
    descripción: updatedDescription,
  });
};

const commentService = {
  getAllComments,
  removeComment,
  addComment,
  updateComment,
};

export default commentService;
