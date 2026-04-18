const navLinks = document.querySelectorAll(".bottom-marquee-nav a");
const portfolioGrid = document.querySelector("#portfolio-grid");
const immersiveIndex = document.querySelector(".immersive-index");
const typedHero = document.querySelector("#typed-hero");
const spotlightPanel = document.querySelector("#spotlight-panel");
const spotlightClose = document.querySelector("#spotlight-close");
const spotlightKicker = document.querySelector("#spotlight-kicker");
const spotlightTitle = document.querySelector("#spotlight-title");
const spotlightText = document.querySelector("#spotlight-text");
const spotlightNumber = document.querySelector("#spotlight-number");
const spotlightTag = document.querySelector("#spotlight-tag");
const spotlightYear = document.querySelector("#spotlight-year");
const spotlightRole = document.querySelector("#spotlight-role");
const archiveTableBody = document.querySelector("#archive-table-body");

const portfolioImages = [
  "./1. SM 에스파 시즌그리팅 2026.png",
  "./2. ERROR404 CALENDAR.PNG",
  "./3. COMFY PROJECT CLOCK.jpg",
  "./4. ERROR404 SOCKS.jpg",
  "./5. COMFY PROJECT NOTE.JPG",
  "./6. MMCA 국립현대미술관 MI굿즈.jpg",
  "./6. MMCA 국립현대미술관 MI굿즈2.jpg",
  "./7. COMFY PROJECT POSTER CLOCK.JPG",
  "./8. MMCA 국립현대미술관 이응노키트.jpg",
  "./9. KT&G상상마당 브랜딩.jpg",
  "./10. COFMY PROJECT CALENDAR1.jpg",
  "./10. COFMY PROJECT CALENDAR2.jpg",
  "./11. ORIDINARY STUFF STICKER.jpg",
];

const projectTranslations = {
  "SM 에스파 시즌그리팅 2026": {
    title: "SM aespa Season's Greetings 2026",
    note: "Seasonal merchandise design direction presented as a polished pop archive entry.",
  },
  "ERROR404 CALENDAR": {
    title: "ERROR404 Calendar",
    note: "Calendar graphics developed with a clean but slightly offbeat editorial rhythm.",
  },
  "COMFY PROJECT CLOCK": {
    title: "COMFY PROJECT Clock",
    note: "Object-centered branding study with a compact, product-forward presentation.",
  },
  "ERROR404 SOCKS": {
    title: "ERROR404 Socks",
    note: "Soft goods application translated into a visual identity and merchandise detail.",
  },
  "COMFY PROJECT NOTE": {
    title: "COMFY PROJECT Note",
    note: "Stationery-based project laid out as part of a modular brand archive.",
  },
  "MMCA 국립현대미술관 MI굿즈": {
    title: "MMCA Identity Goods",
    note: "Museum identity goods arranged as a precise institutional merchandise study.",
  },
  "MMCA 국립현대미술관 MI굿즈2": {
    title: "MMCA Identity Goods II",
    note: "A second MMCA goods image focusing on variation, format, and system consistency.",
  },
  "COMFY PROJECT POSTER CLOCK": {
    title: "COMFY PROJECT Poster Clock",
    note: "Poster-led campaign extension that connects object display with graphic timing.",
  },
  "MMCA 국립현대미술관 이응노키트": {
    title: "MMCA Lee Ungno Kit",
    note: "Exhibition-related kit design framed as a cultural product archive entry.",
  },
  "KT&G상상마당 브랜딩": {
    title: "KT&G Sangsangmadang Branding",
    note: "Branding work translated into a sharper editorial showcase with image-first emphasis.",
  },
  "COFMY PROJECT CALENDAR1": {
    title: "COFMY PROJECT Calendar I",
    note: "First calendar variation documented as part of a structured product sequence.",
  },
  "COFMY PROJECT CALENDAR2": {
    title: "COFMY PROJECT Calendar II",
    note: "Second calendar variation continuing the same project line with alternate composition.",
  },
  "ORIDINARY STUFF STICKER": {
    title: "Ordinary Stuff Sticker",
    note: "Sticker graphics presented with a playful catalog-like treatment.",
  },
};

