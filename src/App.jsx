import { useState } from "react";

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
  back: ()=><svg viewBox="0 0 24 24" style={{width:16,height:16,stroke:"currentColor",fill:"none",strokeWidth:1.5}}><polyline points="15 18 9 12 15 6"/></svg>,
  home: ()=><svg viewBox="0 0 24 24" style={{width:28,height:28,stroke:c.dark,fill:"none",strokeWidth:1.3}}><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg>,
  lock: ()=><svg viewBox="0 0 24 24" style={{width:28,height:28,stroke:c.dark,fill:"none",strokeWidth:1.3}}><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>,
  wifi: ()=><svg viewBox="0 0 24 24" style={{width:28,height:28,stroke:c.dark,fill:"none",strokeWidth:1.3}}><path d="M5 12.55a11 11 0 0114.08 0"/><path d="M1.42 9a16 16 0 0121.16 0"/><path d="M8.53 16.11a6 6 0 016.95 0"/><circle cx="12" cy="20" r="1" fill={c.dark}/></svg>,
  building: ()=><svg viewBox="0 0 24 24" style={{width:28,height:28,stroke:c.dark,fill:"none",strokeWidth:1.3}}><rect x="2" y="7" width="20" height="15" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>,
  check: ()=><svg viewBox="0 0 24 24" style={{width:28,height:28,stroke:c.dark,fill:"none",strokeWidth:1.3}}><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>,
  pin: ()=><svg viewBox="0 0 24 24" style={{width:28,height:28,stroke:c.dark,fill:"none",strokeWidth:1.3}}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  grid: ()=><svg viewBox="0 0 24 24" style={{width:28,height:28,stroke:c.dark,fill:"none",strokeWidth:1.3}}><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
  coffee: ()=><svg viewBox="0 0 24 24" style={{width:28,height:28,stroke:c.dark,fill:"none",strokeWidth:1.3}}><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>,
  cal: ()=><svg viewBox="0 0 24 24" style={{width:28,height:28,stroke:c.dark,fill:"none",strokeWidth:1.3}}><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  star: ()=><svg viewBox="0 0 24 24" style={{width:28,height:28,stroke:c.dark,fill:"none",strokeWidth:1.3}}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  bag: ()=><svg viewBox="0 0 24 24" style={{width:28,height:28,stroke:c.dark,fill:"none",strokeWidth:1.3}}><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>,
  faq: ()=><svg viewBox="0 0 24 24" style={{width:28,height:28,stroke:c.dark,fill:"none",strokeWidth:1.3}}><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="2" strokeLinecap="round"/></svg>,
  mapW: ()=><svg viewBox="0 0 24 24" style={{width:20,height:20,stroke:"white",fill:"none",strokeWidth:1.5}}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  docW: ()=><svg viewBox="0 0 24 24" style={{width:20,height:20,stroke:"white",fill:"none",strokeWidth:1.5}}><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
  phone: ()=><svg viewBox="0 0 24 24" style={{width:18,height:18,stroke:c.terra,fill:"none",strokeWidth:1.5}}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.22 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.06 6.06l1.07-1.07a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
  trash: ()=><svg viewBox="0 0 24 24" style={{width:18,height:18,stroke:c.terra,fill:"none",strokeWidth:1.5}}><path d="M3 6h18"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg>,
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
          ["benvenuto", <Ic.home/>, "Benvenuto"],
          ["checkin",   <Ic.lock/>, "Check-in / out"],
          ["wifi",      <Ic.wifi/>, "Wi-Fi"],
          ["appartamento", <Ic.building/>, "L'appartamento"],
          ["regole",    <Ic.check/>, "Regole casa"],
          ["posizione", <Ic.pin/>,  "Come arrivare"],
          ["esplorare", <Ic.grid/>, "Esplorare"],
          ["ristoranti",<Ic.coffee/>,"Ristoranti"],
          ["eventi",    <Ic.cal/>,  "Eventi"],
          ["recensioni",<Ic.star/>, "Recensioni"],
          ["spesa",     <Ic.bag/>,  "Spesa"],
          ["servizi",   <Ic.faq/>,  "Servizi utili"],
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
      <div style={{...s.darkBox,display:"flex",gap:14,alignItems:"flex-start"}}>
        <span style={{fontSize:32}}>🎨</span>
        <div><strong style={{display:"block",fontFamily:"Georgia,serif",fontSize:17,color:c.sand,fontWeight:400,marginBottom:4}}>Affreschi originali anni '50</strong><span style={{fontSize:13,color:"rgba(245,240,232,0.85)"}}>I soffitti sono affrescati a mano da artigiani sardi. Un patrimonio unico in ogni stanza.</span></div>
      </div>
      <div style={s.hlBox}><div style={s.hlTitle}>Siamo felici di ospitarvi</div><p style={{fontSize:14,lineHeight:1.7,opacity:0.92,margin:0}}>Questa guida vi aiuterà a vivere al meglio il soggiorno. Per qualsiasi necessità non esitate a contattarci.</p></div>
      <Card>
        <CT icon={<Ic.lock/>} text="Orari"/>
        <Row l="Check-in" v="dalle 15:00"/>
        <Row l="Check-out" v="entro 10:30" last/>
      </Card>
      <Card>
        <CT icon={<Ic.phone/>} text="Contatti"/>
        <a href="tel:+393284699520" style={s.tel}><span style={{fontSize:13.5,color:c.dark}}>📱 Alessandro</span><span style={{fontFamily:"Georgia,serif",fontSize:16,color:c.terra}}>328 469 9520</span></a>
        <a href="tel:+393473208852" style={s.telLast}><span style={{fontSize:13.5,color:c.dark}}>📱 Roberta</span><span style={{fontFamily:"Georgia,serif",fontSize:16,color:c.terra}}>347 320 8852</span></a>
      </Card>
    </div>
  </div>;
}

