document.getElementById('main').className = 'mainclass'
const firstC = document.getElementById('main')?.firstChild

if (firstC) firstC.nodeValue = 'Hello Archie'

const tableBody = document.querySelector('#contact-table tbody')
const contacts = [
    {firstName: 'Archie', lastName: 'Fayzullaev', email: 'fayzullaevh@gmail.com'},
    {firstName: 'Saric', lastName: 'Saidov', email: 'saric@gmail.com'},
    {firstName: 'Sokratis', lastName: 'Toshpulatov', email: 'toshpulotov@gmail.com'}
]

for(let i = 0; i<contacts.length; i++){
    const newRow = document.createElement('tr')
    const firstNameData = document.createElement('td')
    const firstNameTextNode = document.createTextNode(contacts[i].firstName)
    firstNameData.appendChild(firstNameTextNode)
    const lastNameData = document.createElement('td')
    const lastNameTextNode = document.createTextNode(contacts[i].lastName)
    lastNameData.appendChild(lastNameTextNode)
    const emailData = document.createElement('td')
    const emailTextNode = document.createTextNode(contacts[i].email)
    emailData.appendChild(emailTextNode)
    newRow.appendChild(firstNameData)
    newRow.appendChild(lastNameData)
    newRow.appendChild(emailData)
    tableBody.appendChild(newRow)
}
