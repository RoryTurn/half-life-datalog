console.log("script is linked");
const creatureFilter = document.querySelector("#creatureFilter");
const searchFilter = document.querySelector("#searchFilter");






 // if (artist === 'tyler'){
//     console.log('the creator');
// } else if(artist === 'snoop god'){
//     console.log('snoop god');
// } else if
// else {
//     console.log('artist is not tyler');
// }


// object arrays

let objectArray = [
    {
        id: 1,
        tags: ['headcrab', 'parasite', 'crab', 'xen'],
        creature: "headcrab",
        name: 'Head Crab',
        Bios: 'Xen Symbiote',
        photo:'./img/hls2.jpg',
        Danger: 1,
        pic: './img/head3.jpg',
        Description: "Headcrabs are omnivorous, parasitic alien organisms. The Standard Headcrab, or simply the Headcrab, is the most common Headcrab subspecies, having teleported to Earth in abundant numbers during the Black Mesa Incident.",
     },
    {
        id: 2,
        tags: ['vortigaunt', 'alien', 'xen'],
        name: 'Vortigaunt',
        creature: "vortigaunt",
        Bios: 'Sentient',
        photo:'./img/xsym.png',
        Danger: 2.5,
        pic: './img/vort1.jpg',
        Description: `The Vortigaunts (taxonomic designation: Xenotherium subservilia,[2] or "Subservient Alien Beast"), formerly known as "Alien Slaves" or "Xen Slaves", and affectionately known as "Vorts" by their allies, are a sapient alien species from Xen. `,
    },
    {
        id: 3,
        tags: ['bullsquid', 'squid', 'xen'],
        name: 'Bullsquid',
        creature: "bullsquid",
        Bios: 'Xen Native',
        photo:'./img/bms.png',
        Danger: 2.5,
        pic: './img/bull2.jpg',
        Description: `Bullsquids (taxonomic designation: Gastropolypus toxophlegmata,[3] or "Phlegm-shooting Many-legged-mouth") are a species of highly aggressive, bipedal creatures that appear throughout the Black Mesa Research Facility during the Resonance Cascade. Bullsquids are able to survive, if not thrive, in environments that are unfriendly or even toxic to humans,`,
  
    },
    {
        id: 4,
        tags: ['cop', 'combine', 'civil protection', 'human'],
        name: 'Civil Protection',
        creature: "civil_protection",
        Bios: 'Combine',    
        photo:'./img/cbs.png',
        Danger: 2,
        pic: './img/comb1.jpg',
        Description: `Civil Protection is the Combine's law enforcement in all urban areas on Earth, including City 17. Its officers are called "Civil Protection." The spelling "Metro Cop" is also used, and "CP" is used by all Citizens and Resistance members when referring to them. The Overwatch Voice uses the term "Protection" and "Protection Teams." The entity uses the term "Metropolice" (the original term), and the subtitles use "MetroPolice."`,
    },
    {
        id: 5,
        tags: ['combine', 'hunter', 'construct', 'machine'],
        name: "Hunter",
        creature: "hunter",
        Bios: 'Combine Bio-Machine',
        photo:'./img/cbs2.png',
        Danger: 4,
        pic: './img/tri1.jpg',
        Description: `The Hunter is a fast and agile synth used by the Combine as a scout and escort. The Hunter's body and legs are partially encased in an iridescent blue-green carapace. The synth is tripedal, much like the Strider; it has three muscular legs attached to the sides & back of its body, ending in a pair of extremely sharp barbs.`,
    },
    {
        id: 6,
        tags: ['ant lion', 'ant', 'xen'],
        name: 'Ant Lion',
        creature: "ant_lion",
        Bios: 'Xen Native',
        photo:'./img/bms.png',
        Danger: 2,
        pic: './img/ant1.jpg',
        Description: `The Antlion is a large, voracious insectoid species of several differing castes, with a hierarchy, appearance, and physiology very similar to that of ants and termites. Its originates on the border world of Xen.`,
    },
    {
        id: 7,
        tags: ['headcrab', 'crab', 'poisoned headcrab', 'poisonous', 'xen'],
        name: 'Poisoned Headcrab',
        creature: "poison_headcrab",
        Bios: 'Xen Symbiote',
        photo:'./img/hls2.jpg',
        Danger: 3,
        pic: './img/head2.jpg',
        Description: "Headcrabs are omnivorous, parasitic alien organisms. The Poison Headcrab delivers its extremely powerful neurotoxin via the four fangs on its chelicerae. The Poison Headcrab can be identified by its dark skin, bristly hair and red-and-white patterned legs. ",
    },
    {
        id: 8,
        tags: ['combine', 'soldier', 'combine soldier', 'trooper', 'human'],
        name: 'Combine Soldier',
        creature: "soldier",
        Bios: 'Combine',    
        photo:'./img/cbs.png',
        Danger: 3,
        pic: './img/comb2.jpg',
        Description: `Overwatch Soldiers (also known as Combine Soldiers by Humans, and "Stabilization Teams" by the Overwatch Voice), are the basic transhuman infantry units of the Combine Overwatch, and the primary military of the Combine on Earth. In contrast to Civil Protection, whose duties are to enforce order within suppressed population centers, Overwatch soldiers are tasked with more hazardous actions requiring skill and tacit.`,
    },
    {
        id: 9,
        tags: ['combine', 'strider', 'construct', 'machine'],
        name: "Strider",
        creature: "strider",
        Bios: 'Combine Bio-Machine',
        photo:'./img/cbs2.png',
        Danger: 4,
        pic: './img/tri2.png',
        Description: `The Strider is a large three-legged arthropod-like Combine Synth that stands approximately 15 meters tall or 50 feet. The Strider's body is covered in a smooth brown carapace or exoskeleton. On the "head" of the Strider is a rapid-firing pulse cannon, with a heavier warp cannon suspended below.`,
    },

    {
        id: 10,
        tags: ['barnacle', 'sucker', 'xen', 'trap'],
        name: 'Barnacle',
        creature: "barnacle",
        Bios: 'Xen Native',
        photo:'./img/bms.png',
        Danger: 1,
        pic: './img/barn1.jpg',
        Description: `The Barnacle (taxonomic designation: Cirripedia donaldsonia,[2] or "Donaldson's Barnacle") is a stationary ceiling-dwelling alien creature, which is most notable for its unique method of catching prey using its sticky "tongue."`,
    },
    {
        id: 11,
        tags: ['headcrab', 'crab', 'zombie', 'headcrab zombie', 'symbiote', 'parasite', 'xen'],
        name: `Headcrab "Zombie"`,
        creature: "zombie",
        Bios: 'Xen Symbiote',
        photo:'./img/hls2.jpg',
        Danger: 2,
        pic: './img/zom1.jpg',
        Description: `Headcrab symbiotes are humans taken over by the headcrab parasite. It is the result of a Headcrab attaching to the head of a suitable host and taking control over its victim's body, this "kills" the host, and renders them a "headcrab zombie," `,
    },
    {
        id: 12,
        tags: ['nihilanth', 'brain', 'mastermind', 'alien', 'boss'],
        name: 'Nihilanth',
        creature: "nihilanth",
        Bios: 'Sentient',
        photo:'./img/xsym.png',
        Danger: 5,
        pic: './img/nin1.jpg',
        Description: "The Nihilanth is a malevolent creature that rules the bizarre alien world of Xen. The Nihilanth is a member of a powerful species that hailed from beyond the Xen dimension, on their own homeworld in their own universe, long before the Black Mesa Incident. The Nihilanth's species appears to be an alien race of powerful beings, almost god-like in nature, as evidenced by the characteristics of Nihilanth himself.",
    },
    {
        id: 13,
        tags: ['alien grunt', 'alien', 'xen', 'warrior', 'soldier'],
        name: 'Alien Grunt',
        creature: "alien",
        Bios: 'Xen Native',
        photo:'./img/bms.png',
        Danger: 3,
        pic: './img/alien1.png',
        Description: `Alien Grunts (taxonomic designation: Xenotherium myrmex,[2] or "Alien Ant Beast") are a species of aliens that form the bulk of the Nihilanth's army. Alien Grunts stand about seven feet tall and are armed with a biological weapon called the Hivehand, which fires creatures called hornets. At melee range, they will also use the weapon in hand-to-hand combat.`,
    },
    {
        id: 14,
        tags: ['combine', 'dropship', 'aircraft', 'machine'],
        name: 'Combine Dropship',
        creature: "dropship",
        Bios: 'Combine Bio-Machine',
        photo:'./img/cbs2.png',
        Danger: 3.5,
        pic: './img/drop1.jpg',
        Description: `The Combine Dropship, often simply referred to as the Dropship, is a support and deployment Synth used by the Combine to quickly send in and deploy units by air to areas they are needed. The front and two rearmost pairs of "legs" on the craft contain engines that give the Dropship lift and movement. The other legs are used for cargo grappling.`,
    },
    {
        id: 15,
        tags: ['shark', 'icythosaur', 'icky', 'xen', 'underwater'],
        name: 'Icythosaur',
        creature: "shark",
        Bios: 'Xen Native',
        photo:'./img/bms.png',
        Danger: 3,
        pic: './img/icthy1.jpg',
        Description: "The Ichthyosaur (taxonomic designation: Xenotherus icthycanthus, or Spined Alien Fish Beast) is an alien species transported to Earth from the Border World, Xen. It is entirely aquatic and has no realtion to the reptilian it is named after, it was captured by Black Mesa Scientists from the Challenger Deep",
    },
    {
        id: 16,
        tags: ['combine', 'advisor', 'combine advisor', 'boss', 'brain'],
        name: 'Combine Advisor',
        creature: "advisor",
        Bios: 'Combine',
        photo:'./img/cbs.png',
        Danger: 4,
        pic: './img/advisor.png',
        Description: `The Combine Advisors, also known as "Shu'ulathoi" by the Vortigaunts, are the masterminds behind the Combine occupation of Earth. They are commonly speculated to be the master race of the Combine empire. The Advisors are large, pale, super-intelligent grub-like creatures with no discernible facial features. The Advisors have a device similar to a gas mask attached to their front end. `,
    },

    {
        id: 117,
        label: "Crowbar",
        name: "crowbar",
        type: "resistance weapon",
        pic1: "./img/res.png",
        pic: "./img/crowbar.png",
        damage: 1,
        Description: "The Crowbar is an iconic melee weapon and the signature weapon of Gordon Freeman. Originally a tool, it has been reused as a surprisingly effective melee weapon, useful against smaller and/or lone enemies, or when the player is short on ammo. It is a very simple device - a length of iron or steel hexagonal rod, one end forged into a curve and furnished with a split wedge for prying nails, the other end hammered into a simple flat wedge for general prying and levering.",
        tags: ['crowbar', 'melee', 'bar', 'freeman']
    },
    {
        id: 118,
        label: "Manhack",
        name: "manhack",
        type: "throwing weapon",
        pic1: "./img/throw.png",
        pic: "./img/manhack.png",
        damage: 1.5,
        Description: "The Manhack, referred to as Viscerator by the Overwatch Voice and simply Hack by Citizens and Rebels, is a flying, gyroscopic device with three razor-sharp blades that constantly spin at extremely high speeds. They are able to cause severe damage to anything they collide with.",
        tags: ['manhack', 'hack', 'machine', 'combine']
    },
    {
        id: 119,
        label: "MP7 Combine SMG",
        name: "mp7",
        type: "combine weapon",
        pic1: "./img/comb.png",
        pic: "./img/mp7.png",
        damage: 2,
        Description: "The Heckler & Koch MP7, also known as the SMG1, is a compact, fully automatic firearm used by the Combine and the Resistance. The MP7's has two fire modes; primary fire is fully automatic, with a high rate of fire, but poor accuracy, while the secondary fire launches a non-rocket propelled contact grenade which explodes on impact, coming from an attached grenade launcher.",
        tags: ['mp7', 'smg', 'combine', 'mp7 combine smg', 'soldier']
    },
    {
        id: 120,
        label: "Colt Python",
        name: "colt",
        type: "millitary weapon",
        pic1: "./img/mil.png",
        pic: "./img/colt.png",
        damage: 3.5,
        Description: "The Colt Python (or .357 Magnum Revolver) is a powerful handgun The Python is a double-action revolver which fires six rounds. It is very powerful, but it has a long reload time and low rate of fire. It has near perfect accuracy, but rapidly firing shots will cause accuracy to significantly decrease because of the weapon's fair amount of recoil.",
        tags: ['colt', 'revolver', 'python', 'colt python', 'pistol']
    },
    {
        id: 121,
        label: "Tau Cannon",
        name: "tau cannon",
        type: "expirimental weapon",
        pic1: "./img/exp.jpg",
        pic: "./img/tau.png",
        damage: 4,
        Description: "The Tau Cannon, also known as the XVL1456,[2] is a powerful particle accelerator with significant stopping power. A particle accelerator custom-built by BMRF scientists, it consumes depleted Uranium 235 as ammo and fires devastating beams.",
        tags: ['tau', 'tau cannon', 'science', 'expirimental', 'lambda']
    },
    {
        id: 122,
        label: "Glock 17",
        name: "glock 17",
        creature: 'glock',
        type: "millitary weapon",
        pic1: "./img/mil.png",
        pic: "./img/glock.png",
        damage: 1.5,
        Description: "The Glock 17 is a pistol with decent accuracy, rate of fire, and magazine size. It however does much less damage compared to most weapons.",
        tags: ['glock', 'glock 17', 'pistol', 'handgun']
    },
    {
        id: 123,
        label: "Hopper Mine",
        name: "hopper mine",
        type: "throwing weapon",
        pic1: "./img/throw.png",
        pic: "./img/mine.png",
        damage: 5,
        Description: "The Hopper Mine is an anti-personnel proximity mine that hops into the air towards the target before exploding, much like a bouncing betty. These mines are carried and deployed by Shield Scanners. They are vaguely dome-shaped with three sharp legs. When dropped, the mines use these legs to bounce around until they land facing up on a smooth surface. They then jam the legs into the ground, attaching themselves very firmly.",
        tags: ['mine', 'hopper', 'hopper mine', 'combine']
    },
    {
        id: 124,
        label: "Resistance Crossbow",
        name: "resistance crossbow",
        type: "resistance weapon",
        pic1: "./img/res.png",
        pic: "./img/crossbow.png",
        damage: 3,
        Description: "Citizen Tech crossbow is constructed with tubular steel sections comprising the main body, obvious weld marks and mismatched hardware communicate the nature of this junkyard prototype. This crossbow utilizes an electric cocking mechanism.",
        tags: ['crossbow', 'resitance crossbow', 'bow']
    },
    {
        id: 125,
        label: "Pulse Rifle",
        name: "pulse rifle",
        type: "combine weapon",
        pic1: "./img/comb.png",
        pic: "./img/pulse.png",
        damage: 3,
        Description: "The Overwatch Standard Issue Pulse Rifle (OSIPR),[1] also known as Pulse Rifle or AR2 (Assault Rifle 2; stemming from a development codename), is a Dark Energy /pulse-powered assault rifle manufactured by the Combine. It has a 30-round energy cells, which is reloaded with an automatic mechanism built into the weapon from the box magazine. ",
        tags: ['pulse rifle', 'plasma rifle', 'pulse', 'rifle', 'combine']
    },
    {
        id: 126,
        label: "RPG Launcher",
        name: "rpg launcher",
        type: "resistance weapon",
        pic1: "./img/res.png",
        pic: "./img/rpg.png",
        damage: 5,
        Description: "The Resistance Rocket Propelled Grenade, also referred to as simply the Resistance RPG or simply RPG, is a powerful weapon sometimes used by Rebels against Combine forces. It is mainly used by the Resistance to take out Combine Dropship troop containers, Combine Gunships, Hunter-Choppers, Striders and sometimes even APCs.",
        tags: ['rpg launcher', 'rpg', 'greande launcher', 'rocket launcher', 'missile launcher']
    },
    {
        id: 127,
        label: "SPAS 12",
        name: "spas 12",
        type: "millitary weapon",
        pic1: "./img/mil.png",
        pic: "./img/spas.png",
        damage: 2.5,
        Description: "The SPAS-12, is a powerful pump-action shotgun that fires buckshot in a cone-shaped pattern. Primarily used by the HECU and the Combine, and sometimes carried by the Resistance as well and occasionally found next to Black Mesa Personnel. The SPAS-12 has two fire modes. The first one fires multiple pellets with a medium-sized spread, uses one shell, and has a small delay between shots. The alternate fire mode fires double the amount of pellets in a larger, less tight spread and uses two shells.",
        tags: ['shotgun', 'spas', 'spas 12']
    },
    {
        id: 128,
        label: "Gravity Gun",
        name: "gravity gun",
        type: "expirimental weapon",
        pic1: "./img/exp.jpg",
        pic: "./img/grav.png",
        damage: 3.5,
        Description: "The Zero Point Energy Field Manipulator, commonly known as the Gravity Gun, is a tractor beam-type weapon designed for handling hazardous materials, but as Alyx Vance stated, primarily used for heavy lifting. At its core is a substance that appears to be a Xen crystal. Introduced to the player by Alyx Vance shortly after arrival at Black Mesa East, the Gravity Gun soon becomes a valuable tool in Gordon Freeman's arsenal. When exposed to the Confiscation Field in the Citadel, the Gravity Gun is supercharged rather than being vaporized as other weapons are.",
        tags: ['gravity gun', 'grav gun', 'gravity', 'zero point energy field manipulator']
    },
    {
        id: 129,
        label: "HECU Laser Tripmine",
        name: "hecu laser tripmine",
        type: "throwing weapon",
        pic1: "./img/throw.png",
        pic: "./img/hecu.png",
        damage: 4,
        Description: "The Hazardous Environment Combat Unit Laser Tripmine, commonly referred to as the HECU Laser Tripmine, is a proximity-fused explosive that relies on a laser to trigger.",
        tags: ['tripmine', 'mine', 'hecu', 'hecu laser tripmine', 'wall mine']
    },
    {
        id: 130,
        label: "Gluon Gun",
        name: "gluon gun",
        type: "expirimental weapon",
        pic1: "./img/exp.jpg",
        pic: "./img/gluon.jpeg",
        damage: 4,
        Description: "The Gluon Gun, or Quantum Destabilizer, is an experimental weapon that fires a devastating laser capable of disintegrating organic matter. The Gluon Gun was discovered by Gordon Freeman at the Black Mesa Research Facility's Lambda Complex, where it was developed. Unwilling to use it on living creatures, the designer of the gun deems Gordon less hesitant to kill and gives the gun to him.",
        tags: ['gluon gun', 'gluon', 'flamethrower', 'lambda']
    },
    {
        id: 131,
        label: "Stun Baton",
        name: "stun baton",
        type: "combine weapon",
        pic1: "./img/comb.png",
        pic: "./img/baton.png",
        damage: 1.5,
        Description: "The Stun Baton, or Stunstick, is an electrified baton used by Civil Protection officers to enforce the law on unruly citizens or strike them. The small electrical device contained within the tip is to electrocute anyone hit with the baton. When activated, the end emits an electrical blue glow. It will stun citizens for a few seconds, causing pain and confusion. ",
        tags: ['stun baton', 'baton', 'taser']
    },
    {
        id: 132,
        label: "MK2 Grenade",
        name: "mk2 grenade",
        type: "throwing weapon",
        pic1: "./img/throw.png",
        pic: "./img/gren.png",
        damage: 3,
        Description: "The MK2 Grenade is a timed fragmentation hand grenade with a 5-second fuse, with a medium area of effect. Enemies killed by it might explode into pieces, depending on how much damage they suffer.",
        tags: ['grenade', 'mk2', 'mk2 grenade']
    },
    //easter egg creatures
    {
        id: 33,
        tags: ['gargantua', 'giant', 'xen', 'boss', 'black monster'],
        name: 'Gargantua',
        creature: "gargantua",
        Bios: 'Xen Native',
        photo:'./img/bms.png',
        Danger: 5,
        pic: './img/giant.png',
        Description: `The Gargantua is a large and powerful species of Xen alien. The Gargantua is approximately six meters (20 feet) tall, mostly blue in color, and has one yellow eye that glows red when it perceives a hostile unit. Instead of hands, it sports two massive pincers that can be opened to emit jets of intense heat (the Alien Grunt hands are also similar), as well as a pair of vestigial legs below the trunk, a common trait in most bipedal Xen creatures. `,
    },
    {
        id: 34,
        tags: ['alien', 'alien controller', 'floater'],
        name: 'Alien Controller',
        creature: "controller",
        Bios: 'Sentient',
        photo:'./img/xsym.png',
        Danger: 3,
        pic: './img/alien2.png',
        Description: `Alien Controllers are levitating Xen creatures. They appear intelligent, and closely resemble the Nihilanth but smaller. This, along with their name, suggests they are part of the command caste of the intelligent Xen species. The Alien Controllers share many characteristics with the Nihilanth, suggesting that they may be closely related. Like other sentient creatures on Xen, the Alien Controllers have a third vestigial arm growing from the center of their chest.`,
    },
    {
        id: 35,
        tags: ['xen', 'hound', 'houndeye', 'dog'],
        name: 'Houndeye',
        creature: "houndeye",
        Bios: 'Xen Native',
        photo:'./img/bms.png',
        Danger: 2,
        pic: './img/hound.png',
        Description: `The Houndeye (taxonomic designation: Sonicanis myriops, or "Many-eyed Sound Dog") is a tripedal creature that teleported to Earth from Xen after the Resonance Cascade. Possessing only three legs and a thorax, the Houndeye is a faint yellow-green in color, with electric blue tiger-like stripes adorning its spine. In place of a head there is a large, black, insect-like compound eye protected by vertical eyelids.`,
    },
    {
        id: 36,
        tags: ['combine', 'scanner', 'city scanner', 'machine', 'drone'],
        name: 'City Scanner',
        creature: "scanner",
        Bios: 'Combine',
        photo:'./img/cbs.png',
        Danger: 0.5,
        pic: './img/scanner.png',
        Description: `The City Scanner, also known as Scanner Type I and often referred to simply as Scanner, is a lightly armored, flying security camera used by the Combine to monitor City 17's (and possibly other cities) residents. Its Synth counterpart is the Shield Scanner.`,
    },
    {
        id: 37,
        tags: ['crab', 'headcrab', 'gonarch', 'boss'],
        name: 'Gonarch',
        creature: "gonarch",
        Bios: 'Xen Symbiote',
        photo:'./img/hls2.jpg',
        Danger: 5,
        pic: './img/gon.png',
        Description: `The Gonarch is the final phase of the Headcrab's life-cycle.Little is known about how and when the metamorphosis from Headcrab to Gonarch takes place, as few Headcrabs ever reach that stage. The Gonarch boasts a thick exoskeleton, powerful legs, and a large sack resembling a testicle dangling from its underbelly. `,
    },
    {
        id: 138,
        label: "Apeture Science Handheld Portal Device",
        name: "portal gun",
        type: "expirimental weapon",
        pic1: "./img/exp.jpg",
        pic: "./img/portal.png",
        damage: 0,
        Description: `The Aperture Science Handheld Portal Device, originally marketed in the 1950s as an Aperture Science Portable Quantum Tunneling Device, also commonly known as a Portal Gun or by its acronym, "ASHPD", is an experimental tool used to create two portals through which objects can pass. Used in the Enrichment Center's testing tracks, it is a Test Subject's primary tool to complete each test, as well as being a mandatory travel aide outside of testing areas.`,
        tags: ['apeture', 'portal', 'teleporter', 'poertal device', 'portal gun']
    }
]
//end of arrays


