const vaultContainer = document.querySelector('.vaults');

// Function to get all the vault containers from the database
const getVaults = async () => {
    try {
        const res = await fetch('/api/container/getVaultContainers');
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await res.json();

        // If no vaults are present, show the empty vault message
        if (data.Vaults.length === 0) {
            vaultContainer.innerHTML = `
                <div class="empty-vault">
                    <h1 class="empty-message"><strong>No vaults created yet!</strong></h1>
                    <p class="sub-message">Click <strong>Create Vault</strong> to get started and organize your data securely.</p>
                    <button class="create-vault-btn"><strong>Create Vault</strong></button>
                </div>
            `;

            const overlay = document.querySelector('.overlay');
            const createbtn = document.querySelector('.create-vault-btn');

            createbtn.addEventListener('click', async () => {
                overlay.style.display = 'flex';
            });
        } else {
            let vaultid = ''; // Variable to hold the selected vault ID

            // Populate the vault container with data
            data.Vaults.forEach((vault) => {
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

                // Add event listener for the Edit button
                const editVault = vaultContainer.querySelector(
                    `.vault[value="${vault._id}"] .vault-container-edit`
                );
                editVault.addEventListener('click', async () => {
                    vaultid = vault._id; // Set the ID of the vault being edited
                    const overlay = document.querySelector('.updatedata');
                    overlay.style.display = 'flex';

                    // Close overlay when the close button is clicked
                    const close = overlay.querySelector('.close');
                    close.addEventListener('click', () => {
                        overlay.style.display = 'none';
                    });
                });
            });

            const overlay = document.querySelector('.updatedata');
            const updateform = document.querySelector('.updatedata form');

            // Handle the form submission for updating a vault
            updateform.addEventListener('submit', async (event) => {
                event.preventDefault();
                try {
                    const title = updateform.title.value;
                    const description = updateform.description.value;

                    if (!vaultid) {
                        throw new Error('No vault ID found for the update operation.');
                    }

                    const response = await fetch(
                        `/api/container/updateVaultContainer/${vaultid}`, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                title,
                                description
                            }),
                        }
                    );

                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }

                    const data = await response.json();
                    console.log(data.message);

                    // Reset form and hide overlay
                    updateform.reset();
                    overlay.style.display = 'none';

                    // Refresh the vaults to show the updated data
                    vaultContainer.innerHTML = ''; // Clear the vaults container
                    await getVaults(); // Reload vaults
                } catch (error) {
                    console.error('Update vault error:', error);
                }
            });
        }

        // Add event listener for the Delete button
        document.querySelectorAll('.vault-container-delete').forEach((button) => {
            button.addEventListener('click', () => {
                const parent = button.parentElement;
                const parentValue = parent.getAttribute('value');
                deleteVault(parentValue);
                parent.remove();
            });
        });
    } catch (error) {
        console.error('Get vaults error:', error);
        vaultContainer.innerHTML =
            '<h2 style="color: red;">Error loading vaults</h2>';
    }
};

// Function to delete a vault
const deleteVault = async (id) => {
    try {
        console.log(id);

        const res = await fetch(`/api/container/deleteVaultContainer/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
            },
        });
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await res.json();
        console.log(data.message);
    } catch (error) {
        console.log(error);
    }
};

// Initialize the function to fetch and display vaults
getVaults();