function Checkin({go}) {
  return <div style={s.app}>
    <PageHead title="Check-in / out" back={()=>go("home")} icon={<Ic.lock/>}/>
    <div style={s.content}>
      <Card><CT text="🕒 Arrivo"/>
        <Rule t={<span>Check-in disponibile <strong>dalle ore 15:00</strong></span>}/>
        <Rule t="Vi accoglieremo personalmente o con self check-in"/>
        <Rule t="Parcheggio libero in strada, facile disponibilità" last/>
      </Card>
      <Card><CT text="🚪 Partenza"/>
        <Rule t={<span>Check-out <strong>entro le ore 10:30</strong></span>}/>
        <Rule t="Lasciate le chiavi sul tavolo in cucina"/>
        <Rule t="Seguire le istruzioni raccolta differenziata (vedi FAQ)" last/>
      </Card>
      <Card><CT icon={<Ic.pin/>} text="Indirizzo"/>
        <p style={{fontFamily:"Georgia,serif",fontSize:19,marginBottom:12}}>Via Cimitero 38<br/>Uta (CA) — Sardegna</p>
        <a href="https://maps.google.com/?q=Via+Cimitero+38+Uta+Cagliari" target="_blank" rel="noreferrer" style={s.mapBtn}><Ic.mapW/> Apri in Google Maps</a>
      </Card>
      <Card><CT text="🚌 Mezzi pubblici"/>
        <Row l="ARST Linea 125 (Uta–Cagliari)" v="vicina ›" link="https://www.arst.sardegna.it/servizi-orari/"/>
        <p style={{fontSize:11,color:c.muted,padding:"4px 0 10px"}}>Prima 05:40 · Ultima ~22:00</p>
        <Row l="🚆 Treno Uta-Villaspeciosa" v="~5 min ›" link="https://www.trenitalia.com" last/>
        <p style={{fontSize:11,color:c.muted,padding:"4px 0 0"}}>06:27–20:53 · ~22 min per Cagliari</p>
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
    {icon:"🍳", name:"Cucina", items:["Piano cottura a induzione","Forno elettrico","Lavastoviglie","Frigorifero","Cappa aspirante","Climatizzatore Wi-Fi","Tavolo allungabile + 4 sedie","Divano letto 3 posti","Vetrata su veranda","Soffitto affrescato (rosa)"]},
    {icon:"🛏", name:"Camera da letto", items:["Letto matrimoniale con contenitore","Armadio ~4 metri","Settimino","Comodini con applique","Condizionatore Wi-Fi","Soffitto affrescato (geometrico oro)"]},
    {icon:"🚿", name:"Bagno", items:["Box doccia 80×100 cm","Colonna doccia con massaggio","Mobile lavandino con cassettoni","Specchio con illuminazione LED","Ventilazione automatica"]},
  ];
  return <div style={s.app}>
    <PageHead title="L'Appartamento" sub="50 m² interno + 40 m² veranda" back={()=>go("home")} icon={<Ic.building/>}/>
    <div style={s.content}>
      <div style={s.hlBox}><div style={s.hlTitle}>🎨 Affreschi anni '50</div><p style={{fontSize:14,lineHeight:1.7,opacity:0.92,margin:0}}>Ogni stanza ha un soffitto affrescato a mano da artigiani sardi. Un patrimonio artistico unico che rende Casa Uta davvero speciale.</p></div>
      <Card>
        <CT text="📐 Panoramica"/>
        <Row l="Interno" v="~50 m²"/>
        <Row l="Veranda coperta" v="~40 m²"/>
        <Row l="Giardinetto privato" v="✓"/>
        <Row l="Wi-Fi fibra" v="✓"/>
        <Row l="Climatizzatori" v="2 × Wi-Fi" last/>
      </Card>
      {rooms.map(({icon,name,items})=>(
        <Card key={name}>
          <CT text={`${icon} ${name}`}/>
          {items.map((t,i)=><Rule key={i} t={t} last={i===items.length-1}/>)}
        </Card>
      ))}
      <Card>
        <CT text="🌿 Veranda e giardino"/>
        <p style={{fontSize:14,lineHeight:1.75,color:c.muted,margin:0}}>Veranda coperta ~40 m² con accesso diretto dalla vetrata scorrevole della cucina. Giardinetto privato — ideale per colazioni all'aperto.</p>
      </Card>
      <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
        {["Wi-Fi fibra","2 Climatizzatori","Parcheggio libero","Giardino privato","Lavastoviglie","Forno"].map((t,i)=><span key={t} style={i===0?s.tagA:s.tag}>{t}</span>)}
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

