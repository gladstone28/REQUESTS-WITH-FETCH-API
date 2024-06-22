// Information to reach API
const apiKey = "daf32a46204348f9b73618fdfad97817";
const url = "https://api.rebrandly.com/v1/links";

// Some page elements
const inputField = document.querySelector("#input");
const shortenButton = document.querySelector("#shorten");
const responseField = document.querySelector("#responseField");

// Asynchronous functions
const shortenUrl = async () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({ destination: urlToShorten });

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        apikey: apiKey,
      },
      body: data,
    });

    if (response.ok) {
      const jsonResponse = await response.json();
      displayShortenedUrl(jsonResponse);
    } else {
      throw new Error('Request failed!');
    }
  } catch (error) {
    console.log(error);
  }
};

// Function to display the shortened URL
const displayShortenedUrl = (jsonResponse) => {
  const shortUrl = document.createElement("p");
  shortUrl.textContent = `Shortened URL: ${jsonResponse.shortUrl}`;
  responseField.appendChild(shortUrl);
};

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
};

shortenButton.addEventListener("click", displayShortUrl);
