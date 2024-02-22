var key = "****"
var steamID = "76561198324343062"
var url = 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=' + key + '&steamids=' + steamID;
//http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=XXXXXXXXXXXXXXXXXXXXXXX&steamids=76561197960435530
let response = fetch(url);

fetch(url)
    .then(response => {
        const obj = JSON.parse(response)
        console.log(response)
        // handle the response
    })
    .catch(error => {
        console.log("try again")
        console.log(url)
        // handle the error
    });