function ExpCard({emoji, title, dist, desc, link, tag}) {
  return (
    <a href={link} target="_blank" rel="noreferrer"
      style={{display:"block", textDecoration:"none", background:c.white, borderRadius:18,
        padding:"16px 18px", marginBottom:10, border:`1px solid ${c.terra}15`}}
      onMouseEnter={e=>e.currentTarget.style.background=c.sand}
      onMouseLeave={e=>e.currentTarget.style.background=c.white}>
      <div style={{display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:6}}>
        <div style={{display:"flex", alignItems:"center", gap:10, flex:1, minWidth:0}}>
          <span style={{fontSize:22, flexShrink:0}}>{emoji}</span>
          <span style={{fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:17, fontWeight:400,
            color:c.dark, lineHeight:1.25}}>{title}</span>
        </div>
        <span style={{fontSize:10, color:c.terra, background:`${c.terra}15`, borderRadius:20,
          padding:"3px 9px", flexShrink:0, marginLeft:8, marginTop:2, whiteSpace:"nowrap"}}>{dist}</span>
      </div>
      <p style={{fontSize:12.5, color:c.muted, lineHeight:1.65, margin:0, paddingLeft:32}}>{desc}</p>
      {tag && <div style={{paddingLeft:32, marginTop:8}}>
        <span style={{fontSize:10, background:`${c.green}20`, color:c.green, borderRadius:10, padding:"2px 8px"}}>{tag}</span>
      </div>}
    </a>
  );
}

// ── SERVIZI UTILI (ex Dintorni — solo pratico) ─────────
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

