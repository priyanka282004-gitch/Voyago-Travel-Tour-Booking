/* ==========================================================================
   VOYAGO — Travel & Tour Booking Platform
   Vanilla JavaScript Controller (Frontend Portfolio Demo)
   ========================================================================== */

/**
 * --------------------------------------------------------------------------
 * Centralized Single Source of Truth for Destination Data
 * --------------------------------------------------------------------------
 */
const DESTINATIONS_DATA = [
  {
    id: 'madurai',
    name: 'Madurai',
    location: 'Tamil Nadu, India',
    category: 'tamil-nadu cultural',
    description: 'Historic temple city of Tamil Nadu featuring the majestic Meenakshi Amman Temple towers and bazaars.',
    price: '₹16,999',
    badge: 'Heritage',
    image: 'images/Madurai.avif',
    alt: 'Madurai Meenakshi Amman Temple'
  },
  {
    id: 'kanyakumari',
    name: 'Kanyakumari',
    location: 'Tamil Nadu, India',
    category: 'tamil-nadu coastal',
    description: 'Southernmost tip of mainland India, famed for the Vivekananda Rock Memorial and tri-sea sunrise.',
    price: '₹15,500',
    badge: 'Coastal Landmark',
    image: 'images/Kanyakumari.webp',
    alt: 'Kanyakumari Vivekananda Rock Memorial'
  },
  {
    id: 'thanjavur',
    name: 'Thanjavur',
    location: 'Tamil Nadu, India',
    category: 'tamil-nadu cultural',
    description: 'Chola dynasty capital boasting the UNESCO World Heritage Brihadeeswarar Great Living Chola Temple.',
    price: '₹15,999',
    badge: 'UNESCO Heritage',
    image: 'images/Thanjavur.webp',
    alt: 'Thanjavur Brihadeeswarar Temple'
  },
  {
    id: 'ooty',
    name: 'Ooty (Udhagamandalam)',
    location: 'Tamil Nadu, India',
    category: 'tamil-nadu mountain',
    description: 'Queen of Hill Stations featuring rolling Nilgiri tea gardens, Ooty Lake boating, and heritage toy train.',
    price: '₹18,500',
    badge: 'Hill Station',
    image: 'images/Ooty.jpg',
    alt: 'Ooty Nilgiri Hills tea plantations'
  },
  {
    id: 'kodaikanal',
    name: 'Kodaikanal',
    location: 'Tamil Nadu, India',
    category: 'tamil-nadu mountain',
    description: 'Princess of Hill Stations featuring star-shaped Kodaikanal Lake, Coaker\'s Walk, and dense pine forests.',
    price: '₹19,000',
    badge: 'Nature Retreat',
    image: 'images/Kodaikanal.jpg',
    alt: 'Kodaikanal lake and pine forest'
  },
  {
    id: 'rameshwaram',
    name: 'Rameshwaram',
    location: 'Tamil Nadu, India',
    category: 'tamil-nadu cultural',
    description: 'Island town connected by the iconic Pamban Sea Bridge, famed for Ramanathaswamy Temple corridors.',
    price: '₹17,500',
    badge: 'Coastal Pilgrimage',
    image: 'images/Rameshwaram.jpg',
    alt: 'Rameshwaram Ramanathaswamy Temple'
  },
  {
    id: 'delhi',
    name: 'Delhi & Agra',
    location: 'North India',
    category: 'cultural heritage',
    description: 'Explore India\'s historic capital and experience the magnificent Taj Mahal in nearby Agra, combining Mughal heritage, iconic landmarks and vibrant North Indian culture.',
    price: '₹22,999',
    badge: 'Heritage & Wonders',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
    alt: 'Taj Mahal in Agra, India'
  },
  {
    id: 'munnar',
    name: 'Munnar',
    location: 'Kerala, India',
    category: 'kerala mountain',
    description: 'Lush green tea plantations, misty mountain valleys, Anamudi Peak, and rare Neelakurinji blooms.',
    price: '₹21,000',
    badge: 'Tea Plantations',
    image: 'images/Munnar.webp',
    alt: 'Munnar tea plantations in Kerala'
  },
  {
    id: 'wayanad',
    name: 'Wayanad',
    location: 'Kerala, India',
    category: 'kerala mountain',
    description: 'Mist-clad mountains, ancient Edakkal Caves, spice plantations, and cascading Western Ghats waterfalls.',
    price: '₹19,500',
    badge: 'Western Ghats',
    image: 'images/Wayanad.jpg',
    alt: 'Wayanad Western Ghats landscape'
  },
  {
    id: 'alappuzha',
    name: 'Alappuzha (Alleppey)',
    location: 'Kerala, India',
    category: 'kerala beach',
    description: 'Venice of the East famous for traditional luxury houseboat cruises along palm-fringed backwaters.',
    price: '₹24,000',
    badge: 'Backwaters',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
    alt: 'Alleppey Kerala backwaters houseboat'
  },
  {
    id: 'kovalam',
    name: 'Kovalam',
    location: 'Kerala, India',
    category: 'kerala beach',
    description: 'Iconic red-striped lighthouse beach, crescent bay, and oceanfront Ayurvedic wellness spas.',
    price: '₹22,500',
    badge: 'Beach Resort',
    image: 'images/Kovalam.jpg',
    alt: 'Kovalam Lighthouse Beach Kerala'
  },
  {
    id: 'varkala',
    name: 'Varkala',
    location: 'Kerala, India',
    category: 'kerala beach',
    description: 'Dramatic red sandstone cliffs overlooking the Arabian Sea, golden sands, and yoga centers.',
    price: '₹20,500',
    badge: 'Cliff Beach',
    image: 'images/Varkala.avif',
    alt: 'Red sandstone cliff overlooking Arabian Sea in Varkala'
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    location: 'Rajasthan, India',
    category: 'cultural',
    description: 'The Pink City featuring grand Amber Fort, Hawa Mahal, royal palaces, and vibrant bazaars.',
    price: '₹22,000',
    badge: 'Heritage',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80',
    alt: 'Jaipur Hawa Mahal'
  },
  {
    id: 'goa',
    name: 'Goa Coast',
    location: 'Goa, India',
    category: 'beach',
    description: 'Sun-kissed palm beaches, Portuguese heritage churches, water sports, and beach shacks.',
    price: '₹25,000',
    badge: 'Coastal',
    image: 'images/Goa.avif',
    alt: 'Tropical palm beach in Goa'
  },
  {
    id: 'manali',
    name: 'Manali Valley',
    location: 'Himachal Pradesh, India',
    category: 'mountain',
    description: 'High-altitude Himalayan valley, pine scented breezes, rivers, and winter skiing slopes.',
    price: '₹18,999',
    badge: 'Himalayas',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
    alt: 'Manali Himalayas snow peaks'
  },
  {
    id: 'bali',
    name: 'Bali Island',
    location: 'Bali, Indonesia',
    category: 'beach cultural',
    description: 'Tropical beaches, iconic terraced rice paddies, and sacred spiritual temples.',
    price: '₹34,999',
    badge: 'Featured',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    alt: 'Bali rice terraces and temple'
  },
  {
    id: 'paris',
    name: 'Paris',
    location: 'Paris, France',
    category: 'cultural',
    description: 'The City of Light known for romance, world-class art, fashion, and Eiffel Tower views.',
    price: '₹68,500',
    badge: 'Featured',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
    alt: 'Eiffel Tower Paris skyline'
  },
  {
    id: 'dubai',
    name: 'Dubai',
    location: 'Dubai, UAE',
    category: 'luxury',
    description: 'Ultramodern architecture, desert safari adventures, and opulent resort stays.',
    price: '₹54,999',
    badge: 'Featured',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    alt: 'Dubai Burj Khalifa skyline'
  },
  {
    id: 'maldives',
    name: 'Maldives Islands',
    location: 'Maldives',
    category: 'beach luxury',
    description: 'Pristine coral reefs, crystal turquoise lagoons, and private overwater bungalow retreats.',
    price: '₹72,000',
    badge: 'Featured',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80',
    alt: 'Maldives overwater bungalows'
  }
];

