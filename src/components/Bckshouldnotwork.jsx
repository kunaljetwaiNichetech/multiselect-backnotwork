import { React, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Bckshouldnotwork() {
  const location = useLocation();
  useEffect(() => {
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener("popstate", function (event) {
      debugger;
      window.history.pushState(null, document.title, window.location.href);
    });
  }, [location]);
  return (
    <div>
      Bckshouldnotwork
      <h1>this is page where back should not work </h1>
      <Link to="/">
        <butto>Go Back to home</butto>
      </Link>
    </div>
  );
}
///////////////////////////////////

// React
// For modal component in React project, the open or close of the modal, controlling browser back is a necessary action.

// The stopBrowserBack: the stop of the browser back button functionality, also get a callback function. This callback function is what you want to do:

// const stopBrowserBack = callback => {
//   window.history.pushState(null, "", window.location.href);
//   window.onpopstate = () => {
//     window.history.pushState(null, "", window.location.href);
//     callback();
//   };
// };
// The startBrowserBack: the revival of the browser back button functionality:

// const startBrowserBack = () => {
//   window.onpopstate = undefined;
//   window.history.back();
// };
// The usage in your project:

// handleOpenModal = () =>
//   this.setState(
//     { modalOpen: true },
//     () => stopBrowserBack(this.handleCloseModal)
//   );

// handleCloseModal = () =>
//   this.setState(
//     { modalOpen: false },
//     startBrowserBack
//   );
// Share
// Improve this answer
// Follow
// edited Dec 14, 2020 at 23:49
// Peter Mortensen's user avatar
// Peter Mortensen
