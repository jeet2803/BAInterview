import { Question } from '../types';

export const questions: Question[] = [
  // KYC & AML
  {
    id: 'kyc_1',
    topic: 'KYC & AML',
    difficulty: 'Hard',
    question: 'A high-net-worth individual tries to deposit $50,000 cash spread across 6 transaction endpoints in a single day. What is this practice called, and what is the responsibility of the Banking Business Analyst when designing the automated AML alert workflow?',
    options: {
      A: 'Phishing; the BA should create a workflow to immediately freeze the account without notifying the compliance officer.',
      B: 'Structuring (or Smurfing); the BA must design rules to aggregate deposits within a rolling 24-hour window to trigger a Suspicious Activity Report (SAR) flag.',
      C: 'Round-tripping; the BA should configure the ledger to charge a structured deposit fee and classify custody accounts under Tier 1 capital.',
      D: 'Layering; the BA should map the customer profile to a low-risk category with a relaxed transaction threshold of $100k.'
    },
    answer: 'B',
    explanation: 'Structuring involves dividing a large cash transaction into smaller increments below reporting thresholds (such as $10k in the US or regional equivalent) to evade AML scanning. In designing banking workflows, a Business Analyst must define business rules that aggregate transactions across accounts belonging to the same Ultimate Beneficial Owner (UBO) within a specific timeframe (e.g., rolling 24-hour cycle) to flag potential structural evasion to compliance software.',
    interviewTip: 'When interviewing for AML/KYC roles, highlight the distinction between Placement, Layering, and Integration. Structuring is a typical Placement phase mechanism. ALWAYS mention that regulatory rules require automated alert thresholds (e.g., CTR or SAR triggers) which BAs map within FRDs.',
    memoryTrick: 'S = Structuring = Smurfing = Splitting big sums into Small sub-sums.',
    realExample: 'A customer deposits $9,500 cash at three different branches of the same bank on Monday morning to bypass the automatic $10,000 Currency Transaction Report rule.',
    whyOthersWrong: {
      A: 'Phishing is a social engineering attack to steal sensitive credentials. Freezing accounts without a proper AML automated triage protocol violates Standard Operating Procedures.',
      C: 'Round-tripping is a process where funds are routed out of a country and brought back as foreign direct investment to evade taxes. It is not cash splitting.',
      D: 'Layering is the stage of shifting money through complex chains of transactions to obscure the audit trail. Structuring deposits is a placement evasion technique, and relaxing thresholds for cash behavior violates compliance guidelines.'
    },
    isScenario: true
  },
  {
    id: 'kyc_2',
    topic: 'KYC & AML',
    difficulty: 'Easy',
    question: 'What is the primary purpose of KYC (Know Your Customer) during the digital onboarding of a retail banking customer?',
    options: {
      A: 'To inspect browser history and verify the customer\'s credit score.',
      B: 'To authenticate the identity of the customer, verify their risk rating, and prevent fraud or identity theft.',
      C: 'To upsell retail lending products and calculate the interest eligibility.',
      D: 'To automate core migration logs and calculate the customer retention margin.'
    },
    answer: 'B',
    explanation: 'KYC establishes the actual customer identity and assigns an AML customer risk criteria (Low, Medium, High). This is a statutory requirement to prevent money laundering and terrorist financing.',
    interviewTip: 'Connect KYC with Customer Due Diligence (CDD) and Enhanced Due Diligence (EDD) for high-risk clients like Politically Exposed Persons (PEPs).',
    memoryTrick: 'K = Know the person, Y = Yield their risk profile, C = Confirm and Compliance.',
    realExample: 'A bank uses dynamic liveness detection (face match) and matches government ID records during the mobile onboarding process.',
    whyOthersWrong: {
      A: 'KYC does not inspect web search histories; credits are handled by Credit Bureaus (CIBIL, Equifax) which is a distinct underwriting flow.',
      C: 'While product upselling happens post-onboarding, it is not a compliance purpose of KYC.',
      D: 'Core migration logs are technical maintenance processes and have nothing to do with client-facing identity checks.'
    },
    isScenario: false
  },

  // Payments
  {
    id: 'pay_1',
    topic: 'Payments',
    difficulty: 'Medium',
    question: 'How do RTGS and NEFT differ in their settlement frequency, and how does this affect transaction flow requirements configured by a Banking BA?',
    options: {
      A: 'RTGS Settles in Deferred Net Batches (DNB) every 30 minutes, whereas NEFT settles continuously on a gross transaction basis immediately.',
      B: 'RTGS settles transactions on a continuous, individual gross transaction basis (Real-Time), while NEFT settles transactions in discrete, net hourly or half-hourly batches.',
      C: 'Both settle in real-time, but RTGS processes only international currencies while NEFT handles domestic transfers up to a strict $200 dollar ceiling.',
      D: 'RTGS uses manual clearing by tellers at the end of the business day, while NEFT uses instant peer-to-peer cloud queues.',
    },
    answer: 'B',
    explanation: 'RTGS (Real-Time Gross Settlement) processes and settles transactions individually in real-time on a gross basis, meaning each transfer is cleared immediately in the central bank ledger. NEFT (National Electronic Funds Transfer) is a Deferred Net Settlement (DNS) system that pools transactions and clears them in periodic batches (usually every 30 minutes). Business Analysts must design queues or retries accordingly depending on the system selected.',
    interviewTip: 'In payments interviews, always mention that RTGS is primarily used for high-value, systemic, urgent transfers (often with a high minimum value requirement like INR 2 Lakhs), while NEFT is suited for retail payments with no strict minimum caps.',
    memoryTrick: 'Gross equal Individual, Real-time equal Immediate. Net equal Batches, Deferred equal Delayed.',
    realExample: 'A corporate treasury uses RTGS to wire $500,000 for an immediate acquisition, while a customer uses NEFT to pay their monthly rent of $1,500.',
    whyOthersWrong: {
      A: 'This reverses the actual definitions. RTGS is gross and real-time; NEFT operates in deferred net batches.',
      C: 'Both are domestic payment systems governed by central banks and are not strictly limited to international/low-dollar controls.',
      D: 'RTGS is highly automated and settles in seconds in the central bank accounts; it does not rely on teller-based end-of-day handoffs.'
    },
    isScenario: false
  },
  {
    id: 'pay_2',
    topic: 'Payments',
    difficulty: 'Medium',
    question: 'A client wishes to integrate SWIFT gpi (global payment innovation) to enhance their cross-border payment experience. As a BA, what are the core business value propositions you would write in the BRD?',
    options: {
      A: 'Eliminating the need for Nostro/Vostro accounts entirely by utilizing local UPI routing APIs.',
      B: 'Real-time payment tracking via a unique transaction reference (UETR), transparent bank fees, and faster same-day processing.',
      C: 'Compressing wire transaction packets to circumvent SWIFT network messaging formats like MT103.',
      D: 'Automated conversion of all payments into zero-gas stablecoins over private peer-to-peer sidechains.'
    },
    answer: 'B',
    explanation: 'SWIFT gpi revolutionized cross-border payments by introducing speed, fee transparency (identifying intermediary bank deductions upfront), and end-to-end tracking using a Unique End-to-End Transaction Reference (UETR). Business Analysts define the user stories to expose this UETR trackability on mobile banking hubs.',
    interviewTip: 'Mention SWIFT gpi as an answers-multiplier. It guarantees payment delivery confirmation within minutes compared to days with classic legacy telegraphic transfers.',
    memoryTrick: 'GPI = Global Tracking, Payments Visibility, Immediate Speed.',
    realExample: 'A corporate logistics firm tracks an international wire to Shanghai live from their dashboard, seeing exactly which intermediary bank has held the payment for review.',
    whyOthersWrong: {
      A: 'SWIFT gpi works within the traditional correspondent banking stack; it does not replace Nostro/Vostro structures or route international corporate transfers via domestic UPI limits.',
      C: 'SWIFT gpi uses MT103 (or new ISO 20022 mx messages); it does not bypass standard financial messaging protocols.',
      D: 'SWIFT gpi leverages secure traditional telecommunication banking hubs, not decentralized crypto stablecoins.'
    },
    isScenario: false
  },

  // UPI
  {
    id: 'upi_1',
    topic: 'UPI',
    difficulty: 'Medium',
    question: 'In the Unified Payments Interface (UPI) ecosystem, what is the role of a Third Party Application Provider (TPAP) and how does it interoperate with a PSP bank?',
    options: {
      A: 'The TPAP directly holds customer bank accounts and issues credit; they bypass clearinghouses completely.',
      B: 'The TPAP provides the user interface (e.g., Google Pay, PhonePe), while the Payment Service Provider (PSP) bank acts as the sponsor bank linking the TPAP to the NPCI switch.',
      C: 'The TPAP is only responsible for physically printing QR codes and shipping them to local merchant physical outlets.',
      D: 'The TPAP maintains the centralized virtual ledger that replaces the central bank\'s sovereign digital currency.'
    },
    answer: 'B',
    explanation: 'UPI is a 4-party model: Issuer Bank, Remitter Bank, PSP Bank, and TPAP. The TPAP builds the customer-facing smartphone application but must route transactions through a certified PSP Sponsor Bank to connect to National Payments Corporation of India (NPCI) clearing mechanisms.',
    interviewTip: 'BAs should explain the UPI API sequence: TPAP initiates -> Sponsor PSP triggers NPCI Switch -> Issuer validates MPIN -> Funds transfer debited from Core Banking and settled.',
    memoryTrick: 'TPAP gets the Tap (App UI), PSP gets the Cash (Bank Piping).',
    realExample: 'Using Google Pay (TPAP) backed by Axis Bank handle (@okaxis) as the sponsor PSP bank to pay a vegetable vendor instantly.',
    whyOthersWrong: {
      A: 'TPAPs are non-banking technology companies and are forbidden from holding deposit accounts or acting as full banking clearinghouses directly.',
      C: 'QR codes are governed by BharatQR standards; TPAPs do much more, handling the entire customer app lifecycle, UPI registration, and profile management.',
      D: 'Centralized switches are owned by central structures like NPCI, not independent private TPAPs.'
    },
    isScenario: false
  },

  // Remittance
  {
    id: 'rem_1',
    topic: 'Remittance',
    difficulty: 'Hard',
    question: 'Your banking platform has suffered persistent remittance transaction drops with a partner bank. Upon tracing ledger entries, you discover a Nostro account is underfunded. What does this indicate and how should the BA prevent this in system design?',
    options: {
      A: 'The partner bank\'s local account held in our bank is empty; the BA must request an instant blockchain transfer.',
      B: 'Our bank\'s foreign currency account held with the foreign partner bank has insufficient liquidity; the BA should define treasury alerts for real-time liquidity balancing rules.',
      C: 'The customer has exceeded their daily ATM cash withdrawal limit; the BA must raise the credit block list threshold.',
      D: 'The intermediary clearing house has undergone a server crash; the BA must initiate core rollback scripts.'
    },
    answer: 'B',
    explanation: 'A Nostro account ("Our money with you") is an account a domestic bank holds in foreign currency with a bank abroad. Underfunding means the foreign ledger cannot settle pending outbound wires. As a BA, you should document a non-functional or functional requirement for automatic treasury alert triggers when Nostro balances fall below a specified threshold.',
    interviewTip: 'Understand the pairing. Nostro is "Our account at your bank (in your currency)". Vostro is "Your account at our bank (in our currency)". Treasury liquidity forecasting is a standard payment BA competency.',
    memoryTrick: 'Nostro = Ours (Latin). Vostro = Yours. Nostro balances must buy the foreign transaction.',
    realExample: 'State Bank of India keeps a Dollar-denominated Nostro account with JPMorgan Chase in New York to settle local USD remittances.',
    whyOthersWrong: {
      A: 'Our partner bank\'s local currency account held with us is a Vostro account, not a Nostro account.',
      C: 'Daily ATM limits govern local retail cash payouts, not Nostro cross-border settlement reserves.',
      D: 'Nostro accounts are accounting registers of balances to settle clearing books, not an active network hardware router crash.'
    },
    isScenario: true
  },

  // BRD & FRD
  {
    id: 'brd_1',
    topic: 'BRD & FRD',
    difficulty: 'Medium',
    question: 'A major international bank wants to upgrade a legacy core system. What is the fundamental difference between a Business Requirement Document (BRD) and a Functional Requirement Document (FRD), and who is the target audience for each?',
    options: {
      A: 'The BRD specifies the exact database schema columns, whereas the FRD outlines company marketing goals for C-level executives.',
      B: 'The BRD outlines the high-level business goals and "what" the business needs to achieve (audience: stakeholders, sponsors); the FRD translates this into "how" the system must operate dynamically (audience: developers, testers).',
      C: 'The BRD is created by the testing QA lead for UAT scripts, while the FRD is coded automatically by AI compilers from raw swagger documentation.',
      D: 'They are identical; modern Agile frameworks have banned both in favor of informal slack conversations.'
    },
    answer: 'B',
    explanation: 'A Business Requirement Document (BRD) describes the high-level business problem, scoping guidelines, and desired business outcomes of the sponsor. A Functional Requirement Document (FRD / SRS) details the step-by-step system interactions, screen behaviors, validation rules, and logic details. BAs write the BRD with business stakeholders and decompose it into an FRD for technical engineers.',
    interviewTip: 'Be ready to say that BRD answers "What is the business value/problem?" while the FRD answers "How will the software solve it?" In many agile shops, the FRD is replaced by detailed Epic/User Story Backlogs containing acceptance criteria.',
    memoryTrick: 'B = Business (Goal / Value / High-Level). F = Functional (Feature / Field / Flow).',
    realExample: 'BRD: "Enable customers to split utility bills on the mobile app to drive engagement." FRD: "When the Split Bill button is clicked, check user contacts, fetch user phone permissions, validate amount > 0, and split values equally to 2 decimal places."',
    whyOthersWrong: {
      A: 'This is inverted. High-level business goals go in the BRD, and database schema mappings are technical specifications (part of system architecture or FRD annexes).',
      C: 'BAs author BRDs and FRDs. QA teams map UAT scripts based on the acceptance criteria in the FRD, and code cannot be generated without precise requirements.',
      D: 'Though formats evolve, the logical separation of Business vs Functional alignment remains a core banking engineering discipline.'
    },
    isScenario: false
  },

  // Agile
  {
    id: 'agile_1',
    topic: 'Agile',
    difficulty: 'Hard',
    question: 'In an Agile Scrum framework, a developer states they cannot complete a wire transfer story because the QA team did not define UAT cases. What does the "Definition of Done" (DoD) signify in this scenario, and what is the BA\'s role in story readiness?',
    options: {
      A: 'The developer should mark the story done anyway and push it to production to discover bugs live.',
      B: 'DoD is a shared agreement outlining quality standards required before a story is shipped. The BA facilitates story refinement by ensuring clear "Acceptance Criteria" are completed prior to sprint commitments.',
      C: 'DoD means the BA must physically write the code for the developer when they are blocked by documentation.',
      D: 'The Scrum Master must cancel the entire project and initiate a Waterfall requirement gathering phase of 3 months.'
    },
    answer: 'B',
    explanation: 'The Definition of Done (DoD) regulates quality gates for a Scrum team before a user story can be considered "shippable". A Business Analyst supports the refinement cycle by preparing clear Acceptance Criteria (often in Gherkin format: Given-When-Then) so both devs and QA understand complete expectations.',
    interviewTip: 'When asked about story maturity, use the INVEST criteria: Independent, Negotiable, Valuable, Estimable, Small, and Testable. Emphasize that DoD is owned by the whole Scrum team, not just the BA or Scrum Master.',
    memoryTrick: 'D = Done equals Agreed quality checkbox list, not just "Compiles on my local machine".',
    realExample: 'A wire-transfer story cannot be marked Done unless core unit tests pass, security scans are green, API documentation is updated, and peer reviews are complete.',
    whyOthersWrong: {
      A: 'Direct deployment of unverified transaction flows to production risks catastrophic financial outages and compliance penalties.',
      C: 'BAs define functional logic and requirements, not physical codebase compiling or software authorship.',
      D: 'Agile accommodates change via rapid feedback loops. Reverting to heavy waterfall cycles because of a single blocked state violates Scrum principles.'
    },
    isScenario: true
  },

  // UAT
  {
    id: 'uat_1',
    topic: 'UAT',
    difficulty: 'Hard',
    question: 'During User Acceptance Testing (UAT) for a new lending module, a business user rejects a screen because it lacks a "Download PDF statement" feature. However, looking back, this feature was never listed in the signed BRD or product backlog. What action must the BA perform?',
    options: {
      A: 'Immediately implement the feature to keep the business user happy, without tracking resource hours or team velocity changes.',
      B: 'Tell the business user that because it wasn\'t in the BRD, their feedback is invalid and will be ignored permanently.',
      C: 'Identify this as a Change Request (CR) or new backlog Epic. Perform an impact analysis of cost/timeline and present it to the product owner for prioritization.',
      D: 'Blame the engineering lead during the standup and cancel the production release.'
    },
    answer: 'C',
    explanation: 'UAT focuses on confirming that the software meets the agreed-upon requirements. If a critical feature is missing but was not in the original scope, it is a classic Scope Creep issue. The BA must document this new item, conduct an impact evaluation (effort, dependencies, schedule), and let the Product Owner decide whether to fit it into the active sprint, delay launch, or create a post-v1 backlog item.',
    interviewTip: 'This is a super common interview scenario. Show that you are structured and collaborative: validate the user needs, log it as a Change Request, carry out impact analysis, and coordinate with the Product Owner for priority. Never agree to ad-hoc "shadow development" without documentation.',
    memoryTrick: 'UAT feedback outside scope = Log as CR -> Perform Impact Analysis -> Prioritize in Backlog.',
    realExample: 'A bank launches a peer-to-peer sending feature. A tester asks for automatic tax calculation reports, which is delayed to v1.1 via a logged CR after an impact review.',
    whyOthersWrong: {
      A: 'Ad-hoc coding of unvetted features destroys sprint velocity, bypasses safety checks, and breaks software architectures.',
      B: 'Ignoring the business needs damages stakeholder relationships and might result in a system that does not meet actual business requirements.',
      D: 'Blaming developers or canceling critical scheduled releases due to scope expansion shows lack of accountability and professional maturity.'
    },
    isScenario: true
  },

  // APIs
  {
    id: 'api_1',
    topic: 'APIs',
    difficulty: 'Medium',
    question: 'How does ISO 20022 message structure (pain, pacs, camt) improve standard financial messaging, and how does a BA coordinate XML schema mapping in payments integration?',
    options: {
      A: 'ISO 20022 is a proprietary image-handling standard used primarily for scanning paper deposit slips in branch lobbies.',
      B: 'ISO 20022 uses structured XML/JSON syntax which allows for rich data (longer names, ultimate beneficiaries, tax records) compared to legacy MT formats. The BA maps legacy tags to the corresponding MX tags in a mapping document.',
      C: 'ISO 20022 encrypts payments inside public blockchains, completely bypassing traditional SWIFT routing engines.',
      D: 'It replaces APIs with legacy CSV flat files to accelerate core banking ingestion rates.'
    },
    answer: 'B',
    explanation: 'ISO 20022 is the standard global syntax format for financial messages, replacing legacy MT (Message Text) telegraphic formats with XML (Extensible Markup Language). The classes of messages include: pain (payment initiation), pacs (payment clearing and settlement), and camt (cash management reporting). Payment BAs create data conversion sheets mapping fields between legacy SWIFT MT and modern ISO 20022 MX structures.',
    interviewTip: 'Prepare and reference the three common ISO message prefixes: "pain" (customer to bank), "pacs" (bank to bank), and "camt" (balance reports). BAs are crucial for data dictionary mappings during cross-border messaging system upgrades.',
    memoryTrick: 'PAIN = Payment Initiation (for the customer paying). PACS = Payment Clearing & Settlement (for clearing houses). CAMT = Cash Management Transactions (reconciliation and balances).',
    realExample: 'A corporate cash ledger receives an automated ISO 20022 camt.053 balance ledger statement to auto-reconcile global transactions hourly.',
    whyOthersWrong: {
      A: 'Check truncation schemas (like ANSI standards) handle paper image scans; ISO 20022 is for structured electronic payments messaging.',
      C: 'ISO 20022 messages are structured files transmitted via securely protected communication networks (SWIFT, FedNow, RTGS), not direct decentralized chain ledgers.',
      D: 'ISO 20022 is structured XML/MX schemas, not flat CSV models which are heavily prone to parse failures.'
    },
    isScenario: false
  },

  // SQL
  {
    id: 'sql_1',
    topic: 'SQL',
    difficulty: 'Medium',
    question: 'An AML Compliance Officer requests a list of all bank accounts that have processed transactions totaling more than $100,000 on a single day. Choose the correct SQL query format a BA would write to verify standard requirements.',
    options: {
      A: 'SELECT account_id FROM transactions WHERE amount > 100000;',
      B: 'SELECT account_id, SUM(amount) FROM transactions GROUP BY account_id HAVING SUM(amount) > 100000;',
      C: 'SELECT transactions_total FROM accounts JOIN ledger ON accounts.status = "FLAGGED";',
      D: 'SELECT account_id, SUM(amount) FROM transactions WHERE SUM(amount) > 100000 GROUP BY account_id;'
    },
    answer: 'B',
    explanation: 'To calculate the collective amount of transactions per account, transaction records must be grouped by the unique identifier (`account_id`) utilizing the aggregate function `SUM(amount)`. To apply criteria on aggregate outputs, the `HAVING` statement must be utilized, as standard `WHERE` filters can only filter raw individual database rows.',
    interviewTip: 'BAs are often asked about the difference between WHERE and HAVING. WHERE filters rows before grouping; HAVING filters group results after the aggregation is calculated. This is a classic indicator of technical BA competency.',
    memoryTrick: 'Group first, Aggregate next, Filter group with HAVING.',
    realExample: 'A database query groups millions of checkout transaction records by merchant ID and flags those with aggregate velocity exceeding limit controls within an hour.',
    whyOthersWrong: {
      A: 'This query will only pick single transactions over $100,000, missing accounts with multiple smaller transactions that together surpass the reporting threshold (e.g., three payments of $40,000).',
      C: 'This query does not perform mathematical aggregation, group accounts, or evaluate ledger sums.',
      D: 'Aggregate functions like `SUM()` are forbidden inside the `WHERE` clause in standard ANSI SQL, causing a syntax compiler crash.'
    },
    isScenario: false
  },

  // Stakeholder Management
  {
    id: 'stk_1',
    topic: 'Stakeholder Management',
    difficulty: 'Hard',
    question: 'The Treasury Director wants custom hedging reports added instantly to the core treasury migration project. However, the Tech Lead warns that this will delay the regulatory reporting deadline. As a BA, how do you handle this priority conflict?',
    options: {
      A: 'Support the Treasury Director since they are senior, and tell the Tech Lead to work weekends to make it happen.',
      B: 'Ignore the Treasury Director completely because regulatory reporting is always the only thing that matters in banking.',
      C: 'Facilitate a joint session, explaining the tradeoffs. Show that missing the regulatory launch carries fines. Suggest logging the hedging reports as Priority 2 for the Phase 2 launch pipeline.',
      D: 'Resign from the team immediately to avoid taking accountability for the scheduling delay.'
    },
    answer: 'C',
    explanation: 'As a banking BA, managing high-power stakeholders involves objective translation of trade-offs. Regulatory compliance (Phase 1) is a non-negotiable critical risk gate. Documenting user stories for corporate hedging reports but scheduling them in a structured phase (Phase 2) preserves relationships, protects timelines, and ensures delivery stability.',
    interviewTip: 'Always frame answers around joint collaboration and data-driven prioritization. Mention MoSCoW prioritization (Must have, Should have, Could have, Won\'t have) or cost-of-delay arguments.',
    memoryTrick: 'Translate, Trade-off, Phase 2 Plan (TTP strategy).',
    realExample: 'A system-wide card-rendering requirement is phased into a future sprint to ensure that the core card-network settlement code meets payment authority launch deadlines on time.',
    whyOthersWrong: {
      A: 'Enforcing overtime overrides software quality standards and leads to regression crashes, burnout, and critical system instability.',
      B: 'Unilaterally ignoring high-influence executives causes organizational friction and delays product adoption.',
      D: 'Exiting projects when conflicts occur is unprofessional and displays a lack of key leadership and conflict-resolution competencies.'
    },
    isScenario: true
  },

  // Banking Fundamentals
  {
    id: 'fund_1',
    topic: 'Banking Fundamentals',
    difficulty: 'Easy',
    question: 'In fractional-reserve banking, what is the role of a Core Banking System (CBS) in managing retail customer deposits, and how does the central ledger ensure transactional integrity?',
    options: {
      A: 'The CBS is only a front-end portal that serves web landing pages and blogs.',
      B: 'The CBS acts as the central book of record for real-time balances and double-entry accounting. It guarantees atomic transactions, ensuring every debit is paired with an equal credit.',
      C: 'The CBS utilizes cryptocurrency validators to distribute retail ledger blocks across global nodes.',
      D: 'The CBS converts all cash deposits instantly to high-return corporate bonds to eliminate liquidity risk.'
    },
    answer: 'B',
    explanation: 'The Core Banking System (CBS) manages transactions, ledger entries, deposit accounts, and interest calculations. It relies on ACID database properties (Atomicity, Consistency, Isolation, Durability) to ensure ledger updates (double-entry bookkeeping) occur flawlessly without fractional errors or double-spending.',
    interviewTip: 'Always describe Core Banking as the foundational system of record (e.g., Finacle, Temenos, Flexcube). Explain that any channel application (mobile, API, ATM) must ultimately call CBS endpoints to complete ledger adjustments.',
    memoryTrick: 'CBS = Central, Balances, System of record using strict Double-Entry ledger.',
    realExample: 'ATM cash withdrawal of $100 must atomically debit customer savings account balance and credit ATM cash vault account. If any connection drops, the transaction rolls back.',
    whyOthersWrong: {
      A: 'Front-end applications are client interfaces; the CBS is the robust database engine that powers the actual backend banking system.',
      C: 'Core retail banking systems rely on secure high-availability standard centralized databases (such as Oracle, DB2, or Spanner), not speculative open crypto architectures.',
      D: 'Liquidity ratios (SLR/CRR) are governed by central bank reserve norms; banks keep a specific cash backup rather than converting all assets to corporate debt.'
    },
    isScenario: false
  },

  // Scenario Questions
  {
    id: 'scen_1',
    topic: 'Scenario Questions',
    difficulty: 'Hard',
    question: 'A core payment system experiences a critical production incident where 10,000 instant remittances fail to reconcile. The treasury balances are out of sync by $2 Million. What is the immediate role of the Business Analyst in this operational crisis?',
    options: {
      A: 'Write code patches to fix the transaction parser immediately while running live data operations on the production database.',
      B: 'Create an incident response bridge: compile failed transaction logs, map ledger variances, write a temporary manual operational clearing process, and document formal requirements for a reconciliation engine.',
      C: 'Publish a public press release apologizing for the system crash and blame the third-party infrastructure partner.',
      D: 'Instruct the call center to block all incoming technical complaints and wait for the hardware to restart at midnight.'
    },
    answer: 'B',
    explanation: 'In a production crisis, a BA acts as a vital bridge between operations, business stakeholders, and engineers. The BA assists operations to understand ledger discrepancies (reconciling source vs clearing leg vs ledger status data), devises short-term manuals to clear blocks, and specifies requirements for automated reconciliation mechanisms to prevent recurrence.',
    interviewTip: 'This scenario showcases crisis response. Focus on structured resolution: Triage (gather facts/logs), Temporary Workaround (keep business alive), and Root-Cause Mitigation (write robust PRDs for permanent reconciliation safeguards in the future).',
    memoryTrick: 'Analyze variance -> Propose stopgap manual process -> Specify automated long-term guard rails.',
    realExample: 'A payment gateway fails on Black Friday. The payment BA matches active bank ledger responses with failed order states to construct structured credit-back lists.',
    whyOthersWrong: {
      A: 'Business Analysts are functional strategists; rewriting core payment code directly in production databases violates separation of duties compliance standard.',
      C: 'Corporate communications and official PR gates handle press notifications; BAs are not certified to unilaterally release corporate announcements.',
      D: 'Suppressing client notifications damages brand trust and violates regulatory consumer financial protection rules.'
    },
    isScenario: true
  },

  // Scenario Questions
  {
    id: 'scen_2',
    topic: 'Scenario Questions',
    difficulty: 'Hard',
    question: 'Your Development Team says they cannot support the ISO 20022 migration within the current sprint because the database team has delayed schema updates. As the BA, what is your immediate course of action?',
    options: {
      A: 'Reprimand the database team publicly in front of executive sponsors.',
      B: 'Facilitate a technical breakout with both teams to outline the schema block. Coordinate with the Scrum Master to update priorities, use mock XML interfaces for active sprint code runs, and update the Product Owner on velocity impacts.',
      C: 'Cancel the active sprint and move the entire payment platform development back to waterfall timelines.',
      D: 'Change the database password to regain administrative control over the active repository.'
    },
    answer: 'B',
    explanation: 'Cross-functional blockers are solved through collaboration and pragmatic engineering logic. By facilitating technical alignment and proposing temporary mock interfaces, the front-end/payment team can write and verify their code using dummy payloads while the database team finishes backend structure enhancements.',
    interviewTip: 'Highlight your collaborative approach: partner with the Scrum Master to address blockers, propose standard engineering solutions (mocking APIs), and provide clear communication to the Product Owner regarding potential schedule impact.',
    memoryTrick: 'Break down silos -> Mock dependencies -> Protect velocities.',
    realExample: 'During API team delays, client team development continues smoothly by mocking responses formatted strictly to API specifications.',
    whyOthersWrong: {
      A: 'Publicly criticizing colleagues ruins team trust and fails to solve the logical dependency bottleneck.',
      C: 'Throwing away agile sprint parameters because of minor database lag is an excessive, highly disruptive reaction.',
      D: 'BAs define functional parameters; accessing and modifying administrative database tables directly is an severe security violation.'
    },
    isScenario: true
  },

  // Topic: Stakeholder Management
  {
    id: 'stk_2',
    topic: 'Stakeholder Management',
    difficulty: 'Medium',
    question: 'During a sprint planning meeting, the Operations Director insists on adding automated FX conversion dashboards, while the Risk Director demands credit-check upgrades. Both have high influence. How should a Banking BA act?',
    options: {
      A: 'Build the FX dashboard first because FX brings higher daily corporate revenue.',
      B: 'Implement the Risk upgrades because risk avoidance is always more important than operational workflows.',
      C: 'Map both needs to the product roadmap, estimate development effort with the tech team, calculate the ROI/Risk-Score, and support the Product Owner in making a data-driven choice.',
      D: 'Build both concurrently in the active sprint, asking developers to handle 80-hour work weeks to complete the backlog.'
    },
    answer: 'C',
    explanation: 'An Expert BA does not take unilateral decisions or sides in product priority conflicts. They provide quantitative analysis (effort estimates, risk weights, strategic value) to support the Product Owner, who possesses final authority over the visual backlog priorities.',
    interviewTip: 'Emphasize that the Product Owner owns the final list priority; your job is to prepare clear facts, estimates, and business benefits to make the decision objective, smooth, and transparent.',
    memoryTrick: 'BA analyzes and presents parameters; Product Owner owns the prioritized list.',
    realExample: 'A retail product owner decides to prioritize credit score checks over custom currency displays because compliance requirements are critical to avoid regulatory closure.',
    whyOthersWrong: {
      A: 'Showing favoritism towards select executives without calculating actual engineering metrics causes organizational friction.',
      B: 'Risk rules are critical, but assuming priority without consulting business value cases ignores the holistic product roadmap.',
      D: 'Overloading active sprints creates software fatigue and leads to critical regression bugs.'
    },
    isScenario: false
  },

  // Topic: Agile
  {
    id: 'agile_2',
    topic: 'Agile',
    difficulty: 'Easy',
    question: 'What is the role of Acceptance Criteria in a User Story, and why is the Gherkin format (Given-When-Then) highly recommended for financial BA documentation?',
    options: {
      A: 'It serves as a marketing tagline for international mobile branding campaigns.',
      B: 'It defines clear boundaries of the user story, preventing scope creep and allowing automatic testing. Gherkin format eliminates language barriers between business users, BAs, and test scripts.',
      C: 'It replaces actual programming code by setting automated cloud ledger limits.',
      D: 'It is a visual interface template designed solely for banking branch paper handouts.'
    },
    answer: 'B',
    explanation: 'Acceptance Criteria set the explicit definition. Gherkin (Given: initial state, When: action taken, Then: expected result) is easy for business stakeholders to read, yet precise enough for testing frameworks (Gherkin/Cucumber) to generate automated test cases.',
    interviewTip: 'Mentioning Gherkin (Given-When-Then) represents a major advantage in technical BA interviews. It indicates that you write clear, measurable, and highly structured acceptance criteria.',
    memoryTrick: 'G = Given (Setup), W = When (Action), T = Then (Outcome). Clear criteria block scope creep.',
    realExample: 'Acceptance Criteria: "Given balance is $100, When client requests $120 withdrawal, Then system returns error code and blocks cash dispenser."',
    whyOthersWrong: {
      A: 'Marketing slogans promote products; acceptance criteria validate functional correctness in software code.',
      C: 'Acceptance criteria dictate functional business requirements; they do not write low-level machine code.',
      D: 'Gherkin is a structured text syntax for writing software requirements and does not represent a visual design template for branches.'
    },
    isScenario: false
  },

  // Topic: APIs
  {
    id: 'api_2',
    topic: 'APIs',
    difficulty: 'Medium',
    question: 'A merchant requests real-time notifications whenever a retail customer pays them via your banking QR code API. Which architecture is best suited for this, and what requirement does the BA define?',
    options: {
      A: 'The merchant must poll the bank database 1 million times an hour via flat file SFTP schedules.',
      B: 'Webhooks (HTTP POST push notifications); the BA defines the automated callback URL registration and retry rules for failed delivery.',
      C: 'Manual email confirmation letters formatted via automated daily cron jobs.',
      D: 'A physical telephone call placed automatically by the teller clearing desk.'
    },
    answer: 'B',
    explanation: 'Webhooks are automated event-driven callbacks. Instead of constant polling (pulling), the bank\'s server sends a POST payload (pushes) to the merchant\'s endpoint once a transaction settles. BAs specify retry rules (e.g., exponential backoff) for when the merchant server rejects the payload.',
    interviewTip: 'Define Webhooks as "reverse APIs" where the server pushes state. Talk about how they save server overhead compared to client-side database polling.',
    memoryTrick: 'Polling = User queries "Is it done yet?". Webhook = Server shouts "It\'s done!".',
    realExample: 'When you buy a coffee, the store POS screen flashes green instantly because the payment gateway pushed a secure webhook to their local register.',
    whyOthersWrong: {
      A: 'Repetitive database polling consumes heavy network bandwidth and degrades central ledger processing capacities.',
      C: 'Daily e-mail files do not support fast real-time checkouts.',
      D: 'Automated voice-desk call operations are slow and cannot handle millions of instant payment receipts.'
    },
    isScenario: false
  },

  // Topic: SQL
  {
    id: 'sql_2',
    topic: 'SQL',
    difficulty: 'Medium',
    question: 'A legacy migration requires copying client records safely. To confirm there are no orphaned transactions, you must find transactions without a valid account record. What SQL join is optimized for this task?',
    options: {
      A: 'A standard INNER JOIN matching Accounts and Transactions.',
      B: 'A LEFT JOIN from Transactions to Accounts, filtering WHERE accounts.id IS NULL.',
      C: 'An absolute self-join of the transaction table against transaction limits.',
      D: 'A bulk dump using Cartesian cross product commands.'
    },
    answer: 'B',
    explanation: 'A LEFT JOIN includes all entries from the left list (Transactions), even if there is no matched row on the right (Accounts). Filtering for rows where the account identifier is NULL isolates orphaned records.',
    interviewTip: 'Joining tables to locate orphans is a standard database migration check. Present left joins as robust validation procedures used during data migration audits.',
    memoryTrick: 'LEFT JOIN keeps left-side records; WHERE RIGHT IS NULL yields orphaned records.',
    realExample: 'Finding transactions pointing to deleted credit accounts before archiving active core schemas.',
    whyOthersWrong: {
      A: 'INNER JOIN only extracts records containing active accounts on both sides, making orphans invisible.',
      C: 'Self-join compares rows in the same table, failing to inspect cross-table account integrity.',
      D: 'Cross products multiply all records together, generating noise instead of identifying missing accounts.'
    },
    isScenario: false
  },

  // Topic: UAT
  {
    id: 'uat_2',
    topic: 'UAT',
    difficulty: 'Medium',
    question: 'During UAT testing of a SWIFT cross-border component, a major corporate tester complains they received a success screen, but the funds did not clear in Tokyo because of an invalid SWIFT code format. What root issue did the BA fail to validate in requirements?',
    options: {
      A: 'Failure to enforce front-end text formatting limits and ISO 9362 BIC validation checks before allowing wire submissions.',
      B: 'Failure to translate Japanese characters into Tokyo localized ledger standards.',
      C: 'Failure to request a higher cash transfer processing fee.',
      D: 'A physical printer failure at the central clearing branch.'
    },
    answer: 'A',
    explanation: 'Modern systems must validate input early. A SWIFT / Business Identifier Code (BIC) has a specific format (8 or 11 alphanumeric characters). The BA must outline validation instructions in the functional interface parameters so that invalid formats cannot be submitted.',
    interviewTip: 'Failing checks at onboarding is expensive. Highlight that BAs save system costs by drafting real-time validation checks for bank inputs (like BIC, IBAN, routing numbers).',
    memoryTrick: 'Validate standard formats (BIC/IBAN) at entry to bypass downstream failures.',
    realExample: 'A mobile application prevents users from clicking Submit until their input matches exactly an 11-digit SWIFT identifier format.',
    whyOthersWrong: {
      B: 'While local characters need translation standards, the core problem is a broken transaction flow caused by invalid swift identifiers.',
      C: 'Transaction fees do not resolve alphanumeric data validation failures.',
      D: 'SWIFT transfers are entirely digital; paper printer outages do not stop payment routing.'
    },
    isScenario: false
  },

  // Topic: Banking Fundamentals
  {
    id: 'fund_2',
    topic: 'Banking Fundamentals',
    difficulty: 'Easy',
    question: 'What is the role of a Clearing House in retail banking, and how does it interface between the payee and paying bank?',
    options: {
      A: 'It serves as a legal agency that issues loans to risky business customers.',
      B: 'It acts as an intermediary network that consolidates, reconciles, and net-settles card transactions between different financial institutions.',
      C: 'A high-yield physical vault that holds gold bullion reserves for central banks.',
      D: 'A compliance board that reviews marketing pamphlets before public release.'
    },
    answer: 'B',
    explanation: 'A Clearing House sits between banks. It tallies net-balances outstanding across institutions to settle differences at fixed hourly/daily intervals. This minimizes unnecessary asset movements.',
    interviewTip: 'Discuss clearing houses (like automated clearing houses or ACH) as net settlement hubs that consolidate transactions to calculate balance settlements.',
    memoryTrick: 'Clearing clears the book of records by calculating net balances due.',
    realExample: 'ACH systems reconcile millions of payroll orders and net transfer balances between various banks at 5 PM daily.',
    whyOthersWrong: {
      A: 'Clearing houses do not underwrite credit or issue loans directly.',
      C: 'Central vault storage holds mineral reserves, not inter-bank credit balances.',
      D: 'Legal committees handle marketing reviews, which have no role in settlement mechanics.'
    },
    isScenario: false
  },

  // Scenario Questions
  {
    id: 'scen_3',
    topic: 'Scenario Questions',
    difficulty: 'Hard',
    question: 'The executive sponsor demands an unplanned UI overhaul of the checkouts page 2 weeks before the production release date. As a BA, how do you handle this?',
    options: {
      A: 'Unilaterally implement the change without notifying the development team, expecting them to absorb the work.',
      B: 'Consult with developers to calculate implementation timeline impacts. Present the risk of launch delays and increased costs to the sponsor, and suggest prioritizing it as a v1.1 update.',
      C: 'Refuse point blank and refer to the initial BRD as a binding contract that cannot be altered.',
      D: 'Quit the project and delete the shared repository files.'
    },
    answer: 'B',
    explanation: 'Late overhauls are risky. The BA represents communication bridges. By collaborating with the tech team, you assess timeline impacts and offer clear tradeoffs, allowing the sponsor to evaluate option viability.',
    interviewTip: 'Focus on collaboration: evaluate with developers, outline tradeoffs, present options, and draft post-v1 alternatives.',
    memoryTrick: 'Late changes = Consult tech -> Present timelines/costs -> Offer phased roadmaps.',
    realExample: 'An executive shifts a screen design requests to a v1.1 launch after realizing it would delay the planned compliance deadline.',
    whyOthersWrong: {
      A: 'Adding tasks without developer consultation breaks sprits and results in release outages.',
      C: 'Refusing is confrontational and ignores realistic business feedback pipelines.',
      D: 'Exiting projects maliciously violates professional compliance codes.'
    },
    isScenario: true
  },

  // Scenario Questions
  {
    id: 'scen_4',
    topic: 'Scenario Questions',
    difficulty: 'Hard',
    question: 'A critical APIs payment gateway returns a "timeout error" for 15% of payment packets during peak load times. What should a BA map inside the FRD error-handling matrix to keep customer funds safe?',
    options: {
      A: 'An automatic rollback system instruction: query the transaction clearing state before refunding or retrying, to guarantee payment statuses are synchronized.',
      B: 'Configure the interface to hide the error and display a "payment complete" card regardless.',
      C: 'Write a query that automatically deletes the transaction row from the database tables.',
      D: 'Send an automated text advising the customer to write paper checks instead.'
    },
    answer: 'A',
    explanation: 'Timeout states are high risk. Customers may be debited but marked failure on host lists. The BA must specify double-check lookup logic: ask the clearing gateway for status before debiting, retrying, or displaying final balance states.',
    interviewTip: 'In banking, talk about "double-verify" patterns. Never guess transaction states during timeouts without verification.',
    memoryTrick: 'Timeout = Verify ledger reality -> Sync state -> Carry out safe resolution.',
    realExample: 'A system queries payment gateway records after a network failure to check if a debit occurred before updating user state.',
    whyOthersWrong: {
      B: 'Falsifying payment status displays creates double demerit disputes and severe ledger errors.',
      C: 'Deleting transactions from data logs deletes vital audit records, which violates banking regulations.',
      D: 'Paper checks do not resolve modern digital checkout failures.'
    },
    isScenario: true
  }
];
