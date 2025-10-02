//  User Input
        function calculateAge(){
        let birthYear =prompt("Enter your birth year:") ;
        let currentYear = prompt("Enter the current year:");
        // Converts the input string to number
        birthYear = Number(birthYear);
        currentYear = Number(currentYear);
        // Calculate Age
        let age = currentYear - birthYear;
        // Show all the info clearly
        if(age > 0){
            console.log("Your birth year:" + birthYear);
            console.log("Current year:" + currentYear);
            console.log("Your are", age, "years old");
        }else{
            console.log("Invalid input");
        }
    }
    calculateAge();
