export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  heroTagline: string;
  fullDesc: string;
  image: string;
  whatItCovers: string[];
  commonSymptoms: string[];
  processSteps: { step: string; title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
}

export const BUSINESS_INFO = {
  name: "South Texas Diesel And Automotive Services LLC",
  shortName: "South Texas Diesel & Automotive",
  facilityType: "Professional Diesel & Automotive Repair Facility",
  address: {
    street: "3917 Apollo Rd",
    city: "Corpus Christi",
    state: "TX",
    zip: "78413",
    country: "United States",
    formatted: "3917 Apollo Rd, Corpus Christi, TX 78413, United States",
  },
  phone: "+1 361-444-6820",
  phoneRaw: "+13614446820",
  googleRating: 4.9,
  reviewCount: 86,
  hoursNotice: "Please call to confirm current hours.",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=3917+Apollo+Rd,+Corpus+Christi,+TX+78413",
  googleMapsEmbed: "https://maps.google.com/maps?q=3917+Apollo+Rd,+Corpus+Christi,+TX+78413&t=&z=15&ie=UTF8&iwloc=&output=embed",
  heroVideoPath: "/videos/hero-automotive.mp4",
};

export const CORE_SERVICE_CATEGORIES = [
  {
    id: "diesel",
    name: "DIESEL",
    description: "Specialized diagnostics and mechanical repair for light, medium, and heavy-duty diesel platforms.",
    services: [
      { name: "Diesel Diagnostics", slug: "diesel-diagnostics" },
      { name: "Diesel Repair", slug: "diesel-repair" },
      { name: "Diesel & Automotive Repair", slug: "diesel-repair" },
    ],
  },
  {
    id: "engine",
    name: "ENGINE & DIAGNOSTICS",
    description: "Computerized diagnostics, check engine light analysis, and internal engine mechanical repair.",
    services: [
      { name: "Engine Diagnostics", slug: "engine-diagnostics" },
      { name: "Engine Repair", slug: "engine-repair" },
      { name: "Check Engine Light Diagnostics", slug: "engine-diagnostics" },
      { name: "Electrical Diagnostics", slug: "electrical" },
    ],
  },
  {
    id: "brakes",
    name: "BRAKES",
    description: "Brake system inspections, pad and shoe replacements, hydraulic line servicing, and rotor resurfacing/replacement.",
    services: [
      { name: "Brake Inspection", slug: "brake-repair" },
      { name: "Brake Repair", slug: "brake-repair" },
      { name: "Brake Pads & Shoes", slug: "brake-repair" },
      { name: "Brake Lines", slug: "brake-repair" },
      { name: "Rotor Replacement", slug: "brake-repair" },
    ],
  },
  {
    id: "transmission",
    name: "TRANSMISSION",
    description: "Automatic & manual transmission diagnosis, fluid service, clutch replacements, and complete drivetrain repair.",
    services: [
      { name: "Transmission Services", slug: "transmission" },
      { name: "Engine / Transmission Repair", slug: "transmission" },
      { name: "Clutch Replacement", slug: "transmission" },
    ],
  },
  {
    id: "electrical",
    name: "ELECTRICAL",
    description: "Wiring troubleshooting, alternator & starter testing, battery replacement, and electronic module diagnostics.",
    services: [
      { name: "Electrical Diagnostics", slug: "electrical" },
      { name: "Electrical Repair", slug: "electrical" },
      { name: "Battery Service", slug: "electrical" },
    ],
  },
  {
    id: "climate",
    name: "CLIMATE",
    description: "Air conditioning leak checks, compressor replacement, system evacuations, and refrigerant recharge.",
    services: [
      { name: "Air Conditioning", slug: "ac-service" },
      { name: "A/C Service", slug: "ac-service" },
    ],
  },
  {
    id: "maintenance",
    name: "MAINTENANCE",
    description: "Preventive maintenance, oil and filter servicing, fluid exchanges, and bumper-to-bumper vehicle inspections.",
    services: [
      { name: "Oil Change", slug: "oil-change" },
      { name: "Oil & Filters", slug: "oil-change" },
      { name: "Preventive Vehicle Maintenance", slug: "maintenance" },
      { name: "Routine Maintenance", slug: "maintenance" },
      { name: "Maintenance & Inspections", slug: "maintenance" },
    ],
  },
  {
    id: "fleet",
    name: "FLEET",
    description: "Commercial vehicle repair, priority fleet scheduling, and preventive maintenance programs to reduce downtime.",
    services: [
      { name: "Fleet Repair", slug: "fleet-service" },
      { name: "Fleet Maintenance", slug: "fleet-service" },
    ],
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "diesel-diagnostics",
    slug: "diesel-diagnostics",
    title: "Diesel Diagnostics",
    category: "Diesel Services",
    heroTagline: "Find the fault before replacing parts.",
    shortDesc: "Computerized sensor scanning, common-rail injection pressure tests, and electronic turbo actuator diagnostics for diesel engines.",
    fullDesc: "Modern diesel engines are complex electronic and hydraulic assemblies. When power drops or a warning light triggers, guessing costs time and money. At South Texas Diesel And Automotive Services LLC, we connect specialized diagnostic equipment to read live rail pressure, boost behavior, exhaust backpressure, and injection timing to isolate the actual failure before wrenches turn.",
    image: "/images/diagnostics.webp",
    whatItCovers: [
      "Computerized fault code retrieval and freeze-frame data review",
      "Common rail fuel pressure and injector balance testing",
      "Turbocharger boost pressure and wastegate/actuator diagnostics",
      "EGR and diesel emissions subsystem diagnostics",
      "Glow plug, relay, and cold-start circuit verification",
      "Wiring harness pin-out and sensor reference voltage checks"
    ],
    commonSymptoms: [
      "Illuminated Check Engine light or glow plug indicator",
      "Engine entered limp mode or power drops under load",
      "Hard starts, long cranking times, or no-start conditions",
      "Black, white, or blue exhaust smoke under acceleration",
      "Surging idle, knocking, or uneven cylinder operation"
    ],
    processSteps: [
      { step: "01", title: "Intake & Code Scan", desc: "We pull all active and stored DTCs, record freeze-frame data, and note operating conditions." },
      { step: "02", title: "Live Telemetry Analysis", desc: "We monitor commanded vs. actual fuel pressure, boost levels, and sensor voltages during live operation." },
      { step: "03", title: "Physical Pinpoint Testing", desc: "We mechanically verify suspect components through pressure gauges, resistance meters, and leak tests." },
      { step: "04", title: "Action Plan Review", desc: "We present a clear technical diagnosis and outline exact corrective repairs without guesswork." }
    ],
    faqs: [
      {
        question: "Why is specialized diagnostic equipment needed for diesels?",
        answer: "Diesel fuel systems operate at extreme pressures (often exceeding 25,000 PSI) with intricate electronic solenoid injectors. Generic code scanners cannot read manufacturer-specific diesel parameters or perform bi-directional actuator tests."
      },
      {
        question: "What does it mean if my diesel goes into limp mode?",
        answer: "Limp mode is a safety failsafe triggered by the powertrain control module to protect internal engine components from catastrophic damage when critical sensors detect abnormal boost, fuel rail pressure, or emissions anomalies."
      }
    ],
    relatedSlugs: ["diesel-repair", "engine-diagnostics", "fleet-service"]
  },
  {
    id: "diesel-repair",
    slug: "diesel-repair",
    title: "Diesel Repair",
    category: "Diesel Services",
    heroTagline: "Heavy-duty mechanical repairs built to keep work trucks pulling.",
    shortDesc: "From high-pressure fuel pumps and injectors to turbochargers, cooling systems, and engine rebuilds for light and heavy-duty diesels.",
    fullDesc: "South Texas work trucks face high ambient heat, heavy payloads, and long highway runs. South Texas Diesel And Automotive Services LLC provides professional mechanical repair for diesel engines. We repair high-pressure fuel systems, replace failing turbos, overhaul cooling loops, and resolve internal engine mechanical issues with factory-calibrated torque standards.",
    image: "/images/diesel-01.webp",
    whatItCovers: [
      "High-pressure injection pump and fuel injector replacement",
      "Turbocharger replacement and oil supply line service",
      "Water pumps, heavy-duty radiators, and coolant hoses",
      "Cylinder head gaskets, valve adjustments, and manifold sealing",
      "Diesel emissions component service and exhaust repairs",
      "Serpentine drive belts, idler pulleys, and tensioners"
    ],
    commonSymptoms: [
      "Severe power drop when towing or climbing grade",
      "Excessive black smoke (over-fueling) or white smoke (raw fuel/coolant)",
      "High coolant temperatures on the temperature gauge",
      "Diesel fuel odor or visible fuel leaking in the engine valley",
      "Metal-on-metal squealing, whistling, or turbo boost leaks"
    ],
    processSteps: [
      { step: "01", title: "Inspection & Diagnosis", desc: "Confirming the damaged mechanical assembly and checking related components for secondary wear." },
      { step: "02", title: "Clean Teardown", desc: "Disassembling the affected system in a clean bay to keep contaminants out of sensitive fuel circuits." },
      { step: "03", title: "Precision Component Install", desc: "Installing quality parts with new hardware, correct gaskets, and calibrated factory torques." },
      { step: "04", title: "Operational Load Verification", desc: "Checking temperatures, pressures, and road performance to verify dependable operation." }
    ],
    faqs: [
      {
        question: "Do you service both light-duty and commercial diesel trucks?",
        answer: "Yes. We work on work trucks, commercial chassis cabs, flatbeds, and diesel passenger vehicles based at our Corpus Christi repair facility."
      },
      {
        question: "How critical is regular fuel filter maintenance for diesel repairs?",
        answer: "Extremely critical. Contaminated or starved fuel is the leading cause of premature high-pressure pump and injector failure. We always inspect filters during fuel system work."
      }
    ],
    relatedSlugs: ["diesel-diagnostics", "engine-repair", "fleet-service"]
  },
  {
    id: "engine-diagnostics",
    slug: "engine-diagnostics",
    title: "Engine Diagnostics",
    category: "Engine & Diagnostics",
    heroTagline: "Targeted troubleshooting for check engine lights and drivability faults.",
    shortDesc: "Troubleshooting check engine lights, misfires, air-fuel trim errors, sensor failures, and computer communication issues.",
    fullDesc: "A check engine light is an indicator that your vehicle's engine management system has detected an operating parameter outside of normal parameters. We do not just read the trouble code and clear it; we inspect sensor signals, test wiring integrity, check fuel trims, and verify mechanical condition to fix the underlying problem permanently.",
    image: "/images/diagnostics.webp",
    whatItCovers: [
      "OBD-II trouble code extraction and historical data analysis",
      "Ignition coil, spark plug, and misfire detection testing",
      "Oxygen (O2) and air-fuel ratio sensor performance checks",
      "Mass Airflow (MAF) and Manifold Absolute Pressure (MAP) testing",
      "EVAP system smoke testing for vacuum and evaporative leaks",
      "Camshaft and crankshaft timing correlation tests"
    ],
    commonSymptoms: [
      "Steadily lit or flashing Check Engine light",
      "Rough idle, engine shaking at stop lights, or hesitation",
      "Noticeable drop in fuel economy or strong exhaust smells",
      "Engine stumbles or bogs during highway acceleration",
      "Failure to achieve inspection readiness monitors"
    ],
    processSteps: [
      { step: "01", title: "Module Interrogation", desc: "Connecting diagnostic tools to read current and pending trouble codes." },
      { step: "02", title: "Live Data Capture", desc: "Checking fuel trims, ignition timing advance, and oxygen sensor switching rates." },
      { step: "03", title: "Physical Verification", desc: "Testing suspect sensors, intake air paths, and spark output." },
      { step: "04", title: "Clear Findings", desc: "Explaining the mechanical or electrical cause and presenting repair options." }
    ],
    faqs: [
      {
        question: "What does a flashing check engine light mean?",
        answer: "A flashing check engine light indicates an active, severe engine misfire that can cause immediate catalytic converter damage or internal engine harm. You should pull over and arrange service immediately."
      },
      {
        question: "Will clearing the code fix the issue?",
        answer: "No. Clearing a code without repairing the cause will simply cause the light to return once the vehicle completes its drive cycles and the computer detects the fault again."
      }
    ],
    relatedSlugs: ["engine-repair", "electrical", "diesel-diagnostics"]
  },
  {
    id: "engine-repair",
    slug: "engine-repair",
    title: "Engine Repair",
    category: "Engine & Diagnostics",
    heroTagline: "Mechanical repairs that restore engine compression, cooling and timing.",
    shortDesc: "Timing chains and belts, cylinder heads, water pumps, oil leaks, intake manifold gaskets, and mechanical overhauls.",
    fullDesc: "From timing component replacements and blown head gaskets to oil pump repairs and cooling loop overhauls, South Texas Diesel And Automotive Services LLC repairs internal engine failures with attention to tolerances and proper sealing. We diagnose mechanical wear accurately so you can make informed decisions about your vehicle.",
    image: "/images/engine.webp",
    whatItCovers: [
      "Timing chain, belt, and hydraulic tensioner replacement",
      "Cylinder head gasket replacement and head flatness inspection",
      "Water pump, thermostat, and radiator replacements",
      "Valve cover, oil pan, and rear main seal leak repairs",
      "Intake and exhaust manifold gasket replacements",
      "Engine mount replacement and vibration isolation"
    ],
    commonSymptoms: [
      "Overheating warning light or temperature needle rising in traffic",
      "Puddles of oil or coolant pooling on the driveway",
      "Rattling or slap sound from the front timing cover on start-up",
      "Milky oil on the dipstick or oil cap indicating coolant mixing",
      "Deep metallic knocking or tapping from the lower block"
    ],
    processSteps: [
      { step: "01", title: "Mechanical Health Test", desc: "Compression, cylinder leakdown, and cooling system pressure tests." },
      { step: "02", title: "Component Teardown", desc: "Careful removal of exterior accessories and inspection of internal surfaces." },
      { step: "03", title: "Reassembly to Spec", desc: "Installing new gaskets, bearings, and timing sets with calibrated torque sequences." },
      { step: "04", title: "Thermal Cycle Test", desc: "Warming to operating temperature and checking for stable pressure and zero leaks." }
    ],
    faqs: [
      {
        question: "How do I know if my head gasket is blown?",
        answer: "Common signs include white sweet-smelling exhaust smoke, unexplainable coolant loss, bubbling in the coolant reservoir, and an engine that overheats quickly under load."
      },
      {
        question: "Why do timing chains need replacement if they are metal?",
        answer: "While chains rarely snap, hydraulic tensioners wear and guide rails crack, allowing the chain to stretch and throw camshaft correlation out of sync."
      }
    ],
    relatedSlugs: ["engine-diagnostics", "transmission", "maintenance"]
  },
  {
    id: "brake-repair",
    slug: "brake-repair",
    title: "Brake Repair & Service",
    category: "Brake Systems",
    heroTagline: "Stopping power you can depend on under any load.",
    shortDesc: "Complete pad and shoe replacements, precision rotor servicing, caliper rebuilds, and hydraulic brake line repairs.",
    fullDesc: "Brake components wear gradually, but safety cannot be compromised. Whether towing heavy equipment or navigating South Texas highway speeds, your brakes must respond predictably. We perform complete brake safety inspections, measure pad thickness and rotor runout, check brake lines for rust or seepage, and install high-quality friction materials.",
    image: "/images/brakes.webp",
    whatItCovers: [
      "Front and rear brake pad and shoe replacement",
      "Brake rotor and drum replacement / thickness measurement",
      "Brake caliper inspection, sliding pin lubrication, and replacement",
      "Hydraulic brake line, flex hose, and fitting leak repairs",
      "Brake fluid moisture testing and system pressure bleeding",
      "Emergency/parking brake cable inspection and adjustment"
    ],
    commonSymptoms: [
      "High-pitched screeching or harsh metal-on-metal grinding when braking",
      "Vibration or pulsing sensation through the brake pedal or steering wheel",
      "Spongy or low brake pedal that sinks when held at a stop",
      "Vehicle pulls noticeably to the left or right when applying brakes",
      "Brake system warning light or ABS light illuminated on dash"
    ],
    processSteps: [
      { step: "01", title: "Four-Wheel Inspection", desc: "Removing wheels to measure pad thickness, rotor runout, and examine calipers." },
      { step: "02", title: "Hydraulic Integrity Check", desc: "Inspecting hard lines, rubber flex lines, and testing fluid boiling point." },
      { step: "03", title: "Precision Component Install", desc: "Mounting new rotors and pads, cleaning hub surfaces, and lubricating slide pins." },
      { step: "04", title: "Bleed & Road Burnish", desc: "Flushing hydraulic air, test driving, and burnishing pad friction surfaces." }
    ],
    faqs: [
      {
        question: "Why should rotors be replaced with pads instead of just pad slapping?",
        answer: "Worn or grooved rotors prevent new pads from bedding properly, leading to uneven contact, reduced braking efficiency, noisy operation, and steering pulsation."
      },
      {
        question: "How often should brake fluid be flushed?",
        answer: "Brake fluid is hygroscopic (absorbs moisture from the air). In humid Coastal Bend conditions, fluid should be inspected and tested regularly to prevent internal caliper corrosion and vapor lock."
      }
    ],
    relatedSlugs: ["maintenance", "fleet-service", "suspension"]
  },
  {
    id: "transmission",
    slug: "transmission",
    title: "Transmission Services",
    category: "Transmission & Drivetrain",
    heroTagline: "Smooth, dependable power delivery across all gear ranges.",
    shortDesc: "Automatic transmission fluid service, clutch replacement, shift solenoid diagnosis, and drivetrain repairs.",
    fullDesc: "Transmissions convert engine horsepower into controlled wheel torque. Heat and fluid breakdown are their primary enemies. South Texas Diesel And Automotive Services LLC provides transmission fluid servicing, manual transmission clutch assembly replacements, electronic solenoid diagnosis, and drivetrain mechanical repairs.",
    image: "/images/workshop-02.webp",
    whatItCovers: [
      "Transmission fluid inspection, pan drop, and filter replacement",
      "Manual transmission clutch, pressure plate, and flywheel service",
      "Throwout bearing and pilot bushing replacement",
      "Electronic shift solenoid testing and valve body diagnostics",
      "Transmission cooler line leak repair and auxiliary cooler service",
      "Driveshaft U-joint and differential inspection"
    ],
    commonSymptoms: [
      "Delayed engagement when shifting from Park into Drive or Reverse",
      "Hard shifting, slipping between gears, or engine revving without accelerating",
      "Red or brownish transmission fluid puddles under the middle of the vehicle",
      "Burnt odor noticed after towing or extended highway driving",
      "Clutch pedal feels spongy, chatters on release, or slips in higher gears"
    ],
    processSteps: [
      { step: "01", title: "Fluid & Code Assessment", desc: "Scanning transmission control modules and inspecting fluid color and smell." },
      { step: "02", title: "Drivetrain Mechanical Check", desc: "Inspecting mounts, linkages, cooler lines, and clutch actuation hydraulics." },
      { step: "03", title: "Targeted Service / Repair", desc: "Executing filter replacement, clutch overhaul, or line repairs to factory specifications." },
      { step: "04", title: "Shift Quality Test", desc: "Road testing through all gears under varying load conditions." }
    ],
    faqs: [
      {
        question: "Does burnt transmission fluid always mean the transmission is done?",
        answer: "Not necessarily, but it indicates internal slippage and severe overheating. We inspect the pan for friction material and metal debris before recommending next steps."
      },
      {
        question: "What causes a clutch to slip in a manual truck?",
        answer: "Normal friction wear over miles, oil contamination from a leaking rear main seal, or heavy towing beyond rated capacity."
      }
    ],
    relatedSlugs: ["engine-repair", "diesel-repair", "fleet-service"]
  },
  {
    id: "electrical",
    slug: "electrical",
    title: "Electrical Diagnostics & Repair",
    category: "Electrical Systems",
    heroTagline: "Tracing wiring faults, battery drains, and charging issues accurately.",
    shortDesc: "Starter and alternator replacements, battery testing, parasitic draw isolation, sensor wiring, and fuse circuit repairs.",
    fullDesc: "Modern vehicles feature interconnected electronic computers, multiplex networks, and dozens of sensors. A loose ground or corroded connector can mimic major mechanical failure. South Texas Diesel And Automotive Services LLC uses digital multimeters, oscilloscope testing, and circuit tracing to find wiring faults, solve parasitic battery drains, and repair charging systems.",
    image: "/images/diagnostics.webp",
    whatItCovers: [
      "Alternator charging voltage and diode ripple testing",
      "Starter motor load testing and solenoid replacement",
      "Battery Cold Cranking Amp (CCA) testing and terminal cleaning",
      "Parasitic battery drain testing with circuit millimeter drop tracing",
      "Damaged wiring harness repair, soldering, and weather-pack sealing",
      "Lighting circuit, fuse box, and relay diagnostics"
    ],
    commonSymptoms: [
      "Engine cranks slowly or produces single/rapid click when turning key",
      "Battery dies repeatedly after sitting overnight or over the weekend",
      "Battery warning light illuminated on the dashboard gauge cluster",
      "Headlights dim noticeably when accessories or A/C kick on",
      "Intermittent electronic faults with power windows, gauges, or sensors"
    ],
    processSteps: [
      { step: "01", title: "Starting & Charging Test", desc: "Testing battery reserve capacity, starter draw amps, and alternator voltage under load." },
      { step: "02", title: "Voltage Drop Pinpoint", desc: "Measuring resistance across ground straps, power cables, and switches." },
      { step: "03", title: "Professional Wiring Fix", desc: "Repairing fractured conductors with proper soldering and heat-shrink insulation." },
      { step: "04", title: "Circuit Verification", desc: "Testing all related electrical loads to ensure stable voltage." }
    ],
    faqs: [
      {
        question: "Why does my battery keep dying if it tests good?",
        answer: "Most likely a parasitic draw: an electronic module, glovebox switch, or interior accessory that fails to 'go to sleep' when the key is turned off, draining the battery continuously."
      },
      {
        question: "Can bad grounds cause check engine codes?",
        answer: "Yes. Vehicle sensors rely on precise 5-volt reference signals and clean grounds. A corroded ground post can distort sensor readings and trigger false trouble codes."
      }
    ],
    relatedSlugs: ["engine-diagnostics", "diesel-diagnostics", "maintenance"]
  },
  {
    id: "ac-service",
    slug: "ac-service",
    title: "Air Conditioning & Climate Service",
    category: "Climate & A/C",
    heroTagline: "Keeping your cabin cool and comfortable in the South Texas heat.",
    shortDesc: "Refrigerant recovery and recharge, UV dye leak detection, compressor replacement, and climate control repairs.",
    fullDesc: "Driving in Corpus Christi without working air conditioning is unacceptable. Automotive A/C systems require precise refrigerant charge weights, clean condenser airflow, and functional compressors. We test vent temperatures, inspect high and low pressure lines, locate refrigerant leaks with electronic sniffers and UV dye, and replace worn compressors and expansion valves.",
    image: "/images/workshop-01.webp",
    whatItCovers: [
      "A/C vent temperature output and pressure gauge diagnostic check",
      "Refrigerant evacuation, deep vacuum moisture boil-off, and recharge",
      "A/C compressor, clutch assembly, and belt inspection/replacement",
      "Condenser and evaporator core leak testing and cleaning",
      "Expansion valve, orifice tube, and receiver-drier replacement",
      "Cabin air filter inspection and blower motor testing"
    ],
    commonSymptoms: [
      "Vents blowing warm or lukewarm air even when set to maximum cold",
      "Air conditioning only cools when driving at highway speeds",
      "Loud grinding or squealing noise when the A/C button is pressed",
      "Water pooling on the passenger floorboard due to clogged evaporator drain",
      "Musty or unpleasant odor emerging from dashboard vents"
    ],
    processSteps: [
      { step: "01", title: "Gauge Pressure Read", desc: "Connecting manifold gauges to assess high and low side system operating pressures." },
      { step: "02", title: "Refrigerant & Leak Check", desc: "Inspecting hoses, compressor seals, and condenser for signs of oil or refrigerant dye." },
      { step: "03", title: "Vacuum & Repair", desc: "Replacing damaged parts and pulling a deep vacuum to eliminate moisture and air." },
      { step: "04", title: "Factory Spec Recharge", desc: "Charging exact refrigerant weight and confirming frosty vent temperatures." }
    ],
    faqs: [
      {
        question: "Why shouldn't I just buy a recharge can from an auto parts store?",
        answer: "Store-bought cans often contain sealants that clog recovery machines and orifice tubes, and they lack proper high/low pressure gauges to prevent over-pressurizing the compressor."
      },
      {
        question: "Why does my A/C work in the morning but blow warm in afternoon traffic?",
        answer: "Often a sign of low refrigerant pressure or a failing condenser cooling fan that cannot shed heat when the vehicle is stationary in traffic."
      }
    ],
    relatedSlugs: ["maintenance", "electrical", "fleet-service"]
  },
  {
    id: "oil-change",
    slug: "oil-change",
    title: "Oil Change & Filter Service",
    category: "Routine Maintenance",
    heroTagline: "Essential engine lubrication and courtesy multi-point inspection.",
    shortDesc: "Diesel-grade and synthetic motor oils, quality oil filter replacements, fluid level checks, and chassis grease points.",
    fullDesc: "Regular oil and filter changes are the single most important maintenance service to protect your engine against premature wear, sludge build-up, and thermal breakdown. We use approved viscosities tailored for severe South Texas operating conditions, quality filter media, and check your vital under-hood fluid levels.",
    image: "/images/workshop-02.webp",
    whatItCovers: [
      "Engine oil drain and refill with manufacturer-specified viscosity",
      "Quality oil filter replacement with proper gasket pre-lubrication",
      "Inspection of air filter and cabin air filter condition",
      "Inspection and top-off of coolant, brake, and washer fluids",
      "Tire visual wear check and pressure verification",
      "Chassis grease fitting lubrication where equipped"
    ],
    commonSymptoms: [
      "Oil life monitor or maintenance reminder light illuminated on dash",
      "Engine oil reads low or dark black on the dipstick",
      "Mileage interval reached (5,000 to 7,500 miles depending on platform)",
      "Increased engine valve clatter or noise upon cold start"
    ],
    processSteps: [
      { step: "01", title: "Warm Drain", desc: "Draining oil while warm to carry suspended particles and contaminants out." },
      { step: "02", title: "New Filter Install", desc: "Installing a fresh filter element and torquing drain plug to factory spec." },
      { step: "03", title: "Proper Fluid Refill", desc: "Refilling with approved specification oil and verifying correct dipstick level." },
      { step: "04", title: "Health Check & Reset", desc: "Reviewing fluid levels, checking undercarriage, and resetting the service light." }
    ],
    faqs: [
      {
        question: "Do diesel engines require different motor oil than gas engines?",
        answer: "Yes. Diesel oils feature specialized additive packages formulated to handle high soot loads, acid neutralization, and high cylinder temperatures."
      },
      {
        question: "What is included with your oil service?",
        answer: "A full oil drain and refill, new oil filter, top-off of vital fluids, and a courtesy visual inspection of belts, hoses, and tires."
      }
    ],
    relatedSlugs: ["maintenance", "brake-repair", "diesel-repair"]
  },
  {
    id: "maintenance",
    slug: "maintenance",
    title: "Routine Vehicle Maintenance & Inspections",
    category: "Preventive Maintenance",
    heroTagline: "Prevent breakdowns before they happen with structured upkeep.",
    shortDesc: "Drive belts, coolant flushes, suspension bushings, spark plugs, steering linkages, and bumper-to-bumper inspections.",
    fullDesc: "Fixing a broken vehicle is always more expensive than maintaining it. Our routine maintenance services keep components from failing unexpectedly on South Texas roads. We inspect wearable items—including serpentine belts, radiator hoses, suspension ball joints, and exhaust systems—giving you straightforward recommendations based on actual wear.",
    image: "/images/workshop-01.webp",
    whatItCovers: [
      "Serpentine accessory drive belt and tensioner replacement",
      "Cooling system flush, radiator cap test, and hose replacement",
      "Steering tie rods, ball joints, and suspension bushing inspection",
      "Exhaust system inspection for leaks, cracks, and hanger damage",
      "Differential and transfer case fluid level and condition checks",
      "Complete multi-point vehicle safety and maintenance inspection"
    ],
    commonSymptoms: [
      "Vehicle approaching major mileage intervals (30k, 60k, 90k, 100k+ miles)",
      "Squealing or chirping noise from under the hood during acceleration",
      "Clunking or loose handling over road bumps and bridge seams",
      "Visible cracked or swollen radiator hoses under the hood",
      "Preparing a vehicle for summer towing or long-distance travel"
    ],
    processSteps: [
      { step: "01", title: "Multi-Point Inspection", desc: "Systematic check of belts, hoses, fluids, suspension, and brakes." },
      { step: "02", title: "Wear Measurements", desc: "Measuring belt rib wear, fluid moisture, and suspension play." },
      { step: "03", title: "Scheduled Service", desc: "Replacing worn maintenance items before they cause on-road breakdowns." },
      { step: "04", title: "Status Review", desc: "Providing an honest summary of current vehicle condition and upcoming needs." }
    ],
    faqs: [
      {
        question: "Why should serpentine belts be replaced before they snap?",
        answer: "A snapped serpentine belt immediately halts the water pump, alternator, and power steering, causing sudden engine overheating and battery failure within minutes."
      },
      {
        question: "Do you inspect work trucks before road trips or job assignments?",
        answer: "Yes. Bring your truck in for a multi-point inspection and we will verify cooling, brakes, steering, and fluid conditions."
      }
    ],
    relatedSlugs: ["oil-change", "brake-repair", "fleet-service"]
  },
  {
    id: "fleet-service",
    slug: "fleet-service",
    title: "Fleet Repair & Maintenance",
    category: "Fleet Services",
    heroTagline: "Keeping your company trucks and commercial vehicles working.",
    shortDesc: "Scheduled preventive maintenance programs, priority repair dispatch, and heavy-duty mechanical services for commercial fleets.",
    fullDesc: "When a commercial truck is parked in a bay, your company is losing money. South Texas Diesel And Automotive Services LLC partners with local businesses, contractors, and service companies in Corpus Christi to maintain their fleets. We handle routine oil and brake intervals, provide rapid diagnostic turnarounds, and repair diesel drivetrains to minimize business downtime.",
    image: "/images/diesel-01.webp",
    whatItCovers: [
      "Scheduled preventive maintenance intervals for company trucks & vans",
      "Priority diagnostic triage for commercial vehicles with active faults",
      "Commercial diesel engine and transmission repairs",
      "Brake inspections, rotor replacements, and air/hydraulic line service",
      "Suspension, steering linkage, and heavy payload component repairs",
      "Detailed repair documentation for company vehicle records"
    ],
    commonSymptoms: [
      "Fleet vehicles overdue for scheduled manufacturer service intervals",
      "Recurring check engine lights or performance loss reported by drivers",
      "Brake noise, worn pads, or uneven tire wear caught on pre-trip inspections",
      "Unplanned commercial vehicle downtime disrupting delivery and job schedules"
    ],
    processSteps: [
      { step: "01", title: "Fleet Triage", desc: "Expedited check-in and computer scan to identify the immediate concern." },
      { step: "02", title: "Direct Communication", desc: "Contacting the fleet manager with a clear repair estimate and completion window." },
      { step: "03", title: "Heavy-Duty Repair", desc: "Completing service with commercial-grade components and certified torques." },
      { step: "04", title: "Back in Service", desc: "Verifying road-worthiness and returning the vehicle to revenue-producing duty." }
    ],
    faqs: [
      {
        question: "Can our company set up recurring maintenance for multiple vehicles?",
        answer: "Yes. We work directly with fleet coordinators to schedule staggered routine maintenance, oil changes, and inspections that fit your job schedules."
      },
      {
        question: "What types of commercial vehicles do you service?",
        answer: "We service light, medium, and heavy-duty work trucks, service vans, utility bodies, flatbeds, and diesel commercial platforms."
      }
    ],
    relatedSlugs: ["diesel-repair", "brake-repair", "maintenance"]
  }
];

