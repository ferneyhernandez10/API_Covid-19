const DataCovid19History = ({ dataCovid19History }) => {
  const dailyCases = Object.entries(dataCovid19History).map((i) =>
    Object.entries(i[1]).map((e, key) => (
      <div key={key}>{`${e[0]}: ${e[1]}`}</div>
    ))
  );

  const dailyDeaths = Object.entries(dataCovid19History).map((i) =>
    Object.entries(i[1]).map((e, key) => (
      <div key={key}>{`${e[0]}: ${e[1]}`}</div>
    ))
  );

  const dailyRecovered = Object.entries(dataCovid19History).map((i) =>
    Object.entries(i[1]).map((e, key) => (
      <div key={key}>{`${e[0]}: ${e[1]}`}</div>
    ))
  );

  return (
    <>
      <div>{dailyCases[0]} </div>
      <div>{dailyDeaths[1]}</div>
      <div>{dailyRecovered[2]}</div>
    </>
  );
};

export default DataCovid19History;
