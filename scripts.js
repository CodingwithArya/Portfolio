// Example script to handle navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

function showMore() {
    var moreContent = document.getElementById("more-content");
    var readMoreLink = document.getElementById("read-more");

    if (moreContent.style.display === "none") {
        moreContent.style.display = "block";
        readMoreLink.innerText = "Read less";
    } else {
        moreContent.style.display = "none";
        readMoreLink.innerText = "Read more";
    }
}