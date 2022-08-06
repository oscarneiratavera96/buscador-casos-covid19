import React, { useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import Table from "./Table";

const Initial = () => {
  const [valueCountry, setValueCountry] = useState();
  const [search, setSearch] = useState(false);
  const [valueInput, setValueInput] = useState();
  const [valueDeaths, setValueDeaths] = useState([]);
  const [valueCountrys, setValueCountrys] = useState([]);
  const [valueConfirmed, setValueConfirmed] = useState([]);
  const [valueLastReported, setValueLastReported] = useState([]);
  const [count, setCount] = useState(-1);

  const getInput = (e) => {
    setValueInput(e.target.value);
  };

  const getCountry = (e) => {
    e.preventDefault();
    setValueCountry(valueInput);
    if (valueInput === undefined || valueInput === null || valueInput === "") {
      console.log("Error");
    } else {
      setCount(count + 1);
      e.target.reset();
      setSearch(!search);
    }
  };

  useEffect(() => {
    const covidData = async () => {
      if (valueCountry === undefined || valueCountry === "") return;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "31c12c8b31msh80d0b327aa43957p1608a4jsnf5bee384d505",
          "X-RapidAPI-Host": "covid-19-coronavirus-statistics.p.rapidapi.com",
        },
      };

      let valueCountryFinal =
        valueCountry[0].toUpperCase() + valueCountry.slice(1);

      let covidUrl = `https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=${valueCountryFinal}`;

      //Promises to get data from API with custom helper
      const [covidRes] = await Promise.all([helpHttp().get(covidUrl, options)]);
      valueDeaths[count] = await covidRes.data.deaths;
      valueConfirmed[count] = await covidRes.data.confirmed;
      valueCountrys[count] = await covidRes.data.location;
      let lastReported = await covidRes.data.lastReported;
      valueLastReported[count] = await lastReported.slice(0, 10);

      setValueConfirmed(valueConfirmed);
      setValueDeaths(valueDeaths);
      setValueCountrys(valueCountrys);
      setValueLastReported(valueLastReported);
      setValueInput("");
      setValueCountry("");

      // console.log(valueDeaths);
      // console.log(valueConfirmed);
      // console.log(valueCountrys);
      // console.log(count);
    };

    covidData();
  }, [search]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 form-group ">
          <form onSubmit={getCountry}>
            <input
              placeholder="País"
              type="text"
              className="form-control"
              onChange={getInput}
            />
            <div className="d-grid gap-2 col-6 mx-auto">
              <input className="btn btn-success" type="submit" value="Buscar" />
            </div>
          </form>
        </div>

        <Table
          count={count}
          valueCountrys={valueCountrys}
          valueConfirmed={valueConfirmed}
          valueDeaths={valueDeaths}
          valueLastReported={valueLastReported}
        />
      </div>
    </div>
  );
};

export default Initial;
