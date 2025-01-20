import React, { useState, useEffect } from "react";

export const QuotesTile = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("Unknown");

  useEffect(() => {
    const getQuote = async () => {
      const url =
        "https://metaapi-mindfulness-quotes.p.rapidapi.com/v1/mindfulness";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "2182b76a31msh73898d1aaf3ae66p146f35jsna736322c65aa",
          "x-rapidapi-host": "metaapi-mindfulness-quotes.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setQuote(result.quote);
        if (!result.author) {
          setAuthor("Unknown");
        } else {
          setAuthor(result.author);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getQuote();
  }, []);

  return (
    <div className="lg:col-span-2 bg-transparent rounded-xl px-4 pt-12 sm:pt-20">
      <p className="font-sanbrainy text-6xl text-wrap text-center align-middle text-black">
        <q>{quote}</q>
      </p>
      <p className="block text-black font-thin text-sm text-right">
        ~ {author}
      </p>
    </div>
  );
};

export default QuotesTile;