export const WORKSHOP_GALLERY_IMAGES = [
  {
    src: "/images/diesel-01.webp",
    title: "Heavy-Duty Diesel Platform Service",
    category: "Diesel Repair",
    alt: "Diesel engine bay service in Corpus Christi workshop"
  },
  {
    src: "/images/diagnostics.webp",
    title: "Computerized Powertrain Diagnostics",
    category: "Engine & Electronics",
    alt: "Technician analyzing live diagnostic telemetry"
  },
  {
    src: "/images/engine.webp",
    title: "Engine Mechanical & Timing Repair",
    category: "Engine Systems",
    alt: "Engine rebuild and mechanical service"
  },
  {
    src: "/images/brakes.webp",
    title: "Heavy-Duty Brake & Rotor Servicing",
    category: "Brake Systems",
    alt: "Vehicle on lift for brake pad and rotor replacement"
  },
  {
    src: "/images/workshop-01.webp",
    title: "Automotive Service Bays & Vehicle Lifts",
    category: "Workshop Facility",
    alt: "South Texas Diesel and Automotive service bays on Apollo Rd"
  },
  {
    src: "/images/workshop-02.webp",
    title: "Drivetrain & Transmission Inspection",
    category: "Transmission & Drivetrain",
    alt: "Drivetrain inspection and component servicing"
  }
];

