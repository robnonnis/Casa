import { useState } from “react”;

const FontLink = () => (

  <link
    href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@200;300;400;500&display=swap"
    rel="stylesheet"
  />
);

const PHOTOS = {
ingresso: “https://res.cloudinary.com/dovpg47yh/image/upload/v1774465441/Ingresso_nzulvw.png”,
ingressoInterno: “https://res.cloudinary.com/dovpg47yh/image/upload/v1774465439/ingresso_interno_apcpa5.jpg”,
camera: “https://res.cloudinary.com/dovpg47yh/image/upload/v1774465440/Camera_da_letto_hzo0zi.jpg”,
affresco: “https://res.cloudinary.com/dovpg47yh/image/upload/v1774465440/dipinto_soffito_camera_da_letto_ltkan4.jpg”,
cucina: “https://res.cloudinary.com/dovpg47yh/image/upload/v1774465440/Cucina_utkobi.jpg”,
cucinaSoggiorno: “https://res.cloudinary.com/dovpg47yh/image/upload/v1774465440/cucina_soggiorno_berr0o.jpg”,
bagno1: “https://res.cloudinary.com/dovpg47yh/image/upload/v1774465439/Bagno_1_tcwbqy.jpg”,
bagno2: “https://res.cloudinary.com/dovpg47yh/image/upload/v1774465440/Bagno_2_j3p9xa.jpg”,
veranda: “https://res.cloudinary.com/dovpg47yh/image/upload/v1774465440/veranda_g1vth0.png”,
verandaCartile: “https://res.cloudinary.com/dovpg47yh/image/upload/v1774465440/cartile_veranda_cpc6ji.jpg”,
};

