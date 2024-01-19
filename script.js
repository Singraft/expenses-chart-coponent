const listDays = document.getElementsByClassName('card-body-graph-day')
const moneyDays = document.getElementsByClassName('display-amount')

// Asynchronous function to fetch data from local json file
const dataRequest = async () => {
    try {
        const URL = './data.json'
        const response = await fetch(URL) //fetch data from the json file
        const data = await response.json() //extract data
        // console.log(data)

        // Looping through matrix
        data.forEach((item, index) => {
            // Generate color bar and text for each day in the DOM
            listDays[index].innerHTML = `
            <div class="display-amount bar_money">$${item.amount}</div>
            <div class="card-body-graph-bar bar${index + 1}"></div>
            ${item.day}
            `
            // Add event listeners for mouseover and mouseout
            listDays[index].addEventListener('mouseover', () => {
                moneyDays[index].classList.add('reveal-amount')
            })
            listDays[index].addEventListener('mouseout', () => {
                moneyDays[index].classList.remove('reveal-amount')
            })

        });

        // Getting current date (Day)
        const currentDate = new Date()
        const currentDay = currentDate.getDay()
        const graphBars = document.querySelectorAll('.card-body-graph-bar')

        // Applying color styling to the bar that corresponds to today
        graphBars.forEach((item, index) => {
            if (currentDay != 0) {
                graphBars[currentDay - 1].classList.add('colour-today')
            } else {
                graphBars[6].classList.add('colour-today')
            }
        });

    }
    catch (error) {
        console.log(error)
    }
}

// Call to function
dataRequest();