// Example script to handle navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

function showMore() {
    var moreContent = document.querySelectorAll('.more-content');
    var readMoreLink = document.getElementById('read-more');

    // Toggle the visibility of the hidden list items
    moreContent.forEach(function(item) {
        if (item.style.display === "none") {
            item.style.display = "list-item";  // Show the hidden list items
            readMoreLink.innerText = "Read less";
        } else {
            item.style.display = "none";  // Hide the list items again
            readMoreLink.innerText = "Read more";
        }
    });
}
