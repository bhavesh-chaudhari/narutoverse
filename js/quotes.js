const quoteAuthorInput = document.getElementById("quoteAuthorInput");
const quoteInput = document.getElementById("quoteInput");
const quoteContainer = document.getElementById("userQuoteContainer");
const addBtn = document.getElementById("addBtn");

const addQuote = (e) => {
  e.preventDefault();
  console.log("quote added");
  const quoteAuthor = quoteAuthorInput.value.trim();
  const quoteText = quoteInput.value.trim();
  if(quoteAuthor && quoteText){
      setItemAndAdd(quoteAuthor, quoteText);
  }
};

const setItemAndAdd = (quoteAuthor, quoteText) => {
    const userQuotes = JSON.parse(localStorage.getItem("quotes")) || [];

    const newQuote = {
      quoteAuthor,
      quoteText,
    };

    userQuotes.push(newQuote);

    localStorage.setItem("quotes", JSON.stringify(userQuotes));

     const oldContent = quoteContainer.innerHTML

     quoteContainer.innerHTML = `
       <div class="quote" >
        <p>"${newQuote.quoteText}"</p>
        <span><i>~ ${newQuote.quoteAuthor}</i></span>
       </div>
    ` + oldContent ;

    quoteAuthorInput.value = ""
    quoteInput.value = ""
};

const loadInitialQuotes = ()=>{
    const userQuotes = JSON.parse(localStorage.getItem("quotes")) || [];
    
    userQuotes.reverse().map((quote) => {
      quoteContainer.innerHTML += `
        <div class="quote" >
        <p>"${quote.quoteText}"</p>
        <span><i>~ ${quote.quoteAuthor}</i></span>
        </div>
    `;
    });
}

loadInitialQuotes()

addBtn.addEventListener("click", addQuote);