// ── ESPLORARE (solo tempo libero, esperienze, natura) ───
function Esplorare({go}) {
  const [tab, setTab] = useState(0);

  const tabs = [
    { label:"🌿 Vicino", data:[
      {emoji:"🌳", title:"Parco S'Ollivariu", dist:"~5 min",
        desc:"Verde pubblico appena fuori dal paese. Ideale per una passeggiata mattutina o una pausa all'ombra tra i lecci.",
        link:"https://maps.google.com/?q=Parco+S+Ollivariu+Uta"},
      {emoji:"⛪", title:"Chiesa di Santa Maria", dist:"~5 min",
        desc:"Gioiello romanico del XII secolo, tra le meglio conservate del Campidano. Facciata in pietra calcarea, interno austero e suggestivo.",
        link:"https://maps.google.com/?q=Chiesa+Santa+Maria+Uta"},
      {emoji:"🦩", title:"Fenicotteri — Oasi WWF Santa Gilla", dist:"~10 min",
        desc:"Una delle colonie di fenicotteri più grandi d'Europa. Visibili quasi tutto l'anno nelle vasche della laguna, spesso a centinaia.",
        link:"https://maps.google.com/?q=Oasi+WWF+Santa+Gilla", tag:"Natura"},
      {emoji:"🧂", title:"Saline di Conti Vecchi", dist:"~10 min",
        desc:"Ex saline industriali trasformate in museo a cielo aperto. Le vasche virano dal bianco al rosa shocking: un paesaggio surreale e fotogenico.",
        link:"https://maps.google.com/?q=Saline+Conti+Vecchi+Assemini", tag:"Foto imperdibili"},
      {emoji:"🦢", title:"Parco di Molentargius", dist:"~15 min",
        desc:"Stagno metropolitano tra Cagliari e Quartu. Aironi, fenicotteri e gallinelle d'acqua a due passi dalla città. Bellissimo in bici.",
        link:"https://maps.google.com/?q=Parco+Molentargius+Cagliari", tag:"Natura"},
    ]},
    { label:"🏙️ Cagliari", data:[
      {emoji:"🏙️", title:"Marina, Castello & Via Roma", dist:"~20 min",
        desc:"Il cuore storico: il quartiere Marina per i tapas bar sardi, Castello per i panorami sul Golfo, Via Roma per la passeggiata sul porto.",
        link:"https://maps.google.com/?q=Cagliari+centro+storico"},
      {emoji:"🥾", title:"Sella del Diavolo", dist:"~20 min",
        desc:"Il promontorio che separa il Poetto da Calamosca. Sentiero tra gariga profumata, vedute mozzafiato su tutta la costa. Tramonto imperdibile.",
        link:"https://maps.google.com/?q=Sella+del+Diavolo+Cagliari", tag:"Trekking"},
      {emoji:"🏖️", title:"Spiaggia del Poetto", dist:"~15 min",
        desc:"Undici km di sabbia fine a due passi dalla città. Vivace d'estate con stabilimenti e chioschi, silenziosa e romantica in primavera.",
        link:"https://maps.google.com/?q=Spiaggia+Poetto+Cagliari"},
      {emoji:"⚽", title:"Unipol Domus — Cagliari Calcio", dist:"~25 min",
        desc:"Lo stadio del Cagliari Calcio, recentemente ristrutturato sul lungomare. Se c'è una partita, un'esperienza molto sarda.",
        link:"https://maps.google.com/?q=Unipol+Domus+Cagliari"},
    ]},
    { label:"🎨 Cultura", data:[
      {emoji:"🎨", title:"San Sperate — Murales & Sciola", dist:"~15 min",
        desc:"Il paese museo: ogni vicolo è una galleria a cielo aperto. Le sculture sonore di Pinuccio Sciola — pietre che suonano al vento — sono un'esperienza unica al mondo.",
        link:"https://maps.google.com/?q=Murales+San+Sperate+Sardegna", tag:"Da non perdere"},
      {emoji:"🚶", title:"Cammini — Sant'Efisio, Santa Barbara, 100 Torri", dist:"vari",
        desc:"Antichi percorsi di pellegrinaggio. Il Cammino di Sant'Efisio (Cagliari–Nora), quello di Santa Barbara nel Sulcis e il Cammino dei 100 Torri costiero.",
        link:"https://maps.google.com/?q=Cammino+Sant+Efisio+Sardegna", tag:"Trekking / Spirituale"},
      {emoji:"🏛️", title:"Scavi di Nora", dist:"~25 min",
        desc:"La città fenicio-romana più completa della Sardegna. Teatro, terme e mosaici affacciati direttamente sul mare. Visita guidata consigliata.",
        link:"https://maps.google.com/?q=Nora+sito+romano+Pula", tag:"Archeologia"},
      {emoji:"🏰", title:"Villa d'Orri", dist:"~25 min",
        desc:"Dimora storica ottocentesca immersa in un parco secolare. Stile neoclassico, talvolta aperta per eventi culturali e matrimoni.",
        link:"https://maps.google.com/?q=Villa+d+Orri+Sarroch"},
    ]},
    { label:"🍷 Esperienze", data:[
      {emoji:"🍷", title:"Cantine — Argiolas, Mesa, Audarya", dist:"~20–40 min",
        desc:"Il Campidano è terra di Vermentino, Cannonau e Monica. Argiolas a Serdiana e Audarya sono ottimi per degustazioni; Mesa a Sant'Anna Arresi per il Carignano.",
        link:"https://maps.google.com/?q=Cantine+Argiolas+Serdiana", tag:"Degustazione"},
      {emoji:"🏊", title:"World Aquatics High Diving — Porto Flavia", dist:"~1h 10min",
        desc:"La scogliera di Porto Flavia ospita la Coppa del Mondo di tuffi in altura organizzata da Marmeeting. Uno spettacolo unico tra mare e miniere.",
        link:"https://maps.google.com/?q=Porto+Flavia+Nebida+Sardegna", tag:"Evento sportivo"},
      {emoji:"⛵", title:"Carloforte — Isola di San Pietro", dist:"~1h 20min + traghetto",
        desc:"Borgo tabarkino raggiungibile da Portovesme o Calasetta. Vicoli colorati, tonno rosso di qualità eccezionale, mare cristallino. Una giornata intera.",
        link:"https://maps.google.com/?q=Carloforte+Isola+San+Pietro", tag:"Gita in barca"},
    ]},
    { label:"🌊 Natura", data:[
      {emoji:"🥾", title:"Sentieri del Carignano — Sulcis", dist:"~50 min",
        desc:"Vigneti a piede franco tra i più antichi d'Europa, a strapiombo sul mare. Un'escursione tra viticoltura eroica e panorami sul Sulcis.",
        link:"https://maps.google.com/?q=Carignano+del+Sulcis+vigneti", tag:"Trekking"},
      {emoji:"⛏️", title:"Miniere & Geoparco di Iglesias", dist:"~50 min",
        desc:"Patrimonio UNESCO: gallerie, laverie e paesaggi industriali trasformati in musei. Il Museo del Carbone di Serbariu è un punto di partenza ottimo.",
        link:"https://maps.google.com/?q=Miniere+Iglesias+Sardegna"},
      {emoji:"🗼", title:"Belvedere di Nebida & Pan di Zucchero", dist:"~1h 10min",
        desc:"Il Pan di Zucchero è lo scoglio più alto del Mediterraneo. Il belvedere di Nebida è uno degli scorci più fotografati della Sardegna — tramonto magico.",
        link:"https://maps.google.com/?q=Belvedere+Nebida+Sardegna", tag:"Foto imperdibili"},
      {emoji:"🏖️", title:"Chia — spiagge e dune", dist:"~45 min",
        desc:"Acque caraibiche, dune di sabbia bianca e torre spagnola medievale. Tra le spiagge più belle d'Italia. Meglio arrivare presto la mattina.",
        link:"https://maps.google.com/?q=Spiaggia+Chia+Sardegna"},
      {emoji:"🌊", title:"Villasimius & Costa Rei", dist:"~1h",
        desc:"La costa sud-est della Sardegna: acque tra le più trasparenti dell'isola, fondali per snorkeling e immersioni, e borghi quasi desertici in primavera.",
        link:"https://maps.google.com/?q=Villasimius+Sardegna"},
    ]},
  ];

  return <div style={s.app}>
    <PageHead title="Esplorare" back={()=>go("home")} icon={<Ic.pin/>}/>
    <div style={s.content}>
      <div style={s.hlBox}>
        <div style={s.hlTitle}>La Sardegna a portata di mano</div>
        <p style={{fontSize:14, lineHeight:1.7, opacity:0.92, margin:0}}>
          Da Uta raggiungi in poco tempo spiagge, siti UNESCO, cantine, sentieri e borghi unici.
        </p>
      </div>

      {/* Tab bar scrollabile */}
      <div style={{display:"flex", gap:8, overflowX:"auto", scrollbarWidth:"none",
        marginBottom:18, paddingBottom:4, WebkitOverflowScrolling:"touch"}}>
        {tabs.map(({label}, i) => (
          <button key={i} onClick={()=>setTab(i)} style={{
            flexShrink:0, background: i===tab ? c.terra : c.white,
            color: i===tab ? "white" : c.muted,
            border: `1px solid ${i===tab ? c.terra : c.sand}`,
            borderRadius:20, padding:"8px 16px", fontSize:12,
            fontFamily:"'Jost',sans-serif", cursor:"pointer",
            fontWeight: i===tab ? 500 : 300, whiteSpace:"nowrap",
          }}>
            {label}
          </button>
        ))}
      </div>

      <div style={{fontSize:11, color:c.muted, marginBottom:14, letterSpacing:"0.5px"}}>
        {tabs[tab].data.length} posti · tocca per aprire in Maps
      </div>

      {tabs[tab].data.map((p,i) => <ExpCard key={i} {...p}/>)}
    </div>
  </div>;
}

