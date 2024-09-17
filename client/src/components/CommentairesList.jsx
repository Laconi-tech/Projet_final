import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

const Commentaire = (props) => (
  <tr>
    <td>{props.commentaire.name}</td>
    <td>{props.commentaire.commentaire}</td>
    <td>{props.commentaire.date}</td>
    <td>
      <div>
        {/* <Link to={`/edit/${props.commentaire._id}`}>
          Edit
        </Link> */}
        <button
          type="button"
          onClick={() => {
            props.deleteCommentaire(props.commentaire._id);
          }}
        >
          Delete
        </button>
      </div>
    </td>
  </tr>
);

export default function CommentaireList() {
  const [commentaires, setCommentaires] = useState([]);

  // This method fetches the commentaires from the database.
  useEffect(() => {
    async function getCommentaires() {
      const response = await fetch(`http://localhost:5050/commentaires`);
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        console.error(message);
        return;
      }
      const commentaires = await response.json();
      setCommentaires(commentaires);
    }
    getCommentaires();
    return;
  }, [commentaires.length]);

  // This method will delete a commentaire
  async function deleteCommentaire(id) {
    await fetch(`http://localhost:5050/commentaires/${id}`, {
      method: "DELETE",
    });
    const newCommentaires = commentaires.filter((el) => el._id !== id);
    setCommentaires(newCommentaires);
  }

  // This method will map out the commentaires on the table
  function commentaireList() {
    return commentaires.map((commentaire) => {
      return (
        <Commentaire
          commentaire={commentaire}
          deleteCommentaire={() => deleteCommentaire(commentaire._id)}
          key={commentaire._id}
        />
      );
    });
  }

  // This following section will display the table with the commentaires.
  return (
    <>
      <h3>Commentaires</h3>
      <div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Commentaire</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {commentaireList()}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
