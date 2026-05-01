import { useState, useEffect } from "react";

// Google Fonts: Cormorant Garamond + Jost
const FontLink = () => (
  <link
    href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@200;300;400;500&display=swap"
    rel="stylesheet"
  />
);

const c = {
  cream: "#f5f0e8", sand: "#e2d5c3", terra: "#b8673f",
  terraL: "#d4845f", dark: "#1e1810", muted: "#8a7b6e",
  white: "#faf7f2", green: "#4a6741",
};

// Placeholder colorato quando non ci sono foto reali
const Foto = ({ src, alt, style, onClick }) => (
  <div style={{ background: `linear-gradient(135deg, ${c.sand}, ${c.terra}30)`, display:"flex", alignItems:"center", justifyContent:"center", ...style, overflow:"hidden", cursor: onClick?"pointer":"default" }} onClick={onClick}>
    <span style={{ fontSize:32, opacity:0.4 }}>🏡</span>
  </div>
);

const s = {
  app: { minHeight:"100vh", fontFamily:"'Jost', sans-serif", fontWeight:300, color:c.dark, background:c.cream, maxWidth:480, margin:"0 auto" },
  hero: { background:c.dark, textAlign:"center", padding:"52px 24px 40px", borderRadius:"0 0 28px 28px", position:"relative", overflow:"hidden" },
  heroTitle: { fontFamily:"'Cormorant Garamond', Georgia, serif", fontWeight:300, fontSize:58, lineHeight:1.0, color:c.cream, margin:0, letterSpacing:1 },
  heroSub: { fontSize:9, letterSpacing:"4px", textTransform:"uppercase", color:"rgba(245,240,232,0.4)", marginTop:14 },
  eye: { fontSize:9, letterSpacing:"5px", textTransform:"uppercase", color:c.terra, fontWeight:600, marginBottom:12 },
  sectionLabel: { fontSize:9, letterSpacing:"4px", textTransform:"uppercase", color:c.muted, margin:"24px 0 16px", textAlign:"center" },
  grid: { display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:12, padding:"0 20px", maxWidth:400, margin:"0 auto" },
  card: { background:c.white, borderRadius:20, padding:"22px 8px 16px", display:"flex", flexDirection:"column", alignItems:"center", gap:8, cursor:"pointer", border:`1px solid ${c.terra}20` },
  cardLabel: { fontSize:8.5, letterSpacing:"1.5px", textTransform:"uppercase", textAlign:"center", fontWeight:500, color:c.dark, lineHeight:1.4 },
  pageHead: { background:c.dark, padding:"50px 24px 28px", borderRadius:"0 0 24px 24px" },
  pageTitle: { fontFamily:"'Cormorant Garamond', Georgia, serif", fontWeight:300, fontSize:38, color:c.cream, lineHeight:1.1, margin:0 },
  back: { display:"flex", alignItems:"center", gap:6, background:"none", border:"none", color:"rgba(245,240,232,0.6)", fontSize:10, letterSpacing:"2px", textTransform:"uppercase", cursor:"pointer", marginBottom:18, padding:0, fontFamily:"'Jost', sans-serif" },
  content: { padding:"24px 20px 60px" },
  infoCard: { background:c.white, borderRadius:18, padding:"20px 18px", marginBottom:12, border:`1px solid ${c.terra}15` },
  cardTitle: { fontFamily:"'Cormorant Garamond', Georgia, serif", fontSize:21, fontWeight:400, marginBottom:10, display:"flex", alignItems:"center", gap:8 },
  row: { display:"flex", alignItems:"center", justifyContent:"space-between", padding:"11px 0", borderBottom:`1px solid ${c.sand}` },
  rowLast: { display:"flex", alignItems:"center", justifyContent:"space-between", padding:"11px 0" },
  rowLabel: { fontSize:13.5, color:c.dark },
  rowValue: { fontFamily:"'Cormorant Garamond', Georgia, serif", fontSize:16, color:c.terra },
  rule: { display:"flex", gap:12, padding:"11px 0", borderBottom:`1px solid ${c.sand}`, fontSize:13.5, lineHeight:1.5, alignItems:"flex-start" },
  ruleLast: { display:"flex", gap:12, padding:"11px 0", fontSize:13.5, lineHeight:1.5, alignItems:"flex-start" },
  dot: { width:6, height:6, borderRadius:"50%", background:c.terra, flexShrink:0, marginTop:6 },
  hlBox: { background:`linear-gradient(135deg, ${c.terra}, ${c.terraL})`, borderRadius:18, padding:"20px 18px", color:"white", marginBottom:12 },
  hlTitle: { fontFamily:"'Cormorant Garamond', Georgia, serif", fontSize:22, fontWeight:300, marginBottom:8 },
  darkBox: { background:c.dark, borderRadius:14, padding:"16px 18px", marginBottom:12 },
  mapBtn: { display:"flex", alignItems:"center", gap:10, background:c.green, color:"white", borderRadius:14, padding:"14px 16px", textDecoration:"none", fontSize:13, marginTop:10 },
  pdfBtn: { display:"flex", alignItems:"center", gap:10, background:c.terra, color:"white", borderRadius:14, padding:"14px 16px", textDecoration:"none", fontSize:13, marginTop:10, cursor:"pointer", border:"none", width:"100%", justifyContent:"flex-start" },
  tel: { display:"flex", alignItems:"center", justifyContent:"space-between", padding:"12px 0", borderBottom:`1px solid ${c.sand}`, textDecoration:"none" },
  telLast: { display:"flex", alignItems:"center", justifyContent:"space-between", padding:"12px 0", textDecoration:"none" },
  gallery: { display:"flex", gap:10, overflowX:"auto", scrollbarWidth:"none", marginBottom:16 },
  wifiBox: { background:c.dark, borderRadius:14, padding:18, textAlign:"center", marginTop:10 },
  tag: { background:c.sand, borderRadius:20, padding:"5px 13px", fontSize:11, color:c.dark },
  tagA: { background:c.terra, borderRadius:20, padding:"5px 13px", fontSize:11, color:"white" },
};

const Ic = {
  back:     ()=><svg viewBox="0 0 24 24" style={{width:16,height:16,stroke:"currentColor",fill:"none",strokeWidth:1.5}}><polyline points="15 18 9 12 15 6"/></svg>,
  // 🏠 Casa con porta e tetto
  home:     ()=><svg viewBox="0 0 24 24" style={{width:28,height:28,stroke:c.dark,fill:"none",strokeWidth:1.3}}><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg>,
  // 🔑 Chiave
  lock:     ()=><svg viewBox="0 0 24 24" style={{width:28,height:28,stroke:c.dark,fill:"none",strokeWidth:1.3}}><circle cx="7" cy="17" r="4"/><path d="M11 17h9v-2a6 6 0 00-6-6 6 6 0 00-6 6"/><line x1="18" y1="11" x2="18" y2="17"/><line x1="21" y1="14" x2="18" y2="14"/></svg>,
  wifi:     ()=><svg viewBox="0 0 24 24" style={{width:28,height:28,stroke:c.dark,fill:"none",strokeWidth:1.3}}><path d="M5 12.55a11 11 0 0114.08 0"/><path d="M1.42 9a16 16 0 0121.16 0"/><path d="M8.53 16.11a6 6 0 016.95 0"/><circle cx="12" cy="20" r="1" fill={c.dark}/></svg>,
  // 🛋️ Divano/appartamento
  building: ()=><svg viewBox="0 0 24 24" style={{width:28,height:28,stroke:c.dark,fill:"none",strokeWidth:1.3}}><rect x="2" y="13" width="20" height="8" rx="1"/><path d="M6 13V9a2 2 0 012-2h8a2 2 0 012 2v4"/><path d="M5 13v2"/><path d="M19 13v2"/><rect x="5" y="15" width="4" height="3" rx="1"/><rect x="15" y="15" width="4" height="3" rx="1"/></svg>,
  // ✓ Lista regole
  check:    ()=><svg viewBox="0 0 24 24" style={{width:28,height:28,stroke:c.dark,fill:"none",strokeWidth:1.3}}><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><polyline points="3 6 4 7 6 5"/><polyline points="3 12 4 13 6 11"/><polyline points="3 18 4 19 6 17"/></svg>,
  pin:      ()=><svg viewBox="0 0 24 24" style={{width:28,height:28,stroke:c.dark,fill:"none",strokeWidth:1.3}}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  // 🧭 Bussola per "Da scoprire"
  compass:  ()=><svg viewBox="0 0 24 24" style={{width:28,height:28,stroke:c.dark,fill:"none",strokeWidth:1.3}}><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill={c.dark} fillOpacity="0.15"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>,
  // 🍝 Piatto di pasta
  pasta:    ()=><svg viewBox="0 0 24 24" style={{width:28,height:28,stroke:c.dark,fill:"none",strokeWidth:1.3}}><ellipse cx="12" cy="15" rx="9" ry="4"/><path d="M3 15c0-4.97 4.03-9 9-9s9 4.03 9 9"/><path d="M8 9.5C8.5 7 10 5.5 12 5.5s3.5 1.5 4 4"/><path d="M10 7c.3-1.2 1-2 2-2"/></svg>,
  cal:      ()=><svg viewBox="0 0 24 24" style={{width:28,height:28,stroke:c.dark,fill:"none",strokeWidth:1.3}}><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  star:     ()=><svg viewBox="0 0 24 24" style={{width:28,height:28,stroke:c.dark,fill:"none",strokeWidth:1.3}}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  // 🛒 Carrello della spesa
  bag:      ()=><svg viewBox="0 0 24 24" style={{width:28,height:28,stroke:c.dark,fill:"none",strokeWidth:1.3}}><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>,
  // ⚙️ Ingranaggio per servizi
  faq:      ()=><svg viewBox="0 0 24 24" style={{width:28,height:28,stroke:c.dark,fill:"none",strokeWidth:1.3}}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>,
  // ❓ punto interrogativo per FAQ
  help:     ()=><svg viewBox="0 0 24 24" style={{width:28,height:28,stroke:c.dark,fill:"none",strokeWidth:1.3}}><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="2" strokeLinecap="round"/></svg>,
  mapW:     ()=><svg viewBox="0 0 24 24" style={{width:20,height:20,stroke:"white",fill:"none",strokeWidth:1.5}}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  docW:     ()=><svg viewBox="0 0 24 24" style={{width:20,height:20,stroke:"white",fill:"none",strokeWidth:1.5}}><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
  phone:    ()=><svg viewBox="0 0 24 24" style={{width:18,height:18,stroke:c.terra,fill:"none",strokeWidth:1.5}}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.22 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.06 6.06l1.07-1.07a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
  trash:    ()=><svg viewBox="0 0 24 24" style={{width:18,height:18,stroke:c.terra,fill:"none",strokeWidth:1.5}}><path d="M3 6h18"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg>,
};