export const GOOGLE_REVIEWS_LIST = [
  {
    quote: "Very professional shop. Clear communication from start to finish, clean diagnostics, and honest pricing. Hard to find shops this dependable for diesel work.",
    reviewerType: "Local Diesel Truck Owner",
    rating: 5,
    date: "Google Verified Review",
    service: "Diesel Repair & Diagnostics"
  },
  {
    quote: "Top-notch automotive and diesel service in Corpus Christi. They diagnosed the issue accurately and got my truck back on the road fast without any runaround.",
    reviewerType: "Work Truck Operator",
    rating: 5,
    date: "Google Verified Review",
    service: "Vehicle Diagnostics"
  },
  {
    quote: "They took care of our work vehicle brakes and electrical issues quickly. Reliable turnaround and great attention to detail. 4.9 stars is well deserved.",
    reviewerType: "Commercial Fleet Customer",
    rating: 5,
    date: "Google Verified Review",
    service: "Fleet Brakes & Electrical"
  },
  {
    quote: "Fixed my check engine light and A/C before the summer heat. Excellent experience and friendly, straight-talking team. Highly recommended in Corpus Christi.",
    reviewerType: "Corpus Christi Resident",
    rating: 5,
    date: "Google Verified Review",
    service: "A/C & Check Engine Light"
  }
];
