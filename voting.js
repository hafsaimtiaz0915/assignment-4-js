 let friendsData = [
    { id: 1, name: "waqar", votes: 0 },
    // Add more friends as needed
];

function updateUI() {
    const friendsBody = document.getElementById("friendsBody");
    friendsBody.innerHTML = ""; // Clear existing rows

    friendsData.forEach(friend => {
        const newRow = friendsBody.insertRow();
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);

        cell1.textContent = friend.id;
        cell2.textContent = friend.name;
        cell3.textContent = friend.votes;

        // Set a unique ID for each row for later reference
        newRow.id = `row-${friend.id}`;
        
        // Add a click event listener to each row
        newRow.onclick = function () {
            voteForFriend(friend.id);
        };
    });
}

function voteForFriend(id) {
    const selectedFriend = friendsData.find(friend => friend.id === id);

    if (selectedFriend) {
        selectedFriend.votes++;
        updateUI();
    }
}

function addNewPerson() {
    const newPersonName = document.getElementById("newPersonName").value;
    if (newPersonName.trim() !== "") {
        const newPerson = { id: friendsData.length + 1, name: newPersonName, votes: 0 };
        friendsData.push(newPerson);
        updateUI();
    } else {
        alert("Please enter a name for the new person.");
    }
}

// Initial update of the UI
updateUI();
