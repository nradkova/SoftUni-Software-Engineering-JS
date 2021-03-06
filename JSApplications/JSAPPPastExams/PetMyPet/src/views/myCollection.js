import { html } from '../../node_modules/lit-html/lit-html.js'
import { getMy } from '../api/data.js';

const myTemplate = (pets) => html`  
<section id="my-pets-page" class="my-pets">
    <h1>My Pets</h1>
    <ul class="my-pets-list">
        ${pets.length> 0 
            ?html`${pets.map(petTemplate)}`
            :html`<p class="no-pets">No pets in database!</p>`}
    </ul>
</section>>`;

const petTemplate = (pet) => html` 
<li class="otherPet">
    <h3>Name: ${pet.name}</h3>
    <p>Type: ${pet.type}</p>
    <p class="img"><img src=${pet.imageUrl}></p>
    <a class="button" href="/details/${pet._id}">Details</a>
</li>`;

export default async function myCollectionView(context) {
    const pets = await getMy();
    context.render(myTemplate(pets));
}