// start of modal
function modal(){
    $(".moreInformation").click(function(){
        let i = 0;
        for(i = 0; i<objectArray.length; i++){
            if(parseInt(this.id) === objectArray[i].id){
                // console.log(objectArray[i].artist);
                // one way to clear data is use the jquery function
                // empty() - it removes all child nodes from the selected element
                $('#exampleModalLongTitle').empty().append(
                    `
                    <h1 class="modal-title"> ${objectArray[i].name} </h1>

                    `
                )
                $("#objectArrayModalInfo").empty().append(
                    `
                    <img class= "modal-img" src="${objectArray[i].pic}" alt="Creature Picture">
                       <p class="modal-text">Description: ${objectArray[i].Description}</p>
                    `
                );
                console.log(objectArray[5]);
            }
        }
    });
};


// end of modal



// card generator


function objectsLoop(){
    let i = 0;
    for(i = 0; i<objectArray.length; i++){
        generateCard(i);
    }
    modal();
};
// objectsLoop();



//end of generator
   
//button filter
function buttonFilterer1(event){
    $('#cardContent').empty();
    event.preventDefault();
    console.log('clicked');

generateCard(32)
        
modal(); 
   
};
function buttonFilterer2(event){
    $('#cardContent').empty();
    event.preventDefault();
    console.log('clicked');

generateCard(33)
        
modal(); 
   
};
function buttonFilterer3(event){
    $('#cardContent').empty();
    event.preventDefault();
    console.log('clicked');

generateCard(34)
        
modal(); 
   
};
function buttonFilterer4(event){
    $('#cardContent').empty();
    event.preventDefault();
    console.log('clicked');

generateCard(35)
        
modal(); 
   
};



