import { Checkbox, IconButton } from "@mui/material";
import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import { selectMail } from "./features/mailSlice";
import { useDispatch } from "react-redux";
import "./EmailRow.css";
import { useHistory } from "react-router-dom";

function EmailRow({ id, title, subject, description, time }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );
    history.push("/mail");
    // window.location.reload(true);
  };
  return (
    <div onClick={openMail} className="emailRow">
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarBorderIcon />
        </IconButton>
        <IconButton>
          <LabelOutlinedIcon />
        </IconButton>
      </div>

      <h3 className="emailRow__title">{title}</h3>

      <div className="emailRow__message">
        <h4>
          {subject + "-"}{" "}
          <span className="emailRow__description">{description}</span>
        </h4>
      </div>
      <div className="emailRow__description">{time}</div>
    </div>
  );
}

export default EmailRow;
