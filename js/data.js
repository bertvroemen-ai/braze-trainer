/* Braze Trainer — question bank
   All questions are original, written from the publicly listed exam
   domains/competencies for each Braze certification. Not affiliated
   with or endorsed by Braze. Verify current exam details at
   braze.com/certification before registering. */

const CERTS = {

  practitioner: {
    id: "practitioner",
    name: "Braze Certified Practitioner",
    short: "Practitioner",
    level: "L1",
    cost: "$50",
    time: "60 min",
    format: "30 multiple-choice",
    passing: null,
    blurb: "The entry point into Braze certification — core platform fundamentals every certified user should know.",
    domains: [
      { code: "1.0", name: "Braze Fundamentals", weight: 25 },
      { code: "2.0", name: "Campaigns & Canvas", weight: 25 },
      { code: "3.0", name: "Audience & Segmentation", weight: 25 },
      { code: "4.0", name: "Channels & Messaging", weight: 25 }
    ],
    questions: [
      { domain: "Braze Fundamentals", code: "1.0", q: "What is a Canvas primarily used for in Braze?", options: ["A single one-off email blast with no branching logic", "A multi-step, multi-channel customer journey with branching and timing logic", "A static landing page builder", "A billing dashboard for account usage"], correct: 1, explain: "Canvas is Braze's journey-orchestration tool for building multi-step, multi-channel flows with branching and timed steps." },
      { domain: "Braze Fundamentals", code: "1.0", q: "Which Braze feature lets you pull in real-time external data to personalize a message at send time?", options: ["Connected Content", "Segment Extension", "Currents", "Catalogs"], correct: 0, explain: "Connected Content calls an external API at send time and inserts the response into the message." },
      { domain: "Braze Fundamentals", code: "1.0", q: "What's the difference between a standard attribute and a custom attribute in Braze?", options: ["Standard attributes are Braze-defined fields like email or first_name; custom attributes are ones you define yourself", "Custom attributes can only hold numbers", "Standard attributes update in real time and custom attributes never do", "There is no meaningful difference"], correct: 0, explain: "Standard attributes ship with Braze; custom attributes are defined by your team to fit your data model." },
      { domain: "Campaigns & Canvas", code: "2.0", q: "Which Canvas component routes users down different branches based on a segment or data point they meet at that step?", options: ["Experiment Paths", "Audience Paths", "Action Paths", "Delivery Paths"], correct: 1, explain: "Audience Paths branch users based on segment membership or attribute values at that point in the Canvas." },
      { domain: "Campaigns & Canvas", code: "2.0", q: "What's the key difference between a Campaign and a Canvas?", options: ["Campaigns can only send push notifications", "A Campaign sends a single message (or A/B variants); a Canvas orchestrates a multi-step journey over time", "A Canvas cannot use segments", "Campaigns are for internal testing only"], correct: 1, explain: "Campaigns are single sends; Canvases orchestrate ongoing, multi-step journeys." },
      { domain: "Campaigns & Canvas", code: "2.0", q: "What happens to users placed in a Canvas control group?", options: ["They receive every variant", "They receive no messages, so you can measure the journey's lift", "They're removed from the audience entirely", "They automatically receive a discount"], correct: 1, explain: "A control group is held back from messaging so you can measure the Canvas's incremental impact." },
      { domain: "Audience & Segmentation", code: "3.0", q: "What determines which users are included in a Braze segment?", options: ["A fixed list uploaded once", "Filter criteria based on user attributes, behaviors, and events, evaluated dynamically", "Manual selection by an admin only", "Geographic location alone"], correct: 1, explain: "Segments are dynamic — Braze continuously evaluates users against the filter criteria." },
      { domain: "Audience & Segmentation", code: "3.0", q: "What is a segment extension used for?", options: ["Increasing the maximum size of a segment", "Refining an existing segment with additional filters for a specific use, without altering the original", "Exporting a segment to another workspace", "Archiving inactive segments"], correct: 1, explain: "A segment extension layers extra criteria on top of an existing segment for a specific use case." },
      { domain: "Audience & Segmentation", code: "3.0", q: "What is the purpose of frequency capping in Braze?", options: ["Limiting how many messages a user receives in a given period, protecting them from over-messaging", "Capping how many segments a user can belong to", "Limiting API request rates", "Restricting how many admins can edit a campaign"], correct: 0, explain: "Frequency capping controls message volume per user to protect engagement and reduce fatigue." },
      { domain: "Channels & Messaging", code: "4.0", q: "Which channel is best suited for a short, time-sensitive alert that should reach a user even when they're not actively using the app?", options: ["Content Cards", "Push notification", "In-app message", "None of these reach users outside the app"], correct: 1, explain: "Push notifications can reach a user's device outside the app, unlike in-app messages or Content Cards." },
      { domain: "Channels & Messaging", code: "4.0", q: "What is a Content Card in Braze?", options: ["A persistent, feed-based message that lives in your app or site until dismissed or expired", "A push notification variant", "An SMS template", "A billing statement"], correct: 0, explain: "Content Cards live in a dedicated feed and persist until the user dismisses them or they expire." },
      { domain: "Channels & Messaging", code: "4.0", q: "What must a user typically do before they can receive SMS messages from a brand using Braze?", options: ["Nothing — SMS is opt-out by default", "Explicitly opt in / confirm consent", "Download the brand's app", "Provide a credit card"], correct: 1, explain: "SMS almost always requires explicit opt-in consent before a brand can message a user." }
    ]
  },

  "marketing-specialist": {
    id: "marketing-specialist",
    name: "Braze Certified Marketing Specialist",
    short: "Marketing Specialist",
    level: "L2",
    cost: "$100",
    time: "90 min",
    format: "50 AI-proctored",
    passing: "69%",
    blurb: "Formerly Braze Certified Marketer. Covers hands-on execution: segmentation, personalization, testing, channels, journeys, and reporting.",
    domains: [
      { code: "1.0", name: "Segmentation", weight: 19 },
      { code: "2.0", name: "Personalization", weight: 18 },
      { code: "3.0", name: "Testing & Experimentation", weight: 18 },
      { code: "4.0", name: "Channels", weight: 15 },
      { code: "5.0", name: "Customer Journey Orchestration", weight: 20 },
      { code: "6.0", name: "Reporting & Analytics", weight: 10 }
    ],
    questions: [
      { domain: "Segmentation", code: "1.0", q: "What can segment extension analytics help a marketer measure?", options: ["The performance and reach of a refined audience", "Server latency", "Email IP reputation", "SDK crash rate"], correct: 0, explain: "Extension analytics show how the refined audience is performing, distinct from the base segment." },
      { domain: "Segmentation", code: "1.0", q: "Why might a marketer export segment data as a CSV?", options: ["To analyze audience composition outside Braze or share it with stakeholders", "To delete the segment", "To trigger a Canvas automatically", "To change users' subscription state"], correct: 0, explain: "CSV export supports offline analysis or sharing segment composition outside the dashboard." },
      { domain: "Personalization", code: "2.0", q: "What does Liquid templating primarily allow you to do in a message?", options: ["Dynamically insert user and event data into message content", "Change the sending IP address", "Schedule the delivery time", "Create a new segment"], correct: 0, explain: "Liquid pulls in user, event, and other data dynamically to personalize message content." },
      { domain: "Personalization", code: "2.0", q: "Which Liquid element transforms an output, such as changing text to uppercase?", options: ["A variable", "A filter", "A delimiter", "A dynamic tag"], correct: 1, explain: "Filters modify the value of a variable, such as changing case or formatting numbers." },
      { domain: "Testing & Experimentation", code: "3.0", q: "In a Canvas, which feature tests different paths and automatically routes more users toward the better-performing one over time?", options: ["Winning Path", "Audience Path", "Action Path", "Static Path"], correct: 0, explain: "Winning Path evaluates variant performance and shifts traffic toward the stronger performer." },
      { domain: "Testing & Experimentation", code: "3.0", q: "What does Intelligent Timing do?", options: ["Calculates the optimal send time for each individual user", "Sets one global send time for every user", "Delays every message by 24 hours", "Blocks all sends on weekends"], correct: 0, explain: "Intelligent Timing personalizes send time per user based on their historical engagement patterns." },
      { domain: "Channels", code: "4.0", q: "What is a subscription group used for?", options: ["Grouping users by device type", "Letting users opt in or out of specific message categories within a channel, like \"Promotions\" vs. \"Order Updates\"", "Grouping campaigns by team", "Managing billing tiers"], correct: 1, explain: "Subscription groups let users control which types of messages they receive within a channel." },
      { domain: "Channels", code: "4.0", q: "What is the purpose of a permission primer before requesting push opt-in?", options: ["It silently enables push without asking the user", "It's a pre-prompt explaining the value of opting in, shown before the native system dialog, which tends to raise opt-in rates", "It's a legal disclaimer required only in the EU", "It replaces the need for a privacy policy"], correct: 1, explain: "A permission primer builds context before the native OS prompt, improving opt-in rates." },
      { domain: "Customer Journey Orchestration", code: "5.0", q: "A team wants to re-engage users who haven't opened the app in 14 days with a cross-channel nudge. Which tool best orchestrates this multi-step, multi-channel flow?", options: ["A single Campaign", "Canvas", "Content Cards alone", "A Currents export"], correct: 1, explain: "Canvas is built for multi-step, multi-channel journeys like a lapsed-user re-engagement flow." },
      { domain: "Customer Journey Orchestration", code: "5.0", q: "In a Canvas built to encourage a loyalty tier upgrade, what is an Audience Path used for?", options: ["Routing users differently based on a data point, such as loyalty tier", "Testing message copy variants", "Exporting user data", "Archiving the Canvas"], correct: 0, explain: "Audience Paths branch the journey based on attributes or segment membership, like loyalty tier." },
      { domain: "Customer Journey Orchestration", code: "5.0", q: "What's the main benefit of collecting data through an in-app message survey built into a Canvas?", options: ["Collecting first-hand (zero-party) data on user preferences directly within the journey", "Reducing app load time", "Bypassing the need for segmentation", "Automatically generating push copy"], correct: 0, explain: "In-app surveys let users proactively share preference data that can drive later personalization." },
      { domain: "Reporting & Analytics", code: "6.0", q: "What can a dashboard conversion report help a marketer understand?", options: ["Whether users who received a campaign later completed a defined goal event", "The server uptime of Braze", "The number of admins on the account", "The cost of SMS sends only"], correct: 0, explain: "Conversion reports tie message delivery to downstream goal completion, like a purchase." }
    ]
  },

  "retail-marketing-specialist": {
    id: "retail-marketing-specialist",
    name: "Braze Certified Retail Marketing Specialist",
    short: "Retail Marketing Specialist",
    level: "L1",
    cost: "$50",
    time: "60 min",
    format: "30 multiple-choice",
    passing: "79%",
    blurb: "For retail marketers who build connected, personalized shopping journeys and run common eCommerce use cases in Braze.",
    domains: [
      { code: "1.0", name: "Customer-Centric Retailing", weight: 15 },
      { code: "2.0", name: "Data-Driven Personalization", weight: 25 },
      { code: "3.0", name: "Connected Shopping Journeys", weight: 25 },
      { code: "4.0", name: "Retail & eCommerce Playbook", weight: 35 }
    ],
    questions: [
      { domain: "Customer-Centric Retailing", code: "1.0", q: "What does \"customer-centric retailing\" prioritize compared to a purely channel-centered strategy?", options: ["Maximizing the number of channels used, regardless of relevance", "Understanding and meeting individual customer needs and preferences across the full lifecycle", "Reducing the size of the marketing team", "Sending the same message on every channel at once"], correct: 1, explain: "Customer-centric retailing focuses on the customer's actual needs across their lifecycle, not channel volume." },
      { domain: "Customer-Centric Retailing", code: "1.0", q: "Shifting from a channel-centered to a lifecycle-centered strategy primarily helps a retail brand by:", options: ["Reducing the number of marketing tools needed", "Driving revenue and growth by focusing on the customer's full journey rather than isolated channel performance", "Eliminating the need for segmentation", "Guaranteeing lower advertising costs"], correct: 1, explain: "A lifecycle view connects touchpoints toward growth, rather than optimizing channels in isolation." },
      { domain: "Data-Driven Personalization", code: "2.0", q: "What is zero-party data?", options: ["Data purchased from a third-party broker", "Information a customer intentionally and proactively shares with a brand, like quiz answers", "Data inferred purely from browsing history", "Data collected without the customer's knowledge"], correct: 1, explain: "Zero-party data is explicitly and willingly shared by the customer, like a stated style preference." },
      { domain: "Data-Driven Personalization", code: "2.0", q: "A furniture retailer's style quiz shows a customer prefers \"mid-century modern,\" and the retailer later emails matching product picks. This is an example of:", options: ["First-party transactional data", "Using zero-party data to personalize a campaign", "Household data collection", "Re-engagement after cart abandonment"], correct: 1, explain: "The preference was volunteered directly by the customer and then used to personalize a campaign — classic zero-party data use." },
      { domain: "Data-Driven Personalization", code: "2.0", q: "What does the \"value pyramid\" framework help retail marketers do?", options: ["Set product pricing tiers", "Understand how to deepen customer relationships by addressing needs from functional value up through belonging and self-actualization", "Rank employees by performance", "Calculate shipping costs"], correct: 1, explain: "The value pyramid maps how brand value can move beyond transactions toward deeper emotional needs." },
      { domain: "Connected Shopping Journeys", code: "3.0", q: "Which of the following best illustrates a journey that connects physical and digital experiences?", options: ["A shopper browses an item online, then gets a push notification with a personalized offer for that item on entering the physical store", "A shopper only ever buys online", "A shopper only ever buys in-store", "A shopper researches a competitor's website"], correct: 0, explain: "This links an online browsing signal to a real-time, location-triggered in-store offer." },
      { domain: "Connected Shopping Journeys", code: "3.0", q: "What's a key strategy for creating connected, omnichannel shopping journeys?", options: ["Keeping each channel's customer data siloed and separate", "Building unified customer profiles that combine data across channels", "Using only email for all communication", "Avoiding personalization to keep messaging consistent"], correct: 1, explain: "Unified profiles let a brand recognize the same customer and personalize consistently across channels." },
      { domain: "Connected Shopping Journeys", code: "3.0", q: "What is the primary value an omnichannel shopping journey provides to a retail brand?", options: ["It replaces the need for a mobile app", "It drives deeper loyalty and increases customer lifetime value through a consistent, cohesive experience", "It eliminates the need for customer service", "It forces every purchase into a single channel"], correct: 1, explain: "Consistency across channels builds trust and loyalty, which raises lifetime value." },
      { domain: "Retail & eCommerce Playbook", code: "4.0", q: "What's the benefit of using Braze's pre-built eCommerce Canvas templates for a use case like abandoned cart?", options: ["They guarantee higher revenue automatically", "They speed up journey creation and come pre-configured with common eCommerce trigger events", "They only work for push notifications", "They remove the need for any personalization"], correct: 1, explain: "Templates accelerate build time and are pre-wired to standard eCommerce events." },
      { domain: "Retail & eCommerce Playbook", code: "4.0", q: "Which two Braze features are typically combined to dynamically show a product's name, image, and price in a back-in-stock message?", options: ["Braze Catalogs and Liquid", "Currents and the SDK", "Subscription groups and segments", "Canvas and Content Cards only"], correct: 0, explain: "Catalogs store the product data, and Liquid pulls it dynamically into the message." },
      { domain: "Retail & eCommerce Playbook", code: "4.0", q: "What event typically triggers an order confirmation Canvas template?", options: ["product_viewed", "user_added_to_cart", "An order-placed / purchase event", "session_start"], correct: 2, explain: "Order confirmation flows key off the purchase or order-placed event, not browsing events." },
      { domain: "Retail & eCommerce Playbook", code: "4.0", q: "A retailer wants to send a real-time offer when a shopper's phone enters a mall's physical radius. Which Braze feature enables this?", options: ["Geofence", "Content Card", "Liquid filter", "Segment extension"], correct: 0, explain: "Geofencing triggers messaging based on a device entering or exiting a defined physical area." }
    ]
  },

  "email-deliverability": {
    id: "email-deliverability",
    name: "Braze Certified Email Deliverability Fundamentals",
    short: "Email Deliverability",
    level: "L1",
    cost: "$50",
    time: "60 min",
    format: "30 multiple-choice",
    passing: "80%",
    blurb: "For anyone responsible for a brand's sending health: consent, IP warming, list hygiene, and performance monitoring.",
    domains: [
      { code: "1.0", name: "Opt-Ins & Permissions", weight: 20 },
      { code: "2.0", name: "IP Warming", weight: 20 },
      { code: "3.0", name: "Holiday Deliverability", weight: 20 },
      { code: "4.0", name: "List Hygiene", weight: 20 },
      { code: "5.0", name: "Improving Performance", weight: 20 }
    ],
    questions: [
      { domain: "Opt-Ins & Permissions", code: "1.0", q: "Why is managing explicit opt-in consent important for email deliverability?", options: ["It has no effect on deliverability", "Sending to unconsented users increases complaints and spam reports, which harms sender reputation", "It matters for SMS only, not email", "It guarantees higher open rates regardless of content"], correct: 1, explain: "Consent quality directly shapes complaint rates, which mailbox providers weigh heavily in reputation." },
      { domain: "Opt-Ins & Permissions", code: "1.0", q: "What is a double opt-in flow designed to do?", options: ["Automatically unsubscribe inactive users", "Confirm a user's intent to subscribe by requiring a second confirmation step, like clicking a link", "Send two copies of every email", "Bypass consent requirements entirely"], correct: 1, explain: "Double opt-in adds a confirmation step that verifies genuine subscriber intent, keeping lists cleaner." },
      { domain: "IP Warming", code: "2.0", q: "What is the purpose of IP warming when sending from a new sending IP?", options: ["Gradually increasing send volume to build a positive sender reputation with mailbox providers", "Reducing the number of templates used", "Testing subject lines", "Encrypting email content"], correct: 0, explain: "Warming ramps volume slowly so mailbox providers build trust in the new IP over time." },
      { domain: "IP Warming", code: "2.0", q: "During IP warming, why would a brand send to its most engaged subscribers first?", options: ["It's a legal requirement", "Sending to highly engaged users first produces positive signals that help build sender reputation faster", "It shortens email length", "It avoids the need for authentication records"], correct: 1, explain: "Strong engagement early in the warming period sends positive signals to mailbox providers." },
      { domain: "Holiday Deliverability", code: "3.0", q: "Why do high-volume periods like the holidays pose extra deliverability risk?", options: ["Sudden volume spikes can look suspicious and strain sender reputation if not planned for", "Holidays have no effect on deliverability", "Mailbox providers pause all filtering during holidays", "Email costs increase automatically"], correct: 0, explain: "Unplanned volume spikes can trigger filtering, since mailbox providers watch for sudden changes." },
      { domain: "Holiday Deliverability", code: "3.0", q: "What's a recommended practice ahead of a high-volume holiday sending period?", options: ["Suddenly triple list size without warning", "Plan gradual volume increases and closely monitor engagement and complaint metrics", "Disable list hygiene practices", "Switch to a brand-new unwarmed IP the day before"], correct: 1, explain: "Gradual ramp-up with close monitoring reduces the risk of reputation damage during peak volume." },
      { domain: "List Hygiene", code: "4.0", q: "What is the main goal of email list hygiene?", options: ["Increasing list size as fast as possible", "Removing or suppressing invalid, unengaged, or bouncing addresses to protect sender reputation", "Formatting email HTML", "Choosing subject line length"], correct: 1, explain: "A clean list keeps engagement metrics healthy and protects reputation with mailbox providers." },
      { domain: "List Hygiene", code: "4.0", q: "Segmenting an email list to focus sends on loyal, active users primarily helps resolve:", options: ["Low email engagement, by improving the open and click rates mailbox providers see", "Slow website load times", "SMS opt-out rates", "API rate limits"], correct: 0, explain: "Sending mostly to engaged users raises the engagement rates that mailbox providers use to judge reputation." },
      { domain: "List Hygiene", code: "4.0", q: "What's generally the safest response to a large group of long-term unengaged subscribers?", options: ["Ignore them — they don't affect deliverability", "Attempt re-engagement, then eventually suppress or remove them to protect sender reputation", "Email them more frequently", "Move them to SMS only"], correct: 1, explain: "Persistently unengaged addresses drag down reputation, so they should be re-engaged or removed." },
      { domain: "Improving Performance", code: "5.0", q: "Which Braze tool provides a detailed, queryable export of every send, open, click, bounce, and unsubscribe event?", options: ["Query Builder", "The Content Card feed", "A Canvas variant report", "Braze Catalogs"], correct: 0, explain: "Query Builder gives granular, custom access to event-level deliverability data." },
      { domain: "Improving Performance", code: "5.0", q: "A brand's delivery rate drops after IP warming, engagement is falling, and complaints are rising. What does this combination most likely indicate?", options: ["Mailbox providers may be throttling or filtering sends due to reputation issues, and content or targeting likely needs review", "The issue is unrelated to deliverability", "The brand should immediately switch email service providers", "Nothing needs to change"], correct: 0, explain: "Falling delivery and engagement alongside rising complaints together point to a reputation problem needing intervention." },
      { domain: "Improving Performance", code: "5.0", q: "Which of these is a sign of healthy email deliverability?", options: ["Rising bounce and complaint rates", "Consistent inbox placement with strong open and click engagement", "Frequent blacklisting", "Declining sender reputation"], correct: 1, explain: "Consistent inbox placement paired with strong engagement is the clearest sign of healthy deliverability." }
    ]
  },

  "ai-fundamentals": {
    id: "ai-fundamentals",
    name: "Braze Certified AI Fundamentals",
    short: "AI Fundamentals",
    level: "L1",
    cost: "$50",
    time: "60 min",
    format: "30 multiple-choice",
    passing: "69%",
    blurb: "Entry-level exam covering AI and machine learning concepts as applied to marketing and customer engagement.",
    domains: [
      { code: "1.0", name: "Marketing Context for AI", weight: 25 },
      { code: "2.0", name: "Machine Learning", weight: 25 },
      { code: "3.0", name: "Generative AI", weight: 25 },
      { code: "4.0", name: "Reinforcement Learning", weight: 25 }
    ],
    questions: [
      { domain: "Marketing Context for AI", code: "1.0", q: "In a marketing context, what's the main value of applying AI to customer engagement?", options: ["Replacing marketers entirely", "Using patterns in data to power predictions, personalization, and decisions at scale", "Eliminating the need for segmentation", "Guaranteeing every campaign converts"], correct: 1, explain: "AI's value in marketing is scaling data-driven predictions and personalization, not replacing strategy." },
      { domain: "Marketing Context for AI", code: "1.0", q: "Which best describes \"Agentic AI\" in a marketing tool?", options: ["A static rules engine with no autonomy", "A system that can autonomously take multi-step actions toward a goal, using tools and reasoning", "A single yes/no classifier", "A spreadsheet formula"], correct: 1, explain: "Agentic AI can plan and act across multiple steps toward a goal, beyond a single fixed rule." },
      { domain: "Marketing Context for AI", code: "1.0", q: "Why does human oversight remain important when using AI in marketing decisions?", options: ["AI is always perfectly accurate", "AI models can make mistakes or reflect biased data, so review and judgment still matter", "AI cannot process marketing data", "Regulations forbid using AI in marketing"], correct: 1, explain: "AI outputs can be wrong or biased, so human review remains an important safeguard." },
      { domain: "Machine Learning", code: "2.0", q: "A marketing team wants to discover naturally occurring customer groups based on purchase behavior, with no predefined labels. Which approach fits best?", options: ["Supervised learning", "Unsupervised learning (pattern or cluster identification)", "Reinforcement learning", "Generative AI"], correct: 1, explain: "Finding hidden groupings with no labels is a classic unsupervised learning task." },
      { domain: "Machine Learning", code: "2.0", q: "Supervised learning is best described as:", options: ["Learning to predict an outcome from labeled historical examples", "Learning purely through trial-and-error rewards", "Generating new content from a prompt", "Finding hidden clusters with no labels"], correct: 0, explain: "Supervised learning trains on labeled examples to predict an outcome for new data." },
      { domain: "Machine Learning", code: "2.0", q: "What is a Random Forest model commonly used for?", options: ["Encrypting customer data", "A supervised learning technique that combines many decision trees to make more accurate predictions", "Generating images", "Real-time message delivery"], correct: 1, explain: "Random Forest is an ensemble of decision trees used for prediction tasks." },
      { domain: "Generative AI", code: "3.0", q: "What is the primary goal of context engineering when writing a generative AI prompt?", options: ["Translating the prompt into another language", "Providing the model with relevant, specific information so it produces a more accurate and useful output", "Permanently altering the model's internal weights", "Slowing down the response time"], correct: 1, explain: "Context engineering means giving the model the right information in the prompt, not retraining it." },
      { domain: "Generative AI", code: "3.0", q: "Generative AI is best described as a system that:", options: ["Only classifies existing data into categories", "Produces new content, such as text or images, based on patterns learned from training data", "Only performs mathematical calculations", "Requires no training data at all"], correct: 1, explain: "Generative AI creates new outputs rather than simply sorting existing data into categories." },
      { domain: "Generative AI", code: "3.0", q: "What's a key risk to keep in mind when using generative AI to draft marketing copy?", options: ["It can occasionally produce inaccurate or inconsistent claims that need human review", "It always produces legally reviewed content", "It cannot generate text at all", "It requires a live connection to the Braze dashboard to function"], correct: 0, explain: "Generated copy should be reviewed, since the model can produce inaccurate or inconsistent claims." },
      { domain: "Reinforcement Learning", code: "4.0", q: "What best describes the \"explore-exploit\" tradeoff in reinforcement learning?", options: ["An agent must balance trying new actions (exploring) against using known high-reward actions (exploiting)", "Agents should only ever exploit known actions", "Agents should only ever explore randomly", "There is no tradeoff involved"], correct: 0, explain: "The agent balances discovering potentially better actions with using the best actions found so far." },
      { domain: "Reinforcement Learning", code: "4.0", q: "In a reinforcement learning system used for message optimization, what does a \"reward\" typically represent?", options: ["A random number", "A signal, like a click or conversion, indicating whether an action achieved a desired outcome", "The cost of sending a message", "The size of the audience"], correct: 1, explain: "Rewards are outcome signals, like engagement or conversion, that guide the agent's learning." },
      { domain: "Reinforcement Learning", code: "4.0", q: "Which marketing use case is a natural fit for reinforcement learning?", options: ["Continuously learning which send-time or variant drives the best outcome for each user over many interactions", "One-time list cleaning", "Manually formatting an email template", "A static A/B test with a single fixed winner declared upfront"], correct: 0, explain: "Reinforcement learning suits ongoing optimization across many interactions, not one-off, static decisions." }
    ]
  },

  developer: {
    id: "developer",
    name: "Braze Certified Developer",
    short: "Developer",
    level: "L2",
    cost: "$100",
    time: "90 min",
    format: "50 AI-proctored",
    passing: "74%",
    blurb: "For engineers integrating Braze into a tech stack: SDK integration, data ingestion, messaging integration, and troubleshooting.",
    domains: [
      { code: "1.0", name: "Braze Technical Basics", weight: 30 },
      { code: "2.0", name: "SDK Integration Basics", weight: 35 },
      { code: "3.0", name: "Messaging Integration Basics", weight: 25 },
      { code: "4.0", name: "Testing & Troubleshooting", weight: 10 }
    ],
    questions: [
      { domain: "Braze Technical Basics", code: "1.0", q: "What's a key first step when planning how Braze will interact with your tech stack?", options: ["Immediately writing production SDK code with no plan", "Understanding how user data will be modeled, ingested, and exported before integrating", "Skipping the SDK entirely", "Disabling all data collection"], correct: 1, explain: "A solid data model and ingestion plan should come before writing integration code." },
      { domain: "Braze Technical Basics", code: "1.0", q: "What identifies a user profile in Braze when a user logs into an app?", options: ["external_id", "A random UUID with no link to your system", "The device's IP address", "The app version number"], correct: 0, explain: "external_id is the standard identifier used to link a Braze profile to your own user record." },
      { domain: "Braze Technical Basics", code: "1.0", q: "Why would a developer add an alias to a user profile?", options: ["To identify or merge a user profile before a permanent external_id is known or available", "To change the user's password", "To disable messaging for that user", "To increase send frequency"], correct: 0, explain: "Aliases identify users before a full external_id exists, such as pre-login." },
      { domain: "Braze Technical Basics", code: "1.0", q: "What's a common developer responsibility during Braze onboarding?", options: ["Writing marketing copy", "Planning and implementing SDK integration and data ingestion", "Setting exam pricing", "Approving campaign budgets"], correct: 1, explain: "Developers typically own the technical integration work: SDK setup and data ingestion." },
      { domain: "SDK Integration Basics", code: "2.0", q: "Which of the following is typically submitted to Braze as a custom event rather than a standard attribute?", options: ["A user's first name", "A user completing registration", "A user's phone number", "A user's preferred language"], correct: 1, explain: "An action that happens at a point in time, like completing registration, is modeled as an event, not a static attribute." },
      { domain: "SDK Integration Basics", code: "2.0", q: "What's the purpose of a developer workspace in Braze?", options: ["A sandboxed environment to safely build and test SDK integration before connecting to production", "A billing dashboard", "An email template library", "A customer support ticketing system"], correct: 0, explain: "Developer workspaces let teams test integration work without touching live production data." },
      { domain: "SDK Integration Basics", code: "2.0", q: "What controls how much data is automatically collected by the Braze SDK, like session data?", options: ["SDK configuration settings", "The marketing team's segment filters", "The Content Card feed", "The Canvas audience path"], correct: 0, explain: "SDK configuration options govern the scope of automatically collected data." },
      { domain: "SDK Integration Basics", code: "2.0", q: "Which Braze tool allows real-time, in-app or on-site data ingestion as users take actions?", options: ["The Braze SDK", "CSV import only", "A once-daily batch import", "Manual data entry"], correct: 0, explain: "The SDK sends data to Braze in real time as user actions occur." },
      { domain: "Messaging Integration Basics", code: "3.0", q: "What's the key difference between push notifications, in-app messages, and Content Cards as channels?", options: ["They're functionally identical", "They differ in delivery context and require different levels of SDK support and customization", "Only push notifications require any integration", "Content Cards can't be customized at all"], correct: 1, explain: "Each channel has a different delivery context and different integration requirements." },
      { domain: "Messaging Integration Basics", code: "3.0", q: "A team with limited engineering resources wants richly customized in-app messages. Is significant engineering support required?", options: ["Yes, always", "No — many in-app message customizations can be built in the dashboard's visual editor, with engineering needed mainly for advanced cases", "In-app messages can't be customized", "Only push notifications can be customized without code"], correct: 1, explain: "The dashboard's drag-and-drop editor covers many customizations without engineering involvement." },
      { domain: "Messaging Integration Basics", code: "3.0", q: "What's the primary use of the Braze REST API for a developer?", options: ["Internal Braze billing only", "Importing historical data, triggering transactional sends, and syncing data between your tech stack and Braze outside the SDK", "Designing email templates visually", "Managing user passwords"], correct: 1, explain: "The API handles server-to-server data flows and triggered sends that the client-side SDK doesn't cover." },
      { domain: "Testing & Troubleshooting", code: "4.0", q: "After customizing in-app message click tracking, what's a reliable way to confirm analytics are firing correctly?", options: ["Assume it works without testing", "Send a test campaign and check Campaign Analytics or the Message Activity Log for the expected events", "Only check it in production with real users", "There's no way to verify this"], correct: 1, explain: "A test send plus checking the activity log confirms events are firing before going live." }
    ]
  },

  "technical-marketing-expert": {
    id: "technical-marketing-expert",
    name: "Braze Certified Technical Marketing Expert",
    short: "Technical Marketing Expert",
    level: "L3",
    cost: "$150",
    time: "90 min",
    format: "50 multiple-choice",
    passing: "76%",
    blurb: "Formerly Braze Certified Technical Architect. For leaders of technical integration: data architecture, migration planning, and tech stack design.",
    domains: [
      { code: "1.0", name: "Data Architecture & Design", weight: 25 },
      { code: "2.0", name: "Technical Implementation", weight: 25 },
      { code: "3.0", name: "Data Migration Planning", weight: 20 },
      { code: "4.0", name: "Tech Stack Design", weight: 15 },
      { code: "5.0", name: "SDK & Channel Integration", weight: 15 }
    ],
    questions: [
      { domain: "Data Architecture & Design", code: "1.0", q: "When designing a Braze data architecture for a new client, what should be defined first?", options: ["The email subject lines", "A clear data model covering standard/custom attributes and events, and how they map to the client's systems", "The office holiday schedule", "The support ticket queue"], correct: 1, explain: "A well-defined data model is the foundation everything else — segmentation, personalization, reporting — is built on." },
      { domain: "Data Architecture & Design", code: "1.0", q: "Why is a well-planned data architecture important before a Braze integration goes live?", options: ["It has no real impact on later campaign performance", "Poorly modeled data leads to inaccurate segmentation, personalization, and reporting downstream", "It only affects billing", "It's only relevant to the design team"], correct: 1, explain: "Data modeling mistakes compound downstream into every part of the platform that depends on that data." },
      { domain: "Data Architecture & Design", code: "1.0", q: "What's a key consideration when deciding whether a data point should be a custom attribute or a custom event?", options: ["Attributes represent a current state about a user, while events represent something that happened at a point in time", "There's no functional difference", "Events can never be used in segmentation", "Attributes are always deprecated in favor of events"], correct: 0, explain: "Attributes describe current state; events capture discrete occurrences in time — the distinction drives the data model." },
      { domain: "Technical Implementation", code: "2.0", q: "What's a responsibility of a Technical Marketing Expert during a complex Braze implementation?", options: ["Leading technical integration decisions and guiding teams through SDK and messaging channel setup", "Writing legal contracts", "Setting the marketing budget", "Approving creative copy only"], correct: 0, explain: "This role leads the technical side of implementation, guiding integration decisions end to end." },
      { domain: "Technical Implementation", code: "2.0", q: "When advising on an advanced use-case solution, what should a Technical Marketing Expert weigh most?", options: ["Only the visual design of messages", "Technical feasibility, data availability, and how the solution fits the client's broader tech stack", "The color scheme of the dashboard", "Nothing beyond marketing goals"], correct: 1, explain: "Sound technical advice balances feasibility, available data, and fit with the existing stack." },
      { domain: "Technical Implementation", code: "2.0", q: "Why might a Technical Marketing Expert recommend Connected Content over a static data import for a use case needing frequently changing external data?", options: ["Connected Content pulls fresh data at send time, avoiding stale imported data", "Static imports are always faster", "Connected Content requires no setup at all", "There's no real difference between the two"], correct: 0, explain: "Connected Content fetches current data at send time, which static imports can't guarantee." },
      { domain: "Data Migration Planning", code: "3.0", q: "What's an important early step when planning a data migration into Braze from a legacy platform?", options: ["Skip mapping and import everything as-is", "Audit and map legacy data fields to Braze's data model before migrating", "Migrate without informing the marketing team", "Migrate only campaign creative, not user data"], correct: 1, explain: "Mapping fields to Braze's data model before migrating prevents structural mismatches later." },
      { domain: "Data Migration Planning", code: "3.0", q: "Why is it important to plan for data validation after a migration is complete?", options: ["Validation is optional and rarely necessary", "To confirm migrated attributes, events, and segments behave as expected before relying on them for live campaigns", "It only matters for SMS", "It replaces the need for testing entirely"], correct: 1, explain: "Post-migration validation catches mapping or data-quality issues before they affect live campaigns." },
      { domain: "Tech Stack Design", code: "4.0", q: "When designing how Braze fits into a broader martech stack, what's a key architectural decision?", options: ["Whether to use Braze at all costs regardless of fit", "How data will flow between Braze and other systems, and which system is the source of truth for each data point", "The font used in emails", "The number of campaigns sent per week"], correct: 1, explain: "Defining data flow and source-of-truth ownership avoids conflicting or duplicated data across systems." },
      { domain: "Tech Stack Design", code: "4.0", q: "What's a benefit of using Currents in a broader tech stack design?", options: ["It streams Braze event data out to external systems, like a data warehouse, for further analysis", "It sends push notifications", "It replaces the need for segmentation", "It manages email deliverability directly"], correct: 0, explain: "Currents exports Braze event-level data to external systems for downstream analysis or storage." },
      { domain: "SDK & Channel Integration", code: "5.0", q: "When guiding a team through SDK and messaging channel integration, what's an important early technical decision?", options: ["Which channels are needed and what level of SDK integration each requires", "The company's holiday schedule", "The marketing team's org chart", "The pricing tier for exams"], correct: 0, explain: "Scoping which channels are needed determines the shape and depth of the SDK integration work." },
      { domain: "SDK & Channel Integration", code: "5.0", q: "What should a Technical Marketing Expert verify before considering a messaging channel integration complete?", options: ["That messages send and that user data and engagement events correctly flow back into Braze", "Only that the message looks good in a preview", "That the campaign has a catchy subject line", "That the Canvas has fewer than five steps"], correct: 0, explain: "A complete integration means both outbound sending and inbound event tracking are verified end to end." }
    ]
  },

  "marketing-strategy-expert": {
    id: "marketing-strategy-expert",
    name: "Braze Certified Marketing Strategy Expert",
    short: "Marketing Strategy Expert",
    level: "L3",
    cost: "$150",
    time: "90 min",
    format: "50 multiple-choice",
    passing: "72%",
    blurb: "Formerly Braze Certified Digital Strategist. For leaders who define overall marketing and customer engagement strategy.",
    domains: [
      { code: "1.0", name: "Data Management", weight: 20 },
      { code: "2.0", name: "Data Planning", weight: 20 },
      { code: "3.0", name: "User Personas & Journeys", weight: 20 },
      { code: "4.0", name: "Customer Experience & Orchestration", weight: 20 },
      { code: "5.0", name: "Data-Driven Messaging", weight: 20 }
    ],
    questions: [
      { domain: "Data Management", code: "1.0", q: "Why is strong data management foundational to a marketing strategy in Braze?", options: ["It has no bearing on strategy", "Accurate, well-organized data underpins effective segmentation, personalization, and measurement", "It only affects the engineering team", "It matters only for SMS campaigns"], correct: 1, explain: "Every strategic capability — segmentation, personalization, reporting — depends on clean, well-managed data." },
      { domain: "Data Management", code: "1.0", q: "What's a strategic reason to regularly audit which attributes and events are actually being used?", options: ["To reduce unnecessary complexity and keep the data model aligned with real strategic needs", "To increase storage costs", "To slow down campaign launches", "There's no real reason to audit"], correct: 0, explain: "Regular audits keep the data model lean and focused on what the strategy actually needs." },
      { domain: "Data Planning", code: "2.0", q: "What does \"data planning\" at a strategic level typically involve?", options: ["Randomly collecting as much data as possible", "Identifying which data points are needed to support key journeys and decisions, and how to collect them", "Ignoring compliance requirements", "Only planning for a single channel"], correct: 1, explain: "Good data planning is deliberate — tied to the journeys and decisions the data will actually support." },
      { domain: "Data Planning", code: "2.0", q: "Why should a Marketing Strategy Expert plan for zero-party and first-party data collection across the journey?", options: ["To reduce reliance on third-party data and enable durable, consented personalization", "Because third-party data is always more accurate", "Because it's legally required in every region", "Because it removes the need for segmentation"], correct: 0, explain: "First- and zero-party data give durable, consented signal that doesn't depend on third-party sources." },
      { domain: "User Personas & Journeys", code: "3.0", q: "What's the purpose of defining user personas before designing customer journeys?", options: ["To decorate a presentation deck", "To ground journey design in real, distinct customer needs and behaviors rather than a one-size-fits-all approach", "To replace the need for segmentation entirely", "To set pricing"], correct: 1, explain: "Personas keep journey design anchored to actual distinct customer needs, not a generic default." },
      { domain: "User Personas & Journeys", code: "3.0", q: "What are \"meaningful moments\" in a customer lifecycle journey?", options: ["Random points in the journey with no strategic value", "Key moments, like a first purchase or a lapse in engagement, where a message can have outsized impact", "Only the very first email a user receives", "Moments unrelated to marketing strategy"], correct: 1, explain: "Meaningful moments are high-leverage points where the right message can significantly shift the relationship." },
      { domain: "Customer Experience & Orchestration", code: "4.0", q: "What's the relationship between a Marketing Strategy Expert and a Marketing Specialist who executes campaigns in the dashboard?", options: ["They have identical day-to-day responsibilities", "The Strategy Expert defines the overall strategy and journeys, which the Specialist then builds and executes", "They have no interaction with each other", "The Strategy Expert only handles billing"], correct: 1, explain: "Strategy and execution are complementary roles — one defines direction, the other builds it in the dashboard." },
      { domain: "Customer Experience & Orchestration", code: "4.0", q: "When orchestrating a cross-channel customer experience, what's a key strategic goal?", options: ["Sending the same message on every channel at the same time regardless of context", "Delivering a consistent, coordinated experience where each channel plays a complementary role", "Using only one channel to simplify strategy", "Avoiding personalization to keep messaging uniform"], correct: 1, explain: "Good orchestration coordinates channels to complement each other, not repeat the same message everywhere." },
      { domain: "Customer Experience & Orchestration", code: "4.0", q: "A drop-off point in a customer journey, like cart abandonment, is best addressed strategically by:", options: ["Ignoring it, since some drop-off is inevitable", "Designing a targeted re-engagement journey that identifies and responds to that specific moment", "Sending more generic promotional blasts", "Removing the affected users from all future messaging"], correct: 1, explain: "A targeted response to a known drop-off point is far more effective than a generic broadcast." },
      { domain: "Data-Driven Messaging", code: "5.0", q: "What does \"data-driven messaging\" mean at a strategic level?", options: ["Using performance data and customer insights to continuously refine messaging strategy and content decisions", "Sending messages based purely on gut feeling", "Ignoring analytics after a campaign launches", "Using the same message forever without iteration"], correct: 0, explain: "Data-driven messaging means strategy and content evolve based on what performance data shows." },
      { domain: "Data-Driven Messaging", code: "5.0", q: "Why would a Marketing Strategy Expert prioritize using a Report Builder to compare multiple campaigns and Canvases in a single view?", options: ["To reduce the number of charts available", "To evaluate performance trends holistically across the strategy, not just in isolated silos", "It's required for billing purposes", "It replaces the need for segmentation"], correct: 1, explain: "A cross-campaign view reveals strategic trends that isolated, single-campaign reports would miss." },
      { domain: "Data-Driven Messaging", code: "5.0", q: "What's the strategic benefit of tying messaging decisions to measurable business outcomes, like conversion or retention, rather than just engagement metrics like opens?", options: ["It ensures the strategy is judged by its actual impact on the business, not just surface-level activity", "Opens are always the best measure of success", "Business outcomes are unrelated to messaging strategy", "It removes the need for any testing"], correct: 0, explain: "Business outcomes are the real measure of strategic success — engagement metrics are only a proxy." }
    ]
  }

};

// Fixed insertion order for the landing grid
const CERT_ORDER = [
  "practitioner",
  "marketing-specialist",
  "retail-marketing-specialist",
  "email-deliverability",
  "ai-fundamentals",
  "developer",
  "technical-marketing-expert",
  "marketing-strategy-expert"
];
