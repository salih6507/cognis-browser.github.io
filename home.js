(function() {
	window.search = function() {
		const q = document.getElementById("q").value.trim();
		if (!q) return;
		window.location.href = "cognis://search?q=" + encodeURIComponent(q);
	};
})();
