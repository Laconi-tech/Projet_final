// import { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";

// const Commentaire = (props) => (
//   // <tr>
//   //   <td>{props.commentaire.name}</td>
//   //   <td>{props.commentaire.commentaire}</td>
//   //   <td>{props.commentaire.date}</td>
//   //   <td>
//       <div className="CommentairesList_Commentaires">
//         <h2>{props.commentaire.name}</h2>
//         <p>{props.commentaire.commentaire}</p>
//         {/* <Link to={`/edit/${props.commentaire._id}`}>
//           Edit
//         </Link> */}
//         {/* <button
//           type="button"
//           onClick={() => {
//             props.deleteCommentaire(props.commentaire._id);
//           }}
//         >
//           Delete
//         </button> */}
//       </div>
//   //   </td>
//   // </tr>
// );

// export default function CommentaireList() {
//   const [commentaires, setCommentaires] = useState([]);

//   // This method fetches the commentaires from the database.
//   useEffect(() => {
//     async function getCommentaires() {
//       const response = await fetch(`https://projet-final-p6qe.onrender.com/commentaires`);
//       if (!response.ok) {
//         const message = `An error occurred: ${response.statusText}`;
//         console.error(message);
//         return;
//       }
//       const commentaires = await response.json();
//       setCommentaires(commentaires);
//     }
//     getCommentaires();
//     return;
//   }, [commentaires.length]);

//   // This method will delete a commentaire
//   async function deleteCommentaire(id) {
//     await fetch(`https://projet-final-p6qe.onrender.com/commentaires/${id}`, {
//       method: "DELETE",
//     });
//     const newCommentaires = commentaires.filter((el) => el._id !== id);
//     setCommentaires(newCommentaires);
//   }

//   // This method will map out the commentaires on the table
//   function commentaireList() {
//     return commentaires.map((commentaire) => {
//       return (
//         <Commentaire
//           commentaire={commentaire}
//           deleteCommentaire={() => deleteCommentaire(commentaire._id)}
//           key={commentaire._id}
//         />
//       );
//     });
//   }

//   // This following section will display the table with the commentaires.
//   return (
//     <>
//       {/* <h3>Commentaires</h3>
//       <div>
//         <div>
//           <table>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Commentaire</th>
//                 <th>Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               <div id="CommentaireList">
//                 {commentaireList()}
//               </div>
//             </tbody>
//           </table>
//         </div>
//       </div> */}

//       <div id="CommentaireList">
//         {/* <h3>Commentaires</h3> */}
//         {commentaireList()}
//       </div>
//     </>
//   );
// }

import { useEffect, useState } from "react";

const Commentaire = (props) => (
  <div className="CommentairesList_Commentaires">
    <h2 className="CommentairesList_h2">{props.commentaire.name}</h2>
    <p className="CommentairesList_p">{props.commentaire.commentaire}</p>
  </div>
);

export default function CommentaireList() {
  const [commentaires, setCommentaires] = useState([]);

  // Cette fonction récupère les commentaires depuis la base de données
  async function getCommentaires() {
    const response = await fetch(`https://projet-final-p6qe.onrender.com/commentaires`);
    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      console.error(message);
      return;
    }
    const commentaires = await response.json();
    
    // Trier les commentaires du plus récent au plus ancien par date
    const sortedCommentaires = commentaires.sort((a, b) => new Date(b.date) - new Date(a.date));
    setCommentaires(sortedCommentaires);

    // setCommentaires(commentaires);
  }

  // Utilisation de useEffect pour charger les commentaires au montage du composant
  useEffect(() => {
    getCommentaires();
  }, []);

  // Fonction de suppression d'un commentaire
  async function deleteCommentaire(id) {
    await fetch(`https://projet-final-p6qe.onrender.com/commentaires/${id}`, {
      method: "DELETE",
    });
    const newCommentaires = commentaires.filter((el) => el._id !== id);
    setCommentaires(newCommentaires);
  }

  // Fonction pour générer la liste des commentaires
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

  // Ajout du bouton pour rafraîchir les commentaires
  return (
    <>
      <button onClick={getCommentaires} id="CommentairesList_refresh">Rafraîchir les commentaires</button>
      <div id="CommentairesList">
        {commentaireList()}
      </div>
    </>
  );
}