// ── TRANSLATIONS ──────────────────────────────
const T = {
it: {
tagline: “Uta · Cagliari · Sardegna”,
address: “Casa Uta — Via Cimitero 38”,
exploreLabel: “Esplora la guida”,
nav: [“Benvenuto”,“Check-in / out”,“Wi-Fi”,“L’appartamento”,“Regole casa”,“Come arrivare”,“Dintorni”,“Ristoranti”,“Eventi”,“Recensioni”,“Spesa”,“FAQ”],
home: “Home”,
affrescoTitle: “🎨 Affreschi originali anni ‘50”,
affrescoText: “I soffitti sono affrescati a mano da artigiani sardi. Un patrimonio artistico unico che rende Casa Uta davvero speciale.”,
// Benvenuto
benvenutoPgTitle: “Benvenuti a Casa Uta”,
benvenutoTitle: “Siamo felici di ospitarvi”,
benvenutoText: “Questa guida vi aiuterà a vivere al meglio il soggiorno. Per qualsiasi necessità non esitate a contattarci.”,
orari: “Orari”, checkin: “Check-in”, checkout: “Check-out”,
checkinVal: “dalle 15:00”, checkoutVal: “entro 10:30”,
contatti: “Contatti”,
whatsappBtn: “Scrivi su WhatsApp”,
// Checkin
arrivo: “🕒 Arrivo”, partenza: “🚪 Partenza”, indirizzo: “Indirizzo”,
checkinR1: <span>Check-in disponibile <strong>dalle ore 15:00</strong></span>,
checkinR2: “Vi accoglieremo personalmente o con self check-in”,
checkinR3: “Parcheggio libero in strada, facile disponibilità”,
checkoutR1: <span>Check-out <strong>entro le ore 10:30</strong></span>,
checkoutR2: “Lasciate le chiavi sul tavolo in cucina”,
checkoutR3: “Seguire le istruzioni raccolta differenziata (vedi FAQ)”,
openMaps: “Apri in Google Maps”,
mezzi: “🚌 Mezzi pubblici”,
arstnote: “Prima 05:40 · Ultima ~22:00”,
trenonote: “06:27–20:53 · ~22 min per Cagliari”,
// Wifi
wifiTitle: “Fibra ottica — disponibile ovunque”,
wifiDesc: “Copertura in tutto l’appartamento e in veranda.”,
wifiName: “Nome rete”, wifiPass: “Password”,
wifiAsk: “⚠️ Chiedete la password all’arrivo”,
wifiProblem: “Problemi di connessione?”,
wifiProblemText: “Spegnete e riaccendete il router (armadio nel corridoio). Se il problema persiste, contattateci.”,
// Appartamento
appTitle: “L’Appartamento”, appSub: “50 m² interno + 40 m² veranda”,
panoramica: “📐 Panoramica”,
interno: “Interno”, verandaLbl: “Veranda coperta”, giardino: “Giardinetto privato”,
rooms: [
{ icon:“🍳”, name:“Cucina e soggiorno”, items:[“Piano cottura a induzione”,“Forno elettrico”,“Lavastoviglie”,“Frigorifero”,“Cappa aspirante”,“Climatizzatore Wi-Fi”,“Tavolo allungabile + 4 sedie”,“Divano letto 3 posti”,“Vetrata su veranda”,“Soffitto affrescato (rosa)”] },
{ icon:“🛏”, name:“Camera da letto”, items:[“Letto matrimoniale con contenitore”,“Armadio ~4 metri”,“Settimino”,“Comodini con applique”,“Condizionatore Wi-Fi”,“Soffitto affrescato (geometrico oro)”] },
{ icon:“🚿”, name:“Bagno”, items:[“Box doccia 80×100 cm”,“Colonna doccia con massaggio”,“Mobile lavandino con cassettoni”,“Specchio con illuminazione LED”,“Ventilazione automatica”] },
{ icon:“🌿”, name:“Veranda e giardino”, items:[“Veranda coperta ~40 m²”,“Accesso diretto dalla vetrata scorrevole”,“Giardinetto privato”,“Ideale per colazioni all’aperto”] },
],
tags: [“Wi-Fi fibra”,“2 Climatizzatori”,“Parcheggio libero”,“Giardino privato”,“Lavastoviglie”,“Forno”],
// Regole
regoleTitle: “Regole casa”,
generali: “📋 Generali”, pulizia: “🧹 Pulizia e cura”, sicurezza: “🔒 Sicurezza”,
regole: [
<span>Check-in dalle <strong>15:00</strong> — Check-out entro <strong>10:30</strong></span>,
“Non sono ammessi animali domestici”,“Vietato fumare all’interno”,
<span>Silenzio dalle <strong>22:30</strong> alle <strong>08:00</strong></span>,
“Numero massimo ospiti come da prenotazione”,
],
pulizia_rules: [“Lasciare la casa in ordine alla partenza”,“Differenziare i rifiuti (istruzioni in FAQ)”,“Segnalare eventuali danni prima del check-out”],
sicurezza_rules: [“Chiudere sempre a chiave uscendo”,“Non lasciare rubinetti aperti o fornelli accesi”, <span>Emergenze: <strong>112</strong></span>],
// Posizione
posizioneTitle: “Come arrivare”,
distanze: “🚗 In auto — distanze”,
// Dintorni
dintorniTitle: “I dintorni”,
posizioneStrategica: “Posizione strategica”,
dintorniDesc: “Nel raggio di 300 metri trovate tutto il necessario: supermercati, farmacia, bar e ristoranti.”,
salute: “💊 Salute”, spesaLbl: “🛒 Spesa”, esplora: “🌳 Da esplorare”, servizi: “🏛️ Altri servizi”,
// Ristoranti
ristorantiTitle: “Dove mangiare”,
aUta: “🏠 A Uta — a piedi”, bar: “☕ Bar”, circondario: “🚗 Circondario — 10/20 min”, pesce: “🐟 Cagliari — pesce fresco ~20 min”,
ristorantiTip: “💡 Consiglio: prenotate sempre nel weekend.\nDa provare: fregola, malloreddus, porceddu.”,
// Eventi
eventiTitle: “Feste ed eventi”,
tradizioni: “Tradizioni del Sud Sardegna”,
tradizioniDesc: “Feste religiose e manifestazioni culturali tra le più importanti dell’isola.”,
eventiTip: “💡 Se il soggiorno coincide con la Festa di Santa Maria (5–9 sett.) o con Sant’Efisio siete fortunatissimi!”,
// Recensioni
recensioniTitle: “Le vostre recensioni”,
recensioniHL: “La vostra opinione conta”,
recensioniText: “Speriamo che il soggiorno sia stato di vostro gradimento. Una recensione su Google ci aiuta a far conoscere Casa Uta!”,
recensioniBtn: “⭐ Scrivi una recensione”,
recensioniSub: “Bastano 2 minuti e ci aiuti enormemente.\nGrazie di cuore! 🙏”,
cosaColpito: “Cosa ci ha colpito di più?”,
recensioniItems: [“La pulizia e la cura degli spazi”,“Gli affreschi originali degli anni ‘50”,“La posizione e i servizi vicini”,“La veranda e il giardinetto privato”,“La disponibilità dei proprietari”],
// Spesa
spesaTitle: “Fare la spesa”,
aUtaSpesa: “🏠 A Uta — a piedi”, circondarioSpesa: “🚗 Circondario — ~15 min”,
spesaTip: “💡 La COOP è la più completa. Il MD è ideale per rifornimenti con l’orario continuato.”,
// FAQ
faqTitle: “Domande frequenti”,
raccolta: “Raccolta differenziata”,
orarioEsp: “Orario esposizione:”,
orarioEspText: “entro le 6:00 o la sera prima dopo le 20:00.”,
calendarioPdf: “Calendario COSIR 2025–2026”,
clima: “❄️ Climatizzatori”,
climaText: “Controllabili via app Wi-Fi o telecomando. In camera il telecomando è nel cassetto del comodino.”,
emergenze: “🚨 Emergenze”,
aiuto: “Serve altro aiuto?”,
aiutoText: “Siamo sempre disponibili!”,
rifiuti: [
{n:“🟢 Umido”,g:“Lun/Mar/Gio/Ven”,s:“sacchetto marrone”},
{n:“🟡 Plastica”,g:“Lun e Mer”,s:“sacchetto giallo”},
{n:“🔵 Carta/cartone”,g:“Mar e Mer (alterne)”,s:“sacchetto blu”},
{n:“♻️ Vetro/alluminio”,g:“Mer (alterne) — senza busta”,s:“mastello”},
{n:“⚫ Secco”,g:“Mar e Sab”,s:“sacchetto nero”},
],
},
en: {
tagline: “Uta · Cagliari · Sardinia”,
address: “Casa Uta — Via Cimitero 38”,
exploreLabel: “Explore the guide”,
nav: [“Welcome”,“Check-in / out”,“Wi-Fi”,“The apartment”,“House rules”,“How to get here”,“Around us”,“Restaurants”,“Events”,“Reviews”,“Grocery”,“FAQ”],
home: “Home”,
affrescoTitle: “🎨 Original 1950s frescoes”,
affrescoText: “The ceilings are hand-painted by Sardinian craftsmen. A unique artistic heritage that makes Casa Uta truly special.”,
// Benvenuto
benvenutoPgTitle: “Welcome to Casa Uta”,
benvenutoTitle: “We’re glad to have you”,
benvenutoText: “This guide will help you make the most of your stay. Don’t hesitate to contact us for anything you need.”,
orari: “Hours”, checkin: “Check-in”, checkout: “Check-out”,
checkinVal: “from 3:00 PM”, checkoutVal: “by 10:30 AM”,
contatti: “Contacts”,
whatsappBtn: “Message on WhatsApp”,
// Checkin
arrivo: “🕒 Arrival”, partenza: “🚪 Departure”, indirizzo: “Address”,
checkinR1: <span>Check-in available <strong>from 3:00 PM</strong></span>,
checkinR2: “We’ll welcome you in person or with self check-in”,
checkinR3: “Free street parking, easy availability”,
checkoutR1: <span>Check-out <strong>by 10:30 AM</strong></span>,
checkoutR2: “Leave the keys on the kitchen table”,
checkoutR3: “Follow waste sorting instructions (see FAQ)”,
openMaps: “Open in Google Maps”,
mezzi: “🚌 Public transport”,
arstnote: “First 05:40 · Last ~22:00”,
trenonote: “06:27–20:53 · ~22 min to Cagliari”,
// Wifi
wifiTitle: “Fibre optic — available everywhere”,
wifiDesc: “Full coverage throughout the apartment and on the veranda.”,
wifiName: “Network name”, wifiPass: “Password”,
wifiAsk: “⚠️ Ask for the password on arrival”,
wifiProblem: “Connection problems?”,
wifiProblemText: “Turn the router off and on again (cabinet in the hallway). If the problem persists, contact us.”,
// Appartamento
appTitle: “The Apartment”, appSub: “50 m² interior + 40 m² veranda”,
panoramica: “📐 Overview”,
interno: “Interior”, verandaLbl: “Covered veranda”, giardino: “Private garden”,
rooms: [
{ icon:“🍳”, name:“Kitchen & living room”, items:[“Induction hob”,“Electric oven”,“Dishwasher”,“Refrigerator”,“Extractor hood”,“Wi-Fi air conditioning”,“Extendable table + 4 chairs”,“3-seat sofa bed”,“Glass door to veranda”,“Frescoed ceiling (pink)”] },
{ icon:“🛏”, name:“Bedroom”, items:[“Double bed with storage”,“~4m wardrobe”,“Chest of drawers”,“Bedside tables with wall lights”,“Wi-Fi air conditioning”,“Frescoed ceiling (geometric gold)”] },
{ icon:“🚿”, name:“Bathroom”, items:[“80×100 cm shower cubicle”,“Shower column with massage”,“Vanity unit with drawers”,“LED mirror”,“Automatic ventilation”] },
{ icon:“🌿”, name:“Veranda & garden”, items:[“Covered veranda ~40 m²”,“Direct access via sliding glass door”,“Private garden”,“Perfect for breakfast outside”] },
],
tags: [“Fibre Wi-Fi”,“2 Air conditioners”,“Free parking”,“Private garden”,“Dishwasher”,“Oven”],
// Regole
regoleTitle: “House rules”,
generali: “📋 General”, pulizia: “🧹 Cleanliness”, sicurezza: “🔒 Safety”,
regole: [
<span>Check-in from <strong>3:00 PM</strong> — Check-out by <strong>10:30 AM</strong></span>,
“No pets allowed”,“No smoking indoors”,
<span>Quiet hours from <strong>10:30 PM</strong> to <strong>8:00 AM</strong></span>,
“Maximum number of guests as per booking”,
],
pulizia_rules: [“Leave the house tidy on departure”,“Sort waste (instructions in FAQ)”,“Report any damage before check-out”],
sicurezza_rules: [“Always lock the door when leaving”,“Do not leave taps running or hobs on”, <span>Emergencies: <strong>112</strong></span>],
// Posizione
posizioneTitle: “How to get here”,
distanze: “🚗 By car — distances”,
// Dintorni
dintorniTitle: “Around us”,
posizioneStrategica: “Strategic location”,
dintorniDesc: “Within 300 metres you’ll find everything you need: supermarkets, pharmacy, bars and restaurants.”,
salute: “💊 Health”, spesaLbl: “🛒 Grocery”, esplora: “🌳 Explore”, servizi: “🏛️ Other services”,
// Ristoranti
ristorantiTitle: “Where to eat”,
aUta: “🏠 In Uta — walking distance”, bar: “☕ Cafés”, circondario: “🚗 Nearby — 10/20 min”, pesce: “🐟 Cagliari — fresh fish ~20 min”,
ristorantiTip: “💡 Tip: always book ahead at weekends.\nMust try: fregola, malloreddus, porceddu.”,
// Eventi
eventiTitle: “Festivals & events”,
tradizioni: “Traditions of Southern Sardinia”,
tradizioniDesc: “Religious festivals and cultural events among the most important on the island.”,
eventiTip: “💡 If your stay coincides with the Feast of Santa Maria (5–9 Sept.) or Sant’Efisio you’re very lucky!”,
// Recensioni
recensioniTitle: “Your reviews”,
recensioniHL: “Your opinion matters”,
recensioniText: “We hope you enjoyed your stay. A Google review helps spread the word about Casa Uta!”,
recensioniBtn: “⭐ Write a review”,
recensioniSub: “Just 2 minutes and you help us enormously.\nThank you so much! 🙏”,
cosaColpito: “What stood out most?”,
recensioniItems: [“Cleanliness and attention to detail”,“The original 1950s frescoes”,“Location and nearby amenities”,“The veranda and private garden”,“The hosts’ helpfulness”],
// Spesa
spesaTitle: “Grocery shopping”,
aUtaSpesa: “🏠 In Uta — walking distance”, circondarioSpesa: “🚗 Nearby — ~15 min”,
spesaTip: “💡 COOP is the most complete. MD is ideal for restocking with its continuous opening hours.”,
// FAQ
faqTitle: “Frequently asked questions”,
raccolta: “Waste sorting”,
orarioEsp: “Collection time:”,
orarioEspText: “by 6:00 AM or the evening before after 8:00 PM.”,
calendarioPdf: “COSIR Calendar 2025–2026”,
clima: “❄️ Air conditioning”,
climaText: “Controllable via Wi-Fi app or remote control. In the bedroom the remote is in the bedside drawer.”,
emergenze: “🚨 Emergencies”,
aiuto: “Need more help?”,
aiutoText: “We’re always available!”,
rifiuti: [
{n:“🟢 Organic”,g:“Mon/Tue/Thu/Fri”,s:“brown bag”},
{n:“🟡 Plastic”,g:“Mon & Wed”,s:“yellow bag”},
{n:“🔵 Paper/cardboard”,g:“Tue & Wed (alt.)”,s:“blue bag”},
{n:“♻️ Glass/aluminium”,g:“Wed (alt.) — no bag”,s:“bin”},
{n:“⚫ General”,g:“Tue & Sat”,s:“black bag”},
],
},
};

