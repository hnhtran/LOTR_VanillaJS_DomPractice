console.log('Linked.')

// Dramatis Personae
const hobbits = [
	`Frodo Baggins`,
	`Samwise "Sam" Gamgee`,
	`Meriadoc "Merry" Brandybuck`,
	`Peregrin "Pippin" Took`,
]
const buddies = ['Gandalf the Grey', 'Legolas', 'Gimli', 'Strider', 'Boromir']
const baddies = ['Sauron', 'Saruman', 'The Uruk-hai', 'Orcs']
const lands = ['The-Shire', 'Rivendell', 'Mordor']
// ============
// Chapter 1
// ============
const middleEarth = document.createElement('section') // 1. create a section tag with an id of middle-earth
middleEarth.setAttribute('id', 'middle-earth')
function makeMiddleEarth() {
	console.log('1: makeMiddleEarth')
	// 2. use a for loop to iterate over the lands array that does the following:
	for(let i = 0; i < lands.length; i++) {
		//   2a. creates an article tag (there should be one for each land when the loop is done)
		const article = document.createElement('article') 
		//   2b. gives each land article an `id` tag of the corresponding land name
		article.setAttribute('id', `${lands[i]}`) 
		//   2c. includes an h1 with the name of the land inside each land article
		const h1 = document.createElement('h1')
		h1.innerText = `${lands[i]}`
		// h1 is name of the land insdie each land article
		article.appendChild(h1)
		//   2d. appends each land to the middle-earth section
		middleEarth.appendChild(article)
		console.log(article)
}
// 3. append the section to the body of the DOM.
document.body.appendChild(middleEarth)
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
	console.log('2: makeHobbits')
	// display an `unordered list` of hobbits in the shire
	let hobbitUL = document.createElement('ul')
	// hint: create a 'ul' outside the loop into which to append the 'li's
	// hint: get 'The-Shire' by using its id
	for (let i = 0; i < hobbits.length; i++) {
		// give each hobbit a class of `hobbit`
		const hobbitList = document.createElement('li')
		hobbitList.setAttribute('class', 'hobbit')
		hobbitList.innerText = `${hobbits[i]}`
		hobbitUL.appendChild(hobbitList)
	}
	const theShire = document.getElementById('The-Shire')
	theShire.appendChild(hobbitUL)
	console.log(theShire)
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
	console.log('3: keepItSecretKeepItSafe')
	// create a div with an id of `'the-ring'`
	const theRing = document.createElement('div')
	theRing.setAttribute('id', `the-ring`)
	// give the div a class of `'magic-imbued-jewelry'`
	theRing.setAttribute('class', `magic-imbued-jewelry`)
	// add the ring as a child of `Frodo`
	const frodo = document.getElementsByClassName('hobbit')[0]
	frodo.appendChild(theRing)
	// console.log(frodo)
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')
	// display an unordered list of baddies in Mordor
	// give each of the baddies a class of "baddy"
	// remember to append them to Mordor
	let mordorUL = document.createElement('ul')
	for (let i = 0; i < baddies.length; i++) {
		const mordorList = document.createElement('li')
		mordorList.setAttribute('class', 'baddies')
		mordorList.innerText = `${baddies[i]}`
		mordorUL.appendChild(mordorList)
	}
	const Mordor = document.getElementById('Mordor')
	Mordor.appendChild(mordorUL)
	console.log(Mordor)
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
	console.log('5: makeBuddies')
	// create an `aside` tag
	// put an `unordered list` of the `'buddies'` in the aside
	const aside = document.createElement('aside')
	const buddiesUL = document.createElement('ul')
	// put list item class buddies into buddiesUL
	for (let i = 0; i < buddies.length; i++) {
		const buddiesList = document.createElement('li')
		buddiesList.setAttribute('class', 'buddies')
		buddiesList.innerText = `${buddies[i]}`
		buddiesUL.appendChild(buddiesList)
	}
	aside.appendChild(buddiesUL)
	// insert your aside as a child element of `rivendell`
	const rivendell = document.getElementById('Rivendell')
	rivendell.appendChild(aside)
	console.log(rivendell)
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')
	// assemble the `hobbits` and move them to `rivendell`
	//get hobbit list by id The-Shire, child node [1]
	const hobbitUL = document.getElementById('The-Shire').childNodes[1]
	const rivendell = document.getElementById('Rivendell')
	rivendell.appendChild(hobbitUL)
	console.log(rivendell)
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')
	// change the `'Strider'` text to `'Aragorn'`
	const rivendell = document.getElementById('Rivendell')
	const StriderToAragorn = rivendell.childNodes[1].childNodes[0].childNodes[3]
	StriderToAragorn.innerText = `Aragorn`
	console.log(rivendell)
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
	console.log('8: forgeTheFellowShip')
	// create a new div called `'the-fellowship'` within `rivendell`
	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	// after each character is added make an alert that they have joined your party
	const fellowship = document.createElement('div')
	const fellowshipUL = document.createElement('ul')
	fellowshipUL.setAttribute('id', 'fellowship')
	// get all list item inside rivendell, no matter they are in div, section, ul, etc.
	const rivendell = document.getElementById('Rivendell')
	const rivendellList  = rivendell.querySelectorAll('li')

	for (let i = 0; i < rivendellList.length; i++) {
		alert(`${rivendellList[i].innerText} has joined the fellowship`)
		fellowshipUL.append(rivendellList[i])
	}
	fellowship.append(fellowshipUL)
	rivendell.querySelectorAll('ul')
	rivendell.appendChild(fellowship)
	// rivendell.querySelector('aside').remove()
	
	rivendell.childNodes[1].remove()
	rivendell.childNodes[1].remove()
	// rivendell.removeChild('section')
	// NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
	console.log(rivendell)
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
	console.log('9: theBalrog')
	// change the `'Gandalf'` text to `'Gandalf the White'`
	const gandalfTheWhite = document.getElementById('fellowship').childNodes[0]
	gandalfTheWhite.innerText = `Gandalf the White`
	gandalfTheWhite.style.background = "white"
	gandalfTheWhite.style.border = "2px solid grey"
	console.log(gandalfTheWhite)
	// apply the following style to the element, make the // background 'white', add a grey border
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')
	// pop up an alert that the horn of gondor has been blown
	alert(`Horn of Gondor has been blown`)
	// Boromir's been killed by the Uruk-hai!
	// Remove `Boromir` from the Fellowship
	theFellowShip = document.getElementById('fellowship')
	theFellowShip.childNodes[4].remove()
	// theFellowShip.removeChild(theFellowShip.lastChild)
	console.log(theFellowShip)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
	console.log('11: itsDangerousToGoAlone')
	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
	// add a div with an id of `'mount-doom'` to `Mordor`
	const mordor = document.getElementById('Mordor')
	const fellowship = document.getElementById('fellowship')
	const mountDoom = document.createElement('div')
	mountDoom.id = `mount-doom`
	//get frodo and sam name
	const frodo = fellowship.childNodes[4]
	const sam = fellowship.childNodes[5]
	mountDoom.appendChild(frodo)
	mountDoom.appendChild(sam)
	mordor.appendChild(mountDoom)
	console.log(mordor)
	console.log(fellowship)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
	console.log('12: weWantsIt')
	// Create a div with an id of `'gollum'` and add it to Mordor
	const gollum = document.createElement('div')
	gollum.id = `gollum`
	// Remove `the ring` from `Frodo` and give it to `Gollum`
	const mountDoom = document.getElementById('mount-doom')
	gollum.appendChild(mountDoom.childNodes[0].childNodes[1])
	// Move Gollum into Mount Doom
	document.getElementById('mount-doom').appendChild(gollum)
	console.log(document.getElementById('Mordor'))
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
	console.log('13: thereAndBackAgain')
	// remove `Gollum` and `the Ring` from the document
	document.getElementById('gollum').remove()
	// Move all the `hobbits` back to `the shire`
	// prepare hobbit list
	const hobbitList = document.createElement('ul')
	const merry = document.getElementById('fellowship').childNodes[4]
	const pippin = document.getElementById('fellowship').childNodes[5]
	const frodo = document.getElementById('Mordor').childNodes[2].childNodes[0]
	const sam = document.getElementById('Mordor').childNodes[2].childNodes[1]
	//append child
	hobbitList.append(merry, pippin, frodo, sam)
	const theShire = document.getElementById('The-Shire')
	theShire.append(hobbitList)
	//remove mount-doom
	document.getElementById('mount-doom').remove()
	console.log(document.getElementById('The-Shire'))
	console.log(document.getElementById('Mordor'))
}
// makeMiddleEarth()
// makeHobbits()
// keepItSecretKeepItSafe()
// makeBaddies()
// makeBuddies()
// leaveTheShire()
// beautifulStranger()
// forgeTheFellowShip()
// theBalrog()
// hornOfGondor()
// itsDangerousToGoAlone()
// weWantsIt()
// thereAndBackAgain()
// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth)
document.getElementById('chapter-2').addEventListener('click', makeHobbits)
document
	.getElementById('chapter-3')
	.addEventListener('click', keepItSecretKeepItSafe)
document.getElementById('chapter-4').addEventListener('click', makeBaddies)
document.getElementById('chapter-5').addEventListener('click', makeBuddies)
document.getElementById('chapter-6').addEventListener('click', leaveTheShire)
document
	.getElementById('chapter-7')
	.addEventListener('click', beautifulStranger)
document
	.getElementById('chapter-8')
	.addEventListener('click', forgeTheFellowShip)
document.getElementById('chapter-9').addEventListener('click', theBalrog)
document.getElementById('chapter-10').addEventListener('click', hornOfGondor)
document
	.getElementById('chapter-11')
	.addEventListener('click', itsDangerousToGoAlone)
document.getElementById('chapter-12').addEventListener('click', weWantsIt)
document
	.getElementById('chapter-13')
	.addEventListener('click', thereAndBackAgain)
document.getElementById('all-chapters').addEventListener('click', () => {
	makeMiddleEarth()
	makeHobbits()
	keepItSecretKeepItSafe()
	makeBaddies()
	makeBuddies()
	leaveTheShire()
	beautifulStranger()
	forgeTheFellowShip()
	theBalrog()
	hornOfGondor()
	itsDangerousToGoAlone()
	weWantsIt()
	thereAndBackAgain()
})
