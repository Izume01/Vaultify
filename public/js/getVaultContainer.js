const vaultContainer = document.querySelector('.vaults');

// Function to get all the vault containers from the database
const getVaults = async () => {
    try {
        const res = await fetch('/api/container/getVaultContainers');
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await res.json();
        console.log(data);
        if (data.Vaults.length === 0) {
            vaultContainer.innerHTML = '<h2>No Vaults Found</h2>';
        } else {
            data.Vaults.forEach(vault => {
                const dateObj = new Date(vault.createdAt);
                const date = dateObj.toISOString().split('T')[0]; 
                const time = dateObj.toTimeString().split(' ')[0]; // '19:57:38'

                const html = `
                    <div class="vault">
                        <h3>${vault.title}</h3>
                        <p>${vault.description}</p>
                        <p>Date : ${date}</p>
                        <p>Time: ${time}</p>
                        <button>Open</button>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                `;
                vaultContainer.insertAdjacentHTML('beforeend', html);
            });
        }
    } catch (error) {
        console.error('Get vaults error:', error);
        vaultContainer.innerHTML = '<h2>Error loading vaults</h2>';
    }
}

getVaults();
