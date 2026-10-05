export const PROFILE = {
  name: "Ikram Aissiou",
  firstName: "IKRAM",
  lastName: "AISSIOU",
  role: "Head of Risk Management Department",
  workplace: "CCR — Compagnie Centrale de Réassurance, Algeria",
  researchRole: "Independent Researcher",
  subRole: "Medical Image Analysis · Computational Neuroscience · Trustworthy AI",
  location: "Algiers, Algeria",
  email: "aissiouikram47@gmail.com",
  phone: "(+213) 0658-13-40-37",
  status: "Seeking PhD opportunities & research collaborations",
  links: {
    github: "https://github.com/AiIkram",
    linkedin: "https://www.linkedin.com/in/ikram-aissiou/",
    scholar: "https://scholar.google.com/citations?user=xvTADnEAAAAJ&hl=en",
  },

  portrait: {
    src: "images/portrait.jpg",
    alt: "Ikram Aissiou — portrait",
    caption: "Algiers, Algeria",
  },
};

/** Research statement shown at the top of the Research section */
export const RESEARCH_STATEMENT = [
  "My research focuses on reliable and generalisable machine learning for healthcare, at the intersection of medical image analysis, computational neuroscience, graph learning, and trustworthy AI. I work as an independent researcher, collaborating with groups across Europe, the Middle East and North Africa.",
  "Methodologically, my work spans volumetric tumor segmentation and multi-task prognostic modeling in oncological imaging (breast DCE-MRI, head-and-neck PET/CT, pediatric brain MRI), together with spatial-temporal graph and state-space architectures for neurophysiological signals (EEG, stroke lesion analysis, and Parkinson's disease).",
  "A unifying concern underlies this work: clinical deployment requires models that characterise their own epistemic limits. I therefore study calibration, out-of-distribution behaviour and dataset reliability as first-class research objects rather than post-hoc diagnostics.",
];

/** Formal invitation shown beneath the research statement */
export const COLLABORATION_NOTE = {
  heading: "Open to collaboration",
  body: "I welcome correspondence regarding doctoral positions, joint research projects, challenge participation, and co-authorship in medical image analysis or computational neuroscience. Enquiries from research groups, clinicians and prospective supervisors are equally welcome.",
  cta: "Please contact me by email",
};

/** Keywords for the scrolling ticker under the hero */
export const TICKER = [
  "Oncological Imaging",
  "Pediatric Brain Tumours",
  "Uncertainty Quantification",
  "Computational Neuroscience",
  "nnU-Net",
  "Graph Neural Networks",
  "State-Space Models",
  "PET/CT",
  "DCE-MRI",
  "EEG",
  "Explainable AI",
  "Multi-Task Learning",
  "Model Calibration",
  "Survival Analysis",
  "Dataset Reliability",
];

export const STATS = [
  { value: 9, suffix: "", label: "Papers & submissions" },
  { value: 4, suffix: "", label: "First / co-first author" },
  { value: 4, suffix: "", label: "Research schools" },
  { value: 5, suffix: "", label: "MICCAI Society venues" },
];

export const NAV = [
  { id: "about", label: "About", index: "01" },
  { id: "research", label: "Research", index: "02" },
  { id: "publications", label: "Publications", index: "03" },
  { id: "news", label: "News", index: "04" },
  { id: "people", label: "Mentors & Collaborators", index: "05" },
  { id: "diamond", label: "Facets", index: "06" },
  { id: "gallery", label: "Gallery", index: "07" },
  // { id: "blog", label: "Blog", index: "08" },
  { id: "experience", label: "Experience", index: "09" },
  { id: "education", label: "Education", index: "10" },
  { id: "skills", label: "Skills", index: "11" },
  { id: "contact", label: "Contact", index: "12" },
];

/**
 * ─────────────────────────────────────────────────────────────
 *  ABOUT ME — narrative prose, academic register.
 * ─────────────────────────────────────────────────────────────
 */
export const ABOUT_ME = [
  "I am Ikram Aissiou, an independent researcher in medical image analysis and computational neuroscience, based in Algiers, Algeria. My work develops machine learning methods for clinical decision support across oncological imaging and neurological disease, with a sustained emphasis on how such models characterise their own uncertainty.",
  "I was selected for the BASIRA 2026 — Master GNNs for Rising Stars programme at Imperial College London (I-X), under Prof. Islem Rekik. I am also a mentee in the MICCAI Mentorship Programme (2025–2026) and the RISE-MICCAI Mentorship Programme. I completed training in computational neuroscience through Neuromatch Academy, and attended the MICCAI Winter School at MBZUAI, Abu Dhabi, and the RISE-MICCAI Summer School on diffusion models and graph learning.",
  "In oncology, my research concerns volumetric tumour segmentation and multi-task prognostic modelling: breast cancer in multi-centre DCE-MRI, head-and-neck tumours in multimodal PET/CT with joint TN staging and recurrence-free survival estimation, and paediatric brain tumours where transfer learning from adult cohorts must compensate for scarce annotated data. In neuroscience, I model neurophysiological signals with spatial-temporal graph and state-space architectures — patient-independent epileptic seizure detection from EEG, ischemic stroke lesion segmentation, and multimodal Parkinson's disease assessment.",
  "Running through all of this is a single methodological conviction: a model that cannot express doubt cannot responsibly inform a diagnosis. I therefore treat calibration, out-of-distribution behaviour and dataset reliability as primary research objects rather than post-hoc diagnostics.",
  "I hold an M.Sc. in Data Science and Analysis (Honours, Excellent) and a B.Sc. in Information Systems and Software Engineering (Very Good) from the University of Algiers 1 Benyoucef Benkhedda. Alongside research, I head the Risk Management Department at CCR, the Compagnie Centrale de Réassurance, in Algiers. I previously worked as a Data Scientist at CAAT and taught algorithmics at the University of Algiers 1 and data science at GoMyCode. I also designed and organised the PARK-GNN Challenge, a full graph-learning competition with automated scoring and a live leaderboard.",
];

