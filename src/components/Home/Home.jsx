import { useState } from "react";
import { data, transformData } from "../../services/data";
import HomeCard from "./HomeCard/HomeCard";
import styles from "./Home.module.scss";
import ChartComponent from "./ChartComponent";

const Home = () => {
  const [sortAscending, setToSortAscending] = useState(true);
  const [currentSort, setCurrentSort] = useState("");

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
      <div className={styles.chartWrap}>
        <div className={styles.chartBox}>
          <ChartComponent data={transformData(data)} />
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
        {data.sort(sortMaker).map((item, index) => {
          return <HomeCard key={index} roomEntry={item} />;
        })}
      </div>
    </div>
  );
};

export default Home;
