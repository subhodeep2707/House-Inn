function searchHomes() {
    var cityInput = document.getElementById("cityInput").value;
    var searchResults = document.getElementById("searchResults");
  
   // Perfor m a search query to retrieve homes based on the entered city
    // This is where you would make an AJAX request or interact with your server-side code
    // Assume that the search results are returned as an array of objects, where each object represents a home
  
    // Example search results
    var homes = [
      { name: "Home 1", city: "City 1", price: "$1000" },
      { name: "Home 2", city: "City 2", price: "$1500" },
      { name: "Home 3", city: "City 1", price: "$1200" },
      { name: "Home 4", city: "City 3", price: "$900" }
    ];
  
    // Clear previous search results
    searchResults.innerHTML = "";
  
    // Check if any homes match the entered city
    var matchingHomes = homes.filter(function(home) {
      return home.city.toLowerCase() === cityInput.toLowerCase();
    });
  
    if (matchingHomes.length > 0) {
      // Display the matching homes
      matchingHomes.forEach(function(home) {
        var resultItem = document.createElement("div");
        resultItem.innerHTML = "<h3>" + home.name + "</
  