const c = {
cream: “#f5f0e8”, sand: “#e2d5c3”, terra: “#b8673f”,
terraL: “#d4845f”, dark: “#1e1810”, muted: “#8a7b6e”,
white: “#faf7f2”, green: “#4a6741”, whatsapp: “#25D366”,
};

const s = {
app: { minHeight:“100vh”, fontFamily:”‘Jost’, sans-serif”, fontWeight:300, color:c.dark, background:c.cream, maxWidth:480, margin:“0 auto” },
hero: { background:c.dark, textAlign:“center”, borderRadius:“0 0 28px 28px”, position:“relative”, overflow:“hidden” },
heroImg: { width:“100%”, height:260, objectFit:“cover”, display:“block”, opacity:0.65 },
heroOverlay: { position:“absolute”, top:0, left:0, right:0, bottom:0, background:`linear-gradient(to bottom, rgba(30,24,16,0.2) 0%, rgba(30,24,16,0.88) 100%)` },
heroContent: { position:“absolute”, bottom:0, left:0, right:0, padding:“0 24px 36px” },
heroTitle: { fontFamily:”‘Cormorant Garamond’, Georgia, serif”, fontWeight:300, fontSize:58, lineHeight:1.0, color:c.cream, margin:0, letterSpacing:1 },
eye: { fontSize:9, letterSpacing:“5px”, textTransform:“uppercase”, color:c.terra, fontWeight:600, marginBottom:12 },
sectionLabel: { fontSize:9, letterSpacing:“4px”, textTransform:“uppercase”, color:c.muted, margin:“24px 0 16px”, textAlign:“center” },
grid: { display:“grid”, gridTemplateColumns:“repeat(3,1fr)”, gap:12, padding:“0 20px”, maxWidth:400, margin:“0 auto” },
card: { background:c.white, borderRadius:20, padding:“22px 8px 16px”, display:“flex”, flexDirection:“column”, alignItems:“center”, gap:8, cursor:“pointer”, border:`1px solid ${c.terra}20` },
cardLabel: { fontSize:8.5, letterSpacing:“1.5px”, textTransform:“uppercase”, textAlign:“center”, fontWeight:500, color:c.dark, lineHeight:1.4 },
pageHead: { background:c.dark, padding:“50px 24px 28px”, borderRadius:“0 0 24px 24px” },
pageTitle: { fontFamily:”‘Cormorant Garamond’, Georgia, serif”, fontWeight:300, fontSize:38, color:c.cream, lineHeight:1.1, margin:0 },
back: { display:“flex”, alignItems:“center”, gap:6, background:“none”, border:“none”, color:“rgba(245,240,232,0.6)”, fontSize:10, letterSpacing:“2px”, textTransform:“uppercase”, cursor:“pointer”, marginBottom:18, padding:0, fontFamily:”‘Jost’, sans-serif” },
content: { padding:“24px 20px 60px” },
infoCard: { background:c.white, borderRadius:18, padding:“20px 18px”, marginBottom:12, border:`1px solid ${c.terra}15` },
cardTitle: { fontFamily:”‘Cormorant Garamond’, Georgia, serif”, fontSize:21, fontWeight:400, marginBottom:10, display:“flex”, alignItems:“center”, gap:8 },
row: { display:“flex”, alignItems:“center”, justifyContent:“space-between”, padding:“11px 0”, borderBottom:`1px solid ${c.sand}` },
rowLast: { display:“flex”, alignItems:“center”, justifyContent:“space-between”, padding:“11px 0” },
rowLabel: { fontSize:13.5, color:c.dark },
rowValue: { fontFamily:”‘Cormorant Garamond’, Georgia, serif”, fontSize:16, color:c.terra },
rule: { display:“flex”, gap:12, padding:“11px 0”, borderBottom:`1px solid ${c.sand}`, fontSize:13.5, lineHeight:1.5, alignItems:“flex-start” },
ruleLast: { display:“flex”, gap:12, padding:“11px 0”, fontSize:13.5, lineHeight:1.5, alignItems:“flex-start” },
dot: { width:6, height:6, borderRadius:“50%”, background:c.terra, flexShrink:0, marginTop:6 },
hlBox: { background:`linear-gradient(135deg, ${c.terra}, ${c.terraL})`, borderRadius:18, padding:“20px 18px”, color:“white”, marginBottom:12 },
hlTitle: { fontFamily:”‘Cormorant Garamond’, Georgia, serif”, fontSize:22, fontWeight:300, marginBottom:8 },
darkBox: { background:c.dark, borderRadius:14, padding:“16px 18px”, marginBottom:12 },
mapBtn: { display:“flex”, alignItems:“center”, gap:10, background:c.green, color:“white”, borderRadius:14, padding:“14px 16px”, textDecoration:“none”, fontSize:13, marginTop:10 },
waBtn: { display:“flex”, alignItems:“center”, gap:10, background:c.whatsapp, color:“white”, borderRadius:14, padding:“14px 16px”, textDecoration:“none”, fontSize:13, marginTop:8 },
pdfBtn: { display:“flex”, alignItems:“center”, gap:10, background:c.terra, color:“white”, borderRadius:14, padding:“14px 16px”, textDecoration:“none”, fontSize:13, marginTop:10, cursor:“pointer”, border:“none”, width:“100%”, justifyContent:“flex-start” },
tel: { display:“flex”, alignItems:“center”, justifyContent:“space-between”, padding:“12px 0”, borderBottom:`1px solid ${c.sand}`, textDecoration:“none” },
telLast: { display:“flex”, alignItems:“center”, justifyContent:“space-between”, padding:“12px 0”, textDecoration:“none” },
wifiBox: { background:c.dark, borderRadius:14, padding:18, textAlign:“center”, marginTop:10 },
tag: { background:c.sand, borderRadius:20, padding:“5px 13px”, fontSize:11, color:c.dark },
tagA: { background:c.terra, borderRadius:20, padding:“5px 13px”, fontSize:11, color:“white” },
affrescoCard: { background:c.dark, borderRadius:18, overflow:“hidden”, marginBottom:12 },
affrescoText: { padding:“16px 18px” },
langSwitch: { position:“absolute”, top:14, right:14, display:“flex”, gap:6, zIndex:10 },
langBtn: { background:“rgba(255,255,255,0.15)”, border:“1px solid rgba(255,255,255,0.2)”, borderRadius:8, padding:“4px 8px”, fontSize:16, cursor:“pointer”, lineHeight:1 },
langBtnActive: { background:“rgba(255,255,255,0.35)”, border:“1px solid rgba(255,255,255,0.5)”, borderRadius:8, padding:“4px 8px”, fontSize:16, cursor:“pointer”, lineHeight:1 },
};

