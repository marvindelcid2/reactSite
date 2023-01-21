//***In Progress - Purpose is to create a new album with the user inputted album name
export async function CreateAlbum(accessToken, albumName){
    const responseData = await fetch(`https://api.imgur.com/3/album`,{
        method: 'POST',
        body: JSON.stringify({title: `${albumName}`}),
        headers: new Headers({
            'Authorization': `Bearer ${accessToken}`
        })
    }).then(data => data.json()).catch((error) => {
        console.error(error);
    })

    console.log(responseData);
    return responseData;

}

//***In Progress - Purpose is to update an album's name
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