function Ristoranti({go}) {
  return <div style={s.app}>
    <PageHead title="Dove mangiare" back={()=>go("home")} icon={<Ic.coffee/>}/>
    <div style={s.content}>
      <Card><CT text="🏠 A Uta — a piedi"/>
        <Row l="🍔 Slim Pickins American Fusion ⭐4.9" v="vicino ›" link="https://maps.google.com/?q=Slim+Pickins+Uta"/>
        <Row l="🍺 U3 Birreria & Steakhouse ⭐4.8" v="vicino ›" link="https://maps.google.com/?q=U3+Birreria+Uta"/>
        <Row l="🥩 El Miura ⭐4.6" v="vicino ›" link="https://maps.google.com/?q=El+Miura+Uta"/>
        <Row l="🍽️ Ristorante Da Caterina ⭐4.4" v="vicino ›" link="https://maps.google.com/?q=Ristorante+Da+Caterina+Uta"/>
        <Row l="🍕 Sa Locanda di Gaia ⭐4.4" v="vicino ›" link="https://maps.google.com/?q=Pizzeria+Sa+Locanda+Di+Gaia+Uta" last/>
      </Card>
      <Card><CT text="☕ Bar"/>
        <Row l="Check Mate Bar — Via Stazione 52 ⭐4.7" v="vicino ›" link="https://maps.google.com/?q=Checkmate+Bar+Uta"/>
        <Row l="Caffè Roma — Uta" v="vicino ›" link="https://maps.google.com/search?q=Caffe+Roma+Uta"/>
        <Row l="New Bar Mexico — Assemini ⭐4.7" v="~15 min ›" link="https://maps.google.com/?q=New+Bar+Mexico+Assemini" last/>
      </Card>
      <Card><CT text="🚗 Circondario — 10/20 min"/>
        <Row l="⭐ Le Pizzi'ine di Niky ⭐4.9" v="~10 min ›" link="https://maps.google.com/?q=Le+Pizziine+di+Niky+Decimomannu"/>
        <Row l="🐟 Ci Pensa Marco ⭐4.8" v="~10 min ›" link="https://maps.google.com/?q=Ci+Pensa+Marco+Decimomannu"/>
        <Row l="🍽️ Thalìa — Elmas" v="~10 min ›" link="https://maps.google.com/?q=Ristorante+Thalia+Elmas"/>
        <Row l="🍺 Gasthaus — Assemini ⭐4.6" v="~15 min ›" link="https://maps.google.com/?q=Gasthaus+Assemini"/>
        <Row l="🍕 Malloci Pizza e Cucina ⭐4.4" v="~15 min ›" link="https://maps.google.com/?q=Malloci+Assemini"/>
        <Row l="🍱 Makito Poke & Sushi ⭐4.7" v="~15 min ›" link="https://maps.google.com/?q=Makito+Assemini"/>
        <Row l="⭐ Lughènte Fine Dining ⭐4.9" v="~20 min ›" link="https://maps.google.com/?q=Lughente+Capoterra"/>
        <Row l="🌊 Arcadia Restaurant ⭐4.5" v="~20 min ›" link="https://maps.google.com/?q=Arcadia+Restaurant+Capoterra" last/>
      </Card>
      <Card><CT text="🐟 Cagliari — pesce fresco ~20 min"/>
        <Row l="🐠 Stella Marina di Montecristo ⭐4.6" v="›" link="https://maps.google.com/?q=Stella+Marina+di+Montecristo+Cagliari"/>
        <Row l="🦐 Mari Mannu ⭐4.6" v="›" link="https://maps.google.com/?q=Mari+Mannu+Cagliari"/>
        <Row l="🐟 Mondo & Luca ⭐4.6" v="›" link="https://maps.google.com/?q=Mondo+e+Luca+Cagliari" last/>
      </Card>
      <div style={{...s.darkBox,textAlign:"center"}}><p style={{fontSize:12,color:"rgba(245,240,232,0.7)",lineHeight:1.7,margin:0}}>💡 Consiglio: prenotate sempre nel weekend.<br/>Da provare: <strong style={{color:c.sand}}>fregola</strong>, <strong style={{color:c.sand}}>malloreddus</strong>, <strong style={{color:c.sand}}>porceddu</strong>.</p></div>
    </div>
  </div>;
}

