let request = require("request");

let urlPropertirs = { 
    uri: "https://bravenewcoin.p.rapidapi.com/market-cap?assetId=f1ff77b6-3ab4-4719-9ded-2fc7e71cff1f",
    method: "GET",
    headers: { 
        "Content-Type": "application/json",
        "x-rapidapi-host": "bravenewcoin.p.rapidapi.com",
        "x-rapidapi-key": "bb3d0cb62cmsh72b5b1b3772b0bfp11bf9bjsn6162a034aaf7",
        "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik5EVXhNRGhHT0VReE56STVOelJCTTBJM1FrUTVOa0l4TWtRd1FrSTJSalJFTVRaR1F6QTBOZyJ9.eyJpc3MiOiJodHRwczovL2F1dGguYnJhdmVuZXdjb2luLmNvbS8iLCJzdWIiOiJvQ2RRb1pvSTk2RVJFOUhZM3NRN0ptYkFDZkJmNTVSWUBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9hcGkuYnJhdmVuZXdjb2luLmNvbSIsImlhdCI6MTYwMDgzODg4OSwiZXhwIjoxNjAwOTI1Mjg5LCJhenAiOiJvQ2RRb1pvSTk2RVJFOUhZM3NRN0ptYkFDZkJmNTVSWSIsInNjb3BlIjoicmVhZDppbmRleC10aWNrZXIgcmVhZDpyYW5raW5nIHJlYWQ6bXdhIHJlYWQ6Z3dhIHJlYWQ6YWdncmVnYXRlcyByZWFkOm1hcmtldCByZWFkOmFzc2V0IHJlYWQ6b2hsY3YgcmVhZDptYXJrZXQtY2FwIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.ZnJCwF0Np3h_MikkjJDA_8iRBS10BnpE3v6gKAKn2w-WkSzoAlBVNQGuI-QMaIcextTTqW6cBKtiD99SPuCh_7RjHcUF6NkRnTRierLcRJgB_YEV09ZFfcChUCsSt9TpSWbenjVNK-ICL575YnDsLVf2pUT9UzDTwKRihvC4S1uUYh63GnkZyptRrq8lehQzaT9lJKMp-tlKpkwHGDK0G87s2m7gcUpXVFYttsXayzlPRq8CUvDNgUOtVQyTUE2_glk5keX9wKl7pYscz0TdbM34WmwfEkJrOW3r4cEogVB0n55vmkKXYsELTBtSFvZ6_TAk-ec7FAv-9nQokXwArg"
    }
}

let reqGet = request(urlPropertirs, function(err,res){ 
    console.log(res.statusCode);
    console.log(res);
});