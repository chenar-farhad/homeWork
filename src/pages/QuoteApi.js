/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function QuoteApi() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    quoteFuc();
  }, []);

  function quoteFuc() {
    axios
      .get("https://api.quotable.io/random")
      .then((res) => {
        console.log(res.data);
        setQuote(res.data);
        console.log(quote);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="iQuote">
      <div class="p-4 iContent">
        <div className=" p-4"> {quote.content}</div>
        <div>
          <strong> {quote.author}</strong>
        </div>
      </div>
      <div class="p-4">
        <button className="iButton" onClick={quoteFuc}>
          Renew
        </button>
      </div>
    </div>
  );
}
