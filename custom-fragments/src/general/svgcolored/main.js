const images = fragmentElement.querySelectorAll("img");

  images.forEach(image => {
    fetch(image.src)
    .then(res => res.text())
    .then(data => {
      const parser = new DOMParser();
      const svg = parser.parseFromString(data, 'image/svg+xml').querySelector('svg');
			
			const paths = svg.querySelectorAll("path");
			paths.forEach(path => {
				if (path.getAttribute('fill') == configuration.oldColor) path.setAttribute('fill',configuration.newColor)
				//console.log("-" + path.getAttribute('fill'));
			});

			if (image.id) svg.id = image.id;
      if (image.className) svg.classList = image.classList;

      image.parentNode.replaceChild(svg, image);
    })
    .catch(error => console.error(error))
  });