function Row({l,v,link,last}) {
  const st = last ? s.rowLast : s.row;
  if (link) return <a href={link} target="_blank" rel="noreferrer" style={{...st, textDecoration:"none"}}><span style={s.rowLabel}>{l}</span><span style={{...s.rowValue}}>{v} ›</span></a>;
  return <div style={st}><span style={s.rowLabel}>{l}</span><span style={s.rowValue}>{v}</span></div>;
}

function Rule({t, last}) {
  return <div style={last ? s.ruleLast : s.rule}><div style={s.dot}/><span>{t}</span></div>;
}

function PH({go}) {
  return (
    <div style={s.app}>
      <FontLink/>
      <div style={s.hero}>
        <div style={{position:"absolute",top:-60,right:-60,width:220,height:220,background:`radial-gradient(circle, ${c.terra}40 0%, transparent 70%)`,pointerEvents:"none"}}/>
        <div style={{position:"absolute",top:-40,left:-40,width:140,height:140,background:`radial-gradient(circle, ${c.terra}20 0%, transparent 70%)`,pointerEvents:"none"}}/>
        <div style={s.eye}>Uta · Cagliari · Sardegna</div>
        <h1 style={s.heroTitle}>
          Ben<em style={{fontStyle:"italic", color:c.sand}}>venuti</em>
        </h1>
        <div style={{fontSize:10, letterSpacing:"3.5px", textTransform:"uppercase", color:"rgba(245,240,232,0.35)", marginTop:14, fontFamily:"'Jost', sans-serif", fontWeight:200}}>Casa Uta — Via Cimitero 38</div>
        <div style={{width:32,height:1,background:c.terra,margin:"16px auto 0"}}/>
      </div>

      <div style={s.sectionLabel}>Esplora la guida</div>
      <div style={s.grid}>
        {[
          ["benvenuto",    <Ic.home/>,    "Benvenuto"],
          ["checkin",      <Ic.lock/>,    "Check-in / out"],
          ["appartamento", <Ic.building/>,"L'appartamento"],
          ["wifi",         <Ic.wifi/>,    "Wi-Fi"],
          ["regole",       <Ic.check/>,   "Regole casa"],
          ["esplorare",    <Ic.compass/>, "Da scoprire"],
          ["ristoranti",   <Ic.pasta/>,   "Ristoranti"],
          ["eventi",       <Ic.cal/>,     "Eventi"],
          ["recensioni",   <Ic.star/>,    "Recensioni"],
          ["spesa",        <Ic.bag/>,     "Spesa"],
          ["servizi",      <Ic.faq/>,     "Servizi utili"],
          ["faq",          <Ic.help/>,    "FAQ"],
        ].map(([id,icon,label])=>(
          <div key={id} style={s.card} onClick={()=>go(id)}>
            {icon}
            <span style={s.cardLabel}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PageHead({title, sub, back, icon}) {
  return (
    <>
      <FontLink/>
      <div style={s.pageHead}>
        <button style={s.back} onClick={back}><Ic.back/> Home</button>
        <div style={{marginBottom:8}}>{icon}</div>
        <h2 style={s.pageTitle}>{title}</h2>
        {sub && <div style={{fontSize:11,color:"rgba(245,240,232,0.5)",marginTop:6,letterSpacing:"1px",fontFamily:"'Jost',sans-serif"}}>{sub}</div>}
      </div>
    </>
  );
}

function Card({children, style}) {
  return <div style={{...s.infoCard,...style}}>{children}</div>;
}
function CT({icon,text}) {
  return <div style={s.cardTitle}>{icon&&<span style={{flexShrink:0}}>{icon}</span>}{text}</div>;
}

// ── SCREENS ──────────────────────────────────

function Benvenuto({go}) {
  return <div style={s.app}>
    <PageHead title="Benvenuti a Casa Uta" back={()=>go("home")} icon={<Ic.home/>}/>
    <div style={s.content}>
      <div style={s.hlBox}>
        <div style={s.hlTitle}>Siamo felici di ospitarvi</div>
        <p style={{fontSize:14,lineHeight:1.7,opacity:0.92,margin:0}}>Questa guida vi aiuterà a vivere al meglio il soggiorno. Per qualsiasi necessità non esitate a contattarci.</p>
      </div>

      {/* Dove siamo */}
      <Card>
        <CT icon={<Ic.pin/>} text="Dove siamo"/>
        <p style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:20,margin:"4px 0 12px",color:c.dark}}>Via Cimitero 38<br/>Uta (CA) — Sardegna</p>
        <a href="https://maps.google.com/?q=Via+Cimitero+38+Uta+Cagliari" target="_blank" rel="noreferrer" style={s.mapBtn}><Ic.mapW/> Apri in Google Maps</a>
      </Card>

      {/* Come arrivare — integrato */}
      <Card>
        <CT icon={<Ic.pin/>} text="Come arrivare"/>
        <Row l="✈️ Aeroporto di Cagliari" v="~10 min" link="https://maps.google.com/?q=Aeroporto+Cagliari+Elmas"/>
        <Row l="🏖️ Poetto (mare)" v="~15 min" link="https://maps.google.com/?q=Spiaggia+Poetto+Cagliari"/>
        <Row l="🏙️ Cagliari centro" v="~20 min" link="https://maps.google.com/?q=Cagliari+centro+storico"/>
        <Row l="⛴️ Porto di Cagliari" v="~20 min" link="https://maps.google.com/?q=Porto+di+Cagliari"/>
        <Row l="🚌 ARST Linea 125" v="orari ›" link="https://www.arst.sardegna.it/servizi-orari/"/>
        <p style={{fontSize:11,color:c.muted,padding:"2px 0 8px"}}>Fermata vicina · Prima 05:40 · Ultima ~22:00</p>
        <Row l="🚆 Treno Uta-Villaspeciosa" v="orari ›" link="https://www.trenitalia.com" last/>
        <p style={{fontSize:11,color:c.muted,padding:"2px 0 0"}}>06:27–20:53 · ~22 min per Cagliari</p>
      </Card>

      {/* Contatti */}
      <Card>
        <CT icon={<Ic.phone/>} text="Contatti"/>
        <a href="tel:+393284699520" style={s.tel}><span style={{fontSize:13.5,color:c.dark}}>📱 Alessandro</span><span style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:16,color:c.terra}}>328 469 9520</span></a>
        <a href="tel:+393473208852" style={s.telLast}><span style={{fontSize:13.5,color:c.dark}}>📱 Roberta</span><span style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:16,color:c.terra}}>347 320 8852</span></a>
      </Card>
    </div>
  </div>;
}

function Checkin({go}) {
  return <div style={s.app}>
    <PageHead title="Check-in / out" back={()=>go("home")} icon={<Ic.lock/>}/>
    <div style={s.content}>

      {/* Orari in evidenza */}
      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:12}}>
        <div style={{background:c.dark, borderRadius:18, padding:"20px 16px", textAlign:"center"}}>
          <div style={{fontSize:9, letterSpacing:"3px", textTransform:"uppercase", color:"rgba(245,240,232,0.4)", marginBottom:8}}>Arrivo</div>
          <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:36, color:c.cream, lineHeight:1}}>15:00</div>
          <div style={{fontSize:11, color:c.terra, marginTop:6}}>dalle ore</div>
        </div>
        <div style={{background:c.dark, borderRadius:18, padding:"20px 16px", textAlign:"center"}}>
          <div style={{fontSize:9, letterSpacing:"3px", textTransform:"uppercase", color:"rgba(245,240,232,0.4)", marginBottom:8}}>Partenza</div>
          <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:36, color:c.cream, lineHeight:1}}>10:30</div>
          <div style={{fontSize:11, color:c.terra, marginTop:6}}>entro le ore</div>
        </div>
      </div>

      <Card>
        <CT text="🧳 All'arrivo"/>
        <Rule t="Vi accoglieremo personalmente — o vi lasciamo le istruzioni per il self check-in"/>
        <Rule t="Parcheggio libero in strada davanti all'ingresso"/>
        <Rule t="Trovate lenzuola, asciugamani e kit di benvenuto già pronti" last/>
      </Card>

      <Card>
        <CT text="👋 Alla partenza"/>
        <Rule t="Lasciate le chiavi sul tavolo in cucina"/>
        <Rule t="Buttate i rifiuti seguendo la raccolta differenziata (vedi FAQ)"/>
        <Rule t="Se avete bisogno di conservare i bagagli qualche ora, chiedeteci!" last/>
      </Card>

      <Card>
        <CT text="🚗 Parcheggio & accesso"/>
        <Rule t="Parcheggio libero e gratuito in Via Cimitero"/>
        <Rule t="Il cancello si apre con il telecomando che trovate all'interno"/>
        <Rule t="Citofono disponibile se necessario" last/>
      </Card>
    </div>
  </div>;
}

function Wifi({go}) {
  return <div style={s.app}>
    <PageHead title="Wi-Fi" back={()=>go("home")} icon={<Ic.wifi/>}/>
    <div style={s.content}>
      <Card>
        <CT icon={<Ic.wifi/>} text="Fibra ottica — disponibile ovunque"/>
        <p style={{fontSize:14,lineHeight:1.75,color:c.muted,marginBottom:8}}>Copertura in tutto l'appartamento e in veranda.</p>
        <div style={s.wifiBox}><div style={{fontSize:9,letterSpacing:"3px",textTransform:"uppercase",color:c.muted,marginBottom:6}}>Nome rete</div><div style={{fontFamily:"Georgia,serif",fontSize:26,color:c.cream,letterSpacing:2}}>CasaUta_Guest</div></div>
        <div style={{...s.wifiBox,marginTop:10}}><div style={{fontSize:9,letterSpacing:"3px",textTransform:"uppercase",color:c.muted,marginBottom:6}}>Password</div><div style={{fontFamily:"Georgia,serif",fontSize:26,color:c.cream,letterSpacing:2}}>— — — — — —</div><div style={{fontSize:10,color:"rgba(245,240,232,0.4)",marginTop:6}}>⚠️ Chiedete la password all'arrivo</div></div>
      </Card>
      <Card><CT text="Problemi di connessione?"/><p style={{fontSize:14,lineHeight:1.75,color:c.muted,margin:0}}>Spegnete e riaccendete il router (armadio nel corridoio). Se il problema persiste, contattateci.</p></Card>
    </div>
  </div>;
}

