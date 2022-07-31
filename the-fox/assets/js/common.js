let fileName = '404'
if (document?.body?.attributes?.page?.nodeValue) {
	fileName = document?.body?.attributes?.page?.nodeValue
}

let id = 'dynamic'
if (document?.getElementById(id)?.innerHTML?.length > 0) {
	let testDoc = document?.getElementById(id)
	let test = JSON.parse(
		document?.getElementById(id)?.attributes?.array?.nodeValue
	)
	test?.length > 0 && console.log('props (array)---', test)
	testDoc.innerHTML = ``
	for (let i = 0; i < test.length; i++) {
		testDoc.innerHTML += `<p>Person ${i} :- ${test[i]}</p>`
	}
}
// testDoc.removeAttribute('array')

const javascript = 'javascript:;'
const ext = './'
let head
if (document.getElementById('head')) {
	head = document.getElementById('head')
	let title = fileName
	title = title.charAt(0).toUpperCase() + title.slice(1)
	head.innerHTML = ``
	head.innerHTML = `
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>The Fox | ${title}</title>
	<link rel="icon" href="./assets/images/fox-icon.png">
	<link rel="stylesheet" href="./assets/css/common.css" />
	<link rel="stylesheet" href="./assets/css/${fileName}.css" />
`
}
let Links = [
	{
		title: 'index',
		href: `index`,
		class: '',
	},
	{
		title: 'pages',
		href: 'pages',
		class: '',
	},
	{
		title: 'portfolio',
		href: 'portfolio',
		class: '',
	},
	{
		title: 'blog',
		href: 'blog',
		class: '',
	},
	{
		title: 'shop',
		href: 'shop',
		class: '',
	},
	{
		title: 'travel',
		href: 'travel',
		class: '',
	},
	{
		title: 'shortcodes',
		href: 'shortcodes',
		class: '',
	},
	{
		title: 'features',
		href: 'features',
		class: '',
		style: '',
	},
	{
		title: 'contact',
		href: `contact`,
		class: '',
	},
]

const FS1Lhs = [
	'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, inventore? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, inventore?',
	'Lorem ipsum, dolor sit amet consecteturadipisicing elit.',
	javascript,
	'Read More',
]
const RhsImg = './assets/images/twitter.png'
const FS1Rhs = [
	{
		title: 'Subscribe',
		para: 'to RSS feed',
		img: RhsImg,
		alt: 'twitter',
		href: javascript,
	},
	{
		title: 'Subscribe',
		para: 'to RSS feed',
		img: RhsImg,
		alt: 'twitter',
		href: javascript,
	},
	{
		title: 'Subscribe',
		para: 'to RSS feed',
		img: RhsImg,
		alt: 'twitter',
		href: javascript,
	},
	{
		title: 'Subscribe',
		para: 'to RSS feed',
		img: RhsImg,
		alt: 'twitter',
		href: javascript,
	},
	{
		title: 'Subscribe',
		para: 'to RSS feed',
		img: RhsImg,
		alt: 'twitter',
		href: javascript,
	},
	{
		title: 'Subscribe',
		para: 'to RSS feed',
		img: RhsImg,
		alt: 'twitter',
		href: javascript,
	},
]
const FS2Img = './assets/images/footer-blog.png'
const FS2 = [
	'latest news',
	{
		title: 'title here',
		para: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, eius.',
		date: '21 december 2017',
		img: FS2Img,
		alt: 'twitter',
	},
	{
		title: 'title here',
		para: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, eius.',
		date: '21 december 2017',
		img: FS2Img,
		alt: 'twitter',
	},
	{
		title: 'title here',
		para: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, eius.',
		date: '21 december 2017',
		img: FS2Img,
		alt: 'twitter',
	},
]

const FS3Widget = [
	'tags widget',
	{
		title: 'awesome',
		href: javascript,
		class: 'primaryButton',
	},
	{
		title: 'beautiful',
		href: javascript,
		class: 'primaryButton',
	},
	{
		title: 'flat design',
		href: javascript,
		class: 'primaryButton',
	},
	{
		title: 'ios',
		href: javascript,
		class: 'secondaryButton cyan',
	},
	{
		title: 'themeforest',
		href: javascript,
		class: 'primaryButton',
	},
	{
		title: 'mass',
		href: javascript,
		class: 'primaryButton',
	},
]

