const javascript = 'javascript:;'
const ext = './'
const Links = [
	{
		title: 'home',
		href: `${ext}index.html`,
		class: '',
	},
	{
		title: 'Pages',
		href: javascript,
		class: '',
	},
	{
		title: 'Portfolio',
		href: javascript,
		class: '',
	},
	{
		title: 'Blog',
		href: javascript,
		class: '',
	},
	{
		title: 'Shop',
		href: javascript,
		class: '',
	},
	{
		title: 'travel',
		href: javascript,
		class: '',
	},
	{
		title: 'shortcodes',
		href: javascript,
		class: '',
	},
	{
		title: 'Features',
		href: javascript,
		class: '',
	},
	{
		title: 'contact',
		href: `${ext}contact.html`,
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
function hideMenu() {
	menuList.classList.remove('rhsActive')
}
function showMenu() {
	menuList.classList.toggle('rhsActive')
}

let hUl = document.getElementById('headerLinks')
let fUl = document.getElementById('footerLinks')
hUl.innerHTML = ''
fUl.innerHTML = ''

let fileName = hUl.attributes.page.nodeValue

// console.log(
// 	'🚀 ~ file: common.js ~ line 217 ~ hUl',
// 	hUl.attributes.page.nodeValue
// )
for (let i = 0; i < Links.length; i++) {
	if (Links[i].title === fileName) {
		Links[i].class = 'active'
	}
	hUl.innerHTML += `<li><a title='${Links[i].title}' id='headerLinks${i}' class='${Links[i].class}' onclick='activeLink(this)' href=${Links[i].href}>${Links[i].title}</a></li>`
	fUl.innerHTML += `<li><a title='${Links[i].title}' id='footerLinks${i}' class='${Links[i].class}' onclick='activeLink(this)' href=${Links[i].href}>${Links[i].title}</a></li>`
}

let headerActiveLinks = [],
	footerActiveLinks = []
for (var i = 0; i <= Links.length; ++i) {
	headerActiveLinks[i] = document.getElementById(`headerLinks${i}`)
	footerActiveLinks[i] = document.getElementById(`footerLinks${i}`)
}
function activeLink(element) {
	for (let i = 0; i < Links.length; i++) {
		headerActiveLinks[i].classList = ''
		footerActiveLinks[i].classList = ''
		element.classList.add('active')
		if (headerActiveLinks[i].classList == 'active') {
			footerActiveLinks[i].classList.add('active')
		} else if (footerActiveLinks[i].classList == 'active') {
			headerActiveLinks[i].classList.add('active')
		}
	}
}

let footerWidgets = document.getElementById('footerWidgets')
let footerWidgetsTitle = document.getElementById('footerWidgetsTitle')
footerWidgetsTitle.innerHTML = ''
footerWidgets.innerHTML = ''

let footerWidgetLink = []
footerWidgetsTitle.innerHTML = FS3Widget[0]
for (let i = 1; i < FS3Widget.length; i++) {
	footerWidgets.innerHTML += `<li><a title='${FS3Widget[i].title}' id='FS3Widget${i}' class='${FS3Widget[i].class}' onclick='footerActiveLink(this)' href=${FS3Widget[i].href}>${FS3Widget[i].title}</a></li>`
}
for (let i = 1; i < FS3Widget.length; ++i) {
	footerWidgetLink[i] = document.getElementById(`FS3Widget${i}`)
}

function footerActiveLink(element) {
	for (var i = 1; i < FS3Widget.length; ++i) {
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
