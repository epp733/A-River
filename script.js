document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.getElementById('back-button');
    const content = document.getElementById('content');

    backButton.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    // Function to load content for each page
    function loadPageContent() {
        const currentPage = window.location.pathname.split('/').pop();
        let items;
        switch (currentPage) {
            case 'poetry.html':
                items = poems;
                break;
            case 'fiction.html':
                items = stories;
                break;
            case 'non-fiction.html':
                items = essays;
                break;
            default:
                return; // Exit if on index page
        }

        let html = '<div class="list-group">';
        items.forEach((item, index) => {
            html += `<a href="#" class="list-group-item item-link" data-index="${index}">${item.title}</a>`;
        });
        html += '</div>';
        content.innerHTML = html;

        // Add listeners to item links
        document.querySelectorAll('.item-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const index = e.target.getAttribute('data-index');
                showItem(items[index]);
            });
        });
    }

    function showItem(item) {
        content.innerHTML = `
            <h2>${item.title}</h2>
            <div class="content-text">${item.content}</div>
        `;
    }

    // Load content for the current page
    loadPageContent();
});

// Content arrays
const poems = [
    {
        title: "The Mississippi and the City",
        content: `The swollen Mississippi
submerges cobblestone streets
in muddy waters lapping
at weathered red brick of abandoned factories
where piano keys once
danced
in syncopated joy.

Silent and weathered, a constant presence
observing the river's ceaseless flow.

Ancient earthen mounds,
erected by forgotten hands,
stand sentinel on the river's banks,
their walls once tumbled down
like ancient city walls at trumpet's blast,
now silent witnesses
to the river's eternal ebb
and flow.

Contemplating the mounds, ancient and wise,
their secrets hidden from the world.

Blues notes blow
like sacred trumpets,
circling the city
for seven days and nights,
until the walls come tumbling,
tumbling down,
spilling from hole-in-the-wall clubs down Washington Ave's
garish
glow
drawing lonely figures
to sway.

Listening to the music's soulful cry,
a sound that echoes through the streets.

A gleaming stainless steel curve
rises in a graceful arc,
catching the sun's rays,
a modern monument
to the city's spirit
above the churning
brown
current.

Gazing at the arch, a symbol of dreams,
its presence rising above the river.

An electric twang
reverberates through the city streets,
a pulsing backbeat
propelling bodies to move
with youthful abandon,
urgent,
rousing,
galvanizing
this place
of deep roots
and the mighty river's
timeless
power.

Feeling the city's heartbeat, the rhythm of life,
a pulse that never stops.`
    },
    {
        title: "Walls Come Tumbling Down",
        content: `Calloused hands tremble, sepia memories flutter,
Mounds and constellations witness the walls come tumbling down.
Dust devils dance to blues notes, sacred trumpets mutter,
As death creeps in, faith unravels, and the farmhouse crumbles down.

Storms brew, locusts hum "Ashes to ashes" in the wheat,
Concrete jungles rise, steel monuments catch the sun's rays.
She drowns in neon, feeling the city's relentless heartbeat,
He ascends, grasping for redemption in smoke-filled haze.

Prodigal daughter, lost son, ghost of a pink dress,
Kneel at the altar of a broken home, a shattered throne.
The land gasps its last as the walls come tumbling down,
Memories scatter like ashes, silence and tears alone.`
    },
    {
        title: "Broken Walls",
        content: `Calloused hands tremble,
sepia memories flutter,
Mounds and constellations witness
the walls come tumbling down.

Dust devils dance
to blues notes,
sacred trumpets mutter,
As death creeps in,
faith unravels,
and the farmhouse crumbles down.

Storms brew,
locusts hum
"Ashes to ashes" in the wheat,
Concrete jungles rise,
steel monuments catch the sun's rays.

She drowns in neon,
feeling the city's relentless heartbeat,
He ascends, grasping for redemption
in smoke-filled haze.

Prodigal daughter,
lost son,
ghost of a pink dress,
Kneel at the altar
of a broken home,
a shattered throne.

The land gasps its last
as the walls come tumbling down,
Memories scatter like ashes,
silence and tears alone.`
    }
];

