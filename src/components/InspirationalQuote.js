import React, { useState, useEffect} from "react";


export default function InspirationalQuote() {
    const [quote, setQuote] = useState("")

    console.log(quote)

useEffect(() => {
    fetch("https://quotes.rest/qod?language=en")
    .then(response => response.json())
        // 4. Setting *dogImage* to the image url that we received from the response above
    .then(data => setQuote(`"${data.contents.quotes[0].quote}"  -${data.contents.quotes[0].author}`))
  },[])
    return (
        <div className="d-flex justify-content-center">
            <p className="lead text-dark"><strong>Inspirational Quote of the Day: </strong>{quote}</p>
        </div>
    )
}