const resultsSection = document.getElementById("results");
const resultsHeader = document.getElementById("areResults");
const resultsMovies = document.getElementById("movies");

let resultStatus = false;

function setResults() {
    resultStatus = true;
    const countryChosen = countrySel.options[countrySel.selectedIndex].text;
    const yearChosen = yearSel.options[yearSel.selectedIndex].value;
    const genreChosen = genreSel.options[genreSel.selectedIndex].value;
    const durationChosen = durationSel.options[durationSel.selectedIndex].value;
    const ratingChosen = ratingSel.options[ratingSel.selectedIndex].value;

    const results = new Array();

    for (let i = 0; i < movies.length; i++) {
        // Year check
        if (yearChosen == "late" && parseInt(movies[i].year) < 2021) {
            continue;
        } else if (
            yearChosen == "11-20" &&
            (parseInt(movies[i].year) > 2020 || parseInt(movies[i].year) < 2011)
        ) {
            continue;
        } else if (
            yearChosen == "01-10" &&
            (parseInt(movies[i].year) > 2010 || parseInt(movies[i].year) < 2001)
        ) {
            continue;
        } else if (
            yearChosen == "91-00" &&
            (parseInt(movies[i].year) > 2000 || parseInt(movies[i].year) < 1991)
        ) {
            continue;
        } else if (yearChosen == "early" && parseInt(movies[i].year) > 1990) {
            continue;
        } else if (
            yearChosen != movies[i].year &&
            yearChosen != "early" &&
            yearChosen != "91-00" &&
            yearChosen != "01-10" &&
            yearChosen != "11-20" &&
            yearChosen != "late" &&
            yearChosen != "any"
        ) {
            continue;
        }

        // Country check
        let tempCheck;
        tempCheck = 0;
        for (let k = 0; k < movies[i].country.length; k++) {
            if (
                countryChosen == movies[i].country[k] ||
                countryChosen == "Any country"
            ) {
                tempCheck++;
            }
        }
        if (tempCheck == 0) {
            continue;
        }

        // Genre check
        tempCheck = 0;
        for (let k = 0; k < movies[i].genre.length; k++) {
            if (genreChosen == movies[i].genre[k] || genreChosen == "any") {
                tempCheck++;
            }
        }
        if (tempCheck == 0) {
            continue;
        }

        // Duration check
        if (movies[i].duration < 60) {
            tempCheck = "short";
        } else if (movies[i].duration >= 60 && movies[i].duration <= 90) {
            tempCheck = "60-90";
        } else if (movies[i].duration >= 90 && movies[i].duration <= 120) {
            tempCheck = "90-120";
        } else {
            tempCheck = "long";
        }
        if (durationChosen != tempCheck && durationChosen != "any") {
            continue;
        }

        // Rating check
        if (
            ratingChosen == (9 || 8 || 7 || 6 || 5) &&
            movies[i].rating < parseFloat(ratingChosen)
        ) {
            continue;
        } else if (ratingChosen == "low" && movies[i].rating > 5.0) {
            continue;
        }

        results.push(movies[i]);
    }

    localStorage.setItem("results", JSON.stringify(results));

    print(JSON.parse(JSON.stringify(results)));
}

function getResults() {
    let previousResults = localStorage.getItem("results");

    if (previousResults === null) {
        print(1);
    } else {
        print(JSON.parse(previousResults));
    }
}

function print(printEl) {
    resultsHeader.innerHTML = "";
    resultsMovies.innerHTML = "";

    if (printEl === 1) {
        resultsHeader.innerHTML = "No results found";
        return;
    } else {
        if (printEl.length === 0) {
            resultsHeader.innerHTML = "No movies found";
        } else {
            resultsHeader.innerHTML = "Here are your movies";
            for (let i = 0; i < printEl.length; i++) {
                resultsMovies.innerHTML +=
                    "<span>" +
                    (i + 1) +
                    ") " +
                    "</span>" +
                    printEl[i].name +
                    " | " +
                    printEl[i].country +
                    " ( " +
                    printEl[i].year +
                    " )" +
                    "<br/>";
            }
        }
    }
}