function Appartamento({go}) {
  const rooms = [
    {icon:"🍳", name:"Cucina", items:["Piano cottura a induzione","Forno elettrico","Lavastoviglie","Frigorifero","Cappa aspirante","Climatizzatore Wi-Fi","Tavolo allungabile + 4 sedie","Divano letto 3 posti","Vetrata scorrevole su veranda","Soffitto affrescato anni '50 — motivi floreali rosa"]},
    {icon:"🛏️", name:"Camera da letto", items:["Letto matrimoniale con contenitore","Armadio ~4 metri","Settimino","Comodini con applique su entrambi i lati","Condizionatore Wi-Fi","Soffitto affrescato anni '50 — geometrie dorate"]},
    {icon:"🚿", name:"Bagno", items:["Box doccia scorrevole 80×100 cm","Colonna doccia con getti massaggio","Mobile lavandino con cassettoni","Specchio con illuminazione LED","Ventilazione automatica"]},
  ];
  return <div style={s.app}>
    <PageHead title="L'Appartamento" sub="50 m² interno · 40 m² veranda" back={()=>go("home")} icon={<Ic.building/>}/>
    <div style={s.content}>

      {/* Banner affreschi — unico, evocativo */}
      <div style={{background:c.dark, borderRadius:20, overflow:"hidden", marginBottom:14}}>
        <div style={{background:"linear-gradient(135deg, #2a1a0e 0%, #3d2510 50%, #1e1810 100%)", padding:"24px 20px 20px"}}>
          <div style={{display:"flex", alignItems:"flex-start", gap:16}}>
            <div style={{fontSize:40, flexShrink:0, lineHeight:1}}>🎨</div>
            <div>
              <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:26, fontWeight:300, color:c.cream, lineHeight:1.1, marginBottom:8}}>
                Affreschi originali<br/><em style={{fontStyle:"italic", color:c.sand}}>degli anni Cinquanta</em>
              </div>
              <p style={{fontSize:13, color:"rgba(245,240,232,0.75)", lineHeight:1.7, margin:0}}>
                I soffitti di cucina e camera sono dipinti a mano da artigiani sardi. Motivi floreali nella cucina, geometrie dorate nella camera. Un patrimonio artistico raro, rimasto intatto per settant'anni.
              </p>
            </div>
          </div>
          <div style={{display:"flex", gap:8, marginTop:16}}>
            {[["🌸","Cucina","Floreale rosa"],["✦","Camera","Geometrico oro"],["🕯️","Anni '50","Artigianato sardo"]].map(([em,label,desc])=>(
              <div key={label} style={{flex:1, background:"rgba(255,255,255,0.06)", borderRadius:12, padding:"10px 8px", textAlign:"center"}}>
                <div style={{fontSize:18, marginBottom:4}}>{em}</div>
                <div style={{fontSize:11, color:c.sand, fontWeight:500}}>{label}</div>
                <div style={{fontSize:9.5, color:"rgba(245,240,232,0.45)", marginTop:2, lineHeight:1.3}}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Panoramica rapida */}
      <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:8, marginBottom:14}}>
        {[["~50 m²","Interno"],["~40 m²","Veranda"],["2×","Clima Wi-Fi"]].map(([val,label])=>(
          <div key={label} style={{background:c.white, borderRadius:14, padding:"14px 8px", textAlign:"center", border:`1px solid ${c.terra}15`}}>
            <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:22, color:c.terra, lineHeight:1}}>{val}</div>
            <div style={{fontSize:10, color:c.muted, marginTop:4, letterSpacing:"0.5px"}}>{label}</div>
          </div>
        ))}
      </div>

      {rooms.map(({icon,name,items})=>(
        <Card key={name}>
          <CT text={`${icon} ${name}`}/>
          {items.map((t,i)=><Rule key={i} t={t} last={i===items.length-1}/>)}
        </Card>
      ))}

      <Card>
        <CT text="🌿 Veranda e giardino"/>
        <p style={{fontSize:14,lineHeight:1.75,color:c.muted,margin:0}}>Veranda coperta ~40 m² con accesso diretto dalla vetrata scorrevole della cucina. Giardinetto privato — ideale per colazioni all'aperto, aperitivi al tramonto o semplicemente stare fuori.</p>
      </Card>

      <div style={{display:"flex",flexWrap:"wrap",gap:8, marginTop:4}}>
        {["Wi-Fi fibra","2 Climatizzatori","Parcheggio libero","Giardino privato","Lavastoviglie","Forno"].map((t,i)=>(
          <span key={t} style={i===0?s.tagA:s.tag}>{t}</span>
        ))}
      </div>
    </div>
  </div>;
}

function Regole({go}) {
  return <div style={s.app}>
    <PageHead title="Regole casa" back={()=>go("home")} icon={<Ic.check/>}/>
    <div style={s.content}>
      <Card><CT text="📋 Generali"/>
        <Rule t={<span>Check-in dalle <strong>15:00</strong> — Check-out entro <strong>10:30</strong></span>}/>
        <Rule t="Non sono ammessi animali domestici"/>
        <Rule t="Vietato fumare all'interno"/>
        <Rule t={<span>Silenzio dalle <strong>22:30</strong> alle <strong>08:00</strong></span>}/>
        <Rule t="Numero massimo ospiti come da prenotazione" last/>
      </Card>
      <Card><CT text="🧹 Pulizia e cura"/>
        <Rule t="Lasciare la casa in ordine alla partenza"/>
        <Rule t="Differenziare i rifiuti (istruzioni in FAQ)"/>
        <Rule t="Segnalare eventuali danni prima del check-out" last/>
      </Card>
      <Card><CT text="🔒 Sicurezza"/>
        <Rule t="Chiudere sempre a chiave uscendo"/>
        <Rule t="Non lasciare rubinetti aperti o fornelli accesi"/>
        <Rule t={<span>Emergenze: <strong>112</strong></span>} last/>
      </Card>
    </div>
  </div>;
}

function Posizione({go}) {
  return <div style={s.app}>
    <PageHead title="Come arrivare" back={()=>go("home")} icon={<Ic.pin/>}/>
    <div style={s.content}>
      <Card><CT icon={<Ic.pin/>} text="Indirizzo"/>
        <p style={{fontFamily:"Georgia,serif",fontSize:19,marginBottom:12}}>Via Cimitero 38<br/>Uta (CA) — Sardegna</p>
        <a href="https://maps.google.com/?q=Via+Cimitero+38+Uta+Cagliari" target="_blank" rel="noreferrer" style={s.mapBtn}><Ic.mapW/> Apri in Google Maps</a>
      </Card>
      <Card><CT text="🚌 Mezzi pubblici"/>
        <Row l="ARST Linea 125 (Uta–Cagliari)" v="›" link="https://www.arst.sardegna.it/servizi-orari/"/>
        <p style={{fontSize:11,color:c.muted,padding:"2px 0 10px"}}>Prima 05:40 · Ultima ~22:00 · tutti i giorni</p>
        <Row l="🚆 Treno Uta-Villaspeciosa" v="›" link="https://www.trenitalia.com" last/>
        <p style={{fontSize:11,color:c.muted,padding:"2px 0 0"}}>06:27–20:53 · ~22 min per Cagliari</p>
      </Card>
      <Card><CT text="🚗 In auto — distanze"/>
        <Row l="✈️ Aeroporto Cagliari" v="~10 min" link="https://maps.google.com/?q=Aeroporto+Cagliari+Elmas"/>
        <Row l="🏖️ Poetto (mare)" v="~15 min" link="https://maps.google.com/?q=Spiaggia+Poetto+Cagliari"/>
        <Row l="🏙️ Cagliari centro" v="~20 min" link="https://maps.google.com/?q=Cagliari+centro+storico"/>
        <Row l="🏭 Zona ind. Macchiareddu" v="~5 min" link="https://maps.google.com/?q=Macchiareddu+Uta"/>
        <Row l="🦜 Oasi WWF Santa Gilla" v="~10 min" link="https://maps.google.com/?q=Oasi+WWF+Santa+Gilla"/>
        <Row l="⛴️ Porto di Cagliari" v="~20 min" link="https://maps.google.com/?q=Porto+di+Cagliari" last/>
      </Card>
    </div>
  </div>;
}

