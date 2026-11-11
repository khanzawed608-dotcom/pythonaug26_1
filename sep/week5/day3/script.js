// get user by id

async function getUserById(id) {
    try {
        let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        let user = await res.json();
        
        console.log(user);
    }
    catch (error) {
        console.log("error block", error)
    }
}

getUserById(11);
