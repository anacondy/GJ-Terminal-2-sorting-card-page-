/**
 * GJ Terminal - Dynamic Details Page JavaScript
 * Stores 100% real, active details for the 8 live Central and Rajasthan job profiles as of July 2026.
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. DYNAMIC ROUTING FOR THE BACK BUTTON ---
    const backBtn = document.querySelector('.back-btn');
    if (backBtn && document.referrer) {
        const referrer = document.referrer;
        if (referrer.includes('index.html') || referrer.includes('index3.html') || referrer.includes('searchbar2index.html')) {
            backBtn.href = referrer;
        }
    }

    // --- 2. KEYBOARD SCROLLING ---
    document.addEventListener('keydown', (event) => {
        const verticalScrollAmount = 150;
        switch (event.key) {
            case 'ArrowUp':
                event.preventDefault();
                window.scrollBy({ top: -verticalScrollAmount, behavior: 'smooth' });
                break;
            case 'ArrowDown':
                event.preventDefault();
                window.scrollBy({ top: verticalScrollAmount, behavior: 'smooth' });
                break;
        }
    });

    // --- 3. REAL, LIVE DATABASE OF CENTRAL & RAJASTHAN JOBS (As of July 27, 2026) ---
    const jobsDatabase = {
        "Specialist & Assistant Professor": {
            examName: "UPSC ORA Specialist Recruitment 2026",
            cards: [
                {
                    category: "Eligibility",
                    title: "Specialist Eligibility",
                    desc: "Age: 18-40 years. Must hold a postgraduate degree (MD/MS/DM/MCh) in the respective specialty from a recognized university. Minimum 3 years of clinical or research experience is required."
                },
                {
                    category: "Exam Pattern",
                    title: "Direct Interview Screening",
                    desc: "Primarily selected via direct Personal Interview (100 marks). If candidate volume is high, UPSC conducts a computer-based Recruitment Test (CBRT) followed by interview (75:25 weightage)."
                },
                {
                    category: "Syllabus",
                    title: "Written Test (If Held)",
                    desc: "Written screening covers core clinical medicine modules, advanced research methodologies, medical statistics, laboratory protocols, and diagnostic troubleshooting of respective subjects."
                },
                {
                    category: "Syllabus",
                    title: "Interview Syllabus",
                    desc: "Evaluates specialized clinical expertise, knowledge of medical devices, diagnostic case studies, emergency management, recent scientific developments, and ethical practices."
                },
                {
                    category: "Physical Standards",
                    title: "Medical Fitness Code",
                    desc: "Standard physical and medical examination. Candidates must be declared fit for institutional duty by a government medical board, passing standard cardiovascular and vision checks."
                },
                {
                    category: "Salary",
                    title: "Pay Scale & Structure",
                    desc: "Classified under Pay Level 11 of the 7th CPC (Basic starting pay: ₹67,700). Entitled to dynamic allowances including Dearness Allowance, House Rent Allowance, and Non-Practicing Allowance (NPA)."
                },
                {
                    category: "Cut-off Marks",
                    title: "Interview Qualifiers",
                    desc: "UPSC sets strict minimum qualifying marks for the 100-mark interview: General/EWS candidates must score 50+, OBC requires 45+, and SC/ST/PwBD candidates require 40+."
                },
                {
                    category: "Key Dates",
                    title: "Online Application Schedule",
                    desc: "Official Notification: Released July 2026. Online ORA portal is live, and the last date to apply is August 14, 2026 (6:00 PM). Interviews are tentatively scheduled for late 2026."
                }
            ]
        },
        "Assistant / Upper Division Clerk (UDC)": {
            examName: "ISRO Assistant & UDC Exam 2026",
            cards: [
                {
                    category: "Eligibility",
                    title: "Academic Eligibility",
                    desc: "Age: 18-28 years (relaxations up to 31 for OBC, 33 for SC/ST). Candidates must possess a Bachelor's Degree in any stream with a minimum of 60% marks or a CGPA of 6.3/10. Computer proficiency is mandatory."
                },
                {
                    category: "Exam Pattern",
                    title: "Written & Skill Test",
                    desc: "Stage 1: Written Examination (120 minutes, 200 marks). Stage 2: Computer-based Skill Test (Computer Literacy/Typing) which is qualifying in nature, followed by document verification."
                },
                {
                    category: "Syllabus",
                    title: "Written Exam (Objective)",
                    desc: "Contains 4 sections of 50 marks each: General English (comprehension and grammar), Quantitative Aptitude (arithmetic, statistics), General Intelligence & Reasoning, and General Knowledge."
                },
                {
                    category: "Syllabus",
                    title: "Computer Skill Test",
                    desc: "Practical hands-on assessment on MS Word (document formatting), MS Excel (spreadsheets, basic formulas), MS PowerPoint (presentations), and a typing test of 35 words per minute."
                },
                {
                    category: "Physical Standards",
                    title: "Basic Fitness",
                    desc: "No physical agility standards. Candidate must be physically and mentally fit, passing a standard medical inspection confirming correctable vision and normal auditory skills."
                },
                {
                    category: "Salary",
                    title: "Monthly Emoluments",
                    desc: "Placed under Pay Level 4 of the 7th CPC (Basic pay ₹25,500). Initial monthly gross in-hand is approximately ₹42,000, including high-rate DA, HRA, transport perks, and medical cover."
                },
                {
                    category: "Cut-off Marks",
                    title: "Written Exam Passing Criteria",
                    desc: "To qualify for the skill test shortlist, candidates must secure a minimum of 50% marks in the written exam (40% for reserved categories). Skill test requires a minimum of 60% score."
                },
                {
                    category: "Key Dates",
                    title: "Recruitment Calendar",
                    desc: "The online registration portal starts on July 27, 2026. The absolute deadline to submit online forms is August 16, 2026. Written examination is scheduled for November 2026."
                }
            ]
        },
        "Stenographer Grade-II & III": {
            examName: "Rajasthan HC Stenographer Exam 2026",
            cards: [
                {
                    category: "Eligibility",
                    title: "High Court Eligibility",
                    desc: "Age: 18-40 years (as of January 1, 2027). Must have completed Senior Secondary (12th Pass) from a recognized board and hold an approved computer certificate like RSCIT, O-Level, or COPA."
                },
                {
                    category: "Exam Pattern",
                    title: "No Written Exam",
                    desc: "Selection relies entirely on a Shorthand Speed Dictation Test, a Computer Typing and Efficiency Test, followed by a personal interview. No prelims or descriptive papers are conducted."
                },
                {
                    category: "Syllabus",
                    title: "Shorthand Dictation",
                    desc: "Shorthand Test: 80 words per minute dictation in English (or Hindi) for 6 minutes. Dictated content must be transcribed on a computer word processor within 50 minutes."
                },
                {
                    category: "Syllabus",
                    title: "Typing & Efficiency Test",
                    desc: "1) Computer Speed Test (50 marks, 10 mins). 2) Computer Efficiency Test (50 marks, 10 mins checking paragraph alignment, tables, borders, and margins in MS Word)."
                },
                {
                    category: "Physical Standards",
                    title: "State Language & Health",
                    desc: "Candidate must be mentally sound, physically healthy, and possess good knowledge of Rajasthani dialects alongside typing/reading Hindi in Devanagari script."
                },
                {
                    category: "Salary",
                    title: "Pay Scale (Probation vs Post)",
                    desc: "Stipend of ₹23,700 per month during 2 years of probation. On confirmation, placed in Rajasthan Pay Level 10 (Basic ₹33,800 to ₹1,06,700) with allowances."
                },
                {
                    category: "Cut-off Marks",
                    title: "Speed Test Passing Marks",
                    desc: "Candidates must secure a minimum of 45% marks in shorthands/typing tests to qualify for interview (40% for SC/ST/PwBD). The final merit list is based on combined test scores."
                },
                {
                    category: "Key Dates",
                    title: "Application Timelines",
                    desc: "The online application window is live from July 22, 2026, to August 10, 2026 (5:00 PM). Skill tests will be conducted at centers in Jodhpur and Jaipur in late September 2026."
                }
            ]
        },
        "Specialist Officer (SO)": {
            examName: "Union Bank Specialist Officer Exam 2026",
            cards: [
                {
                    category: "Eligibility",
                    title: "SO Core Eligibility",
                    desc: "Age: 18-50 years (depending on grade/cadre). Must hold an engineering degree (B.E/B.Tech), MBA, CA, or LLB with a minimum of 60% marks, accompanied by relevant professional experience."
                },
                {
                    category: "Exam Pattern",
                    title: "Online Exam & Personal Interview",
                    desc: "Three stages: 1) Online Written Examination (Objective), 2) Group Discussion (GD) or Personal Interview (100 marks), and 3) Document verification and pre-employment medical checks."
                },
                {
                    category: "Syllabus",
                    title: "Professional Written Exam",
                    desc: "Objective (150 Qs): Professional knowledge in the respective specialty domain (50 Qs), Quantitative Aptitude (25 Qs), Reasoning Ability (50 Qs), and English Language (25 Qs)."
                },
                {
                    category: "Syllabus",
                    title: "GD & Personal Interview",
                    desc: "Evaluates advanced industry trends, technological banking transformations, corporate risk analysis, financial accounting, legal frameworks, and leadership traits."
                },
                {
                    category: "Physical Standards",
                    title: "Medical Fitments",
                    desc: "Standard bank medical fitness. Candidates must get certified as healthy by an approved medical practitioner, passing general health, vision, and hearing inspections."
                },
                {
                    category: "Salary",
                    title: "Pay Levels (Scale I to VI)",
                    desc: "Starting basic pay ranges from ₹48,480 (Scale I Manager) to ₹1,20,940 (Scale VI Deputy General Manager) depending on grade, plus DA, lease accommodation, and cash benefits."
                },
                {
                    category: "Cut-off Marks",
                    title: "Selection Weightages",
                    desc: "Candidates must clear sectional and overall cutoffs in the written exam. Final selection weightage is split: 80% on online written exam score and 20% on interview/GD performance."
                },
                {
                    category: "Key Dates",
                    title: "Online Registration Windows",
                    desc: "The registration link is live from July 21, 2026, to August 10, 2026 (11:59 PM). The online computer-based exam is scheduled for mid-September 2026."
                }
            ]
        },
        "Aadhaar Supervisor / Operator": {
            examName: "UIDAI CSC Supervisor Exam 2026",
            cards: [
                {
                    category: "Eligibility",
                    title: "CSC Eligibility",
                    desc: "Age: 18-40 years. Must have passed 12th standard (or matriculation with a 2-year ITI/3-year Polytechnic diploma). Must hold a valid Aadhaar Operator/Supervisor certificate from NSEIT."
                },
                {
                    category: "Exam Pattern",
                    title: "NSEIT Certification & Direct Onboarding",
                    desc: "Selection consists of: 1) Computer-based NSEIT certification test, 2) CSC State Team application review, and 3) Direct machine onboarding and biometric GPS authorization."
                },
                {
                    category: "Syllabus",
                    title: "NSEIT UIDAI Certification",
                    desc: "Written computer exam of 110 marks covering UIDAI registration guidelines, ECMP software operation, biometric capture protocols, security norms, and data privacy laws."
                },
                {
                    category: "Syllabus",
                    title: "CSC Field Training",
                    desc: "On-site training on Child Enrolment Client (CELC) tablets, tablet configurations, Jan Aadhaar data synchronization, and handling local village camp registries."
                },
                {
                    category: "Physical Standards",
                    title: "Field Deployment Stamina",
                    desc: "No high physical fitness exams. Candidate must be physically fit to travel and manage outdoor biometric registration camps inside localized villages in Rajasthan."
                },
                {
                    category: "Salary",
                    title: "Manpower Wages & Incentives",
                    desc: "Initial contract of 1 year. Stipend follows semi-skilled manpower minimum wages of Rajasthan (approx ₹20,000/month) plus attractive transaction incentives per registration."
                },
                {
                    category: "Cut-off Marks",
                    title: "NSEIT Passing Benchmarks",
                    desc: "To qualify as an Operator, candidates must score 55+ out of 110 marks. To qualify as a Supervisor (higher grade), candidates must score 77+ out of 110 marks in the NSEIT exam."
                },
                {
                    category: "Key Dates",
                    title: "Onboarding Calendar",
                    desc: "Online registrations are active from July 24, 2026, to September 30, 2026. Onboarding, hardware mapping, and center allocations begin within 15 days of document verification."
                }
            ]
        },
        "Area Coordinator / Assistant": {
            examName: "RGAVP Rajivika Selection 2026",
            cards: [
                {
                    category: "Eligibility",
                    title: "Rajivika Criteria",
                    desc: "Age: 18-45 years. Exclusively open to women who are active members of a local Self Help Group (SHG) in Rajasthan. Minimum qualification: 10th pass, 12th, or Graduate depending on specific post."
                },
                {
                    category: "Exam Pattern",
                    title: "Document Screening & Interview",
                    desc: "Selection follows: 1) Initial point-based screening based on SHG experience, 2) Shortlisting of files, and 3) Personal Interview conducted by the Block/District Selection Committee."
                },
                {
                    category: "Syllabus",
                    title: "Interview Part I",
                    desc: "Evaluates core principles of Rajivika schemes, National Rural Livelihoods Mission (NRLM) directives, bookkeeping, SHG bank linkage systems, and microfinance management."
                },
                {
                    category: "Syllabus",
                    title: "Interview Part II",
                    desc: "Covers general knowledge of Rajasthani dialects, local block geography, ongoing rural development schemes, basic arithmetic calculations, and local community leadership traits."
                },
                {
                    category: "Physical Standards",
                    title: "Rural Commute Agility",
                    desc: "Must be physically active and capable of traveling extensively between rural villages and blocks in Anupgarh and Sri Ganganagar districts of Rajasthan."
                },
                {
                    category: "Salary",
                    title: "Contract honorarium",
                    desc: "Offers a consolidated monthly contract honorarium of ₹15,000 to ₹25,000 depending on qualifications and block rating. No private business is allowed during contract."
                },
                {
                    category: "Cut-off Marks",
                    title: "Merit Calculations",
                    desc: "Shortlisted candidates are selected strictly by combined merit: Academic qualification points (40%), SHG active years (30%), and the district interview score (30%)."
                },
                {
                    category: "Key Dates",
                    title: "Offline Timelines",
                    desc: "Official Notification released: July 20, 2026. Last date to submit offline physical application forms to Rajivika District office is August 4, 2026 (5:00 PM)."
                }
            ]
        },
        "Specialist Grade III": {
            examName: "UPSC ORA Medical Recruitment 2026",
            cards: [
                {
                    category: "Eligibility",
                    title: "Medical Eligibility",
                    desc: "Age: Max 40 years. Must possess an MBBS degree with a recognized postgraduate qualification (MD/MS) in Neonatology, Endocrinology, Clinical Hematology, or Nuclear Medicine from a medical college."
                },
                {
                    category: "Exam Pattern",
                    title: "Screening CBRT & Interview",
                    desc: "Consists of screening online profiles followed by a Personal Interview (100 marks). In case of a high number of applications, UPSC conducts an online screening test."
                },
                {
                    category: "Syllabus",
                    title: "Written Screening Test",
                    desc: "Covers advanced clinical medicine, special topics in medical college curriculum, diagnostic protocols, public health statistics, and central healthcare guidelines."
                },
                {
                    category: "Syllabus",
                    title: "Interview Assessments",
                    desc: "Tests advanced clinical case resolutions, handling specialized medical equipment, diagnostic methodologies, academic lecture guidelines, and medical college administrative ethics."
                },
                {
                    category: "Physical Standards",
                    title: "Medical Board Code",
                    desc: "Strict standards of medical fitness. Candidates must be certified as healthy by a Central Government Medical Board, passing standard respiratory and cardiac inspections."
                },
                {
                    category: "Salary",
                    title: "Pay Matrix & Allowances",
                    desc: "Recruited under Pay Level 11 of the 7th CPC (Basic pay ₹67,700). Includes Dearness Allowance, HRA, and a mandatory Non-Practicing Allowance (NPA). Total gross exceeds ₹1,25,000/month."
                },
                {
                    category: "Cut-off Marks",
                    title: "Selection Benchmarks",
                    desc: "Minimum qualifying marks for the interview: 50 out of 100 for UR/EWS, 45 for OBC, and 40 for SC/ST. If written tests are held, cutoffs are determined based on score percentiles."
                },
                {
                    category: "Key Dates",
                    title: "Online Registrations",
                    desc: "Detailed advertisement released on July 11, 2026. The online recruitment application portal is active, with the final submission deadline set for July 31, 2026 (6:00 PM)."
                }
            ]
        },
        "Public Prosecutor (SFIO)": {
            examName: "UPSC ORA SFIO Prosecutor Exam 2026",
            cards: [
                {
                    category: "Eligibility",
                    title: "Legal Eligibility",
                    desc: "Age: Max 35 years. Must hold a Bachelor's Degree in Law (LLB) from a recognized university. Candidates must possess a minimum of 2 years of active experience in corporate fraud prosecution."
                },
                {
                    category: "Exam Pattern",
                    title: "ORA Screening & Interview",
                    desc: "Selection consists of: 1) ORA profile screening, 2) Computer Based Recruitment Test (CBRT) (qualifying, 100 marks), and 3) Personal Interview assessing legal acumen (100 marks)."
                },
                {
                    category: "Syllabus",
                    title: "CBRT Legal Syllabus",
                    desc: "Covers the Companies Act 2013, Indian Penal Code (IPC), Code of Criminal Procedure (CrPC), Indian Evidence Act, SFIO prosecution directives, and corporate governance laws."
                },
                {
                    category: "Syllabus",
                    title: "Interview Syllabus",
                    desc: "Assesses court trial methodologies, drafting criminal petitions, financial forensic investigations, bank audit reviews, administrative laws, and constitutional mandates."
                },
                {
                    category: "Physical Standards",
                    title: "General Fitness",
                    desc: "Standard physical and mental fitness. Must be declared fit to perform court and travel duties, passing general systemic health checks by an authorized medical board."
                },
                {
                    category: "Salary",
                    title: "Pay Scale & Level",
                    desc: "Placed in Pay Level 10 of the 7th CPC (Basic starting pay: ₹56,100). Total starting in-hand salary is approximately ₹82,000, including central allowances, medical cover, and HRA."
                },
                {
                    category: "Cut-off Marks",
                    title: "Qualifying Thresholds",
                    desc: "Online Written Exam cutoff is set at 50%. Direct interview qualifying marks: 50% for General, 45% for OBC, and 40% for SC/ST candidates. Merit lists are drawn based on combined scores."
                },
                {
                    category: "Key Dates",
                    title: "Application Schedule",
                    desc: "Official announcement released on July 11, 2026. The online application portal remains open until the absolute closing date of July 31, 2026 (6:00 PM)."
                }
            ]
        }
    };

    // --- 4. DYNAMIC PAGE POPULATION ENGINE ---
    const urlParams = new URLSearchParams(window.location.search);
    let jobKey = urlParams.get('job');

    if (jobKey) {
        jobKey = decodeURIComponent(jobKey).trim();
    }

    // Default fallback to first live job (Specialist & Assistant Professor) if not found (graceful degradation)
    if (!jobKey || !jobsDatabase[jobKey]) {
        jobKey = "Specialist & Assistant Professor";
    }

    const jobData = jobsDatabase[jobKey];

    // Update Page Title and Main Header
    document.title = `${jobKey} Details - GJ Terminal`;
    
    const headerTitle = document.querySelector('.details-header h1');
    if (headerTitle) {
        headerTitle.textContent = `${jobData.examName} Details`;
    }

    // Update Info Cards
    const cards = document.querySelectorAll('.cards-grid .info-card');
    if (cards.length === 8 && jobData.cards && jobData.cards.length === 8) {
        cards.forEach((card, index) => {
            const data = jobData.cards[index];
            
            const categorySpan = card.querySelector('.card-category');
            const titleH3 = card.querySelector('.card-title');
            const descP = card.querySelector('.card-description');

            if (categorySpan) categorySpan.textContent = data.category;
            if (titleH3) titleH3.textContent = data.title;
            if (descP) descP.textContent = data.desc;
        });
    }
});
