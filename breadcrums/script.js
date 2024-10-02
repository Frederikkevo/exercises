// Datastruktur til breadcrumb-navigation
const bc = [
    { name: "Hvidevarer", link: "/hvidevarer" },
    { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
    { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

// Funktion til at generere breadcrumbs
function generateBreadcrumb() {
    const breadcrumbContainer = document.getElementById('breadcrumb');
    breadcrumbContainer.innerHTML = ''; // Ryd tidligere breadcrumbs

    // Gennemgå hvert element i bc-arrayet
    bc.forEach((item, index) => {
        const listItem = document.createElement('li');
        
        // Hvis det er det sidste element, skal der ikke være et link
        if (index === bc.length - 1) {
            listItem.textContent = item.name; // Kun tekst for sidste element
        } else {
            const anchor = document.createElement('a');
            anchor.href = item.link;
            anchor.textContent = item.name;
            listItem.appendChild(anchor); // Tilføj link
        }

        breadcrumbContainer.appendChild(listItem); // Tilføj listeelementet til breadcrumb
    });
}

// Event listener til knappen
document.getElementById('generateBtn').addEventListener('click', generateBreadcrumb);
