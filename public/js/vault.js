const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const title = formData.get('title');
    const type = formData.get('type');
    const containerId = formData.get('containerId');

    let data;
    let metadata = {};

    // Handle fields based on selected type
    if (type === 'password') {
        data = formData.get('data');
        metadata = {
            website: formData.get('metadata[website]') || '',
            username: formData.get('metadata[username]') || ''
        };
    } else if (type === 'note') {
        data = formData.get('data');
    } else if (type === 'file') {
        data = formData.get('data'); // This will be a File object
        metadata = {
            filename: formData.get('metadata[filename]') || '',
            filesize: formData.get('metadata[filesize]') || ''
        };
    }

    try {
        // For file uploads, you might need to handle differently
        const payload = {
            containerId,
            title, 
            type, 
            data: type === 'file' ? await convertFileToBase64(data) : data,
            metadata
        };

        const response = await fetch('http://localhost:3000/vault/createVault', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        const responseData = await response.json();

        if (response.ok) {
            alert('Vault item created successfully!');
            document.getElementById('overlay').style.display = 'none';
            form.reset(); // Reset the form
        } else {
            alert(`Error: ${responseData.message || 'Failed to create vault item'}`);
        }
    } catch (error) {
        console.error('Submission error:', error);
        alert(`An error occurred: ${error.message}`);
    }
});

// Helper function to convert file to base64 for file uploads
async function convertFileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}