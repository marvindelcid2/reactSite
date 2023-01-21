//Purpose is to retrieve all albums from an Imgur account
export async function GetAllAlbums(clientID, userName) {
    const responseData = await fetch(`https://api.imgur.com/3/account/${userName}/albums`,{
        method: 'GET',
        headers: new Headers({
            'Authorization': `Client-ID ${clientID}`
        })
    }).then(data => data.json())
    return responseData;
}

//***In Progress - Purpose is to delete an album using its the album ID
export async function DeleteAlbum(albumID, accessToken, userName) {
    const responseData = await fetch(`https://api.imgur.com/3/account/${userName}/album/${albumID}`,{
        method: 'DEL',
        headers: new Headers({
            'Authorization': `Bearer ${accessToken}`,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'X-Requested-With',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin'
        })
    }).then(data => data.json())
    return responseData;
}