function Eventi({go}) {
  const evs = [
    {m:"Gennaio",evs:[{d:"12 gennaio",t:"🕯️ Festa di Santa Greca (Decimomannu)"}]},
    {m:"Maggio",evs:[
      {d:"1–4 maggio",t:"🎖️ Festa di Sant'Efisio (Cagliari) — processione ininterrotta dal 1657",link:"https://www.festadisantefisio.com"},
      {d:"14 maggio",t:"🌸 Santa Giusta, patrona di Uta"},
      {d:"Primo sabato dopo il 14",t:"🌾 Sant'Isidoro (Uta) — festa agricola"},
    ]},
    {m:"Agosto",evs:[
      {d:"13 agosto",t:"⚔️ Corteo Storico Medievale (Iglesias) — 700 figuranti"},
      {d:"15 agosto",t:"🕯️ Assunzione B.V. Maria + processione solenne (Uta)"},
    ]},
    {m:"Settembre",evs:[
      {d:"5–9 settembre",t:"🌟 Festa di Santa Maria (Uta) — la più attesa! Concerti, fuochi d'artificio"},
      {d:"Fine settembre",t:"🎊 Festa di Santa Greca (Decimomannu)"},
    ]},
    {m:"Novembre",evs:[
      {d:"Terza domenica",t:"🏃 Maratonina Città di Uta — 21 km, 10,5 km, family run 4 km · ore 10:00 da Via Stazione",link:"https://maratoninadiuta.it"},
    ]},
    {m:"Dicembre",evs:[{d:"13 dicembre",t:"🕯️ Santa Lucia (Uta)"}]},
  ];
  return <div style={s.app}>
    <PageHead title="Feste ed eventi" back={()=>go("home")} icon={<Ic.cal/>}/>
    <div style={s.content}>
      <div style={{...s.darkBox,display:"flex",gap:14,alignItems:"flex-start",marginBottom:12}}><span style={{fontSize:28}}>🎊</span><div><strong style={{display:"block",fontFamily:"Georgia,serif",fontSize:16,color:c.sand,fontWeight:400,marginBottom:4}}>Tradizioni del Sud Sardegna</strong><span style={{fontSize:13,color:"rgba(245,240,232,0.85)"}}>Feste religiose e manifestazioni culturali tra le più importanti dell'isola.</span></div></div>
      {evs.map(({m,evs:ee})=>(
        <Card key={m}><CT text={m}/>
          {ee.map((e,i)=>(
            <div key={i} style={i===ee.length-1?s.ruleLast:s.rule}><div style={s.dot}/>
              <span><strong>{e.d}</strong> — {e.link?<a href={e.link} target="_blank" rel="noreferrer" style={{color:c.terra}}>{e.t}</a>:e.t}</span>
            </div>
          ))}
        </Card>
      ))}
      <div style={{...s.darkBox,textAlign:"center"}}><p style={{fontSize:12,color:"rgba(245,240,232,0.7)",lineHeight:1.7,margin:0}}>💡 Se il soggiorno coincide con la <strong style={{color:c.sand}}>Festa di Santa Maria</strong> (5–9 sett.) o con <strong style={{color:c.sand}}>Sant'Efisio</strong> siete fortunatissimi!</p></div>
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
