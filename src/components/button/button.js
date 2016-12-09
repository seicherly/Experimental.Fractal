var btn = document.querySelector('button');

btn.addEventListener('click', function () {
    var hasClass = document.querySelectorAll('.loaded');
    if (hasClass.length) {
        document.body.removeChild(hasClass[0]);
    } else {
        var message = document.createElement('p');
        var text = document.createTextNode('Button was clicked');

        message.classList.add('loaded');
        message.appendChild(text);
        document.body.appendChild(message);
    }
});