let data;

async function getListings() {
    data = await $.getJSON("./data.json");
}

getListings().then(listListings)

function listListings() {
    const newListing = $(".listing").clone().removeClass("listing-template");
    const listingTag = $(".tag").eq(1).clone();
    for (let i = 0; i < data.length; i++) {
        newListing.find(".logo").attr("src", data[i].logo);
        newListing.find(".company").text(data[i].company);
        if (!data[i].new) {
            newListing.find(".detail-new").remove();
        }
        if (!data[i].featured) {
            newListing.removeClass("featured-listing");
            newListing.find(".detail-featured").remove();
        }
        newListing.find(".listing-position").text(data[i].position);
        newListing.find(".posted").text(data[i].postedAt);
        newListing.find(".contract").text(data[i].contract);
        newListing.find(".location").text(data[i].location);
        newListing.find(".tag").remove();
        newListing.find(".listing-tags").append(listingTag.clone().text(data[i].role));
        newListing.find(".listing-tags").append(listingTag.clone().text(data[i].level));
        data[i].tools.forEach(tool => {
            newListing.find(".listing-tags").append(listingTag.clone().text(tool));
        });
        data[i].languages.forEach(lang => {
            newListing.find(".listing-tags").append(listingTag.clone().text(lang));
        });
        newListing.clone().appendTo("main");
    }
}