//card filterer
    function creatureFilterer(event){
        $('#cardContent').empty();
        event.preventDefault();
        console.log('clicked');

        const selectedCreatures = [];  
        $('input[name="creature"]:checked').each( function(){
            selectedCreatures.push(this.value);
        });

        // const selectedWeapons = [];  
        // $('input[name="weapon"]:checked').each( function(){
        //     selectedWeapons.push(this.value);
        // });
        
        let i = 0;
        for(i = 0; i < selectedCreatures.length; i++){

            if(selectedCreatures[i] === 'headcrab'){
               let i = 0;
               for(i = 0; i<objectArray.length; i++){
                    if(objectArray[i].creature === 'headcrab'){
                        generateCard(i);
                    };
               }
            }

            if(selectedCreatures[i] === 'vortigaunt'){
                let i = 0;
                for(i = 0; i<objectArray.length; i++){
                     if(objectArray[i].creature === 'vortigaunt'){
                        generateCard(i);
                     };
                }
             }

             if(selectedCreatures[i] === 'bullsquid'){
                let i = 0;
                for(i = 0; i<objectArray.length; i++){
                     if(objectArray[i].creature === 'bullsquid'){
                        generateCard(i);
                     };
                }
             }

             if(selectedCreatures[i] === 'civil_protection'){
                let i = 0;
                for(i = 0; i<objectArray.length; i++){
                     if(objectArray[i].creature === 'civil_protection'){
                        generateCard(i);
                     };
                }
             }
             if(selectedCreatures[i] === 'hunter'){
                let i = 0;
                for(i = 0; i<objectArray.length; i++){
                     if(objectArray[i].creature === 'hunter'){
                        generateCard(i);
                     };
                }
             }
             if(selectedCreatures[i] === 'ant_lion'){
                let i = 0;
                for(i = 0; i<objectArray.length; i++){
                     if(objectArray[i].creature === 'ant_lion'){
                        generateCard(i);                     };
                }
             }
             if(selectedCreatures[i] === 'poison_headcrab'){
                let i = 0;
                for(i = 0; i<objectArray.length; i++){
                     if(objectArray[i].creature === 'poison_headcrab'){
                        generateCard(i);
                     };
                }
             }
             if(selectedCreatures[i] === 'soldier'){
                let i = 0;
                for(i = 0; i<objectArray.length; i++){
                     if(objectArray[i].creature === 'soldier'){
                        generateCard(i);
                     };
                }
             }
             if(selectedCreatures[i] === 'strider'){
                let i = 0;
                for(i = 0; i<objectArray.length; i++){
                     if(objectArray[i].creature === 'strider'){
                        generateCard(i);
                     };
                }
             }
             if(selectedCreatures[i] === 'barnacle'){
                let i = 0;
                for(i = 0; i<objectArray.length; i++){
                     if(objectArray[i].creature === 'barnacle'){
                        generateCard(i);
                     };
                }
             }
             if(selectedCreatures[i] === 'zombie'){
                let i = 0;
                for(i = 0; i<objectArray.length; i++){
                     if(objectArray[i].creature === 'zombie'){
                        generateCard(i);
                        
                     };
                }
             }
             if(selectedCreatures[i] === 'nihilanth'){
                let i = 0;
                for(i = 0; i<objectArray.length; i++){
                     if(objectArray[i].creature === 'nihilanth'){
                        generateCard(i);
                     };
                }
             }
             if(selectedCreatures[i] === 'alien'){
                let i = 0;
                for(i = 0; i<objectArray.length; i++){
                     if(objectArray[i].creature === 'alien'){
                        generateCard(i);
                     };
                }
             }
             if(selectedCreatures[i] === 'dropship'){
                let i = 0;
                for(i = 0; i<objectArray.length; i++){
                     if(objectArray[i].creature === 'dropship'){
                        generateCard(i);
                     };
                }
             }
             if(selectedCreatures[i] === 'shark'){
                let i = 0;
                for(i = 0; i<objectArray.length; i++){
                     if(objectArray[i].creature === 'shark'){
                        generateCard(i);
                     };
                }
             }
             if(selectedCreatures[i] === 'advisor'){
                let i = 0;
                for(i = 0; i<objectArray.length; i++){
                     if(objectArray[i].creature === 'advisor'){
                        generateCard(i);
                     };
                }
             }
             // bios filters
             if(selectedCreatures[i] === 'Combine'){
                let i = 0;
                for(i = 0; i<objectArray.length; i++){
                     if(objectArray[i].Bios === 'Combine'){
                         generateCard(i);
                     };
                }
             }
             if(selectedCreatures[i] === 'Sentient'){
                let i = 0;
                for(i = 0; i<objectArray.length; i++){
                     if(objectArray[i].Bios === 'Sentient'){
                         generateCard(i);
                     };
                }
             }
             if(selectedCreatures[i] === 'Combine Bio-Machine'){
                let i = 0;
                for(i = 0; i<objectArray.length; i++){
                     if(objectArray[i].Bios === 'Combine Bio-Machine'){
                         generateCard(i);
                     };
                }
             }
             if(selectedCreatures[i] === 'Xen Native'){
                let i = 0;
                for(i = 0; i<objectArray.length; i++){
                     if(objectArray[i].Bios === 'Xen Native'){
                         generateCard(i);
                     };
                }
             }
             if(selectedCreatures[i] === 'Xen Symbiote'){
                let i = 0;
                for(i = 0; i<objectArray.length; i++){
                     if(objectArray[i].Bios === 'Xen Symbiote'){
                         generateCard(i);
                     };
                }
             }
             // weapon type filter
             if(selectedCreatures[i] === 'combine weapon'){
                let i = 0;
                for(i = 0; i<objectArray.length; i++){
                     if(objectArray[i].type === 'combine weapon'){
                         weaponCard(i);
                     };
                }
             }
             if(selectedCreatures[i] === 'resistance weapon'){
                let i = 0;
                for(i = 0; i<objectArray.length; i++){
                     if(objectArray[i].type === 'resistance weapon'){
                         weaponCard(i);
                     };
                }
             }
             if(selectedCreatures[i] === 'millitary weapon'){
                let i = 0;
                for(i = 0; i<objectArray.length; i++){
                     if(objectArray[i].type === 'millitary weapon'){
                         weaponCard(i);
                     };
                }
             }
             if(selectedCreatures[i] === 'expirimental weapon'){
                let i = 0;
                for(i = 0; i<objectArray.length; i++){
                     if(objectArray[i].type === 'expirimental weapon'){
                         weaponCard(i);
                     };
                }
             }
             if(selectedCreatures[i] === 'throwing weapon'){
                let i = 0;
                for(i = 0; i<objectArray.length; i++){
                     if(objectArray[i].type === 'throwing weapon'){
                         weaponCard(i);
                     };
                }
             }

             //weapons filter
             if(selectedCreatures[i] === 'crowbar'){
                let i = 0;
                for(i = 0; i<objectArray.length; i++){
                     if(objectArray[i].name === 'crowbar'){
                         weaponCard(i);
                     };
                }
             }
             if(selectedCreatures[i] === 'manhack'){
                let i = 0;
                for(i = 0; i<objectArray.length; i++){
                     if(objectArray[i].name === 'manhack'){
                         weaponCard(i);
                     };
                }
             }
             if(selectedCreatures[i] === 'mp7'){
                let i = 0;
                for(i = 0; i<objectArray.length; i++){
                     if(objectArray[i].name === 'mp7'){
                         weaponCard(i);
                     };
                }
             }
             if(selectedCreatures[i] === 'colt'){
                let i = 0;
                for(i = 0; i<objectArray.length; i++){
                     if(objectArray[i].name === 'colt'){
                         weaponCard(i);
                     };
                }
             }
             if(selectedCreatures[i] === 'tau cannon'){
                let i = 0;
                for(i = 0; i<objectArray.length; i++){
                     if(objectArray[i].name === 'tau cannon'){
                         weaponCard(i);
                     };
                }
             }
             if(selectedCreatures[i] === 'glock 17'){
                let i = 0;
                for(i = 0; i<objectArray.length; i++){
                     if(objectArray[i].name === 'glock 17'){
                         weaponCard(i);
                     };
                }
             }
             if(selectedCreatures[i] === 'hopper mine'){
                let i = 0;
                for(i = 0; i<objectArray.length; i++){
                     if(objectArray[i].name === 'hopper mine'){
                         weaponCard(i);
                     };
                }
             }
             if(selectedCreatures[i] === 'resistance crossbow'){
                let i = 0;
                for(i = 0; i<objectArray.length; i++){
                     if(objectArray[i].name === 'resistance crossbow'){
                         weaponCard(i);
                     };
                }
             }
             if(selectedCreatures[i] === 'pulse rifle'){
                let i = 0;
                for(i = 0; i<objectArray.length; i++){
                     if(objectArray[i].name === 'pulse rifle'){
                         weaponCard(i);
                     };
                }
             }
             if(selectedCreatures[i] === 'rpg launcher'){
                let i = 0;
                for(i = 0; i<objectArray.length; i++){
                     if(objectArray[i].name === 'rpg launcher'){
                         weaponCard(i);
                     };
                }
             }
             if(selectedCreatures[i] === 'spas 12'){
                let i = 0;
                for(i = 0; i<objectArray.length; i++){
                     if(objectArray[i].name === 'spas 12'){
                         weaponCard(i);
                     };
                }
             }
             if(selectedCreatures[i] === 'gravity gun'){
                let i = 0;
                for(i = 0; i<objectArray.length; i++){
                     if(objectArray[i].name === 'gravity gun'){
                         weaponCard(i);
                     };
                }
             }
             if(selectedCreatures[i] === 'hecu laser tripmine'){
                let i = 0;
                for(i = 0; i<objectArray.length; i++){
                     if(objectArray[i].name === 'hecu laser tripmine'){
                         weaponCard(i);
                     };
                }
             }
             if(selectedCreatures[i] === 'gluon gun'){
                let i = 0;
                for(i = 0; i<objectArray.length; i++){
                     if(objectArray[i].name === 'gluon gun'){
                         weaponCard(i);
                     };
                }
             }
             if(selectedCreatures[i] === 'stun baton'){
                let i = 0;
                for(i = 0; i<objectArray.length; i++){
                     if(objectArray[i].name === 'stun baton'){
                         weaponCard(i);
                     };
                }
             }
             if(selectedCreatures[i] === 'mk2 grenade'){
                let i = 0;
                for(i = 0; i<objectArray.length; i++){
                     if(objectArray[i].name === 'mk2 grenade'){
                         weaponCard(i);
                     };
                }
             }
             


        modal(); 
    };
};