// ── ESPLORARE ─────────────────────────────────────────────
function Esplorare({go}) {
  const [tab, setTab] = useState(0);

  const tabs = [
    {
      id:"vicino", label:"A due passi", emoji:"🌿",
      color:"#2d4a2d", accent:"#6db86d",
      tagline:"Tutto raggiungibile a piedi o in 15 minuti",
      data:[
        { title:"Cinema Vittoria — Uta", dist:"a piedi", emoji:"🎬",
          mood:"Sala storica anni '50",
          desc:"Una piccola sala cinematografica storica nel cuore di Uta. Programmazione mista tra film commerciali e proiezioni locali. Un'esperienza autentica e rara.",
          link:"https://maps.google.com/?q=Cinema+Vittoria+Uta+Sardegna"},
        { title:"Parco S'Ollivariu", dist:"5 min", emoji:"🌳",
          mood:"Mattinata tranquilla",
          desc:"Lecci, sentieri ombreggiati e silenzio. Il posto giusto per iniziare la giornata prima che il paese si svegli.",
          link:"https://maps.google.com/?q=Parco+S+Ollivariu+Uta"},
        { title:"Chiesa romanica di Santa Maria", dist:"5 min", emoji:"⛪",
          mood:"Patrimonio del XII sec.",
          desc:"Pietra calcarea, volte basse e luce filtrata. Una delle chiese medievali più integre del Campidano — vale dieci minuti di sosta.",
          link:"https://maps.google.com/?q=Chiesa+Santa+Maria+Uta"},
        { title:"Fenicotteri — Oasi WWF Santa Gilla", dist:"10 min", emoji:"🦩",
          mood:"Spettacolo della natura",
          desc:"Migliaia di fenicotteri rosa sullo sfondo della laguna. Visibili quasi tutto l'anno — una scena che non ci si aspetta così vicino a casa.",
          link:"https://maps.google.com/?q=Oasi+WWF+Santa+Gilla"},
        { title:"Saline di Conti Vecchi", dist:"10 min", emoji:"🧂",
          mood:"Foto imperdibili",
          desc:"Le vasche cambiano colore dal bianco candido al rosa acceso a seconda della stagione. Un paesaggio industriale-naturale unico.",
          link:"https://maps.google.com/?q=Saline+Conti+Vecchi+Assemini"},
      ]
    },
    {
      id:"cagliari", label:"Cagliari", emoji:"🏙️",
      color:"#1e2d40", accent:"#6aaee0",
      tagline:"Il capoluogo in 20 minuti — mare, storia, vita",
      data:[
        { title:"Poetto — 11 km di sabbia fine", dist:"15 min", emoji:"🏖️",
          mood:"Mare & relax",
          desc:"La spiaggia urbana più lunga della Sardegna. D'estate chioschi e movida, in primavera solo vento e orizzonte. Entrami validi.",
          link:"https://maps.google.com/?q=Spiaggia+Poetto+Cagliari"},
        { title:"Sella del Diavolo", dist:"20 min", emoji:"🥾",
          mood:"Tramonto da ricordare",
          desc:"Il promontorio tra Poetto e Calamosca. Il sentiero sale tra mirto e lentisco: in cima, il Golfo di Cagliari si apre tutto insieme.",
          link:"https://maps.google.com/?q=Sella+del+Diavolo+Cagliari"},
        { title:"Molentargius — il parco degli aironi", dist:"15 min", emoji:"🦢",
          mood:"Natura metropolitana",
          desc:"Stagno naturale nel mezzo della città. Aironi cenerini, fenicotteri e folaghe a pochi metri dalla pista ciclabile.",
          link:"https://maps.google.com/?q=Parco+Molentargius+Cagliari"},
        { title:"Marina, Castello & Su Siccu", dist:"20 min", emoji:"🏙️",
          mood:"Aperitivo & storia",
          desc:"Il quartiere Marina per i tapas sardi e i vicoli animati; Castello per i panorami sul golfo; Su Siccu per una serata sul lungomare.",
          link:"https://maps.google.com/?q=Cagliari+centro+storico"},
      ]
    },
    {
      id:"cultura", label:"Cultura & Storia", emoji:"🏛️",
      color:"#3a2510", accent:"#d4845f",
      tagline:"Romani, aragonesi, artigiani e minatori",
      data:[
        { title:"San Sperate — Pinuccio Sciola", dist:"15 min", emoji:"🎨",
          mood:"Da non perdere",
          desc:"Il paese-museo: ogni muro è un'opera, ogni vicolo una sorpresa. Le pietre sonore di Sciola vibrano al tocco — un'esperienza che non si dimentica.",
          link:"https://maps.google.com/?q=Murales+San+Sperate+Sardegna"},
        { title:"Scavi di Nora", dist:"25 min", emoji:"🏛️",
          mood:"2.800 anni di storia",
          desc:"Teatro romano, terme puniche, mosaici e colonne — tutto affacciato sul mare. Una delle città antiche più scenografiche d'Italia.",
          link:"https://maps.google.com/?q=Nora+sito+romano+Pula"},
        { title:"Villa d'Orri", dist:"25 min", emoji:"🏰",
          mood:"Eleganza ottocentesca",
          desc:"Dimora nobiliare immersa in un parco di lecci centenari. Architettura neoclassica e atmosfera sospesa nel tempo.",
          link:"https://maps.google.com/?q=Villa+d+Orri+Sarroch"},
        { title:"Miniere & Geoparco di Iglesias", dist:"50 min", emoji:"⛏️",
          mood:"Patrimonio UNESCO",
          desc:"Gallerie, laverie e paesaggi industriali restituiti alla memoria collettiva. Il Museo del Carbone di Serbariu è il punto di partenza ideale.",
          link:"https://maps.google.com/?q=Miniere+Iglesias+Sardegna"},
      ]
    },
    {
      id:"natura", label:"Natura & Sapori", emoji:"🌊",
      color:"#0e2a35", accent:"#4ab8c8",
      tagline:"Spiagge, cammini, vini e isole",
      data:[
        { title:"Cantine Argiolas, Mesa, Audarya", dist:"20–40 min", emoji:"🍷",
          mood:"Degustazione",
          desc:"Vermentino, Cannonau, Carignano. Le cantine del Campidano aprono le porte per visite e degustazioni in paesaggi da cartolina.",
          link:"https://maps.google.com/?q=Cantine+Argiolas+Serdiana"},
        { title:"Cammini — Sant'Efisio, 100 Torri, Santa Barbara", dist:"vari", emoji:"🚶",
          mood:"Pellegrinaggio & trekking",
          desc:"Antichi percorsi a piedi attraverso la Sardegna del sud. Il Cammino dei 100 Torri costiero è tra i più scenografici; Sant'Efisio il più spirituale.",
          link:"https://maps.google.com/?q=Cammino+Sant+Efisio+Sardegna"},
        { title:"Sentieri del Carignano — Sulcis", dist:"50 min", emoji:"🥾",
          mood:"Viticoltura eroica",
          desc:"Vigneti a piede franco tra i più antichi d'Europa, aggrappati alle scogliere a strapiombo sul mare. Un trekking fuori dal comune.",
          link:"https://maps.google.com/?q=Carignano+del+Sulcis+vigneti"},
        { title:"Chia — dune e torri", dist:"45 min", emoji:"🏖️",
          mood:"Spiaggia da sogno",
          desc:"Acqua caraibica, dune di sabbia bianca e una torre aragonese sul promontorio. Tra le spiagge più belle d'Europa. Arrivate presto.",
          link:"https://maps.google.com/?q=Spiaggia+Chia+Sardegna"},
        { title:"Belvedere Nebida & Pan di Zucchero", dist:"1h 10min", emoji:"🗼",
          mood:"Panorama mozzafiato",
          desc:"Lo scoglio più alto del Mediterraneo visto dall'alto. Al tramonto la luce arancione sulla roccia bianca è inarrivabile.",
          link:"https://maps.google.com/?q=Belvedere+Nebida+Sardegna"},
        { title:"Carloforte — Isola di San Pietro", dist:"1h 20min + traghetto", emoji:"⛵",
          mood:"Isola nell'isola",
          desc:"Borgo tabarkino con accento ligure, strade strette e tonno rosso del Mediterraneo. Una giornata intera non basta.",
          link:"https://maps.google.com/?q=Carloforte+Isola+San+Pietro"},
        { title:"Villasimius & Costa Rei", dist:"1h", emoji:"🌊",
          mood:"Fondali cristallini",
          desc:"Il sud-est della Sardegna è quasi caraibico. Acque trasparenti, barriera corallina, dune di quarzo rosa. Perfetto per snorkeling.",
          link:"https://maps.google.com/?q=Villasimius+Sardegna"},
      ]
    },
  ];

  const [meteo, setMeteo] = useState(null);
  const [meteoLoad, setMeteoLoad] = useState(false);

  const fetchMeteo = async () => {
    setMeteoLoad(true);
    try {
      // Open-Meteo: dati orari attuali + forecast 3 giorni per Uta (CA)
      const url = "https://api.open-meteo.com/v1/forecast?latitude=39.29&longitude=8.96" +
        "&current=temperature_2m,apparent_temperature,weathercode,windspeed_10m,relativehumidity_2m" +
        "&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum" +
        "&timezone=Europe%2FRome&forecast_days=3";
      const res = await fetch(url);
      const d = await res.json();

      const wmoLabel = (code) => {
        if (code === 0) return ["☀️","Soleggiato"];
        if (code <= 2) return ["⛅","Poco nuvoloso"];
        if (code <= 3) return ["☁️","Coperto"];
        if (code <= 49) return ["🌫️","Nebbia"];
        if (code <= 59) return ["🌦️","Pioviggine"];
        if (code <= 69) return ["🌧️","Pioggia"];
        if (code <= 79) return ["🌨️","Neve"];
        if (code <= 84) return ["🌦️","Rovesci"];
        return ["⛈️","Temporale"];
      };

      const [icoNow, labelNow] = wmoLabel(d.current.weathercode);
      const current = {
        temp: Math.round(d.current.temperature_2m),
        feels: Math.round(d.current.apparent_temperature),
        ico: icoNow, label: labelNow,
        wind: Math.round(d.current.windspeed_10m),
        hum: d.current.relativehumidity_2m,
      };

      const days = ["Oggi","Domani","Dopodomani"];
      const forecast = d.daily.time.slice(0,3).map((date,i)=>{
        const [ico,label] = wmoLabel(d.daily.weathercode[i]);
        return { day:days[i], ico, label,
          max: Math.round(d.daily.temperature_2m_max[i]),
          min: Math.round(d.daily.temperature_2m_min[i]),
          rain: d.daily.precipitation_sum[i] };
      });
      setMeteo({current, forecast});
    } catch(e) { setMeteo(null); }
    setMeteoLoad(false);
  };

  // Carica meteo automaticamente al mount
  useEffect(()=>{ fetchMeteo(); }, []);

  const t = tabs[tab];

  return <div style={s.app}>
    <PageHead title="Da scoprire" back={()=>go("home")} icon={<Ic.compass/>}/>
    <div style={s.content}>

      {/* Banner meteo: condizioni attuali + 3 giorni */}
      <div style={{background:c.dark, borderRadius:18, padding:"16px 18px", marginBottom:16, overflow:"hidden", position:"relative"}}>
        <div style={{position:"absolute",top:-30,right:-30,width:120,height:120,background:"radial-gradient(circle,#6aaee040,transparent 70%)",pointerEvents:"none"}}/>
        <div style={{fontSize:9, letterSpacing:"3px", textTransform:"uppercase", color:"rgba(245,240,232,0.4)", marginBottom:12}}>📍 Uta · Meteo in tempo reale</div>
        {meteoLoad && <div style={{color:"rgba(245,240,232,0.5)",fontSize:13,textAlign:"center",padding:"16px 0"}}>⏳ Caricamento meteo…</div>}
        {!meteoLoad && meteo && (
          <>
            {/* Condizioni ora */}
            <div style={{display:"flex", alignItems:"center", gap:16, marginBottom:14, paddingBottom:14, borderBottom:"1px solid rgba(255,255,255,0.08)"}}>
              <span style={{fontSize:44, lineHeight:1}}>{meteo.current.ico}</span>
              <div>
                <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:40, color:"white", lineHeight:1}}>{meteo.current.temp}°<span style={{fontSize:18, color:"rgba(245,240,232,0.5)", fontFamily:"'Jost',sans-serif", fontWeight:200, marginLeft:4}}>C</span></div>
                <div style={{fontSize:13, color:"rgba(245,240,232,0.7)", marginTop:2}}>{meteo.current.label}</div>
                <div style={{display:"flex", gap:12, marginTop:4}}>
                  <span style={{fontSize:10, color:"rgba(245,240,232,0.4)"}}>💨 {meteo.current.wind} km/h</span>
                  <span style={{fontSize:10, color:"rgba(245,240,232,0.4)"}}>💧 {meteo.current.hum}%</span>
                  <span style={{fontSize:10, color:"rgba(245,240,232,0.4)"}}>Percepiti {meteo.current.feels}°</span>
                </div>
              </div>
            </div>
            {/* Previsioni 3 giorni */}
            <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:8}}>
              {meteo.forecast.map((g,i)=>(
                <div key={i} style={{textAlign:"center", background:"rgba(255,255,255,0.05)", borderRadius:12, padding:"10px 6px"}}>
                  <div style={{fontSize:9, letterSpacing:"2px", textTransform:"uppercase", color:"rgba(245,240,232,0.4)", marginBottom:4}}>{g.day}</div>
                  <div style={{fontSize:24, lineHeight:1, marginBottom:4}}>{g.ico}</div>
                  <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:17, color:"white"}}>{g.max}°</div>
                  <div style={{fontSize:10, color:"rgba(245,240,232,0.4)"}}>{g.min}° min</div>
                  {g.rain > 0 && <div style={{fontSize:10, color:"#6aaee0", marginTop:3}}>💧{g.rain}mm</div>}
                </div>
              ))}
            </div>
          </>
        )}
        {!meteoLoad && !meteo && (
          <div style={{textAlign:"center",padding:"10px 0"}}>
            <span style={{fontSize:12,color:"rgba(245,240,232,0.4)"}}>Meteo non disponibile</span>
            <button onClick={fetchMeteo} style={{display:"block",margin:"8px auto 0",background:"none",border:"1px solid rgba(255,255,255,0.2)",borderRadius:8,padding:"5px 12px",fontSize:11,color:"rgba(245,240,232,0.5)",cursor:"pointer"}}>Riprova</button>
          </div>
        )}
      </div>

      {/* Tab visivi a blocchi colorati */}
      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:20}}>
        {tabs.map(({id,label,emoji,color,accent,tagline},i)=>(
          <button key={id} onClick={()=>setTab(i)} style={{
            background: i===tab ? color : c.white,
            border: i===tab ? `2px solid ${accent}` : `1px solid ${c.sand}`,
            borderRadius:16, padding:"14px 12px", cursor:"pointer",
            textAlign:"left", transition:"all .2s",
          }}>
            <div style={{fontSize:22, marginBottom:4}}>{emoji}</div>
            <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:15,
              color: i===tab ? "white" : c.dark, fontWeight:400, lineHeight:1.2, marginBottom:4}}>{label}</div>
            <div style={{fontSize:10, color: i===tab ? `${accent}` : c.muted,
              lineHeight:1.4, letterSpacing:"0.2px"}}>{tagline}</div>
          </button>
        ))}
      </div>

      {/* Header categoria attiva */}
      <div style={{background:t.color, borderRadius:16, padding:"16px 18px", marginBottom:14,
        borderLeft:`4px solid ${t.accent}`}}>
        <span style={{fontSize:28}}>{t.emoji}</span>
        <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:22,
          color:"white", fontWeight:300, marginTop:4}}>{t.label}</div>
        <div style={{fontSize:12, color:t.accent, marginTop:4, letterSpacing:"0.5px"}}>{t.tagline}</div>
        <div style={{fontSize:11, color:"rgba(255,255,255,0.4)", marginTop:6}}>
          {t.data.length} esperienze · tocca per aprire in Maps
        </div>
      </div>

      {/* Card esperienze */}
      {t.data.map((p,i)=>(
        <a key={i} href={p.link} target="_blank" rel="noreferrer" style={{
          display:"block", textDecoration:"none",
          background:c.white, borderRadius:18, marginBottom:10,
          border:`1px solid ${c.terra}15`, overflow:"hidden",
        }}
          onMouseEnter={e=>e.currentTarget.style.borderColor=t.accent}
          onMouseLeave={e=>e.currentTarget.style.borderColor=`${c.terra}15`}>
          {/* Striscia colorata top */}
          <div style={{height:3, background:`linear-gradient(90deg, ${t.color}, ${t.accent})`}}/>
          <div style={{padding:"14px 16px"}}>
            <div style={{display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:6}}>
              <div style={{display:"flex", alignItems:"center", gap:10}}>
                <span style={{fontSize:22}}>{p.emoji}</span>
                <div>
                  <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:17,
                    fontWeight:400, color:c.dark, lineHeight:1.2}}>{p.title}</div>
                  <div style={{fontSize:10, color:t.accent, marginTop:2, fontWeight:500,
                    letterSpacing:"0.5px", textTransform:"uppercase"}}>{p.mood}</div>
                </div>
              </div>
              <span style={{fontSize:11, color:c.terra, background:`${c.terra}12`,
                borderRadius:20, padding:"3px 9px", flexShrink:0, marginLeft:8, whiteSpace:"nowrap"}}>{p.dist}</span>
            </div>
            <p style={{fontSize:13, color:c.muted, lineHeight:1.7, margin:0, paddingLeft:32}}>{p.desc}</p>
          </div>
        </a>
      ))}
    </div>
  </div>;
}
function Servizi({go}) {
  return <div style={s.app}>
    <PageHead title="Servizi utili" back={()=>go("home")} icon={<Ic.grid/>}/>
    <div style={s.content}>

      <Card>
        <CT text="🛒 Spesa — a piedi"/>
        <Row l="COOP — Via Sa Mura 23 ⭐4.6" v="vicino ›" link="https://maps.google.com/?q=COOP+Via+Sa+Mura+Uta"/>
        <p style={{fontSize:11,color:c.muted,padding:"2px 0 8px"}}>Lun–Sab 8:00–13:00 / 17:00–20:00 · Dom 8:30–12:30</p>
        <Row l="ARD Discount — Vico I Decimo 21 ⭐4.5" v="vicino ›" link="https://maps.google.com/?q=ARD+Discount+Uta"/>
        <Row l="MD — Via P. Mascagni 1 ⭐4.5" v="vicino ›" link="https://maps.google.com/?q=MD+Supermercato+Uta"/>
        <p style={{fontSize:11,color:c.muted,padding:"2px 0 8px"}}>Orario continuato 8:30–20:00</p>
        <Row l="Superpan — Assemini ⭐4.1" v="~15 min ›" link="https://maps.google.com/?q=Superpan+Assemini" last/>
        <p style={{fontSize:11,color:c.muted,padding:"2px 0 0"}}>Lun–Sab 8:30–21:30 · Dom 8:30–14:00/16:30–21:00</p>
      </Card>

      <Card>
        <CT text="💊 Salute"/>
        <Row l="Farmacia Schlich — Via Stazione 5" v="~300m ›" link="https://maps.google.com/?q=Farmacia+Schlich+Uta"/>
        <Row l="Parafarmacia Bensaid — Via Roma 27 ⭐5.0" v="vicino ›" link="https://maps.google.com/?q=Parafarmacia+Bensaid+Uta"/>
        <Row l="La Parafarmacia — Via Torino 11A ⭐4.6" v="vicino ›" link="https://maps.google.com/?q=La+Parafarmacia+Uta"/>
        <Row l="🩺 Guardia Medica — Via S. Giusta 85" v="070 609 2204 ›" link="tel:+390706092204" last/>
        <p style={{fontSize:11,color:c.muted,padding:"2px 0 0"}}>Feriali 20:00–08:00 · Festivi h24</p>
      </Card>

      <Card>
        <CT text="🏦 Banca & Servizi"/>
        <Row l="ATM Banco di Sardegna" v="vicino ›" link="https://maps.google.com/?q=Banco+di+Sardegna+Uta"/>
        <Row l="ATM Poste Italiane" v="vicino ›" link="https://maps.google.com/search?q=Poste+Italiane+Uta"/>
        <Row l="Tabaccheria Coccinella ⭐4.9" v="vicino ›" link="https://maps.google.com/?q=Coccinella+Tabaccheria+Uta"/>
        <Row l="Comune di Uta" v="vicino ›" link="https://maps.google.com/?q=Comune+di+Uta" last/>
      </Card>

      <Card>
        <CT text="🚌 Trasporti"/>
        <Row l="ARST Linea 125 (Uta–Cagliari)" v="orari ›" link="https://www.arst.sardegna.it/servizi-orari/"/>
        <p style={{fontSize:11,color:c.muted,padding:"2px 0 8px"}}>Prima 05:40 · Ultima ~22:00</p>
        <Row l="🚆 Treno Uta-Villaspeciosa" v="orari ›" link="https://www.trenitalia.com"/>
        <p style={{fontSize:11,color:c.muted,padding:"2px 0 8px"}}>06:27–20:53 · ~22 min per Cagliari</p>
        <Row l="✈️ Aeroporto Cagliari" v="~10 min ›" link="https://maps.google.com/?q=Aeroporto+Cagliari+Elmas" last/>
      </Card>

      <div style={s.darkBox}>
        <p style={{fontSize:12,color:"rgba(245,240,232,0.7)",lineHeight:1.7,margin:0}}>
          🚨 Emergenze: <strong style={{color:"white"}}>112</strong> &nbsp;·&nbsp;
          Ambulanza: <strong style={{color:"white"}}>118</strong> &nbsp;·&nbsp;
          Vigili del fuoco: <strong style={{color:"white"}}>115</strong>
        </p>
      </div>
    </div>
  </div>;
}

