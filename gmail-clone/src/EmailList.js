import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import SettingsIcon from "@mui/icons-material/Settings";
import { Checkbox, IconButton } from "@mui/material";
import React, { useEffect } from "react";
import "./EmailList.css";
import Section from "./Section";
import EmailRow from "./EmailRow";
import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

function EmailList() {
  const [emails, setEmails] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const emailsData = await getDocs(collection(db, "emails"));
      // console.log(emailsData)
      setEmails(emailsData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      // console.log(emailsData)
    };
    getData();
  }, []);

  console.log(emails);

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>

      <div className="emailList__sections">
        <Section Icon={InboxIcon} title="primary" color="red" selected />
        <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
        <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
      </div>

      <div className="emailList__list">
        {emails.map((email) => (
          <EmailRow
            key={email.id}
            title={email.to}
            subject={email.subject}
            description={email.message}
            time={email.timestamp.seconds}
          />
        ))}
      </div>
    </div>
  );
}

export default EmailList;