//end of filter




function generateCard(x){

    $('#cardContent').append(
        `
                <div class="card card--style" style="width: 18rem;">
                    <div class="img-container">
                    <img class="card-img-top" src="${objectArray[x].photo}" alt="Card image cap">
                    </div>    
                    <div class="card-body">
                                     <h5 class="card-title">${objectArray[x].name}</h5>
                                     <p class="card-text">${objectArray[x].Bios}</p>
                                     <p class="card-text">Danger Level: ${objectArray[x].Danger}</p>
                        <button id="${objectArray[x].id}" type="button" class="btn btn-primary moreInformation" data-toggle="modal" data-target="#exampleModalCenter">
                            Data Log
                        </button>
                    </div>
                </div>  
        `
    );


};


function weaponCard(x){
    $('#cardContent').append(
        `
                <div class="card card--style" style="width: 18rem;">
                    <div class="img-container">
                    <img class="card-img-top" src="${objectArray[x].pic1}" alt="Card image cap">
                    </div>    
                    <div class="card-body">
                                     <h5 class="card-title">${objectArray[x].label}</h5>
                                     <p class="card-text">Type: ${objectArray[x].type}</p>
                                     <p class="card-text">Damage Power: ${objectArray[x].damage}</p>
                        <button id="${objectArray[x].id}" type="button" class="btn btn-primary moreInformation" data-toggle="modal" data-target="#exampleModalCenter">
                            Data Log
                        </button>
                    </div>
                </div>  
        `
    );
};

