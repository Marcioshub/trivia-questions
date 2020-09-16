import React from "react";
import error from "../images/error.svg";

export default function Error() {
  return (
    <div style={{ textAlign: "center", marginTop: 100 }}>
      <img src={error} alt="404" />
      <p style={{ marginBottom: 0 }}>Icon made by</p>
      <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
        Freepik
      </a>
      <p style={{ marginBottom: 0 }}>from</p>{" "}
      <a href="https://www.flaticon.com/" title="Flaticon">
        {" "}
        www.flaticon.com
      </a>
    </div>
  );
}
