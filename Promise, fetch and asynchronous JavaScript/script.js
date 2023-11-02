// Function to fetch users and return a Promise
function fetchUsers() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (response.ok) {
                    resolve(response.json());
                } else {
                    reject('Failed to fetch data');
                }
            })
            .catch(error => reject(error));
    });
}

// Display user names in the list
function displayUserNames(users) {
    const userList = document.getElementById('userList');
    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = user.name;
        userList.appendChild(listItem);
    });
}

// Fetch and display users
fetchUsers()
    .then(users => {
        displayUserNames(users);
    })
    .catch(error => {
        console.error('Error:', error);
    });
