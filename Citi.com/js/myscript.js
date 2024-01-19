const selectElement = document.getElementById("countries");

    // Fetch country data from the API
    fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => {
            // Populate the dropdown with countries
            data.forEach(country => {
                const option = document.createElement("option");
                option.value = country.name.common;
                option.text = country.name.common;
                selectElement.add(option);
            });
        })
        .catch(error => console.error("Error fetching country data:", error));