/** Selected highlights — first (*) or corresponding (^) author */
export const HIGHLIGHTS = [
  {
    short: "NeuroGraphMamba",
    cite: "(Aissiou* et al., AMAI @ MICCAI 2026)",
    desc: "Spatial-temporal graph state-space architecture for patient-independent epileptic seizure detection",
    tone: "coral",
  },
  {
    short: "HECKTOR 2026",
    cite: "(Aissiou* et al., HECKTOR Challenge @ MICCAI 2026)",
    desc: "Dual-branch fusion pipeline for head and neck tumour segmentation, TN staging and recurrence-free survival prediction",
    tone: "gold",
  },
  {
    short: "ISLES '26",
    cite: "(Zayim & Aissiou* et al., SWITCH+ @ MICCAI 2026)",
    desc: "Systematic nnU-Net comparison for ischemic stroke lesion segmentation using bilateral asymmetry as a structural prior",
    tone: "ice",
  },
  {
    short: "MAMA-MIA",
    cite: "(Zayim & Aissiou et al., Deep Breath @ MICCAI 2025)",
    desc: "Selective phase-aware nnU-Net training for robust breast cancer segmentation in multi-centre DCE-MRI",
    tone: "gold",
  },
  {
    short: "Immun-AI",
    cite: "(Boukhiar & Aissiou et al., MICAD 2026, Springer LNEE)",
    desc: "Leakage-safe, explainable multimodal decision-support platform for systemic lupus erythematosus diagnosis",
    tone: "teal",
  },
];

export const FOCUS_AREAS = [
  {
    n: "01",
    title: "Oncological Image Analysis",
    body: "Volumetric tumor segmentation and multi-task prognostic modeling across breast DCE-MRI, head-and-neck PET/CT and pediatric brain MRI. Particular interest in transfer learning from adult to pediatric cohorts, where annotated data remain scarce, and in multi-centre generalization.",
    tags: ["nnU-Net", "PET/CT", "DCE-MRI", "Paediatric MRI", "TN Staging", "Survival Analysis"],
    accent: "gold",
  },
  {
    n: "02",
    title: "Uncertainty Quantification & Trustworthy AI",
    body: "Leakage-safe, interpretable decision-support systems that characterise their own epistemic limits. I treat calibration, out-of-distribution behaviour and dataset reliability as primary research objects: a model unable to express uncertainty cannot responsibly inform diagnosis.",
    tags: ["Calibration", "Explainable AI", "OOD Detection", "Dataset Reliability", "Clinical Validation"],
    accent: "teal",
  },
  {
    n: "03",
    title: "Computational Neuroscience",
    body: "Modeling neural and neurophysiological signals with spatial-temporal graph and state-space architectures: patient-independent epileptic seizure detection from EEG, ischemic stroke lesion characterization, and multimodal Parkinson's disease assessment. Trained through Neuromatch Computational Neuroscience.",
    tags: ["EEG", "Neural Dynamics", "Mamba / SSM", "Graph Neural Networks", "Epilepsy", "Parkinson's"],
    accent: "coral",
  },
];

export const NEWS = [
  {
    date: "OCT 2026",
    kind: "APPOINTMENT",
    badge: "CCR Algeria",
    text: "Appointed Head of the Risk Management Department at CCR — Compagnie Centrale de Réassurance, Algeria, leading risk analytics and AI-driven risk assessment for the national reinsurer.",
    tone: "gold",
  },
  {
    date: "2026",
    kind: "RESEARCH",
    badge: "EMNLP 2026",
    text: "“GNNs-RC: A GNN Competition Benchmark for Human and LLM Evaluation” accepted to the EMNLP 2026 main conference (ACL ARR). Co-author.",
    tone: "teal",
  },
  {
    date: "AUG 2026",
    kind: "RESEARCH",
    badge: "MICCAI 2026",
    text: "“NeuroGraphMamba: A Spatial-Temporal Graph State-Space Architecture for Patient-Independent Epileptic Seizure Detection” accepted as a poster at the AMAI Workshop, MICCAI 2026, Strasbourg. First author.",
    tone: "coral",
  },
  {
    date: "AUG 2026",
    kind: "RESEARCH",
    badge: "MICCAI 2026",
    text: "“A Dual-Branch Fusion Pipeline for Head and Neck Tumor Segmentation, TN Staging, and Recurrence-Free Survival Prediction” accepted at the HECKTOR Challenge, MICCAI 2026. First author.",
    tone: "gold",
  },
  {
    date: "AUG 2026",
    kind: "RESEARCH",
    badge: "MICCAI 2026",
    text: "“From Baseline to Bilateral Asymmetry: A Systematic nnU-Net Comparison for Ischemic Stroke Lesion Segmentation in ISLES'26” accepted at the SWITCH+ Workshop, MICCAI 2026. Co-first author.",
    tone: "coral",
  },
  {
    date: "2026",
    kind: "RESEARCH",
    badge: "MICAD 2026",
    text: "“Immun-AI: A Leakage-Safe, Explainable Multimodal Decision-Support Platform for Systemic Lupus Erythematosus Diagnosis” accepted at MICAD 2026, Edinburgh. To appear in Springer Lecture Notes in Electrical Engineering.",
    tone: "teal",
  },
  {
    date: "2026",
    kind: "REVIEW",
    badge: "Under review",
    text: "Three journal manuscripts under review: dataset reliability in clinical AI (Computer Methods and Programs in Biomedicine), a tri-modal Parkinson's detection framework (IEEE TNSRE), and an LLM benchmark for Parkinson's clinical reasoning (IEEE JBHI).",
    tone: "ice",
  },
  {
    date: "2026",
    kind: "PROGRAMME",
    badge: "BASIRA Lab",
    text: "Selected for BASIRA 2026 — Master GNNs for Rising Stars at Imperial College London (I-X), under Prof. Islem Rekik, Director of the BASIRA Lab.",
    tone: "coral",
  },
  {
    date: "2026",
    kind: "SERVICE",
    badge: "PARK-GNN · BASIRA Lab",
    text: "Designed and organised the PARK-GNN Challenge — Parkinson's disease detection formulated as node classification on graphs constructed from acoustic features, with a live leaderboard and automated scoring.",
    tone: "teal",
  },
  {
    date: "2025 — 26",
    kind: "MENTORSHIP",
    badge: "MICCAI & RISE", 
    text: "Accepted into the MICCAI Mentorship Programme (2025–2026 cycle) and the RISE-MICCAI Mentorship Programme, mentored by Nina Weng (Technical University of Denmark).",
    tone: "gold",
  },
  {
    date: "NOV 2025",
    kind: "SCHOOL",
    badge: "Winter School",
    text: "Attended the MICCAI Winter School, 18–19 November 2025, at MBZUAI, Abu Dhabi.",
    tone: "ice",
  },
  {
    date: "OCT 2025",
    kind: "POSITION",
    badge: "CAAT",
    text: "Joined CAAT (Compagnie Algérienne des Assurances) as a Data Scientist, building AI-driven risk models and decision-support dashboards.",
    tone: "teal",
  },
  {
    date: "SEP 2025",
    kind: "CONFERENCE",
    badge: "MICCAI 2025",
    text: "Poster presented at the Deep Breath Workshop, MICCAI 2025, Daejeon, South Korea — selective phase-aware nnU-Net training for breast cancer segmentation in multi-centre DCE-MRI.",
    tone: "gold",
  },
  {
    date: "JUL 2025",
    kind: "SCHOOL",
    badge: "RISE-MICCAI",
    text: "Completed the RISE-MICCAI Summer School, 14–18 July 2025 — Diffusion Models & Graph Learning.",
    tone: "ice",
  },
  {
    date: "2025",
    kind: "TRAINING",
    badge: "Neuromatch",
    text: "Completed Neuromatch Academy training in Computational Neuroscience — neural modelling, dynamical systems and data-driven analysis of neural activity.",
    tone: "coral",
  },
];

