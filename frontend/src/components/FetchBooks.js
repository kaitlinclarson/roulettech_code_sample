function fetchBooks(setBookList) {
    console.log("Fetch books");

    let URL = 'books';
    let token = localStorage.getItem("auth");
    let payload = { method: "GET" };
    if (token) {
        payload = {
            ...payload,
            headers: {
                'Authorization': 'Token ' + localStorage.getItem("auth"),
            },
        };
    }

    fetch(URL, payload)
        .then((response) => {
            if (!response.ok) throw new Error(response.status);
            else return response.json()
        })
        .then((json) => {
            setBookList(json);
            console.log(json);
        })
        .catch((error) => {
            console.log(error);
        });
}

export default fetchBooks;