const stories = [
    {
        title: "The River's Whisper",
        content: `The Mississippi's murky waters lapped at Eliza's feet as she stood on the weathered cobblestones. The abandoned factory loomed behind her, its red bricks telling tales of a bygone era. As dusk settled, the river seemed to whisper secrets of the ancient mounds that once stood proud on its banks.

A mournful trumpet wailed in the distance, its blues notes carried on the breeze. Eliza closed her eyes, swaying gently to the rhythm that seemed to pulse through the very ground beneath her. When she opened them again, the city's neon lights flickered to life, casting an eerie glow on the river's surface.

As she turned to leave, her gaze fell upon the gleaming arch that stretched across the sky. A symbol of progress, it stood in stark contrast to the crumbling buildings around it. Eliza smiled, feeling the city's heartbeat sync with her own. In that moment, she understood that like the river, this place would continue to flow, carrying the weight of its history while forging ahead into an uncertain future.`
    },
    {
        title: "Neon Ghosts",
        content: `Jake stumbled down Washington Avenue, the garish neon signs blurring into streaks of color in his peripheral vision. The ghost of his past seemed to dance in the reflections of puddles left by the recent rain, reminding him of the farmhouse he'd left behind.

As he passed a hole-in-the-wall club, the sound of an electric guitar twanged through the air, momentarily drowning out the constant hum of the city. Jake paused, drawn by the familiar sound that echoed the music of his youth.

Inside, bodies moved with abandon, lost in the pulsing rhythm. For a moment, Jake felt the weight of his calloused hands, remembering the feel of soil and honest labor. But as the music swelled, he let himself be swept away by the city's relentless beat, his past becoming just another ghost in the neon-lit night.`
    },
    {
        title: "Mound of Memories",
        content: `Sarah stood atop the ancient mound, her eyes scanning the horizon where steel and glass towers now pierced the sky. The wind whispered through the tall grass, carrying with it the faint echoes of long-forgotten ceremonies.

In her hand, she clutched a sepia photograph of her great-grandparents standing proudly before their farmhouse. The image seemed to flutter in the breeze, as if trying to escape the march of time.

As the sun began to set, casting long shadows across the land, Sarah noticed a lone figure approaching. It was her brother, returning home after years away. They stood together in silence, watching as the city lights began to twinkle in the distance.

The mound beneath their feet held secrets of the past, while the glowing skyline promised an uncertain future. In that moment, balanced between two worlds, Sarah realized that the walls between past and present, tradition and progress, were tumbling down. All that remained was the enduring spirit of the land and its people, flowing eternally like the great river nearby.`
    }
];

const essays = [
    {
        title: "The Heartbeat of a Changing City",
        content: `The rhythm of a city is a complex symphony, composed of countless individual stories and experiences. As urban landscapes evolve, driven by the relentless march of progress, they retain echoes of their past in unexpected places.

Consider the Mississippi River, a constant presence that has witnessed centuries of change. Its waters reflect both the gleaming steel of modern architecture and the weathered bricks of abandoned factories. This juxtaposition of old and new is the very essence of a city's heartbeat.

The pulse quickens in the neon-lit streets, where the energy of youth collides with the wisdom of age. It slows in quiet corners where ancient earthen mounds stand as silent sentinels, holding secrets of long-forgotten civilizations. This ebb and flow, this constant tension between past and present, tradition and innovation, is what gives a city its unique character.

As we navigate these ever-changing urban environments, we must remember that we are both observers and participants in this ongoing transformation. Our actions today will become the echoes of tomorrow, contributing to the ceaseless rhythm of urban life.`
    },
    {
        title: "Echoes of the Past in Modern Landscapes",
        content: `In the shadow of sleek skyscrapers and amid the buzz of neon lights, the past whispers its stories to those willing to listen. Our modern landscapes are palimpsests, layers of history written and rewritten on the same ground.

The ancient mounds that once dominated the riverbanks now stand dwarfed by steel monuments to human progress. Yet, they persist, a testament to the enduring nature of human endeavor. Similarly, the blues notes that once spilled from modest clubs now compete with the cacophony of traffic and construction, but their soulful cry still touches hearts and moves feet.

As we walk city streets, we tread on cobblestones that have felt the weight of countless generations. The very air we breathe is thick with the dreams and struggles of those who came before us. Our challenge, as inhabitants of these ever-evolving spaces, is to honor these echoes of the past while forging ahead into the future.

By recognizing the threads that connect us to our history, we can create urban environments that are not just functional, but deeply meaningful. In doing so, we ensure that the story of our cities continues to be rich, complex, and profoundly human.`
    },
    {
        title: "The Duality of Progress and Decay",
        content: `In the dance of urban development, progress and decay move in a complex, intertwined choreography. As new structures rise, reaching ever higher into the sky, others crumble, returning to the earth from which they sprang.

This duality is evident in every aspect of city life. Abandoned factories, once symbols of industrial might, now stand as weathered monuments to a bygone era. Their silent halls echo with memories of bustling activity, while nature slowly reclaims what was once hers.

Yet, from this decay springs new life and new purpose. Street artists transform crumbling walls into canvases of vibrant expression. Entrepreneurs breathe new life into old buildings, creating spaces that honor the past while serving the needs of the present.

The river, too, embodies this duality. Its waters simultaneously erode and nourish, destroy and create. It carries away the old, making room for the new, in an endless cycle of renewal.

As we navigate our changing urban landscapes, we must embrace this duality. Progress need not come at the expense of our heritage, and decay can be the fertile ground from which new ideas and innovations sprout. By understanding and respecting this balance, we can create cities that are not just sustainable, but truly alive – pulsing with the energy of both past and future.`
    }
];