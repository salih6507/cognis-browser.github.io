function search() {
    const query = document.getElementById("search").value.trim();

    if (!query) return;

    // Şimdilik Google'a yönlendiriyoruz
    // İleride kendi arama motoruna bağlanacak
    window.location.href =
        "https://www.google.com/search?q=" +
        encodeURIComponent(query);
}

// Enter tuşu ile arama
document
    .getElementById("search")
    .addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            search();
        }
    });
