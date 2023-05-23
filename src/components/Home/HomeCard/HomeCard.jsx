/* eslint-disable react/prop-types */
import { useState } from "react";
import DetailsPopup from "../DetailsPopup/DetailsPopup";
import styles from "./HomeCard.module.scss";

const HomeCard = ({ roomEntry }) => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <div className={styles.homeCard} onClick={() => setShowPopup(true)}>
        <div className={styles.homeCardContent}>
          <h2>{roomEntry.facility.name}</h2>
          <p>Submitted By : {roomEntry.submittedBy.firstName} {roomEntry.submittedBy.lastName}</p>
          <p>Organization : {roomEntry.organization.name}</p>
        </div>
      </div>
      {showPopup && (
        <DetailsPopup
          roomEntry={roomEntry}
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
};

export default HomeCard;
