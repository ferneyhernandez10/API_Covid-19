import React, { useEffect, useState } from "react";
import DataCovid19History from "./DataCovid19History";
import styled from "styled-components";

const TableContainer = styled.div`
  margin: 2rem;
  border: 1px solid;
  border-color: black;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: space-between;
`;

const Header = styled.div`
  padding: 1rem;
  width: 100%;
`;

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
    <Header key={index}>{header}</Header>
  ));
  // const records =Object.entries(dataCovid19History)
  return (
    <>
      <TableContainer>
        <Row>{headerRow}</Row>
        <div>
          <DataCovid19History dataCovid19History={dataCovid19History} />
        </div>
      </TableContainer>
    </>
  );
};

export default GetDataCovid19History;