function RCard({emoji, nome, stelle, dist, tipo, piatti, link}) {
  return (
    <a href={link} target="_blank" rel="noreferrer" style={{
      display:"block", textDecoration:"none", background:c.white,
      borderRadius:16, padding:"14px 16px", marginBottom:10,
      border:`1px solid ${c.terra}15`, overflow:"hidden"
    }}
      onMouseEnter={e=>e.currentTarget.style.borderColor=c.terra}
      onMouseLeave={e=>e.currentTarget.style.borderColor=`${c.terra}15`}>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:6}}>
        <div style={{display:"flex", alignItems:"center", gap:8}}>
          <span style={{fontSize:20}}>{emoji}</span>
          <div>
            <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:16, fontWeight:400, color:c.dark, lineHeight:1.2}}>{nome}</div>
            <div style={{fontSize:10, color:c.muted, marginTop:2}}>{tipo}</div>
          </div>
        </div>
        <div style={{display:"flex", flexDirection:"column", alignItems:"flex-end", gap:3, flexShrink:0, marginLeft:8}}>
          {stelle && <span style={{fontSize:11, color:"#b8860b", fontWeight:600}}>⭐ {stelle}</span>}
          <span style={{fontSize:10, color:c.terra, background:`${c.terra}12`, borderRadius:10, padding:"2px 8px", whiteSpace:"nowrap"}}>{dist}</span>
        </div>
      </div>
      {piatti && <div style={{fontSize:12, color:c.muted, lineHeight:1.6, paddingLeft:28, fontStyle:"italic"}}>{piatti}</div>}
    </a>
  );
}

