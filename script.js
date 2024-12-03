document.getElementById('search-button').addEventListener('click', async () => {
    const input = document.getElementById('search-input').value.trim().toLowerCase();
    const pokemonId = document.getElementById('pokemon-id');
    const pokemonName = document.getElementById('pokemon-name');
    const pokemonImgContainer = document.querySelector('.pokemon-img');
    const pokemonHeight = document.getElementById('height');
    const pokemonWeight = document.getElementById('weight');
    const pokemonTypes = document.getElementById('types');
  
    // Estatísticas
    const hpStat = document.getElementById('hp');
    const attackStat = document.getElementById('attack');
    const defenseStat = document.getElementById('defense');
    const specialAttackStat = document.getElementById('special-attack');
    const specialDefenseStat = document.getElementById('special-defense');
    const speedStat = document.getElementById('speed');
  
    const endpoint = 'https://pokeapi-proxy.freecodecamp.rocks/api/pokemon';
  
    // Limpa a área de exibição
    pokemonId.textContent = '#-';
    pokemonName.textContent = 'Name';
    pokemonImgContainer.innerHTML = '';
    pokemonHeight.textContent = 'Height:';
    pokemonWeight.textContent = 'Weight:';
    pokemonTypes.textContent = 'Type:';
    hpStat.textContent = '0';
    attackStat.textContent = '0';
    defenseStat.textContent = '0';
    specialAttackStat.textContent = '0';
    specialDefenseStat.textContent = '0';
    speedStat.textContent = '0';
  
    if (!input) {
      alert('Please enter a Pokémon name or ID!');
      return;
    }
  
    try {
      // Faz a requisição ao endpoint
      const response = await fetch(`${endpoint}/${input}`);
      if (!response.ok) {
        throw new Error('Pokemon not found!');
      }
  
      const data = await response.json();
  
      // Atualiza os elementos com os dados do Pokémon
      pokemonId.textContent = `#${data.id}`;
      pokemonName.textContent = data.name.toUpperCase();
      pokemonImgContainer.innerHTML = `<img src="${data.sprites.front_default}" alt="${data.name}" />`;
      pokemonHeight.textContent = `Height: ${data.height}`;
      pokemonWeight.textContent = `Weight: ${data.weight}`;
      pokemonTypes.textContent = `Type: ${data.types.map(t => t.type.name).join(', ')}`;
  
      hpStat.textContent = data.stats.find(stat => stat.stat.name === 'hp').base_stat;
      attackStat.textContent = data.stats.find(stat => stat.stat.name === 'attack').base_stat;
      defenseStat.textContent = data.stats.find(stat => stat.stat.name === 'defense').base_stat;
      specialAttackStat.textContent = data.stats.find(stat => stat.stat.name === 'special-attack').base_stat;
      specialDefenseStat.textContent = data.stats.find(stat => stat.stat.name === 'special-defense').base_stat;
      speedStat.textContent = data.stats.find(stat => stat.stat.name === 'speed').base_stat;
      const spriteImg = document.createElement('img');
      spriteImg.id = 'sprite';
      spriteImg.src = data.sprites.front_default;
      spriteImg.alt = `${data.name} sprite`;
  
      pokemonImgContainer.appendChild(spriteImg);
      const typeElement = document.createElement('p');
       data.types.forEach(typeInfo => {
        const typeElement = document.createElement('p');
        const typeName = typeInfo.type.name.toUpperCase(); // Capitalize the type name
        typeElement.textContent = typeName;
        pokemonTypes.appendChild(typeElement);
      });
    } catch (error) {
      alert('Pokemon not found!');
    }
  });