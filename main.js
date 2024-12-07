const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// Header Container
scrollReveal().reveal(".header_container h1", scrollRevealOption);

scrollReveal().reveal(".header_container h4", {
    ...scrollRevealOption,
    delay: 500,
});

scrollReveal().reveal(".header_container .btn", {
    ...scrollRevealOption,
    delay: 1000,
});

// About Container
scrollReveal().reveal(".about_container .section_header", scrollRevealOption);
scrollReveal().reveal(".about_container .section_subheader", {
    ...scrollRevealOption,
    delay:500,
});

scrollReveal().reveal(".about_container .about_flex", {
    ...scrollRevealOption,
    delay: 1000,
});

scrollReveal().reveal(".about_container .btn", {
    ...scrollRevealOption,
    delay: 1500,
});

// Discover Container
scrollReveal().reveal(".discover_card", {
    ...scrollRevealOption,
    delay: 500,
});

scrollReveal().reveal(".discover_card_content", {
    ...scrollRevealOption,
    interval: 500,
    delay: 200,
});

// Blogs Container
scrollReveal().reveal(".discover_card_content", {
    ...scrollRevealOption,
    duration: 1000,
    interval: 400,
});

// Journals Container
scrollReveal().reveal(".journals_card", {
    ...scrollRevealOption,
    interval: 400,
});