import React, { useState } from "react";
import "./ImportShortener.css";

const ImportShortener = ({ setInputValue }) => {
    const [value, setValue] = useState("");

    const handleClick = () => {

        setInputValue(value);
        setValue("");

    }
    return (
      <>
        <div className="inputContainer">
          <h1>
            URL Shortener
          </h1>
          <div>
            <input
              className="inputurl"
              type="text"
              placeholder="Past a link to shortener link"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button class="button-50" onClick={handleClick}>
              SHORTLINK
            </button>
          </div>
        </div>
      </>
    );
};

export default ImportShortener;
