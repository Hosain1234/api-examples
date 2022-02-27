const loadBuddy = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => getBuddy(data))
};
loadBuddy();
const getBuddy = (oneBuddy) => {
    const displayBuddy = oneBuddy.results;
    const buddyDiv = document.getElementById('buddy');
    for(const buddy of displayBuddy){
        const p = document.createElement('p');
        p.innerHTML = `
        <h3>Name : ${buddy.name.first} ${buddy.name.last}</h3>
        <p>Email: ${buddy.email}</p>
        `;
        buddyDiv.appendChild(p);
    }
    // buddyID.innerText = oneBuddy.results;
}
