window.onload=(() => {
            document.querySelector("body").innerHTML+=`
            <div class="circle-button button" id="circle-button">
        <i class="fas fa-comment"></i>
    </div>

    <div class="expanded-container" id="expanded-container">
        <div class="close-button button" id="close-button">
            <i class="fas fa-times"></i>
        </div>
        <iframe id="iframe" src="http://localhost:3001/home" frameborder="0" allowfullscreen></iframe>
    </div>`

            const circleButton = document.getElementById('circle-button');
            const expandedContainer = document.getElementById('expanded-container');
            const closeButton = document.getElementById('close-button');
            const iframe = document.getElementById('iframe');

            circleButton.addEventListener('click', () => {
                expandedContainer.classList.add('visible');
                circleButton.style.opacity = '0';

                iframe.src = iframe.src;
            });

            closeButton.addEventListener('click', () => {
                expandedContainer.classList.remove('visible');
                circleButton.style.opacity = '1';
            });
        })