function Ristoranti({go}) {
  return <div style={s.app}>
    <PageHead title="Dove mangiare" back={()=>go("home")} icon={<Ic.coffee/>}/>
    <div style={s.content}>

      <Card>
        <CT text="🏠 A Uta — a piedi"/>
        <RCard emoji="🍔" nome="Slim Pickins" stelle="4.9" dist="vicino" tipo="American Fusion"
          piatti="Burger gourmet, pulled pork, ali di pollo croccanti. Ingredienti locali in chiave americana."
          link="https://maps.google.com/?q=Slim+Pickins+Uta"/>
        <RCard emoji="🍺" nome="U3 Birreria & Steakhouse" stelle="4.8" dist="vicino" tipo="Birra artigianale · Carne"
          piatti="Birre artigianali sarde, tagliata di manzo, hamburger di Angus. Atmosfera rustica e conviviale."
          link="https://maps.google.com/?q=U3+Birreria+Uta"/>
        <RCard emoji="🥩" nome="El Miura" stelle="4.6" dist="vicino" tipo="Steakhouse · Cucina sarda"
          piatti="Grigliate di carne, porceddu, secondi di terra. Ambiente familiare e porzioni generose."
          link="https://maps.google.com/?q=El+Miura+Uta"/>
        <RCard emoji="🍽️" nome="Ristorante Da Caterina" stelle="4.4" dist="vicino" tipo="Cucina sarda tradizionale"
          piatti="Malloreddus al ragù, fregola, agnello al forno. Piatti della nonna, autentici e abbondanti."
          link="https://maps.google.com/?q=Ristorante+Da+Caterina+Uta"/>
        <RCard emoji="🍕" nome="Sa Locanda di Gaia" stelle="4.4" dist="vicino" tipo="Pizza · Cucina sarda"
          piatti="Pizze al forno a legna, pane carasau con guarnizioni, antipasti misti sardi."
          link="https://maps.google.com/?q=Pizzeria+Sa+Locanda+Di+Gaia+Uta"/>
      </Card>

      <Card>
        <CT text="☕ Bar"/>
        <RCard emoji="☕" nome="Check Mate Bar" stelle="4.7" dist="vicino" tipo="Bar · Aperitivi"
          piatti="Colazioni sarde, caffè, aperitivi con stuzzichini locali. Meta dei giocatori di scacchi del paese."
          link="https://maps.google.com/?q=Checkmate+Bar+Uta"/>
        <RCard emoji="☕" nome="Caffè Roma" dist="vicino" tipo="Bar storico"
          piatti="Cornetti, paste fresche, caffè. Il ritrovo mattutino dei residenti di Uta."
          link="https://maps.google.com/search?q=Caffe+Roma+Uta"/>
        <RCard emoji="☕" nome="New Bar Mexico" stelle="4.7" dist="~15 min" tipo="Bar · Pasticceria"
          piatti="Dolci sardi, seadas, paste di mandorle, ottima colazione. Tappa golosa ad Assemini."
          link="https://maps.google.com/?q=New+Bar+Mexico+Assemini"/>
      </Card>

      <Card>
        <CT text="🚗 Circondario — 10/20 min"/>
        <RCard emoji="🍕" nome="Le Pizzi'ine di Niky" stelle="4.9" dist="~10 min" tipo="Pizzeria napoletana"
          piatti="Pizza napoletana verace, impasto a lunga lievitazione, farciture creative. Tra le migliori nell'area."
          link="https://maps.google.com/?q=Le+Pizziine+di+Niky+Decimomannu"/>
        <RCard emoji="🐟" nome="Ci Pensa Marco" stelle="4.8" dist="~10 min" tipo="Pesce · Cucina sarda"
          piatti="Fregola con arselle, spaghetti all'astice, fritto misto di paranza. Freschissimo ogni giorno."
          link="https://maps.google.com/?q=Ci+Pensa+Marco+Decimomannu"/>
        <RCard emoji="🍽️" nome="Thalìa" dist="~10 min" tipo="Cucina mediterranea · Elmas"
          piatti="Cucina di territorio con influenze mediterranee, carni e pesce. Ambiente curato."
          link="https://maps.google.com/?q=Ristorante+Thalia+Elmas"/>
        <RCard emoji="🌿" nome="Ada Restaurant" stelle="4.7" dist="~15 min" tipo="Cucina sarda creativa · San Sperate"
          piatti="Cucina sarda reinterpretata con creatività: malloreddus al mirto, agnello con erbe aromatiche, dolci tipici rivisitati. Accanto ai murales di Sciola."
          link="https://maps.google.com/?q=Ada+Restaurant+San+Sperate"/>
        <RCard emoji="🍺" nome="Gasthaus" stelle="4.6" dist="~15 min" tipo="Birreria tedesca · Assemini"
          piatti="Würstel, crauti, stinco di maiale, birre tedesche alla spina. Un'anomalia felice in Sardegna."
          link="https://maps.google.com/?q=Gasthaus+Assemini"/>
        <RCard emoji="🍕" nome="Malloci Pizza e Cucina" stelle="4.4" dist="~15 min" tipo="Pizza · Cucina sarda"
          piatti="Pizze gourmet e piatti sardi. Impasto croccante, ottimi ingredienti locali."
          link="https://maps.google.com/?q=Malloci+Assemini"/>
        <RCard emoji="🍱" nome="Makito Poke & Sushi" stelle="4.7" dist="~15 min" tipo="Giapponese · Fusion"
          piatti="Poke bowl personalizzate, sushi rolls, tartare di tonno. Ideale per una pausa fresca e leggera."
          link="https://maps.google.com/?q=Makito+Assemini"/>
        <RCard emoji="⭐" nome="Lughènte Fine Dining" stelle="4.9" dist="~20 min" tipo="Alta cucina · Capoterra"
          piatti="Menù degustazione con prodotti sardi d'eccellenza: bottarga, agnello, formaggi pecorino DOP. Prenotazione obbligatoria."
          link="https://maps.google.com/?q=Lughente+Capoterra"/>
        <RCard emoji="🌊" nome="Arcadia Restaurant" stelle="4.5" dist="~20 min" tipo="Cucina di mare · Capoterra"
          piatti="Pesce freschissimo, linguine all'aragosta, antipasti di mare. Vista suggestiva sul litorale."
          link="https://maps.google.com/?q=Arcadia+Restaurant+Capoterra"/>
      </Card>

      <Card>
        <CT text="🐟 Cagliari — pesce fresco ~20 min"/>
        <RCard emoji="🐠" nome="Stella Marina di Montecristo" stelle="4.6" dist="~20 min" tipo="Ristorante di pesce"
          piatti="Crudi di mare, zuppa di pesce, spaghetti con bottarga di muggine. Freschezza assoluta."
          link="https://maps.google.com/?q=Stella+Marina+di+Montecristo+Cagliari"/>
        <RCard emoji="🦐" nome="Mari Mannu" stelle="4.6" dist="~20 min" tipo="Cucina di mare"
          piatti="Antipasto di mare ricchissimo, grigliata mista, fregola con frutti di mare. Vista porto."
          link="https://maps.google.com/?q=Mari+Mannu+Cagliari"/>
        <RCard emoji="🐟" nome="Mondo & Luca" stelle="4.6" dist="~20 min" tipo="Trattoria di pesce"
          piatti="Ambiente informale, qualità altissima. Crudi, pasta al sugo di scorfano, dolci fatti in casa."
          link="https://maps.google.com/?q=Mondo+e+Luca+Cagliari"/>
      </Card>

      {/* Banner cultura cucina sarda */}
      <div style={{background:c.dark, borderRadius:18, overflow:"hidden", marginTop:4}}>
        <div style={{background:"linear-gradient(135deg,#1a2e1a,#2d4a2d)", padding:"20px 18px"}}>
          <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:22, color:c.cream, fontWeight:300, marginBottom:4}}>
            La cucina sarda
          </div>
          <div style={{fontSize:10, color:"#6db86d", letterSpacing:"2px", textTransform:"uppercase", marginBottom:12}}>Blu Zone · Patrimonio UNESCO · Genuinità</div>
          <p style={{fontSize:13, color:"rgba(245,240,232,0.8)", lineHeight:1.75, margin:"0 0 14px"}}>
            La Sardegna è una delle cinque <strong style={{color:c.sand}}>Blu Zone</strong> del mondo — luoghi dove si vive più a lungo. Il segreto? Una dieta millenaria: legumi, pane di semola, formaggi pecorino, olio extravergine e vino Cannonau, ricco di antiossidanti.
          </p>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:14}}>
            {[
              ["🍝","Malloreddus","Gnocchetti sardi al ragù di salsiccia"],
              ["🐚","Fregola","Pasta sferica con arselle o frutti di mare"],
              ["🐏","Porceddu","Maialino da latte arrosto allo spiedo"],
              ["🧀","Pecorino","Formaggio DOP stagionato, base della dieta"],
              ["🫙","Bottarga","Uova di muggine essiccate — il «caviale sardo»"],
              ["🍩","Seadas","Dolce fritto con formaggio e miele amaro"],
            ].map(([em,nome,desc])=>(
              <div key={nome} style={{background:"rgba(255,255,255,0.06)", borderRadius:12, padding:"10px 10px"}}>
                <div style={{display:"flex", alignItems:"center", gap:6, marginBottom:4}}>
                  <span style={{fontSize:18}}>{em}</span>
                  <span style={{fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:14, color:c.sand, fontWeight:400}}>{nome}</span>
                </div>
                <div style={{fontSize:10.5, color:"rgba(245,240,232,0.5)", lineHeight:1.4}}>{desc}</div>
              </div>
            ))}
          </div>
          <div style={{fontSize:11, color:"rgba(245,240,232,0.4)", lineHeight:1.6, borderTop:"1px solid rgba(255,255,255,0.07)", paddingTop:12}}>
            💡 Nel weekend <strong style={{color:"rgba(245,240,232,0.7)"}}>prenotate sempre</strong>. Chiedete sempre il <strong style={{color:"rgba(245,240,232,0.7)"}}>vino della casa</strong> — spesso è Cannonau o Vermentino locale.
          </div>
        </div>
      </div>
    </div>
  </div>;
}

