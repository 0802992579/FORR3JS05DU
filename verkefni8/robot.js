//�lafur �sd�sarson 4.3.2018

//Fylki� roads heldur utan um hva�a h�s tengjast beint
//Alice's House-Bob's House ���ir 
//�a� er bein lei� � milli h�s Alice og h�s Bob
const roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];

//falli� buildGraph b�r til datastructe yfir hvert h�s
//hann segir hvert h�gt s� a� fara �r hverju h�s
function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) {  //ef ekki til data structure fyrir h�s fr�
      graph[from] = [to];       //b�a hann til
    } else {			//annars
      graph[from].push(to);	//b�ta h�si til vi� data structure
    }
  }
// splittar string � from og to e�a h�s fr� og h�s til
  for (let [from, to] of edges.map(r => r.split("-"))) {
    addEdge(from, to); //setur h�s til � lista fyrir h�s fr� 
    addEdge(to, from); //ef �a� er h�gt a� fara fr� h�si til h�ss �� er l�ka h�gt a� fara �fuga lei�
  }
  return graph;
}

//b�a til vegakerfi
const roadGraph = buildGraph(roads);

//VillageState heldur utan um hvar robotinn er
//hva�a pakkar eru hvar og hver �eir eiga a� fara
class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  //move hreyfir robotinn a destination	
  move(destination) {
    //ef ekki h�gt er a� komast fr� n�verndi sta�setningu � destination
    if (!roadGraph[this.place].includes(destination)) { 
      return this;
    } else {   //annars �arf a� uppf�ra alla pakkanna
      let parcels = this.parcels.map(p => {
        if (p.place != this.place) return p;
        return {place: destination, address: p.address}; //setja sta� pakka sem sta�inn sem robotinn er �
      }).filter(p => p.place != p.address);              //filtera �annig a� bara pakkar sem eru ekki � r�ttum sta� s� eftir
      return new VillageState(destination, parcels);     //skilar n�rri st��u 
    }
  }
}

//randomPick velur stak af handah�fi �r array
function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

//randomRobot velur sta� af handh�fi fyrir r�botin a� fara �
function randomRobot(state) {
  return {direction: randomPick(roadGraph[state.place])};
}

//b�r til random Village
VillageState.random = function(parcelCount = 5) { //pakkar=5
  let parcels = [];
  for (let i = 0; i < parcelCount; i++) {
    let address = randomPick(Object.keys(roadGraph));//vel randon sta�setningu (fr�) pakka
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));//vel random hvert � a� fara (til)
    } while (place == address);                  //vel �anga� til fr� <> til 
    parcels.push({place, address});              //komin me� fr� og til og geymi �a�
  }
  return new VillageState("Post Office", parcels);
};

//fall sem keyrir r�bot
function runRobot(state, robot, memory) {
  for (let turn = 0;; turn++) {            //keyrir n�ja turn
    if (state.parcels.length == 0) {       //ef engir pakkar eftir
      console.log(`Done in ${turn} turns`);
      break; 			           //h�tta
    }
    let action = robot(state, memory);     //f�rirrobotinn
    state = state.move(action.direction);  //uppf�rir VillageState
    memory = action.memory;                //geymir hva� var gert
    console.log(`Moved to ${action.direction}`);
  }
}

//Keyrum random robot 
runRobot(VillageState.random(), randomRobot);

//MailRoute sem robotin keyrir um 
const mailRoute = [
  "Alice's House", "Cabin", "Alice's House", "Bob's House",
  "Town Hall", "Daria's House", "Ernie's House",
  "Grete's House", "Shop", "Grete's House", "Farm",
  "Marketplace", "Post Office"
];

//routeRobot fall sem keyrir robot 
function routeRobot(state, memory) {
  if (memory.length == 0) { //ef b�in a� fara alla route
    memory = mailRoute;     //byrja aftur � byrjun 
  }
  return {direction: memory[0], memory: memory.slice(1)}; //skila hvar er staddur � mail route
}

//keyra r�b�t sem fer route
runRobot(VillageState.random(), routeRobot, []);


//findRoute finnur hagkv�ma lei�
function findRoute(graph, from, to) {
  let work = [{at: from, route: []}]; //vinnulei� notu� til a� byggja upp lei� og sko�a
  for (let i = 0; i < work.length; i++) {
    let {at, route} = work[i];       //sko�a n�sta sta� � listanum
    for (let place of graph[at]) {
      //ef sta�urinn sem veri� er a� sko�a er sta�urinn sem vi�
      //erum a� reyna a� komast � skila lei�inni	
      if (place == to) return route.concat(place); 
      //ef lei�in � sta�in er ekki til �� b�ta sta�num vi�
      if (!work.some(w => w.at == place)) {
        work.push({at: place, route: route.concat(place)});
      }
    }
  }
}

function goalOrientedRobot({place, parcels}, route) {
  if (route.length == 0) {        //ef enginn lei� � gangi
    let parcel = parcels[0];      //n� � n�sta pakka
    if (parcel.place != place) {  //ef s� pakki er ekki � �eim sta� sem vi� erum �
      route = findRoute(roadGraph, place, parcel.place); //finnum lei� til pakkans
    } else {                                             //annars finnum vi� lei� � sta�inn sem pakkinn � a� fara �
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return {direction: route[0], memory: route.slice(1)}; //skilum hvert vi� erum a� fara og geymum � minni
}

//Keyrum GoalOriented robot 
runRobot(VillageState.random(),goalOrientedRobot, []);
