var samaneHeight=parseInt(prompt("What is the height of Samane?"));
var samaneAge=parseInt(prompt("How old is Samane?"));
var herFriendHight=parseInt(prompt("What is the height of Her friend?"));
var herFriendAge=parseInt(prompt("How old is her friend?"));
var samaneScore=samaneHeight+ 5*samaneAge;
var herFriendScore=herFriendHight+ 5*herFriendAge;
if (samaneScore>herFriendScore)
    console.log("Samane Wins!\nScore= "+samaneScore);
else if(samaneScore===herFriendScore)
    console.log("their score is equal!\nscore= "+samaneScore);
else
    console.log("Her Friend Wins!\nScore= "+herFriendScore);
