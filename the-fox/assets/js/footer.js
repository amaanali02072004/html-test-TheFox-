if (document.getElementById('footer')) {
	let footer = document.getElementById('footer')
	footer.setAttribute('onclick', 'hideMenu(this)')
	footer.innerHTML = `
		<div class="primaryFooterOuterWrapper">
			<div class="container">
				<div class="primaryFooterInnerWrapper">
					<div>
						<div class="footerSection section1">
							<img src="./assets/images/fox-logo.png" alt="logo">
							<div class="lhs" id="fLhs">
								<ul>
									(dependancy of 'common.js' module is missing, it may lead to errors/bugs, pls import it)
								</ul>
							</div>
							<div class="rhs" id="fRhs">
							</div>
						</div>
						<div class="footerSection section2" id="fs2">
							<div class="blog">
								<div class="blogLhs">
								</div>
								<div class="blogRhs">
								</div>
							</div>
						</div>
					</div>
					<div>
						<div class="footerSection section3">
							<h5 id="footerWidgetsTitle"><i>loading...</i></h5>
							<div class="footerWidgets">
								<ul id="footerWidgets">

(dependancy of 'common.js' module is missing, it may lead to errors/bugs, pls import it)
								</ul>
							</div>
							<h5 id="footerUsefulLinksTitle"><i>loading...</i></h5>
							<div class="footerLinks">
								<ul id="footerUsefulLinks">

(dependancy of 'common.js' module is missing, it may lead to errors/bugs, pls import it)
								</ul>
							</div>
						</div>
						<div class="footerSection section4" id="fs4">
							<div class="contact">
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="secondaryFooterOuterWrapper">
				<div class="container">
					<div class="secondaryFooterInnerWrapper">
						<div class="lhs">
							<p>Copyright
							<p id="__date" style="margin: 0 4px;">2014</p> <a href="https://github.com/Killer-Amaan-Ali/html-test"
								target="_blank">the<b>fox</b></a></p>&nbsp|&nbsp
							<p>All rights reserved</p>&nbsp|&nbsp
							<p>designed by <a href="https://github.com/Killer-Amaan-Ali/" target="_blank">Amaan</a></p>
						</div>
						<div class="rhs">
							<ul id="footerLinks">

(dependancy of 'common.js' module is missing, it may lead to errors/bugs, pls import it)
							</ul>
						</div>
					</div>
				</div>
			</div>
`
}