function Eventi({go}) {
  const oggi = new Date();
  const meseCorrente = oggi.getMonth() + 1; // 1-12

  const tuttiEvs = [
    {mese:1, m:"Gennaio", evs:[{d:"12 gennaio",t:"🕯️ Festa di Santa Greca (Decimomannu)"}]},
    {mese:5, m:"Maggio", evs:[
      {d:"1–4 maggio",t:"🎖️ Festa di Sant'Efisio (Cagliari) — processione ininterrotta dal 1657",link:"https://www.festadisantefisio.com"},
      {d:"14 maggio",t:"🌸 Santa Giusta, patrona di Uta"},
      {d:"Primo sabato dopo il 14",t:"🌾 Sant'Isidoro (Uta) — festa agricola"},
    ]},
    {mese:8, m:"Agosto", evs:[
      {d:"13 agosto",t:"⚔️ Corteo Storico Medievale (Iglesias) — 700 figuranti"},
      {d:"15 agosto",t:"🕯️ Assunzione B.V. Maria + processione solenne (Uta)"},
    ]},
    {mese:7, m:"Estate (luglio/agosto)", evs:[
      {d:"Luglio / Agosto",t:"🏊 World Aquatics High Diving World Cup — Porto Flavia (Nebida). Coppa del Mondo di tuffi organizzata da Marmeeting. Spettacolo unico tra mare e miniere.",link:"https://maps.google.com/?q=Porto+Flavia+Nebida+Sardegna"},
    ]},
    {mese:9, m:"Settembre", evs:[
      {d:"5–9 settembre",t:"🌟 Festa di Santa Maria (Uta) — la più attesa! Concerti, fuochi d'artificio"},
      {d:"Fine settembre",t:"🎊 Festa di Santa Greca (Decimomannu)"},
    ]},
    {mese:11, m:"Novembre", evs:[
      {d:"Terza domenica",t:"🏃 Maratonina Città di Uta — 21 km, 10,5 km, family run 4 km · ore 10:00 da Via Stazione",link:"https://maratoninadiuta.it"},
    ]},
    {mese:12, m:"Dicembre", evs:[{d:"13 dicembre",t:"🕯️ Santa Lucia (Uta)"}]},
  ];

  // Ordina: dal mese corrente in poi, poi quelli già passati
  const evs = [
    ...tuttiEvs.filter(e => e.mese >= meseCorrente).sort((a,b) => a.mese - b.mese),
    ...tuttiEvs.filter(e => e.mese < meseCorrente).sort((a,b) => a.mese - b.mese),
  ];

  // Calcola imminenti (entro 7 giorni)
  const eventiFissi = [
    {mese:1,giorno:12,titolo:"Festa di Santa Greca",luogo:"Decimomannu",emoji:"🕯️"},
    {mese:5,giorno:1,titolo:"Festa di Sant'Efisio",luogo:"Cagliari",emoji:"🎖️"},
    {mese:5,giorno:14,titolo:"Santa Giusta — patrona di Uta",luogo:"Uta",emoji:"🌸"},
    {mese:8,giorno:13,titolo:"Corteo Medievale",luogo:"Iglesias",emoji:"⚔️"},
    {mese:8,giorno:15,titolo:"Assunzione B.V. Maria",luogo:"Uta",emoji:"🕯️"},
    {mese:9,giorno:5,titolo:"Festa di Santa Maria (inizio)",luogo:"Uta",emoji:"🌟"},
    {mese:9,giorno:9,titolo:"Festa di Santa Maria (fine)",luogo:"Uta",emoji:"🎆"},
    {mese:11,giorno:21,titolo:"Maratonina di Uta",luogo:"Uta",emoji:"🏃"},
    {mese:12,giorno:13,titolo:"Santa Lucia",luogo:"Uta",emoji:"🕯️"},
  ];
  const imminenti = eventiFissi.filter(e => {
    const dataEv = new Date(oggi.getFullYear(), e.mese - 1, e.giorno);
    if (dataEv < oggi) dataEv.setFullYear(oggi.getFullYear() + 1);
    const diff = (dataEv - oggi) / (1000 * 60 * 60 * 24);
    return diff >= 0 && diff <= 7;
  });

  // Sezione eventi live
  const [liveEvents, setLiveEvents] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchLiveEvents = async () => {
    setLoading(true);
    try {
      const oggi_str = oggi.toLocaleDateString("it-IT",{weekday:"long",day:"numeric",month:"long",year:"numeric"});
      const res = await fetch("https://api.anthropic.com/v1/messages",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          model:"claude-sonnet-4-20250514", max_tokens:1200,
          tools:[{type:"web_search_20250305",name:"web_search"}],
          messages:[{role:"user",content:`Oggi è ${oggi_str}. Fai una ricerca web e trova eventi in programma QUESTA SETTIMANA (oggi e nei prossimi 7 giorni) in Sardegna, in particolare:
1. Feste religiose e patronali (esempio: Sant'Efisio 1-4 maggio a Cagliari, feste locali di Uta, Decimomannu, Assemini, Iglesias)
2. Concerti, spettacoli musicali, festival
3. Teatro, cinema, eventi culturali
4. Sagre, mercati, eventi gastronomici
5. Sport, eventi all'aperto
Cerca su siti come sardegnaturismo.it, cagliari.it, comune.uta.ca.it e siti di eventi locali sardi.
Rispondi SOLO con array JSON puro senza backtick né markdown, esempio:
[{"titolo":"Festa di Sant'Efisio","data":"1-4 maggio","luogo":"Cagliari","tipo":"Sagra","desc":"Processione storica ininterrotta dal 1657","link":"https://www.festadisantefisio.com"}]
Tipi validi: Concerto, Teatro, Cinema, Sagra, Festival, Sport, Cultura
Max 10 eventi. SOLO JSON.`}]
        })
      });
      const data = await res.json();
      const text = data.content.filter(b=>b.type==="text").map(b=>b.text).join("");
      setLiveEvents(JSON.parse(text.replace(/```json|```/g,"").trim()));
    } catch(e) { setLiveEvents([]); }
    setLoading(false);
  };

  const tipoStyle = {
    "Cinema":{bg:"#1e2d40",ac:"#6aaee0"},
    "Teatro":{bg:"#3a1f3a",ac:"#c87fc8"},
    "Concerto":{bg:"#1a2e1a",ac:"#6db86d"},
    "Sagra":{bg:"#3a2510",ac:"#d4845f"},
    "Festival":{bg:"#0e2a35",ac:"#4ab8c8"},
  };

  return <div style={s.app}>
    <PageHead title="Feste ed eventi" back={()=>go("home")} icon={<Ic.cal/>}/>
    <div style={s.content}>

      {/* Banner imminenti */}
      {imminenti.length > 0 && (
        <div style={{background:"linear-gradient(135deg,#b8673f,#d4845f)",borderRadius:18,padding:"18px 18px 14px",marginBottom:14}}>
          <div style={{fontSize:9,letterSpacing:"3px",textTransform:"uppercase",color:"rgba(255,255,255,0.6)",marginBottom:10}}>🔔 Questa settimana</div>
          {imminenti.map((e,i)=>(
            <div key={i} style={{display:"flex",alignItems:"center",gap:12,padding:"8px 0",borderBottom:i<imminenti.length-1?"1px solid rgba(255,255,255,0.2)":"none"}}>
              <span style={{fontSize:22}}>{e.emoji}</span>
              <div>
                <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:17,color:"white",fontWeight:400}}>{e.titolo}</div>
                <div style={{fontSize:11,color:"rgba(255,255,255,0.7)",marginTop:2}}>{e.luogo}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Sezione live + feste del calendario come fallback */}
      <div style={{background:c.white,borderRadius:18,padding:"18px",marginBottom:14,border:`1px solid ${c.terra}15`}}>
        <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:19,fontWeight:400,marginBottom:4}}>🔍 Cosa c'è questa settimana</div>
        <p style={{fontSize:12.5,color:c.muted,lineHeight:1.6,marginBottom:14}}>Concerti, teatro, cinema, sagre e feste nell'area di Cagliari e Sulcis.</p>
        {!liveEvents && !loading && (
          <button onClick={fetchLiveEvents} style={{width:"100%",background:c.terra,color:"white",border:"none",borderRadius:12,padding:"13px",fontSize:13,fontFamily:"'Jost',sans-serif",cursor:"pointer"}}>
            ✨ Cerca eventi in programma
          </button>
        )}
        {loading && <div style={{textAlign:"center",padding:"20px 0",color:c.muted,fontSize:13}}>🔍 Sto cercando eventi in corso…</div>}
        {liveEvents && liveEvents.length === 0 && (
          <div style={{textAlign:"center",padding:"16px 0",color:c.muted,fontSize:13}}>
            Nessun evento trovato online questa settimana.
            <button onClick={fetchLiveEvents} style={{display:"block",margin:"10px auto 0",background:"none",border:`1px solid ${c.sand}`,borderRadius:10,padding:"8px 16px",fontSize:12,cursor:"pointer",color:c.muted}}>Riprova</button>
          </div>
        )}
        {liveEvents && liveEvents.length > 0 && (
          <div>
            {liveEvents.map((e,i)=>{
              const st = tipoStyle[e.tipo] || {bg:c.dark,ac:c.terra};
              return (
                <div key={i} style={{background:st.bg,borderRadius:14,padding:"12px 14px",marginBottom:8,borderLeft:`3px solid ${st.ac}`}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:4}}>
                    <span style={{fontSize:10,color:st.ac,textTransform:"uppercase",letterSpacing:"1px",fontWeight:500}}>{e.tipo}</span>
                    <span style={{fontSize:11,color:"rgba(245,240,232,0.5)"}}>{e.data}</span>
                  </div>
                  <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:16,color:c.cream,fontWeight:400,marginBottom:4}}>{e.titolo}</div>
                  <div style={{fontSize:12,color:"rgba(245,240,232,0.6)",marginBottom:e.desc?4:0}}>📍 {e.luogo}</div>
                  {e.desc && <div style={{fontSize:12,color:"rgba(245,240,232,0.55)",lineHeight:1.5}}>{e.desc}</div>}
                  {e.link && <a href={e.link} target="_blank" rel="noreferrer" style={{display:"inline-block",marginTop:8,fontSize:11,color:st.ac,textDecoration:"none"}}>Scopri di più →</a>}
                </div>
              );
            })}
            <button onClick={fetchLiveEvents} style={{width:"100%",marginTop:8,background:"none",border:`1px solid ${c.sand}`,borderRadius:10,padding:"9px",fontSize:11,cursor:"pointer",color:c.muted,fontFamily:"'Jost',sans-serif"}}>🔄 Aggiorna</button>
          </div>
        )}
      </div>

      {/* Calendario cronologico dal mese corrente */}
      <div style={{fontSize:9,letterSpacing:"4px",textTransform:"uppercase",color:c.muted,margin:"4px 0 14px",textAlign:"center"}}>Calendario tradizioni locali</div>
      {evs.map(({m,evs:ee},idx)=>(
        <Card key={m} style={idx===0 ? {border:`1px solid ${c.terra}50`} : {}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10}}>
            <div style={s.cardTitle}>{m}</div>
            {idx===0 && <span style={{fontSize:10,background:c.terra,color:"white",borderRadius:10,padding:"2px 8px"}}>In corso</span>}
          </div>
          {ee.map((e,i)=>(
            <div key={i} style={i===ee.length-1?s.ruleLast:s.rule}><div style={s.dot}/>
              <span><strong>{e.d}</strong> — {e.link?<a href={e.link} target="_blank" rel="noreferrer" style={{color:c.terra}}>{e.t}</a>:e.t}</span>
            </div>
          ))}
        </Card>
      ))}

      <div style={{...s.darkBox,textAlign:"center",marginTop:12}}>
        <p style={{fontSize:12,color:"rgba(245,240,232,0.7)",lineHeight:1.7,margin:0}}>💡 Se il soggiorno coincide con la <strong style={{color:c.sand}}>Festa di Santa Maria</strong> (5–9 sett.) o con <strong style={{color:c.sand}}>Sant'Efisio</strong> siete fortunatissimi!</p>
      </div>
    </div>
  </div>;
}

