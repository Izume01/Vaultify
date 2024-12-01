const vaultContainer = document.querySelector('.vaults');

// Function to get all the vault containers from the database
const getVaults = async () => {
    try {
        const res = await fetch('/api/container/getVaultContainers');
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await res.json();
        
        if (data.Vaults.length === 0) {
            vaultContainer.innerHTML = '<h2>No Vaults Found</h2>';
        } else {
            data.Vaults.forEach(vault => {
                const dateObj = new Date(vault.createdAt);
                const date = dateObj.toISOString().split('T')[0]; 
                const time = dateObj.toTimeString().split(' ')[0]; // '19:57:38'

                const html = `
                    <div class="vault" value="${vault._id}">
                        <h3>${vault.title}</h3>
                        <p>${vault.description}</p>
                        <p>Date : ${date}</p>
                        <p>Time: ${time}</p>
                        <button class="vault-container-open">Open</button>
                        <button class="vault-container-edit">Edit</button>
                        <button class="vault-container-delete">Delete</button>
                    </div>
                `;
                vaultContainer.insertAdjacentHTML('beforeend', html);
            });
        }
        document.querySelectorAll('.vault-container-delete').forEach(button => {
            button.addEventListener('click' , () => {
                const parent = button.parentElement;
                const parentValue = parent.getAttribute('value');
                deleteVault(parentValue);
                parent.remove();               
            })
        });
    } catch (error) {
        console.error('Get vaults error:', error);
        vaultContainer.innerHTML = '<h2 style="color: red;">Error loading vaults</h2>';
    }
}


const deleteVault = async(id) => {
    try {
        console.log(id);
        
        const res = fetch(`/api/container/deleteVaultContainer/${id}` , {
            method: 'DELETE', 
            headers: { 
                'Content-type': 'application/json'
            } 
        }) 
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await res.json();
        console.log(data.message);

    } catch (error) {
        console.log(error)
    }
}

getVaults();
