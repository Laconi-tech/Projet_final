import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Commentaire() {
  const [form, setForm] = useState({
    name: "",
    position: "",
    level: "",
  });
  const [isNew, setIsNew] = useState(true);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id?.toString() || undefined;
      if (!id) return;
      setIsNew(false);
      const response = await fetch(
        `http://localhost:5050/commentaire/${params.id.toString()}`
      );
      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        console.error(message);
        return;
      }
      const commentaire = await response.json();
      if (!commentaire) {
        console.warn(`Commentaire with id ${id} not found`);
        navigate("/");
        return;
      }
      setForm(commentaire);
    }
    fetchData();
    return;
  }, [params.id, navigate]);

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();
    const person = { ...form };
    try {
      let response;
      if (isNew) {
        // if we are adding a new commentaire we will POST to /commentaire.
        response = await fetch("http://localhost:5050/commentaire", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(person),
        });
      } else {
        // if we are updating a commentaire we will PATCH to /commentaire/:id.
        response = await fetch(`http://localhost:5050/commentaire/${params.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(person),
        });
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('A problem occurred with your fetch operation: ', error);
    } finally {
      setForm({ name: "", position: "", level: "" });
      navigate("/");
    }
  }

  // This following section will display the form that takes the input from the user.
  return (
    <>
      <h3>Create/Update Commentaire</h3>
      <form onSubmit={onSubmit}>
        <div>
          <div>
            <h2>Commentaire Info</h2>
            <p>This information will be displayed publicly so be careful what you share.</p>
          </div>

          <div>
            <div>
              <label htmlFor="name">Name</label>
              <div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="First Last"
                  value={form.name}
                  onChange={(e) => updateForm({ name: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label htmlFor="position">Position</label>
              <div>
                <input
                  type="text"
                  name="position"
                  id="position"
                  placeholder="Developer Advocate"
                  value={form.position}
                  onChange={(e) => updateForm({ position: e.target.value })}
                />
              </div>
            </div>
            <div>
              <fieldset>
                <legend>Position Options</legend>
                <div>
                  <div>
                    <input
                      id="positionIntern"
                      name="positionOptions"
                      type="radio"
                      value="Intern"
                      checked={form.level === "Intern"}
                      onChange={(e) => updateForm({ level: e.target.value })}
                    />
                    <label htmlFor="positionIntern">Intern</label>
                    <input
                      id="positionJunior"
                      name="positionOptions"
                      type="radio"
                      value="Junior"
                      checked={form.level === "Junior"}
                      onChange={(e) => updateForm({ level: e.target.value })}
                    />
                    <label htmlFor="positionJunior">Junior</label>
                    <input
                      id="positionSenior"
                      name="positionOptions"
                      type="radio"
                      value="Senior"
                      checked={form.level === "Senior"}
                      onChange={(e) => updateForm({ level: e.target.value })}
                    />
                    <label htmlFor="positionSenior">Senior</label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
        <input
          type="submit"
          value="Save Commentaire"
        />
      </form>
    </>
  );
}