// Global Filter State
let currentSelectedCategory = 'all';
let currentSearchText = '';

document.addEventListener('DOMContentLoaded', () => {
  // 0. Single Source of Truth Dynamic Cards Renderer
  renderAllDestinations();

  // 1. Dynamic Destination Details Page Loader
  initDestinationDetailsPage();

  // 2. Sticky Glassmorphism Navbar Scroll Controller
  initNavbarScroll();
  
  // 3. Active Navigation Link Highlighting
  setActiveNavLink();
  
  // 4. Floating Search Form Handler (Home Page)
  initHeroSearchForm();

  // 5. Live Search Input & URL Query Filter for Destinations Page
  initLiveDestinationSearch();
  
  // 6. Category Filter Buttons (Destinations & Tours Pages)
  initFilterSystem();

  // 7. Contact Form Validation & Success Modal
  initContactForm();

  // 8. Booking Form Validation & Success Modal
  initBookingForm();

  // 9. Newsletter Form Listener
  initNewsletterForm();
});

/**
 * Renders all Destination Cards across index.html and destinations.html
 * from the master DESTINATIONS_DATA array (Single Source of Truth)
 */
function renderAllDestinations() {
  const catalogGrid = document.getElementById('destinationsGrid');
  const spotlightGrid = document.getElementById('spotlightGrid');

  if (catalogGrid) {
    catalogGrid.innerHTML = `
      <div id="noResultsMessage" class="col-12 text-center py-5 d-none">
        <div class="p-5 bg-white rounded-4 border shadow-sm max-w-600 mx-auto">
          <i class="bi bi-search fs-1 text-muted d-block mb-3"></i>
          <h4 class="font-serif mb-2">No destinations found</h4>
          <p class="text-muted fs-6 mb-0">We couldn't find any destinations matching your search or category filter. Try searching for "Thanjavur", "Madurai", "Munnar", "Kanyakumari", "Ooty", "Goa", or "Bali".</p>
        </div>
      </div>
    `;

    DESTINATIONS_DATA.forEach(dest => {
      const cardCol = document.createElement('div');
      cardCol.className = 'col-lg-4 col-md-6 filterable-item';
      cardCol.setAttribute('data-category', dest.category);

      const fallbackUrl = dest.fallbackImage || dest.image;

      cardCol.innerHTML = `
        <div class="destination-card">
          <div class="destination-img-wrapper">
            <img src="${dest.image}" alt="${dest.alt}" onerror="this.onerror=null; this.src='${fallbackUrl}';">
            <span class="badge-location"><i class="bi bi-geo-alt-fill"></i> ${dest.location.split(',')[0]}</span>
            <span class="badge-rating"><i class="bi bi-star-fill"></i> ${dest.badge}</span>
          </div>
          <div class="destination-card-body">
            <h3>${dest.name}</h3>
            <p>${dest.description}</p>
            <div class="destination-card-footer">
              <div class="price-tag">
                <span class="label">Sample Package</span>
                <span class="amount">${dest.price}</span>
              </div>
              <a href="destination-details.html?name=${encodeURIComponent(dest.id)}" class="btn btn-sm btn-vy-primary">Explore Destination</a>
            </div>
          </div>
        </div>
      `;
      catalogGrid.appendChild(cardCol);
    });
  }

  if (spotlightGrid) {
    spotlightGrid.innerHTML = '';
    const spotlightIds = ['madurai', 'munnar', 'thanjavur', 'kanyakumari'];
    const spotlightItems = DESTINATIONS_DATA.filter(d => spotlightIds.includes(d.id));

    spotlightItems.forEach(dest => {
      const cardCol = document.createElement('div');
      cardCol.className = 'col-lg-3 col-md-6 filterable-item';
      cardCol.setAttribute('data-category', dest.category);

      const fallbackUrl = dest.fallbackImage || dest.image;

      cardCol.innerHTML = `
        <div class="destination-card">
          <div class="destination-img-wrapper">
            <img src="${dest.image}" alt="${dest.alt}" onerror="this.onerror=null; this.src='${fallbackUrl}';">
            <span class="badge-location"><i class="bi bi-geo-alt-fill"></i> ${dest.location.split(',')[0]}</span>
            <span class="badge-rating"><i class="bi bi-star-fill text-warning"></i> ${dest.badge}</span>
          </div>
          <div class="destination-card-body">
            <h3>${dest.name}</h3>
            <p>${dest.description}</p>
            <div class="destination-card-footer">
              <div class="price-tag">
                <span class="label">Sample Package</span>
                <span class="amount">${dest.price}</span>
              </div>
              <a href="destination-details.html?name=${encodeURIComponent(dest.id)}" class="btn btn-sm btn-vy-primary">Explore</a>
            </div>
          </div>
        </div>
      `;
      spotlightGrid.appendChild(cardCol);
    });
  }
}

