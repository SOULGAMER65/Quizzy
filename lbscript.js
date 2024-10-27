
    document.getElementById('lb1').addEventListener('click', function() {
        const lbElement = document.getElementById('lb');
        lbElement.style.display = 'block'; // Show the element
    });

    document.getElementById('lb').addEventListener('click', function() {
        this.style.display = 'none'; // Hide this element when clicked
    });


