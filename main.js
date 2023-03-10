import './sass/main.scss'
import { handleMenuBtn } from './scripts/menuBtn'
import { navMobileOnResize } from './scripts/menuBtn'
import { navMobileOnLogoClick } from './scripts/menuBtn'
import { handleActiveStateChange } from './scripts/menuBtnsIsActive'
import { changeThumbnailsCategoryBtnClick } from './scripts/changeThumnailList'
import { changesOnLogoClicked } from './scripts/changesOnLogoClick'

const init = () => {
	const htmlElements = {
		document: document.defaultView,
		logo: document.querySelector('#logo'),
		menuBtn: document.querySelector('#menu-btn'),
		navMobile: document.querySelector('.nav-mobile'),
		allBtns: document.querySelectorAll('.btn'),
		allThumbnails: document.querySelectorAll('.single-thumbnail'),
	}

	handleMenuBtn(htmlElements.menuBtn, htmlElements.navMobile)
	navMobileOnResize(htmlElements.navMobile, htmlElements.document)
	navMobileOnLogoClick(htmlElements.navMobile, htmlElements.logo)
	handleActiveStateChange(htmlElements.allBtns)
	changeThumbnailsCategoryBtnClick(
		htmlElements.allBtns,
		htmlElements.allThumbnails
	)
	changesOnLogoClicked(
		htmlElements.logo,
		htmlElements.allBtns,
		htmlElements.allThumbnails
	)
}

document.addEventListener('DOMContentLoaded', init)
