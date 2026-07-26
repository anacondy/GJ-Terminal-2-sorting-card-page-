/**
 * GJ Terminal - Dynamic Details Page JavaScript
 * Stores 100% real, accurate details for all 12 job profiles and populates the details UI dynamically.
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. DYNAMIC ROUTING FOR THE BACK BUTTON ---
    const backBtn = document.querySelector('.back-btn');
    if (backBtn && document.referrer) {
        const referrer = document.referrer;
        // Check if referrer is one of our index pages
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

    // --- 3. REAL DATA STORE FOR ALL 12 GOVERNMENT JOB PROFILES ---
    const jobsDatabase = {
        "IAS Officer": {
            examName: "UPSC Civil Services Exam",
            cards: [
                {
                    category: "Eligibility",
                    title: "Core Eligibility Criteria",
                    desc: "Must be a citizen of India. Age: 21-32 years (with relaxations for OBC/SC/ST). Minimum qualification: Graduation in any discipline from a recognized university. Maximum attempts: 6 for General, 9 for OBC."
                },
                {
                    category: "Exam Pattern",
                    title: "Three-Stage Process",
                    desc: "Consists of three stages: 1) Civil Services Aptitude Test (Prelims - Objective), 2) CSE Main Exam (9 Descriptive Written Papers), and 3) Personal Interview/Personality Test."
                },
                {
                    category: "Syllabus",
                    title: "Preliminary Syllabus",
                    desc: "Paper I (General Studies): History, Geography, Indian Polity, Economy, Science & Technology, Environment, and Current Affairs. Paper II (CSAT): Quantitative Aptitude, Logical Reasoning, and Reading Comprehension (qualifying at 33%)."
                },
                {
                    category: "Syllabus",
                    title: "Mains Syllabus",
                    desc: "Includes 9 descriptive papers: Paper A (Indian Language), Paper B (English), Paper I (Essay), Papers II-V (General Studies GS 1 to GS 4 covering history, polity, security, ethics), and Papers VI-VII (two papers on an optional subject)."
                },
                {
                    category: "Physical Standards",
                    title: "Medical & Fitness Board",
                    desc: "Basic medical standards as per UPSC guidelines. Height and chest requirements are not mandatory for IAS (unlike IPS), but candidates must be mentally and physically fit for public service."
                },
                {
                    category: "Salary",
                    title: "Pay Scale & Structure",
                    desc: "Recruited under Pay Level 10 of the 7th Central Pay Commission (CPC). Starting basic salary is ₹56,100 per month. Officers also receive Dearness Allowance (DA), House Rent Allowance (HRA), Transport Allowance (TA), and government housing."
                },
                {
                    category: "Cut-off Marks",
                    title: "Previous Year Trends",
                    desc: "Prelims GS Paper 1 cut-offs usually hover between 85 and 95 marks out of 200 in recent years. Mains cut-off for the written papers sits around 740-780 out of 1750 marks. Final rank depends on the total score out of 2025."
                },
                {
                    category: "Key Dates",
                    title: "Important Schedule",
                    desc: "UPSC publishes its annual notification in February. The Preliminary examination is conducted in May/June, the Mains descriptive exam takes place in September, and the Interviews run from January to April."
                }
            ]
        },
        "IPS Officer": {
            examName: "UPSC Civil Services Exam (IPS)",
            cards: [
                {
                    category: "Eligibility",
                    title: "Core Eligibility Criteria",
                    desc: "Must be a citizen of India. Age: 21-32 years (relaxable for reserved categories). Must possess a graduation degree from a recognized university. General attempts limited to 6, with relaxations."
                },
                {
                    category: "Exam Pattern",
                    title: "Three-Stage Process",
                    desc: "Recruitment shares the UPSC CSE platform: 1) Prelims (Objective, 2 papers), 2) Mains (Descriptive, 9 papers), and 3) Personality Test, accompanied by a rigorous physical/medical assessment."
                },
                {
                    category: "Syllabus",
                    title: "Preliminary Syllabus",
                    desc: "Identical to IAS: GS Paper I focuses on general knowledge, polity, and current affairs, while CSAT (GS Paper II) evaluates analytical ability, reasoning, and comprehension."
                },
                {
                    category: "Syllabus",
                    title: "Mains Syllabus",
                    desc: "Consists of 9 descriptive papers covering Essay, General Studies (GS 1 to GS 4: History, Polity, Geography, Technology, Ethics), and choice of one optional subject with 2 papers."
                },
                {
                    category: "Physical Standards",
                    title: "Physical & Height Test",
                    desc: "Strict requirements apply. Minimum height: 165 cm for Men (160 cm for SC/ST/OBC), 150 cm for Women. Chest girth: Minimum 84 cm for Men with 5 cm expansion. Strict visual standards (6/6 or 6/9) are mandatory."
                },
                {
                    category: "Salary",
                    title: "Pay Scale & Structure",
                    desc: "Starting basic pay is ₹56,100 under Pay Level 10 of the 7th CPC. Officers get dynamic allowances, government vehicles, security escorts, subsidised domestic help, and medical coverage."
                },
                {
                    category: "Cut-off Marks",
                    title: "Previous Year Trends",
                    desc: "GS Prelims cut-off is the same as CSE (typically 43%-48%). Final service allocation depends on rank, physical fitness clearance, and vacancy availability in the specific state cadre."
                },
                {
                    category: "Key Dates",
                    title: "Important Schedule",
                    desc: "Matches the civil services calendar: Notification released in February, Prelims conducted in May/June, Mains in September, and final physical checks alongside interview stages in the winter."
                }
            ]
        },
        "IFS Officer": {
            examName: "UPSC Indian Foreign Service",
            cards: [
                {
                    category: "Eligibility",
                    title: "Core Eligibility Criteria",
                    desc: "Must be a citizen of India. Age: 21-32 years. Candidate must hold a degree from a recognized university. This is recruited via the same civil services exam; only top rankers are allocated to IFS."
                },
                {
                    category: "Exam Pattern",
                    title: "Three-Stage Process",
                    desc: "Follows the standard UPSC Civil Services pipeline: Prelims (Objective screening), Mains (Descriptive papers focusing on global topics and language), and Personality Test which scores diplomatic temperament."
                },
                {
                    category: "Syllabus",
                    title: "Preliminary Syllabus",
                    desc: "Covers current affairs, international relations, history, geography, polity, economics, and environmental sciences. CSAT is a qualifying paper testing logical and quantitative aptitude."
                },
                {
                    category: "Syllabus",
                    title: "Mains Syllabus",
                    desc: "Includes 9 descriptive papers. Candidates are evaluated on English, General Studies (covering security, economy, global bodies, and international relations), and a specialized optional subject."
                },
                {
                    category: "Physical Standards",
                    title: "Medical Fitness Board",
                    desc: "Standard physical and medical fitness. Must be certified as medically fit to travel and serve abroad, passing standard tests for hearing, vision, and blood pressure."
                },
                {
                    category: "Salary",
                    title: "Pay Scale & Structure",
                    desc: "Placed in Pay Level 10 (Basic ₹56,100 to ₹60,000+). When posted abroad, officers receive an additional Special Foreign Allowance (SFA) tailored to the cost of living of the host country, which is completely tax-free."
                },
                {
                    category: "Cut-off Marks",
                    title: "Previous Year Trends",
                    desc: "The IFS is historically highly sought after, with only 30-40 vacancies annually. Securing IFS usually requires a rank within the top 80-120 in the General category."
                },
                {
                    category: "Key Dates",
                    title: "Important Schedule",
                    desc: "Follows UPSC CSE timelines: Notification in February, Prelims in May/June, Mains in September. Training begins in September of the following year at LBSNAA and the Sushma Swaraj Foreign Service Institute."
                }
            ]
        },
        "RBI Grade B": {
            examName: "RBI Grade B Officer Exam",
            cards: [
                {
                    category: "Eligibility",
                    title: "Core Eligibility Criteria",
                    desc: "Age: 21-30 years. Must possess a minimum of 60% marks (50% for SC/ST/PwBD) in Bachelor's degree, 12th, and 10th examinations from recognized boards and universities."
                },
                {
                    category: "Exam Pattern",
                    title: "Three-Phase Selection",
                    desc: "Phase I (Online Objective Test), Phase II (Online Objective + Descriptive Papers), and Phase III (Personal Interview). Sectional and overall cut-offs apply in Phase I."
                },
                {
                    category: "Syllabus",
                    title: "Phase I Syllabus",
                    desc: "120-minute paper of 200 marks containing 4 sections: General Awareness (the heaviest weightage), Quantitative Aptitude, English Language, and Reasoning."
                },
                {
                    category: "Syllabus",
                    title: "Phase II Syllabus",
                    desc: "Paper 1: Economic and Social Issues (ESI) (50% objective, 50% descriptive). Paper 2: English Writing Skills (Descriptive). Paper 3: Finance and Management (FM) (50% objective, 50% descriptive)."
                },
                {
                    category: "Physical Standards",
                    title: "Medical Fitness",
                    desc: "Standard commercial banking physical and medical tests. No specific height/chest dimensions are checked; color blindness may restrict allocation in specific security departments."
                },
                {
                    category: "Salary",
                    title: "Pay Scale & allowances",
                    desc: "Starting basic pay is ₹55,200 per month. The initial monthly gross emoluments are approximately ₹1,08,000+ which includes allowances like Special Allowance, local compensatory allowance, and Grade Allowance."
                },
                {
                    category: "Cut-off Marks",
                    title: "Previous Year Trends",
                    desc: "Phase I cut-offs depend heavily on difficulty; in recent years, it ranged from 54 to 66.8 marks out of 200. Phase II + Interview combined cut-off for final selection hovers around 235-245 out of 375."
                },
                {
                    category: "Key Dates",
                    title: "Important Schedule",
                    desc: "Notifications are published around May/June. Phase I is usually conducted in July, Phase II in August, and Interviews occur between October and December."
                }
            ]
        },
        "SBI PO": {
            examName: "SBI Probationary Officer Exam",
            cards: [
                {
                    category: "Eligibility",
                    title: "Core Eligibility Criteria",
                    desc: "Age: 21-30 years (relaxations apply as per government rules). Must hold a Bachelor's Degree in any discipline from a recognized university. Final year students are eligible to apply."
                },
                {
                    category: "Exam Pattern",
                    title: "Three-Phase Process",
                    desc: "Phase I: Preliminary Exam (Objective, 100 marks). Phase II: Main Exam (Objective + Descriptive, 250 marks). Phase III: Psychometric Test, Group Exercises (20 marks) & Interview (30 marks)."
                },
                {
                    category: "Syllabus",
                    title: "Preliminary Syllabus",
                    desc: "Comprises 3 sections (Total 100 Qs / 100 Marks / 1 Hour): English Language (30 Qs), Quantitative Aptitude (35 Qs), and Reasoning Ability (35 Qs). Sectional timing is 20 minutes each."
                },
                {
                    category: "Syllabus",
                    title: "Mains Syllabus",
                    desc: "Objective Test (200 marks): Reasoning & Computer Aptitude, Data Analysis & Interpretation, General/Economy/Banking Awareness, and English Language. Descriptive Test (50 marks): Letter writing & Essay."
                },
                {
                    category: "Physical Standards",
                    title: "Medical Standards",
                    desc: "Basic bank medical test. Vision, hearing, and basic blood profiles are examined. The candidate must be physically and mentally fit to withstand long banking hours."
                },
                {
                    category: "Salary",
                    title: "Pay Scale & Structure",
                    desc: "Starts with 4 advance increments, basic pay is ₹41,960. Total compensation package in-hand is around ₹65,000 to ₹70,000 per month depending on posting location, along with lease housing."
                },
                {
                    category: "Cut-off Marks",
                    title: "Previous Year Trends",
                    desc: "Prelims cut-off is around 56-63 out of 100. Mains overall cut-off generally falls in the range of 78-88 out of 250. There are no sectional cut-offs in SBI PO exams."
                },
                {
                    category: "Key Dates",
                    title: "Important Schedule",
                    desc: "The notification is typically released in September. Prelims take place in November, Mains in December or January, and the final results are announced in March."
                }
            ]
        },
        "IBPS PO": {
            examName: "IBPS Probationary Officer Exam",
            cards: [
                {
                    category: "Eligibility",
                    title: "Core Eligibility Criteria",
                    desc: "Age: 20-30 years. Must have a graduation degree in any discipline from an institute recognized by the Government of India. Registration on the IBPS portal is mandatory."
                },
                {
                    category: "Exam Pattern",
                    title: "Three-Stage Recruitment",
                    desc: "Stage I: Preliminary Exam (Online, 100 marks). Stage II: Main Exam (Online Objective + Descriptive, 225 marks). Stage III: Common Interview (100 marks, weighted 80:20 with Mains)."
                },
                {
                    category: "Syllabus",
                    title: "Preliminary Syllabus",
                    desc: "Similar to other bank exams: Quantitative Aptitude (35 questions), Reasoning Ability (35 questions), and English Language (30 questions) with separate section timers."
                },
                {
                    category: "Syllabus",
                    title: "Mains Syllabus",
                    desc: "Objective (200 marks / 3 hours): Reasoning & Computer Aptitude, Data Analysis & Interpretation, General/Economy/Banking Awareness, and English. Descriptive: Essay & Letter writing (25 marks)."
                },
                {
                    category: "Physical Standards",
                    title: "Medical Examination",
                    desc: "Candidates selected for public sector banks must pass the standard medical fitness checks conducted by the medical board of the respective participating banks."
                },
                {
                    category: "Salary",
                    title: "Pay Scale & Structure",
                    desc: "The basic starting pay is ₹36,000. Total in-hand monthly salary including Dearness Allowance, HRA, City Compensatory Allowance, and special allowances is approximately ₹52,000 to ₹57,000."
                },
                {
                    category: "Cut-off Marks",
                    title: "Previous Year Trends",
                    desc: "Prelims cut-off usually lands around 50 to 55 out of 100. Mains cut-off lies around 71 to 80 out of 225. Both sectional and overall cut-off scores are enforced."
                },
                {
                    category: "Key Dates",
                    title: "Important Schedule",
                    desc: "IBPS releases its annual calendar in January. Notification is published in August, Prelims are held in October, Mains in November, and Interviews take place in January/February."
                }
            ]
        },
        "SSC CGL (AAO)": {
            examName: "SSC Combined Graduate Level (AAO)",
            cards: [
                {
                    category: "Eligibility",
                    title: "Core Eligibility Criteria",
                    desc: "Age: 18-30 years. Graduation from a recognized university. Desirable (not compulsory): Chartered Accountant, Cost & Management Accountant, MBA (Finance), or Master in Commerce."
                },
                {
                    category: "Exam Pattern",
                    title: "Two-Tier Screening",
                    desc: "Tier I: Computer Based Test (Screening). Tier II: Descriptive is discontinued; Paper I (compulsory for all) and Paper III (specially for Assistant Audit/Accounts Officer)."
                },
                {
                    category: "Syllabus",
                    title: "Tier I Syllabus",
                    desc: "Includes four modules of 25 questions each: Quantitative Aptitude, General Intelligence & Reasoning, English Comprehension, and General Awareness (Total 200 marks)."
                },
                {
                    category: "Syllabus",
                    title: "Tier II Syllabus",
                    desc: "Paper I: Maths, Reasoning, English, General Awareness, Computer Knowledge (Qualifying). Paper III (Specialized AAO): Finance and Accounts (80 marks) and Economics and Governance (120 marks)."
                },
                {
                    category: "Physical Standards",
                    title: "Medical Checkup",
                    desc: "Basic medical standards. No strict physical tests are required. Normal vision and general systemic health are verified during the document verification stage."
                },
                {
                    category: "Salary",
                    title: "Pay Scale & Structure",
                    desc: "The only Gazetted officer post filled through SSC CGL. Placed in Pay Level 8 (7th CPC). Basic pay starts at ₹47,600. Initial in-hand salary ranges between ₹75,000 and ₹85,000 depending on city tier."
                },
                {
                    category: "Cut-off Marks",
                    title: "Previous Year Trends",
                    desc: "AAO post has the highest Tier I cut-off in CGL, usually between 150 and 170 marks out of 200 due to specialized nature and high salary grade."
                },
                {
                    category: "Key Dates",
                    title: "Important Schedule",
                    desc: "Notification is released in June/July. Tier I online test is held in September/October, and Tier II specialized papers are scheduled in December."
                }
            ]
        },
        "NDA Officer": {
            examName: "UPSC National Defence Academy Exam",
            cards: [
                {
                    category: "Eligibility",
                    title: "Core Eligibility Criteria",
                    desc: "Unmarried male & female candidates. Age: 16.5 to 19.5 years. Education: 12th class pass of the 10+2 pattern (For Air Force and Navy, 12th class pass with Physics and Mathematics is mandatory)."
                },
                {
                    category: "Exam Pattern",
                    title: "Written & SSB Interview",
                    desc: "Stage 1: Written examination of 900 marks (Maths - 300, General Ability Test - 600). Stage 2: 5-day SSB (Services Selection Board) interview assessing intelligence and personality traits (900 marks)."
                },
                {
                    category: "Syllabus",
                    title: "Written Paper I (Maths)",
                    desc: "150-minute test. Topics include Algebra, Trigonometry, Analytical Geometry (2D & 3D), Differential Calculus, Integral Calculus, Vector Algebra, Statistics, and Probability."
                },
                {
                    category: "Syllabus",
                    title: "Written Paper II (GAT)",
                    desc: "Divided into Part A: English (200 marks checking grammar and usage) and Part B: General Knowledge (400 marks covering Physics, Chemistry, General Science, History, Geography, and Current Events)."
                },
                {
                    category: "Physical Standards",
                    title: "Strict Military Standards",
                    desc: "Strict physical dimensions: Minimum height of 157 cm (162.5 cm for Air Force). Body mass index relative to height, excellent cardiovascular fitness, sound hearing, and perfect uncorrected vision for pilots."
                },
                {
                    category: "Salary",
                    title: "Stipend & Commission Pay",
                    desc: "Stipend during Cadet training is ₹56,100. Upon commissioning as Lieutenant: Level 10 basic pay of ₹56,100 + Military Service Pay (MSP) of ₹15,500 + allowances. Starting in-hand gross is ₹85,000+."
                },
                {
                    category: "Cut-off Marks",
                    title: "Previous Year Trends",
                    desc: "Written exam cut-off out of 900 ranges between 340 and 360 marks (minimum 25% sectional requirement in both papers). Final cut-off after SSB stands around 700 to 720 out of 1800."
                },
                {
                    category: "Key Dates",
                    title: "Important Schedule",
                    desc: "Conducted twice a year by UPSC. NDA I: Notification in December, exam in April. NDA II: Notification in May, exam in September. SSB interviews occur 3-4 months after results."
                }
            ]
        },
        "ISRO Scientist": {
            examName: "ISRO Scientist/Engineer 'SC' Recruitment",
            cards: [
                {
                    category: "Eligibility",
                    title: "Core Eligibility Criteria",
                    desc: "Age limit: 21-35 years. B.E/B.Tech or equivalent degree in first class with an aggregate minimum of 65% marks or CGPA of 6.84 out of 10 in Mechanical, Electronics, Electrical, Civil, or CS."
                },
                {
                    category: "Exam Pattern",
                    title: "Written & Technical Interview",
                    desc: "Consists of: 1) Written Test (80 objective questions testing engineering discipline concepts), 2) Technical Interview. Written score serves as a gateway; selection relies 50% on interview."
                },
                {
                    category: "Syllabus",
                    title: "Written Test Syllabus",
                    desc: "Strictly conforms to core undergraduate engineering curriculum of the applied field. Paper includes sub-specializations, mathematical methods, material sciences, and analytical physics."
                },
                {
                    category: "Syllabus",
                    title: "Interview Syllabus",
                    desc: "No set syllabus. Interview panel evaluates deep understanding of core engineering mechanics, final year academic projects, logical troubleshooting, and knowledge of space payloads."
                },
                {
                    category: "Physical Standards",
                    title: "Medical Evaluation",
                    desc: "Candidates must meet the medical standard set by ISRO's occupational health department. Sound eyesight (correctable) and mental stability for high-stress research are verified."
                },
                {
                    category: "Salary",
                    title: "Pay Scale & Allowances",
                    desc: "Recruited as Scientist/Engineer 'SC' at Pay Level 10 of the 7th CPC. Basic pay is ₹56,100. Total monthly starting pay is ₹80,000+ including HRA, DA, transport allowance, and free space medical insurance."
                },
                {
                    category: "Cut-off Marks",
                    title: "Previous Year Trends",
                    desc: "Written test cutoff is usually around 60% for General and 50% for reserved candidates. Interview cutoff is 60% (50/100 marks). Final selection list is drawn based on merit and vacancy."
                },
                {
                    category: "Key Dates",
                    title: "Important Schedule",
                    desc: "ICRB notifications are published once a year, depending on satellite and rocket project vacancies. Often released in March/April or October/November with online exams within 90 days."
                }
            ]
        },
        "DRDO Scientist": {
            examName: "DRDO Scientist 'B' Recruitment",
            cards: [
                {
                    category: "Eligibility",
                    title: "Core Eligibility Criteria",
                    desc: "Age limit: 21-28 years (for General). First-class Bachelor's degree in Engineering (B.Tech/B.E) in respective disciplines and a valid GATE (Graduate Aptitude Test in Engineering) score are mandatory."
                },
                {
                    category: "Exam Pattern",
                    title: "Screening & Descriptive",
                    desc: "1) Screening based on GATE score (10:1 ratio), 2) Written Descriptive Examination (Paper I & II of 300 marks each), and 3) Personal Technical Interview (Weightage is 80% descriptive, 20% interview)."
                },
                {
                    category: "Syllabus",
                    title: "Descriptive Paper I",
                    desc: "3-hour conventional paper covering advanced mathematics, fundamental physics, and primary subjects of the engineering discipline (e.g., thermodynamics, circuit theory, computer architecture)."
                },
                {
                    category: "Syllabus",
                    title: "Descriptive Paper II",
                    desc: "Focuses on advanced applied engineering concepts, laboratory project structures, electronics instrumentation, modern programming structures, and engineering materials."
                },
                {
                    category: "Physical Standards",
                    title: "Medical Clearance",
                    desc: "Basic physical health is required. Must obtain a medical fitness certificate from a government civil surgeon or a designated military medical officer prior to final induction."
                },
                {
                    category: "Salary",
                    title: "Pay Scale & Allowances",
                    desc: "Inducted at Pay Level 10 (Basic ₹56,100). Total gross salary is around ₹85,000+ with professional update allowance (₹15,000/year), free medical treatment, and defense research perks."
                },
                {
                    category: "Cut-off Marks",
                    title: "Previous Year Trends",
                    desc: "GATE cutoff is extremely high (usually 98+ percentile) for initial screening. Descriptive written test cutoff is approximately 50-55% to qualify for the interview round."
                },
                {
                    category: "Key Dates",
                    title: "Important Schedule",
                    desc: "RAC DRDO publishes notifications annually, shortly after GATE results are declared (around April/May). The descriptive written exam is held in October, with interviews in December."
                }
            ]
        },
        "Railway Group A": {
            examName: "Railway Group A (UPSC ESE)",
            cards: [
                {
                    category: "Eligibility",
                    title: "Core Eligibility Criteria",
                    desc: "Age limit: 21-30 years. Must hold an Engineering degree (B.E/B.Tech) in Civil, Mechanical, Electrical, or Electronics & Telecommunication engineering from a recognized university."
                },
                {
                    category: "Exam Pattern",
                    title: "Three-Stage ESE",
                    desc: "Conducted via UPSC Engineering Services Examination (ESE): Stage I (Prelims - Objective, 500 marks), Stage II (Mains - Conventional Descriptive, 600 marks), Stage III (Personality Test - 200 marks)."
                },
                {
                    category: "Syllabus",
                    title: "Stage I (Prelims) Syllabus",
                    desc: "Paper I: General Studies and Engineering Aptitude (200 marks on environment, project management, standards, and ethics). Paper II: Specialized Engineering Discipline Paper (300 marks)."
                },
                {
                    category: "Syllabus",
                    title: "Stage II (Mains) Syllabus",
                    desc: "Consists of two conventional, descriptive papers (3 hours and 300 marks each) focusing entirely on the technical engineering core of the selected branch."
                },
                {
                    category: "Physical Standards",
                    title: "Strict Railway Medicals",
                    desc: "Must undergo a rigorous medical examination (Executive/Technical category). High standards of visual acuity (usually Class A-3 or B-1), chest expansion, and physical agility are checked."
                },
                {
                    category: "Salary",
                    title: "Pay Scale & Allowances",
                    desc: "Starts at Pay Level 10 of 7th CPC (Basic pay ₹56,100). Initial monthly gross is approximately ₹80,000+. Includes unique railway benefits like free first-class railway travel passes, medical facilities, and quarters."
                },
                {
                    category: "Cut-off Marks",
                    title: "Previous Year Trends",
                    desc: "Prelims cutoff ranges between 210 and 240 out of 500. Cumulative final cutoff (Prelims + Mains + Interview) varies by engineering branch, typically ranging from 600 to 720 out of 1300."
                },
                {
                    category: "Key Dates",
                    title: "Important Schedule",
                    desc: "UPSC ESE notification is released in September/October. Preliminary exam takes place in February, Main exam is held in June, and the final results are compiled by December."
                }
            ]
        },
        "LIC AAO": {
            examName: "LIC Assistant Administrative Officer Exam",
            cards: [
                {
                    category: "Eligibility",
                    title: "Core Eligibility Criteria",
                    desc: "Age: 21-30 years. Bachelor's Degree in any discipline from a recognized Indian University or Institution. Only Indian citizens are eligible to apply."
                },
                {
                    category: "Exam Pattern",
                    title: "Three-Phase Examination",
                    desc: "Phase I: Preliminary Examination (Objective). Phase II: Main Examination (Objective + Descriptive). Phase III: Interview, followed by Pre-Recruitment Medical Examination."
                },
                {
                    category: "Syllabus",
                    title: "Preliminary Syllabus",
                    desc: "Includes 3 sections: Reasoning Ability (35 marks), Quantitative Aptitude (35 marks), and English Language (30 marks). English marks are qualifying only and not counted for ranking."
                },
                {
                    category: "Syllabus",
                    title: "Mains Syllabus",
                    desc: "Objective (300 marks): Reasoning, GK & Current Affairs, Data Analysis, and Insurance/Financial Market Awareness. Descriptive (25 marks): Letter Writing & Essay on insurance and finance."
                },
                {
                    category: "Physical Standards",
                    title: "Medical Examination",
                    desc: "Must clear the medical test conducted by LIC's approved medical panel. Candidates must not possess any systemic illness that inhibits corporate administrative duties."
                },
                {
                    category: "Salary",
                    title: "Pay Scale & Allowances",
                    desc: "Basic pay is ₹53,600 in the scale of ₹53600-90630. Total monthly emoluments including DA, HRA, and city allowances is approximately ₹92,870 in Class 'A' cities, plus gratuity and pension benefits."
                },
                {
                    category: "Cut-off Marks",
                    title: "Previous Year Trends",
                    desc: "Prelims cut-off is around 55-60 out of 70 marks (English is qualifying). Mains cut-off hovers around 215-235 out of 300 marks. High sectional cutoffs apply for Insurance awareness."
                },
                {
                    category: "Key Dates",
                    title: "Important Schedule",
                    desc: "Notification is published based on vacancy requirements, typically around January. Preliminary examinations are held in March, with Main exams scheduled in April."
                }
            ]
        }
    };

    // --- 4. DYNAMIC PAGE POPULATION ENGINE ---
    // Retrieve URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    let jobKey = urlParams.get('job');

    // Decode job key and fallback if invalid
    if (jobKey) {
        jobKey = decodeURIComponent(jobKey).trim();
    }

    // Default fallback to IAS Officer if not found in database (graceful degradation)
    if (!jobKey || !jobsDatabase[jobKey]) {
        jobKey = "IAS Officer";
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