const projectMeta = {
  "SM 에스파 시즌그리팅 2026": {
    type: "Branding",
    designer: "Bora",
    year: "2025",
    role: "Lead Designer",
  },
  "ERROR404 CALENDAR": {
    type: "Calendar",
    designer: "Bora",
    year: "2025",
    role: "Graphic Designer",
  },
  "COMFY PROJECT CLOCK": {
    type: "Object",
    designer: "Bora",
    year: "2025",
    role: "Visual Designer",
  },
  "ERROR404 SOCKS": {
    type: "Merchandise",
    designer: "Bora",
    year: "2025",
    role: "Brand Designer",
  },
  "COMFY PROJECT NOTE": {
    type: "Stationery",
    designer: "Bora",
    year: "2025",
    role: "Editorial Designer",
  },
  "MMCA 국립현대미술관 MI굿즈": {
    type: "Museum Goods",
    designer: "Bora",
    year: "2024",
    role: "Design Lead",
  },
  "MMCA 국립현대미술관 MI굿즈2": {
    type: "Museum Goods",
    designer: "Bora",
    year: "2024",
    role: "Design Lead",
  },
  "COMFY PROJECT POSTER CLOCK": {
    type: "Poster",
    designer: "Bora",
    year: "2025",
    role: "Art Director",
  },
  "MMCA 국립현대미술관 이응노키트": {
    type: "Exhibition Kit",
    designer: "Bora",
    year: "2024",
    role: "Visual Designer",
  },
  "KT&G상상마당 브랜딩": {
    type: "Branding",
    designer: "Bora",
    year: "2024",
    role: "Brand Designer",
  },
  "COFMY PROJECT CALENDAR1": {
    type: "Calendar",
    designer: "Bora",
    year: "2025",
    role: "Graphic Designer",
  },
  "COFMY PROJECT CALENDAR2": {
    type: "Calendar",
    designer: "Bora",
    year: "2025",
    role: "Graphic Designer",
  },
  "ORIDINARY STUFF STICKER": {
    type: "Sticker",
    designer: "Bora",
    year: "2025",
    role: "Visual Designer",
  },
};

