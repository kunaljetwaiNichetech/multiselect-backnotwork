import React, { useEffect, useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./Styles.css";

export default function Options() {
  const location = useLocation();
  useEffect(() => {
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener("popstate", function (event) {
      window.history.pushState(null, document.title, window.location.href);
    });
  }, [location]);
  const [states, setstate] = useState([
    "",
    "gandinagar",
    "ahmedabad",
    "baroda",
    "surat",
    "alaahbad",
  ]);
  useEffect(() => {
    let retrival = JSON.parse(localStorage.getItem("countries"));
    console.log(retrival);
    if (retrival) {
      setdata(retrival);
    } else {
      localStorage.clear();
    }
  }, []);

  const hist = useNavigate();
  const [data, setdata] = useState();
  const [op, setop] = useState([]);

  const handelClick = () => {
    // hist("/display", { state: data });
    hist("/notwork");
    window.onpopstate = (e) => {
      console.log("this is sback button event", e);
    };
  };
  useEffect(() => {
    const getcontry = async () => {
      const co = [];
      const response = await axios.get(
        "https://countriesnow.space/api/v0.1/countries"
      );
      const responses = await response.data.data;
      for (let i = 0; i < responses.length; i++) {
        co.push(responses[i].country);
      }
      console.log(responses);
      setop(co);
    };
    getcontry();
  }, []);
  return (
    <div>
      <h1>Options</h1>
      <button onClick={handelClick}>Apply</button>
      <Multiselect
        className="option"
        placeholder={data ? "" : "select"}
        isObject={false}
        options={states}
        selectedValues={data}
        onSelect={(e) => setdata(e)}
        onRemove={(e) => setdata(e)}
      />

      {/* <select value={state} onChange={handelchange} multiple>
        <option value="">Select state</option>
        <option key={"gujrat"} value={"gujrat"}>
          Gujrat
        </option>
        <option key={"Maharastra"} value={"Maharastra"}>
          Maharastra
        </option>
        <option key={"Keral"} value={"Keral"}>
          Keral
        </option>
        <option key={"Punjab"} value={"Punjab"}>
          Punjab
        </option>
        <option key={"Jammu"} value={"Jammu"}>
          Jammu
        </option>
      </select> */}
    </div>
  );
}
