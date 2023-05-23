import { useState } from "react";
import { data, transformData } from "../../services/data";
import HomeCard from "./HomeCard/HomeCard";
import styles from "./Home.module.scss";
import ChartComponent from "./ChartComponent";
import DropDown from "../shared/DropDown";

const Home = () => {
  const [sortAscending, setToSortAscending] = useState(true);
  const [currentSort, setCurrentSort] = useState("");
  const [filterOrganization, setFilterOrganization] = useState("");
  const [filterSubmittedBy, setFilterSubmittedBy] = useState("");

  const organizations = [
    ...new Set(data.map((item) => item.organization.name)),
  ];
  const submittedBy = [
    ...new Set(data.map((item) => item.submittedBy.firstName)),
  ];
  const dates = [...new Set(data.map((item) => item.createdAt["$date"]))];

  const sortMaker = (a, b) => {
    if (!a || !b) return 0;
    switch (currentSort) {
      case "date":
        return sortAscending
          ? new Date(a.createdAt["$date"]).getTime() -
              new Date(b.createdAt["$date"]).getTime()
          : new Date(b.createdAt["$date"]).getTime() -
              new Date(a.createdAt["$date"]).getTime();

      default:
        return 0;
    }
  };

  return (
    <div className={styles.homePage}>
      <h1>Humblx Dashboard</h1>
      <div className={styles.homeFlex}>
        <div className={styles.sideBar}>
          <h3>Filter</h3>
          <div className={styles.sideBarElement}>
            <p>Select Organization</p>
            <DropDown
              options={organizations}
              defaultOption="All Organizations"
              onChange={(val) => setFilterOrganization(val)}
              />
          </div>
          <div className={styles.sideBarElement}>
            <p>Submitted By</p>
            <DropDown
              options={submittedBy}
              defaultOption="All Submitters"
              onChange={(val) => setFilterSubmittedBy(val)}
            />
          </div>
        </div>
        <div className={styles.mainContent}>
          <div className={styles.chartWrap}>
            <div className={styles.chartBox}>
              <h2>Rooms with Rating</h2>
              <ChartComponent
                data={transformData(data)}
                x={"name"}
                y={"okayCount"}
              />
            </div>
          </div>
          <div
            className={styles.sortBtn}
            onClick={() => {
              setToSortAscending(!sortAscending);
              setCurrentSort("date");
            }}
          >
            <p>{sortAscending ? "⬆️" : "⬇️"}</p>
            <p>Sort By Date</p>
          </div>
          <div className={styles.cardWrap}>
            {data
              .sort(sortMaker)
              .filter((e) =>
                filterOrganization
                  ? e.organization.name === filterOrganization
                  : true
              )
              .filter((e) =>
                filterSubmittedBy
                  ? e.submittedBy.firstName === filterSubmittedBy
                  : true
              )
              .map((item, index) => {
                return <HomeCard key={index} roomEntry={item} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
