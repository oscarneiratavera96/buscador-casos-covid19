import React from "react";

const Banner = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Información Covid-19</h1>
        <p className="lead">
          A continuación podrá consultar información del covid-19.
        </p>
        <p className="lead">
          Debe ingresar el país que desee consultar información y despues dar
          clic en el botón Buscar.
        </p>
      </div>
    </div>
  );
};

export default Banner;
