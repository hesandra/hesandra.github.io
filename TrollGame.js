// Troll Game

var user = prompt("You are walking through a forest in the middle in the night. Then you meet a troll. What do you do? RUN, FIGHT, PAY to get away?").toUpperCase();


switch(user) 
{
    case 'RUN':
        var answerFast = prompt("Are you fast? yes or no?").toLowerCase();
        var answerHeadStart = prompt("Did you get a head start?").toLowerCase();
        
        if(answerFast === "yes" && answerHeadStart === "yes")
            {console.log("You got away easily")}
            
        else if(answerFast === "no" && answerHeadStart === "no")
        {console.log("Sorry but you didn't have a chance. He will turn you into a troll.")}
        
        else if((answerFast === "yes" || answerFast ==="no") && (answerHeadStart === "yes" || answerHeadStart === "no"))
            {console.log("You barely made it, but you're fine now")}
            
        else {console.log("Please answer yes or no for both questions")}

        break;
    case 'FIGHT':
        console.log("Are you strong?")
        break;
    case 'PAY':
        console.log("Do you have troll dollars?")
        break;
    default:
   		console.log("This won't help you getting away from the troll. Please chose one of the options: FIGHT, PAY or RUN.");
}


