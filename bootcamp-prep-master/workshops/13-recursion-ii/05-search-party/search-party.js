/*
let world = {
    'Fullstack': {
      '11th floor': 'Marge',
      '25th floor': 'Francis'
    },
    'Subway': ['Jackie', 'Grumio']
  };
*/

function searchParty(name, world) {
  for (let place in world) {
    if (typeof world[place] === "string") {
      if (world[place] === name) {
        return [place];
      }
    } else if (Array.isArray(world[place])) {
      if (world[place].includes(name)) {
        return [place];
      }
    } else {
      if (searchParty(name, world[place])) {
        return [place].concat(searchParty(name, world[place]));
      }
    }
  }

  return null;
}

/* 
//Following code was our original try.  It failed because it only returned an array w/ just the last place.
//Note this is set up to run w/ debugger rather than testem.
let newYorkCity = {
  Manhattan: {
    Uptown: {
      "Washington Heights": "Daniel",
      UWS: "Cathy",
    },
    Midtown: {
      "Madison Square": "Susan",
      "Theater District": ["Robert", "Latisha"],
    },
    Downtown: {
      Tribeca: "Billy",
      "Financial District": {
        Fullstack: {
          "11th floor": ["David", "Nimit"],
          "25th floor": "Ashi",
        },
      },
    },
  },
  Brooklyn: {
    Bushwick: "Marilyn",
    "Bed-Stuy": ["Juan", "Denice"],
  },
  Queens: {
    Astoria: "Ella",
    Flushing: "Eric",
  },
  Bronx: {
    Fordham: "Aaron",
    Melrose: "Krysten",
  },
  "Staten Island": {
    Arlington: ["Nadine", "Mose"],
    "Elm Park": "Arthur",
  },
};


function searchParty(name, world) {
  debugger;
  let directions = [];
  for (let place in world) {
    if (typeof world[place] === "string") {
      if (world[place] === name) {
        directions.push(place);
      }
    } else if (Array.isArray(world[place])) {
      if (world[place].includes(name)) {
        directions.push(place);
      }
    } else {
      if (searchParty(name, world[place])) {
        directions.push(searchParty(name, world[place])[0]);
      }
    }
  }

  return directions.length > 0 ? directions : null;
}

searchParty("Susan", newYorkCity);

*/
