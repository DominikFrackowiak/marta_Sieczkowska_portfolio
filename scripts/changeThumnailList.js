export const handleThumbnailsDisplayStatus = (btn, thumbnails) => {
	const thumbIllustration = document.querySelectorAll('.thumb-illustration')
	const thumbDesign = document.querySelectorAll('.thumb-design')

	const isActive = btn.classList.contains('active')

	if (isActive) {
		thumbIllustration.forEach(thumbnail => {
			thumbnail.style.display = btn.classList.contains('btn-illustration')
				? 'none'
				: 'block'
		})

		thumbDesign.forEach(thumbnail => {
			thumbnail.style.display = btn.classList.contains('btn-graphic-design')
				? 'none'
				: 'block'
		})
	} else {
		thumbnails.forEach(thumbnail => (thumbnail.style.display = 'block'))
	}
}

export const changeThumbnailsCategoryBtnClick = (btns, thumbnails) => {
	btns.forEach(btn => {
		btn.addEventListener('click', () => {
			handleThumbnailsDisplayStatus(btn, thumbnails)
		})
	})
}
