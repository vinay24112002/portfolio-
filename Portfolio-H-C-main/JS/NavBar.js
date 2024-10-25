function showSideBar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSideBar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const targetPosition = targetElement.offsetTop;
      const currentPosition = window.pageYOffset;
      const scrollDuration = 1500; // Adjust scroll duration (milliseconds) as needed
  
      const scrollAnimation = () => {
        const timeElapsed = Date.now() - startTime;
        const progress = Math.min(timeElapsed / scrollDuration, 1);
        const newPosition = currentPosition + (targetPosition - currentPosition) * progress;
        window.scrollTo(0, newPosition);
  
        if (timeElapsed < scrollDuration) {
          window.requestAnimationFrame(scrollAnimation);
        }
      };
  
      const startTime = Date.now();
      window.requestAnimationFrame(scrollAnimation);
    }
  }