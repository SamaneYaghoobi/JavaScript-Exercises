var samaneHeight = parseInt(prompt("What is the height of Samane?"));
var samaneAge = parseInt(prompt("How old is Samane?"));
var herFriendHight = parseInt(prompt("What is the height of Her friend?"));
var herFriendAge = parseInt(prompt("How old is her friend?"));
var samaneScore = samaneHeight + 5 * samaneAge;
var herFriendScore = herFriendHight + 5 * herFriendAge;

if (samaneScore > herFriendScore)
    console.log("Samane Wins!\nScore= " + samaneScore);
else if (samaneScore === herFriendScore)
    console.log("their score is equal!\nscore= " + samaneScore);
else
    console.log("Her Friend Wins!\nScore= " + herFriendScore);


//EXTRA

var thirdPlayerHeight = parseInt(prompt("What is the height of third player?"));
var thirdPlayerAge = parseInt(prompt("How old is third player?"));
var thirdPlayerScore = thirdPlayerHeight + 5 * thirdPlayerAge;

if (samaneScore > herFriendScore && samaneScore > thirdPlayerScore)
    console.log("Samane Wins!\nScore= " + samaneScore);
else if (herFriendScore > samaneScore && herFriendScore > thirdPlayerScore)
    console.log("Her Friend Wins!\nScore= " + herFriendScore);
else if (thirdPlayerScore > samaneScore && thirdPlayerScore > herFriendScore)
    console.log("Third player Wins!\nScore= " + thirdPlayerScore);
else
    console.log("their score is equal!");