const Ic = {
back: ()=><svg viewBox=“0 0 24 24” style={{width:16,height:16,stroke:“currentColor”,fill:“none”,strokeWidth:1.5}}><polyline points="15 18 9 12 15 6"/></svg>,
home: ()=><svg viewBox=“0 0 24 24” style={{width:28,height:28,stroke:c.dark,fill:“none”,strokeWidth:1.3}}><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg>,
lock: ()=><svg viewBox=“0 0 24 24” style={{width:28,height:28,stroke:c.dark,fill:“none”,strokeWidth:1.3}}><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>,
wifi: ()=><svg viewBox=“0 0 24 24” style={{width:28,height:28,stroke:c.dark,fill:“none”,strokeWidth:1.3}}><path d="M5 12.55a11 11 0 0114.08 0"/><path d="M1.42 9a16 16 0 0121.16 0"/><path d="M8.53 16.11a6 6 0 016.95 0"/><circle cx="12" cy="20" r="1" fill={c.dark}/></svg>,
building: ()=><svg viewBox=“0 0 24 24” style={{width:28,height:28,stroke:c.dark,fill:“none”,strokeWidth:1.3}}><rect x="2" y="7" width="20" height="15" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>,
check: ()=><svg viewBox=“0 0 24 24” style={{width:28,height:28,stroke:c.dark,fill:“none”,strokeWidth:1.3}}><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>,
pin: ()=><svg viewBox=“0 0 24 24” style={{width:28,height:28,stroke:c.dark,fill:“none”,strokeWidth:1.3}}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
grid: ()=><svg viewBox=“0 0 24 24” style={{width:28,height:28,stroke:c.dark,fill:“none”,strokeWidth:1.3}}><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
coffee: ()=><svg viewBox=“0 0 24 24” style={{width:28,height:28,stroke:c.dark,fill:“none”,strokeWidth:1.3}}><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>,
cal: ()=><svg viewBox=“0 0 24 24” style={{width:28,height:28,stroke:c.dark,fill:“none”,strokeWidth:1.3}}><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
star: ()=><svg viewBox=“0 0 24 24” style={{width:28,height:28,stroke:c.dark,fill:“none”,strokeWidth:1.3}}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
bag: ()=><svg viewBox=“0 0 24 24” style={{width:28,height:28,stroke:c.dark,fill:“none”,strokeWidth:1.3}}><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>,
faq: ()=><svg viewBox=“0 0 24 24” style={{width:28,height:28,stroke:c.dark,fill:“none”,strokeWidth:1.3}}><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="2" strokeLinecap="round"/></svg>,
mapW: ()=><svg viewBox=“0 0 24 24” style={{width:20,height:20,stroke:“white”,fill:“none”,strokeWidth:1.5}}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
docW: ()=><svg viewBox=“0 0 24 24” style={{width:20,height:20,stroke:“white”,fill:“none”,strokeWidth:1.5}}><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
phone: ()=><svg viewBox=“0 0 24 24” style={{width:18,height:18,stroke:c.terra,fill:“none”,strokeWidth:1.5}}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.22 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.06 6.06l1.07-1.07a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
trash: ()=><svg viewBox=“0 0 24 24” style={{width:18,height:18,stroke:c.terra,fill:“none”,strokeWidth:1.5}}><path d="M3 6h18"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg>,
wa: ()=><svg viewBox=“0 0 24 24” style={{width:20,height:20,fill:“white”}}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
};

function Row({l,v,link,last}) {
const st = last ? s.rowLast : s.row;
if (link) return <a href={link} target=”_blank” rel=“noreferrer” style={{…st, textDecoration:“none”}}><span style={s.rowLabel}>{l}</span><span style={{...s.rowValue}}>{v} ›</span></a>;
return <div style={st}><span style={s.rowLabel}>{l}</span><span style={s.rowValue}>{v}</span></div>;
}

function Rule({t, last}) {
return <div style={last ? s.ruleLast : s.rule}><div style={s.dot}/><span>{t}</span></div>;
}

function Card({children, style}) {
return <div style={{...s.infoCard,...style}}>{children}</div>;
}

function CT({icon,text}) {
return <div style={s.cardTitle}>{icon&&<span style={{flexShrink:0}}>{icon}</span>}{text}</div>;
}

function LangSwitch({lang, setLang}) {
return (
<div style={s.langSwitch}>
<button style={lang===“it” ? s.langBtnActive : s.langBtn} onClick={()=>setLang(“it”)}>🇮🇹</button>
<button style={lang===“en” ? s.langBtnActive : s.langBtn} onClick={()=>setLang(“en”)}>🇬🇧</button>
</div>
);
}

function AffrescoCard({t}) {
return (
<div style={s.affrescoCard}>
<img src={PHOTOS.affresco} alt=“Affresco originale anni 50” style={{width:“100%”, height:200, objectFit:“cover”, display:“block”}} />
<div style={s.affrescoText}>
<div style={{fontFamily:”‘Cormorant Garamond’, Georgia, serif”, fontSize:20, color:c.sand, fontWeight:400, marginBottom:6}}>{t.affrescoTitle}</div>
<p style={{fontSize:13, color:“rgba(245,240,232,0.8)”, lineHeight:1.7, margin:0}}>{t.affrescoText}</p>
</div>
</div>
);
}

