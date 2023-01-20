
export async function GetAllAlbums(clientID, userName) {
    const responseData = await fetch(`https://api.imgur.com/3/account/${userName}/albums`,{
        method: 'GET',
        headers: new Headers({
            'Authorization': `Client-ID ${clientID}`
        })
    }).then(data => data.json())
    return responseData;
}

export function DeleteAlbum() {

}