/**
 * Dynamic Destination Details Page Loader (destination-details.html)
 */
function initDestinationDetailsPage() {
  const destTitleEl = document.getElementById('destTitle');
  if (!destTitleEl) return;

  const urlParams = new URLSearchParams(window.location.search);
  const destParam = (urlParams.get('name') || urlParams.get('dest') || 'delhi').toLowerCase().trim();

  const destData = DESTINATIONS_DATA.find(d => d.id === destParam || d.name.toLowerCase().includes(destParam)) || DESTINATIONS_DATA.find(d => d.id === 'delhi');

  if (destData) {
    destTitleEl.textContent = destData.name;

    const breadcrumbEl = document.getElementById('breadcrumbDestName');
    if (breadcrumbEl) breadcrumbEl.textContent = `${destData.name}, ${destData.location}`;

    const badgeEl = document.getElementById('destRegionBadge');
    if (badgeEl) badgeEl.innerHTML = `<i class="bi bi-geo-alt-fill me-1"></i> ${destData.location}`;

    const priceEl = document.getElementById('destPrice');
    if (priceEl) priceEl.textContent = destData.price;

    const mainImgEl = document.getElementById('destMainImg');
    if (mainImgEl) {
      mainImgEl.src = destData.image;
      mainImgEl.alt = destData.alt;
    }

    const descLeadEl = document.getElementById('destDescLead');
    if (descLeadEl) descLeadEl.textContent = destData.description;
  }
}

