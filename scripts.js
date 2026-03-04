  fetch('navbar.html')
    .then(res => res.text())
    .then(data => document.getElementById('navbar').innerHTML = data);
  fetch('footer-nav.html')
    .then(res => res.text())
    .then(data => document.getElementById('footer-nav').innerHTML = data);
    

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#name').addEventListener("click", function () {
        this.style.backgroundColor = "black";
        this.style.color = "white";
    });
    document.querySelector('#email').addEventListener("click", function () {
        this.style.backgroundColor = "black";
        this.style.color = "white";
    });
    document.querySelector('#message').addEventListener("click", function () {
        this.style.backgroundColor = "black";
        this.style.color = "white";
    });
    // document.querySelector('form').addEventListener('submit', function (event) {
    //     // alert('hello, ' + document.querySelector('#name').value);
    //     document.querySelector('#name').value = '';
    //     document.querySelector('#email').value = '';
    //     document.querySelector('#message').value = '';
    //     document.querySelector('#confirm').innerHTML = 'Message sent!';
    //     event.preventDefault();
    // });
});

function downloadFile(e) {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = 'CV_of_UmmeHanee.pdf';
    link.download = 'CV_of_UmmeHanee.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function sendMessage(e) {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;
    if (name === '' || email === '' || message === '') {
        document.querySelector('#confirm').innerHTML = 'Please fill in all fields.';
        document.querySelector('#confirm').classList.add('fade-text');
        return;
    }
    window.location.href =
    `mailto:ummehanee@gmail.com?subject=Portfolio Message from ${name}&body=${message}%0A%0AFrom: ${email}`;
}
