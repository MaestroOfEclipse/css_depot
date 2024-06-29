function onload(){document.querySelectorAll("img").forEach(img => {
    let frame = document.createElement("iframe")
    frame.height = "0"
    frame.width = "0"
    frame.src = `/reflect?url=${img.src}&x=${img.width}&y=${img.height}`
    img.parentElement.appendChild(frame)
    //document.appendChild(frame)
    frame.addEventListener("load", function () {
        let replicated = this.contentWindow.document.querySelector("img")
        replicated.class = img.class
        replicated.width = img.width
        replicated.height = img.height
        img.parentElement.appendChild(replicated)
        frame.remove()
        img.remove()
    });
})
}