export type Author = { name: string; self?: boolean; link?: string };
export type Paper = {
  year: string;
  title: string;
  authors?: Author[];
  role?: string;
  venue: string;
  location?: string;
  note?: string;
  status: "Accepted" | "Published" | "Poster" | "Under review";
  links?: { label: string; url: string }[];
  tone: "gold" | "teal" | "coral" | "ice";
  group?: "oncology" | "neuro" | "trust";
};

/**
 * ─────────────────────────────────────────────────────────────
 *  PUBLICATIONS grouped by research theme.
 *  `group` must match one of the PUB_GROUPS keys below.
 * ─────────────────────────────────────────────────────────────
 */
export const PUB_GROUPS = [
  {
    key: "oncology",
    title: "Data and Intelligence in Oncology",
    sub: "Tumour segmentation, staging, prognosis and survival analysis",
    accent: "gold",
  },
  {
    key: "neuro",
    title: "Data and Intelligence in Neuroscience",
    sub: "EEG, epilepsy, ischemic stroke, Parkinson's disease and neural dynamics",
    accent: "coral",
  },
  {
    key: "trust",
    title: "Trustworthy AI, Benchmarking and Clinical Reliability",
    sub: "Uncertainty quantification, dataset reliability, explainability and evaluation",
    accent: "teal",
  },
] as const;

/** Accepted / published work */
export const PAPERS: Paper[] = [
  {
    year: "2026",
    title:
      "NeuroGraphMamba: A Spatial-Temporal Graph State-Space Architecture for Patient-Independent Epileptic Seizure Detection",
    role: "First author",
    authors: [
      { name: "Ikram Aissiou", self: true },
      { name: "Naima Boukhiar" },
      { name: "Sam Guessoum" },
      { name: "Riad Fellah" },
    ],
    venue: "AMAI Workshop @ MICCAI 2026 — Poster",
    location: "Strasbourg, France",
    note: "A spatial-temporal graph network fused with a Mamba state-space backbone for patient-independent seizure detection from EEG.",
    status: "Accepted",
    tone: "coral",
    group: "neuro",
  },
  {
    year: "2026",
    title:
      "A Dual-Branch Fusion Pipeline for Head and Neck Tumor Segmentation, TN Staging, and Recurrence-Free Survival Prediction: HECKTOR 2026",
    role: "First author",
    authors: [
      { name: "Ikram Aissiou", self: true },
      { name: "Riad Fellah" },
      { name: "Sam Guessoum" },
      { name: "Naima Boukhiar" },
    ],
    venue: "HECKTOR Challenge @ MICCAI 2026 — Poster",
    location: "Strasbourg, France",
    note: "Head-and-neck care is more than finding the tumour: segmentation, TN stage and recurrence-free survival solved jointly from multimodal PET/CT.",
    status: "Accepted",
    tone: "gold",
    group: "oncology",
  },
  {
    year: "2026",
    title:
      "From Baseline to Bilateral Asymmetry: A Systematic nnU-Net Comparison for Ischemic Stroke Lesion Segmentation in ISLES'26",
    role: "Co-first author",
    authors: [
      { name: "Beyza Zayim", link: "https://fr.linkedin.com/in/beyza-zayim-844547175" },
      { name: "Ikram Aissiou", self: true },
      { name: "Stephan Collins" },
      { name: "Alain Lalande" },
      { name: "Fabrice Meriaudeau" },
    ],
    venue: "SWITCH+ Workshop @ MICCAI 2026",
    location: "Strasbourg, France",
    note: "Systematic nnU-Net ablation for ischemic stroke lesions, treating bilateral brain asymmetry as a structural prior.",
    status: "Accepted",
    tone: "coral",
    group: "neuro",
  },
  {
    year: "2026",
    title: "GNNs-RC: A GNN Competition Benchmark for Human and LLM Evaluation",
    role: "Co-author",
    venue: "EMNLP 2026 — Main Conference (ACL ARR)",
    note: "A benchmark built from graph-neural-network competition tasks, designed to evaluate both human participants and large language models.",
    status: "Accepted",
    tone: "teal",
    group: "trust",
  },
  {
    year: "2025",
    title:
      "Selective Phase-Aware Training of nnU-Net for Robust Breast Cancer Segmentation in Multi-Center DCE-MRI",
    role: "Co-author",
    authors: [
      { name: "Beyza Zayim", link: "https://fr.linkedin.com/in/beyza-zayim-844547175" },
      { name: "Ikram Aissiou", self: true },
      { name: "Naima Boukhiar" },
    ],
    venue: "Deep Breath Workshop @ MICCAI 2025 — Poster",
    location: "Daejeon, South Korea",
    note: "Quality-selective training (DUKE + NACT) outperformed larger mixed datasets. Best validation Dice 0.72 with 3-phase nnU-Net 3D full-resolution.",
    status: "Published",
    tone: "gold",
    group: "oncology",
    links: [
      { label: "arXiv:2512.19225", url: "https://arxiv.org/abs/2512.19225" },
      { label: "Full HTML", url: "https://arxiv.org/html/2512.19225" },
    ],
  },
  {
    year: "2026",
    title:
      "Immun-AI: A Leakage-Safe, Explainable Multimodal Decision-Support Platform for Systemic Lupus Erythematosus Diagnosis",
    role: "Co-author",
    authors: [
      { name: "Naima Boukhiar" },
      { name: "Ikram Aissiou", self: true },
      { name: "Bensefia Yazid" },
    ],
    venue: "MICAD 2026 — 7th Int. Conf. on Medical Imaging and Computer-Aided Diagnosis · Springer LNEE",
    location: "Edinburgh, United Kingdom",
    note: "Fuses clinical, imaging and molecular data into a decision-support system with explicit uncertainty quantification and no data leakage.",
    status: "Accepted",
    tone: "teal",
    group: "trust",
  },
];

