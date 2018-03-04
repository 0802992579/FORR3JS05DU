//Ólafur Ásdísarson 4.3.2018

//Fylkið roads heldur utan um hvaða hús tengjast beint
//Alice's House-Bob's House þýðir 
//Það er bein leið á milli hús Alice og hús Bob
const roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];

//fallið buildGraph býr til datastructe yfir hvert hús
//hann segir hvert hægt sé að fara úr hverju hús
function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) {  //ef ekki til data structure fyrir hús frá
      graph[from] = [to];       //búa hann til
    } else {			//annars
      graph[from].push(to);	//bæta húsi til við data structure
    }
  }
// splittar string í from og to eða hús frá og hús til
  for (let [from, to] of edges.map(r => r.split("-"))) {
    addEdge(from, to); //setur hús til í lista fyrir hús frá 
    addEdge(to, from); //ef það er hægt að fara frá húsi til húss þá er líka hægt að fara öfuga leið
  }
  return graph;
}

//búa til vegakerfi
const roadGraph = buildGraph(roads);

//VillageState heldur utan um hvar robotinn er
//hvaða pakkar eru hvar og hver þeir eiga að fara
class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  //move hreyfir robotinn a destination	
  move(destination) {
    //ef ekki hægt er að komast frá núverndi staðsetningu á destination
    if (!roadGraph[this.place].includes(destination)) { 
      return this;
    } else {   //annars þarf að uppfæra alla pakkanna
      let parcels = this.parcels.map(p => {
        if (p.place != this.place) return p;
        return {place: destination, address: p.address}; //setja stað pakka sem staðinn sem robotinn er á
      }).filter(p => p.place != p.address);              //filtera þannig að bara pakkar sem eru ekki á réttum stað sé eftir
      return new VillageState(destination, parcels);     //skilar nýrri stöðu 
    }
  }
}

//randomPick velur stak af handahófi úr array
function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

//randomRobot velur stað af handhófi fyrir róbotin að fara á
function randomRobot(state) {
  return {direction: randomPick(roadGraph[state.place])};
}

//býr til random Village
VillageState.random = function(parcelCount = 5) { //pakkar=5
  let parcels = [];
  for (let i = 0; i < parcelCount; i++) {
    let address = randomPick(Object.keys(roadGraph));//vel randon staðsetningu (frá) pakka
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));//vel random hvert á að fara (til)
    } while (place == address);                  //vel þangað til frá <> til 
    parcels.push({place, address});              //komin með frá og til og geymi það
  }
  return new VillageState("Post Office", parcels);
};

//fall sem keyrir róbot
function runRobot(state, robot, memory) {
  for (let turn = 0;; turn++) {            //keyrir nýja turn
    if (state.parcels.length == 0) {       //ef engir pakkar eftir
      console.log(`Done in ${turn} turns`);
      break; 			           //hætta
    }
    let action = robot(state, memory);     //færirrobotinn
    state = state.move(action.direction);  //uppfærir VillageState
    memory = action.memory;                //geymir hvað var gert
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
  if (memory.length == 0) { //ef búin að fara alla route
    memory = mailRoute;     //byrja aftur á byrjun 
  }
  return {direction: memory[0], memory: memory.slice(1)}; //skila hvar er staddur á mail route
}

//keyra róbót sem fer route
runRobot(VillageState.random(), routeRobot, []);


//findRoute finnur hagkvæma leið
function findRoute(graph, from, to) {
  let work = [{at: from, route: []}]; //vinnuleið notuð til að byggja upp leið og skoða
  for (let i = 0; i < work.length; i++) {
    let {at, route} = work[i];       //skoða næsta stað í listanum
    for (let place of graph[at]) {
      //ef staðurinn sem verið er að skoða er staðurinn sem við
      //erum að reyna að komast á skila leiðinni	
      if (place == to) return route.concat(place); 
      //ef leiðin á staðin er ekki til þá bæta staðnum við
      if (!work.some(w => w.at == place)) {
        work.push({at: place, route: route.concat(place)});
      }
    }
  }
}

function goalOrientedRobot({place, parcels}, route) {
  if (route.length == 0) {        //ef enginn leið í gangi
    let parcel = parcels[0];      //ná í næsta pakka
    if (parcel.place != place) {  //ef sá pakki er ekki á þeim stað sem við erum á
      route = findRoute(roadGraph, place, parcel.place); //finnum leið til pakkans
    } else {                                             //annars finnum við leið á staðinn sem pakkinn á að fara á
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return {direction: route[0], memory: route.slice(1)}; //skilum hvert við erum að fara og geymum í minni
}

//Keyrum GoalOriented robot 
runRobot(VillageState.random(),goalOrientedRobot, []);
