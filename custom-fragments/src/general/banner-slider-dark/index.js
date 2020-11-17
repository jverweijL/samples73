/**
 * Copyright (c) 2000-present Liferay, Inc. All rights reserved.
 *
 * This library is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation; either version 2.1 of the License, or (at your option)
 * any later version.
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */

const slide = fragmentElement.querySelector('.slide');
const indicators = Array.from(
	fragmentElement.querySelectorAll('.carousel-indicators > li')
);
const carouselControls = Array.from(
	fragmentElement.querySelectorAll(
		'.carousel-control-prev, .carousel-control-next'
	)
);
const carouselId = fragmentElement.id + '-carousel';

slide.id = carouselId;
indicators.forEach(function(indicator) {
	indicator.dataset.target = '#' + carouselId;
});
carouselControls.forEach(function(control) {
	control.href = '#' + carouselId;
});

slide.classList.add('carousel');

if (document.querySelector('.has-edit-mode-menu')) {
	$(slide).carousel('pause');
	$('.carousel').off('keydown.bs.carousel');
} else {
	$(slide).carousel({ride: 'carousel'});
}