// search function

function filterSearchWord(){    
    let searchWord = $('#searchWord').val();
    // console.log(searchWord);
    filterByWord(searchWord);
    $('input[name=search]').val('');
};

function filterByWord(word){
    console.log(word);
    $('#cardContent').empty();
    let i,j;
    for(i =0; i<objectArray.length; i++){
        for(j = 0; j<objectArray[i].tags.length; j++){
            if(word.toLowerCase() === objectArray[i].tags[j]){
                generateCard(i);
                // weaponCard(i);
            }
        }
        modal();
    }
    if(word === ''){
        noInput();
    }

}  




// //function weaponsearch(){

// // let k = 100;

// for (let i =0; i < objectArray.length; i++){
    // if(objectArray[i].id >= k){
    //     weaponCard();
    // } else if()
    // generateCard()
    
// }


// // for (k>=objectArray.id){
// //     
//      }

// // }


// function weaponSearchWord(){    
//     let searchWord = $('#searchWord').val();
//     // console.log(searchWord);
//     filterByWord(searchWord);
//     $('input[name=search]').val('');
// };

function noInput(){
    for(let i = 0; i <objectArray.length; i++){
        generateCard(i);
    }
}
function filterSearchWord(){    
    let searchWord = $('#searchWord').val();
    // console.log(searchWord);
    filterByWord(searchWord);
    $('input[name=search]').val('');
};




