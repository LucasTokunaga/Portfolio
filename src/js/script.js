  const destaqueHeadings = document.querySelectorAll('.destaque');

  destaqueHeadings.forEach((heading) => {
    heading.addEventListener('mouseenter', () => {
      heading.style.transform = 'scale(1.1)';
      heading.style.transition = 'transform 0.3s';
      heading.style.textDecoration = 'underline';
      heading.style.textDecorationColor = '#FFC0CB';
    });

    heading.addEventListener('mouseleave', () => {
      heading.style.transform = 'scale(1)';
      heading.style.transition = 'transform 0.3s';
      heading.style.textDecoration = 'none';
    });
  });


  


