import { handleThumbnailsDisplayStatus } from './changeThumnailList'

export const changesOnLogoClicked = (logo, btns, thumbnails) => {
	logo.addEventListener('click', () => {
		const allActive = document.querySelectorAll('.active')
		allActive.forEach(active => active.classList.remove('active'))

		btns.forEach(btn => {
			handleThumbnailsDisplayStatus(btn, thumbnails)
		})
	})
}
