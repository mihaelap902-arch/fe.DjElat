// Datele meniului structurate
const menuData = {
    'inghetate': [
        { name: "Choco Remix", aroma: "ciocolată cu bucăți crocante de cookie", description: "Ciocolată fină cu surprize crocante – un hit la orice eveniment", image: "https://www.culinar.ro/img.php?u=https%3A%2F%2Fwww.culinar.ro%2Fuploads%2Fmodules%2Fnews%2F0%2F2015%2F9%2F23%2F25706%2Ffdb_1444081104_lead_800x600_25709.jpg" },
        { name: "Fruity DJ", aroma: "fructe de pădure și mango", description: "Prospețime și energie de la fiecare fruct exotic", image: "https://www.gustos.ro/img.php?u=https%3A%2F%2Fwww.gustos.ro%2Fuploads%2Fmodules%2Fnews%2F0%2F2019%2F7%2F29%2F56779%2Fdscf6356.jpg" },
        { name: "Neon Sorbet Party", aroma: "zmeură + lămâie + kiwi", description: "Sorbet colorat care luminează orice petrecere", image: "https://savoriurbane.com/wp-content/uploads/2014/07/Inghetata-de-vanilie-cu-zmeura-si-lime-8.jpg" },
        { name: "Vinyl Vanilla", aroma: "vanilie cu topping de caramel crocant", description: "Clasic reinventat cu un strop de crocant", image: "https://www.laurasava.ro/wp-content/uploads/2011/06/Inghetata-de-vanilie-1.jpg" },
        { name: "Tropical Soundwave", aroma: "ananas + cocos + mango", description: "Gust exotic și răcoritor, ca o vacanță în MALDIVE.", image: "https://retetefeldefel.ro/wp-content/uploads/2024/08/inghetata-de-ananas-cu-lime-in-cupa-de-ananas-600x400.jpg" },
        { name: "Choco Funk", aroma: "ciocolată neagră + caramel sărat + nuci pecan", description: "Gust sofisticat și funky pentru iubitorii de ciocolată", image: "https://madelicii.ro/wp-content/uploads/2024/07/Inghetata-cu-lapte-condensat-banane-ciocolata-si-nuci-madelicii-2.jpg" },
        { name: "Minty Melody", aroma: "mentă + ciocolată cu fulgi crocanți", description: "Răcoritor și revigorant, ideal pentru zilele calde.", image: "https://dietamediteraneana.wordpress.com/wp-content/uploads/2013/05/chip-and-mint-ice-cream.jpg" },
        { name: "Caramel Bass", aroma: "caramel + biscuiți + sos de ciocolată", description: "Gust dulce și crocant cu surprize în fiecare strat", image: "https://savoriurbane.com/wp-content/uploads/2020/06/reteta-inghetata-de-casa-cu-caramele-biscuiti-crocanti-savori-urbane.jpg" },
        { name: "Berry Bomb", aroma: "fructe de pădure + iaurt cremos", description: "Mix delicios de fructe și iaurt, sănătos și gustos", image: "https://i.pinimg.com/736x/51/2b/42/512b42538ba25eca87a6e400e815a842.jpg" },
        { name: "Brownie Love", aroma: "vanilie + fudge + bucăți de brownie", description: "Explozie de cremă și brownie pentru iubitorii de dulce intens.", image: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/2F748D3C-BE0C-4C50-9633-EDA14CD51D82/Derivates/AAA49173-35C3-4F7E-AD43-97C06032B224.jpg" },
        { name: "Electric Mango Pop", aroma: "mango + fructul pasiunii + sorbet", description: "Sorbet exotic și energizant, perfect pentru evenimente active.", image: "https://gusturoi.ro/wp-content/uploads/2025/05/Inghetata-de-casa-cu-piersici-desert-racoritor-si-natural-pentru-vara-www-gusturoi-ro-768x408.png" },
        { name: "Coconut Vinyl", aroma: "cocos + ciocolată albă + fulgi crocanți", description: "Tropical și crocant – o experiență de neuitat.", image: "https://gomagcdn.ro/domains2/cingrup.ro/files/product/large/crema-tartinabila-joycream-donatello-irca-486663.jpg" },
    ],
    'candy-bar': [
        { name: "Macarons - Ciocolată cu lapte", description: "", image: "https://icooking.ro/wp-content/uploads/2020/02/macarons-cafea.jpg" },
        { name: "Macarons - Vanilie", description: "", image: "https://www.magnolia.md/sites/default/files/catalog-26425.jpg" },
        { name: "Macarons - Portocală", description: "", image: "https://www.magnolia.md/sites/default/files/catalog-26432.jpg" },
        { name: "Macarons - Coacăză neagră", description: "", image: "https://granier.md/wp-content/uploads/2022/04/macarons-coacaza-1.jpg" },
        { name: "Macarons - Cocos", description: "", image: "https://i.ytimg.com/vi/W14124i-H6k/maxresdefault.jpg" },
        { name: "Macarons - Lămâie", description: "", image: "https://www.magnolia.md/sites/default/files/styles/regular_products_470x316/public/catalog-26435_0.jpg?itok=_6wAk25h" },
        { name: "Macarons - Fistic", description: "", image: "https://www.magnolia.md/sites/default/files/catalog-26421.jpg" },
        { name: "Macarons - Trandafir", description: "", image: "https://www.magnolia.md/sites/default/files/catalog-26433.jpg" },
        { name: "Cake Pops - Pink", description: "", image: "https://www.southernkissed.com/wp-content/uploads/2024/08/Cake-pop-display.jpg" },
        { name: "Cake Pops - Gold", description: "", image: "https://www.cofetariaarmand.ro/foto_big/2803_1.jpg" },
        { name: "Cake Pops - Black", description: "", image: "https://cofetariavanilla.ro/wp-content/uploads/2024/11/Cake-Pops.jpg" },
        { name: "Păhăruț - Red Velvet", description: "", image: "https://themaverickobserver.com/wp-content/uploads/2022/07/Photo-Red-Velvet-Cake-In-A-Cup-Ashlee-Whitlock.jpg" },
        { name: "Păhăruț - Caramela", description: "", image: "https://images.sumup.com/img_0GSZVA6ZNQ9KWVHXD7PDTMDDKA/image.png" },
        { name: "Păhăruț - Chișinău de seară", description: "", image: "https://www.magnolia.md/sites/default/files/styles/regular_products_300x365/public/img_2707.jpeg?itok=OFgexqdV" },
        { name: "Păhăruț - Tiramisu", description: "", image: "https://www.sugarsaltmagic.com/wp-content/uploads/2023/03/Tiramisu-Cups-4FEAT.jpg" },
        { name: "Cupcake - Banană", description: "", image: "https://recipesblob.oetker.ca/assets/bc420b3ec79840ea9926eb74faade868/1272x764/banana-cupcakes-11.webp" },
        { name: "Cupcake - Cocos", description: "", image: "https://pofta-buna.com/wp-content/uploads/2019/09/cupcakes-cu-ciocolata-alba-si-nuca-de-cocos-4-500x403.jpg" },
        { name: "Cupcake - Vanilie", description: "", image: "https://bakesbybrownsugar.com/wp-content/uploads/2022/12/Vanilla-Cupcakes-12.jpg" },
        { name: "Cupcake - Vișină", description: "", image: "https://msk.tortomaster.ru/upload/resize_cache/webp/iblock/eb8/eb893c1db517f52a82f8a1cacb595c9a.webp" },
        { name: "Cupcake - Ciocolată", description: "", image: "https://assets-eu-01.kc-usercontent.com/7d86daa4-c668-01be-7af8-44c5dd436d14/2ebc1e34-9db0-4d4a-963f-092d7c8c8f49/Chocolate%20cupcake%20-%20mary%20berry.jpg" },
        { name: "Prăjitură - Snickers", description: "", image: "https://www.teoskitchen.ro/wp-content/uploads/2014/10/prajitura-snickers.jpg" },
        { name: "Prăjitură - Plombir", description: "", image: "https://dulcinella.md/sites/default/files/oz/torturi/basic/img_1720_1.jpg" },
        { name: "Prăjitură - Mini Prințul Negru", description: "", image: "https://dulcinella.md/sites/default/files/oz/torturi/basic/img_9427_1.jpg" },
        { name: "Prăjitură - Red Velvet", description: "", image: "https://i.ytimg.com/vi/xdpDL4lvsNE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDsKNKyKCgCfApgAxD87ON0sQlS0g" },
        { name: "Prăjitură - Smântânel", description: "", image: "https://dulcinella.md/sites/default/files/oz/prajituri/basic/prajitura_smantanel_new_1.png" },
        { name: "Prăjitură - Tiramisu", description: "", image: "https://dulcinella.md/sites/default/files/os/candy/basic/fourchette_tiramisu.jpg" },
        { name: "Prăjitură - Chișinău de seară", description: "", image: "https://dulcinella.md/sites/default/files/oz/prajituri/basic/img_3317_1.jpg" },
        { name: "Prăjitură - Cheesecake", description: "", image: "https://savoriurbane.com/wp-content/uploads/2017/07/Cheesecake-reteta-clasica-New-York-Style-pas-cu-pas-Savori-Urbane.jpg" },
    ],
    'coctails': [
        { name: "Mojito", description: "Clasic și revigorant.", image: "https://www.saveur.com/uploads/2007/02/SAVEUR_Mojito_1149-Edit-scaled.jpg?format=auto&optimize=high&width=1440" },
        { name: "Limonadă - Aloe Vera cu Măr", description: "Limonadă fresh, aromată și sănătoasă.", image: "https://sweetland.md/wp-content/uploads/2025/07/Limonada_mar_aloe_lime_in_chisinau_2.jpg" },
        { name: "Limonadă - Classic", description: "Lămâie și mentă.", image: "https://sarabistro.ro/wp-content/uploads/2022/03/mar-verde.jpg" },
        { name: "Limonadă - Fructul Pasiunii", description: "Dulce-acrișor cu o notă tropicală.", image: "https://valentinashop.ro/wp-content/uploads/2025/01/Produs-V-075-54-limonada-fructul-pasiunii-scaled.jpg" },
        { name: "Limonadă - Zmeură cu Lychee", description: "Combinație exotică de fructe.", image: "https://themojito.md/wp-content/uploads/2025/08/Limonada-Dragon-Fruit-si-Lychee.jpg" },
        { name: "Limonadă - Ananas", description: "Tropical și răcoritor.", image: "https://sarabistro.ro/wp-content/uploads/2022/03/2.jpg" },
        { name: "Milkshake - Snickers", description: "Textură cremoasă cu gustul prăjiturii Snickers.", image: "https://yummynotes.net/wp-content/uploads/2022/02/Snickers-Milkshake-Recipe-1.jpg" },
        { name: "Milkshake - Strawberry", description: "Căpșuni proaspete și frișcă.", image: "https://www.cookingclassy.com/wp-content/uploads/2024/05/strawberry-milkshake-4.jpg" },
        { name: "Milkshake - Bounty și Raffaello", description: "O combinație de cocos și ciocolată albă.", image: "https://image.over-blog.com/OyIsf8A0QOCm5g5nqkBSpk413u8=/filters:no_upscale()/image%2F1371263%2F20230618%2Fob_435a09_dsc-0999.JPG" },
        { name: "Milkshake - Banană", description: "Un clasic energizant.", image: "https://ichef.bbc.co.uk/ace/standard/1600/food/recipes/banana_milkshake_73300_16x9.jpg.webp" },
        { name: "Milkshake - Classic", description: "Vanilie pură, simplu și delicios.", image: "https://images.ctfassets.net/9hu0xqamys79/3qDJA2GyKaPmtX8Gb1g747/0e7517e88b6722e7d9b5e0b543e734e4/hXUOcjTkRLafLAJqGRHm_P150683_19z_ClassicMilkshake_square.jpg" },
        { name: "Fresh - Portocală", description: "Sursă de Vitamina C.", image: "https://laplacinte.md/public/product_images/47/1347/bb525e869c2216d54091267545799c73.webp" },
        { name: "Fresh - Grapefruit", description: "Amărui și revigorant.", image: "https://laplacinte.md/public/product_images/47/1647/5981923181b2322ac72512532c86118a.webp" },
        { name: "Fresh - Lămâie", description: "Doza de energie acidulată.", image: "https://backend.drmax.ro/media/wysiwyg/Blog/46dbccca85b26_Beneficiile_apei_cu_lamaie_asupra_organismului.jpg" },
        { name: "Fresh - Ananas", description: "Tropical și dulce-acrișor.", image: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/FF540907-482E-408B-B3D7-E80B464CC4D3/Derivates/9C64D58B-7EB1-4E67-BC80-829B76557D6C.jpg" },
        { name: "Fresh - Mandarine", description: "Dulce și aromat.", image: "https://everydaylatina.com/wp-content/uploads/2025/07/Mandarin-Agua-Fresca-with-Mint-top-image-1200px.jpg" },
        { name: "Tropical Sunrise", description: "Smoothie energizant cu fructe tropicale.", image: "https://www.foodnetwork.com/content/dam/images/food/fullset/2024/03/07/fn_tropical_sunrise_smoothie_s4x3.jpg" },
        { name: "Fruit Punch", description: "Un mix colorat de sucuri de fructe.", image: "https://www.sugarandsoul.co/wp-content/uploads/2023/06/homemade-fruit-punch-10.jpg" },
        { name: "Bubble Tea - Brown Sugar", description: "Perle de tapioca în sirop de zahăr brun.", image: "https://simplyhomecooked.com/wp-content/uploads/2023/04/Brown-sugar-boba-6.jpg" },
        { name: "Bubble Tea - Căpșună", description: "Aromă dulce de căpșuni cu lapte.", image: "https://takestwoeggs.com/wp-content/uploads/2022/05/Strawberry-Milk-Tea-Takestwoeggs-Final-PHotography-sq.jpg" },
        { name: "Bubble Tea - Matcha", description: "Ceai verde matcha cu lapte și perle.", image: "https://greenheartlove.com/wp-content/uploads/2023/05/matcha-boba-tea-5.jpg" },
        { name: "Bubble Tea - Taro", description: "Gust dulce și ușor de nucă, violet intens.", image: "https://mixop.net/wp-content/uploads/136A0988-735x1103.jpg" },
        { name: "Bubble Tea - Thai", description: "Ceai thailandez cu lapte condensat.", image: "https://teakandthyme.com/wp-content/uploads/2023/06/thai-milk-tea-boba-DSC_3229-1x1-1200.jpg" },
    ],
};

// Funcție pentru a genera HTML-ul unui singur articol de meniu
const createMenuItem = (item) => {
    const aroma = item.aroma ? `<p><span class="aroma">Aromă:</span> ${item.aroma}</p>` : '';
    const description = item.description ? `<p>${item.description}</p>` : '';

    return `
        <div class="menu-item">
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            ${aroma}
            ${description}
            <i class="fas fa-heart like-btn" onclick="toggleLike(this)"></i>
        </div>
    `;
};

// Funcție pentru a popula compartimentele cu date
const populateMenu = () => {
    for (const category in menuData) {
        const gridContainer = document.querySelector(`#${category} .items-grid`);
        if (gridContainer) {
            const itemsHTML = menuData[category].map(createMenuItem).join('');
            gridContainer.innerHTML = itemsHTML;
        }
    }
};

// Funcția pentru inima interactivă
const toggleLike = (heartElement) => {
    heartElement.classList.toggle('liked');
};

// Functie pentru generarea confetti (partea dinamică)
const createConfetti = () => {
    const container = document.querySelector('.confetti-container');
    const colors = ['#ff00ff', '#00ffcc', '#ffcc00', '#fff'];
    const shapes = ['square', 'rhombus', 'star', 'circle'];

    for (let i = 0; i < 50; i++) { // Generează 50 de bucăți de confetti
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');

        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        if (shape === 'star') {
            confetti.classList.add('star');
            confetti.style.borderBottomColor = colors[Math.floor(Math.random() * colors.length)];
        } else {
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.width = `${Math.random() * 8 + 4}px`; // 4px - 12px
            confetti.style.height = `${Math.random() * 8 + 4}px`;
            if (shape === 'circle') confetti.style.borderRadius = '50%';
        }
        
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 3 + 5}s`; // 5s - 8s
        confetti.style.animationDelay = `-${Math.random() * 5}s`; // Start decalaj

        container.appendChild(confetti);
    }
};

// Inițializare
document.addEventListener('DOMContentLoaded', () => {
    populateMenu();
    createConfetti();
});

document.addEventListener('DOMContentLoaded', function() {
    const snowflakesContainer = document.querySelector('.snowflakes');
    const numberOfSnowflakes = 100; // Ajustează acest număr pentru mai multi/putini fulgi

    for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');

        // Poziție orizontală aleatorie (de la 0% la 100% din lățimea viewport-ului)
        snowflake.style.left = Math.random() * 100 + 'vw';
        
        // Durată de cădere aleatorie (pentru viteze diferite)
        snowflake.style.animationDuration = Math.random() * 10 + 5 + 's'; // între 5s și 15s
        
        // Întârziere aleatorie (pentru a porni la momente diferite)
        snowflake.style.animationDelay = Math.random() * -15 + 's'; 
        
        // Mărime aleatorie (între 2px și 6px)
        const size = Math.random() * 4 + 2; 
        snowflake.style.width = size + 'px';
        snowflake.style.height = size + 'px';

        // Opacitate și blur aleatoriu
        snowflake.style.opacity = Math.random() * 0.5 + 0.3; 
        snowflake.style.filter = `blur(${Math.random() * 1.5 + 0.5}px)`; 

        snowflakesContainer.appendChild(snowflake);
    }
});