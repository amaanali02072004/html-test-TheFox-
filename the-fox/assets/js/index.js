const AdLinks = [
	{
		title: 'Fully responsive',
		href: javascript,
	},
]
const PortfolioHeadLinks = [
	{
		title: 'all',
		href: javascript,
		class: 'large secondaryButton cyan',
	},
	{
		title: 'Web Design',
		href: javascript,
		class: 'large primaryButton',
	},
	{
		title: 'Graphic Design',
		href: javascript,
		class: 'large primaryButton',
	},
	{
		title: 'WordPress',
		href: javascript,
		class: 'large primaryButton',
	},
	{
		title: 'Photography',
		href: javascript,
		class: 'large primaryButton',
	},
]
const Cards = [
	{
		heading: 'Creative Team profile',
		img: './assets/images/camera.png',
		alt: 'camera icon',
		para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos minima nam praesentium laborum quisquam, consequuntur laboriosam fugiat cupiditate.Nostrum, error? quisquam, consequuntur laboriosam fugiat cupiditate.Nostrum, error?',
	},
	{
		heading: 'Creative Team profile',
		img: './assets/images/camera.png',
		alt: 'camera icon',
		para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos minima nam praesentium laborum quisquam, consequuntur laboriosam fugiat cupiditate.Nostrum, error? quisquam, consequuntur laboriosam fugiat cupiditate.Nostrum, error?',
	},
	{
		heading: 'Creative Team profile',
		img: './assets/images/camera.png',
		alt: 'camera icon',
		para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos minima nam praesentium laborum quisquam, consequuntur laboriosam fugiat cupiditate.Nostrum, error? quisquam, consequuntur laboriosam fugiat cupiditate.Nostrum, error?',
	},
	{
		heading: 'Creative Team profile',
		img: './assets/images/camera.png',
		alt: 'camera icon',
		para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos minima nam praesentium laborum quisquam, consequuntur laboriosam fugiat cupiditate.Nostrum, error? quisquam, consequuntur laboriosam fugiat cupiditate.Nostrum, error?',
	},
	{
		heading: 'Creative Team profile',
		img: './assets/images/camera.png',
		alt: 'camera icon',
		para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos minima nam praesentium laborum quisquam, consequuntur laboriosam fugiat cupiditate.Nostrum, error? quisquam, consequuntur laboriosam fugiat cupiditate.Nostrum, error?',
	},
	{
		heading: 'Creative Team profile',
		img: './assets/images/camera.png',
		alt: 'camera icon',
		para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos minima nam praesentium laborum quisquam, consequuntur laboriosam fugiat cupiditate.Nostrum, error? quisquam, consequuntur laboriosam fugiat cupiditate.Nostrum, error?',
	},
]
let advertLinks = document.getElementById('adLinks')
advertLinks.innerHTML = ''
for (let i = 0; i < 40; i++) {
	advertLinks.innerHTML += `<li><a title='${AdLinks[0].title}' href=${AdLinks[0].href}>${AdLinks[0].title}</a></li>`
}

let burger = document.getElementById('hamburger')

let banner = document.getElementById('banner')
banner.setAttribute(
	'class',
	'bannerOuterWrapper banner0 banner1 banner2 banner3 banner-1'
)
let bannerPosition = 0
let bannerLengthMin = -1
let bannerLengthMax = 4
let seconds = 5
let bannerDuration = seconds * 1000
let timer

const changeBanner0 = () => {
	bannerPosition == bannerLengthMin && (bannerPosition = bannerLengthMax)

	bannerPosition--
	banner.classList = `bannerOuterWrapper banner${bannerPosition}`
}

const changeBanner2 = () => {
	bannerPosition++
	bannerPosition == bannerLengthMax && (bannerPosition = bannerLengthMin)

	banner.classList = `bannerOuterWrapper banner${bannerPosition}`
}

if (banner?.attributes?.autoplay?.nodeValue === 'true') {
	timer = setInterval(() => {
		changeBanner2()
	}, bannerDuration)
}

let cardsSection = document.getElementById('cardsSectionInnerWrapper')
cardsSection.innerHTML = ''

for (let i = 0; i < Cards.length; i++) {
	cardsSection.innerHTML += `
				<div class="cardWrapper">
					<div class="cardHeadWrapper">
						<img src=${Cards[i].img} alt='${Cards[i].alt}'>
						<h5>${Cards[i].heading}</h5>
					</div>
					<p>${Cards[i].para}</p>
				</div>
`
}
let uhsHidden = document.getElementById('uhsHidden')
const loadMore = () => {
	uhsHidden.classList.remove('hidden')
}

let portfolioHead = document.getElementById('portfolioHeadLinks')
portfolioHead.innerHTML = ``
for (let i = 0; i < PortfolioHeadLinks.length; i++) {
	portfolioHead.innerHTML += `
		<a title='${PortfolioHeadLinks[i].title}'
			id='portfolioLink${i}'
			class='${PortfolioHeadLinks[i].class}'
			onclick='portfolioActiveLink(this)'
			href=${PortfolioHeadLinks[i].href}
		>
			${PortfolioHeadLinks[i].title}
		</a>
`
}
let portfolioLink = []
for (let i = 0; i < PortfolioHeadLinks.length; ++i) {
	portfolioLink[i] = document.getElementById(`portfolioLink${i}`)
}
const portfolioActiveLink = element => {
	for (let i = 0; i < PortfolioHeadLinks.length; i++) {
		portfolioLink[i].classList = 'large primaryButton'
	}
	element.classList = 'large secondaryButton cyan'
}

let Name = document.getElementById('Name')
let Email = document.getElementById('Email')
let Message = document.getElementById('Message')

alertSubmit(Name,'Submit')
alertSubmit(Email,'Submit')
// alertSubmit(Message,'Submit')

// Name.addEventListener('keypress', (event) => {
// 	event.key === 'Enter' && document.getElementById('Submit').click()
// })
// Email.addEventListener('keypress', (event) => {
// 	event.key === 'Enter' && document.getElementById('Submit').click()
// })
// Message.addEventListener("keypress",  (event)=> {
// event.key === 'Enter' && document.getElementById('Submit').click()
// });

let form = document.getElementById('form')
const submitForm = event => {
	if (Name.value == '') {
		alert('Enter Your Name!')
		Name.focus()
	} else if (Email.value == '') {
		alert('Enter Your Email!')
		Email.focus()
	} else if (Message.value == '') {
		alert('Enter Your Message!')
		Message.focus()
	} else {
		// alert('Your Form has been submitted')
		// form.setAttribute('action', 'php.php')
		// form.setAttribute('method', 'post')
		// form.setAttribute('target', '_blank')
		let user = { name: Name.value, email: Email.value, message: Message.value }
		console.log(user)
		Name.value = ''
		Email.value = ''
		Message.value = ''
	}
}