// end of search function



//button clear

function clear(){
   
    $('#cardContent').empty();
    selectedCreatures.reset();
};
//buttons
creatureFilter.addEventListener("click", creatureFilterer);
killBtn.addEventListener("click", clear);
searchBtn.addEventListener("click", filterSearchWord);
buttonlink1.addEventListener("click", buttonFilterer1);
buttonlink2.addEventListener("click", buttonFilterer2);
buttonlink3.addEventListener("click", buttonFilterer3);
buttonlink4.addEventListener("click", buttonFilterer4);



let hostiles= true;

console.log('Default value of bool is',
                                   hostiles);

function toggle() {
    hostiles = !hostiles;
      
    console.log('Toggled bool is',
                        hostiles);
    switcher();


};
function toggle2() {
    hostiles = !hostiles;
      
    console.log('Toggled bool is',
                        hostiles);
    switcher2();


};
function switcher2(){
    switch(hostiles){
        case true:
            break;
        case false:{
            $('#hostilebox').empty().append(
                `
            <div class="bigbox_mybox">
                <form class="myform" action="">
                <label for="creature" class="myform_mylabel">Headcrab</label> <br />
                <input type="checkbox" name="creature" value="headcrab" class="myform_mycheck">
        
                <label for="creature" class="myform_mylabel">Vortigaunt</label><br />
                <input type="checkbox" name="creature" value="vortigaunt" class="myform_mycheck">
        
                <label for="creature" class="myform_mylabel">Bullsquid</label><br />
                <input type="checkbox" name="creature" value="bullsquid" class="myform_mycheck">
        
                <label for="creature" class="myform_mylabel">Civil Protection</label><br />
                <input type="checkbox" name="creature" value="civil_protection"class="myform_mycheck">  
        
              </form>
              </div>    
              
              <div class="bigbox_mybox">
                <form class="myform" action="">
                <label for="creature" class="myform_mylabel">Hunter</label><br />
                <input type="checkbox" name="creature" value="hunter" class="myform_mycheck">
        
                <label for="creature" class="myform_mylabel">Ant Lion</label><br />
                <input type="checkbox" name="creature" value="ant_lion" class="myform_mycheck">
        
                <label for="creature" class="myform_mylabel">Poisoned Headcrab</label><br />
                <input type="checkbox" name="creature" value="poison_headcrab" class="myform_mycheck">
        
                <label for="creature" class="myform_mylabel">Combine Soldier</label><br />
                <input type="checkbox" name="creature" value="soldier" class="myform_mycheck">
                
                </form>
              
              </div>
              <div class="bigbox_mybox">
                  <form class="myform" action="">
        
                <label for="creature" class="myform_mylabel">Strider</label><br />
                <input type="checkbox" name="creature" value="strider" class="myform_mycheck">
        
                <label for="creature" class="myform_mylabel">Barnacle</label><br />
                <input type="checkbox" name="creature" value="barnacle" class="myform_mycheck">
        
                <label for="creature" class="myform_mylabel">Headcrab "Zombie"</label><br />
                <input type="checkbox" name="creature" value="zombie" class="myform_mycheck">
        
                <label for="creature" class="myform_mylabel">Nihilanth</label><br />
                <input type="checkbox" name="creature" value="nihilanth" class="myform_mycheck">
                
        
              </form>
              </div>
                <div class="bigbox_mybox">
                  <form class="myform" action=""> 
        
                    <label for="creature" class="myform_mylabel">Alien Grunt</label><br />
                    <input type="checkbox" name="creature" value="alien" class="myform_mycheck">
        
                    <label for="creature" class="myform_mylabel">Combine Dropship</label><br />
                    <input type="checkbox" name="creature" value="dropship" class="myform_mycheck">
        
                    <label for="creature" class="myform_mylabel">Icthyosaur</label><br />
                    <input type="checkbox" name="creature" value="shark" class="myform_mycheck">
        
                    <label for="creature" class="myform_mylabel">Combine Advisor</label><br />
                    <input type="checkbox" name="creature" value="advisor" class="myform_mycheck">
        
        
                  </form>
        
            </div>
        
                `
            );
            $('#hostiles2').empty().append(
                `
                            <form action="" class="myform">
                            <label for="creature" class="myform_mylabel2">Xen Native</label>
                            <input type="radio" name="creature" value="Xen Native" class="myform_mycheck2">
                            </form>

                            <form action="" class="myform">
                            <label for="creature" class="myform_mylabel2">Xen Symbiote</label>
                            <input type="radio" name="creature" value="Xen Symbiote" class="myform_mycheck2">
                            </form>

                            <form action="" class="myform">
                            <label for="creature" class="myform_mylabel2">Combine</label>
                            <input type="radio" name="creature" value="Combine" class="myform_mycheck2">
                            </form>

                            <form action="" class="myform">
                            <label for="creature" class="myform_mylabel2">Sentient</label>
                            <input type="radio" name="creature" value="Sentient" class="myform_mycheck2">
                            </form>

                            <form action="" class="myform">
                            <label for="creature" class="myform_mylabel2">Combine  Bio-Machine</label>
                            <input type="radio" name="creature" value="Combine Bio-Machine" class="myform_mycheck2">
                            </form>
                `
            );

        };
    };
};