/**
 * Handles Navbar Background & Shadow Transition on Scroll
 */
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar-voyago');
  if (!navbar) return;

  if (navbar.classList.contains('navbar-solid')) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  handleScroll();
  window.addEventListener('scroll', handleScroll);
}

/**
 * Highlights Active Navigation Link based on current page URL
 */
function setActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/**
 * Floating Search Panel Form Handler (Home Page)
 * Validates search input and redirects to destinations.html?search=<encoded-search-term>
 */
function initHeroSearchForm() {
  const searchForm = document.getElementById('heroSearchForm');
  if (!searchForm) return;

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const destinationInput = document.getElementById('searchDestination');
    const destination = destinationInput ? destinationInput.value.trim() : '';

    if (!destination) {
      searchForm.classList.add('was-validated');
      if (destinationInput) destinationInput.focus();
      return;
    }

    searchForm.classList.remove('was-validated');
    window.location.href = `destinations.html?search=${encodeURIComponent(destination)}`;
  });
}

/**
 * Applies Combined Filtering (Category Chips + Live Search Input)
 * Filters all .filterable-item elements across destinations.html
 */
function applyCombinedFilters() {
  const filterableItems = document.querySelectorAll('.filterable-item');
  const noResultsMsg = document.getElementById('noResultsMessage');
  
  let visibleCount = 0;
  const term = currentSearchText.toLowerCase().trim();

  filterableItems.forEach(item => {
    const cardCategoryAttr = item.getAttribute('data-category') || '';
    const categories = cardCategoryAttr.toLowerCase().split(' ');

    const title = item.querySelector('h3')?.textContent.toLowerCase() || '';
    const desc = item.querySelector('p')?.textContent.toLowerCase() || '';
    const location = item.querySelector('.badge-location')?.textContent.toLowerCase() || '';

    // Category matching check
    const selectedCat = currentSelectedCategory.toLowerCase().trim();
    const categoryMatches = (
      selectedCat === 'all' ||
      categories.includes(selectedCat) ||
      cardCategoryAttr.toLowerCase().includes(selectedCat) ||
      (selectedCat === 'south-india' && (cardCategoryAttr.toLowerCase().includes('tamil-nadu') || cardCategoryAttr.toLowerCase().includes('kerala')))
    );

    // Search text matching check (against name AND description AND location AND keywords)
    const searchMatches = !term || (
      title.includes(term) ||
      desc.includes(term) ||
      location.includes(term) ||
      categories.some(c => c.includes(term)) ||
      (term.includes('taj') && title.includes('delhi')) ||
      (term.includes('agra') && title.includes('delhi'))
    );

    if (categoryMatches && searchMatches) {
      item.style.display = 'block';
      visibleCount++;
    } else {
      item.style.display = 'none';
    }
  });

  if (noResultsMsg) {
    if (visibleCount === 0) {
      noResultsMsg.classList.remove('d-none');
    } else {
      noResultsMsg.classList.add('d-none');
    }
  }
}

/**
 * Live Text Search Filter for Destinations Page (input & keyup events)
 */
function initLiveDestinationSearch() {
  const searchInput = document.getElementById('destinationSearchInput');
  if (!searchInput) return;

  // Read URL parameters for "search" on load
  const urlParams = new URLSearchParams(window.location.search);
  const searchParam = urlParams.get('search');

  if (searchParam) {
    searchInput.value = searchParam;
    currentSearchText = searchParam;
  }

  const handleSearchInput = (e) => {
    currentSearchText = e.target.value;
    applyCombinedFilters();
  };

  searchInput.addEventListener('input', handleSearchInput);
  searchInput.addEventListener('keyup', handleSearchInput);

  if (searchParam) {
    applyCombinedFilters();
  }
}