/** Manuscripts currently under review */
export const UNDER_REVIEW: Paper[] = [
  {
    year: "—",
    title: "Beyond Accuracy: A Framework for Dataset Reliability in Clinical AI",
    venue: "Computer Methods and Programs in Biomedicine",
    status: "Under review",
    tone: "teal",
    group: "trust",
  },
  {
    year: "—",
    title: "Tri-Modal Deep Learning Framework for Parkinson's Disease Detection",
    venue: "IEEE Transactions on Neural Systems and Rehabilitation Engineering",
    status: "Under review",
    tone: "coral",
    group: "neuro",
  },
  {
    year: "—",
    title: "LLM Benchmark for Parkinson's Disease Clinical Reasoning",
    venue: "IEEE Journal of Biomedical and Health Informatics",
    status: "Under review",
    tone: "ice",
    group: "trust",
  },
];

/**
 * ─────────────────────────────────────────────────────────────
 *  MENTORS, MATES & MENTEES
 * ─────────────────────────────────────────────────────────────
 */
export const PEOPLE_INTRO =
  "I am fortunate to learn from generous mentors and collaborators. I record their names here in gratitude, and in recognition of the people who shape my work and thinking. Although several of these senior colleagues do not formally supervise me, I regard them as scientific mentors in the broader scholarly sense and value their guidance deeply.";

export type Person = {
  name: string;
  role: string;
  affiliation: string;
  link?: string;
  note?: string;
};

export const MENTORS: Person[] = [
  {
    name: "Prof. Islem Rekik, Ph.D.",
    role: "BASIRA 2026 supervisor",
    affiliation:
      "Associate Professor of Computing, Imperial College London (I-X Hub); Director, BASIRA Lab",
    link: "https://basira-lab.com/",
    note: "President of RISE-MICCAI (2021–2025); former President of Women in MICCAI (2019–2021); Marie Skłodowska-Curie Fellowship alumna; Tunisian AI Award laureate.",
  },
  {
    name: "Nina Weng",
    role: "RISE MICCAI Mentorship Programme mentor",
    affiliation:
      "Ph.D. researcher, Section for Visual Computing, Technical University of Denmark (DTU)",
    link: "https://nina-weng.github.io/",
    note: "Research on algorithmic fairness, bias assessment, shortcut learning and trustworthy AI in medical imaging. Storytelling coordinator, RISE-MICCAI.",
  },
];

export const MATES: Person[] = [
  {
    name: "Beyza Zayim",
    role: "Co-author — MAMA-MIA 2025, ISLES 2026",
    affiliation: "Université Bourgogne Europe, France",
    link: "https://fr.linkedin.com/in/beyza-zayim-844547175",
    note: "From MAMA-MIA to ISLES — two challenges, two years, one continuing collaboration.",
  },
  {
    name: "Naima Boukhiar",
    role: "Co-author — MAMA-MIA, HECKTOR, NeuroGraphMamba, Immun-AI",
    affiliation: "University of Algiers 1 Benyoucef Benkhedda, Algeria",
  },
  {
    name: "Sam Guessoum",
    role: "Co-author — HECKTOR 2026, NeuroGraphMamba",
    affiliation: "Algiers, Algeria",
  },
  {
    name: "Riad Fellah",
    role: "Co-author — HECKTOR 2026, NeuroGraphMamba",
    affiliation: "Algiers, Algeria",
  },
  {
    name: "Bensefia Yazid",
    role: "Co-author — Immun-AI, MICAD 2026",
    affiliation: "Algiers, Algeria",
  },
];

export const COMMUNITIES = [
  {
    name: "BASIRA Lab",
    detail: "Brain And SIgnal Research & Analysis — Imperial College London (I-X)",
    link: "https://basira-lab.com/",
  },
  {
    name: "RISE-MICCAI",
    detail:
      "Reinforcing Inclusiveness & diverSity and Empowering MICCAI in Low-to-Middle Income Countries",
    link: "https://miccai.org/group/rise-miccai/",
  },
  {
    name: "MICCAI Mentorship Programme",
    detail: "2025–2026 cycle",
    link: "https://miccai.org/",
  },
  {
    name: "Neuromatch Academy",
    detail: "Computational Neuroscience",
    link: "https://neuromatch.io/",
  },
];

export const MENTEES_NOTE =
  "As an instructor at the University of Algiers 1 and at GoMyCode, and through the PARK-GNN Challenge, I have supervised undergraduate tutorials, assessed capstone projects and mentored students entering data science. I am building this list as those collaborations mature.";