function ContactButtons({t}) {
return (
<Card>
<CT icon={<Ic.phone/>} text={t.contatti}/>
<a href="tel:+393284699520" style={s.tel}><span style={{fontSize:13.5,color:c.dark}}>📱 Alessandro</span><span style={{fontFamily:“Georgia,serif”,fontSize:16,color:c.terra}}>328 469 9520</span></a>
<a href="tel:+393473208852" style={s.telLast}><span style={{fontSize:13.5,color:c.dark}}>📱 Roberta</span><span style={{fontFamily:“Georgia,serif”,fontSize:16,color:c.terra}}>347 320 8852</span></a>
<a href="https://wa.me/393284699520" target="_blank" rel="noreferrer" style={s.waBtn}><Ic.wa/> Alessandro — {t.whatsappBtn}</a>
<a href=“https://wa.me/393473208852” target=”_blank” rel=“noreferrer” style={{…s.waBtn, marginTop:6}}><Ic.wa/> Roberta — {t.whatsappBtn}</a>
</Card>
);
}

// ── HOME ──
function PH({go, lang, setLang}) {
const t = T[lang];
const icons = [<Ic.home/>,<Ic.lock/>,<Ic.wifi/>,<Ic.building/>,<Ic.check/>,<Ic.pin/>,<Ic.grid/>,<Ic.coffee/>,<Ic.cal/>,<Ic.star/>,<Ic.bag/>,<Ic.faq/>];
const ids = [“benvenuto”,“checkin”,“wifi”,“appartamento”,“regole”,“posizione”,“dintorni”,“ristoranti”,“eventi”,“recensioni”,“spesa”,“faq”];
return (
<div style={s.app}>
<FontLink/>
<div style={s.hero}>
<img src={PHOTOS.ingresso} alt="Ingresso Casa Uta" style={s.heroImg} />
<div style={s.heroOverlay}/>
<LangSwitch lang={lang} setLang={setLang}/>
<div style={s.heroContent}>
<div style={s.eye}>{t.tagline}</div>
<h1 style={s.heroTitle}>Ben<em style={{fontStyle:“italic”, color:c.sand}}>venuti</em></h1>
<div style={{fontSize:10, letterSpacing:“3.5px”, textTransform:“uppercase”, color:“rgba(245,240,232,0.5)”, marginTop:10, fontFamily:”‘Jost’, sans-serif”, fontWeight:200}}>{t.address}</div>
<div style={{width:32,height:1,background:c.terra,margin:“14px auto 0”}}/>
</div>
</div>
<div style={{padding:“24px 20px 0”}}><AffrescoCard t={t}/></div>
<div style={s.sectionLabel}>{t.exploreLabel}</div>
<div style={s.grid}>
{ids.map((id,i)=>(
<div key={id} style={s.card} onClick={()=>go(id)}>
{icons[i]}
<span style={s.cardLabel}>{t.nav[i]}</span>
</div>
))}
</div>
<div style={{height:32}}/>
</div>
);
}

function PageHead({title, sub, back, icon, lang, setLang}) {
return (
<>
<FontLink/>
<div style={{…s.pageHead, position:“relative”}}>
<LangSwitch lang={lang} setLang={setLang}/>
<button style={s.back} onClick={back}><Ic.back/> {T[lang].home}</button>
<div style={{marginBottom:8}}>{icon}</div>
<h2 style={s.pageTitle}>{title}</h2>
{sub && <div style={{fontSize:11,color:“rgba(245,240,232,0.5)”,marginTop:6,letterSpacing:“1px”,fontFamily:”‘Jost’,sans-serif”}}>{sub}</div>}
</div>
</>
);
}

function Benvenuto({go, lang, setLang}) {
const t = T[lang];
return <div style={s.app}>
<FontLink/>
<div style={s.hero}>
<img src={PHOTOS.ingressoInterno} alt="Ingresso interno Casa Uta" style={s.heroImg} />
<div style={s.heroOverlay}/>
<LangSwitch lang={lang} setLang={setLang}/>
<div style={s.heroContent}>
<button style={{…s.back, marginBottom:16}} onClick={()=>go(“home”)}><Ic.back/> {t.home}</button>
<h2 style={{…s.pageTitle, color:c.cream, margin:0}}>{t.benvenutoPgTitle}</h2>
</div>
</div>
<div style={s.content}>
<AffrescoCard t={t}/>
<div style={s.hlBox}>
<div style={s.hlTitle}>{t.benvenutoTitle}</div>
<p style={{fontSize:14,lineHeight:1.7,opacity:0.92,margin:0}}>{t.benvenutoText}</p>
</div>
<Card>
<CT icon={<Ic.lock/>} text={t.orari}/>
<Row l={t.checkin} v={t.checkinVal}/>
<Row l={t.checkout} v={t.checkoutVal} last/>
</Card>
<ContactButtons t={t}/>
</div>

  </div>;
}

function Checkin({go, lang, setLang}) {
const t = T[lang];
return <div style={s.app}>
<PageHead title={t.nav[1]} back={()=>go(“home”)} icon={<Ic.lock/>} lang={lang} setLang={setLang}/>
<div style={s.content}>
<Card><CT text={t.arrivo}/>
<Rule t={t.checkinR1}/><Rule t={t.checkinR2}/><Rule t={t.checkinR3} last/>
</Card>
<Card><CT text={t.partenza}/>
<Rule t={t.checkoutR1}/><Rule t={t.checkoutR2}/><Rule t={t.checkoutR3} last/>
</Card>
<Card><CT icon={<Ic.pin/>} text={t.indirizzo}/>
<p style={{fontFamily:“Georgia,serif”,fontSize:19,marginBottom:12}}>Via Cimitero 38<br/>Uta (CA) — Sardegna</p>
<a href="https://maps.google.com/?q=Via+Cimitero+38+Uta+Cagliari" target="_blank" rel="noreferrer" style={s.mapBtn}><Ic.mapW/> {t.openMaps}</a>
</Card>
<Card><CT text={t.mezzi}/>
<Row l="ARST 125 (Uta–Cagliari)" v="›" link="https://www.arst.sardegna.it/servizi-orari/"/>
<p style={{fontSize:11,color:c.muted,padding:“4px 0 10px”}}>{t.arstnote}</p>
<Row l="🚆 Uta-Villaspeciosa" v="›" link="https://www.trenitalia.com" last/>
<p style={{fontSize:11,color:c.muted,padding:“4px 0 0”}}>{t.trenonote}</p>
</Card>
</div>

  </div>;
}

function Wifi({go, lang, setLang}) {
const t = T[lang];
return <div style={s.app}>
<PageHead title={t.nav[2]} back={()=>go(“home”)} icon={<Ic.wifi/>} lang={lang} setLang={setLang}/>
<div style={s.content}>
<Card>
<CT icon={<Ic.wifi/>} text={t.wifiTitle}/>
<p style={{fontSize:14,lineHeight:1.75,color:c.muted,marginBottom:8}}>{t.wifiDesc}</p>
<div style={s.wifiBox}><div style={{fontSize:9,letterSpacing:“3px”,textTransform:“uppercase”,color:c.muted,marginBottom:6}}>{t.wifiName}</div><div style={{fontFamily:“Georgia,serif”,fontSize:26,color:c.cream,letterSpacing:2}}>CasaUta_Guest</div></div>
<div style={{...s.wifiBox,marginTop:10}}><div style={{fontSize:9,letterSpacing:“3px”,textTransform:“uppercase”,color:c.muted,marginBottom:6}}>{t.wifiPass}</div><div style={{fontFamily:“Georgia,serif”,fontSize:26,color:c.cream,letterSpacing:2}}>— — — — — —</div><div style={{fontSize:10,color:“rgba(245,240,232,0.4)”,marginTop:6}}>{t.wifiAsk}</div></div>
</Card>
<Card><CT text={t.wifiProblem}/><p style={{fontSize:14,lineHeight:1.75,color:c.muted,margin:0}}>{t.wifiProblemText}</p></Card>
</div>

  </div>;
}

