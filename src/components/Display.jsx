import { useEffect } from "react";
import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Display() {
  const location = useLocation();

  let value = location.state;
  localStorage.setItem("countries", JSON.stringify(value));
  useEffect(() => {
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener("popstate", function (event) {
      debugger;
      window.history.pushState(null, document.title, window.location.href);
    });
  }, [location]);
  return (
    <div>
      <h1>Display</h1>
      <h2>
        this is countrys you have selected
        {value.map((i) => (
          <li>{i}</li>
        ))}
      </h2>
      <Link to="/">
        <button>Goback</button>
      </Link>
    </div>
  );
}