function switcher(){
switch(hostiles){
    case true:
        console.log('hostiles');
        break;
    case false:{
        console.log('weapons');    
        $('#hostilebox').empty().append(
            `            
                        <div class="bigbox_mybox">
                        <form class="myform" action="">
                        <label for="creature" class="myform_mylabel">Crowbar</label> <br />
                        <input type="checkbox" name="creature" value="crowbar" class="myform_mycheck">
                
                        <label for="creature" class="myform_mylabel">Manhack</label><br />
                        <input type="checkbox" name="creature" value="manhack" class="myform_mycheck">
                
                        <label for="creature" class="myform_mylabel">MP7 Combine SMG</label><br />
                        <input type="checkbox" name="creature" value="mp7" class="myform_mycheck">
                
                        <label for="creature" class="myform_mylabel">Colt Python</label><br />
                        <input type="checkbox" name="creature" value="colt" class="myform_mycheck">  
        
                        </form>
                        </div>
                        <div class="bigbox_mybox">
                        <form class="myform" action="">
                        <label for="creature" class="myform_mylabel">Tau Cannon</label> <br />
                        <input type="checkbox" name="creature" value="tau cannon" class="myform_mycheck">
                
                        <label for="creature" class="myform_mylabel">Glock 17</label><br />
                        <input type="checkbox" name="creature" value="glock 17" class="myform_mycheck">
                
                        <label for="creature" class="myform_mylabel">Hopper Mine</label><br />
                        <input type="checkbox" name="creature" value="hopper mine" class="myform_mycheck">
                
                        <label for="creature" class="myform_mylabel">Resistance Crossbow</label><br />
                        <input type="checkbox" name="creature" value="resistance crossbow" class="myform_mycheck">  
  
                        </form>
                        </div>
                        <div class="bigbox_mybox">
                        <form class="myform" action="">
                        <label for="creature" class="myform_mylabel">Pulse Rifle</label> <br />
                        <input type="checkbox" name="creature" value="pulse rifle" class="myform_mycheck">

                        <label for="creature" class="myform_mylabel">RPG Launcher</label><br />
                        <input type="checkbox" name="creature" value="rpg launcher" class="myform_mycheck">

                        <label for="creature" class="myform_mylabel">SPAS 12</label><br />
                        <input type="checkbox" name="creature" value="spas 12" class="myform_mycheck">

                        <label for="creature" class="myform_mylabel">Gravity Gun</label><br />
                        <input type="checkbox" name="creature" value="gravity gun" class="myform_mycheck">  

                        </form>
                        </div>
                        <div class="bigbox_mybox">
                        <form class="myform" action="">
                        <label for="creature" class="myform_mylabel">HECU Laser Tripmine</label> <br />
                        <input type="checkbox" name="creature" value="hecu laser tripmine" class="myform_mycheck">

                        <label for="creature" class="myform_mylabel">Gluon Gun</label><br />
                        <input type="checkbox" name="creature" value="gluon gun" class="myform_mycheck">

                        <label for="creature" class="myform_mylabel">Stun Baton</label><br />
                        <input type="checkbox" name="creature" value="stun baton" class="myform_mycheck">

                        <label for="creature" class="myform_mylabel">MK2 Grenade</label><br />
                        <input type="checkbox" name="creature" value="mk2 grenade" class="myform_mycheck">  

                        </form>
                        </div>            
    `

        );
        $('#hostiles2').empty().append(
            `
                    <form action="" class="myform">
                    <label for="creature" class="myform_mylabel2">Combine Weapons</label>
                    <input type="radio" name="creature" value="combine weapon" class="myform_mycheck2">
                    </form>

                    <form action="" class="myform">
                    <label for="creature" class="myform_mylabel2">Resistance Weapons</label>
                    <input type="radio" name="creature" value="resistance weapon" class="myform_mycheck2">
                    </form>

                    <form action="" class="myform">
                    <label for="creature" class="myform_mylabel2">Mllitary Weapons</label>
                    <input type="radio" name="creature" value="millitary weapon" class="myform_mycheck2">
                    </form>

                    <form action="" class="myform">
                    <label for="creature" class="myform_mylabel2">Expirimental Weapons</label>
                    <input type="radio" name="creature" value="expirimental weapon" class="myform_mycheck2">
                    </form>

                    <form action="" class="myform">
                    <label for="creature" class="myform_mylabel2">Throwing Weapons</label>
                    <input type="radio" name="creature" value="throwing weapon" class="myform_mycheck2">
                    </form>
            `

        );        
    };

};
};

//toggle easter egg monsters

function myFunction() {
    var x = document.getElementById("navid");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  };
