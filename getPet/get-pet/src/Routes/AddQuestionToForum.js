import { useState } from "react";
import classes from "./AddQuestionToForum.module.css";
import { Link } from "react-router-dom";
export default function AddQuestionToForum() {
  const [question, setQuestion] = useState();
  const [pet, setPet] = useState("Cat");
  const [topic, setTopic] = useState("Beslenme");
  const [photo, setPhoto] = useState();
  const [valid, setValid] = useState(true);
  function submitHanlder(e) {
    e.preventDefault();
    console.log(photo);
    if (question) {
      setValid(true);
      console.log(question);
      console.log(pet);
      console.log(topic);
      setQuestion("");
      setPet("");
      setTopic("");
      setPhoto("");
    } else {
      setValid(false);
    }
  }
  function topicHandler(e) {
    setTopic(e.target.value);
  }
  function petHandler(e) {
    setPet(e.target.value);
  }
  function questionHandler(e) {
    setQuestion(e.target.value);
  }
  function uploadDocumentHandler(e) {
    e.preventDefault();

    const formData = new FormData();

    const fileInput = document.querySelector('input[type="file"]');
    formData.append("image", fileInput.files[0]);

    fetch("/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Yükleme işlemi tamamlandı: ", data);
        setPhoto(data);
      })
      .catch((error) => {
        console.error("Yükleme işlemi sırasında bir hata oluştu: ", error);
      });
  }

  return (
    <div className={classes.mainContainer}>
      <h3 className={classes.mainHeader}>Add A Question</h3>
      <form onSubmit={submitHanlder} className={classes.listingContainer}>
        <div className={classes.divContainer}>
          <label className={classes.label}>Enter your question:</label>
          <textarea
            className={classes.inputDetails}
            value={question}
            onChange={questionHandler}
            rows="5"
            cols="10"
          ></textarea>
        </div>
        <div className={classes.divContainer}>
          <label className={classes.label}>Hayvan seç</label>
          <select value={pet} onChange={petHandler}>
            <option>Cat</option>
            <option>Dog</option>
            <option>Bird</option>
          </select>
        </div>
        <div className={classes.divContainer}>
          <label className={classes.label}>Konu seç</label>
          <select value={topic} onChange={topicHandler}>
            <option>Beslenme</option>
            <option>Aşı</option>
            <option>Davranış</option>
            <option>Veteriner önerisi</option>
          </select>
        </div>
        <div className={classes.divContainer}>
          <label className={classes.label}>Fotoğraf ekle optional</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={uploadDocumentHandler}
            className={classes.inputFile}
          />
        </div>
        <div className={classes.buttonContainer}>
          <button className={classes.submitButton} type="submit">
            Submit
          </button>
          <Link className={classes.cancelButton} to="/forum">
            Cancel
          </Link>
        </div>

        {!valid && <h1>Bilgileri doldur</h1>}
      </form>
    </div>
  );
}
