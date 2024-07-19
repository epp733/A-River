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
        title: "The Locket Thief",
        content: `Old man Harlow shuffled down the worn path, his arthritic fingers wrapped around the handle of a rusty wheelbarrow. The autumn wind whispered through the cornfields, carrying whispers of secrets long buried. He paused at the shed, its weathered door groaning as he pushed it open.

Inside, nestled behind jars of preserves and dusty farm tools, sat a lead box. Harlow's gnarled hands trembled as he lifted its heavy lid. The locket inside gleamed, untarnished by time.

Miles away, a young woman named Eliza traced her fingers along the spine of an ancient book. As she opened it, a cloud of dust danced in the library's dim light. The pages were brittle, yellowed with age, but the words still held power.

Eliza read, lost in a world of clock towers and dethroned kings. She didn't notice the weight around her neck growing lighter, the locket she always wore slowly fading away.

Back in his shed, Harlow smiled a toothless grin. Another treasure reclaimed, another piece of the past stolen back from those who didn't understand its true value.

As night fell, Eliza closed the book with a sigh. Her hand instinctively reached for her locket, finding only bare skin. Panic rose in her throat as she retraced her steps through town, searching desperately.

Her journey led her across railroad tracks, past boarded-up windows and vacant lots. The town grew stranger, wilder at its edges. A figure by the creek whistled an eerie tune, and shapes moved in the cornfields that defied description.

Finally, exhausted, Eliza found herself at a ramshackle farmhouse. Old man Harlow stood in the doorway, eyes glinting with otherworldly knowledge.

"You've come for what's yours," he said, not unkindly. "But are you prepared for the price of keeping it?"

Eliza hesitated, her hand outstretched. In that moment, she understood that some treasures, once reclaimed, could never truly be let go again.`
    },
    {
        title: "Everyman",
        content: `Joe Average sighed, adjusting his tie as he stepped out into the chaos. The salad spinner sunset was in full swing, flinging neon mayo across cloud rinds. He dodged a shoelace comet tripping over a moonbeam hurdle, nearly stumbling into a giggling pothole that seemed eager to swallow his unicycle dreams whole.

"Just another Tuesday," Joe muttered, unfazed.

He ducked as an origami thunderstorm creased overhead, folding lightning into paper airplanes that zipped past his ears. Freckle constellations migrated across the marshmallow sky, spelling out cosmic gossip he couldn't quite decipher.

At the bus stop, a snoring book mumbled bedtime stories to insomniac ink puddled beneath a bench. Joe checked his watch - a hiccupping metronome that conducted symphonies of falling cutlery instead of telling time.

The bus arrived, driven by tap-dancing shadows tangoing with moth-eaten spotlights. Joe boarded, finding a seat next to a yawning keyhole exhaling locksmith lullabies.

As they passed jellybean beaches where tourists peeled off velcro sunburns, Joe pondered his existence in this perpetually bewildering world. He chuckled, realizing his life was far from average after all.

"Maybe," he mused, "being ordinary in an extraordinary universe is its own kind of special."

With that thought, Joe relaxed into his seat, ready for whatever absurdity awaited him at the office.`
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