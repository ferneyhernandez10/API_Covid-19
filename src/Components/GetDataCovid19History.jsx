import React, { useEffect, useState } from "react";
import DataCovid19History from "./DataCovid19History";

const GetDataCovid19History = () => {
  const [dataCovid19History, setDataCovid19History] = useState({});

  const URL = "https://disease.sh/v3/covid-19/historical/all?lastdays=all";

  const getDataHistory = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setDataCovid19History(data);
  };

  useEffect(() => {
    getDataHistory();
  }, []);

  const headerRow = Object.keys(dataCovid19History).map((header, index) => (
    <div key={index}>{header}</div>
  ));
  // const records =Object.entries(dataCovid19History)
  return (
    <>
      <div>{headerRow}</div>
      <div>
        <DataCovid19History dataCovid19History={dataCovid19History} />
      </div>
    </>
  );
};

export default GetDataCovid19History;
