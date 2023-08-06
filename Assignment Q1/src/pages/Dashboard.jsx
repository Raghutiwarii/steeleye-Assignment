import mockData from "../assets/data.json";
import {  useState } from "react";
import styles from "./Dashboard.module.css";
import timestamps from "../assets/timeStamps.json";
import Card from "../component/card/Card";
import Dropdown from "../component/dropdown/Dropdown";
import { Button } from "../stories/Button";
import HeaderTitle from "../component/header-title/HeaderTitle";
import List from "../component/list/List";
import Search from "../component/search/Search";

const Dashboard = () => {
  const [currency, setCurrency] = useState("EUR");
  const [searchText, setSearchText] = useState("");
  const [handleOrderSelection, setHandleOrderSelection] = useState({});
  const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState({});
  const [data,setData]=useState(mockData.results);

  const combinedData = mockData.results.map((order) => {
      const timestampData = timestamps.results.find((timestamp) => timestamp["&id"] === order["&id"]);
      return {
       ...order,
        orderSubmitted: timestampData ? timestampData.timestamps.orderSubmitted : "N/A",
      };
    });

  const filteredData = combinedData.filter((order) =>
    order["&id"].toLowerCase().includes(searchText.toLowerCase())
  );
  
  const totalOrders = filteredData.length;
  
  const handleSearch=(e)=>
  {
           const target =e.target.value;
           setSearchText(target);
           setData( mockData.results.filter( i=> {
               return i["&id"].toLowerCase().includes(target.toLowerCase());
           }
           )
           )
  }
  
  return (
    <div>
      <div className={styles.header}>
        <HeaderTitle primaryTitle="Orders" secondaryTitle={`${totalOrders} orders`} />
        <div className={styles.actionBox}>
          <Search value={searchText} onChange={(ele) => handleSearch(ele)} />
          <Dropdown options={["GBP", "USD", "JPY", "EUR"]} onChange={(e) => setCurrency(e.target.value)} selectedItem={currency} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <Card cardData={handleOrderSelection} title="Selected Order Details" />
          <Card cardData={selectedOrderTimeStamps} title="Selected Order Timestamps" />
        </div>
        <List rows={data} time={timestamps.results} selectedCurrency={currency} onOrderSelect={setHandleOrderSelection} onOrderSelectTime={setSelectedOrderTimeStamps} />
      </div>
    <Button />
    </div>
  );
};
export default Dashboard;