const getLeadingNumber = (fileName) => {
  const match = fileName.match(/^\.\/*(\d+)/);
  return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER;
};

const getDisplayTitle = (fileName) =>
  fileName
    .replace(/^\.\//, "")
    .replace(/\.[^.]+$/, "")
    .replace(/^\d+\.\s*/, "");

const getProjectNumberLabel = (fileName) => {
  const match = fileName.match(/^\.\/*(\d+)/);
  return match ? match[1].padStart(2, "0") : "--";
};

const getProjectCopy = (fileName) => {
  const rawTitle = getDisplayTitle(fileName);
  const translation = projectTranslations[rawTitle];

  if (translation) {
    return translation.note;
  }

  return `${rawTitle} appears here as part of a visual archive with free image proportions, compressed captions, and an editorial reading rhythm.`;
};

const getTranslatedTitle = (fileName) => {
  const rawTitle = getDisplayTitle(fileName);
  return projectTranslations[rawTitle]?.title ?? rawTitle;
};

const getProjectMeta = (fileName) => {
  const rawTitle = getDisplayTitle(fileName);
  return projectMeta[rawTitle] ?? {
    type: "Project",
    designer: "Bora",
    year: "2025",
    role: "Designer",
  };
};

const startHeroTyping = () => {
  if (!typedHero) {
    return;
  }

  const sourceText = typedHero.dataset.text ?? typedHero.textContent ?? "";
  const normalizedText = sourceText.replace(/\r/g, "");
  let index = 0;
  let direction = 1;

  typedHero.classList.add("is-typing");
  typedHero.innerHTML = "";

  const tick = () => {
    const nextChunk = normalizedText.slice(0, Math.max(index, 0));
    typedHero.innerHTML = nextChunk.replace(/\n/g, "<br />");

    if (direction === 1 && index < normalizedText.length) {
      index += 1;
      const currentChar = normalizedText[index - 1];
      const delay = currentChar === "\n" ? 120 : 38;
      window.setTimeout(tick, delay);
      return;
    }

    if (direction === 1 && index >= normalizedText.length) {
      direction = -1;
      window.setTimeout(tick, 900);
      return;
    }

    if (direction === -1 && index > 0) {
      index -= 1;
      const currentChar = normalizedText[index];
      const delay = currentChar === "\n" ? 80 : 28;
      window.setTimeout(tick, delay);
      return;
    }

    direction = 1;
    window.setTimeout(tick, 520);
  };

  tick();
};

const setSpotlightContent = (fileName) => {
  if (
    !spotlightPanel ||
    !spotlightKicker ||
    !spotlightTitle ||
    !spotlightText ||
    !spotlightNumber ||
    !spotlightTag ||
    !spotlightYear ||
    !spotlightRole
  ) {
    return;
  }

  const meta = getProjectMeta(fileName);
  const projectNumber = getProjectNumberLabel(fileName);

  spotlightPanel.classList.remove("is-empty");
  spotlightKicker.textContent = projectNumber;
  spotlightTitle.textContent = getTranslatedTitle(fileName);
  spotlightText.textContent = getProjectCopy(fileName);
  spotlightNumber.textContent = projectNumber;
  spotlightTag.textContent = meta.type;
  spotlightYear.textContent = meta.year;
  spotlightRole.textContent = meta.role;
};

const resetSpotlightContent = () => {
  if (!spotlightPanel || !spotlightTitle) {
    return;
  }

  spotlightPanel.classList.add("is-empty");
  spotlightTitle.innerHTML = "Selected<br />Works";
};

let selectedItem = null;
const isMobileViewport = () => window.matchMedia("(max-width: 720px)").matches;

const closeSelectedItem = () => {
  if (!selectedItem) {
    return;
  }

  selectedItem.classList.remove("is-selected");
  immersiveIndex?.classList.remove("is-focus-mode");
  immersiveIndex?.classList.remove("has-selection");
  document.body.classList.remove("has-mobile-popup");
  selectedItem = null;
  resetSpotlightContent();
};

const selectItem = (item, imagePath) => {
  if (selectedItem && selectedItem !== item) {
    selectedItem.classList.remove("is-selected");
  }

  const isAlreadySelected = item.classList.contains("is-selected");

  if (isAlreadySelected) {
    closeSelectedItem();
    return;
  }

  item.classList.add("is-selected");
  immersiveIndex?.classList.add("is-focus-mode");
  immersiveIndex?.classList.add("has-selection");
  document.body.classList.toggle("has-mobile-popup", isMobileViewport());
  selectedItem = item;
  setSpotlightContent(imagePath);
};

portfolioImages
  .slice()
  .sort((left, right) => {
    const numberDifference =
      getLeadingNumber(left) - getLeadingNumber(right);

    if (numberDifference !== 0) {
      return numberDifference;
    }

    return left.localeCompare(right);
  })
  .forEach((imagePath) => {
    if (!portfolioGrid) {
      return;
    }

    const item = document.createElement("article");
    item.className = "portfolio-item";

    const figure = document.createElement("figure");
    figure.className = "portfolio-figure";

    const image = document.createElement("img");
    image.src = imagePath;
    image.alt = getDisplayTitle(imagePath);
    image.loading = "lazy";

    const caption = document.createElement("div");
    caption.className = "portfolio-caption";

    const title = document.createElement("p");
    title.className = "portfolio-title";

    const titleMain = document.createElement("span");
    titleMain.className = "portfolio-title-main";
    titleMain.textContent = getTranslatedTitle(imagePath);

    const titleSub = document.createElement("span");
    titleSub.className = "portfolio-title-sub";
    titleSub.textContent = "Portfolio image";

    const order = document.createElement("p");
    order.className = "portfolio-index";
    order.textContent = getProjectNumberLabel(imagePath);

    figure.appendChild(image);
    title.appendChild(titleMain);
    title.appendChild(titleSub);
    caption.appendChild(title);
    caption.appendChild(order);
    item.appendChild(figure);
    item.appendChild(caption);
    portfolioGrid.appendChild(item);

    item.addEventListener("click", () => {
      selectItem(item, imagePath);
    });

    if (archiveTableBody) {
      const row = document.createElement("div");
      row.className = "archive-row";

      const titleCell = document.createElement("div");
      titleCell.className = "archive-title-cell";

      const titleIndex = document.createElement("p");
      titleIndex.className = "archive-title-index";
      titleIndex.textContent = getProjectNumberLabel(imagePath);

      const titleText = document.createElement("p");
      titleText.className = "archive-title-text";
      titleText.textContent = getTranslatedTitle(imagePath);

      const typeCell = document.createElement("p");
      typeCell.className = "archive-type";
      typeCell.textContent = getProjectMeta(imagePath).type;

      const designerCell = document.createElement("p");
      designerCell.className = "archive-designer";
      designerCell.textContent = getProjectMeta(imagePath).designer;

      titleCell.appendChild(titleIndex);
      titleCell.appendChild(titleText);
      row.appendChild(titleCell);
      row.appendChild(typeCell);
      row.appendChild(designerCell);
      archiveTableBody.appendChild(row);
    }
  });

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => item.classList.remove("is-current"));
    link.classList.add("is-current");
  });
});

startHeroTyping();
resetSpotlightContent();

window.addEventListener("resize", () => {
  if (!isMobileViewport()) {
    document.body.classList.remove("has-mobile-popup");
    return;
  }

  document.body.classList.toggle(
    "has-mobile-popup",
    Boolean(selectedItem) && immersiveIndex?.classList.contains("has-selection")
  );
});

spotlightClose?.addEventListener("click", () => {
  closeSelectedItem();
});

document.addEventListener("click", (event) => {
  if (!isMobileViewport() || !selectedItem || !spotlightPanel) {
    return;
  }

  const target = event.target;

  if (!(target instanceof Node)) {
    return;
  }

  const clickedInsidePanel = spotlightPanel.contains(target);
  const clickedSelectedItem = selectedItem.contains(target);

  if (!clickedInsidePanel && !clickedSelectedItem) {
    closeSelectedItem();
  }
});
