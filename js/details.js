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
                    title: "Important Schedule",
                    desc: "<span class=\"date-highlight\">Starting</span> - 25th July, 2026<br><span class=\"date-highlight\">Closing</span> - 14th Aug, 2026<br><span class=\"date-highlight\">Exam, if date available</span> - To be announced"
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
                    title: "Important Schedule",
                    desc: "<span class=\"date-highlight\">Starting</span> - 27th July, 2026<br><span class=\"date-highlight\">Closing</span> - 16th Aug, 2026<br><span class=\"date-highlight\">Exam, if date available</span> - Nov, 2026"
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
                    title: "Important Schedule",
                    desc: "<span class=\"date-highlight\">Starting</span> - 22nd July, 2026<br><span class=\"date-highlight\">Closing</span> - 10th Aug, 2026<br><span class=\"date-highlight\">Exam, if date available</span> - Late Sep, 2026"
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
                    title: "Important Schedule",
                    desc: "<span class=\"date-highlight\">Starting</span> - 21st July, 2026<br><span class=\"date-highlight\">Closing</span> - 10th Aug, 2026<br><span class=\"date-highlight\">Exam, if date available</span> - Mid-Sep, 2026"
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
                    title: "Important Schedule",
                    desc: "<span class=\"date-highlight\">Starting</span> - 24th July, 2026<br><span class=\"date-highlight\">Closing</span> - 30th Sep, 2026<br><span class=\"date-highlight\">Exam, if date available</span> - Immediately upon scheduling"
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
                    title: "Important Schedule",
                    desc: "<span class=\"date-highlight\">Starting</span> - 20th July, 2026<br><span class=\"date-highlight\">Closing</span> - 04th Aug, 2026<br><span class=\"date-highlight\">Exam, if date available</span> - Aug/Sep, 2026"
                }
            ]
        },
        "Technician Grade-I & III": {
            examName: "RRB Technician Recruitment 2026 (CEN 02/2026)",
            cards: [
                {
                    category: "Eligibility",
                    title: "Technician Eligibility Criteria",
                    desc: "Grade I Signal: BE/B.Tech/B.Sc or Diploma in Engineering. Grade III: Class 10th Pass with valid ITI certificate in related trade, or Class 12th Pass with Physics and Mathematics. Age limit: 18-33 years."
                },
                {
                    category: "Exam Pattern",
                    title: "Single-Stage Written Test",
                    desc: "Direct selection based on a single-stage Computer Based Test (CBT) of 100 objective questions, followed by document verification (DV) and standard railway medical exams. No interview."
                },
                {
                    category: "Syllabus",
                    title: "Grade I Signal CBT Pattern",
                    desc: "Objective (100 Qs / 90 Mins): Basic Science and Engineering (35 Qs), Mathematics (20 Qs), Basics of Computers (20 Qs), General Intelligence & Reasoning (15 Qs), and General Awareness (10 Qs)."
                },
                {
                    category: "Syllabus",
                    title: "Grade III CBT Pattern",
                    desc: "Objective (100 Qs / 90 Mins): Mathematics (25 Qs), General Intelligence & Reasoning (25 Qs), General Science (40 Qs), and General Awareness (10 Qs). Negative marking of 1/3 for incorrect answers."
                },
                {
                    category: "Physical Standards",
                    title: "Strict Railway Medical Code",
                    desc: "Must clear medical classification for railway technical posts. Eye vision standards (A-3 or B-1) are extremely strict—normal color vision, field of vision, and night vision are checked."
                },
                {
                    category: "Salary",
                    title: "Pay scale & allowances",
                    desc: "Grade I Signal: Level 5 of 7th CPC (Basic: ₹29,200). Grade III: Level 2 of 7th CPC (Basic: ₹19,900) plus allowances (such as Dearness Allowance, HRA, Transport, and special running allowance)."
                },
                {
                    category: "Cut-off Marks",
                    title: "CBT Qualifying Percentiles",
                    desc: "Minimum qualifying percentiles: General/EWS - 40%, OBC-NCL/SC - 30%, ST - 25%. Final service allocation depends strictly on CBT normalized merit scores."
                },
                {
                    category: "Key Dates",
                    title: "Important Schedule",
                    desc: "<span class=\"date-highlight\">Starting</span> - 30th June, 2026<br><span class=\"date-highlight\">Closing</span> - 29th July, 2026<br><span class=\"date-highlight\">Exam, if date available</span> - CBT to be notified"
                }
            ]
        },
        "Section Controller": {
            examName: "RRB Section Controller Recruitment 2026 (CEN 03/2026)",
            cards: [
                {
                    category: "Eligibility",
                    title: "Controller Eligibility Criteria",
                    desc: "Age: 20-33 years. Must hold a Bachelor's Degree in any stream from a recognized university. Candidates must take a live horizontal photo with a contrasting background."
                },
                {
                    category: "Exam Pattern",
                    title: "Two-Stage Assessment",
                    desc: "Consists of: 1) Computer Based Test (CBT - 100 objective questions), 2) Computer Based Aptitude Test (CBAT - intelligence and reasoning batteries), and 3) Document Verification and medicals."
                },
                {
                    category: "Syllabus",
                    title: "Written Test (CBT)",
                    desc: "Objective (100 Qs / 120 Mins): Analytical & Mathematical Capability (60 Qs), Logical Capability (20 Qs), and Mental Reasoning (20 Qs). Penalty of 1/3 mark for each wrong answer."
                },
                {
                    category: "Syllabus",
                    title: "Aptitude Test (CBAT)",
                    desc: "Comprises psychological test batteries checking situational judgment, spatial concentration, speed perception, and alertness. No negative marking in CBAT; minimum qualifying T-Score of 42 is required."
                },
                {
                    category: "Physical Standards",
                    title: "Strict Railway medicals",
                    desc: "Executive Category medical exam. Requires flawless eyesight, normal color perception, and physical stamina to handle intensive railway traffic controller operations."
                },
                {
                    category: "Salary",
                    title: "Pay scale & Structure",
                    desc: "Placed under Pay Level 6 of the 7th CPC. Starting basic pay is ₹35,400 per month, plus substantial running allowances, dearness allowances, medical benefits, and free rail passes."
                },
                {
                    category: "Cut-off Marks",
                    title: "Final merit Weightage",
                    desc: "CBT qualifies candidates for CBAT at an 8:1 ratio. The final selection merit list is compiled with 70% weightage given to CBT scores and 30% weightage given to CBAT aptitude scores."
                },
                {
                    category: "Key Dates",
                    title: "Important Schedule",
                    desc: "<span class=\"date-highlight\">Starting</span> - 15th July, 2026<br><span class=\"date-highlight\">Closing</span> - 14th Aug, 2026<br><span class=\"date-highlight\">Exam, if date available</span> - CBT to be notified"
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
            
            // Set innerHTML for Key Dates card (index 7) to parse highlight spans & line breaks
            if (index === 7) {
                if (descP) descP.innerHTML = data.desc;
            } else {
                if (descP) descP.textContent = data.desc;
            }
        });
    }
});
