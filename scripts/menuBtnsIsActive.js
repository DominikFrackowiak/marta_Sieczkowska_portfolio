export const handleActiveStateChange = elements => {
	elements.forEach(el => {
		el.addEventListener('click', () => {
			const isActive = el.classList.contains('active')
			elements.forEach(el => el.classList.remove('active'))
			if (!isActive) {
				el.classList.add('active')
			}
		})
	})
}