function Appartamento({go, lang, setLang}) {
const t = T[lang];
const roomPhotos = [
[PHOTOS.cucinaSoggiorno, PHOTOS.cucina],
[PHOTOS.camera],
[PHOTOS.bagno1, PHOTOS.bagno2],
[PHOTOS.veranda, PHOTOS.verandaCartile],
];
return <div style={s.app}>
<PageHead title={t.appTitle} sub={t.appSub} back={()=>go(“home”)} icon={<Ic.building/>} lang={lang} setLang={setLang}/>
<div style={s.content}>
<Card>
<CT text={t.panoramica}/>
<Row l={t.interno} v="~50 m²"/>
<Row l={t.verandaLbl} v="~40 m²"/>
<Row l={t.giardino} v="✓"/>
<Row l="Wi-Fi" v="✓"/>
<Row l="Climatizzatori / AC" v="2 × Wi-Fi" last/>
</Card>
<AffrescoCard t={t}/>
{t.rooms.map(({icon,name,items},ri)=>(
<Card key={name} style={{padding:“0 0 16px”, overflow:“hidden”}}>
{roomPhotos[ri].length === 1
? <img src={roomPhotos[ri][0]} alt={name} style={{width:“100%”, height:200, objectFit:“cover”, display:“block”, marginBottom:16}} />
: <div style={{display:“grid”, gridTemplateColumns:“1fr 1fr”, gap:2, marginBottom:16}}>
{roomPhotos[ri].map((p,i)=><img key={i} src={p} alt={`${name} ${i+1}`} style={{width:“100%”, height:150, objectFit:“cover”, display:“block”}}/>)}
</div>
}
<div style={{padding:“0 18px”}}>
<CT text={`${icon} ${name}`}/>
{items.map((item,i)=><Rule key={i} t={item} last={i===items.length-1}/>)}
</div>
</Card>
))}
<div style={{display:“flex”,flexWrap:“wrap”,gap:8}}>
{t.tags.map((tag,i)=><span key={tag} style={i===0?s.tagA:s.tag}>{tag}</span>)}
</div>
</div>

  </div>;
}

function Regole({go, lang, setLang}) {
const t = T[lang];
return <div style={s.app}>
<PageHead title={t.regoleTitle} back={()=>go(“home”)} icon={<Ic.check/>} lang={lang} setLang={setLang}/>
<div style={s.content}>
<Card><CT text={t.generali}/>
{t.regole.map((r,i)=><Rule key={i} t={r} last={i===t.regole.length-1}/>)}
</Card>
<Card><CT text={t.pulizia}/>
{t.pulizia_rules.map((r,i)=><Rule key={i} t={r} last={i===t.pulizia_rules.length-1}/>)}
</Card>
<Card><CT text={t.sicurezza}/>
{t.sicurezza_rules.map((r,i)=><Rule key={i} t={r} last={i===t.sicurezza_rules.length-1}/>)}
</Card>
</div>

  </div>;
}

function Posizione({go, lang, setLang}) {
const t = T[lang];
return <div style={s.app}>
<PageHead title={t.posizioneTitle} back={()=>go(“home”)} icon={<Ic.pin/>} lang={lang} setLang={setLang}/>
<div style={s.content}>
<Card><CT icon={<Ic.pin/>} text={t.indirizzo}/>
<p style={{fontFamily:“Georgia,serif”,fontSize:19,marginBottom:12}}>Via Cimitero 38<br/>Uta (CA) — Sardegna</p>
<a href="https://maps.google.com/?q=Via+Cimitero+38+Uta+Cagliari" target="_blank" rel="noreferrer" style={s.mapBtn}><Ic.mapW/> {t.openMaps}</a>
</Card>
<Card><CT text={t.mezzi}/>
<Row l="ARST 125 (Uta–Cagliari)" v="›" link="https://www.arst.sardegna.it/servizi-orari/"/>
<p style={{fontSize:11,color:c.muted,padding:“2px 0 10px”}}>{t.arstnote}</p>
<Row l="🚆 Uta-Villaspeciosa" v="›" link="https://www.trenitalia.com" last/>
<p style={{fontSize:11,color:c.muted,padding:“2px 0 0”}}>{t.trenonote}</p>
</Card>
<Card><CT text={t.distanze}/>
<Row l="✈️ Aeroporto / Airport" v="~10 min" link="https://maps.google.com/?q=Aeroporto+Cagliari+Elmas"/>
<Row l="🏖️ Poetto" v="~15 min" link="https://maps.google.com/?q=Spiaggia+Poetto+Cagliari"/>
<Row l="🏙️ Cagliari centro" v="~20 min" link="https://maps.google.com/?q=Cagliari+centro+storico"/>
<Row l="🏭 Macchiareddu" v="~5 min" link="https://maps.google.com/?q=Macchiareddu+Uta"/>
<Row l="🦜 Oasi WWF Santa Gilla" v="~10 min" link="https://maps.google.com/?q=Oasi+WWF+Santa+Gilla"/>
<Row l="⛴️ Porto / Port" v="~20 min" link="https://maps.google.com/?q=Porto+di+Cagliari" last/>
</Card>
</div>

  </div>;
}

function Dintorni({go, lang, setLang}) {
const t = T[lang];
return <div style={s.app}>
<PageHead title={t.dintorniTitle} back={()=>go(“home”)} icon={<Ic.grid/>} lang={lang} setLang={setLang}/>
<div style={s.content}>
<div style={s.hlBox}><div style={s.hlTitle}>{t.posizioneStrategica}</div><p style={{fontSize:14,lineHeight:1.7,opacity:0.92,margin:0}}>{t.dintorniDesc}</p></div>
<Card><CT text={t.salute}/>
<Row l="Farmacia Schlich — Via Stazione 5" v="~300m ›" link="https://maps.google.com/?q=Farmacia+Schlich+Uta"/>
<Row l="Parafarmacia Bensaid ⭐5.0" v="›" link="https://maps.google.com/?q=Parafarmacia+Bensaid+Uta"/>
<Row l="La Parafarmacia ⭐4.6" v="›" link="https://maps.google.com/?q=La+Parafarmacia+Uta" last/>
</Card>
<Card><CT text={t.spesaLbl}/>
<Row l="🛒 COOP ⭐4.6" v="›" link="https://maps.google.com/?q=COOP+Via+Sa+Mura+Uta"/>
<Row l="🛒 ARD Discount ⭐4.5" v="›" link="https://maps.google.com/?q=ARD+Discount+Uta"/>
<Row l="🛒 MD ⭐4.5" v="›" link="https://maps.google.com/?q=MD+Supermercato+Uta" last/>
</Card>
<Card><CT text={t.esplora}/>
<Row l="🌳 Parco S'Ollivariu" v="~5 min ›" link="https://maps.google.com/?q=Parco+S+Ollivariu+Uta"/>
<Row l="⛪ Chiesa Santa Maria" v="~5 min ›" link="https://maps.google.com/?q=Chiesa+Santa+Maria+Uta"/>
<Row l="🦜 Oasi WWF Santa Gilla" v="~10 min ›" link="https://maps.google.com/?q=Oasi+WWF+Santa+Gilla"/>
<Row l="🏖️ Poetto" v="~15 min ›" link="https://maps.google.com/?q=Spiaggia+Poetto+Cagliari"/>
<Row l="🏙️ Cagliari centro" v="~20 min ›" link="https://maps.google.com/?q=Cagliari+centro+storico"/>
<Row l="⚽ Unipol Domus ⭐4.4" v="~25 min ›" link="https://maps.google.com/?q=Unipol+Domus+Cagliari"/>
<Row l="🏛️ Nora — sito romano" v="~25 min ›" link="https://maps.google.com/?q=Nora+sito+romano+Pula"/>
<Row l="🏖️ Santa Margherita di Pula ⭐4.4" v="~35 min ›" link="https://maps.google.com/?q=Santa+Margherita+Pula"/>
<Row l="🏖️ Chia ⭐4.8" v="~45 min ›" link="https://maps.google.com/?q=Spiaggia+Chia+Sardegna"/>
<Row l="🌊 Villasimius ⭐4.5" v="~1h ›" link="https://maps.google.com/?q=Villasimius+Sardegna"/>
<Row l="🪨 Masua & Pan di Zucchero ⭐4.8" v="~1h 10min ›" link="https://maps.google.com/?q=Masua+Pan+di+Zucchero" last/>
</Card>
<Card><CT text={t.servizi}/>
<Row l="🚬 Tabaccheria Coccinella ⭐4.9" v="›" link="https://maps.google.com/?q=Coccinella+Tabaccheria+Uta"/>
<Row l="🏦 ATM Banco di Sardegna" v="›" link="https://maps.google.com/?q=Banco+di+Sardegna+Uta"/>
<Row l="📮 ATM Poste Italiane" v="›" link="https://maps.google.com/search?q=Poste+Italiane+Uta"/>
<Row l="🏛️ Comune di Uta" v="›" link="https://maps.google.com/?q=Comune+di+Uta" last/>
</Card>
</div>

  </div>;
}