const FS3Useful = [
	'Useful Links',
	{
		title: 'Web Design Resources',
		href: javascript,
	},
	{
		title: 'Web Design Resources',
		href: javascript,
	},
	{
		title: 'Web Design Resources',
		href: javascript,
	},
	{
		title: 'Web Design Resources',
		href: javascript,
	},
	{
		title: 'Web Design Resources',
		href: javascript,
	},
	{
		title: 'Web Design Resources',
		href: javascript,
	},
	{
		title: 'Web Design Resources',
		href: javascript,
	},
	{
		title: 'Web Design Resources',
		href: javascript,
	},
	{
		title: 'Web Design Resources',
		href: javascript,
	},
	{
		title: 'Web Design Resources',
		href: javascript,
	},
]
const FS4 = [
	'Contact Info',
	{
		title: 'office 1',
		para: 'Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Perferendis, Eius.',
		loc: 'vietnam',
	},
	{
		title: 'office 1',
		para: 'Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Perferendis, Eius.',
		loc: 'vietnam',
	},
	{
		title: 'office 1',
		para: 'Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Perferendis, Eius.',
		loc: 'vietnam',
	},
]

let menuList = document.getElementById('rhs')
const showMenu = () => {
	menuList.classList.toggle('rhsActive')
	localStorage.setItem('drawer', true)
}

const hideMenu = () => {
	menuList.classList.remove('rhsActive')
	localStorage.setItem('drawer', false)
}

if (
	document?.getElementById('header')?.attributes?.headerLinks?.nodeValue
		.length > 0
) {
	let headerProps = JSON.parse(
		document?.getElementById('header')?.attributes?.headerLinks?.nodeValue
	)
	if (headerProps.length > 0) {
		// Links = Links.concat(headerProps)
		Links = headerProps
	}
}
console.log('header links---', Links)

let hUl
if (
	document.getElementById('header') &&
	document.getElementById('headerLinks')
) {
	hUl = document.getElementById('headerLinks')
	hUl.innerHTML = ''
}

let fUl
if (
	document.getElementById('footer') &&
	document.getElementById('footerLinks')
) {
	fUl = document.getElementById('footerLinks')
	fUl.innerHTML = ''
}
disabled = []
for (let i = 0; i < Links.length; i++) {
	Links[i].title === fileName && (Links[i].class = 'active')
	Links[i].title === 'index' && (Links[i].title = 'home')
	Links[i].title === 'features' &&
		((Links[i].title = 'features !'),
		(Links[i].style = 'color:var(--cyan);font-weight:900;'))
	Links[i].class === 'active' && (disabled[i] = 'true')

	if (
		document.getElementById('header') &&
		document.getElementById('headerLinks')
	) {
		hUl.innerHTML += `<li>
      <a
        title='${Links[i].title}'
        id='headerLinks${i}'
        ${Links[i]?.style?.length > 0 ? `style='${Links[i]?.style}'` : ''}
        ${Links[i]?.class?.length > 0 ? `class='${Links[i]?.class}'` : ''}
        ${
					disabled[i] !== 'true' &&
					`href=${`${ext}${Links[i].href || Links[i].title}.html`}`
				}
        onclick='activeLink(this)'
			>
        ${Links[i].title}
      </a>
    </li>
    `
	}

	if (
		document.getElementById('footer') &&
		document.getElementById('footerLinks')
	) {
		fUl.innerHTML += `<li>
      <a
        title='${Links[i].title}'
        id='footerLinks${i}'
        ${Links[i]?.style?.length > 0 ? `style='${Links[i]?.style}'` : ''}
        ${Links[i]?.class?.length > 0 ? `class='${Links[i]?.class}'` : ''}
        ${
					disabled[i] !== 'true' &&
					`href=${`${ext}${Links[i].href || Links[i].title}.html`}`
				}
        onclick='activeLink(this)'
			>
        ${Links[i].title}
      </a>
    </li>
    `
	}
}
if (document.getElementById('header')) {
	header?.removeAttribute('headerLinks')
}
let headerActiveLinks = [],
	footerActiveLinks = []
for (let i = 0; i <= Links.length; ++i) {
	headerActiveLinks[i] = document.getElementById(`headerLinks${i}`)
	footerActiveLinks[i] = document.getElementById(`footerLinks${i}`)
}
const activeLink = (element) => {
	for (let i = 0; i < Links.length; i++) {
		headerActiveLinks[i].classList = ''
		footerActiveLinks[i].classList = ''
		element.classList.add('active')

		headerActiveLinks[i].classList == 'active'
			? footerActiveLinks[i].classList.add('active')
			: footerActiveLinks[i].classList == 'active' &&
			  headerActiveLinks[i].classList.add('active')
	}
}

