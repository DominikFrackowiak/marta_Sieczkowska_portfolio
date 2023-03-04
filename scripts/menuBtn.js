const removeActive = el => {
	if (el.classList.contains('active')) {
		el.classList.remove('active')
	}
}

export const handleMenuBtn = (menuBtn, navMobile) => {
	menuBtn.addEventListener('click', () => {
		navMobile.classList.toggle('active')
	})
}

export const navMobileOnResize = (navMobile, document) => {
	document.addEventListener('resize', () => removeActive(navMobile))
}

export const navMobileOnLogoClick = (navMobile, logo) => {
	if (logo) {
		logo.addEventListener('click', () => removeActive(navMobile))
	}
}