function Ristoranti({go, lang, setLang}) {
const t = T[lang];
return <div style={s.app}>
<PageHead title={t.ristorantiTitle} back={()=>go(“home”)} icon={<Ic.coffee/>} lang={lang} setLang={setLang}/>
<div style={s.content}>
<Card><CT text={t.aUta}/>
<Row l="🍔 Slim Pickins ⭐4.9" v="›" link="https://maps.google.com/?q=Slim+Pickins+Uta"/>
<Row l="🍺 U3 Birreria & Steakhouse ⭐4.8" v="›" link="https://maps.google.com/?q=U3+Birreria+Uta"/>
<Row l="🥩 El Miura ⭐4.6" v="›" link="https://maps.google.com/?q=El+Miura+Uta"/>
<Row l="🍽️ Da Caterina ⭐4.4" v="›" link="https://maps.google.com/?q=Ristorante+Da+Caterina+Uta"/>
<Row l="🍕 Sa Locanda di Gaia ⭐4.4" v="›" link="https://maps.google.com/?q=Pizzeria+Sa+Locanda+Di+Gaia+Uta" last/>
</Card>
<Card><CT text={t.bar}/>
<Row l="Check Mate Bar ⭐4.7" v="›" link="https://maps.google.com/?q=Checkmate+Bar+Uta"/>
<Row l="Caffè Roma" v="›" link="https://maps.google.com/search?q=Caffe+Roma+Uta"/>
<Row l="New Bar Mexico — Assemini ⭐4.7" v="~15 min ›" link="https://maps.google.com/?q=New+Bar+Mexico+Assemini" last/>
</Card>
<Card><CT text={t.circondario}/>
<Row l="⭐ Le Pizzi'ine di Niky ⭐4.9" v="~10 min ›" link="https://maps.google.com/?q=Le+Pizziine+di+Niky+Decimomannu"/>
<Row l="🐟 Ci Pensa Marco ⭐4.8" v="~10 min ›" link="https://maps.google.com/?q=Ci+Pensa+Marco+Decimomannu"/>
<Row l="🍺 Gasthaus ⭐4.6" v="~15 min ›" link="https://maps.google.com/?q=Gasthaus+Assemini"/>
<Row l="🍕 Malloci ⭐4.4" v="~15 min ›" link="https://maps.google.com/?q=Malloci+Assemini"/>
<Row l="🍱 Makito Poke & Sushi ⭐4.7" v="~15 min ›" link="https://maps.google.com/?q=Makito+Assemini"/>
<Row l="⭐ Lughènte Fine Dining ⭐4.9" v="~20 min ›" link="https://maps.google.com/?q=Lughente+Capoterra"/>
<Row l="🌊 Arcadia Restaurant ⭐4.5" v="~20 min ›" link="https://maps.google.com/?q=Arcadia+Restaurant+Capoterra" last/>
</Card>
<Card><CT text={t.pesce}/>
<Row l="🐠 Stella Marina di Montecristo ⭐4.6" v="›" link="https://maps.google.com/?q=Stella+Marina+di+Montecristo+Cagliari"/>
<Row l="🦐 Mari Mannu ⭐4.6" v="›" link="https://maps.google.com/?q=Mari+Mannu+Cagliari"/>
<Row l="🐟 Mondo & Luca ⭐4.6" v="›" link="https://maps.google.com/?q=Mondo+e+Luca+Cagliari" last/>
</Card>
<div style={{…s.darkBox,textAlign:“center”}}><p style={{fontSize:12,color:“rgba(245,240,232,0.7)”,lineHeight:1.8,margin:0}}>{t.ristorantiTip.split(”\n”).map((l,i)=><span key={i}>{i===1?<><br/><strong style={{color:c.sand}}>{l}</strong></>:l}</span>)}</p></div>
</div>

  </div>;
}

