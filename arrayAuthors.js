import axios from "axios";
import fs from "fs";

const apiUrl = "https://gutendex.com//books?languages=fr&copyright=false,null";

const response = await axios.get(apiUrl);
const arrayEbooks = response.data.results;

const numberOfPages = Math.ceil(response.data.count / 32);

for (let i = 2; i <= numberOfPages; i++) {
  const apiNextPageUrl =
    "https://gutendex.com/books/?copyright=false%2Cnull&languages=fr&page=" + i;
  const responseNext = await axios.get(apiNextPageUrl);
  const responseNextResults = responseNext.data.results;

  for (const ebook of responseNextResults) {
    arrayEbooks.push(ebook);
  }
}

let arrayAuthors = arrayEbooks.map((ebook) => ebook.authors).flat();
arrayAuthors = [...new Map(arrayAuthors.map((a) => [a.name, a])).values()]
  .filter(
    (a) =>
      a.name !== "Unknown" && a.name !== "Various" && a.name !== "Anonymous"
  )
  .sort((a, b) => a.name.localeCompare(b.name));

console.log(arrayAuthors.length);

const jsonContent = JSON.stringify(arrayAuthors);

fs.writeFile("./authors.json", jsonContent, "utf8", function (err) {
  if (err) {
    return console.log(err);
  }

  console.log("The file was saved!");
});
