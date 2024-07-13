import backendURL from "../global";

function fetchFavorites(setFavoritesList) {
    console.log("Fetch favorites");

    let URL = backendURL + 'favorites';
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
            console.log(json);
            setFavoritesList(json);
        })
        .catch((error) => {
            console.log(error);
        });
}

function postFavorite(title, favorited, setFavoritesList) {
    console.log("Favoriting title");

    let URL = backendURL + 'favorites/add';
    let token = localStorage.getItem("auth");
    let body = JSON.stringify({ "title": title, "favorite": favorited });
    let payload = { method: "POST", body: body };
    if (token) {
        payload = {
            ...payload,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + localStorage.getItem("auth"),
            },
        };
    }

    console.log(payload);

    fetch(URL, payload)
        .then((response) => {
            if (!response.ok) throw new Error(response.status);
        })
        .then(() => {
            fetchFavorites(setFavoritesList);
        })
        .catch((error) => {
            console.log(error);
        });
}

export { fetchFavorites, postFavorite };