function Eventi({go, lang, setLang}) {
const t = T[lang];
const evs = [
{m:“Gennaio / January”,evs:[{d:“12 gennaio”,t:“🕯️ Festa di Santa Greca (Decimomannu)”}]},
{m:“Maggio / May”,evs:[
{d:“1–4 maggio”,t:“🎖️ Festa di Sant’Efisio (Cagliari)”,link:“https://www.festadisantefisio.com”},
{d:“14 maggio”,t:“🌸 Santa Giusta, patrona di Uta”},
{d:“Primo sabato / 1st Saturday”,t:“🌾 Sant’Isidoro (Uta)”},
]},
{m:“Agosto / August”,evs:[
{d:“13 agosto”,t:“⚔️ Corteo Storico Medievale (Iglesias)”},
{d:“15 agosto”,t:“🕯️ Assunzione B.V. Maria (Uta)”},
]},
{m:“Settembre / September”,evs:[
{d:“5–9 settembre”,t:“🌟 Festa di Santa Maria (Uta) ⭐”},
{d:“Fine sett. / Late Sept.”,t:“🎊 Festa di Santa Greca (Decimomannu)”},
]},
{m:“Novembre / November”,evs:[
{d:“3ª domenica / 3rd Sunday”,t:“🏃 Maratonina Città di Uta”,link:“https://maratoninadiuta.it”},
]},
{m:“Dicembre / December”,evs:[{d:“13 dicembre”,t:“🕯️ Santa Lucia (Uta)”}]},
];
return <div style={s.app}>
<PageHead title={t.eventiTitle} back={()=>go(“home”)} icon={<Ic.cal/>} lang={lang} setLang={setLang}/>
<div style={s.content}>
<div style={{…s.darkBox,display:“flex”,gap:14,alignItems:“flex-start”,marginBottom:12}}><span style={{fontSize:28}}>🎊</span><div><strong style={{display:“block”,fontFamily:“Georgia,serif”,fontSize:16,color:c.sand,fontWeight:400,marginBottom:4}}>{t.tradizioni}</strong><span style={{fontSize:13,color:“rgba(245,240,232,0.85)”}}>{t.tradizioniDesc}</span></div></div>
{evs.map(({m,evs:ee})=>(
<Card key={m}><CT text={m}/>
{ee.map((e,i)=>(
<div key={i} style={i===ee.length-1?s.ruleLast:s.rule}><div style={s.dot}/>
<span><strong>{e.d}</strong> — {e.link?<a href={e.link} target="_blank" rel="noreferrer" style={{color:c.terra}}>{e.t}</a>:e.t}</span>
</div>
))}
</Card>
))}
<div style={{…s.darkBox,textAlign:“center”}}><p style={{fontSize:12,color:“rgba(245,240,232,0.7)”,lineHeight:1.7,margin:0}}>{t.eventiTip}</p></div>
</div>

  </div>;
}

function Recensioni({go, lang, setLang}) {
const t = T[lang];
return <div style={s.app}>
<PageHead title={t.recensioniTitle} back={()=>go(“home”)} icon={<Ic.star/>} lang={lang} setLang={setLang}/>
<div style={s.content}>
<div style={s.hlBox}><div style={s.hlTitle}>{t.recensioniHL}</div><p style={{fontSize:14,lineHeight:1.7,opacity:0.92,margin:0}}>{t.recensioniText}</p></div>
<Card style={{textAlign:“center”,padding:“28px 18px”}}>
<div style={{fontSize:40,marginBottom:10}}>⭐⭐⭐⭐⭐</div>
<p style={{fontFamily:“Georgia,serif”,fontSize:20,marginBottom:8}}>{lang===“it”?“Lascia una recensione su Google”:“Leave a Google review”}</p>
<p style={{fontSize:13,color:c.muted,marginBottom:20,lineHeight:1.6}}>{t.recensioniSub.split(”\n”).map((l,i)=><span key={i}>{i>0?<><br/>{l}</>:l}</span>)}</p>
<a href="https://search.google.com/local/writereview?placeid=GOOGLE_PLACE_ID" target="_blank" rel="noreferrer" style={s.mapBtn}>{t.recensioniBtn}</a>
</Card>
<Card><CT text={t.cosaColpito}/>
{t.recensioniItems.map((r,i)=><Rule key={i} t={r} last={i===t.recensioniItems.length-1}/>)}
</Card>
</div>

  </div>;
}

function Spesa({go, lang, setLang}) {
const t = T[lang];
return <div style={s.app}>
<PageHead title={t.spesaTitle} back={()=>go(“home”)} icon={<Ic.bag/>} lang={lang} setLang={setLang}/>
<div style={s.content}>
<Card><CT text={t.aUtaSpesa}/>
<Row l="🛒 COOP ⭐4.6" v="›" link="https://maps.google.com/?q=COOP+Via+Sa+Mura+Uta"/>
<p style={{fontSize:11,color:c.muted,padding:“2px 0 8px”}}>Lun–Sab 8:00–13:00 / 17:00–20:00 · Dom 8:30–12:30</p>
<Row l="🛒 ARD Discount ⭐4.5" v="›" link="https://maps.google.com/?q=ARD+Discount+Uta"/>
<Row l="🛒 MD ⭐4.5" v="›" link="https://maps.google.com/?q=MD+Supermercato+Uta" last/>
<p style={{fontSize:11,color:c.muted,padding:“2px 0 0”}}>Lun–Dom 8:30–20:00</p>
</Card>
<Card><CT text={t.circondarioSpesa}/>
<Row l="🛒 Superpan — Assemini ⭐4.1" v="~15 min ›" link="https://maps.google.com/?q=Superpan+Assemini" last/>
<p style={{fontSize:11,color:c.muted,padding:“2px 0 0”}}>Lun–Sab 8:30–21:30 · Dom 8:30–14:00/16:30–21:00</p>
</Card>
<div style={s.darkBox}><p style={{fontSize:12,color:“rgba(245,240,232,0.7)”,lineHeight:1.7,margin:0}}>{t.spesaTip}</p></div>
</div>

  </div>;
}

function FAQ({go, lang, setLang}) {
const t = T[lang];
return <div style={s.app}>
<PageHead title={t.faqTitle} back={()=>go(“home”)} icon={<Ic.faq/>} lang={lang} setLang={setLang}/>
<div style={s.content}>
<Card><CT icon={<Ic.trash/>} text={t.raccolta}/>
<div style={{...s.darkBox,marginTop:4}}>
{t.rifiuti.map(({n,g,s:sc},i)=>(
<div key={n} style={{display:“flex”,justifyContent:“space-between”,alignItems:“center”,padding:“10px 0”,borderBottom:i<t.rifiuti.length-1?`1px solid rgba(255,255,255,0.1)`:“none”}}>
<div><div style={{fontSize:13,color:c.cream,fontWeight:400}}>{n}</div><div style={{fontSize:11,color:“rgba(245,240,232,0.55)”,marginTop:2}}>{g}</div></div>
<span style={{fontSize:11,color:c.terra,background:“rgba(184,103,63,0.2)”,borderRadius:8,padding:“3px 8px”}}>{sc}</span>
</div>
))}
</div>
<div style={{…s.darkBox,display:“flex”,gap:10,marginTop:10,marginBottom:0}}><span>⚠️</span><p style={{fontSize:12,color:“rgba(245,240,232,0.8)”,lineHeight:1.6,margin:0}}><strong style={{color:c.sand}}>{t.orarioEsp}</strong> {t.orarioEspText}</p></div>
<a href="https://mycity.s3.sbg.io.cloud.ovh.net/4457468/20250311-Calendario-Uta-Domestiche.pdf" target="_blank" rel="noreferrer" style={s.pdfBtn}><Ic.docW/> {t.calendarioPdf}</a>
</Card>
<Card><CT text={t.clima}/><p style={{fontSize:14,lineHeight:1.75,color:c.muted,margin:0}}>{t.climaText}</p></Card>
<Card><CT text={t.emergenze}/>
<Row l=“🚨 112” v={lang===“it”?“Emergenze”:“Emergencies”}/>
<Row l=“🚑 118” v={lang===“it”?“Ambulanza”:“Ambulance”}/>
<Row l=“🔥 115” v={lang===“it”?“Vigili del fuoco”:“Fire brigade”}/>
<Row l="🩺 Guardia Medica Uta" v="070 609 2204" link="tel:+390706092204"/>
<p style={{fontSize:11,color:c.muted,padding:“2px 0 8px”}}>Via Santa Giusta 85 · {lang===“it”?“Feriali 20:00–08:00 · Festivi h24”:“Weekdays 20:00–08:00 · Holidays 24h”}</p>
<Row l="📞 COSIR" v="070 68 44 15" last/>
</Card>
<ContactButtons t={t}/>
</div>

  </div>;
}

export default function CasaUta() {
const [screen, setScreen] = useState(“home”);
const [lang, setLang] = useState(“it”);
const go = (id) => { setScreen(id); window.scrollTo&&window.scrollTo(0,0); };
const props = {go, lang, setLang};
const screens = {
home:<PH {…props}/>, benvenuto:<Benvenuto {…props}/>, checkin:<Checkin {…props}/>,
wifi:<Wifi {…props}/>, appartamento:<Appartamento {…props}/>, regole:<Regole {…props}/>,
posizione:<Posizione {…props}/>, dintorni:<Dintorni {…props}/>, ristoranti:<Ristoranti {…props}/>,
eventi:<Eventi {…props}/>, recensioni:<Recensioni {…props}/>, spesa:<Spesa {…props}/>, faq:<FAQ {…props}/>,
};
return screens[screen] || <PH {…props}/>;
}