/**
 * ─────────────────────────────────────────────────────────────
 *  💎 THE DIAMOND — everything that is not a paper.
 *  Each facet is one side of the same stone.
 * ─────────────────────────────────────────────────────────────
 */
export const DIAMOND_INTRO = [
  "A researcher is not only a bibliography. A person is like a diamond — a single stone with many facets, and the light appears only when it is turned.",
  "Recorded here is the scholarly work that does not appear in a publication list: teaching and supervision, community organisation, challenge design, science communication, and the interface design sensibility that shapes how I build clinical tools.",
];

export type Facet = {
  n: string;
  title: string;
  kicker: string;
  body: string;
  items?: { label: string; meta?: string }[];
  accent: "gold" | "teal" | "coral" | "ice";
};

export const FACETS: Facet[] = [
  {
    n: "I",
    title: "Teaching",
    kicker: "Instruction & supervision",
    body: "Over a year of university and professional instruction, spanning undergraduate algorithmics tutorials at the University of Algiers 1 and full data-science cohorts, including project assessment and interview preparation.",
    items: [
      { label: "Data Science Instructor — GoMyCode", meta: "Sep 2024 – Oct 2025" },
      { label: "Vacataire Instructor, Algorithmics TD — University of Algiers 1", meta: "Nov 2024 – Feb 2025" },
      { label: "NVIDIA Deep Learning Instructor & Ambassador", meta: "2025 – present" },
    ],
    accent: "gold",
  },
  {
    n: "II",
    title: "Academic community",
    kicker: "Organisation & outreach",
    body: "Two years of leadership within Google Developer Student Club USTHB — directing the web development section, then managing recruitment, onboarding and continuing member training across the organisation.",
    items: [
      { label: "Human Resources Manager — GDSC USTHB", meta: "Oct 2023 – Jul 2024" },
      { label: "Chief of Web Development Section — GDSC USTHB", meta: "Oct 2022 – Jul 2023" },
      { label: "Jsahra — 5-day annual JavaScript bootcamp", meta: "organiser" },
      { label: "International Women's Day event", meta: "organiser" },
    ],
    accent: "teal",
  },
  {
    n: "III",
    title: "Challenge design",
    kicker: "Benchmark construction",
    body: "Beyond participating in competitions, I design them. PARK-GNN was constructed in full: dataset curation, graph construction, evaluation protocol, automated scoring and a live leaderboard implemented through GitHub Actions.",
    items: [
      { label: "PARK-GNN Challenge — designer & organiser", meta: "BASIRA 2026" },
      { label: "Community forks · live leaderboard · automated scoring", meta: "research competition" },
      { label: "Node classification on KNN + subject-level connectivity graphs", meta: "195 recordings · 31 subjects" },
    ],
    accent: "coral",
  },
  {
    n: "IV",
    title: "Science communication",
    kicker: "Dissemination",
    body: "Research acquires value through dissemination. I produce a podcast on artificial intelligence, data science and research careers within the Algerian scientific community, and present at international venues.",
    items: [
      { label: "Podcast Producer — Tech2Table", meta: "2024 – present" },
      { label: "Poster presentations — MICCAI 2025 & 2026", meta: "Daejeon · Strasbourg" },
      { label: "Scientific writing & remote collaboration", meta: "core skill" },
    ],
    accent: "ice",
  },
  {
    n: "V",
    title: "Interface design",
    kicker: "Clinical usability",
    body: "A formal grounding in user experience design, which continues to inform how I construct clinical decision-support tools: a system whose output clinicians cannot interpret is a system that will not be adopted.",
    items: [
      { label: "Google UX Design Specialization — Coursera", meta: "certified" },
      { label: "UX design practice", meta: "Behance portfolio" },
      { label: "Risk dashboards & decision-support interfaces", meta: "CCR · CAAT · Djezzy" },
    ],
    accent: "gold",
  },
  {
    n: "VI",
    title: "Applied impact",
    kicker: "AI for social benefit",
    body: "Collaborative international projects applying machine learning to societal problems — satellite segmentation for urban green space assessment — alongside industry work requiring models to perform under real operational constraints.",
    items: [
      { label: "Data Scientist — Omdena", meta: "2024 – 2025" },
      { label: "Urban green space mapping, Frankfurt", meta: "U-Net · remote sensing" },
      { label: "Churn model at 95% accuracy — Djezzy", meta: "39 provinces" },
    ],
    accent: "teal",
  },
];

