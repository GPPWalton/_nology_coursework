// The starting data
const holidayDestinations = [
    { locationName: "Maldives", vacationType: "beach", budget: 1200 },
    { locationName: "Tokyo", vacationType: "city", budget: 800 },
    { locationName: "Swiss Alps", vacationType: "nature", budget: 1500 },
    { locationName: "Bali", vacationType: "beach", budget: 900 },
    { locationName: "New York", vacationType: "city", budget: 1100 }
];

// Step 1 & 2: Write your formatDestination function here
const formatDestination = holidayDestination => {
    // seperatate chunks of output string delcared here.
    let chunk1;
    if (holidayDestination.vacationType == "beach") {
        chunk1 = "[Beach Getaway]";
    } else if (holidayDestination.vacationType == "city") {
        chunk1 = "[City Break]";
    } else if (holidayDestination.vacationType == "nature") {
        chunk1 = "[Nature Retreat]";
    } else {
        //if not any of the above, then destination is invalid
        throw new Error(
            `Invalid vacationType: ${holidayDestination.vacationType}, should be beach, city or nature`
        );
    }
    const chunk2 = holidayDestination.locationName;
    const chunk3 = holidayDestination.budget;

    return `${chunk1} ${chunk2} (£${chunk3})`;
};

// Step 3: Use .map() to create your formattedBrochure array here
const formattedBrochure = holidayDestinations.map(destination => {
    return formatDestination(destination);
});
// Step 4: console.log your formattedBrochure array
console.log(formattedBrochure);
