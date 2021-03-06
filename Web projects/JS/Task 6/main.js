// ----------------------------------------- Theme change -----------------------------------
let darkThemeStatus = false;
function changeTheme() {
    const body = document.querySelector(".light-theme");
    body.classList.toggle("dark-theme");
    if (darkThemeStatus === false) {
        document
            .getElementById("theme-icon-path")
            .setAttribute("fill", "black");
        darkThemeStatus = true;
    } else {
        document
            .getElementById("theme-icon-path")
            .setAttribute("fill", "white");
        darkThemeStatus = false;
    }
}

// Get select elements
const countrySel = document.getElementById("country");
const yearSel = document.getElementById("year");
const genreSel = document.getElementById("genre");
const durationSel = document.getElementById("duration");
const ratingSel = document.getElementById("rating");

// All the films
function Film(
    filmCountry,
    filmName,
    filmYear,
    filmGenre,
    filmDuration,
    filmRating,
) {
    this.name = filmName;
    this.country = filmCountry;
    this.year = filmYear;
    this.genre = filmGenre;
    this.duration = filmDuration;
    this.rating = filmRating;
}

const movies = [
    // ------------------------------ North America ------------------------------
    new Film(["USA"], "The Shawshank Redemption", 1994, ["drama"], 144, 9.3),
    new Film(["USA"], "The Godfather", 1972, ["drama", "crime"], 175, 9.2),
    new Film(
        ["USA", "UK"],
        "The Dark Knight",
        2008,
        ["action", "crime", "drama"],
        152,
        9.0,
    ),
    new Film(
        ["USA"],
        "The Batman",
        2022,
        ["action", "crime", "drama"],
        176,
        8.3,
    ),
    new Film(
        ["USA", "Canada"],
        "Joker",
        2019,
        ["crime", "drama", "thriller"],
        122,
        8.4,
    ),
    new Film(
        ["USA"],
        "Avengers: Endgame",
        2019,
        ["action", "adventure", "drama"],
        181,
        8.4,
    ),
    new Film(
        ["USA"],
        "Spider-Man: No Way Home",
        2021,
        ["action", "adventure", "fantasy"],
        148,
        8.4,
    ),
    new Film(
        ["USA", "UK"],
        "Harry Potter and the Sorcerer's Stone",
        2001,
        ["adventure", "family", "fantasy"],
        152,
        7.6,
    ),
    new Film(
        ["USA"],
        "Batman v Superman: Dawn of Justice Ultimate Edition",
        2016,
        ["action", "adventure", "sci_Fi"],
        182,
        7.8,
    ),
    new Film(
        ["USA", "Mexico"],
        "Titanic",
        1997,
        ["drama", "romance"],
        194,
        9.3,
    ),
    new Film(
        ["USA", "UK", "Canada", "Spain"],
        "Blade Runner 2049",
        2017,
        ["action", "drama", "mystery"],
        164,
        8.0,
    ),
    new Film(
        ["USA"],
        "Zack Snyder's Justice League",
        2021,
        ["action", "adventure", "fantasy"],
        242,
        8.1,
    ),
    new Film(
        ["USA", "Canada"],
        "Dune",
        2021,
        ["action", "adventure", "drama"],
        155,
        8.1,
    ),
    new Film(
        ["USA"],
        "The Wolf of Wall Street",
        2013,
        ["biography", "comedy", "crime"],
        180,
        8.2,
    ),
    new Film(
        ["USA", "UK", "China"],
        "Once Upon a Time... In Hollywood",
        2019,
        ["comedy", "drama"],
        161,
        7.6,
    ),
    new Film(
        ["USA", "UK", "Germany"],
        "Blood Diamond",
        2006,
        ["adventure", "drama", "thriller"],
        143,
        8.0,
    ),
    new Film(
        ["France", "USA", "Rwanda"],
        "Sometimes in April",
        2005,
        ["drama", "history", "war"],
        140,
        7.8,
    ),
    new Film(["USA"], "Beasts of No Nation", 2015, ["drama", "war"], 137, 7.7),
    new Film(
        ["USA", "Mexico", "Hong Kong"],
        "Sicario",
        2015,
        ["action", "crime", "drama"],
        121,
        7.6,
    ),
    new Film(
        ["Mexico", "USA"],
        "Predator",
        1987,
        ["action", "adventure", "horror"],
        107,
        7.8,
    ),
    new Film(["Mexico"], "Y tu mam?? tambi??n", 2001, ["drama"], 106, 7.7),
    new Film(["Mexico", "USA"], "Roma", 2018, ["drama"], 135, 7.7),
    new Film(
        ["Mexico"],
        "The Holy Mountain",
        1973,
        ["adventure", "drama", "fantasy"],
        104,
        7.8,
    ),
    new Film(
        ["Mexico"],
        "The Exterminating Angel",
        1962,
        ["drama", "fantasy"],
        95,
        8.0,
    ),
    new Film(
        ["Canada", "France", "USA"],
        "CODA",
        2021,
        ["comedy", "drama", "music"],
        111,
        8.0,
    ),
    new Film(
        ["Canada", "USA"],
        "American Psycho",
        2000,
        ["crime", "drama", "horror"],
        102,
        7.6,
    ),
    new Film(
        ["Canada", "USA"],
        "Iron Man",
        2008,
        ["action", "adventure", "sci_fi"],
        126,
        7.9,
    ),
    new Film(
        ["Canada", "USA", "Bulgaria"],
        "300",
        2006,
        ["action", "drama"],
        117,
        7.6,
    ),
    new Film(["Canada", "USA"], "Arrival", 2016, ["drama", "sci_fi"], 116, 7.9),
    new Film(
        ["Canada", "USA"],
        "Catch Me If You Can",
        2002,
        ["biography", "crime", "drama"],
        141,
        8.1,
    ),
    new Film(
        ["Canada", "USA", "UK", "Ireland"],
        "Room",
        2015,
        ["drama", "thriller"],
        118,
        8.1,
    ),
    new Film(
        ["Canada", "USA"],
        "Edge of Tomorrow",
        2014,
        ["action", "adventure", "sci_fi"],
        113,
        7.9,
    ),
    new Film(
        ["Canada", "USA"],
        "The Butterfly Effect",
        2004,
        ["drama", "sci_fi", "thriller"],
        113,
        7.6,
    ),

    // ------------------------------ ASIA --------------------------------------
    new Film(
        ["Japan"],
        "Jujutsu Kaisen 0: The Movie",
        2021,
        ["animation", "action", "family"],
        112,
        8.0,
    ),
    new Film(["India"], "RRR", 2022, ["action", "drama"], 187, 8.9),
    new Film(
        ["India"],
        "K.G.F: Chapter 2",
        2022,
        ["action", "crime", "drama"],
        168,
        9.6,
    ),
    new Film(
        ["India"],
        "Anbe Sivam",
        2003,
        ["drama", "adventure", "comedy"],
        160,
        8.7,
    ),
    new Film(
        ["India"],
        "Jai Bhim",
        2021,
        ["crime", "drama", "mystery"],
        164,
        9.4,
    ),
    new Film(["India"], "Hanky Panky", 1979, ["comedy", "romance"], 120, 8.5),
    new Film(["India"], "Nayakan", 1987, ["crime", "drama"], 145, 8.7),
    new Film(["India"], "Pariyerum Perumal", 2018, ["drama"], 154, 8.8),
    new Film(["India"], "The World of Apu", 1959, ["drama"], 105, 8.5),
    new Film(["India"], "3 Idiots", 2009, ["comedy", "drama"], 170, 8.4),
    new Film(
        ["India"],
        "Manichithrathazhu",
        1993,
        ["comedy", "horror", "music"],
        169,
        8.8,
    ),
    new Film(["India"], "Black Friday", 2004, [], 143, 8.4),
    new Film(["India"], "Kumbalangi Nights", 2019, [], 135, 8.6),
    new Film(["India"], "Like Stars on Earth", 2007, [], 165, 8.4),
    new Film(
        ["India", "USA"],
        "Dangal",
        2016,
        ["action", "drama", "biography"],
        161,
        8.4,
    ),
    new Film(
        ["Iran", "France", "Australia"],
        "A Separation",
        2011,
        ["drama"],
        123,
        8.3,
    ),
    new Film(
        ["Iran"],
        "Children of Heaven",
        1997,
        ["drama", "family", "sport"],
        89,
        8.2,
    ),
    new Film(["Iran", "France"], "The Salesman", 2016, ["drama"], 124, 7.7),

    // ------------------------------ Europe -----------------------------------
    // France
    new Film(
        ["France"],
        "The Intouchables",
        2011,
        ["biography", "comedy", "drama"],
        112,
        8.5,
    ),
    new Film(
        ["France", "Germany"],
        "Am??lie",
        2001,
        ["comedy", "romance"],
        122,
        8.3,
    ),
    new Film(
        ["France"],
        "Incendies",
        2010,
        ["drama", "mystery", "war"],
        131,
        8.3,
    ),
    new Film(
        ["France"],
        "Blue Is the Warmest Colour",
        2013,
        ["drama", "romance"],
        180,
        7.7,
    ),
    new Film(
        ["France", "Poland", "Switzerland"],
        "Three Colors: Blue",
        1993,
        ["drama", "music", "mystery"],
        94,
        7.9,
    ),
    new Film(
        ["France", "Poland", "Switzerland"],
        "Three Colors: Red",
        1994,
        ["drama", "romance", "mystery"],
        99,
        8.1,
    ),
    new Film(
        ["France", "UK", "Czech"],
        "La Vie en Rose",
        2007,
        ["biography", "drama", "music"],
        140,
        7.6,
    ),
    new Film(["France"], "Taxi", 1998, ["action", "comedy", "crime"], 86, 6.9),
    // Germany
    new Film(
        ["Germany"],
        "Run Lola Run",
        1998,
        ["crime", "drama", "thriller"],
        80,
        7.7,
    ),
    new Film(["Germany", "USA"], "Fight Club", 1999, ["drama"], 139, 8.8),
    new Film(
        ["Germany", "USA"],
        "Inglourious Basterds",
        2009,
        ["adventure", "drama", "war"],
        153,
        8.3,
    ),
    new Film(
        ["Germany", "USA"],
        "The Grand Budapest Hotel",
        2014,
        ["adventure", "comedy", "crime"],
        99,
        8.1,
    ),
    new Film(
        ["Germany", "USA", "UK"],
        "V for Vendetta",
        2005,
        ["action", "drama", "sci_Fi"],
        132,
        8.2,
    ),
    new Film(
        ["Germany", "Austria", "Italy"],
        "Downfall",
        2004,
        ["biography", "drama", "history"],
        156,
        8.2,
    ),
    new Film(
        ["Germany", "France", "Poland", "UK"],
        "The Pianist",
        2002,
        ["biography", "drama", "music"],
        150,
        8.5,
    ),
    new Film(["Germany", "USA"], "Gran Torino", 2008, ["drama"], 116, 8.1),
    // Austria
    new Film(
        ["Germany", "Austria", "France", "Italy", "Canada"],
        "The White Ribbon",
        2009,
        ["drama", "mystery", "thriller"],
        144,
        7.8,
    ),
    new Film(
        ["Austria", "Germany", "France"],
        "Amour",
        2012,
        ["drama"],
        127,
        7.9,
    ),
    new Film(
        ["Austria", "USA"],
        "Before Sunrise",
        1995,
        ["drama", "romance"],
        101,
        8.1,
    ),
    new Film(
        ["Germany", "Austria", "France", "Greece", "Yugoslavia"],
        "Black Cat, White Cat",
        1998,
        ["comedy", "crime", "romance"],
        127,
        8.0,
    ),
    // Czech
    new Film(
        ["USA", "Czech", "New Zealand"],
        "Jojo Rabbit",
        2019,
        ["drama", "comedy", "war"],
        108,
        7.9,
    ),
    new Film(
        ["Czech", "UK", "USA", "Germany", "Bahamas"],
        "Casino Royale",
        2006,
        ["action", "adventure", "thriller"],
        144,
        8.0,
    ),
    new Film(
        ["Czech", "Germany", "USA"],
        "The Bourne Identity",
        2002,
        ["action", "mystery", "thriller"],
        119,
        7.9,
    ),
    new Film(
        [
            "Czech",
            "Yugoslavia",
            "France",
            "Germany",
            "Bulgaria",
            "Hungary",
            "UK",
            "USA",
        ],
        "Underground",
        1995,
        ["comedy", "drama", "fantasy"],
        167,
        8.1,
    ),
    // Denmark
    new Film(
        ["Denmark", "Norway", "France", "Sweden"],
        "The Worst Person in the World",
        2021,
        ["comedy", "drama", "romance"],
        128,
        7.9,
    ),
    new Film(["Denmark", "Sweden"], "The Hunt", 2012, ["drama"], 115, 8.3),
    new Film(
        ["Denmark", "USA", "Australia"],
        "The Lego Movie",
        2014,
        ["animation", "action", "adventure"],
        100,
        7.7,
    ),
    new Film(
        ["Denmark", "Sweden", "Germany", "Norway"],
        "The Girl with the Dragon Tattoo",
        2009,
        ["crime", "drama", "mystery"],
        152,
        7.8,
    ),
    new Film(
        [
            "Denmark",
            "Netherlands",
            "Sweden",
            "Germany",
            "UK",
            "France",
            "Finland",
            "Norway",
            "Italy",
        ],
        "Dogville",
        2003,
        ["crime", "drama"],
        178,
        8.0,
    ),
    // Finland
    new Film(
        [
            "Finland",
            "UK",
            "USA",
            "Germany",
            "Netherlands",
            "Italy",
            "Norway",
            "IcelandNorway",
            "Sweden",
            "France",
        ],
        "Dancer in the Dark",
        2000,
        ["crime", "drama", "musical"],
        140,
        7.9,
    ),
    // Greece
    new Film(
        ["Greece", "USA"],
        "Before Midnight",
        2013,
        ["drama", "romance"],
        109,
        7.9,
    ),
    // Italy
    new Film(
        ["Italy", "USA", "France", "Brazil"],
        "Call Me by Your Name",
        2017,
        ["drama", "romance"],
        134,
        7.9,
    ),
    new Film(
        ["Italy", "USA"],
        "Once Upon a Time in America",
        1984,
        ["drama", "crime"],
        229,
        8.3,
    ),
    new Film(
        ["Italy", "Germany", "Spain"],
        "The Good, the Bad and the Ugly",
        1966,
        ["adventure", "western"],
        178,
        8.8,
    ),
    new Film(
        ["Italy", "USA"],
        "Once Upon a Time in the West",
        1968,
        ["western"],
        165,
        8.5,
    ),
    new Film(
        ["Italy", "Spain", "USA", "France"],
        "The Others",
        2001,
        ["horror", "mystery", "thriller"],
        104,
        7.6,
    ),
    // Netherlands
    new Film(
        ["Netherlands", "USA", "UK", "France"],
        "Dunkirk",
        2017,
        ["action", "drama", "history"],
        106,
        7.8,
    ),
    new Film(
        ["Netherlands", "Belgium"],
        "The Broken Circle Breakdown",
        2012,
        ["drama", "music", "romance"],
        111,
        7.7,
    ),
    // Norway
    new Film(
        ["Norway", "USA", "China", "France", "UK"],
        "Mission: Impossible - Fallout",
        2018,
        ["action", "adventure", "thriller"],
        147,
        7.7,
    ),
    new Film(
        ["Norway", "USA", "Sweden"],
        "The Girl with the Dragon Tattoo",
        2011,
        ["crime", "drama", "mystery"],
        158,
        7.8,
    ),
    new Film(
        ["Norway", "France", "Poland"],
        "The Double Life of V??ronique",
        1991,
        ["drama", "fantasy", "music"],
        98,
        7.7,
    ),
    new Film(
        ["Norway", "Denmark", "UK", "Sweden"],
        "After the Wedding",
        2006,
        ["drama"],
        120,
        7.7,
    ),
    // Poland
    new Film(
        ["Poland", "France", "Switzerland"],
        "Three Colors: White",
        1994,
        ["comedy", "drama", "romance"],
        92,
        7.6,
    ),
    new Film(
        ["Poland", "USA", "UK", "Switzerland", "Netherlands"],
        "Loving Vincent",
        2017,
        ["animation", "biography", "crime"],
        94,
        7.8,
    ),
    // Romania
    new Film(
        ["Romania", "Belgium"],
        "4 Months, 3 Weeks and 2 Days",
        2007,
        ["drama"],
        113,
        7.9,
    ),
    new Film(
        ["Romania", "France", "Germany", "UK", "Belgium"],
        "Joyeux Noel",
        2005,
        ["drama", "history", "music"],
        116,
        7.7,
    ),
    // Russia
    new Film(
        ["Russia", "USA"],
        "Searching",
        2018,
        ["drama", "mystery", "thriller"],
        102,
        7.6,
    ),
    new Film(["Russia"], "Leviathan", 2014, ["crime", "drama"], 140, 7.6),
    new Film(["Russia"], "The Return", 2003, ["drama"], 110, 7.9),
    // Spain
    new Film(
        ["Spain", "USA", "UK", "Canada"],
        "Blade Runner 2049",
        2017,
        ["action", "drama", "mystery"],
        164,
        8.0,
    ),
    new Film(
        ["Spain", "USA", "UK", "India"],
        "1917",
        2019,
        ["action", "drama", "war"],
        119,
        8.3,
    ),
    new Film(
        ["Spain"],
        "The Invisible Guest",
        2016,
        ["crime", "drama", "mystery"],
        106,
        8.0,
    ),
    new Film(
        ["Spain", "USA", "Germany", "France"],
        "The Bourne Ultimatum",
        2007,
        ["action", "mystery", "thriller"],
        115,
        8.0,
    ),
    new Film(
        ["Spain", "France", "Italy"],
        "Open Your Eyes",
        1997,
        ["drama", "mystery", "sci_fi"],
        119,
        7.7,
    ),
    // Switzerland
    new Film(
        ["Switzerland", "USA", "UK"],
        "Man on Fire",
        2004,
        ["action", "crime", "drama"],
        146,
        7.7,
    ),
    new Film(
        ["Switzerland", "USA", "UK", "Ireland"],
        "The Count of Monte Cristo",
        2002,
        ["action", "adventure", "drama"],
        131,
        7.7,
    ),
    new Film(
        ["Switzerland", "Germany", "France"],
        "The Chorus",
        2004,
        ["comedy", "drama", "music"],
        97,
        7.9,
    ),
    // Sweden
    new Film(
        ["Sweden"],
        "Let the Right One In",
        2008,
        ["drama", "fantasy", "horror"],
        114,
        7.9,
    ),
    new Film(
        ["Sweden", "Denmark", "Netherlands"],
        "Another Round",
        2020,
        ["comedy", "drama"],
        117,
        7.7,
    ),
    // Turkey
    new Film(
        ["Turkey", "USA", "UK"],
        "Skyfall",
        2012,
        ["action", "adventure"],
        143,
        7.8,
    ),
    new Film(
        ["Turkey"],
        "Ayla: The Daughter of War",
        2017,
        ["biography", "drama", "history"],
        125,
        8.4,
    ),
    new Film(
        ["Turkey", "France", "Germany"],
        "Winter Sleep",
        2014,
        ["drama"],
        196,
        8.1,
    ),

    // ------------------------------ Africa -------------------------------------
    new Film(
        ["Africa", "UK", "USA", "Italy"],
        "Hotel Rwanda",
        2004,
        ["biography", "drama", "history"],
        121,
        8.1,
    ),
    new Film(
        ["Africa", "USA", "Canada", "New Zealand"],
        "District 9",
        2009,
        ["action", "sci_Fi", "thriller"],
        112,
        7.9,
    ),
    new Film(
        ["Africa", "UK", "Germany"],
        "Shooting Dogs",
        2005,
        ["drama", "history", "war"],
        115,
        7.6,
    ),
    new Film(
        ["Africa", "Germany"],
        "Nowhere in Africa",
        2001,
        ["biography", "drama", "history"],
        141,
        7.5,
    ),

    // ------------------------------ Oceania ------------------------------------
    new Film(
        ["Australia", "USA"],
        "Mad Max: Fury Road",
        2015,
        ["action", "adventure", "sci_Fi"],
        120,
        8.1,
    ),
    new Film(
        ["Australia", "USA"],
        "The Matrix",
        1999,
        ["action", "sci_Fi"],
        136,
        8.7,
    ),
    new Film(
        ["Australia", "USA"],
        "Thor: Ragnarok",
        2017,
        ["action", "adventure", "comedy"],
        130,
        7.9,
    ),
    new Film(
        ["Australia", "USA", "UK", "Germany"],
        "Sherlock Holmes",
        2009,
        ["action", "adventure", "mystery"],
        128,
        7.6,
    ),
    new Film(
        ["Australia", "USA"],
        "Crash",
        2004,
        ["crime", "drama", "thriller"],
        112,
        7.8,
    ),
];
