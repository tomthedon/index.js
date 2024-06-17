let name = ["no survival", "hospital"];

let address = {
    street: "111 grant ave",
    city: "columbus",
    state: "ohio",
};

let patient = [
    {
        name: "john butt",
        diagnosis: "explosive diarrhea",
        cause_of_death: "did not wip",
    },
    {
        name: "ben shortlived",
        diagnosis: "cancer",
        cause_of_death: "broken neck",
    },
    {
        name: "rob yolo",
        diagnosis: "broken heart",
        cause_of_death: "shotgun to the nuts"
    },
    {
        name: "jim jumpoff",
        diagnosis: "jump off a cliff",
        cause_of_death: "erectile dysfunction"
    },
    {
        name: "mike shortlegs",
        diagnosis: "knees surgery",
        cause_of_death: "broken arms",
    }
];

let time_of_death = [
    { name: "john butt", time_of_death: 1209 },
    { name: "ben shortlived", time_of_death: 1300 },
    { name: "rob yolo", time_of_death: 1600 },
    { name: "jim jumpoff", time_of_death: 1809 },
    { name: "mike shortlegs", time_of_death: 1710 },
];


let filteredPatients = patient.filter(p => name.includes(p.name));

filteredPatients.forEach(p => {
    console.log(p.name);
});