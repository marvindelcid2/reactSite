
export async function CreateAlbum(accessToken){
    const responseData = await fetch(`https://api.imgur.com/3/album`,{
        method: 'POST',
        body: JSON.stringify(`title="${albumName}"`),
        headers: new Headers({
            'Authorization': `Bearer ${accessToken}`
        })
    }).then(data => data.json())
    return responseData;

}

export async function UpdateAlbum(albumID, accessToken, albumName){
    const responseData = await fetch(`https://api.imgur.com/3/album/${albumID}`,{
        method: 'PUT',
        body: JSON.stringify(`title="${albumName}"`),
        headers: new Headers({
            'Authorization': `Bearer ${accessToken}`
        })
    }).then(data => data.json())
    return responseData;
}