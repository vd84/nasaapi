import { useEffect, useState, React } from 'react';

const AsteroidPictureOfTheDay = () => {

    const [URL, setURL] = useState('https://api.nasa.gov/planetary/apod?api_key=fuUNRF3gKaG7lYaoxejlxuKQ0PKbHvo9RdYInIfp')
    const [picUrls, setPicUrls] = useState([])

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(data => initPicArray(data.hdurl))
    }, [URL])

    useEffect(() => {
        console.log(URL)
    }, [URL])

    const initPicArray = (url) => {
        setPicUrls([url, 'https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&api_key=fuUNRF3gKaG7lYaoxejlxuKQ0PKbHvo9RdYInIfp'])
    }

    const switchPic = () => {
        let picUrlsTemp = [...picUrls]
        const picToShow = picUrlsTemp.splice(0, 1)

        picUrlsTemp.push(picToShow)
        setPicUrls(picUrlsTemp)
    }

    return (
        <>
            <h1>Hej Asteroid</h1>
            <img src={picUrls[0]} alt="Fin bild på en asteroid"></img>
            <button onClick={switchPic}>Klick på mig för att ändra bilden</button>
        </>
    )
}

export default AsteroidPictureOfTheDay