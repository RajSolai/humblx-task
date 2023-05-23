/* eslint-disable react/prop-types */
import Carousel from "./Carousel";
import styles from "./DetailsPopup.module.scss";

const DetailsPopup = ({ onClose, roomEntry }) => {
  return (
    <>
      <div className="overlay">
        <div className="popup-container">
          <div className={styles.topbar}>
            <h3>{roomEntry.facility.name}</h3>
            <button className={styles.closeBtn} onClick={onClose}>
              X
            </button>
          </div>
          <div className={styles.popupContent}>
            <div
              className={
                roomEntry.open ? styles.roomStatusGood : styles.roomStatusBad
              }
            >
              {roomEntry.open ? "Room is Opened" : "Room is Closed"}
            </div>
            <Carousel images={roomEntry.overall.media.map((e) => e.path)} />

            <h3>Room Checks</h3>
            <div className={styles.checks}>
              {roomEntry.parameters.map((e, key) => (
                <div className={styles.checkChip} key={key}>
                  <p>{e.statusOk ? "✅" : "❌"}</p>
                  <p>{e.name}</p>
                </div>
              ))}
            </div>
            <h3>More Details</h3>
            <div className={styles.organizationRow}>
              <img src={roomEntry.organization.logo} height="50px" alt="" />
              <p>{roomEntry.organization.name}</p>
            </div>
            <div className={styles.organizationRow}>
              <div className={styles.organizationRow}>
                <p>📞</p>
                <p>{roomEntry.organization.contact}</p>
              </div>
              <p>|</p>
              <div className={styles.organizationRow}>
                <p>📍</p>
                <p>{roomEntry.organization.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsPopup;
