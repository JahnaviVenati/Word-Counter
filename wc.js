let textareaEle=document.getElementById("text-content");
let wordCount=document.getElementById("word-count");
let charCount=document.getElementById("char-count");
let content=" "
textareaEle.addEventListener("input", ()=>{
    content=textareaEle.value;
    charCount.innerHTML=content.length;
    let text=content.trim()
    let words=text.split(/\s/).length;
    wordCount.innerHTML=words;
})