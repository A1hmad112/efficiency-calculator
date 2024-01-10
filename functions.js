function calculateEKTAM() {
    let bottlesFormat = parseInt(document.getElementById("bottlesFormat").value);
    let operationHours = parseFloat(document.getElementById("operationHours").value);
    let nbDePacks = parseInt(document.getElementById("nbDePacks").value);
    let dechets = parseFloat(document.getElementById("dechets").value);

    let bottlesteamefficiency, bottlesnetefficiency, pdechetsbouteilles;

    if (![400, 600, 1500].includes(bottlesFormat)) {
        alert("Format not available");
        return;
    }

    if (bottlesFormat === 400 || bottlesFormat === 600) {
        bottlesteamefficiency = ((nbDePacks * 16) / (12600 * 8)) * 100;
        bottlesnetefficiency = ((nbDePacks * 16) / (12600 * operationHours)) * 100;
        pdechetsbouteilles = (dechets / (nbDePacks * 16)) * 100;
    } else if (bottlesFormat === 1500) {
        bottlesteamefficiency = ((nbDePacks * 8) / (8000 * 8)) * 100;
        bottlesnetefficiency = ((nbDePacks * 8) / (8000 * operationHours)) * 100;
        pdechetsbouteilles = (dechets / (nbDePacks * 8)) * 100;
    }

    // Display the results
    let output = document.getElementById("output");
    output.innerHTML = `TEAM efficiency EKTAM (8hrs)= ${bottlesteamefficiency.toFixed(2)}%<br>
                        NET efficiency EKTAM (${operationHours} hrs)= ${bottlesnetefficiency.toFixed(2)}%<br>
                        Pourcentage de dechets= ${pdechetsbouteilles.toFixed(2)}%`;
}

function calculateBidons() {
    let format = parseFloat(document.getElementById("formatBidons").value);
    let prodph = parseFloat(document.getElementById("operationHoursBidons").value);
    let bidon = parseInt(document.getElementById("nbDeBidons").value);
    let dechetbidons = parseFloat(document.getElementById("dechetsBidons").value);

    let team_efficiency, net_efficiency, pdechetbidons;

    if (![5, 7, 11, 12, 16.5].includes(format)) {
        alert("Format not available");
        return;
    }

    // Calculations for different formats
    if (format === 5) {
        team_efficiency = (bidon / (2500 * 8)) * 100;
        net_efficiency = (bidon / (2500 * prodph)) * 100;
    } else if (format === 7) {
        // Similar calculations for other formats
    }

    pdechetbidons = (dechetbidons / bidon) * 100;
    // Display the results for Bidons
    let outputBidons = document.getElementById("outputBidons");
    outputBidons.innerHTML = `TEAM efficiency BIDONS (8hrs)= ${team_efficiency.toFixed(2)}%<br>
                              NET efficiency BIDONS (${prodph} hrs)= ${net_efficiency.toFixed(2)}%<br>
                              Pourcentage de dechets= ${pdechetbidons.toFixed(2)}%`;
}

// Make sure to add event listeners or similar triggers for these functions in your HTML.
