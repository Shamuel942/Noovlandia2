const ipCopiedText = "IP copiada!";
const ipSpanElement = document.getElementById("ip");
const originalIPText = ipSpanElement.innerHTML;

ipSpanElement.addEventListener("click", () => {

    const tempTextarea = document.createElement("textarea");
    tempTextarea.style.position = "absolute";
    tempTextarea.style.left = "-99999px";
    tempTextarea.style.top = "0";
    tempTextarea.textContent = originalIPText;

    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);

    ipSpanElement.innerHTML = `<span class="extrapad">${ipCopiedText}</span>`;
    
    setTimeout(() => {
        ipSpanElement.innerHTML = originalIPText;
    }, 800);
});
