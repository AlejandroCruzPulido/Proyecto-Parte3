import React, { useEffect, useState } from "react";
import CommentService from "../../services/comment.service";

function Comments() {
  const [comments, setComments] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState({});

  const getAllComments = () => {
    CommentService.getAllComments().then((data) => {
      let allComments = [];
      data.forEach((item) => {
        allComments.push({
          key: item.key,
          name: item.val().nombre,
          issue: item.val().problema,
          description: item.val().descripción,
        });
      });
      setComments(allComments);
    });
  };

  const removeComment = (key) => {
    CommentService.removeComment(key).then(() => {
      getAllComments();
    });
  };

  const addComment = (e) => {
    e.preventDefault();
    const nombre = e.target.nombre.value;
    const problema = e.target.tema.value;
    const descripción = e.target.description.value;
    CommentService.addComment(nombre, problema, descripción).then(() => {
      getAllComments();
      e.target.reset(); // Reinicia el formulario después de agregar el comentario
    });
  };

  const updateComment = (key) => {
    setEditMode(true);
    const commentToUpdate = comments.find((comment) => comment.key === key);
    setEditData(commentToUpdate);
  };

  const saveUpdatedComment = (e) => {
    e.preventDefault();
    const updatedName = e.target.updatedName.value;
    const updatedIssue = e.target.updatedIssue.value;
    const updatedDescription = e.target.updatedDescription.value;
    CommentService.updateComment(editData.key, updatedName, updatedIssue, updatedDescription).then(() => {
      setEditMode(false);
      setEditData({});
      getAllComments();
    });
  };

  useEffect(() => {
    getAllComments();
  }, []);

  return (
    <>
      <h1>Comentarios</h1>
      {!editMode ? (
        <form onSubmit={addComment}>
          <input type="text" name="nombre" placeholder="Nombre de usuario" />
          <input type="text" name="tema" placeholder="Asunto" />
          <input type="text" name="description" placeholder="Comentario" />
          <button type="submit">Añadir Comentario</button>
        </form>
      ) : (
        <form onSubmit={saveUpdatedComment}>
          <input type="text" name="updatedName" defaultValue={editData.name} />
          <input type="text" name="updatedIssue" defaultValue={editData.issue} />
          <input type="text" name="updatedDescription" defaultValue={editData.description} />
          <button type="submit">Guardar Cambios</button>
        </form>
      )}
      <div>
        {comments.map((comment) => (
          <div key={comment.key}>
            <p>Nombre de usuario: {comment.name}</p>
            <p>Asunto: {comment.issue}</p>
            <p>Commentario: {comment.description}</p>
            <button onClick={() => removeComment(comment.key)}>Eliminar</button>
            <button onClick={() => updateComment(comment.key)}>Editar</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Comments;
