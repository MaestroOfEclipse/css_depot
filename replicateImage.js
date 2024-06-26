document.querySelectorAll("img").forEach(img => {
    let frame = document.createElement("iframe")
    frame.height = "0"
    frame.width = "0"
    frame.src = `/reflect?url=${img.src}&x=${img.width}&y=${img.height}`
    img.parentElement.appendChild(frame)
    //document.appendChild(frame)
    frame.addEventListener("load", function () {
        let replicated = this.contentWindow.document.querySelector("img")
        replicated.class = img.class
        replicated.width = "250" || img.width
        //replicated.height = img.height
        img.parentElement.appendChild(replicated)
        replicated.style=`aspect-ratio: ${img.width} / ${img.height}`
        frame.remove()
        img.remove()
    });
})
