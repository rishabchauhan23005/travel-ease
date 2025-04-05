const places = [
    {
      title: "Agra - Taj Mahal",
      img: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80",
      desc: "Witness the epitome of love with a guided trip to the Taj Mahal.",
    },
    {
      title: "Goa - Beaches & Parties",
      img: "https://images.unsplash.com/photo-1704703336571-4c47c4aa73fe?q=80",
      desc: "Relax on golden beaches and party all night in Goa.",
    },
    {
      title: "Manali - Snow Paradise",
      img: "https://images.unsplash.com/photo-1712388430474-ace0c16051e2?q=80",
      desc: "Experience the Himalayas and snow adventures.",
    },
    {
      title: "Kashmir - Heaven on Earth",
      img: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80",
      desc: "Enjoy shikara rides and scenic valleys in Kashmir.",
    },
    {
      title: "Jaipur - Pink City",
      img: "https://images.unsplash.com/photo-1602339752474-f77aa7bcaecd?q=80",
      desc: "Explore royal palaces, forts, and vibrant markets.",
    },
    {
      title: "Kerala - Backwaters",
      img: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80",
      desc: "Cruise through the serene backwaters of Kerala.",
    },
    {
      title: "Andaman Islands",
      img: "https://images.unsplash.com/photo-1642498232612-a837df233825?q=80",
      desc: "Dive into crystal-clear waters and coral reefs.",
    },
    {
      title: "Leh-Ladakh",
      img: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80",
      desc: "Ride through high passes and monasteries.",
    },
    {
      title: "Udaipur - City of Lakes",
      img: "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?q=80",
      desc: "Relax in romantic palaces by the lake.",
    },
    {
      title: "Darjeeling - Tea Gardens",
      img: "https://images.unsplash.com/photo-1622308644420-b20142dc993c?q=80",
      desc: "Explore tea estates and toy train rides.",
    },
  ];

  window.addEventListener("DOMContentLoaded", () => {
    const row = document.getElementById("packages-row");
    places.forEach((place) => {
      const col = document.createElement("div");
      col.className = "col-md-4 fade-in";
      col.innerHTML = `
          <div class="card h-100 shadow-sm">
            <img src="${place.img}" class="card-img-top" alt="${place.title}" loading="lazy" />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${place.title}</h5>
              <p class="card-text">${place.desc}</p>
              <a href="#contact" class="btn btn-primary mt-auto">Book Now</a>
            </div>
          </div>
        `;
      row.appendChild(col);
    });

    const faders = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });
    faders.forEach((el) => observer.observe(el));
  });