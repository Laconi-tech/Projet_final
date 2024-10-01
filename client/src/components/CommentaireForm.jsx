import React, { useState } from 'react';

function refresh_commentaires() {
  setTimeout(function(){ document.getElementById("CommentaireList_refresh").click(); }, 1000);
}

const CommentaireForm = () => {
  const [nom, setNom] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newCommentaire = { nom, message };

    try {
      const response = await fetch('http://localhost:5050/commentaires', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCommentaire),
      });

      if (response.ok) {
        // setSuccess('Commentaire ajouté avec succès!');
        setNom('');
        setMessage('');
      } else {
        setSuccess('Erreur lors de l\'ajout du commentaire');
      }
    } catch (err) {
      setSuccess('Erreur lors de la communication avec le serveur');
    }
  };

  return (
    <div id='CommentaireForm'>
      <h1 id='CommentaireForm_title'>Commentaires :</h1>
      <form onSubmit={handleSubmit} id='CommentaireForm_form'>
        <input
        id='CommentaireForm_name'
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          placeholder="Votre nom"
          required
        />
        <textarea
          id='CommentaireForm_text'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Votre message"
          required
        ></textarea>
        <button id='CommentaireForm_button' type="submit" onClick={refresh_commentaires}>Envoyer</button>
      </form>
      {success && <p>{success}</p>}
    </div>
  );
};

export default CommentaireForm;
