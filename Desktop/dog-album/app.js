const DOG_URL = "https://dog.ceo/api/breeds/image/random";
const dogs = document.querySelector('.dogs-images');


const addNewdog = () => {
    fetch(DOG_URL).then((res) => {
        processingResponse = res.json();
        return processingResponse;
    })
    .then(processedResponse => {
        const img = document.createElement('img');
        img.src = processedResponse.message;
        img.alt = 'Dog images';
        dogs.appendChild(img);
    })
}

document.querySelector('.add-doggo').addEventListener('click', addNewdog);