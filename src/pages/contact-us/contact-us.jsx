import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import styles from "./contact-us.module.css";

function ContactUs() {
  const [commentary, setCommentary] = useState("");

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    console.log("data", data);
  };
  const handleChangeCommentary = (e) => {
    setCommentary(e.target.value);
    console.log("commentary", commentary);
  };
  console.log(watch("name"));
  return (
    <div className={styles.containerContactUs}>
      <div className={styles.formContactUs}>
        <h1 className={styles.title}>Contactese con nosotros</h1>
        <div className={styles.data}>
          <p className={styles.addresse}>
            Contramaestre Micalvi #522, of.42, Ñuñoa
          </p>
          <div className={styles.containerText}>
            <a href="tel:5551234567" className={styles.text}>
              Teléfono : +56222225473
            </a>
          </div>
          <div className={styles.containerText}>
            <a href="mailto: abc@example.com" className={styles.text}>
              E-mail : info@contacto.cl
            </a>
          </div>
        </div>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputBox}>
            <TextField
              id="name"
              label="Nombre o Compañia"
              type="text"
              name="name"
              className={styles.input}
              inputRef={register({ required: true })}
            />
          </div>
          {errors.name && (
            <span className={styles.errorInput}>
              Nombre requerido para continuar
            </span>
          )}
          <div className={styles.inputBox}>
            <TextField
              name="email"
              id="Email"
              label="Email"
              type="text"
              className={styles.input}
              inputRef={register({
                required: "Email requerido para continuar",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email invalido",
                },
              })}
            />
          </div>
          {errors.email && (
            <span className={styles.errorInput}>{errors.email.message}</span>
          )}
          <div className={styles.commentaryBox}>
            <TextField
              id="commentary"
              label="Comentario"
              multiline
              rowsMax={4}
              type="text"
              className={styles.input}
              name="commentary"
              inputRef={register({ required: true })}
              value={commentary}
              onChange={(e) => handleChangeCommentary(e)}
            />
          </div>
          {errors.commentary && (
            <span className={styles.errorInput}>
              Comentario requerido para continuar
            </span>
          )}
          <Button className={styles.submitButton} type="submit">
            ENVIAR
          </Button>
        </form>
      </div>
      <div className={styles.containerImage}>
        <img
          className={styles.image}
          src="https://envira.es/wp-content/uploads/2017/02/consultoria.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default ContactUs;
