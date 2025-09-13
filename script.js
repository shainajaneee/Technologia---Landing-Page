 // Modal Login/Sign-Up
    const loginBtn = document.getElementById('loginBtn');
    const modal = document.getElementById('authModal');
    const closeModal = document.getElementById('closeModal');
    const switchAuth = document.getElementById('switchAuth');
    const modalTitle = document.getElementById('modalTitle');
    const authButton = document.getElementById('authButton');
    let isLogin = true;

    loginBtn.onclick = () => { modal.style.display = 'block'; }
    closeModal.onclick = () => { modal.style.display = 'none'; }
    window.onclick = (e) => { if(e.target == modal) modal.style.display = 'none'; }

    switchAuth.onclick = () => {
      if(isLogin){
        modalTitle.textContent = 'Sign Up';
        authButton.textContent = 'Sign Up';
        switchAuth.textContent = 'Already have an account? Login';
      } else {
        modalTitle.textContent = 'Login';
        authButton.textContent = 'Login';
        switchAuth.textContent = "Don't have an account? Sign Up";
      }
      isLogin = !isLogin;
    }

    // Testimonial Carousel
    const track = document.querySelector('.testimonial-track');
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');
    let index = 0;
    const total = track.children.length;

    nextBtn.onclick = () => {
      index = (index + 1) % total;
      track.style.transform = `translateX(-${index * 100}%)`;
    }
    prevBtn.onclick = () => {
      index = (index - 1 + total) % total;
      track.style.transform = `translateX(-${index * 100}%)`;
    }