let footerWidgets
let footerWidgetsTitle

if (
	document.getElementById('footer') &&
	document.getElementById('footerWidgets') &&
	document.getElementById('footerWidgetsTitle')
) {
	footerWidgets = document.getElementById('footerWidgets')
	footerWidgets.innerHTML = ''
	footerWidgetsTitle = document.getElementById('footerWidgetsTitle')
	footerWidgetsTitle.innerHTML = ''

	let footerWidgetLink = []
	footerWidgetsTitle.innerHTML = FS3Widget[0]
	for (let i = 1; i < FS3Widget.length; i++) {
		footerWidgets.innerHTML += `<li><a title='${FS3Widget[i].title}' id='FS3Widget${i}' class='${FS3Widget[i].class}' onclick='footerActiveLink(this)' href=${FS3Widget[i].href}>${FS3Widget[i].title}</a></li>`
	}
	for (let i = 1; i < FS3Widget.length; ++i) {
		footerWidgetLink[i] = document.getElementById(`FS3Widget${i}`)
	}

	const footerActiveLink = (element) => {
		for (let i = 1; i < FS3Widget.length; ++i) {
			footerWidgetLink[i].classList = 'primaryButton'
		}
		element.classList = 'secondaryButton cyan'
	}

	let fLhs = document.getElementById('fLhs')
	fLhs.innerHTML = ``
	fLhs.innerHTML = `
	<p>
	${FS1Lhs[0]}
		<br>
		<br>
	${FS1Lhs[1]}
	</p>
	<ul>
		<li>
			<a href=${FS1Lhs[2]}>
				${FS1Lhs[3]}
			</a>
		</li>
	</ul>
`

	let fRhs = document.getElementById('fRhs')
	fRhs.innerHTML = ``
	for (let i = 0; i < FS1Rhs.length; i++) {
		fRhs.innerHTML += `
		<div class="socialLinks">
			<div class="linkLhs">
				<a href=${FS1Rhs[i].href} class="cyan">
					<img src=${FS1Rhs[i].img} alt=${FS1Rhs[i].alt}>
				</a>
			</div>
			<div class="linkRhs">
				<p>${FS1Rhs[i].title}</p>
				<p>${FS1Rhs[i].para}</p>
			</div>
		</div>
`
	}

	let fs2 = document.getElementById('fs2')
	fs2.innerHTML = ``
	fs2.innerHTML = `<h5>${FS2[0]}</h5>`
	for (let i = 1; i < FS2.length; i++) {
		fs2.innerHTML += `
		<div class="blog">
			<div class="blogLhs">
				<img src=${FS2[i].img} alt=${FS2[i].alt}>
			</div>
			<div class="blogRhs">
				<p class="title">${FS2[i].title}</p>
				<p>${FS2[i].para}</p>
				<p>${FS2[i].date}</p>
			</div>
		</div>
`
	}
	let footerUsefulLinks = document.getElementById('footerUsefulLinks')
	let footerUsefulLinksTitle = document.getElementById('footerUsefulLinksTitle')
	footerUsefulLinks.innerHTML = ``
	footerUsefulLinksTitle.innerHTML = ``

	footerUsefulLinksTitle.innerHTML = FS3Useful[0]
	for (let i = 1; i < FS3Useful.length; i++) {
		footerUsefulLinks.innerHTML += `
<li>
	<a
		title='${FS3Useful[i].title}'
		href=${FS3Useful[i].href}
	>
	${FS3Useful[i].title}
	</a>
</li>
`
	}
	let fs4 = document.getElementById('fs4')
	fs4.innerHTML = ``
	fs4.innerHTML = `<h5>${FS4[0]}</h5>`
	for (let i = 1; i < FS4.length; i++) {
		fs4.innerHTML += `
		<div class="contact">
			<p class="title">${FS4[i].title}</p>
			<p>${FS4[i].para}</p>
			<p>${FS4[i].loc}</p>
		</div>
`
	}
	let date = document.getElementById('__date')
	let currentDate = new Date().getFullYear()
	date.innerHTML = ` ${currentDate} `
}
