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
