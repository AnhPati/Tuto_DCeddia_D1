import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Hi() {
  return (
    <div id="mainContainer">
      <h1
        style={{
          fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
          fontWeight: "500",
          textDecoration: "underline",
          color: "#003333",
          textShadow:
            "0.5px 0 0 #FFF, 0.5px 0.5px 0 #FFF, 0 0.5px 0 #FFF, -0.5px 0.5px 0 #FFF, -0.5px 0 0 #FFF, -0.5px -0.5px 0 #FFF, 0 -0.5px 0 #FFF, 0.5px -0.5px 0 #FFF"
        }}
      >
        Short presentation of myself :
      </h1>
      <div
        style={{
          border: "2px solid #226666",
          padding: "1rem",
          color: "#FFF",
          backgroundColor: "#D46A6A"
        }}
      >
        <p className="paragraphStyles">
          Hi, my name is <strong className="strongStyles">Romain</strong>!<br />
          I'm {30 + 2} years old.
        </p>
        <p className="paragraphStyles">
          I have already bases with <em>React{"JS"}</em>.<br />
          Like :
          <ol className="listStyles">
            <li className="">Create pure component.</li>
            <li className="">Create class component.</li>
            <li className="">Use props and states.</li>
            <li className="">Styles in JSX.</li>
          </ol>
          But I don't <span className="">really satisfied</span>...
          <br />I want try, and try, and try to become a better developper !
        </p>
        <p className="paragraphStyles">
          Otherwise, I also like ...
          <ul className="listStyles uBox-flex">
            <li
              style={{
                color: "#669999",
                fontWeight: "600",
                textShadow:
                  "0.5px 0 0 #FFF, 0.5px 0.5px 0 #FFF, 0 0.5px 0 #FFF, -0.5px 0.5px 0 #FFF, -0.5px 0 0 #FFF, -0.5px -0.5px 0 #FFF, 0 -0.5px 0 #FFF, 0.5px -0.5px 0 #FFF"
              }}
            >
              dancing 🕺🏾,
            </li>
            <li
              style={{
                color: "#407F7F",
                fontWeight: "600",
                textShadow:
                  "0.5px 0 0 #FFF, 0.5px 0.5px 0 #FFF, 0 0.5px 0 #FFF, -0.5px 0.5px 0 #FFF, -0.5px 0 0 #FFF, -0.5px -0.5px 0 #FFF, 0 -0.5px 0 #FFF, 0.5px -0.5px 0 #FFF"
              }}
            >
              singing 🎙️,
            </li>
            <li
              style={{
                color: "#669999",
                fontWeight: "600",
                textShadow:
                  "0.5px 0 0 #FFF, 0.5px 0.5px 0 #FFF, 0 0.5px 0 #FFF, -0.5px 0.5px 0 #FFF, -0.5px 0 0 #FFF, -0.5px -0.5px 0 #FFF, 0 -0.5px 0 #FFF, 0.5px -0.5px 0 #FFF"
              }}
            >
              drawing 🎨,
            </li>
            <li
              style={{
                color: "#407F7F",
                fontWeight: "600",
                textShadow:
                  "0.5px 0 0 #FFF, 0.5px 0.5px 0 #FFF, 0 0.5px 0 #FFF, -0.5px 0.5px 0 #FFF, -0.5px 0 0 #FFF, -0.5px -0.5px 0 #FFF, 0 -0.5px 0 #FFF, 0.5px -0.5px 0 #FFF"
              }}
            >
              traveling 🌎.
            </li>
          </ul>
          Classic will you say to me ?<br />
          But{" "}
          <strong className="strongStyles">
            I am anything but <span className="">classic</span>
          </strong>{" "}
          !
        </p>
      </div>
      <p
        style={{
          marginTop: "2.5rem",
          color: "#FFF"
        }}
      >
        PS: Sorry if it stings your eyes!
      </p>
    </div>
  );
}

ReactDOM.render(<Hi />, document.querySelector("#root"));
