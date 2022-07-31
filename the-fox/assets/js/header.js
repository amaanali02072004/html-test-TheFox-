let disabled = []
if (document.getElementById('header')) {
	let header = document.getElementById('header')
	let indexLink = './'
	let searchDisplay = true
	if (
		document?.getElementById('header')?.attributes?.search?.nodeValue.length > 0
	) {
		searchDisplay = JSON.parse(
			document?.getElementById('header')?.attributes?.search?.nodeValue
		)
	}
	console.log('search icon', searchDisplay)
	let img = `
<img
	src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/2048px-Search_Icon.svg.png"
	class="search"
	alt="search">
`
	header.innerHTML = `
		<div class="container">
			<div class="headerWrapper">
				<div class="lhs">
					<a href = '${indexLink}' title="thefox">
						<img src="./assets/images/fox-logo.png" class="logo whiteLogo" alt="Logo">
						<img src="./assets/images/fox-logo-black.png" class="logo blackLogo" alt="Logo">
					</a>
					<a class="hamburger" id="hamburger" onclick="showMenu(this)">
						<img src="./assets/images/hamburger.png" alt="hamburger">
					</a>
				</div>
				<div class="rhs" id="rhs">
					<ul id="headerLinks">
(dependancy of 'common.js' module is missing, it may lead to errors/bugs, pls import it,
or 'common.js' is imported first, import it last!)
					</ul>
					${searchDisplay === false ? (img = '') : img}
				</div>
			</div>
		</div>
`
	header.removeAttribute('search')
}
