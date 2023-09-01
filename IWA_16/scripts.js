const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  
  const data = {
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
              date: '2022-11-18T20:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
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
              date: '2022-11-18T20:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T20:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T20:00:00.000Z',
              time: [9, 8, 9, 11],
            },
          ],
        },
      },
    },
  };
  
  // Only edit below this comment
  
  const createHtml = (athlete) => {
    const { firstName, surname, id, races } = athlete;
    const lastRace = races[races.length - 1];
  
    const fragment = document.createDocumentFragment();
  
    const title = document.createElement('h2');
    title.textContent = `Athlete ID: ${id}`;
    fragment.appendChild(title);

    const container = document.createElement('div'); // Create a container div
    container.style.display = 'inline-block'; // Set it to display as an inline-block element
  
    const list = document.createElement('dl');
  
    const date = new Date(lastRace.date);
    const day = date.getDate();
    const month = MONTHS[date.getMonth()];
    const year = date.getFullYear();
  
    const total = lastRace.time.reduce((acc, lapTime) => acc + lapTime, 0);
    const hours = Math.floor(total / 60);
    const minutes = total % 60;
  
    list.innerHTML = /* html */ `
      <dt>Athlete: <span>${firstName} ${surname}</span></dt>
      <dt>Total Races: <span> ${races.length}</span></dt>
      <dt>Event Date(Latest): <span> ${day} ${month} ${year}</span></dt>
      <dt>Total Time(Latest): <span> ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}</span></dt>
      <dd></dd>
    `;
  
    container.appendChild(list);
    fragment.appendChild(container);
    
    return fragment;
  }
  
  const NM372 = document.querySelector('[data-athlete="NM372"]');
  const SV782 = document.querySelector('[data-athlete="SV782"]');
  
  NM372.appendChild(createHtml(data.response.data.NM372));
  SV782.appendChild(createHtml(data.response.data.SV782));
  


  /*fragment.appendChild(list);const createHtml = (athlete) => {
      const { firstName, surname, id, races } = athlete;
      const lastRace = races[races.length - 1];
      
      const fragment = document.createDocumentFragment();
    
      const title = document.createElement('h2');
      title.textContent = `Athlete: ${id}`;
      fragment.appendChild(title);
    
      const list = document.createElement('dl');
    
      const date = new Date(lastRace.date);
      const options = { day: 'numeric', month: 'short', year: 'numeric' };
    
      list.innerHTML = `
        <dt>Full Name</dt>
        <dd>${firstName} ${surname}</dd>
    
        <dt>Total Races</dt>
        <dd>${races.length}</dd>
    
        <dt>Event Date (Latest)</dt>
        <dd>${date.toLocaleDateString('en-US', options)}</dd>
    
        <dt>Total Time (Latest)</dt>
        <dd>${new Date(lastRace.time.reduce((acc, lapTime) => acc + lapTime, 0) * 60 * 1000).toISOString().substr(11, 8)}</dd>
      `;
    
      fragment.appendChild(list);
    
      return fragment;
    }*/