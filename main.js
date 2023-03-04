import './sass/main.scss'
import { handleMenuBtn } from './scripts/menuBtn'
import { navMobileOnResize } from './scripts/menuBtn'
import { navMobileOnLogoClick } from './scripts/menuBtn'

const init = () => {
	
	const htmlElements = {
		document: document.defaultView,
		logo: document.querySelector('#logo'),
		menuBtn: document.querySelector('#menu-btn'),
		navMobile: document.querySelector('.nav-mobile'),
	}

	handleMenuBtn(htmlElements.menuBtn, htmlElements.navMobile)
	navMobileOnResize(htmlElements.navMobile, htmlElements.document)
	navMobileOnLogoClick(htmlElements.navMobile, htmlElements.logo)
}

document.addEventListener('DOMContentLoaded', init)
