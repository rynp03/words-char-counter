(function(){

    let inputTextArea = document.getElementById("input-textarea");
    let characterCount = document.getElementById("char-count");
    let wordCount = document.getElementById("word-count");

    inputTextArea.addEventListener("input", function(){
        characterCount.textContent = inputTextArea.value.length;

        let txt = inputTextArea.value.trim();
        wordCount.textContent = txt.split(/\s+/).filter((item) => item).length;
    })

})()