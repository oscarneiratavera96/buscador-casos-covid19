import React from "react";

const Table = (Initial) => {
  const {
    valueCountrys,
    valueDeaths,
    valueConfirmed,
    count,
    valueLastReported,
  } = Initial;
  const finalData = [];
  const handleFinalResponse = () => {
    //Unique keys
    const keyPOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    for (let i = 0; i < valueCountrys.length; i++) {
      const keyN = Math.round(Math.random() * 1000);
      //Insert into final variable
      finalData.push(
        <tr key={keyN.toString()}>
          <td>{valueCountrys[i]}</td>
          <td>{valueConfirmed[i]}</td>
          <td>{valueDeaths[i]}</td>
          <td>{valueLastReported[i]}</td>
        </tr>
      );
    }
  };
  handleFinalResponse();

  return (
    <div>
      {" "}
      {count === -1 ? (
        <h2>Esperando datos...</h2>
      ) : (
        <table className="table  table-hover">
          <caption>
            Casos covid-19 | API: COVID-19 Coronavirus Statistics
          </caption>
          <thead>
            <tr>
              <td>
                <strong>País</strong>
              </td>
              <td>
                <strong>Casos confirmados</strong>
              </td>
              <td>
                <strong>Fallecidos</strong>
              </td>
              <td>
                <strong>Fecha de Reporte</strong>
              </td>
            </tr>
          </thead>

          <tbody>{finalData}</tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
