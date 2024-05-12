let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/24",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/24",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/24",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/24",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/24",
        Fee: "50.00",
    }
];


//  When does the PROG200 course start?

function isCourseAvailable(arrayValue){
    if (arrayValue.CourseId === "PROG200"){
        return true;
    }
    else{
        return false;
    }
}

let prog = courses.find(isCourseAvailable);

if (prog != undefined){
console.log(prog.StartDate);}

//  What is the title of the PROJ500 course?

function isCourseAvailable1(arrayValue){
    if (arrayValue.CourseId === "PROJ500"){
        return true;
    }
    else{
        return false;
    }
}

let prog1 = courses.find(isCourseAvailable1);

if (prog1 != undefined){
console.log(prog1.Title);}


//  What are the titles of the courses that cost $50 or less?

function lessThan50(arrayValue){
    if (Number(arrayValue.Fee) <= 50.00){
        return true;
    }
    else{
        return false;
    }
}

let prog2 = courses.filter(lessThan50);


if (prog2.length > 0){

    for(let i=0; i<prog2.length; i++) {
        console.log(prog2[i].Title)
    }
}


//  What  classes meet in "Classroom 1"?
