let myInfo = {
    name: "Ayushi Khare",
    address : "B302, Garuda Park Square KR Pura",
    city: "Bengaluru",
    state: "Karnataka",
    zip: 560036
};

printContact(myInfo);

function printContact(myInfo){
    let mailingLabel = `${myInfo.name}\n${myInfo.address}\n${myInfo.city}, ${myInfo.state} ${myInfo.zip}`
    console.log(mailingLabel);
}