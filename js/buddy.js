const loadBuddy = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => getBuddy(data))
};
const getBuddy = (oneBuddy) => {
    const displayBuddy = oneBuddy.results;
    const buddyID = document.getElementById('buddy');
    for(const buddy of displayBuddy){
        console.log(displayBuddy);
        const p = document.createElement('p');
        p.innerText = oneBuddy.email;
        buddyID.appendChild(p);
    }
    // buddyID.innerText = oneBuddy.results;
}
