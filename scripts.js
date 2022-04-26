
document.querySelector('.search').addEventListener('submit', async event => {
    const input = document.querySelector('.input_search').value.toLowerCase();

    if (input !== '') {        
        event.preventDefault()
        await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.name)
                showPokemons({
                    name: data.name.toUpperCase(),
                    sprite: data.sprites.front_default,
                    sprite2: data.sprites.front_shiny,
                    stats_attack_name: data.stats[1].stat.name.toUpperCase(),
                    stats_atack_number: data.stats[1].base_stat,
                    stats_defense_name: data.stats[2].stat.name.toUpperCase(),
                    stats_defense_number: data.stats[2].base_stat,
                    stats_speed_name: data.stats[5].stat.name.toUpperCase(),
                    stats_speed_number: data.stats[5].base_stat,
                    stats_type_name: data.types[0].type.name.toUpperCase(),
                })
            })
    } else {
        document.querySelector('.content_pokemon').style.display = 'none'
    }
});


function showPokemons(data) {
    imgHover(data);
    imgHover1(data)
    document.querySelector('.pokemon_name').innerHTML = `${data.name}`
    document.querySelector('.content_pokemon').style.display = 'flex'
    document.querySelector('.img').src = `${data.sprite}`
    document.querySelector('.stats_attack').innerHTML = `${data.stats_attack_name}: ${data.stats_atack_number}`
    document.querySelector('.stats_defense').innerHTML = `${data.stats_defense_name}: ${data.stats_defense_number}`
    document.querySelector('.stats_speed').innerHTML = `${data.stats_speed_name}: ${data.stats_speed_number}`
    document.querySelector('.stats_type').innerHTML = `TYPE: ${data.stats_type_name}`
};


function imgHover(data) {
    const img = document.querySelector('.img')
    img.addEventListener('mouseover', (event => {
        event.preventDefault();
        img.src = `${data.sprite2}`
        
    }))
}

function imgHover1(data) {
    const img = document.querySelector('.img')
    img.addEventListener('mouseout', (event => {
        event.preventDefault();
        img.src = `${data.sprite}`
        
    }))
}
















