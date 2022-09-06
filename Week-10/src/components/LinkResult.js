import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from "axios";
import "./ImportShortener.css";

const LinkResult = ({ inputValue }) => {

  const [shortenLink, setShortenLink] = useState("");
  const [copid, setCopid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fatchData = async () => {
    try {
      setLoading(true);
      const res = await axios(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );
      setShortenLink(res.data.result.full_short_link);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inputValue.length) {
      fatchData();
    }
  }, [inputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopid(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [copid]);

  
    console.log(shortenLink);
  if (loading) {
    return <p className="noData"> loading.... </p>
  }

  if (error) {
    return <p class="noData">Something wrong </p>
  }


  return (
    <>
      {shortenLink && (
        <div className="result">
          <p> {shortenLink}</p>
          <CopyToClipboard text={shortenLink} onCopy={() => setCopid(true)}>
            <button className="button-54">copy link to clipboard</button>
          </CopyToClipboard>
        </div>
      )}
    </>
  );


};

export default LinkResult;
