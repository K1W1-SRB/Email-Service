import React from "react";
import "./sendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { closeSendMessage } from "./features/mailSlice";
import { useDispatch } from "react-redux";
import { db } from "./firebase";
import {
  serverTimestamp,
  getFirestore,
  collection,
  addDoc,
} from "firebase/firestore";

function SendMail() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (Formdata) => {
    console.log(Formdata);

    const data = {
      to: Formdata.name,
      subject: Formdata.subject,
      message: Formdata.message,
      timestamp: serverTimestamp(),
    };

    const dbRef = collection(db, "emails");

    addDoc(dbRef, data)
      .then((docref) => {
        console.log("DOcument has been added successfully");
      })
      .catch((err) => {
        console.log(err);
      });
    dispatch(closeSendMessage());
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon
          onClick={() => dispatch(closeSendMessage())}
          className="sendMail__close"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="to"
          type="email"
          {...register("name", { required: true })}
        />
        {errors.to && <p className="sendMail__error">To is Required</p>}
        <input
          name="subject"
          placeholder="subject"
          type="text"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="sendMail__error">Subject is Required</p>
        )}
        <input
          name="message"
          placeholder="Message..."
          type="text"
          className="sendMail__message"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="sendMail__error">Message is Required</p>
        )}

        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