export const EXPERIENCE = [
  {
    title: "Head of Risk Management Department",
    place: "CCR — Compagnie Centrale de Réassurance",
    where: "Algiers, Algeria",
    period: "Oct 2026 — Present",
    bullets: [
      "Lead the risk management department of Algeria's central reinsurance company.",
      "Direct the development and maintenance of interactive dashboards monitoring key risk indicators across the portfolio.",
      "Oversee the design and deployment of AI-driven models supporting decision-making and improving the accuracy of risk assessment.",
      "Coordinate cross-functional teams to automate workflows and optimise reporting processes.",
    ],
    hot: true,
  },
  {
    title: "Data Scientist",
    place: "CAAT — Compagnie Algérienne des Assurances",
    where: "Hussein Dey, Algiers",
    period: "Oct 2025 — Sep 2026",
    bullets: [
      "Worked on risk analytics and decision-support dashboards, including Power BI reporting and analysis of financial and solvency indicators.",
      "Developed data-driven models and analytical tools to support risk assessment and decision-making.",
      "Conducted data cleaning, preprocessing and feature engineering for internal datasets.",
      "Collaborated with cross-functional teams to automate workflows and optimise reporting.",
    ],
  },
  {
    title: "Data Science Instructor",
    place: "GoMyCode",
    where: "Val d'Hydra, Algiers",
    period: "Sep 2024 — Oct 2025",
    bullets: [
      "Taught data visualisation, machine learning and core technical competencies.",
      "Evaluated practical projects and ran mock interviews to prepare students for the market.",
      "Mentored students on both technical and interpersonal development.",
    ],
  },
  {
    title: "Vacataire Instructor — Algorithmics (TD)",
    place: "University of Algiers 1, Benyoucef Benkhedda",
    where: "Algiers",
    period: "Nov 2024 — Feb 2025",
    bullets: [
      "Taught algorithmic concepts to undergraduates: problem solving, computational thinking, algorithm design.",
      "Guided hands-on exercises reinforcing theory with practice.",
      "Offered individual support and organised group discussions.",
    ],
  },
  {
    title: "Data Scientist Intern",
    place: "Djezzy",
    where: "Dar El Baida, Algiers",
    period: "Feb 2024 — May 2024",
    bullets: [
      "Performed spatial analysis across 39 provinces to identify geographic patterns associated with subscriber churn.",
      "Developed a predictive churn model to support proactive customer retention.",
      "Built a personalized recommendation system to support retention strategies.",
      "Developed monitoring platforms, including a website and Power BI dashboard, to track churn and its impact on performance.",
    ],
  },
  {
    title: "Data Analyst Intern",
    place: "Illinois Institute of Technology",
    where: "Remote",
    period: "Jun 2023 — Jul 2023",
    bullets: [
      "Analysed a marketing dataset of 10,000+ enrolled students to extract trends and patterns.",
      "Cleaned and analysed data in Python with over 90% accuracy.",
      "Translated insights into business recommendations.",
    ],
  },
  {
    title: "Data Scientist Intern",
    place: "CodeClause",
    where: "Remote",
    period: "Mar 2023 — Apr 2023",
    bullets: [
      "Collected and cleaned data from varied sources with Python and SQL in a team of five.",
      "Ran exploratory analysis to surface trends in large datasets.",
      "Built ML models predicting outcomes at over 80% accuracy.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    place: "Sonelgaz",
    where: "Gué de Constantine, Algiers",
    period: "Apr 2022 — Jun 2022",
    bullets: [
      "Represented the web team in project presentations to executives.",
      "Built a retirement management platform with a complementary pension calculation engine, cutting calculation time by 50%.",
      "Reviewed code for structure, security and cross-browser/device compatibility.",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "M.Sc. Data Science and Analysis",
    honour: "Graduated with Honors — Excellent",
    place: "University of Algiers 1, Benyoucef Benkhedda",
    period: "May 2024",
    thesis:
      "Analysis and Implementation of Innovative Features to Enhance Customer Retention and Drive Revenue Growth at Djezzy.",
  },
  {
    degree: "B.Sc. Information Systems and Software Engineering",
    honour: "Graduated — Very Good",
    place: "University of Algiers 1, Benyoucef Benkhedda",
    period: "Jun 2022",
    thesis:
      "Design and Development of a Retirement Management System with Integration of a Complementary Pension Calculation Engine.",
  },
];

export const SCHOOLS = [
  {
    name: "BASIRA 2026 — Master GNNs for Rising Stars",
    place: "Imperial College London (I-X), UK · Prof. Islem Rekik",
    period: "2026",
  },
  {
    name: "MICCAI Winter School",
    place: "MBZUAI, Abu Dhabi",
    period: "18–19 Nov 2025",
  },
  {
    name: "RISE-MICCAI Summer School",
    place: "Diffusion Models & Graph Learning · Online",
    period: "14–18 Jul 2025",
  },
  {
    name: "Neuromatch Academy — Computational Neuroscience",
    place: "Neural modelling, dynamical systems & data-driven neuroscience · Online",
    period: "2025",
  },
];

export const CERTS = [
  {
    name: "Professional Machine Learning Engineer",
    org: "Google Cloud",
    year: "Sep 2024",
    note: "Built, evaluated and optimised ML models on Google Cloud; responsible AI and fairness throughout development.",
  },
  {
    name: "Applied Data Science Lab",
    org: "WorldQuant University",
    year: "Jul – Oct 2023",
    note: "Eight applied projects: SQL/NoSQL, APIs, data exploration, supervised and unsupervised modelling, visualisation for non-technical audiences.",
  },
  {
    name: "AI Programming with Python Nanodegree",
    org: "AWS AI & ML Scholarship — Udacity",
    year: "Jun – Oct 2023",
    note: "NumPy, Pandas, Matplotlib; linear algebra, calculus and neural networks. Final project: flower image classification.",
  },
  {
    name: "Cloud Academy Certification",
    org: "BambooGeeks",
    year: "Nov – Dec 2022",
    note: "Cloud fundamentals: planning, deploying and managing infrastructure on Google Cloud.",
  },
  {
    name: "Fundamentals of Deep Learning",
    org: "NVIDIA",
    year: "Dec 2021",
  },
];

export const PROJECTS = [
  {
    title: "NeuroGraphMamba",
    kicker: "AMAI @ MICCAI 2026 · First author",
    body: "Spatial-temporal graph state-space architecture for patient-independent epileptic seizure detection from EEG.",
    stack: ["Mamba", "PyG", "EEG", "ST-GNN"],
    link: "",
    tone: "gold",
  },
  {
    title: "HECKTOR 2026",
    kicker: "MICCAI 2026 · First author",
    body: "Dual-branch fusion pipeline: tumour segmentation, TN staging and recurrence-free survival from multimodal PET/CT.",
    stack: ["nnU-Net", "PET/CT", "Survival", "Multi-task"],
    link: "",
    tone: "coral",
  },
  {
    title: "ISLES '26",
    kicker: "SWITCH+ @ MICCAI 2026 · Co-first author",
    body: "Systematic nnU-Net comparison for ischemic stroke lesion segmentation using bilateral asymmetry as a structural prior.",
    stack: ["nnU-Net", "MRI", "Ablation"],
    link: "",
    tone: "ice",
  },
  {
    title: "GNNs-RC Benchmark",
    kicker: "EMNLP 2026 · Co-author",
    body: "A GNN competition benchmark designed to evaluate both human participants and large language models.",
    stack: ["GNN", "LLM Eval", "Benchmark"],
    link: "",
    tone: "teal",
  },
  {
    title: "PARK-GNN Challenge",
    kicker: "Designed & organised",
    body: "A full research competition built from scratch: dataset curation, graph construction, evaluation protocol, automated scoring and a live leaderboard.",
    stack: ["PyG", "DGL", "GitHub Actions"],
    link: "https://github.com/AiIkram/gnn-parkinsons-challenge",
    tone: "teal",
  },
  {
    title: "MAMA-MIA Challenge",
    kicker: "MICCAI 2025",
    body: "Primary breast tumour segmentation in multi-centre DCE-MRI with quality-aware, phase-selective nnU-Net training.",
    stack: ["nnU-Net", "PyTorch", "NIfTI"],
    link: "https://github.com/AiIkram/MICCAI-MAMA-MIA-CHALLENGE",
    tone: "gold",
  },
  {
    title: "Churn & Recommender System",
    kicker: "Djezzy · M.Sc. thesis",
    body: "Predictive churn model at 95% accuracy with GIS spatial analysis across 39 Algerian provinces, plus a Power BI monitoring platform.",
    stack: ["Scikit-learn", "QGIS", "Power BI"],
    link: "",
    tone: "coral",
  },
  {
    title: "Retirement Management System",
    kicker: "Sonelgaz · B.Sc. thesis",
    body: "Full-stack retirement platform with a complementary pension calculation engine — 50% reduction in calculation time.",
    stack: ["Full Stack", "Web", "Systems"],
    link: "",
    tone: "ice",
  },
];

export const SKILLS: Record<string, string[]> = {
  "Programming & analysis": ["Python", "NumPy", "Pandas", "Scikit-learn", "Matplotlib", "SQL"],
  "Medical imaging & MRI": [
    "NIfTI handling",
    "DICOM → NIfTI",
    "Preprocessing pipelines",
    "nnU-Net",
    "Segmentation",
    "Image visualisation",
  ],
  "Machine learning & AI": [
    "Supervised learning",
    "Unsupervised learning",
    "Predictive modelling",
    "Cross-validation",
    "Model evaluation",
    "Transfer learning",
  ],
  "Computational neuroscience": [
    "EEG analysis",
    "Neural signal processing",
    "Spatial-temporal graphs",
    "State-space models",
    "Dynamical systems",
    "Neuromatch methods",
  ],
  "Data science tools": [
    "Power BI",
    "Git",
    "Google Cloud ML",
    "Statistical modelling",
    "Large dataset handling",
  ],
  "Research & collaboration": [
    "Scientific writing",
    "Poster presentations",
    "Remote teamwork",
    "Challenge design",
  ],
};

export const SOFT_SKILLS = ["Communication", "Collaboration", "Teamwork"];

/*
export type Post = {
  slug: string;
  title: string;
  date: string;
  read: string;
  tags: string[];
  excerpt: string;
  body: string[];
  link?: string;
  tone: "gold" | "teal" | "coral" | "ice";
};

export const BLOG_INTRO =
  "Occasional writing on medical AI, uncertainty, and the practice of doing research from Algiers. Longer form than a news item, shorter than a paper.";

export const POSTS: Post[] = [
  {
    slug: "a-model-that-cannot-say-i-do-not-know",
    title: "A model that cannot say “I don't know”",
    date: "2026",
    read: "6 min",
    tags: ["Uncertainty Quantification", "Trustworthy AI"],
    tone: "teal",
    excerpt:
      "Accuracy is the wrong headline metric for clinical deployment. What matters is whether a model can tell you when it is out of its depth.",
    body: [
      "Ask a radiologist how confident they are and you will get an answer with structure: high for a finding they see every day, low for something at the edge of their experience, and a clear threshold below which they escalate to a colleague. Most deployed models have no equivalent. They return a probability, and the probability is calibrated to the training distribution and nothing else.",
      "This is the gap my work keeps returning to. In the Immun-AI project we built a decision-support platform for systemic lupus erythematosus that fuses clinical, imaging and molecular data, and the design question that dominated the work was not accuracy. It was leakage safety and the honest expression of uncertainty — the system needed to know when to decline to answer.",
      "**A model that cannot express doubt cannot be trusted with a diagnosis.** That sounds rhetorical, but it has a precise operational meaning: if your predicted probabilities are not calibrated, then downstream decisions that depend on thresholding those probabilities are systematically wrong, and the error is not visible in your accuracy metric.",
      "There is a second, less discussed layer. Before you can quantify a model's uncertainty you have to establish that the dataset itself is reliable. Labels can be wrong, cohorts can be imbalanced in ways that mimic signal, and preprocessing can leak information across the train/test boundary. In multi-centre imaging this is the norm rather than the exception — the centre a scan came from is often a better predictor than the pathology.",
      "So the research programme I want to pursue is: characterise the dataset first, quantify the model second, and only then report performance. Beyond Accuracy, the framework for dataset reliability currently under review at Computer Methods and Programs in Biomedicine, is an attempt to formalise the first of those three steps.",
    ],
  },
  {
    slug: "curating-beats-collecting",
    title: "Curating beats collecting",
    date: "2025",
    read: "5 min",
    tags: ["nnU-Net", "DCE-MRI", "Breast Cancer"],
    tone: "gold",
    excerpt:
      "On the MAMA-MIA challenge, throwing more data at the model made it worse. Selecting data by image quality made it better.",
    body: [
      "The intuitive rule in deep learning is that more data helps. The MAMA-MIA challenge for primary breast tumour segmentation in DCE-MRI gave us a clean reason to doubt it.",
      "The challenge data spans multiple centres, and the centres differ in scanner, protocol, contrast timing and coil configuration. Training on the full mixed cohort produced a model that learned centre-specific artefacts alongside anatomy. Validation performance was respectable and generalisation was poor.",
      "**We trained on less data and got a better model.** Selecting by image quality — the DUKE and NACT subsets — and training nnU-Net on those, with a phase-aware input configuration, gave a best validation Dice of 0.72 with 3-phase nnU-Net 3D full-resolution. The larger mixed set did not reach it.",
      "The mechanism is not mysterious. Multi-centre variability is not noise you can average away; it is structured confounding. A capacity-limited model allocates that capacity to whatever explains the most variance, and if centre identity explains more variance than tumour boundary, that is what gets learned.",
      "The practical lesson for clinical deployment: curation is not a preprocessing step you skip once you have enough data. It is a modelling decision with the same status as architecture or loss function, and in multi-centre settings it is usually the one with the highest return.",
    ],
  },
  {
    slug: "turning-eeg-into-graphs",
    title: "Turning EEG into graphs",
    date: "2026",
    read: "7 min",
    tags: ["EEG", "Graph Neural Networks", "Mamba", "Epilepsy"],
    tone: "coral",
    excerpt:
      "Why represent a set of electrodes as a graph, and why bolt a state-space model onto it — the reasoning behind NeuroGraphMamba.",
    body: [
      "An EEG recording is a stack of channels over time. The conventional representation is a tensor: channels × time. That representation is faithful to the acquisition hardware and almost silent about the thing you actually care about, which is the evolving pattern of coupling between cortical regions.",
      "Representing electrodes as graph nodes and their functional relationships as edges makes that coupling first-class. A graph convolution can pass information between two electrodes whose interaction is informative, regardless of where they sit on the montage. In seizure detection this matters, because the discriminative signal is often the spread of synchrony rather than the amplitude at any single channel.",
      "**Patient-independence is the hard part.** A model that detects seizures with high accuracy within one patient's recordings has learned that patient's baseline. In a clinical setting you do not have the patient's baseline at first presentation. So the architecture has to find features that transfer across patients with different baselines, different electrode placements and different pathology.",
      "The state-space component addresses the temporal side. Seizures evolve over tens of seconds, and the onset pattern is more informative than the ictal plateau. Mamba-style selective state-space models give you the long-range dependency handling of a transformer with linear scaling in sequence length, which is what you need for continuous monitoring rather than segmented epochs.",
      "Combining the two — spatial-temporal graph convolutions carrying the inter-electrode message passing, and a state-space backbone carrying the temporal integration — is what we submitted to AMAI at MICCAI 2026. It is one answer, not the answer, and the ablations we ran suggest the graph construction step matters more than either component.",
    ],
  },
  {
    slug: "research-without-a-lab",
    title: "Research without a traditional lab",
    date: "2026",
    read: "8 min",
    tags: ["Career", "Algeria", "RISE-MICCAI"],
    tone: "ice",
    excerpt:
      "On building medical AI research from Algiers outside a traditional research laboratory, and what the MICCAI community's inclusivity programmes actually change.",
    body: [
      "I do not have a laboratory. I do not have a grant, a supervisor of record, or an institutional subscription to anything. What I have is a laptop, a good internet connection, public datasets, and a set of challenges and workshops that accept work on its merits.",
      "This is not a complaint. It is a description of a research mode that is now genuinely viable in medical imaging, and that the MICCAI community has deliberately enabled. The MAMA-MIA, HECKTOR and ISLES challenges all publish their data openly. The Deep Breath, SWITCH+ and AMAI workshops review submissions through open peer review. Nobody asked which institution I belonged to.",
      "**The barrier that remains is not access to data. It is access to mentorship.** Writing a paper is a skill learned by having someone who has written thirty of them tell you that your related-work section is a list and not an argument. RISE-MICCAI and the MICCAI Mentorship Programme exist precisely to supply that, and for me they did — Nina Weng's comments on a draft did more for that paper than any amount of re-reading my own writing.",
      "The BASIRA 2026 programme under Prof. Islem Rekik was the other decisive one. Graph neural networks are a crowded field and the difference between a publishable and an unpublishable paper is usually whether the experimental design isolates the claimed contribution. Learning that distinction from a group that has published in it for a decade is not something you can reconstruct from arXiv.",
      "For anyone in a similar position: the practical advice is short. Pick a challenge with public data and a public leaderboard, because it gives you a falsifiable target. Read the previous year's winning entries before writing code. Find a mentor through a programme rather than a cold email, because programmes come with a norm that the mentor will actually respond. And write the paper before you think it is ready.",
    ],
  },
];

*/

export const LANGUAGES = [
  { name: "Arabic", level: "Native", pct: 100 },
  { name: "English", level: "Fluent", pct: 92 },
  { name: "French", level: "Intermediate", pct: 65 },
];


export type Shot = {
  src: string;
  caption: string;
  tag: string;
  span?: "tall" | "wide" | "big" | "normal";
  tone?: "gold" | "teal" | "coral" | "ice";
};

export const GALLERY: Shot[] = [
  {
    src: "images/miccai-2025-poster-booth.jpg",
    caption: "Presenting at the Deep Breath Workshop, MICCAI 2025 — Daejeon, South Korea.",
    tag: "MICCAI 2025",
    span: "tall",
    tone: "gold",
  },
  {
    src: "images/isles-poster-miccai-2026.jpg",
    caption: "In front of the ISLES '26 poster — SWITCH+ Workshop, MICCAI 2026.",
    tag: "MICCAI 2026",
    span: "big",
    tone: "coral",
  },
  {
    src: "images/miccai-2025-poster.jpg",
    caption: "Selective Phase-Aware Training of nnU-Net — MICCAI 2025 poster.",
    tag: "MAMA-MIA",
    span: "tall",
    tone: "gold",
  },
  {
    src: "images/basira-cohort-call.jpg",
    caption: "BASIRA 2026 cohort call with Prof. Islem Rekik.",
    tag: "BASIRA 2026",
    span: "wide",
    tone: "teal",
  },
  {
    src: "images/neuromatch-session.jpg",
    caption: "Computational neuroscience project session — Neuromatch Academy.",
    tag: "Neuromatch",
    span: "wide",
    tone: "ice",
  },
  {
    src: "images/winter-school-mbzuai.jpg",
    caption: "Hands-on workshop session — MICCAI Winter School, MBZUAI.",
    tag: "Winter School",
    span: "wide",
    tone: "teal",
  },
  {
    src: "images/miccai-2026-committee.jpg",
    caption: "MICCAI 2026 community session — committee members.",
    tag: "MICCAI 2026",
    span: "wide",
    tone: "coral",
  },
];