/**
 * Category Filter Buttons Handler (All, Tamil Nadu, Kerala, Beach, Mountain, Cultural, Luxury)
 */
function initFilterSystem() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!filterBtns.length) return;

  // Read URL query parameter on page load
  const urlParams = new URLSearchParams(window.location.search);
  const presetCategory = urlParams.get('category') || urlParams.get('filter');
  if (presetCategory) {
    currentSelectedCategory = presetCategory;
  }

  // Sync button active styles
  filterBtns.forEach(btn => {
    const filterValue = btn.getAttribute('data-filter');
    if (filterValue === currentSelectedCategory) {
      btn.classList.add('active', 'btn-vy-primary');
      btn.classList.remove('btn-vy-outline-dark');
    } else {
      btn.classList.remove('active', 'btn-vy-primary');
      btn.classList.add('btn-vy-outline-dark');
    }

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const clickedCategory = btn.getAttribute('data-filter');
      currentSelectedCategory = clickedCategory;

      // Update button active styles
      filterBtns.forEach(b => {
        if (b.getAttribute('data-filter') === clickedCategory) {
          b.classList.add('active', 'btn-vy-primary');
          b.classList.remove('btn-vy-outline-dark');
        } else {
          b.classList.remove('active', 'btn-vy-primary');
          b.classList.add('btn-vy-outline-dark');
        }
      });

      // Update URL query parameter
      const url = new URL(window.location);
      if (clickedCategory === 'all') {
        url.searchParams.delete('category');
        url.searchParams.delete('filter');
      } else {
        url.searchParams.set('category', clickedCategory);
      }
      window.history.pushState({}, '', url);

      // Re-filter cards
      applyCombinedFilters();
    });
  });

  applyCombinedFilters();
}

/**
 * Contact Form Validation & Success Modal Handler
 */
function initContactForm() {
  const contactForm = document.getElementById('voyagoContactForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!contactForm.checkValidity()) {
      e.stopPropagation();
      contactForm.classList.add('was-validated');
      return;
    }

    const modalEl = document.getElementById('contactSuccessModal');
    if (modalEl && typeof bootstrap !== 'undefined') {
      const modal = new bootstrap.Modal(modalEl);
      modal.show();
    }

    contactForm.reset();
    contactForm.classList.remove('was-validated');
  });
}

/**
 * Booking Form Handler & Success Modal Preview
 */
function initBookingForm() {
  const bookingForm = document.getElementById('voyagoBookingForm');
  if (!bookingForm) return;

  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!bookingForm.checkValidity()) {
      e.stopPropagation();
      bookingForm.classList.add('was-validated');
      return;
    }

    const fullName = document.getElementById('bookingName')?.value.trim() || 'Traveler';
    const destination = document.getElementById('bookingDestination')?.value || 'Destination';
    const tourPackage = document.getElementById('bookingPackage')?.value || 'Standard Package';
    const travelDate = document.getElementById('bookingDate')?.value || 'Selected Date';
    const travelers = document.getElementById('bookingTravelers')?.value || '1';

    const modalName = document.getElementById('modalTravelerName');
    const modalSummary = document.getElementById('modalTourSummary');
    
    if (modalName) modalName.textContent = fullName;
    if (modalSummary) {
      modalSummary.textContent = `${tourPackage} (${destination}) for ${travelers} guest(s) on ${travelDate}.`;
    }

    const modalEl = document.getElementById('bookingSuccessModal');
    if (modalEl && typeof bootstrap !== 'undefined') {
      const modal = new bootstrap.Modal(modalEl);
      modal.show();
    }

    bookingForm.reset();
    bookingForm.classList.remove('was-validated');
  });
}

/**
 * Newsletter Form Handler
 */
function initNewsletterForm() {
  const newsletterForms = document.querySelectorAll('.newsletter-form');
  
  newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');
      const btn = form.querySelector('button');

      if (!emailInput || !emailInput.value) return;

      const originalBtnText = btn ? btn.innerHTML : 'Subscribe';
      if (btn) {
        btn.innerHTML = '<i class="bi bi-check-circle-fill me-2"></i>Subscribed!';
        btn.classList.replace('btn-vy-accent', 'btn-success');
      }

      emailInput.value = '';

      setTimeout(() => {
        if (btn) {
          btn.innerHTML = originalBtnText;
          btn.classList.replace('btn-success', 'btn-vy-accent');
        }
      }, 3000);
    });
  });
}
