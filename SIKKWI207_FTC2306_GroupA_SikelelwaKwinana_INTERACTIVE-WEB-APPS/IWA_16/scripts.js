const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const data = {
  //athlete data object
  response: {
    requestType: "FETCH_ATHLETE_DATA",
    requestBy: "ALL_MATCHING_ATHLETES",
    forDisplay: "BEST_RACES",

    data: {
      NM372: {
        firstName: "Nwabisa",
        surname: "Masiko",
        id: "NM372",
        races: [
          {
            date: "2022-11-18T20:00:00.000Z",
            time: [9, 7, 8, 6],
          },
          {
            date: "2022-12-02T20:00:00.000Z",
            time: [6, 7, 8, 7],
          },
        ],
      },

      SV782: {
        firstName: "Schalk",
        surname: "Venter",
        id: "SV782",
        races: [
          {
            date: "2022-11-18T20:00:00.000Z",
            time: [10, 8, 3, 12],
          },
          {
            date: "2022-11-25T20:00:00.000Z",
            time: [6, 8, 9, 11],
          },
          {
            date: "2022-12-02T20:00:00.000Z",
            time: [10, 11, 4, 8],
          },
          {
            date: "2022-12-09T20:00:00.000Z",
            time: [9, 8, 9, 11],
          },
        ],
      },
    },
  },
};

// Only edit below this comment

const createHtml = (athlete) => {
  const { firstName, surname, id, races } = athlete; //athlete is an object passed as an argument
  const lastRace = races[races.length - 1]; //[races-array] which is a property of the athlete object.  calculates then retrieves the last element.

  const fragment = document.createDocumentFragment(); //creates a new, empty Document Fragment object.

  const title = document.createElement("h2"); //creates a new HTML <h2> element
  title.textContent = `Athlete ID: ${id}`; // set the text content of the <h2> element
  fragment.appendChild(title); //adds <h2> element to the Document Fragment

  const container = document.createElement("div"); // Create a container div
  container.style.display = "inline-block"; // Set it to display as an inline-block element

  const list = document.createElement("dl"); //dl-description list.

  const date = new Date(lastRace.date); //parses string date and converts to date and time. assign athletes most recent race to dat object
  const day = date.getDate(); // retrieves the day of the month
  const month = MONTHS[date.getMonth()]; //returns the month as a number from[ARRAY]
  const year = date.getFullYear();

  /**LastRace array for times. acc is a lap time accumulator starts at 0
   **Calculate the total time in minutes
   **RaceTime is a parameter
   */
  const totalTime = lastRace.time.reduce((acc, raceTime) => acc + raceTime, 0);

  // Calculate hours and remaining minutes
  const hours = Math.floor(totalTime / 60); //remember math.floor rounds of to nearest decimal
  const minutes = totalTime;

  /* html. dt-definition term elements */
  list.innerHTML = `
      <dt>Athlete: <span>${firstName} ${surname}</span></dt>
      <dt>Total Races: <span> ${races.length}</span></dt>
      <dt>Event Date(Latest): <span> ${day} ${month} ${year}</span></dt>
      <dt>Total Time(Latest): <span> ${hours
        .toString()
        .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}</span></dt>
      
    `;

  fragment.appendChild(list); //add list to doc fragment

  return fragment; //Document Fragment is addended to the web page to display athlete's details.
};

/*select HTML elements with specific data-athlete attribute */
const NM372 = document.querySelector('[data-athlete="NM372"]');
const SV782 = document.querySelector('[data-athlete="SV782"]');

/*add HTML content to the selected elements */
NM372.appendChild(createHtml(data.response.data.NM372));
SV782.appendChild(createHtml(data.response.data.SV782));