function Recensioni({go}) {
  return <div style={s.app}>
    <PageHead title="Le vostre recensioni" back={()=>go("home")} icon={<Ic.star/>}/>
    <div style={s.content}>
      <div style={s.hlBox}><div style={s.hlTitle}>La vostra opinione conta</div><p style={{fontSize:14,lineHeight:1.7,opacity:0.92,margin:0}}>Speriamo che il soggiorno sia stato di vostro gradimento. Una recensione su Google ci aiuta a far conoscere Casa Uta!</p></div>
      <Card style={{textAlign:"center",padding:"28px 18px"}}>
        <div style={{fontSize:40,marginBottom:10}}>⭐⭐⭐⭐⭐</div>
        <p style={{fontFamily:"Georgia,serif",fontSize:20,marginBottom:8}}>Lascia una recensione su Google</p>
        <p style={{fontSize:13,color:c.muted,marginBottom:20,lineHeight:1.6}}>Bastano 2 minuti e ci aiuti enormemente.<br/>Grazie di cuore! 🙏</p>
        <a href="https://search.google.com/local/writereview?placeid=GOOGLE_PLACE_ID" target="_blank" rel="noreferrer" style={s.mapBtn}><span>⭐</span> Scrivi una recensione</a>
      </Card>
      <Card><CT text="Cosa ci ha colpito di più?"/>
        <Rule t="La pulizia e la cura degli spazi"/>
        <Rule t="Gli affreschi originali degli anni '50"/>
        <Rule t="La posizione e i servizi vicini"/>
        <Rule t="La veranda e il giardinetto privato"/>
        <Rule t="La disponibilità dei proprietari" last/>
      </Card>
    </div>
  </div>;
}

function Spesa({go}) {
  return <div style={s.app}>
    <PageHead title="Fare la spesa" back={()=>go("home")} icon={<Ic.bag/>}/>
    <div style={s.content}>
      <Card><CT text="🏠 A Uta — a piedi"/>
        <Row l="🛒 COOP — Via Sa Mura 23 ⭐4.6" v="vicino ›" link="https://maps.google.com/?q=COOP+Via+Sa+Mura+Uta"/>
        <p style={{fontSize:11,color:c.muted,padding:"2px 0 8px"}}>Lun–Sab 8:00–13:00 / 17:00–20:00 · Dom 8:30–12:30</p>
        <Row l="🛒 ARD Discount — Vico I Decimo 21 ⭐4.5" v="vicino ›" link="https://maps.google.com/?q=ARD+Discount+Uta"/>
        <Row l="🛒 MD — Via P. Mascagni 1 ⭐4.5" v="vicino ›" link="https://maps.google.com/?q=MD+Supermercato+Uta" last/>
        <p style={{fontSize:11,color:c.muted,padding:"2px 0 0"}}>Lun–Dom 8:30–20:00 orario continuato</p>
      </Card>
      <Card><CT text="🚗 Circondario — ~15 min"/>
        <Row l="🛒 Iperpan — Decimomannu" v="~15 min ›" link="https://maps.google.com/?q=Iperpan+Decimomannu"/>
        <Row l="🛒 Superpan — Assemini ⭐4.1" v="~15 min ›" link="https://maps.google.com/?q=Superpan+Assemini" last/>
        <p style={{fontSize:11,color:c.muted,padding:"2px 0 0"}}>Lun–Sab 8:30–21:30 · Dom 8:30–14:00/16:30–21:00</p>
      </Card>
      <div style={s.darkBox}><p style={{fontSize:12,color:"rgba(245,240,232,0.7)",lineHeight:1.7,margin:0}}>💡 La <strong style={{color:c.sand}}>COOP</strong> è la più completa. Il <strong style={{color:c.sand}}>MD</strong> è ideale per rifornimenti con l'orario continuato.</p></div>
    </div>
  </div>;
}

function FAQ({go}) {
  const rifiuti = [
    {n:"🟢 Umido",g:"Lun/Mar/Gio/Ven",s:"sacchetto marrone"},
    {n:"🟡 Plastica",g:"Lun e Mer",s:"sacchetto giallo"},
    {n:"🔵 Carta/cartone",g:"Mar e Mer (alterne)",s:"sacchetto blu"},
    {n:"♻️ Vetro/alluminio",g:"Mer (alterne) — senza busta",s:"mastello"},
    {n:"⚫ Secco",g:"Mar e Sab",s:"sacchetto nero"},
  ];
  return <div style={s.app}>
    <PageHead title="Domande frequenti" back={()=>go("home")} icon={<Ic.faq/>}/>
    <div style={s.content}>
      <Card><CT icon={<Ic.trash/>} text="Raccolta differenziata"/>
        <div style={{...s.darkBox,marginTop:4}}>
          {rifiuti.map(({n,g,s:sc},i)=>(
            <div key={n} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 0",borderBottom:i<rifiuti.length-1?`1px solid rgba(255,255,255,0.1)`:"none"}}>
              <div><div style={{fontSize:13,color:c.cream,fontWeight:400}}>{n}</div><div style={{fontSize:11,color:"rgba(245,240,232,0.55)",marginTop:2}}>{g}</div></div>
              <span style={{fontSize:11,color:c.terra,background:"rgba(184,103,63,0.2)",borderRadius:8,padding:"3px 8px"}}>{sc}</span>
            </div>
          ))}
        </div>
        <div style={{...s.darkBox,display:"flex",gap:10,marginTop:10,marginBottom:0}}><span>⚠️</span><p style={{fontSize:12,color:"rgba(245,240,232,0.8)",lineHeight:1.6,margin:0}}><strong style={{color:c.sand}}>Orario esposizione:</strong> entro le 6:00 o la sera prima dopo le 20:00.</p></div>
        <a href="https://mycity.s3.sbg.io.cloud.ovh.net/4457468/20250311-Calendario-Uta-Domestiche.pdf" target="_blank" rel="noreferrer" style={s.pdfBtn}><Ic.docW/> Calendario COSIR 2025–2026</a>
      </Card>
      <Card><CT text="❄️ Climatizzatori"/><p style={{fontSize:14,lineHeight:1.75,color:c.muted,margin:0}}>Controllabili via app Wi-Fi o telecomando. In camera il telecomando è nel cassetto del comodino.</p></Card>
      <Card><CT text="🚨 Emergenze"/>
        <Row l="🚨 Emergenze generali" v="112"/>
        <Row l="🚑 Ambulanza" v="118"/>
        <Row l="🔥 Vigili del fuoco" v="115"/>
        <Row l="🩺 Guardia Medica Uta" v="070 609 2204" link="tel:+390706092204"/>
        <p style={{fontSize:11,color:c.muted,padding:"2px 0 8px"}}>Via Santa Giusta 85 · Feriali 20:00–08:00 · Festivi h24</p>
        <Row l="📞 COSIR rifiuti" v="070 68 44 15" last/>
      </Card>
      <Card><CT text="Serve altro aiuto?"/>
        <p style={{fontSize:14,lineHeight:1.75,color:c.muted,marginBottom:8}}>Siamo sempre disponibili!</p>
        <a href="tel:+393284699520" style={s.tel}><span style={{fontSize:13.5,color:c.dark}}>📱 Alessandro</span><span style={{fontFamily:"Georgia,serif",fontSize:16,color:c.terra}}>328 469 9520</span></a>
        <a href="tel:+393473208852" style={s.telLast}><span style={{fontSize:13.5,color:c.dark}}>📱 Roberta</span><span style={{fontFamily:"Georgia,serif",fontSize:16,color:c.terra}}>347 320 8852</span></a>
      </Card>
    </div>
  </div>;
}

// ── MAIN APP ──────────────────────────────────
export default function CasaUta() {
  const [screen, setScreen] = useState("home");
  const go = (id) => { setScreen(id); window.scrollTo&&window.scrollTo(0,0); };
  const screens = {
    home: <PH go={go}/>, benvenuto:<Benvenuto go={go}/>, checkin:<Checkin go={go}/>,
    wifi:<Wifi go={go}/>, appartamento:<Appartamento go={go}/>, regole:<Regole go={go}/>,
    posizione:<Posizione go={go}/>, esplorare:<Esplorare go={go}/>, ristoranti:<Ristoranti go={go}/>,
    eventi:<Eventi go={go}/>, recensioni:<Recensioni go={go}/>, spesa:<Spesa go={go}/>,
    servizi:<Servizi go={go}/>, faq:<FAQ go={go}/>,
  };
  return screens[screen] || <PH go={go}/>;
}
