import axios from "axios";

      let apiUrl = "https://gutendex.com//books?languages=fr&copyright=false,null";
      
      const response = await axios.get(apiUrl);
      const arrayEbooks = response.data.results
      
      // response.forEach((ebook) => {
      //   if (!ebook.formats["image/jpeg"] || !ebook.formats["application/epub+zip"]) {
      //     response.splice(response.indexOf(ebook), 1)
      //   }
      // });

        const numberOfPages = Math.ceil(response.data.count / 32)

        for (let i=2; i<=numberOfPages; i++) {

          const apiNextPageUrl = "https://gutendex.com/books/?copyright=false%2Cnull&languages=fr&page=" + i
          const responseNext = await axios.get(apiNextPageUrl);
          const responseNextResults = responseNext.data.results
  
          for (const ebook of responseNextResults) {
            arrayEbooks.push(ebook)
          }

        }

      let arrayAuthors = arrayEbooks.map(ebook => ebook.authors);
      arrayAuthors = arrayAuthors.flat().map(author => author.name);
      arrayAuthors = [...new Set(arrayAuthors)]

      console.log(arrayAuthors.sort().length);


    