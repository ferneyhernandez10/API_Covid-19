const DataCovid19History = ({ dataCovid19History }) => {
  const caso =
    dataCovid19History && Object.entries(dataCovid19History).map((i) => i[1]);
  console.log(caso);

  return <div>DataCovid19History</div>;
};

export default DataCovid19History;
