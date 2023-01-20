
export function GetAllAlbums(clientID, userName) {

    return fetch(`https://api.imgur.com/3/account/${userName}/albums`,{
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Client-ID a0f7fb78a4fab86'
        })
    })

}

export function DeleteAlbum() {

}