import{newsArticles as ea,topHeadlines as Vc}from"./news-data-nAq92Uvw.js";import{leagueFixtureCounts as Wc,upcomingFixtures as $c}from"./fixtures-data-NFSFzUxN.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();class Xc{constructor(e){this.routes=e,this.currentPage=null,this.app=document.getElementById("app"),this.basePath="./".replace(/\/$/,""),window.addEventListener("popstate",()=>this.resolve()),document.addEventListener("click",t=>{const n=t.target.closest("[data-page]");if(n){t.preventDefault();const a=n.dataset.page;this.navigate(`/${a==="dashboard"?"":a}`)}})}navigate(e){const t=this.basePath+(e||"/");window.history.pushState(null,"",t),this.resolve()}resolve(){let e=window.location.pathname;this.basePath&&e.startsWith(this.basePath)&&(e=e.slice(this.basePath.length)||"/");let t=e==="/"?"dashboard":e.slice(1).split("/")[0];const n=this.routes[t]||this.routes.dashboard;if(this.currentPage!==t){if(this.currentPage=t,document.querySelectorAll(".nav-link, .mobile-nav-link").forEach(a=>{a.classList.toggle("active",a.dataset.page===t)}),this.app.classList.remove("page-enter"),this.app.offsetWidth,this.app.innerHTML="",n&&typeof n.render=="function"){const a=n.render();typeof a=="string"?this.app.innerHTML=a:a instanceof HTMLElement&&this.app.appendChild(a),this.app.classList.add("page-enter"),typeof n.mount=="function"&&requestAnimationFrame(()=>n.mount())}window.scrollTo(0,0)}}}const Yc="modulepreload",qc=function(i,e){return new URL(i,e).href},go={},Jt=function(e,t,n){let a=Promise.resolve();if(t&&t.length>0){const r=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");a=Promise.allSettled(t.map(c=>{if(c=qc(c,n),c in go)return;go[c]=!0;const f=c.endsWith(".css"),g=f?'[rel="stylesheet"]':"";if(!!n)for(let y=r.length-1;y>=0;y--){const x=r[y];if(x.href===c&&(!f||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${g}`))return;const m=document.createElement("link");if(m.rel=f?"stylesheet":Yc,f||(m.as="script"),m.crossOrigin="",m.href=c,l&&m.setAttribute("nonce",l),document.head.appendChild(m),f)return new Promise((y,x)=>{m.addEventListener("load",y),m.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(r){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r}return a.then(r=>{for(const o of r||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})},$i=[{id:"arsenal",name:"Arsenal",fullName:"Arsenal Football Club",nickname:"The Gunners",founded:1886,stadium:"Emirates Stadium",capacity:60704,city:"London",manager:"Mikel Arteta",colors:["#EF0107","#FFFFFF"],leagueTitles:13,faCups:14,leagueCups:2,championsLeague:0,europaLeague:0,currentRank:1,attackRating:88,defenseRating:90,overallRating:89,keyPlayers:["Bukayo Saka","William Saliba","Declan Rice"],achievements:["Invincibles 2003-04","13 League Titles","14 FA Cups"],description:"Arsenal are known for their attacking football and are the only club to have completed a 38-game Premier League season unbeaten."},{id:"aston-villa",name:"Aston Villa",fullName:"Aston Villa Football Club",nickname:"The Villans",founded:1874,stadium:"Villa Park",capacity:42682,city:"Birmingham",manager:"Unai Emery",colors:["#670E36","#95BFE5"],leagueTitles:7,faCups:7,leagueCups:5,championsLeague:1,europaLeague:0,currentRank:4,attackRating:83,defenseRating:80,overallRating:82,keyPlayers:["Ollie Watkins","Emiliano Martinez","John McGinn"],achievements:["1982 European Cup Winners","7 League Titles","7 FA Cups"],description:"A historic Midlands club that achieved a top-four finish in the 2023-24 season to return to the Champions League."},{id:"bournemouth",name:"Bournemouth",fullName:"Athletic Football Club Bournemouth",nickname:"The Cherries",founded:1899,stadium:"Vitality Stadium",capacity:11307,city:"Bournemouth",manager:"Andoni Iraola",colors:["#B50E12","#000000"],leagueTitles:0,faCups:0,leagueCups:0,championsLeague:0,europaLeague:0,currentRank:12,attackRating:78,defenseRating:76,overallRating:77,keyPlayers:["Dominic Solanke","Illia Zabarnyi","Lewis Cook"],achievements:["Championship Winners 2014-15"],description:"The Cherries play at the smallest stadium in the Premier League but punch above their weight with high-intensity pressing football."},{id:"brentford",name:"Brentford",fullName:"Brentford Football Club",nickname:"The Bees",founded:1889,stadium:"Gtech Community Stadium",capacity:17250,city:"London",manager:"Thomas Frank",colors:["#E30613","#FFFFFF"],leagueTitles:0,faCups:0,leagueCups:0,championsLeague:0,europaLeague:0,currentRank:16,attackRating:77,defenseRating:75,overallRating:76,keyPlayers:["Ivan Toney","Bryan Mbeumo","Mathias Jensen"],achievements:["Promotion to PL in 2020-21"],description:"Known for their data-driven approach and strong home record, Brentford have established themselves as a solid top-flight team."},{id:"brighton",name:"Brighton",fullName:"Brighton & Hove Albion Football Club",nickname:"The Seagulls",founded:1901,stadium:"Amex Stadium",capacity:31800,city:"Brighton",manager:"Fabian Hurzeler",colors:["#0057B8","#FFFFFF"],leagueTitles:0,faCups:0,leagueCups:0,championsLeague:0,europaLeague:0,currentRank:11,attackRating:81,defenseRating:77,overallRating:79,keyPlayers:["Kaoru Mitoma","Lewis Dunk","Pascal Gross"],achievements:["First European Qualification 2022-23"],description:"Praised for their exceptional recruitment network and attractive style of play regardless of managerial changes."},{id:"chelsea",name:"Chelsea",fullName:"Chelsea Football Club",nickname:"The Blues",founded:1905,stadium:"Stamford Bridge",capacity:40341,city:"London",manager:"Enzo Maresca",colors:["#034694","#FFFFFF"],leagueTitles:6,faCups:8,leagueCups:5,championsLeague:2,europaLeague:2,currentRank:6,attackRating:84,defenseRating:81,overallRating:83,keyPlayers:["Cole Palmer","Enzo Fernandez","Reece James"],achievements:["2 Champions League Titles","6 League Titles","8 FA Cups"],description:"One of the most successful English clubs of the 21st century, recently undergoing a major transition with heavy investment in youth."},{id:"crystal-palace",name:"Crystal Palace",fullName:"Crystal Palace Football Club",nickname:"The Eagles",founded:1905,stadium:"Selhurst Park",capacity:25486,city:"London",manager:"Oliver Glasner",colors:["#1B458F","#C4122E"],leagueTitles:0,faCups:0,leagueCups:0,championsLeague:0,europaLeague:0,currentRank:10,attackRating:80,defenseRating:78,overallRating:79,keyPlayers:["Eberechi Eze","Marc Guehi","Jean-Philippe Mateta"],achievements:["FA Cup Finalists 1990, 2016"],description:"A staple of the Premier League with a fierce atmosphere at Selhurst Park, recently transitioning to a more expansive attacking style."},{id:"everton",name:"Everton",fullName:"Everton Football Club",nickname:"The Toffees",founded:1878,stadium:"Goodison Park",capacity:39572,city:"Liverpool",manager:"Sean Dyche",colors:["#003399","#FFFFFF"],leagueTitles:9,faCups:5,leagueCups:0,championsLeague:0,europaLeague:0,currentRank:15,attackRating:76,defenseRating:79,overallRating:77,keyPlayers:["Jordan Pickford","James Tarkowski","Dwight McNeil"],achievements:["9 League Titles","5 FA Cups","1985 European Cup Winners Cup"],description:"One of the founder members of the Football League, holding the record for the most top-flight seasons played."},{id:"fulham",name:"Fulham",fullName:"Fulham Football Club",nickname:"The Cottagers",founded:1879,stadium:"Craven Cottage",capacity:25700,city:"London",manager:"Marco Silva",colors:["#FFFFFF","#000000"],leagueTitles:0,faCups:0,leagueCups:0,championsLeague:0,europaLeague:0,currentRank:13,attackRating:79,defenseRating:77,overallRating:78,keyPlayers:["Bernd Leno","Andreas Pereira","Antonee Robinson"],achievements:["Europa League Finalists 2010"],description:"The oldest professional football team in London, playing at the historic and picturesque Craven Cottage by the River Thames."},{id:"ipswich-town",name:"Ipswich Town",fullName:"Ipswich Town Football Club",nickname:"The Tractor Boys",founded:1878,stadium:"Portman Road",capacity:29673,city:"Ipswich",manager:"Kieran McKenna",colors:["#0000FF","#FFFFFF"],leagueTitles:1,faCups:1,leagueCups:0,championsLeague:0,europaLeague:0,currentRank:20,attackRating:75,defenseRating:74,overallRating:74,keyPlayers:["Conor Chaplin","Leif Davis","Sam Morsy"],achievements:["1961-62 League Champions","1981 UEFA Cup Winners"],description:"Returned to the Premier League in 2024 after back-to-back promotions, ending a 22-year absence from the top flight."},{id:"leicester-city",name:"Leicester City",fullName:"Leicester City Football Club",nickname:"The Foxes",founded:1884,stadium:"King Power Stadium",capacity:32261,city:"Leicester",manager:"Steve Cooper",colors:["#003090","#FFFFFF"],leagueTitles:1,faCups:1,leagueCups:3,championsLeague:0,europaLeague:0,currentRank:18,attackRating:76,defenseRating:75,overallRating:75,keyPlayers:["Kiernan Dewsbury-Hall","Wout Faes","Jamie Vardy"],achievements:["Premier League Champions 2015-16","FA Cup 2021"],description:"Famous for arguably the greatest sporting miracle of all time when they won the Premier League title at odds of 5000-1 in 2016."},{id:"liverpool",name:"Liverpool",fullName:"Liverpool Football Club",nickname:"The Reds",founded:1892,stadium:"Anfield",capacity:61276,city:"Liverpool",manager:"Arne Slot",colors:["#C8102E","#FFFFFF"],leagueTitles:19,faCups:8,leagueCups:10,championsLeague:6,europaLeague:3,currentRank:5,attackRating:89,defenseRating:86,overallRating:88,keyPlayers:["Mohamed Salah","Virgil van Dijk","Trent Alexander-Arnold"],achievements:["19 League Titles","6 European Cups/Champions Leagues","8 FA Cups"],description:"One of the most successful clubs in English football history, famous for magical European nights at Anfield."},{id:"manchester-city",name:"Manchester City",fullName:"Manchester City Football Club",nickname:"The Citizens",founded:1880,stadium:"Etihad Stadium",capacity:53400,city:"Manchester",manager:"Pep Guardiola",colors:["#6CABDD","#FFFFFF"],leagueTitles:10,faCups:7,leagueCups:8,championsLeague:1,europaLeague:0,currentRank:2,attackRating:92,defenseRating:88,overallRating:90,keyPlayers:["Erling Haaland","Kevin De Bruyne","Rodri"],achievements:["100 Point Season 2017-18","Treble Winners 2022-23","First to win 4 consecutive PL titles"],description:"The dominant force in English football over the last decade, renowned for their mesmerizing possession-based football under Pep Guardiola."},{id:"manchester-united",name:"Manchester United",fullName:"Manchester United Football Club",nickname:"The Red Devils",founded:1878,stadium:"Old Trafford",capacity:74310,city:"Manchester",manager:"Erik ten Hag",colors:["#DA291C","#000000"],leagueTitles:20,faCups:13,leagueCups:6,championsLeague:3,europaLeague:1,currentRank:3,attackRating:82,defenseRating:79,overallRating:81,keyPlayers:["Bruno Fernandes","Kobbie Mainoo","Alejandro Garnacho"],achievements:["20 League Titles","Treble Winners 1998-99","13 FA Cups"],description:"The most successful club in English domestic football history, boasting a massive global fanbase and rich heritage."},{id:"newcastle-united",name:"Newcastle United",fullName:"Newcastle United Football Club",nickname:"The Magpies",founded:1892,stadium:"St. James' Park",capacity:52305,city:"Newcastle",manager:"Eddie Howe",colors:["#000000","#FFFFFF"],leagueTitles:4,faCups:6,leagueCups:0,championsLeague:0,europaLeague:0,currentRank:7,attackRating:85,defenseRating:81,overallRating:83,keyPlayers:["Alexander Isak","Bruno Guimaraes","Anthony Gordon"],achievements:["4 League Titles","6 FA Cups","Champions League Return 2023"],description:"A massive one-city club backed by passionate supporters, currently enjoying a resurgence fueled by new ownership."},{id:"nottingham-forest",name:"Nottingham Forest",fullName:"Nottingham Forest Football Club",nickname:"The Tricky Trees",founded:1865,stadium:"City Ground",capacity:30445,city:"Nottingham",manager:"Nuno Espirito Santo",colors:["#DD0000","#FFFFFF"],leagueTitles:1,faCups:2,leagueCups:4,championsLeague:2,europaLeague:0,currentRank:17,attackRating:77,defenseRating:75,overallRating:76,keyPlayers:["Morgan Gibbs-White","Murillo","Taiwo Awoniyi"],achievements:["Back-to-back European Cups 1979, 1980","1977-78 League Champions"],description:"A club steeped in history that remarkably won back-to-back European Cups under the legendary Brian Clough."},{id:"southampton",name:"Southampton",fullName:"Southampton Football Club",nickname:"The Saints",founded:1885,stadium:"St Mary's Stadium",capacity:32384,city:"Southampton",manager:"Russell Martin",colors:["#D71920","#FFFFFF"],leagueTitles:0,faCups:1,leagueCups:0,championsLeague:0,europaLeague:0,currentRank:19,attackRating:75,defenseRating:73,overallRating:74,keyPlayers:["Kyle Walker-Peters","Adam Armstrong","Flynn Downes"],achievements:["1976 FA Cup Winners"],description:"Returned to the Premier League via the 2024 playoffs, known for their esteemed youth academy that produced Alan Shearer and Gareth Bale."},{id:"tottenham-hotspur",name:"Tottenham Hotspur",fullName:"Tottenham Hotspur Football Club",nickname:"Spurs",founded:1882,stadium:"Tottenham Hotspur Stadium",capacity:62850,city:"London",manager:"Ange Postecoglou",colors:["#132257","#FFFFFF"],leagueTitles:2,faCups:8,leagueCups:4,championsLeague:0,europaLeague:0,currentRank:5,attackRating:86,defenseRating:81,overallRating:84,keyPlayers:["Son Heung-min","James Maddison","Cristian Romero"],achievements:["First Double Winners in 20th Century (1961)","8 FA Cups"],description:'Famed for their motto "To Dare Is To Do," Spurs now play in one of the most technologically advanced stadiums in world football.'},{id:"west-ham-united",name:"West Ham United",fullName:"West Ham United Football Club",nickname:"The Hammers",founded:1895,stadium:"London Stadium",capacity:62500,city:"London",manager:"Julen Lopetegui",colors:["#7A263A","#1BB1E7"],leagueTitles:0,faCups:3,leagueCups:0,championsLeague:0,europaLeague:0,currentRank:9,attackRating:82,defenseRating:79,overallRating:81,keyPlayers:["Jarrod Bowen","Mohammed Kudus","Lucas Paqueta"],achievements:["Europa Conference League Winners 2023","3 FA Cups"],description:'The "Academy of Football" won their first major trophy in 43 years by lifting the Europa Conference League in 2023.'},{id:"wolverhampton-wanderers",name:"Wolverhampton Wanderers",fullName:"Wolverhampton Wanderers Football Club",nickname:"Wolves",founded:1877,stadium:"Molineux Stadium",capacity:32050,city:"Wolverhampton",manager:"Gary O'Neil",colors:["#FDB913","#231F20"],leagueTitles:3,faCups:4,leagueCups:2,championsLeague:0,europaLeague:0,currentRank:14,attackRating:79,defenseRating:76,overallRating:78,keyPlayers:["Matheus Cunha","Hwang Hee-chan","Pedro Neto"],achievements:["3 League Titles","4 FA Cups","Pioneers of European Club Football"],description:"A historic club whose mid-20th century floodlit friendlies helped inspire the creation of the European Cup."}],Us=[{season:"1992-93",team:"Manchester United",points:84,manager:"Alex Ferguson"},{season:"1993-94",team:"Manchester United",points:92,manager:"Alex Ferguson"},{season:"1994-95",team:"Blackburn Rovers",points:89,manager:"Kenny Dalglish"},{season:"1995-96",team:"Manchester United",points:82,manager:"Alex Ferguson"},{season:"1996-97",team:"Manchester United",points:75,manager:"Alex Ferguson"},{season:"1997-98",team:"Arsenal",points:78,manager:"Arsene Wenger"},{season:"1998-99",team:"Manchester United",points:79,manager:"Alex Ferguson"},{season:"1999-00",team:"Manchester United",points:91,manager:"Alex Ferguson"},{season:"2000-01",team:"Manchester United",points:80,manager:"Alex Ferguson"},{season:"2001-02",team:"Arsenal",points:87,manager:"Arsene Wenger"},{season:"2002-03",team:"Manchester United",points:83,manager:"Alex Ferguson"},{season:"2003-04",team:"Arsenal",points:90,manager:"Arsene Wenger"},{season:"2004-05",team:"Chelsea",points:95,manager:"Jose Mourinho"},{season:"2005-06",team:"Chelsea",points:91,manager:"Jose Mourinho"},{season:"2006-07",team:"Manchester United",points:89,manager:"Alex Ferguson"},{season:"2007-08",team:"Manchester United",points:87,manager:"Alex Ferguson"},{season:"2008-09",team:"Manchester United",points:90,manager:"Alex Ferguson"},{season:"2009-10",team:"Chelsea",points:86,manager:"Carlo Ancelotti"},{season:"2010-11",team:"Manchester United",points:80,manager:"Alex Ferguson"},{season:"2011-12",team:"Manchester City",points:89,manager:"Roberto Mancini"},{season:"2012-13",team:"Manchester United",points:89,manager:"Alex Ferguson"},{season:"2013-14",team:"Manchester City",points:86,manager:"Manuel Pellegrini"},{season:"2014-15",team:"Chelsea",points:87,manager:"Jose Mourinho"},{season:"2015-16",team:"Leicester City",points:81,manager:"Claudio Ranieri"},{season:"2016-17",team:"Chelsea",points:93,manager:"Antonio Conte"},{season:"2017-18",team:"Manchester City",points:100,manager:"Pep Guardiola"},{season:"2018-19",team:"Manchester City",points:98,manager:"Pep Guardiola"},{season:"2019-20",team:"Liverpool",points:99,manager:"Jurgen Klopp"},{season:"2020-21",team:"Manchester City",points:86,manager:"Pep Guardiola"},{season:"2021-22",team:"Manchester City",points:93,manager:"Pep Guardiola"},{season:"2022-23",team:"Manchester City",points:89,manager:"Pep Guardiola"},{season:"2023-24",team:"Manchester City",points:91,manager:"Pep Guardiola"},{season:"2024-25",team:"Liverpool",points:89,manager:"Arne Slot"},{season:"2025-26",team:"Arsenal",points:85,manager:"Mikel Arteta"}],Ns=[{season:"1992-93",player:"Teddy Sheringham",club:"Tottenham Hotspur",goals:22},{season:"1993-94",player:"Andy Cole",club:"Newcastle United",goals:34},{season:"1994-95",player:"Alan Shearer",club:"Blackburn Rovers",goals:34},{season:"1995-96",player:"Alan Shearer",club:"Blackburn Rovers",goals:31},{season:"1996-97",player:"Alan Shearer",club:"Newcastle United",goals:25},{season:"1997-98",player:"Dion Dublin / Michael Owen / Chris Sutton",club:"Coventry / Liverpool / Blackburn",goals:18},{season:"1998-99",player:"Jimmy Floyd Hasselbaink / Michael Owen / Dwight Yorke",club:"Leeds / Liverpool / Man Utd",goals:18},{season:"1999-00",player:"Kevin Phillips",club:"Sunderland",goals:30},{season:"2000-01",player:"Jimmy Floyd Hasselbaink",club:"Chelsea",goals:23},{season:"2001-02",player:"Thierry Henry",club:"Arsenal",goals:24},{season:"2002-03",player:"Ruud van Nistelrooy",club:"Manchester United",goals:25},{season:"2003-04",player:"Thierry Henry",club:"Arsenal",goals:30},{season:"2004-05",player:"Thierry Henry",club:"Arsenal",goals:25},{season:"2005-06",player:"Thierry Henry",club:"Arsenal",goals:27},{season:"2006-07",player:"Didier Drogba",club:"Chelsea",goals:20},{season:"2007-08",player:"Cristiano Ronaldo",club:"Manchester United",goals:31},{season:"2008-09",player:"Nicolas Anelka",club:"Chelsea",goals:19},{season:"2009-10",player:"Didier Drogba",club:"Chelsea",goals:29},{season:"2010-11",player:"Dimitar Berbatov / Carlos Tevez",club:"Man Utd / Man City",goals:20},{season:"2011-12",player:"Robin van Persie",club:"Arsenal",goals:30},{season:"2012-13",player:"Robin van Persie",club:"Manchester United",goals:26},{season:"2013-14",player:"Luis Suarez",club:"Liverpool",goals:31},{season:"2014-15",player:"Sergio Aguero",club:"Manchester City",goals:26},{season:"2015-16",player:"Harry Kane",club:"Tottenham Hotspur",goals:25},{season:"2016-17",player:"Harry Kane",club:"Tottenham Hotspur",goals:29},{season:"2017-18",player:"Mohamed Salah",club:"Liverpool",goals:32},{season:"2018-19",player:"Pierre-Emerick Aubameyang / Sadio Mane / Mohamed Salah",club:"Arsenal / Liverpool / Liverpool",goals:22},{season:"2019-20",player:"Jamie Vardy",club:"Leicester City",goals:23},{season:"2020-21",player:"Harry Kane",club:"Tottenham Hotspur",goals:23},{season:"2021-22",player:"Mohamed Salah / Son Heung-min",club:"Liverpool / Tottenham Hotspur",goals:23},{season:"2022-23",player:"Erling Haaland",club:"Manchester City",goals:36},{season:"2023-24",player:"Erling Haaland",club:"Manchester City",goals:27},{season:"2024-25",player:"Mohamed Salah",club:"Liverpool",goals:29},{season:"2025-26",player:"Erling Haaland",club:"Manchester City",goals:27}],Kc={mostGoalsSeason:{player:"Erling Haaland",goals:36,season:"2022-23",club:"Manchester City"},mostGoalsAllTime:{player:"Alan Shearer",goals:260},mostAssistsAllTime:{player:"Ryan Giggs",assists:162},mostAppearances:{player:"Gareth Barry",appearances:653},biggestWin:{match:"Manchester United 9-0 Ipswich / Leicester 9-0 Southampton / Man Utd 9-0 Southampton / Liverpool 9-0 Bournemouth",score:"9-0",season:"Multiple"},mostPointsSeason:{team:"Manchester City",points:100,season:"2017-18"},leastPointsSeason:{team:"Derby County",points:11,season:"2007-08"},longestUnbeaten:{team:"Arsenal",games:49,season:"2003-04"},mostConsecutiveWins:{team:"Manchester City / Liverpool",wins:18,season:"2017-18 / 2019-20"},fastestGoal:{player:"Shane Long",seconds:7.69,match:"Southampton vs Watford (2018-19)"},mostCleanSheets:{player:"Petr Cech",cleanSheets:24,season:"2004-05"},youngestScorer:{player:"James Vaughan",age:"16 years, 271 days",match:"Everton vs Crystal Palace (2004-05)"}},Jc={"Manchester United":13,"Manchester City":8,Chelsea:5,Arsenal:3,"Blackburn Rovers":1,"Leicester City":1,Liverpool:1},Xi=[{id:"real-madrid",name:"Real Madrid",fullName:"Real Madrid Club de Fútbol",nickname:"Los Blancos",founded:1902,stadium:"Santiago Bernabéu",capacity:83186,city:"Madrid",manager:"Carlo Ancelotti",colors:["#FFFFFF","#FEBE10"],leagueTitles:36,copas:20,supercopas:13,championsLeague:15,europaLeague:2,currentRank:2,attackRating:92,defenseRating:88,overallRating:90,keyPlayers:["Vinicius Jr","Bellingham","Mbappé"],achievements:["36 La Liga titles","15 Champions League titles","Most successful club in European history"],description:"The most successful club in Spanish football and European history, famous for its Galácticos and winning mentality."},{id:"barcelona",name:"Barcelona",fullName:"Futbol Club Barcelona",nickname:"Blaugrana",founded:1899,stadium:"Spotify Camp Nou",capacity:99354,city:"Barcelona",manager:"Hansi Flick",colors:["#004D98","#A50044"],leagueTitles:27,copas:31,supercopas:14,championsLeague:5,europaLeague:0,currentRank:1,attackRating:90,defenseRating:85,overallRating:88,keyPlayers:["Lamine Yamal","Robert Lewandowski","Pedri"],achievements:["27 La Liga titles","31 Copa del Rey titles","5 Champions League titles"],description:'A global powerhouse historically known for its "tiki-taka" style and strong Catalan identity.'},{id:"atletico-madrid",name:"Atlético Madrid",fullName:"Club Atlético de Madrid",nickname:"Los Colchoneros",founded:1903,stadium:"Cívitas Metropolitano",capacity:70460,city:"Madrid",manager:"Diego Simeone",colors:["#CB3524","#FFFFFF"],leagueTitles:11,copas:10,supercopas:2,championsLeague:0,europaLeague:3,currentRank:3,attackRating:85,defenseRating:89,overallRating:87,keyPlayers:["Antoine Griezmann","Jan Oblak","Koke"],achievements:["11 La Liga titles","3 Europa League titles","3 Champions League runner-up"],description:"Renowned for their tactical discipline, intensity, and defensive solidity under Diego Simeone."},{id:"athletic-bilbao",name:"Athletic Bilbao",fullName:"Athletic Club",nickname:"Los Leones",founded:1898,stadium:"San Mamés",capacity:53331,city:"Bilbao",manager:"Ernesto Valverde",colors:["#EE2523","#FFFFFF"],leagueTitles:8,copas:24,supercopas:3,championsLeague:0,europaLeague:0,currentRank:5,attackRating:82,defenseRating:83,overallRating:82,keyPlayers:["Iñaki Williams","Nico Williams","Unai Simón"],achievements:["8 La Liga titles","24 Copa del Rey titles","Never relegated from La Liga"],description:"Famous for their unique policy of only fielding players of Basque origin or development."},{id:"real-sociedad",name:"Real Sociedad",fullName:"Real Sociedad de Fútbol",nickname:"Txuri-Urdin",founded:1909,stadium:"Reale Arena",capacity:39500,city:"San Sebastián",manager:"Imanol Alguacil",colors:["#0067B1","#FFFFFF"],leagueTitles:2,copas:3,supercopas:1,championsLeague:0,europaLeague:0,currentRank:6,attackRating:81,defenseRating:82,overallRating:81,keyPlayers:["Mikel Oyarzabal","Takefusa Kubo","Martín Zubimendi"],achievements:["2 La Liga titles","3 Copa del Rey titles"],description:"A traditional Basque club with a rich history and a strong focus on youth development."},{id:"real-betis",name:"Real Betis",fullName:"Real Betis Balompié",nickname:"Los Verdiblancos",founded:1907,stadium:"Benito Villamarín",capacity:60721,city:"Seville",manager:"Manuel Pellegrini",colors:["#008A3F","#FFFFFF"],leagueTitles:1,copas:3,supercopas:0,championsLeague:0,europaLeague:0,currentRank:7,attackRating:80,defenseRating:78,overallRating:79,keyPlayers:["Nabil Fekir","Isco","Marc Roca"],achievements:["1 La Liga title","3 Copa del Rey titles"],description:"A wildly popular club in Andalusia known for their passionate supporters and attacking football."},{id:"villarreal",name:"Villarreal",fullName:"Villarreal Club de Fútbol",nickname:"El Submarino Amarillo",founded:1923,stadium:"Estadio de la Cerámica",capacity:23e3,city:"Vila-real",manager:"Marcelino",colors:["#FCEE09","#005CA5"],leagueTitles:0,copas:0,supercopas:0,championsLeague:0,europaLeague:1,currentRank:8,attackRating:80,defenseRating:77,overallRating:78,keyPlayers:["Gerard Moreno","Dani Parejo","Álex Baena"],achievements:["1 Europa League title","Champions League semi-finalists"],description:'The "Yellow Submarine" has punched above its weight for decades, achieving European success.'},{id:"girona",name:"Girona",fullName:"Girona Futbol Club",nickname:"Blanquivermells",founded:1930,stadium:"Montilivi",capacity:14624,city:"Girona",manager:"Míchel",colors:["#E30613","#FFFFFF"],leagueTitles:0,copas:0,supercopas:0,championsLeague:0,europaLeague:0,currentRank:4,attackRating:84,defenseRating:78,overallRating:81,keyPlayers:["Viktor Tsyhankov","Yangel Herrera","Cristhian Stuani"],achievements:["Qualified for Champions League (2023/24)"],description:"A club that recently rose to prominence with an exciting, attacking brand of football."},{id:"osasuna",name:"Osasuna",fullName:"Club Atlético Osasuna",nickname:"Los Rojillos",founded:1920,stadium:"El Sadar",capacity:23516,city:"Pamplona",manager:"Vicente Moreno",colors:["#D11241","#002654"],leagueTitles:0,copas:0,supercopas:0,championsLeague:0,europaLeague:0,currentRank:11,attackRating:75,defenseRating:76,overallRating:75,keyPlayers:["Ante Budimir","Aimar Oroz","Sergio Herrera"],achievements:["Copa del Rey runners-up (2005, 2023)"],description:"A tough, hardworking team from Navarre with a formidable home atmosphere."},{id:"alaves",name:"Alavés",fullName:"Deportivo Alavés",nickname:"El Glorioso",founded:1921,stadium:"Mendizorroza",capacity:19840,city:"Vitoria-Gasteiz",manager:"Luis García Plaza",colors:["#0000FF","#FFFFFF"],leagueTitles:0,copas:0,supercopas:0,championsLeague:0,europaLeague:0,currentRank:10,attackRating:74,defenseRating:75,overallRating:74,keyPlayers:["Luis Rioja","Antonio Blanco","Ander Guevara"],achievements:["UEFA Cup runners-up (2001)"],description:"A resilient club from the Basque Country famous for their incredible 2001 UEFA Cup final."},{id:"celta-vigo",name:"Celta Vigo",fullName:"Real Club Celta de Vigo",nickname:"Los Celestes",founded:1923,stadium:"Abanca-Balaídos",capacity:29e3,city:"Vigo",manager:"Claudio Giráldez",colors:["#87CEEB","#FFFFFF"],leagueTitles:0,copas:0,supercopas:0,championsLeague:0,europaLeague:0,currentRank:13,attackRating:76,defenseRating:73,overallRating:74,keyPlayers:["Iago Aspas","Jonathan Bamba","Óscar Mingueza"],achievements:["Intertoto Cup winners (2000)"],description:"A Galician club known for producing technically gifted players and entertaining football."},{id:"mallorca",name:"Mallorca",fullName:"Real Club Deportivo Mallorca",nickname:"Los Piratas",founded:1916,stadium:"Son Moix",capacity:23142,city:"Palma",manager:"Jagoba Arrasate",colors:["#E30613","#000000"],leagueTitles:0,copas:1,supercopas:1,championsLeague:0,europaLeague:0,currentRank:15,attackRating:73,defenseRating:76,overallRating:74,keyPlayers:["Vedat Muriqi","Sergi Darder","Dani Rodríguez"],achievements:["Copa del Rey winners (2003)","Cup Winners Cup runners-up (1999)"],description:"The pride of the Balearic Islands, capable of strong defensive displays and giant-killings."},{id:"las-palmas",name:"Las Palmas",fullName:"Unión Deportiva Las Palmas",nickname:"Los Amarillos",founded:1949,stadium:"Estadio Gran Canaria",capacity:32400,city:"Las Palmas",manager:"Luis Carrión",colors:["#FFD700","#0000FF"],leagueTitles:0,copas:0,supercopas:0,championsLeague:0,europaLeague:0,currentRank:16,attackRating:74,defenseRating:72,overallRating:73,keyPlayers:["Kirian Rodríguez","Sandro Ramírez","Alberto Moleiro"],achievements:["La Liga runners-up (1968-69)"],description:"A team from the Canary Islands with a tradition of playing attractive, possession-based football."},{id:"rayo-vallecano",name:"Rayo Vallecano",fullName:"Rayo Vallecano de Madrid",nickname:"Los Franjirrojos",founded:1924,stadium:"Vallecas",capacity:14708,city:"Madrid",manager:"Iñigo Pérez",colors:["#FFFFFF","#E30613"],leagueTitles:0,copas:0,supercopas:0,championsLeague:0,europaLeague:0,currentRank:17,attackRating:73,defenseRating:71,overallRating:72,keyPlayers:["Isi Palazón","Álvaro García","Óscar Valentín"],achievements:["UEFA Cup quarter-finalists (2000-01)"],description:"A neighborhood club in Madrid celebrated for its progressive values and fearless attacking style."},{id:"getafe",name:"Getafe",fullName:"Getafe Club de Fútbol",nickname:"Azulones",founded:1983,stadium:"Coliseum",capacity:16500,city:"Getafe",manager:"José Bordalás",colors:["#0000FF","#FFFFFF"],leagueTitles:0,copas:0,supercopas:0,championsLeague:0,europaLeague:0,currentRank:12,attackRating:71,defenseRating:78,overallRating:74,keyPlayers:["David Soria","Djené Dakonam","Borja Mayoral"],achievements:["Copa del Rey runners-up (2007, 2008)"],description:"Known for their pragmatic, uncompromising, and highly physical approach to the game."},{id:"sevilla",name:"Sevilla",fullName:"Sevilla Fútbol Club",nickname:"Los Nervionenses",founded:1890,stadium:"Ramón Sánchez-Pizjuán",capacity:43883,city:"Seville",manager:"García Pimienta",colors:["#FFFFFF","#D11241"],leagueTitles:1,copas:5,supercopas:1,championsLeague:0,europaLeague:7,currentRank:14,attackRating:77,defenseRating:75,overallRating:76,keyPlayers:["Jesús Navas","Isaac Romero","Loïc Badé"],achievements:["7 Europa League titles","1 La Liga title","5 Copa del Rey titles"],description:"The undisputed kings of the Europa League, historically one of Spain's strongest clubs."},{id:"valencia",name:"Valencia",fullName:"Valencia Club de Fútbol",nickname:"Los Che",founded:1919,stadium:"Mestalla",capacity:49430,city:"Valencia",manager:"Rubén Baraja",colors:["#FFFFFF","#000000"],leagueTitles:6,copas:8,supercopas:1,championsLeague:0,europaLeague:1,currentRank:9,attackRating:76,defenseRating:77,overallRating:76,keyPlayers:["Hugo Duro","José Gayà","Giorgi Mamardashvili"],achievements:["6 La Liga titles","2 Champions League runners-up","1 UEFA Cup title"],description:"A historic giant of Spanish football known for its intense atmosphere at Mestalla."},{id:"espanyol",name:"Espanyol",fullName:"Reial Club Deportiu Espanyol de Barcelona",nickname:"Periquitos",founded:1900,stadium:"Stage Front Stadium",capacity:4e4,city:"Barcelona",manager:"Manolo González",colors:["#0000FF","#FFFFFF"],leagueTitles:0,copas:4,supercopas:0,championsLeague:0,europaLeague:0,currentRank:18,attackRating:73,defenseRating:71,overallRating:72,keyPlayers:["Javi Puado","Leandro Cabrera","Joan García"],achievements:["4 Copa del Rey titles","UEFA Cup runners-up (1988, 2007)"],description:'The "other" team in Barcelona, possessing a loyal fanbase and a proud history.'},{id:"real-valladolid",name:"Real Valladolid",fullName:"Real Valladolid Club de Fútbol",nickname:"Pucela",founded:1928,stadium:"José Zorrilla",capacity:27618,city:"Valladolid",manager:"Paulo Pezzolano",colors:["#6C1D45","#FFFFFF"],leagueTitles:0,copas:0,supercopas:0,championsLeague:0,europaLeague:0,currentRank:19,attackRating:72,defenseRating:70,overallRating:71,keyPlayers:["Selim Amallah","Javi Sánchez","Stanko Jurić"],achievements:["Copa de la Liga winners (1984)"],description:"A resilient club currently owned by Ronaldo Nazário, battling to establish themselves in La Liga."},{id:"leganes",name:"Leganés",fullName:"Club Deportivo Leganés",nickname:"Los Pepineros",founded:1928,stadium:"Butarque",capacity:12450,city:"Leganés",manager:"Borja Jiménez",colors:["#0000FF","#FFFFFF"],leagueTitles:0,copas:0,supercopas:0,championsLeague:0,europaLeague:0,currentRank:20,attackRating:70,defenseRating:72,overallRating:71,keyPlayers:["Miguel de la Fuente","Seydouba Cissé","Jorge Sáenz"],achievements:["Copa del Rey semi-finalists (2018)"],description:"A modest but determined club from the Madrid suburbs, back in the top flight."}],Bs=[{season:"1994-95",team:"Real Madrid",points:70},{season:"1995-96",team:"Atlético Madrid",points:87},{season:"1996-97",team:"Real Madrid",points:92},{season:"1997-98",team:"Barcelona",points:74},{season:"1998-99",team:"Barcelona",points:79},{season:"1999-00",team:"Deportivo La Coruña",points:69},{season:"2000-01",team:"Real Madrid",points:80},{season:"2001-02",team:"Valencia",points:75},{season:"2002-03",team:"Real Madrid",points:78},{season:"2003-04",team:"Valencia",points:77},{season:"2004-05",team:"Barcelona",points:84},{season:"2005-06",team:"Barcelona",points:82},{season:"2006-07",team:"Real Madrid",points:76},{season:"2007-08",team:"Real Madrid",points:85},{season:"2008-09",team:"Barcelona",points:87},{season:"2009-10",team:"Barcelona",points:99},{season:"2010-11",team:"Barcelona",points:96},{season:"2011-12",team:"Real Madrid",points:100},{season:"2012-13",team:"Barcelona",points:100},{season:"2013-14",team:"Atlético Madrid",points:90},{season:"2014-15",team:"Barcelona",points:94},{season:"2015-16",team:"Barcelona",points:91},{season:"2016-17",team:"Real Madrid",points:93},{season:"2017-18",team:"Barcelona",points:93},{season:"2018-19",team:"Barcelona",points:87},{season:"2019-20",team:"Real Madrid",points:87},{season:"2020-21",team:"Atlético Madrid",points:86},{season:"2021-22",team:"Real Madrid",points:86},{season:"2022-23",team:"Barcelona",points:88},{season:"2023-24",team:"Real Madrid",points:95},{season:"2024-25",team:"Barcelona",points:90},{season:"2025-26",team:"Barcelona",points:92}],Os=[{season:"1994-95",player:"Iván Zamorano",club:"Real Madrid",goals:28},{season:"1995-96",player:"Juan Antonio Pizzi",club:"Tenerife",goals:31},{season:"1996-97",player:"Ronaldo",club:"Barcelona",goals:34},{season:"1997-98",player:"Christian Vieri",club:"Atlético Madrid",goals:24},{season:"1998-99",player:"Raúl",club:"Real Madrid",goals:25},{season:"1999-00",player:"Salva Ballesta",club:"Racing Santander",goals:27},{season:"2000-01",player:"Raúl",club:"Real Madrid",goals:24},{season:"2001-02",player:"Diego Tristán",club:"Deportivo La Coruña",goals:21},{season:"2002-03",player:"Roy Makaay",club:"Deportivo La Coruña",goals:29},{season:"2003-04",player:"Ronaldo",club:"Real Madrid",goals:24},{season:"2004-05",player:"Diego Forlán",club:"Villarreal",goals:25},{season:"2005-06",player:"Samuel Eto'o",club:"Barcelona",goals:26},{season:"2006-07",player:"Ruud van Nistelrooy",club:"Real Madrid",goals:25},{season:"2007-08",player:"Dani Güiza",club:"Mallorca",goals:27},{season:"2008-09",player:"Diego Forlán",club:"Atlético Madrid",goals:32},{season:"2009-10",player:"Lionel Messi",club:"Barcelona",goals:34},{season:"2010-11",player:"Cristiano Ronaldo",club:"Real Madrid",goals:40},{season:"2011-12",player:"Lionel Messi",club:"Barcelona",goals:50},{season:"2012-13",player:"Lionel Messi",club:"Barcelona",goals:46},{season:"2013-14",player:"Cristiano Ronaldo",club:"Real Madrid",goals:31},{season:"2014-15",player:"Cristiano Ronaldo",club:"Real Madrid",goals:48},{season:"2015-16",player:"Luis Suárez",club:"Barcelona",goals:40},{season:"2016-17",player:"Lionel Messi",club:"Barcelona",goals:37},{season:"2017-18",player:"Lionel Messi",club:"Barcelona",goals:34},{season:"2018-19",player:"Lionel Messi",club:"Barcelona",goals:36},{season:"2019-20",player:"Lionel Messi",club:"Barcelona",goals:25},{season:"2020-21",player:"Lionel Messi",club:"Barcelona",goals:30},{season:"2021-22",player:"Karim Benzema",club:"Real Madrid",goals:27},{season:"2022-23",player:"Robert Lewandowski",club:"Barcelona",goals:23},{season:"2023-24",player:"Artem Dovbyk",club:"Girona",goals:24},{season:"2024-25",player:"Kylian Mbappé",club:"Real Madrid",goals:31},{season:"2025-26",player:"Kylian Mbappé",club:"Real Madrid",goals:25}],Zc={mostGoalsSeason:{player:"Lionel Messi",goals:50,season:"2011-12",club:"Barcelona"},mostGoalsAllTime:{player:"Lionel Messi",goals:474},mostAssistsAllTime:{player:"Lionel Messi",assists:192},mostAppearances:{player:"Andoni Zubizarreta & Joaquín",appearances:622},biggestWin:{match:"Athletic Bilbao 12-1 Barcelona",score:"12-1",season:"1930-31"},mostPointsSeason:{team:"Real Madrid & Barcelona",points:100,season:"2011-12 (RM), 2012-13 (FCB)"},longestUnbeaten:{team:"Barcelona",games:43,season:"2017-18"},mostConsecutiveWins:{team:"Real Madrid & Barcelona",wins:16,season:"2016-17 (RM), 2010-11 (FCB)"},mostTitles:{team:"Real Madrid",titles:36}},jc={"Real Madrid":36,Barcelona:27,"Atlético Madrid":11,"Athletic Bilbao":8,Valencia:6,"Real Sociedad":2,"Deportivo La Coruña":1,Sevilla:1,"Real Betis":1},Yi=[{id:"haaland",name:"Erling Haaland",fullName:"Erling Braut Haaland",nationality:"Norway",nationalityFlag:"🇳🇴",position:"Forward",currentClub:"Manchester City",clubId:"manchester-city",league:"PL",birthYear:2e3,goals:310,assists:70,appearances:360,leagueTitles:6,championsLeague:1,goldenBoots:4,isLegend:!1,careerHistory:[{club:"Molde",years:"2017-2019",goals:14},{club:"RB Salzburg",years:"2019-2020",goals:29},{club:"Borussia Dortmund",years:"2020-2022",goals:86},{club:"Manchester City",years:"2022-present",goals:181}]},{id:"salah",name:"Mohamed Salah",fullName:"Mohamed Salah Hamed Mahrous Ghaly",nationality:"Egypt",nationalityFlag:"🇪🇬",position:"Forward",currentClub:"Liverpool",clubId:"liverpool",league:"PL",birthYear:1992,goals:335,assists:155,appearances:680,leagueTitles:3,championsLeague:1,goldenBoots:3,isLegend:!1,careerHistory:[{club:"Basel",years:"2012-2014",goals:9},{club:"Chelsea",years:"2014-2016",goals:2},{club:"Roma",years:"2016-2017",goals:29},{club:"Liverpool",years:"2017-present",goals:295}]},{id:"saka",name:"Bukayo Saka",fullName:"Bukayo Ayoyinka T. M. Saka",nationality:"England",nationalityFlag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿",position:"Forward",currentClub:"Arsenal",clubId:"arsenal",league:"PL",birthYear:2001,goals:90,assists:78,appearances:310,leagueTitles:1,championsLeague:0,goldenBoots:0,isLegend:!1,careerHistory:[{club:"Arsenal",years:"2018-present",goals:90}]},{id:"palmer",name:"Cole Palmer",fullName:"Cole Jermaine Palmer",nationality:"England",nationalityFlag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿",position:"Midfielder",currentClub:"Chelsea",clubId:"chelsea",league:"PL",birthYear:2002,goals:65,assists:42,appearances:160,leagueTitles:1,championsLeague:1,goldenBoots:0,isLegend:!1,careerHistory:[{club:"Manchester City",years:"2020-2023",goals:6},{club:"Chelsea",years:"2023-present",goals:59}]},{id:"foden",name:"Phil Foden",fullName:"Philip Walter Foden",nationality:"England",nationalityFlag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿",position:"Midfielder",currentClub:"Manchester City",clubId:"manchester-city",league:"PL",birthYear:2e3,goals:87,assists:53,appearances:270,leagueTitles:6,championsLeague:1,goldenBoots:0,isLegend:!1,careerHistory:[{club:"Manchester City",years:"2017-present",goals:87}]},{id:"debruyne",name:"Kevin De Bruyne",fullName:"Kevin De Bruyne",nationality:"Belgium",nationalityFlag:"🇧🇪",position:"Midfielder",currentClub:"Manchester City",clubId:"manchester-city",league:"PL",birthYear:1991,goals:150,assists:250,appearances:600,leagueTitles:6,championsLeague:1,goldenBoots:0,isLegend:!1,careerHistory:[{club:"Genk",years:"2008-2012",goals:17},{club:"Werder Bremen",years:"2012-2013",goals:10},{club:"Wolfsburg",years:"2014-2015",goals:20},{club:"Manchester City",years:"2015-present",goals:102}]},{id:"brunofernandes",name:"Bruno Fernandes",fullName:"Bruno Miguel Borges Fernandes",nationality:"Portugal",nationalityFlag:"🇵🇹",position:"Midfielder",currentClub:"Manchester United",clubId:"manchester-united",league:"PL",birthYear:1994,goals:160,assists:140,appearances:520,leagueTitles:0,championsLeague:0,goldenBoots:0,isLegend:!1,careerHistory:[{club:"Udinese",years:"2013-2016",goals:11},{club:"Sampdoria",years:"2016-2017",goals:5},{club:"Sporting CP",years:"2017-2020",goals:63},{club:"Manchester United",years:"2020-present",goals:79}]},{id:"son",name:"Son Heung-min",fullName:"Son Heung-min",nationality:"South Korea",nationalityFlag:"🇰🇷",position:"Forward",currentClub:"Tottenham Hotspur",clubId:"tottenham",league:"PL",birthYear:1992,goals:220,assists:100,appearances:600,leagueTitles:0,championsLeague:0,goldenBoots:1,isLegend:!1,careerHistory:[{club:"Hamburger SV",years:"2010-2013",goals:20},{club:"Bayer Leverkusen",years:"2013-2015",goals:29},{club:"Tottenham",years:"2015-present",goals:162}]},{id:"alexander-arnold",name:"Trent Alexander-Arnold",fullName:"Trent John Alexander-Arnold",nationality:"England",nationalityFlag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿",position:"Defender",currentClub:"Liverpool",clubId:"liverpool",league:"PL",birthYear:1998,goals:19,assists:81,appearances:310,leagueTitles:1,championsLeague:1,goldenBoots:0,isLegend:!1,careerHistory:[{club:"Liverpool",years:"2016-present",goals:19}]},{id:"vandijk",name:"Virgil van Dijk",fullName:"Virgil van Dijk",nationality:"Netherlands",nationalityFlag:"🇳🇱",position:"Defender",currentClub:"Liverpool",clubId:"liverpool",league:"PL",birthYear:1991,goals:51,assists:23,appearances:530,leagueTitles:3,championsLeague:1,goldenBoots:0,isLegend:!1,careerHistory:[{club:"Groningen",years:"2011-2013",goals:7},{club:"Celtic",years:"2013-2015",goals:15},{club:"Southampton",years:"2015-2018",goals:7},{club:"Liverpool",years:"2018-present",goals:23}]},{id:"rice",name:"Declan Rice",fullName:"Declan Rice",nationality:"England",nationalityFlag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿",position:"Midfielder",currentClub:"Arsenal",clubId:"arsenal",league:"PL",birthYear:1999,goals:22,assists:20,appearances:300,leagueTitles:0,championsLeague:0,goldenBoots:0,isLegend:!1,careerHistory:[{club:"West Ham",years:"2017-2023",goals:15},{club:"Arsenal",years:"2023-present",goals:7}]},{id:"odegaard",name:"Martin Ødegaard",fullName:"Martin Ødegaard",nationality:"Norway",nationalityFlag:"🇳🇴",position:"Midfielder",currentClub:"Arsenal",clubId:"arsenal",league:"PL",birthYear:1998,goals:55,assists:60,appearances:350,leagueTitles:0,championsLeague:0,goldenBoots:0,isLegend:!1,careerHistory:[{club:"Stromsgodset",years:"2014",goals:5},{club:"Real Madrid",years:"2015-2021",goals:0},{club:"Heerenveen",years:"2017-2018",goals:3},{club:"Vitesse",years:"2018-2019",goals:11},{club:"Real Sociedad",years:"2019-2020",goals:7},{club:"Arsenal",years:"2021-present",goals:35}]},{id:"watkins",name:"Ollie Watkins",fullName:"Oliver George Arthur Watkins",nationality:"England",nationalityFlag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿",position:"Forward",currentClub:"Aston Villa",clubId:"aston-villa",league:"PL",birthYear:1995,goals:120,assists:40,appearances:380,leagueTitles:0,championsLeague:0,goldenBoots:0,isLegend:!1,careerHistory:[{club:"Exeter City",years:"2014-2017",goals:26},{club:"Brentford",years:"2017-2020",goals:49},{club:"Aston Villa",years:"2020-present",goals:65}]},{id:"isak",name:"Alexander Isak",fullName:"Alexander Isak",nationality:"Sweden",nationalityFlag:"🇸🇪",position:"Forward",currentClub:"Newcastle United",clubId:"newcastle",league:"PL",birthYear:1999,goals:90,assists:20,appearances:250,leagueTitles:0,championsLeague:0,goldenBoots:0,isLegend:!1,careerHistory:[{club:"AIK",years:"2016-2017",goals:13},{club:"Borussia Dortmund",years:"2017-2019",goals:1},{club:"Willem II",years:"2019",goals:14},{club:"Real Sociedad",years:"2019-2022",goals:44},{club:"Newcastle United",years:"2022-present",goals:35}]},{id:"gordon",name:"Anthony Gordon",fullName:"Anthony Michael Gordon",nationality:"England",nationalityFlag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿",position:"Forward",currentClub:"Newcastle United",clubId:"newcastle",league:"PL",birthYear:2001,goals:25,assists:22,appearances:150,leagueTitles:0,championsLeague:0,goldenBoots:0,isLegend:!1,careerHistory:[{club:"Everton",years:"2017-2023",goals:7},{club:"Preston North End",years:"2021",goals:0},{club:"Newcastle United",years:"2023-present",goals:14}]},{id:"rashford",name:"Marcus Rashford",fullName:"Marcus Rashford",nationality:"England",nationalityFlag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿",position:"Forward",currentClub:"Manchester United",clubId:"manchester-united",league:"PL",birthYear:1997,goals:131,assists:74,appearances:400,leagueTitles:0,championsLeague:0,goldenBoots:0,isLegend:!1,careerHistory:[{club:"Manchester United",years:"2015-present",goals:131}]},{id:"havertz",name:"Kai Havertz",fullName:"Kai Lukas Havertz",nationality:"Germany",nationalityFlag:"🇩🇪",position:"Forward",currentClub:"Arsenal",clubId:"arsenal",league:"PL",birthYear:1999,goals:90,assists:45,appearances:350,leagueTitles:0,championsLeague:1,goldenBoots:0,isLegend:!1,careerHistory:[{club:"Bayer Leverkusen",years:"2016-2020",goals:46},{club:"Chelsea",years:"2020-2023",goals:32},{club:"Arsenal",years:"2023-present",goals:14}]},{id:"henry",name:"Thierry Henry",fullName:"Thierry Daniel Henry",nationality:"France",nationalityFlag:"🇫🇷",position:"Forward",currentClub:"Retired",clubId:"retired",league:"PL",birthYear:1977,goals:360,assists:177,appearances:792,leagueTitles:5,championsLeague:1,goldenBoots:4,isLegend:!0,careerHistory:[{club:"Monaco",years:"1994-1999",goals:28},{club:"Juventus",years:"1999",goals:3},{club:"Arsenal",years:"1999-2007",goals:226},{club:"Barcelona",years:"2007-2010",goals:49},{club:"New York Red Bulls",years:"2010-2014",goals:52},{club:"Arsenal",years:"2012",goals:2}]},{id:"shearer",name:"Alan Shearer",fullName:"Alan Shearer",nationality:"England",nationalityFlag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿",position:"Forward",currentClub:"Retired",clubId:"retired",league:"PL",birthYear:1970,goals:379,assists:73,appearances:734,leagueTitles:1,championsLeague:0,goldenBoots:3,isLegend:!0,careerHistory:[{club:"Southampton",years:"1988-1992",goals:43},{club:"Blackburn Rovers",years:"1992-1996",goals:130},{club:"Newcastle United",years:"1996-2006",goals:206}]},{id:"rooney",name:"Wayne Rooney",fullName:"Wayne Mark Rooney",nationality:"England",nationalityFlag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿",position:"Forward",currentClub:"Retired",clubId:"retired",league:"PL",birthYear:1985,goals:313,assists:170,appearances:763,leagueTitles:5,championsLeague:1,goldenBoots:0,isLegend:!0,careerHistory:[{club:"Everton",years:"2002-2004",goals:17},{club:"Manchester United",years:"2004-2017",goals:253},{club:"Everton",years:"2017-2018",goals:11},{club:"DC United",years:"2018-2019",goals:25},{club:"Derby County",years:"2020-2021",goals:7}]},{id:"lampard",name:"Frank Lampard",fullName:"Frank James Lampard",nationality:"England",nationalityFlag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿",position:"Midfielder",currentClub:"Retired",clubId:"retired",league:"PL",birthYear:1978,goals:274,assists:177,appearances:913,leagueTitles:3,championsLeague:1,goldenBoots:0,isLegend:!0,careerHistory:[{club:"West Ham United",years:"1995-2001",goals:39},{club:"Swansea City",years:"1995-1996",goals:1},{club:"Chelsea",years:"2001-2014",goals:211},{club:"Manchester City",years:"2014-2015",goals:8},{club:"New York City FC",years:"2015-2016",goals:15}]},{id:"gerrard",name:"Steven Gerrard",fullName:"Steven George Gerrard",nationality:"England",nationalityFlag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿",position:"Midfielder",currentClub:"Retired",clubId:"retired",league:"PL",birthYear:1980,goals:191,assists:165,appearances:748,leagueTitles:0,championsLeague:1,goldenBoots:0,isLegend:!0,careerHistory:[{club:"Liverpool",years:"1998-2015",goals:186},{club:"LA Galaxy",years:"2015-2016",goals:5}]},{id:"scholes",name:"Paul Scholes",fullName:"Paul Scholes",nationality:"England",nationalityFlag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿",position:"Midfielder",currentClub:"Retired",clubId:"retired",league:"PL",birthYear:1974,goals:155,assists:75,appearances:718,leagueTitles:11,championsLeague:2,goldenBoots:0,isLegend:!0,careerHistory:[{club:"Manchester United",years:"1993-2013",goals:155}]},{id:"bergkamp",name:"Dennis Bergkamp",fullName:"Dennis Nicolaas Maria Bergkamp",nationality:"Netherlands",nationalityFlag:"🇳🇱",position:"Forward",currentClub:"Retired",clubId:"retired",league:"PL",birthYear:1969,goals:274,assists:136,appearances:734,leagueTitles:4,championsLeague:0,goldenBoots:0,isLegend:!0,careerHistory:[{club:"Ajax",years:"1986-1993",goals:122},{club:"Inter Milan",years:"1993-1995",goals:22},{club:"Arsenal",years:"1995-2006",goals:120}]},{id:"cantona",name:"Eric Cantona",fullName:"Eric Daniel Pierre Cantona",nationality:"France",nationalityFlag:"🇫🇷",position:"Forward",currentClub:"Retired",clubId:"retired",league:"PL",birthYear:1966,goals:161,assists:71,appearances:432,leagueTitles:5,championsLeague:0,goldenBoots:0,isLegend:!0,careerHistory:[{club:"Auxerre",years:"1983-1988",goals:23},{club:"Marseille",years:"1988-1991",goals:14},{club:"Nimes",years:"1991",goals:2},{club:"Leeds United",years:"1992",goals:14},{club:"Manchester United",years:"1992-1997",goals:82}]},{id:"drogba",name:"Didier Drogba",fullName:"Didier Yves Drogba Tébily",nationality:"Ivory Coast",nationalityFlag:"🇨🇮",position:"Forward",currentClub:"Retired",clubId:"retired",league:"PL",birthYear:1978,goals:297,assists:114,appearances:679,leagueTitles:4,championsLeague:1,goldenBoots:2,isLegend:!0,careerHistory:[{club:"Le Mans",years:"1998-2002",goals:12},{club:"Guingamp",years:"2002-2003",goals:20},{club:"Marseille",years:"2003-2004",goals:32},{club:"Chelsea",years:"2004-2012",goals:157},{club:"Shanghai Shenhua",years:"2012-2013",goals:8},{club:"Galatasaray",years:"2013-2014",goals:20},{club:"Chelsea",years:"2014-2015",goals:7}]},{id:"aguero",name:"Sergio Agüero",fullName:"Sergio Leonel Agüero del Castillo",nationality:"Argentina",nationalityFlag:"🇦🇷",position:"Forward",currentClub:"Retired",clubId:"retired",league:"PL",birthYear:1988,goals:385,assists:118,appearances:685,leagueTitles:5,championsLeague:0,goldenBoots:1,isLegend:!0,careerHistory:[{club:"Independiente",years:"2003-2006",goals:23},{club:"Atletico Madrid",years:"2006-2011",goals:101},{club:"Manchester City",years:"2011-2021",goals:260},{club:"Barcelona",years:"2021",goals:1}]},{id:"davidsilva",name:"David Silva",fullName:"David Josué Jiménez Silva",nationality:"Spain",nationalityFlag:"🇪🇸",position:"Midfielder",currentClub:"Retired",clubId:"retired",league:"PL",birthYear:1986,goals:124,assists:200,appearances:744,leagueTitles:4,championsLeague:0,goldenBoots:0,isLegend:!0,careerHistory:[{club:"Valencia",years:"2004-2010",goals:32},{club:"Manchester City",years:"2010-2020",goals:77},{club:"Real Sociedad",years:"2020-2023",goals:7}]},{id:"vieira",name:"Patrick Vieira",fullName:"Patrick Vieira",nationality:"France",nationalityFlag:"🇫🇷",position:"Midfielder",currentClub:"Retired",clubId:"retired",league:"PL",birthYear:1976,goals:57,assists:44,appearances:651,leagueTitles:6,championsLeague:0,goldenBoots:0,isLegend:!0,careerHistory:[{club:"Cannes",years:"1994-1995",goals:2},{club:"AC Milan",years:"1995-1996",goals:0},{club:"Arsenal",years:"1996-2005",goals:33},{club:"Juventus",years:"2005-2006",goals:5},{club:"Inter Milan",years:"2006-2010",goals:9},{club:"Manchester City",years:"2010-2011",goals:6}]},{id:"terry",name:"John Terry",fullName:"John George Terry",nationality:"England",nationalityFlag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿",position:"Defender",currentClub:"Retired",clubId:"retired",league:"PL",birthYear:1980,goals:68,assists:29,appearances:759,leagueTitles:5,championsLeague:1,goldenBoots:0,isLegend:!0,careerHistory:[{club:"Chelsea",years:"1998-2017",goals:67},{club:"Aston Villa",years:"2017-2018",goals:1}]},{id:"ferdinand",name:"Rio Ferdinand",fullName:"Rio Gavin Ferdinand",nationality:"England",nationalityFlag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿",position:"Defender",currentClub:"Retired",clubId:"retired",league:"PL",birthYear:1978,goals:13,assists:9,appearances:710,leagueTitles:6,championsLeague:1,goldenBoots:0,isLegend:!0,careerHistory:[{club:"West Ham United",years:"1995-2000",goals:2},{club:"Leeds United",years:"2000-2002",goals:3},{club:"Manchester United",years:"2002-2014",goals:8},{club:"QPR",years:"2014-2015",goals:0}]},{id:"vinicius",name:"Vinícius Jr",fullName:"Vinícius José Paixão de Oliveira Júnior",nationality:"Brazil",nationalityFlag:"🇧🇷",position:"Forward",currentClub:"Real Madrid",clubId:"real-madrid",league:"LL",birthYear:2e3,goals:125,assists:95,appearances:340,leagueTitles:4,championsLeague:3,goldenBoots:0,isLegend:!1,careerHistory:[{club:"Flamengo",years:"2017-2018",goals:14},{club:"Real Madrid",years:"2018-present",goals:111}]},{id:"bellingham",name:"Jude Bellingham",fullName:"Jude Victor William Bellingham",nationality:"England",nationalityFlag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿",position:"Midfielder",currentClub:"Real Madrid",clubId:"real-madrid",league:"LL",birthYear:2003,goals:85,assists:55,appearances:310,leagueTitles:3,championsLeague:2,goldenBoots:0,isLegend:!1,careerHistory:[{club:"Birmingham City",years:"2019-2020",goals:4},{club:"Borussia Dortmund",years:"2020-2023",goals:24},{club:"Real Madrid",years:"2023-present",goals:57}]},{id:"mbappe",name:"Kylian Mbappé",fullName:"Kylian Mbappé Lottin",nationality:"France",nationalityFlag:"🇫🇷",position:"Forward",currentClub:"Real Madrid",clubId:"real-madrid",league:"LL",birthYear:1998,goals:350,assists:145,appearances:450,leagueTitles:9,championsLeague:1,goldenBoots:7,isLegend:!1,careerHistory:[{club:"Monaco",years:"2015-2018",goals:27},{club:"Paris Saint-Germain",years:"2017-2024",goals:256},{club:"Real Madrid",years:"2024-present",goals:67}]},{id:"pedri",name:"Pedri",fullName:"Pedro González López",nationality:"Spain",nationalityFlag:"🇪🇸",position:"Midfielder",currentClub:"Barcelona",clubId:"barcelona",league:"LL",birthYear:2002,goals:20,assists:15,appearances:150,leagueTitles:1,championsLeague:0,goldenBoots:0,isLegend:!1,careerHistory:[{club:"Las Palmas",years:"2019-2020",goals:4},{club:"Barcelona",years:"2020-present",goals:20}]},{id:"gavi",name:"Gavi",fullName:"Pablo Martín Páez Gavira",nationality:"Spain",nationalityFlag:"🇪🇸",position:"Midfielder",currentClub:"Barcelona",clubId:"barcelona",league:"LL",birthYear:2004,goals:7,assists:14,appearances:111,leagueTitles:1,championsLeague:0,goldenBoots:0,isLegend:!1,careerHistory:[{club:"Barcelona",years:"2021-present",goals:7}]},{id:"lamine-yamal",name:"Lamine Yamal",fullName:"Lamine Yamal Nasraoui Ebana",nationality:"Spain",nationalityFlag:"🇪🇸",position:"Forward",currentClub:"Barcelona",clubId:"barcelona",league:"LL",birthYear:2007,goals:38,assists:32,appearances:125,leagueTitles:2,championsLeague:0,goldenBoots:0,isLegend:!1,careerHistory:[{club:"Barcelona",years:"2023-present",goals:38}]},{id:"raphinha",name:"Raphinha",fullName:"Raphael Dias Belloli",nationality:"Brazil",nationalityFlag:"🇧🇷",position:"Forward",currentClub:"Barcelona",clubId:"barcelona",league:"LL",birthYear:1996,goals:75,assists:60,appearances:290,leagueTitles:1,championsLeague:0,goldenBoots:0,isLegend:!1,careerHistory:[{club:"Vitoria Guimaraes",years:"2016-2018",goals:22},{club:"Sporting CP",years:"2018-2019",goals:9},{club:"Rennes",years:"2019-2020",goals:8},{club:"Leeds United",years:"2020-2022",goals:17},{club:"Barcelona",years:"2022-present",goals:20}]},{id:"lewandowski",name:"Robert Lewandowski",fullName:"Robert Lewandowski",nationality:"Poland",nationalityFlag:"🇵🇱",position:"Forward",currentClub:"Barcelona",clubId:"barcelona",league:"LL",birthYear:1988,goals:575,assists:150,appearances:750,leagueTitles:12,championsLeague:1,goldenBoots:7,isLegend:!1,careerHistory:[{club:"Znicz Pruszkow",years:"2006-2008",goals:37},{club:"Lech Poznan",years:"2008-2010",goals:41},{club:"Borussia Dortmund",years:"2010-2014",goals:103},{club:"Bayern Munich",years:"2014-2022",goals:344},{club:"Barcelona",years:"2022-present",goals:59}]},{id:"griezmann",name:"Antoine Griezmann",fullName:"Antoine Griezmann",nationality:"France",nationalityFlag:"🇫🇷",position:"Forward",currentClub:"Atletico Madrid",clubId:"atletico-madrid",league:"LL",birthYear:1991,goals:260,assists:120,appearances:690,leagueTitles:0,championsLeague:0,goldenBoots:0,isLegend:!1,careerHistory:[{club:"Real Sociedad",years:"2009-2014",goals:52},{club:"Atletico Madrid",years:"2014-2019",goals:133},{club:"Barcelona",years:"2019-2021",goals:35},{club:"Atletico Madrid",years:"2021-present",goals:42}]},{id:"ter-stegen",name:"Marc-André ter Stegen",fullName:"Marc-André ter Stegen",nationality:"Germany",nationalityFlag:"🇩🇪",position:"Goalkeeper",currentClub:"Barcelona",clubId:"barcelona",league:"LL",birthYear:1992,goals:0,assists:2,appearances:550,leagueTitles:5,championsLeague:1,goldenBoots:0,isLegend:!1,careerHistory:[{club:"Borussia Monchengladbach",years:"2010-2014",goals:0},{club:"Barcelona",years:"2014-present",goals:0}]},{id:"oblak",name:"Jan Oblak",fullName:"Jan Oblak",nationality:"Slovenia",nationalityFlag:"🇸🇮",position:"Goalkeeper",currentClub:"Atletico Madrid",clubId:"atletico-madrid",league:"LL",birthYear:1993,goals:0,assists:0,appearances:450,leagueTitles:1,championsLeague:0,goldenBoots:0,isLegend:!1,careerHistory:[{club:"Olimpija Ljubljana",years:"2009-2010",goals:0},{club:"Benfica",years:"2010-2014",goals:0},{club:"Atletico Madrid",years:"2014-present",goals:0}]},{id:"valverde",name:"Federico Valverde",fullName:"Federico Santiago Valverde Dipetta",nationality:"Uruguay",nationalityFlag:"🇺🇾",position:"Midfielder",currentClub:"Real Madrid",clubId:"real-madrid",league:"LL",birthYear:1998,goals:21,assists:23,appearances:258,leagueTitles:3,championsLeague:2,goldenBoots:0,isLegend:!1,careerHistory:[{club:"Penarol",years:"2015-2016",goals:0},{club:"Deportivo La Coruna",years:"2017-2018",goals:0},{club:"Real Madrid",years:"2018-present",goals:21}]},{id:"rodrygo",name:"Rodrygo",fullName:"Rodrygo Silva de Goes",nationality:"Brazil",nationalityFlag:"🇧🇷",position:"Forward",currentClub:"Real Madrid",clubId:"real-madrid",league:"LL",birthYear:2001,goals:54,assists:41,appearances:216,leagueTitles:3,championsLeague:2,goldenBoots:0,isLegend:!1,careerHistory:[{club:"Santos",years:"2017-2019",goals:17},{club:"Real Madrid",years:"2019-present",goals:54}]},{id:"modric",name:"Luka Modrić",fullName:"Luka Modrić",nationality:"Croatia",nationalityFlag:"🇭🇷",position:"Midfielder",currentClub:"Real Madrid",clubId:"real-madrid",league:"LL",birthYear:1985,goals:79,assists:128,appearances:750,leagueTitles:4,championsLeague:6,goldenBoots:0,isLegend:!1,careerHistory:[{club:"Dinamo Zagreb",years:"2003-2008",goals:31},{club:"Tottenham Hotspur",years:"2008-2012",goals:17},{club:"Real Madrid",years:"2012-present",goals:39}]},{id:"messi",name:"Lionel Messi",fullName:"Lionel Andrés Messi",nationality:"Argentina",nationalityFlag:"🇦🇷",position:"Forward",currentClub:"Inter Miami",clubId:"inter-miami",league:"LL",birthYear:1987,goals:921,assists:405,appearances:1115,leagueTitles:12,championsLeague:4,goldenBoots:8,isLegend:!0,careerHistory:[{club:"Barcelona",years:"2004-2021",goals:672},{club:"Paris Saint-Germain",years:"2021-2023",goals:32},{club:"Inter Miami",years:"2023-present",goals:217}]},{id:"ronaldo",name:"Cristiano Ronaldo",fullName:"Cristiano Ronaldo dos Santos Aveiro",nationality:"Portugal",nationalityFlag:"🇵🇹",position:"Forward",currentClub:"Al Nassr",clubId:"al-nassr",league:"LL",birthYear:1985,goals:925,assists:265,appearances:1290,leagueTitles:7,championsLeague:5,goldenBoots:4,isLegend:!0,careerHistory:[{club:"Sporting CP",years:"2002-2003",goals:5},{club:"Manchester United",years:"2003-2009",goals:118},{club:"Real Madrid",years:"2009-2018",goals:450},{club:"Juventus",years:"2018-2021",goals:101},{club:"Manchester United",years:"2021-2022",goals:27},{club:"Al Nassr",years:"2023-present",goals:224}]},{id:"raul",name:"Raúl",fullName:"Raúl González Blanco",nationality:"Spain",nationalityFlag:"🇪🇸",position:"Forward",currentClub:"Retired",clubId:"retired",league:"LL",birthYear:1977,goals:388,assists:115,appearances:932,leagueTitles:6,championsLeague:3,goldenBoots:2,isLegend:!0,careerHistory:[{club:"Real Madrid",years:"1994-2010",goals:323},{club:"Schalke 04",years:"2010-2012",goals:40},{club:"Al Sadd",years:"2012-2014",goals:16},{club:"New York Cosmos",years:"2014-2015",goals:9}]},{id:"xavi",name:"Xavi",fullName:"Xavier Hernández Creus",nationality:"Spain",nationalityFlag:"🇪🇸",position:"Midfielder",currentClub:"Retired",clubId:"retired",league:"LL",birthYear:1980,goals:85,assists:214,appearances:767,leagueTitles:8,championsLeague:4,goldenBoots:0,isLegend:!0,careerHistory:[{club:"Barcelona",years:"1998-2015",goals:85},{club:"Al Sadd",years:"2015-2019",goals:24}]},{id:"iniesta",name:"Andrés Iniesta",fullName:"Andrés Iniesta Luján",nationality:"Spain",nationalityFlag:"🇪🇸",position:"Midfielder",currentClub:"Emirates Club",clubId:"emirates",league:"LL",birthYear:1984,goals:93,assists:161,appearances:885,leagueTitles:9,championsLeague:4,goldenBoots:0,isLegend:!0,careerHistory:[{club:"Barcelona",years:"2002-2018",goals:57},{club:"Vissel Kobe",years:"2018-2023",goals:26},{club:"Emirates Club",years:"2023-present",goals:5}]},{id:"puyol",name:"Carles Puyol",fullName:"Carles Puyol Saforcada",nationality:"Spain",nationalityFlag:"🇪🇸",position:"Defender",currentClub:"Retired",clubId:"retired",league:"LL",birthYear:1978,goals:24,assists:16,appearances:682,leagueTitles:6,championsLeague:3,goldenBoots:0,isLegend:!0,careerHistory:[{club:"Barcelona",years:"1999-2014",goals:24}]},{id:"casillas",name:"Iker Casillas",fullName:"Iker Casillas Fernández",nationality:"Spain",nationalityFlag:"🇪🇸",position:"Goalkeeper",currentClub:"Retired",clubId:"retired",league:"LL",birthYear:1981,goals:0,assists:0,appearances:881,leagueTitles:5,championsLeague:3,goldenBoots:0,isLegend:!0,careerHistory:[{club:"Real Madrid",years:"1999-2015",goals:0},{club:"Porto",years:"2015-2020",goals:0}]},{id:"ramos",name:"Sergio Ramos",fullName:"Sergio Ramos García",nationality:"Spain",nationalityFlag:"🇪🇸",position:"Defender",currentClub:"Sevilla",clubId:"sevilla",league:"LL",birthYear:1986,goals:110,assists:40,appearances:778,leagueTitles:5,championsLeague:4,goldenBoots:0,isLegend:!0,careerHistory:[{club:"Sevilla",years:"2004-2005",goals:3},{club:"Real Madrid",years:"2005-2021",goals:101},{club:"Paris Saint-Germain",years:"2021-2023",goals:6},{club:"Sevilla",years:"2023-2024",goals:7}]},{id:"suarez",name:"Luis Suárez",fullName:"Luis Alberto Suárez Díaz",nationality:"Uruguay",nationalityFlag:"🇺🇾",position:"Forward",currentClub:"Inter Miami",clubId:"inter-miami",league:"LL",birthYear:1987,goals:500,assists:246,appearances:800,leagueTitles:5,championsLeague:1,goldenBoots:2,isLegend:!0,careerHistory:[{club:"Nacional",years:"2005-2006",goals:12},{club:"Groningen",years:"2006-2007",goals:15},{club:"Ajax",years:"2007-2011",goals:111},{club:"Liverpool",years:"2011-2014",goals:82},{club:"Barcelona",years:"2014-2020",goals:198},{club:"Atletico Madrid",years:"2020-2022",goals:34},{club:"Inter Miami",years:"2024-present",goals:14}]},{id:"neymar",name:"Neymar Jr",fullName:"Neymar da Silva Santos Júnior",nationality:"Brazil",nationalityFlag:"🇧🇷",position:"Forward",currentClub:"Al Hilal",clubId:"al-hilal",league:"LL",birthYear:1992,goals:360,assists:220,appearances:584,leagueTitles:7,championsLeague:1,goldenBoots:0,isLegend:!0,careerHistory:[{club:"Santos",years:"2009-2013",goals:136},{club:"Barcelona",years:"2013-2017",goals:105},{club:"Paris Saint-Germain",years:"2017-2023",goals:118},{club:"Al Hilal",years:"2023-present",goals:1}]},{id:"zidane",name:"Zinedine Zidane",fullName:"Zinedine Yazid Zidane",nationality:"France",nationalityFlag:"🇫🇷",position:"Midfielder",currentClub:"Retired",clubId:"retired",league:"LL",birthYear:1972,goals:125,assists:115,appearances:681,leagueTitles:3,championsLeague:1,goldenBoots:0,isLegend:!0,careerHistory:[{club:"Cannes",years:"1989-1992",goals:6},{club:"Bordeaux",years:"1992-1996",goals:39},{club:"Juventus",years:"1996-2001",goals:31},{club:"Real Madrid",years:"2001-2006",goals:49}]},{id:"ronaldinho",name:"Ronaldinho",fullName:"Ronaldo de Assis Moreira",nationality:"Brazil",nationalityFlag:"🇧🇷",position:"Midfielder",currentClub:"Retired",clubId:"retired",league:"LL",birthYear:1980,goals:266,assists:162,appearances:699,leagueTitles:2,championsLeague:1,goldenBoots:0,isLegend:!0,careerHistory:[{club:"Gremio",years:"1998-2001",goals:21},{club:"Paris Saint-Germain",years:"2001-2003",goals:25},{club:"Barcelona",years:"2003-2008",goals:94},{club:"AC Milan",years:"2008-2011",goals:26},{club:"Flamengo",years:"2011-2012",goals:19},{club:"Atletico Mineiro",years:"2012-2014",goals:24}]},{id:"beckham",name:"David Beckham",fullName:"David Robert Joseph Beckham",nationality:"England",nationalityFlag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿",position:"Midfielder",currentClub:"Retired",clubId:"retired",league:"LL",birthYear:1975,goals:129,assists:214,appearances:719,leagueTitles:10,championsLeague:1,goldenBoots:0,isLegend:!0,careerHistory:[{club:"Manchester United",years:"1992-2003",goals:85},{club:"Preston North End",years:"1994",goals:2},{club:"Real Madrid",years:"2003-2007",goals:20},{club:"LA Galaxy",years:"2007-2012",goals:20},{club:"AC Milan",years:"2009-2010",goals:2},{club:"Paris Saint-Germain",years:"2013",goals:0}]}];let El=[],Tl=[];try{El=(await Jt(()=>import("./ligue1-data-CdcYOm-j.js"),[],import.meta.url)).ligue1Clubs||[]}catch{}try{Tl=(await Jt(()=>import("./bundesliga-data-DaFwweHW.js"),[],import.meta.url)).bundesligaClubs||[]}catch{}let ks=[];try{ks=(await Jt(()=>import("./fixtures-data-NFSFzUxN.js"),[],import.meta.url)).upcomingFixtures||[]}catch{}let wl=[];try{wl=(await Jt(()=>import("./news-data-nAq92Uvw.js"),[],import.meta.url)).newsArticles||[]}catch{}const vi=[{image:`${window.appBasePath}images/hero-1.jpg`,tag:"5 Leagues • 76+ Clubs • 60+ Players",title:'The Ultimate Football <span class="text-gradient">Intelligence Hub</span>',subtitle:"Real data. Smart predictions. Deep insights across Premier League, La Liga, Champions League, Bundesliga & Ligue 1.",cta:{text:"🔮 Predict a Match",page:"predictions"}},{image:`${window.appBasePath}images/hero-2.jpg`,tag:"Head-to-Head Records",title:'Fixtures & <span class="text-gradient">H2H Analysis</span>',subtitle:"43 upcoming matches with full historical head-to-head records, rivalry stats, and match previews.",cta:{text:"📅 View Fixtures",page:"fixtures"}},{image:`${window.appBasePath}images/hero-3.jpg`,tag:"Breaking News",title:'Stay Ahead with <span class="text-gradient">Live News</span>',subtitle:"Match reports, transfer rumors, tactical analysis, and player milestones — all in one place.",cta:{text:"📰 Read News",page:"news"}},{image:`${window.appBasePath}images/hero-4.jpg`,tag:"Records & Legends",title:'Football <span class="text-gradient">Hall of Fame</span>',subtitle:"Explore 50+ years of football history, champions, records, and the legends who shaped the beautiful game.",cta:{text:"📊 Explore",page:"standings"}}],Qc={render(){const i=$i.length+Xi.length+El.length+Tl.length,e=Yi.length,t=ks.filter(l=>l.isBigMatch).slice(0,3),n=wl.filter(l=>l.isHeadline||l.isTrending).slice(0,4),a=Us[Us.length-1],s=Bs[Bs.length-1],r=Ns[Ns.length-1],o=Os[Os.length-1];return`
      <div class="dashboard-page">
        <!-- Hero Carousel -->
        <div class="hero-carousel animate-fade-in" id="hero-carousel">
          <div class="carousel-track" id="carousel-track">
            ${vi.map((l,c)=>`
              <div class="carousel-slide">
                <img src="${l.image}" alt="FootballIQ" loading="${c===0?"eager":"lazy"}" />
                <div class="carousel-overlay">
                  <div class="carousel-tag">${l.tag}</div>
                  <h1 class="carousel-title">${l.title}</h1>
                  <p class="carousel-subtitle">${l.subtitle}</p>
                  <button class="carousel-cta" onclick="navigateTo('${l.cta.page}')">${l.cta.text}</button>
                </div>
              </div>
            `).join("")}
          </div>
          <button class="carousel-nav-btn prev" onclick="carouselPrev()">❮</button>
          <button class="carousel-nav-btn next" onclick="carouselNext()">❯</button>
          <div class="carousel-dots" id="carousel-dots">
            ${vi.map((l,c)=>`<button class="carousel-dot ${c===0?"active":""}" onclick="carouselGoTo(${c})"></button>`).join("")}
          </div>
          <div class="carousel-progress" id="carousel-progress" style="width: 0%;"></div>
        </div>

        <!-- Animated Counter Stats -->
        <div class="dash-stats-row animate-fade-in-up delay-1">
          <div class="dash-stat-card" onclick="navigateTo('clubs')">
            <div class="dash-stat-icon">🏟️</div>
            <div class="dash-stat-number" data-target="${i}">0</div>
            <div class="dash-stat-label">Clubs</div>
            <div class="dash-stat-glow"></div>
          </div>
          <div class="dash-stat-card" onclick="navigateTo('players')">
            <div class="dash-stat-icon">⚽</div>
            <div class="dash-stat-number" data-target="${e}">0</div>
            <div class="dash-stat-label">Players</div>
            <div class="dash-stat-glow"></div>
          </div>
          <div class="dash-stat-card" onclick="navigateTo('fixtures')">
            <div class="dash-stat-icon">📅</div>
            <div class="dash-stat-number" data-target="${ks.length}">0</div>
            <div class="dash-stat-label">Fixtures</div>
            <div class="dash-stat-glow"></div>
          </div>
          <div class="dash-stat-card" onclick="navigateTo('standings')">
            <div class="dash-stat-icon">🏆</div>
            <div class="dash-stat-number" data-target="5">0</div>
            <div class="dash-stat-label">Leagues</div>
            <div class="dash-stat-glow"></div>
          </div>
          <div class="dash-stat-card" onclick="navigateTo('streaming')">
            <div class="dash-stat-icon">📺</div>
            <div class="dash-stat-number" data-target="15">0</div>
            <div class="dash-stat-label">Streams</div>
            <div class="dash-stat-glow"></div>
          </div>
        </div>

        <!-- Featured Big Matches -->
        ${t.length>0?`
          <div class="section-header animate-fade-in-up delay-2" style="margin-top: var(--space-2xl);">
            <h2 class="section-title" style="font-size: var(--fs-2xl);">🔥 Upcoming Big Matches</h2>
            <button class="btn btn-outline btn-sm" onclick="navigateTo('fixtures')">View All →</button>
          </div>
          <div class="dash-matches animate-fade-in-up delay-2">
            ${t.map(l=>`
              <div class="dash-match-card" onclick="navigateTo('fixtures')">
                <div class="dash-match-league">${l.league}</div>
                <div class="dash-match-teams">
                  <span class="dash-team home">${l.homeTeam}</span>
                  <span class="dash-vs">VS</span>
                  <span class="dash-team away">${l.awayTeam}</span>
                </div>
                <div class="dash-match-info">
                  <span>📅 ${l.date}</span>
                  <span>⏰ ${l.time}</span>
                </div>
                ${l.h2h?`<div class="dash-match-h2h">${l.h2h.totalMatches} H2H matches • Last: ${l.h2h.lastMeeting||""}</div>`:""}
              </div>
            `).join("")}
          </div>
        `:""}

        <!-- Explore Grid -->
        <div class="section-header animate-fade-in-up delay-3" style="margin-top: var(--space-2xl);">
          <h2 class="section-title" style="font-size: var(--fs-2xl);">🚀 Explore</h2>
        </div>
        <div class="dash-explore animate-fade-in-up delay-3">
          <div class="dash-explore-card large" onclick="navigateTo('predictions')" style="background-image: url('${window.appBasePath}images/hero-2.jpg');">
            <div class="dash-explore-overlay">
              <div class="dash-explore-icon">🔮</div>
              <div class="dash-explore-title">Match Predictions</div>
              <div class="dash-explore-desc">Pick any 2 clubs from 4 leagues and get AI-powered predictions</div>
            </div>
          </div>
          <div class="dash-explore-card" onclick="navigateTo('players')" style="background-image: url('${window.appBasePath}images/player-forward.jpg');">
            <div class="dash-explore-overlay">
              <div class="dash-explore-icon">👤</div>
              <div class="dash-explore-title">Player Database</div>
              <div class="dash-explore-desc">${e}+ profiles with Wikipedia-style bios</div>
            </div>
          </div>
          <div class="dash-explore-card" onclick="navigateTo('streaming')" style="background-image: url('${window.appBasePath}images/hero-1.jpg');">
            <div class="dash-explore-overlay">
              <div class="dash-explore-icon">📺</div>
              <div class="dash-explore-title">Live Streaming</div>
              <div class="dash-explore-desc">15+ sites to watch live football</div>
            </div>
          </div>
          <div class="dash-explore-card" onclick="navigateTo('clubs')" style="background-image: url('${window.appBasePath}images/stadium-1.jpg');">
            <div class="dash-explore-overlay">
              <div class="dash-explore-icon">🏟️</div>
              <div class="dash-explore-title">Club Profiles</div>
              <div class="dash-explore-desc">${i} clubs with trophy cabinets</div>
            </div>
          </div>
          <div class="dash-explore-card" onclick="navigateTo('transfers')" style="background-image: url('${window.appBasePath}images/news-2.jpg');">
            <div class="dash-explore-overlay">
              <div class="dash-explore-icon">🔄</div>
              <div class="dash-explore-title">Transfer Hub</div>
              <div class="dash-explore-desc">Blockbuster deals & record fees</div>
            </div>
          </div>
          <div class="dash-explore-card" onclick="navigateTo('facts')" style="background-image: url('${window.appBasePath}images/hero-4.jpg');">
            <div class="dash-explore-overlay">
              <div class="dash-explore-icon">📖</div>
              <div class="dash-explore-title">Facts & History</div>
              <div class="dash-explore-desc">50+ amazing football facts</div>
            </div>
          </div>
        </div>

        <!-- Trending News -->
        ${n.length>0?`
          <div class="section-header animate-fade-in-up delay-4" style="margin-top: var(--space-2xl);">
            <h2 class="section-title" style="font-size: var(--fs-2xl);">📰 Trending Now</h2>
            <button class="btn btn-outline btn-sm" onclick="navigateTo('news')">More News →</button>
          </div>
          <div class="dash-news-row animate-fade-in-up delay-4">
            ${n.map((l,c)=>`
              <div class="dash-news-card" onclick="navigateTo('news')">
                <div class="dash-news-img">
                  <img src="${window.appBasePath}images/news-${c%3+1}.jpg" alt="${l.title}" />
                </div>
                <div class="dash-news-body">
                  <span class="dash-news-cat">${l.category}</span>
                  <div class="dash-news-title">${l.title}</div>
                  <div class="dash-news-time">${l.timeAgo} • ${l.source}</div>
                </div>
              </div>
            `).join("")}
          </div>
        `:""}

        <!-- Champions Row -->
        <div class="section-header animate-fade-in-up delay-5" style="margin-top: var(--space-2xl);">
          <h2 class="section-title" style="font-size: var(--fs-2xl);">👑 Reigning Champions & Golden Boots</h2>
        </div>
        <div class="dash-champs animate-fade-in-up delay-5">
          ${a?`
            <div class="dash-champ-card">
              <div class="dash-champ-trophy">🏆</div>
              <div class="dash-champ-name">${a.team}</div>
              <div class="dash-champ-detail">Premier League ${a.season}</div>
            </div>
          `:""}
          ${s?`
            <div class="dash-champ-card">
              <div class="dash-champ-trophy">🏆</div>
              <div class="dash-champ-name">${s.team}</div>
              <div class="dash-champ-detail">La Liga ${s.season}</div>
            </div>
          `:""}
          ${r?`
            <div class="dash-champ-card">
              <div class="dash-champ-trophy">👟</div>
              <div class="dash-champ-name">${r.player}</div>
              <div class="dash-champ-detail">${r.goals} goals • ${r.club}</div>
            </div>
          `:""}
          ${o?`
            <div class="dash-champ-card">
              <div class="dash-champ-trophy">👟</div>
              <div class="dash-champ-name">${o.player}</div>
              <div class="dash-champ-detail">${o.goals} goals • ${o.club}</div>
            </div>
          `:""}
        </div>
      </div>
    `},mount(){ed(),td()}};let ln=0,Al=null,Aa=null;const zs=5e3;function ed(){ln=0,qi(),Hi();const i=document.getElementById("hero-carousel");i&&(i.addEventListener("mouseenter",Ll),i.addEventListener("mouseleave",Hi))}function qi(){const i=document.getElementById("carousel-track"),e=document.querySelectorAll(".carousel-dot");i&&(i.style.transform=`translateX(-${ln*100}%)`,e.forEach((t,n)=>t.classList.toggle("active",n===ln)))}function Hi(){Ll(),vo(),Al=setInterval(()=>{ln=(ln+1)%vi.length,qi(),vo()},zs)}function Ll(){clearInterval(Al),clearInterval(Aa)}function vo(){const i=document.getElementById("carousel-progress");if(!i)return;i.style.width="0%",clearInterval(Aa);let e=0;Aa=setInterval(()=>{e+=40,i.style.width=`${e/zs*100}%`,e>=zs&&clearInterval(Aa)},40)}window.carouselPrev=()=>{ln=(ln-1+vi.length)%vi.length,qi(),Hi()};window.carouselNext=()=>{ln=(ln+1)%vi.length,qi(),Hi()};window.carouselGoTo=i=>{ln=i,qi(),Hi()};function td(){document.querySelectorAll(".dash-stat-number[data-target]").forEach(e=>{const t=parseInt(e.dataset.target),n=1800,a=performance.now(),s=o=>{const l=o-a,c=Math.min(l/n,1),f=1-Math.pow(1-c,4);e.textContent=Math.round(t*f),c<1&&requestAnimationFrame(s)},r=new IntersectionObserver(o=>{o.forEach(l=>{l.isIntersecting&&(requestAnimationFrame(s),r.unobserve(e))})},{threshold:.5});r.observe(e)})}let Cl=[],Rl=[];try{Cl=(await Jt(()=>import("./ligue1-data-CdcYOm-j.js"),[],import.meta.url)).ligue1Clubs||[]}catch{}try{Rl=(await Jt(()=>import("./bundesliga-data-DaFwweHW.js"),[],import.meta.url)).bundesligaClubs||[]}catch{}function yo(){return[...$i.map(i=>({...i,league:"PL",leagueName:"Premier League"})),...Xi.map(i=>({...i,league:"LL",leagueName:"La Liga"})),...Cl.map(i=>({...i,league:"L1",leagueName:"Ligue 1"})),...Rl.map(i=>({...i,league:"BL",leagueName:"Bundesliga"}))]}function nd(i,e){if(!i||!e)return null;const t={historical:.2,form:.15,attack:.2,defense:.1,h2h:.2,homeAdvantage:.15},n=_o(i),a=_o(e),s=(i.attackRating||70)/100,r=(e.attackRating||70)/100,o=(i.defenseRating||70)/100,l=(e.defenseRating||70)/100,c=(i.overallRating||70)/100,f=(e.overallRating||70)/100,g=i.currentRank||10,y=.5+((e.currentRank||10)-g)/20*.3,x=1-y,p=.58,u=n*t.historical+c*t.form+s*t.attack+o*t.defense+y*t.h2h+p*t.homeAdvantage,E=a*t.historical+f*t.form+r*t.attack+l*t.defense+x*t.h2h+.42*t.homeAdvantage,w=u+E;let b=u/w*100,A=E/w*100,S=25-Math.abs(b-A)*.3;S=Math.max(15,Math.min(35,S));const L=100-S,v=b/(b+A);b=L*v,A=L*(1-v);const T=(i.attackRating||70)/35*(1-(e.defenseRating||70)/120)+.4,C=(e.attackRating||70)/35*(1-(i.defenseRating||70)/120)+.2,R=Math.max(0,Math.round(T)),N=Math.max(0,Math.round(C)),X=Math.abs((i.overallRating||70)-(e.overallRating||70)),q=Math.min(95,55+X*1.5);return{homeWin:Math.round(b*10)/10,draw:Math.round(S*10)/10,awayWin:Math.round(A*10)/10,predictedScore:{home:R,away:N},confidence:Math.round(q),factors:{historicalStrength:{home:Math.round(n*100),away:Math.round(a*100)},attackRating:{home:i.attackRating||70,away:e.attackRating||70},defenseRating:{home:i.defenseRating||70,away:e.defenseRating||70},overallForm:{home:i.overallRating||70,away:e.overallRating||70},homeAdvantage:p}}}function _o(i){const e=(i.leagueTitles||0)+(i.championsLeague||0)*2+(i.faCups||i.copas||i.coupeDeFrance||i.dfbPokal||0)*.3;return Math.min(1,e/50+.3)}const id={render(){const e=yo().sort((t,n)=>t.name.localeCompare(n.name)).map(t=>`<option value="${t.id}" data-league="${t.league}">${t.name} (${t.league})</option>`).join("");return`
      <div class="predictions-page">
        <img src="${window.appBasePath}images/hero-2.jpg" class="section-image-banner" alt="Match Predictions" style="height: 220px; margin-bottom: var(--space-xl);" />
        <div class="section-header animate-fade-in">
          <div>
            <h1 class="section-title">🔮 Match Predictions</h1>
            <div class="section-subtitle">Select two teams to predict the match outcome using our statistical model</div>
          </div>
        </div>

        <div class="card-glow animate-fade-in-up delay-1" style="margin-bottom: var(--space-2xl);">
          <div class="prediction-setup">
            <div class="team-selector">
              <label>🏠 Home Team</label>
              <select id="home-team" class="select-input">
                <option value="">Select home team...</option>
                ${e}
              </select>
            </div>
            <div class="vs-divider">VS</div>
            <div class="team-selector">
              <label>✈️ Away Team</label>
              <select id="away-team" class="select-input">
                <option value="">Select away team...</option>
                ${e}
              </select>
            </div>
            <button id="predict-btn" class="btn btn-primary btn-lg btn-pill predict-btn">
              ⚡ Predict Match
            </button>
          </div>
        </div>

        <div id="prediction-result-container"></div>

        <!-- How It Works -->
        <div class="card animate-fade-in-up delay-2" style="margin-top: var(--space-2xl);">
          <h3 style="font-family: var(--font-heading); font-size: var(--fs-xl); font-weight: 700; margin-bottom: var(--space-lg);">
            🧠 How Our Prediction Engine Works
          </h3>
          <div class="grid-auto" style="gap: var(--space-md);">
            <div class="factor-card">
              <div style="font-size: 32px; margin-bottom: 8px;">🏆</div>
              <div class="factor-label">Historical Strength</div>
              <div class="factor-value" style="font-size: var(--fs-sm); color: var(--text-secondary);">Trophy count & league history (25%)</div>
            </div>
            <div class="factor-card">
              <div style="font-size: 32px; margin-bottom: 8px;">📈</div>
              <div class="factor-label">Recent Form</div>
              <div class="factor-value" style="font-size: var(--fs-sm); color: var(--text-secondary);">Last 10 seasons performance (20%)</div>
            </div>
            <div class="factor-card">
              <div style="font-size: 32px; margin-bottom: 8px;">⚔️</div>
              <div class="factor-label">Attack Rating</div>
              <div class="factor-value" style="font-size: var(--fs-sm); color: var(--text-secondary);">Offensive capability score (20%)</div>
            </div>
            <div class="factor-card">
              <div style="font-size: 32px; margin-bottom: 8px;">🛡️</div>
              <div class="factor-label">Defense Rating</div>
              <div class="factor-value" style="font-size: var(--fs-sm); color: var(--text-secondary);">Defensive solidity score (10%)</div>
            </div>
            <div class="factor-card">
              <div style="font-size: 32px; margin-bottom: 8px;">📊</div>
              <div class="factor-label">Head-to-Head</div>
              <div class="factor-value" style="font-size: var(--fs-sm); color: var(--text-secondary);">Relative league standing (15%)</div>
            </div>
            <div class="factor-card">
              <div style="font-size: 32px; margin-bottom: 8px;">🏠</div>
              <div class="factor-label">Home Advantage</div>
              <div class="factor-value" style="font-size: var(--fs-sm); color: var(--text-secondary);">Historical home win boost (10%)</div>
            </div>
          </div>
        </div>
      </div>
    `},mount(){const i=document.getElementById("predict-btn"),e=document.getElementById("home-team"),t=document.getElementById("away-team");i.addEventListener("click",()=>{const n=e.value,a=t.value;if(!n||!a){alert("Please select both teams!");return}if(n===a){alert("Please select two different teams!");return}const s=yo(),r=s.find(c=>c.id===n),o=s.find(c=>c.id===a);if(!r||!o)return;const l=nd(r,o);ad(r,o,l)})}};function ad(i,e,t){const n=document.getElementById("prediction-result-container"),a=t.winner==="home"?`${i.name} Win`:t.winner==="away"?`${e.name} Win`:"Draw",s=t.winner==="home"?"var(--accent-blue)":t.winner==="away"?"var(--accent-crimson)":"var(--accent-gold)";n.innerHTML=`
    <div class="prediction-result animate-scale-in">
      <div style="font-size: var(--fs-xs); text-transform: uppercase; letter-spacing: 2px; color: var(--text-muted); margin-bottom: var(--space-lg); position: relative; z-index: 1;">
        Match Prediction
      </div>
      
      <div class="prediction-teams">
        <div class="prediction-team">
          <div class="team-badge" style="background: ${i.colors?.[0]||"#333"}25;">⚽</div>
          <div class="team-name">${i.name}</div>
          <div style="font-size: var(--fs-xs); color: var(--text-muted);">${i.leagueShort} • Home</div>
        </div>
        <div class="prediction-vs">VS</div>
        <div class="prediction-team">
          <div class="team-badge" style="background: ${e.colors?.[0]||"#333"}25;">⚽</div>
          <div class="team-name">${e.name}</div>
          <div style="font-size: var(--fs-xs); color: var(--text-muted);">${e.leagueShort} • Away</div>
        </div>
      </div>

      <div class="prediction-score">${t.predictedScore}</div>
      
      <div style="font-family: var(--font-heading); font-size: var(--fs-2xl); font-weight: 800; color: ${s}; margin-bottom: var(--space-xl); position: relative; z-index: 1;">
        ${a}
      </div>

      <div class="probability-bar">
        <div class="prob-home" style="width: ${t.homeProb}%">${t.homeProb}%</div>
        <div class="prob-draw" style="width: ${t.drawProb}%">${t.drawProb}%</div>
        <div class="prob-away" style="width: ${t.awayProb}%">${t.awayProb}%</div>
      </div>
      <div class="probability-labels">
        <span>${i.name}</span>
        <span>Draw</span>
        <span>${e.name}</span>
      </div>

      <div class="confidence-meter">
        <div class="confidence-label">Prediction Confidence: <strong>${t.confidence}%</strong></div>
        <div class="confidence-bar">
          <div class="confidence-fill" style="width: ${t.confidence}%"></div>
        </div>
      </div>

      <div class="key-factors">
        ${t.factors.map(r=>`
          <div class="factor-card">
            <div class="factor-label">${r.label}</div>
            <div class="factor-value" style="color: var(--accent-blue);">${r.value}</div>
            <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">${r.detail}</div>
          </div>
        `).join("")}
      </div>
    </div>
  `,setTimeout(()=>{n.querySelector(".prob-home")?.style.setProperty("width",`${t.homeProb}%`),n.querySelector(".prob-draw")?.style.setProperty("width",`${t.drawProb}%`),n.querySelector(".prob-away")?.style.setProperty("width",`${t.awayProb}%`)},100),n.scrollIntoView({behavior:"smooth",block:"start"})}let Pl=[],Fl=[],Il={},Dl={},sd=[],Ul=[],Nl=[],Bl={},Ol={},rd=[],kl=[],zl=[],Hl={},Gl={};try{const i=await Jt(()=>import("./ucl-data-D_i3kZVX.js"),[],import.meta.url);Pl=i.uclWinners||[],Fl=i.uclTopScorers||[],Il=i.uclRecords||{},Dl=i.uclTitleCount||{}}catch{console.warn("UCL data not loaded")}try{const i=await Jt(()=>import("./ligue1-data-CdcYOm-j.js"),[],import.meta.url);sd=i.ligue1Clubs||[],Ul=i.ligue1Champions||[],Nl=i.ligue1TopScorers||[],Bl=i.ligue1Records||{},Ol=i.ligue1TitleCount||{}}catch{console.warn("Ligue 1 data not loaded")}try{const i=await Jt(()=>import("./bundesliga-data-DaFwweHW.js"),[],import.meta.url);rd=i.bundesligaClubs||[],kl=i.bundesligaChampions||[],zl=i.bundesligaTopScorers||[],Hl=i.bundesligaRecords||{},Gl=i.bundesligaTitleCount||{}}catch{console.warn("Bundesliga data not loaded")}let yi="PL",Vl="champions";const Wl={PL:{name:"Premier League",emoji:"🏴󠁧󠁢󠁥󠁮󠁧󠁿",badge:"badge-pl",champions:Us,scorers:Ns,records:Kc,titleCount:Jc},LL:{name:"La Liga",emoji:"🇪🇸",badge:"badge-liga",champions:Bs,scorers:Os,records:Zc,titleCount:jc},UCL:{name:"Champions League",emoji:"⭐",badge:"badge-info",champions:Pl,scorers:Fl,records:Il,titleCount:Dl},L1:{name:"Ligue 1",emoji:"🇫🇷",badge:"badge-info",champions:Ul,scorers:Nl,records:Bl,titleCount:Ol},BL:{name:"Bundesliga",emoji:"🇩🇪",badge:"badge-danger",champions:kl,scorers:zl,records:Hl,titleCount:Gl}},od={render(){return`
      <div class="standings-page">
        <div class="section-header animate-fade-in">
          <div>
            <h1 class="section-title">📊 Standings & Records</h1>
            <div class="section-subtitle">Champions, top scorers, records, and title counts across 5 major leagues</div>
          </div>
        </div>

        <!-- League Selector -->
        <div class="standings-controls animate-fade-in-up delay-1">
          <div class="btn-group" id="league-selector">
            ${Object.entries(Wl).map(([i,e])=>`<button class="btn-tab ${i===yi?"active":""}" data-league="${i}">${e.emoji} ${e.name}</button>`).join("")}
          </div>
        </div>

        <!-- Tab Selector -->
        <div class="standings-controls animate-fade-in-up delay-1" style="margin-top: var(--space-md);">
          <div class="btn-group" id="tab-selector">
            <button class="btn-tab active" data-tab="champions">🏆 Champions</button>
            <button class="btn-tab" data-tab="scorers">⚽ Top Scorers</button>
            <button class="btn-tab" data-tab="titles">📊 Title Count</button>
            <button class="btn-tab" data-tab="records">🌟 Records</button>
          </div>
        </div>

        <div id="standings-content" class="animate-fade-in-up delay-2"></div>
      </div>
    `},mount(){Za(),document.getElementById("league-selector")?.addEventListener("click",i=>{const e=i.target.closest(".btn-tab");e&&(yi=e.dataset.league,document.querySelectorAll("#league-selector .btn-tab").forEach(t=>t.classList.remove("active")),e.classList.add("active"),Za())}),document.getElementById("tab-selector")?.addEventListener("click",i=>{const e=i.target.closest(".btn-tab");e&&(Vl=e.dataset.tab,document.querySelectorAll("#tab-selector .btn-tab").forEach(t=>t.classList.remove("active")),e.classList.add("active"),Za())})}};function Za(){const i=document.getElementById("standings-content");if(!i)return;const e=Wl[yi];switch(Vl){case"champions":i.innerHTML=ld(e);break;case"scorers":i.innerHTML=cd(e);break;case"titles":i.innerHTML=dd(e);break;case"records":i.innerHTML=ud(e);break}}function ld(i){const e=i.champions||[];return e.length?`
    <div class="card" style="margin-top: var(--space-xl);">
      <h3 style="font-family: var(--font-heading); font-size: var(--fs-xl); font-weight: 700; margin-bottom: var(--space-lg);">
        ${i.emoji} ${i.name} Champions
      </h3>
      <div class="table-container">
        <table class="data-table">
          <thead><tr><th>Season</th><th>Champion</th><th>${yi==="UCL"?"Runner-up":"Points"}</th>${e[0]?.manager?"<th>Manager</th>":""}</tr></thead>
          <tbody>
            ${e.map((t,n)=>`
              <tr ${n===0?'style="background: rgba(251,191,36,0.06);"':""}>
                <td style="font-weight: 600; color: var(--accent-blue);">${t.season}</td>
                <td style="font-weight: 700;">${t.team}</td>
                <td>${yi==="UCL"?t.runner||"—":t.points||"—"}</td>
                ${t.manager?`<td style="color: var(--text-secondary);">${t.manager}</td>`:""}
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `:'<div class="empty-state"><div class="empty-icon">🏆</div><div class="empty-title">No champions data available</div></div>'}function cd(i){const e=i.scorers||[];return e.length?yi==="UCL"?`
      <div class="card" style="margin-top: var(--space-xl);">
        <h3 style="font-family: var(--font-heading); font-size: var(--fs-xl); font-weight: 700; margin-bottom: var(--space-lg);">
          ⭐ Champions League All-Time Top Scorers
        </h3>
        <div class="table-container">
          <table class="data-table">
            <thead><tr><th>#</th><th>Player</th><th>Goals</th><th>Clubs</th></tr></thead>
            <tbody>
              ${e.map((n,a)=>`
                <tr ${a<3?'style="background: rgba(251,191,36,0.04);"':""}>
                  <td style="font-weight: 800; color: ${a<3?"var(--accent-gold)":"var(--text-muted)"};">${n.rank||a+1}</td>
                  <td style="font-weight: 700;">${n.player}</td>
                  <td style="font-weight: 800; color: var(--accent-blue);">${n.goals}</td>
                  <td style="font-size: var(--fs-xs); color: var(--text-secondary);">${n.clubs||""}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `:`
    <div class="card" style="margin-top: var(--space-xl);">
      <h3 style="font-family: var(--font-heading); font-size: var(--fs-xl); font-weight: 700; margin-bottom: var(--space-lg);">
        ${i.emoji} ${i.name} Top Scorers
      </h3>
      <div class="table-container">
        <table class="data-table">
          <thead><tr><th>Season</th><th>Player</th><th>Club</th><th>Goals</th></tr></thead>
          <tbody>
            ${e.map((n,a)=>`
              <tr ${a===0?'style="background: rgba(251,191,36,0.06);"':""}>
                <td style="font-weight: 600; color: var(--accent-blue);">${n.season}</td>
                <td style="font-weight: 700;">${n.player}</td>
                <td style="color: var(--text-secondary);">${n.club}</td>
                <td style="font-weight: 800; color: var(--accent-gold);">${n.goals}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `:'<div class="empty-state"><div class="empty-icon">⚽</div><div class="empty-title">No scorers data available</div></div>'}function dd(i){const e=i.titleCount||{},t=Object.entries(e).sort((a,s)=>s[1]-a[1]);if(!t.length)return'<div class="empty-state"><div class="empty-icon">📊</div><div class="empty-title">No title data available</div></div>';const n=t[0][1];return`
    <div class="card" style="margin-top: var(--space-xl);">
      <h3 style="font-family: var(--font-heading); font-size: var(--fs-xl); font-weight: 700; margin-bottom: var(--space-lg);">
        ${i.emoji} ${i.name} — Title Count
      </h3>
      <div style="display: grid; gap: 10px;">
        ${t.map(([a,s],r)=>`
          <div style="display: flex; align-items: center; gap: 16px;">
            <span style="font-weight: 800; color: ${r<3?"var(--accent-gold)":"var(--text-muted)"}; min-width: 28px; text-align: right;">${r+1}</span>
            <span style="min-width: 200px; font-weight: 600;">${a}</span>
            <div style="flex: 1; height: 28px; background: var(--bg-glass); border-radius: var(--radius-full); overflow: hidden;">
              <div style="width: ${s/n*100}%; height: 100%; background: linear-gradient(90deg, var(--accent-blue), var(--accent-purple)); border-radius: var(--radius-full); display: flex; align-items: center; padding-left: 10px; min-width: 40px;">
                <span style="font-weight: 800; font-size: 12px; color: white;">${s}</span>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `}function ud(i){const e=i.records||{},t=Object.entries(e);if(!t.length)return'<div class="empty-state"><div class="empty-icon">🌟</div><div class="empty-title">No records data available</div></div>';const n=a=>a.replace(/([A-Z])/g," $1").replace(/^./,s=>s.toUpperCase());return`
    <div class="records-grid" style="margin-top: var(--space-xl);">
      ${t.map(([a,s])=>{if(typeof s!="object"||Array.isArray(s))return"";const r=a.includes("goal")||a.includes("Goal")?"⚽":a.includes("win")||a.includes("Win")||a.includes("title")||a.includes("Title")?"🏆":a.includes("clean")||a.includes("Clean")?"🧤":a.includes("young")||a.includes("Young")?"👶":a.includes("fast")||a.includes("Fast")?"⚡":a.includes("point")||a.includes("Point")?"💯":a.includes("app")||a.includes("App")||a.includes("final")||a.includes("Final")?"📋":a.includes("unbeat")||a.includes("Unbeat")||a.includes("consec")||a.includes("Consec")?"🔥":"🌟",o=s.goals||s.wins||s.points||s.assists||s.apps||s.cleanSheets||s.appearances||s.titles||s.games||s.finals||s.seconds||"—",l=[s.player,s.team,s.match].filter(Boolean).join(" • "),c=[s.season,s.club,s.seasons,s.age].filter(Boolean).join(" • ");return`
          <div class="record-card">
            <div class="record-icon">${r}</div>
            <div class="record-title">${n(a)}</div>
            <div class="record-value">${o}</div>
            <div class="record-detail">${l}</div>
            ${c?`<div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">${c}</div>`:""}
          </div>
        `}).join("")}
    </div>
  `}let Ga=[],Va=[];try{Ga=(await Jt(()=>import("./ligue1-data-CdcYOm-j.js"),[],import.meta.url)).ligue1Clubs||[]}catch{}try{Va=(await Jt(()=>import("./bundesliga-data-DaFwweHW.js"),[],import.meta.url)).bundesligaClubs||[]}catch{}let gn="all",Di="";const hd={render(){return`
      <div class="clubs-page">
        <img src="${window.appBasePath}images/stadium-2.jpg" class="section-image-banner" alt="Clubs" style="height: 220px; margin-bottom: var(--space-xl);" />
        <div class="section-header animate-fade-in">
          <div>
            <h1 class="section-title">🏟️ Club Profiles</h1>
            <div class="section-subtitle">Explore ${$i.length+Xi.length+Ga.length+Va.length} clubs across 4 leagues</div>
          </div>
        </div>

        <div class="standings-controls animate-fade-in-up delay-1">
          <div class="btn-group" id="club-league-filter">
            <button class="btn-tab active" data-filter="all">All Clubs</button>
            <button class="btn-tab" data-filter="PL">🏴󠁧󠁢󠁥󠁮󠁧󠁿 PL</button>
            <button class="btn-tab" data-filter="LL">🇪🇸 La Liga</button>
            <button class="btn-tab" data-filter="L1">🇫🇷 Ligue 1</button>
            <button class="btn-tab" data-filter="BL">🇩🇪 Bundesliga</button>
          </div>
          <div class="search-box">
            <span class="search-icon">🔍</span>
            <input type="text" id="club-search" class="search-input" placeholder="Search clubs..." />
          </div>
        </div>

        <div id="clubs-grid" class="clubs-grid animate-fade-in-up delay-2"></div>
        <div id="club-modal-container"></div>
      </div>
    `},mount(){ja(),document.getElementById("club-league-filter").addEventListener("click",i=>{const e=i.target.closest(".btn-tab");e&&(gn=e.dataset.filter,document.querySelectorAll("#club-league-filter .btn-tab").forEach(t=>t.classList.remove("active")),e.classList.add("active"),ja())}),document.getElementById("club-search").addEventListener("input",i=>{Di=i.target.value.toLowerCase(),ja()})}};function fd(){let i=[];return(gn==="all"||gn==="PL")&&(i=i.concat($i.map(e=>({...e,league:"PL"})))),(gn==="all"||gn==="LL")&&(i=i.concat(Xi.map(e=>({...e,league:"LL"})))),(gn==="all"||gn==="L1")&&(i=i.concat(Ga.map(e=>({...e,league:"L1"})))),(gn==="all"||gn==="BL")&&(i=i.concat(Va.map(e=>({...e,league:"BL"})))),Di&&(i=i.filter(e=>e.name.toLowerCase().includes(Di)||e.city?.toLowerCase().includes(Di)||e.nickname?.toLowerCase().includes(Di))),i.sort((e,t)=>(t.leagueTitles||0)-(e.leagueTitles||0))}function ja(){const i=document.getElementById("clubs-grid");if(!i)return;const e=fd();if(e.length===0){i.innerHTML=`
      <div class="empty-state" style="grid-column: 1 / -1;">
        <div class="empty-icon">🏟️</div>
        <div class="empty-title">No clubs found</div>
        <div class="empty-text">Try adjusting your search or filter</div>
      </div>
    `;return}i.innerHTML=e.map((t,n)=>`
    <div class="club-card" onclick="showClubDetail('${t.id}', '${t.league}')" id="club-${t.id}">
      <div style="height: 120px; overflow: hidden; border-radius: var(--radius-lg) var(--radius-lg) 0 0; margin: -16px -16px 12px -16px; position: relative;">
        <img src="${window.appBasePath}images/stadium-${n%2+1}.jpg" alt="${t.stadium||t.name}" style="width: 100%; height: 100%; object-fit: cover; filter: brightness(0.6);" loading="lazy" />
        <div style="position: absolute; inset: 0; background: linear-gradient(to top, var(--bg-primary) 10%, transparent 70%);"></div>
        <div style="position: absolute; top: 8px; left: 8px;">
          <div class="club-color-bar" style="background: linear-gradient(90deg, ${t.colors?.[0]||"#333"}, ${t.colors?.[1]||"#666"}); width: 40px; height: 4px; border-radius: 4px;"></div>
        </div>
        <span class="badge ${t.league==="PL"?"badge-pl":t.league==="LL"?"badge-liga":"badge-info"}" style="position: absolute; top: 8px; right: 8px; font-size: 9px;">${t.league}</span>
      </div>
      <div class="club-header" style="padding: 0 4px;">
        <div class="club-badge" style="background: ${t.colors?.[0]||"#333"}25; color: ${t.colors?.[0]||"#fff"}; border: 2px solid ${t.colors?.[0]||"#333"}40;">
          ⚽
        </div>
        <div>
          <div class="club-name">${t.name}</div>
          <div class="club-meta">
            ${t.city||""} • Est. ${t.founded||"?"}
          </div>
        </div>
      </div>
      <div style="font-size: var(--fs-xs); color: var(--text-muted); margin-bottom: var(--space-md); font-style: italic; padding: 0 4px;">
        "${t.nickname||""}"
      </div>
      <div class="club-stats">
        <div class="club-stat">
          <div class="club-stat-value">${t.leagueTitles||0}</div>
          <div class="club-stat-label">League</div>
        </div>
        <div class="club-stat">
          <div class="club-stat-value">${t.championsLeague||0}</div>
          <div class="club-stat-label">UCL</div>
        </div>
        <div class="club-stat">
          <div class="club-stat-value">${t.faCups||t.copas||0}</div>
          <div class="club-stat-label">${t.league==="PL"?"FA Cup":"Copa"}</div>
        </div>
      </div>
      <div style="margin-top: var(--space-md); display: flex; gap: 6px; flex-wrap: wrap;">
        ${(t.keyPlayers||[]).map(a=>`<span class="badge badge-info" style="font-size: 10px;">${a}</span>`).join("")}
      </div>
    </div>
  `).join("")}window.showClubDetail=function(i,e){const n=[...$i.map(s=>({...s,league:"PL"})),...Xi.map(s=>({...s,league:"LL"})),...Ga.map(s=>({...s,league:"L1"})),...Va.map(s=>({...s,league:"BL"}))].find(s=>s.id===i);if(!n)return;const a=document.getElementById("club-modal-container");a.innerHTML=`
    <div class="modal-overlay" onclick="closeClubModal(event)">
      <div class="modal-content" style="padding: 0; overflow: hidden;" onclick="event.stopPropagation()">
        <!-- Stadium Hero Banner -->
        <div style="position: relative; height: 220px; overflow: hidden;">
          <img src="${window.appBasePath}images/stadium-1.jpg" alt="${n.stadium||n.name}" style="width: 100%; height: 100%; object-fit: cover; filter: brightness(0.45);" />
          <div style="position: absolute; inset: 0; background: linear-gradient(to top, var(--bg-primary) 0%, transparent 50%);"></div>
          <div style="position: absolute; bottom: 20px; left: 28px; z-index: 2;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
              <div style="width: 50px; height: 50px; border-radius: var(--radius-md); background: ${n.colors?.[0]||"#333"}30; display: flex; align-items: center; justify-content: center; font-size: 24px; border: 2px solid ${n.colors?.[0]||"#333"}60; backdrop-filter: blur(4px);">⚽</div>
              <div>
                <h2 style="font-family: var(--font-heading); font-size: var(--fs-3xl); font-weight: 900; color: white; text-shadow: 0 2px 10px rgba(0,0,0,0.5);">${n.name}</h2>
                <div style="color: rgba(255,255,255,0.7); font-size: var(--fs-sm);">${n.fullName||n.name}</div>
              </div>
            </div>
            <div style="display: flex; gap: 6px;">
              <div class="club-color-bar" style="background: linear-gradient(90deg, ${n.colors?.[0]||"#333"}, ${n.colors?.[1]||"#666"}); width: 60px; height: 4px; border-radius: 4px;"></div>
            </div>
          </div>
          <button class="modal-close" onclick="closeClubModal()" style="position: absolute; top: 12px; right: 12px; z-index: 3;">✕</button>
        </div>
        <div style="padding: 20px 28px 28px 28px;">
          <!-- Club Info -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; margin-bottom: 24px;">
            <div class="factor-card">
              <div class="factor-label">Founded</div>
              <div class="factor-value">${n.founded||"?"}</div>
            </div>
            <div class="factor-card">
              <div class="factor-label">Stadium</div>
              <div class="factor-value" style="font-size: var(--fs-sm);">${n.stadium||"?"}</div>
            </div>
            <div class="factor-card">
              <div class="factor-label">Capacity</div>
              <div class="factor-value">${n.capacity?.toLocaleString()||"?"}</div>
            </div>
            <div class="factor-card">
              <div class="factor-label">Manager</div>
              <div class="factor-value" style="font-size: var(--fs-sm);">${n.manager||"?"}</div>
            </div>
            <div class="factor-card">
              <div class="factor-label">Nickname</div>
              <div class="factor-value" style="font-size: var(--fs-sm);">"${n.nickname||"?"}"</div>
            </div>
            <div class="factor-card">
              <div class="factor-label">City</div>
              <div class="factor-value" style="font-size: var(--fs-sm);">${n.city||"?"}</div>
            </div>
          </div>

          <!-- Description -->
          ${n.description?`<p style="color: var(--text-secondary); font-size: var(--fs-sm); line-height: 1.7; margin-bottom: 24px; padding: 16px; background: var(--bg-glass); border-radius: var(--radius-md);">${n.description}</p>`:""}

          <!-- Trophy Cabinet -->
          <h3 style="font-family: var(--font-heading); font-size: var(--fs-lg); font-weight: 700; margin-bottom: 16px;">🏆 Trophy Cabinet</h3>
          <div class="trophy-cabinet" style="margin-bottom: 24px;">
            <div class="trophy-item">
              <div class="trophy-icon">🏆</div>
              <div class="trophy-count">${n.leagueTitles||0}</div>
              <div class="trophy-label">League</div>
            </div>
            <div class="trophy-item">
              <div class="trophy-icon">🏅</div>
              <div class="trophy-count">${n.faCups||n.copas||0}</div>
              <div class="trophy-label">${e==="PL"?"FA Cup":"Copa del Rey"}</div>
            </div>
            <div class="trophy-item">
              <div class="trophy-icon">🥇</div>
              <div class="trophy-count">${n.leagueCups||n.supercopas||0}</div>
              <div class="trophy-label">${e==="PL"?"League Cup":"Supercopa"}</div>
            </div>
            <div class="trophy-item">
              <div class="trophy-icon">⭐</div>
              <div class="trophy-count">${n.championsLeague||0}</div>
              <div class="trophy-label">UCL</div>
            </div>
            <div class="trophy-item">
              <div class="trophy-icon">🌟</div>
              <div class="trophy-count">${n.europaLeague||0}</div>
              <div class="trophy-label">UEL</div>
            </div>
          </div>

          <!-- Ratings -->
          <h3 style="font-family: var(--font-heading); font-size: var(--fs-lg); font-weight: 700; margin-bottom: 16px;">📊 Ratings</h3>
          <div style="display: grid; gap: 12px; margin-bottom: 24px;">
            <div>
              <div style="display: flex; justify-content: space-between; font-size: var(--fs-sm); margin-bottom: 4px;">
                <span>Attack</span><span style="color: var(--accent-blue); font-weight: 700;">${n.attackRating||0}</span>
              </div>
              <div class="progress-bar"><div class="progress-fill" style="width: ${n.attackRating||0}%; background: var(--accent-blue);"></div></div>
            </div>
            <div>
              <div style="display: flex; justify-content: space-between; font-size: var(--fs-sm); margin-bottom: 4px;">
                <span>Defense</span><span style="color: var(--accent-green); font-weight: 700;">${n.defenseRating||0}</span>
              </div>
              <div class="progress-bar"><div class="progress-fill" style="width: ${n.defenseRating||0}%; background: var(--accent-green);"></div></div>
            </div>
            <div>
              <div style="display: flex; justify-content: space-between; font-size: var(--fs-sm); margin-bottom: 4px;">
                <span>Overall</span><span style="color: var(--accent-gold); font-weight: 700;">${n.overallRating||0}</span>
              </div>
              <div class="progress-bar"><div class="progress-fill" style="width: ${n.overallRating||0}%; background: var(--gradient-gold);"></div></div>
            </div>
          </div>

          <!-- Achievements -->
          ${n.achievements&&n.achievements.length>0?`
            <h3 style="font-family: var(--font-heading); font-size: var(--fs-lg); font-weight: 700; margin-bottom: 16px;">⭐ Key Achievements</h3>
            <div style="display: grid; gap: 8px;">
              ${n.achievements.map(s=>`
                <div style="padding: 10px 16px; background: var(--bg-glass); border-radius: var(--radius-sm); font-size: var(--fs-sm); color: var(--text-secondary); border-left: 3px solid var(--accent-gold);">
                  🏅 ${s}
                </div>
              `).join("")}
            </div>
          `:""}

          <!-- Key Players -->
          ${n.keyPlayers&&n.keyPlayers.length>0?`
            <h3 style="font-family: var(--font-heading); font-size: var(--fs-lg); font-weight: 700; margin: 24px 0 16px;">⚽ Key Players</h3>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              ${n.keyPlayers.map(s=>`<span class="badge badge-info" style="padding: 6px 14px;">${s}</span>`).join("")}
            </div>
          `:""}
        </div>
      </div>
    </div>
  `};window.closeClubModal=function(i){if(i&&i.target!==i.currentTarget)return;const e=document.getElementById("club-modal-container");e&&(e.innerHTML="")};const $l={messi:{fullBio:`Lionel Andrés "Leo" Messi (born 24 June 1987) is an Argentine professional footballer who plays as a forward for and captains both Major League Soccer club Inter Miami and the Argentina national team. Widely regarded as one of the greatest players in history, Messi has set numerous records for individual accolades won throughout his professional footballing career, including eight Ballon d'Or awards, six European Golden Shoes, and being named the world's best player by FIFA eight times.

In 2025, he was named the All Time Men's World Best Player by the IFFHS. Messi is the most decorated player in the history of professional football, having won 46 team trophies. His records include most goals in a calendar year (91), most goals for a single club (672 for Barcelona), most goals in La Liga (474), most assists in the FIFA World Cup (12), and most assists in international football (65).

In 2004, Messi made his competitive debut for Barcelona at age 17. He gradually established himself as an integral player for the club, and during his first uninterrupted season in 2008-09 he helped Barcelona achieve the first treble in Spanish football. This resulted in Messi winning the first of four consecutive Ballons d'Or.

During the 2014-15 season, he became the all-time top scorer in La Liga. Financial difficulties at Barcelona forced Messi to depart in 2021 and sign with Paris Saint-Germain.`,sections:[{title:"Early Life",content:"Born in Rosario, Argentina, Messi was diagnosed with a growth hormone deficiency as a child. At age 13, he relocated to Spain to join Barcelona, who agreed to pay for his medical treatment. He made his competitive debut at age 17 in October 2004."},{title:"Club Career",subsections:[{title:"Barcelona (2004-2021)",content:"Messi spent 17 years at Barcelona, becoming the club's all-time top scorer with 672 goals in 778 appearances. He won 10 La Liga titles, 7 Copa del Rey trophies, and 4 Champions League titles with the club. His most prolific year was 2012, when he scored 91 goals in a calendar year, breaking Gerd Müller's 40-year record."},{title:"Paris Saint-Germain (2021-2023)",content:"After financial difficulties forced his departure from Barcelona, Messi joined PSG on a free transfer. He scored 32 goals in 75 appearances, winning two Ligue 1 titles."},{title:"Inter Miami (2023-present)",content:"Messi joined Inter Miami in July 2023, leading them to the Leagues Cup title in his debut tournament. He has continued to perform at an elite level in MLS."}]},{title:"International Career",content:"Messi is Argentina's all-time leading scorer and appearance maker. He led Argentina to victory at the 2021 Copa América and the 2022 FIFA World Cup, where he scored seven goals and was named the tournament's best player. He also won the 2024 Copa América."},{title:"Playing Style",content:"Primarily deployed as a right winger or false nine, Messi is renowned for his dribbling, vision, passing, and finishing. His low center of gravity and exceptional balance allow him to change direction rapidly while maintaining close control of the ball."}],personalInfo:{fullName:"Lionel Andrés Messi",dateOfBirth:"24 June 1987",placeOfBirth:"Rosario, Santa Fe, Argentina",height:"1.70 m (5 ft 7 in)",position:"Forward",currentTeam:"Inter Miami",number:10,youthCareer:"Newell's Old Boys (1995-2000), Barcelona (2000-2004)",seniorCareer:[{club:"Barcelona",years:"2004-2021",apps:778,goals:672},{club:"Paris Saint-Germain",years:"2021-2023",apps:75,goals:32},{club:"Inter Miami",years:"2023-present",apps:69,goals:41}],internationalCareer:{team:"Argentina",years:"2005-present",apps:187,goals:112}},honours:[{category:"Barcelona",items:["La Liga (10)","Copa del Rey (7)","UEFA Champions League (4)","FIFA Club World Cup (3)"]},{category:"PSG",items:["Ligue 1 (2)"]},{category:"Inter Miami",items:["Leagues Cup (1)"]},{category:"Argentina",items:["FIFA World Cup (1)","Copa América (2)","Olympic Gold Medal (1)"]},{category:"Individual",items:["Ballon d'Or (8)","FIFA World Cup Golden Ball (2)","European Golden Shoe (6)","FIFA Best Men's Player (3)"]}]},ronaldo:{fullBio:`Cristiano Ronaldo dos Santos Aveiro (born 5 February 1985) is a Portuguese professional footballer who plays as a forward for and captains both Saudi Pro League club Al Nassr and the Portugal national team. Widely regarded as one of the greatest players of all time, Ronaldo has won five Ballon d'Or awards and four European Golden Shoes, the most by a European player.

He has won 35 trophies in his career, including seven league titles, five UEFA Champions Leagues, the UEFA European Championship and the UEFA Nations League. Ronaldo holds the records for most appearances (183), goals (140), and assists (42) in the Champions League, most goals in the European Championship (14), most international goals (130), and most international appearances (212).

He began his senior club career playing for Sporting CP, before signing with Manchester United in 2003, winning the FA Cup in his first season. He would also go on to win three consecutive Premier League titles, the Champions League and the FIFA Club World Cup. In 2009, Ronaldo was the subject of the then-most expensive association football transfer when signed for Real Madrid in a transfer worth €94 million.`,sections:[{title:"Early Life",content:"Born and raised in Madeira, Ronaldo began his senior club career playing for Sporting CP, before signing with Manchester United in 2003, aged 18, winning the FA Cup in his first season."},{title:"Club Career",subsections:[{title:"Manchester United (2003-2009, 2021-2022)",content:"Ronaldo won his first Ballon d'Or at United in 2008. He scored 145 goals across two spells."},{title:"Real Madrid (2009-2018)",content:"He became Real Madrid's all-time top goalscorer with 450 goals in 438 appearances, winning four Champions League titles."},{title:"Juventus & Al Nassr (2018-present)",content:"Ronaldo moved to Juventus in 2018, winning two Serie A titles, before returning to United and then joining Al Nassr in 2023."}]},{title:"International Career",content:"Ronaldo is the all-time leading scorer in men's international football. He captained Portugal to victory at Euro 2016 and the 2019 UEFA Nations League."}],personalInfo:{fullName:"Cristiano Ronaldo dos Santos Aveiro",dateOfBirth:"5 February 1985",placeOfBirth:"Funchal, Madeira, Portugal",height:"1.87 m (6 ft 2 in)",position:"Forward",currentTeam:"Al Nassr",number:7,seniorCareer:[{club:"Sporting CP",years:"2002-2003",apps:31,goals:5},{club:"Manchester United",years:"2003-2009",apps:292,goals:118},{club:"Real Madrid",years:"2009-2018",apps:438,goals:450},{club:"Juventus",years:"2018-2021",apps:134,goals:101},{club:"Manchester United",years:"2021-2022",apps:54,goals:27},{club:"Al Nassr",years:"2023-present",apps:70,goals:64}]},honours:[{category:"Manchester United",items:["Premier League (3)","Champions League (1)"]},{category:"Real Madrid",items:["La Liga (2)","Champions League (4)"]},{category:"Portugal",items:["UEFA European Championship (1)","UEFA Nations League (1)"]},{category:"Individual",items:["Ballon d'Or (5)","European Golden Shoe (4)"]}]},haaland:{fullBio:`Erling Braut Haaland (born 21 July 2000) is a Norwegian professional footballer who plays as a striker for Premier League club Manchester City and the Norway national team. Considered one of the best players in the world, he is known for his speed, strength, positioning, and finishing inside the box.

Coming through the youth system, Haaland played at senior level for Bryne's reserve and first teams. He then moved to Molde in 2017 with whom he spent two seasons. Haaland signed with Austrian Bundesliga side Red Bull Salzburg in January 2019, winning two league titles and one Austrian Cup.

In December 2019, he moved to German Bundesliga club Borussia Dortmund, where he won the DFB-Pokal in 2020-21. In the summer of 2022, he transferred to Manchester City for a fee of €60 million. In his debut season, he broke the Premier League record for the most goals scored by a player in a single season, with 36 goals.`,sections:[{title:"Club Career",subsections:[{title:"Borussia Dortmund (2020-2022)",content:"Haaland scored 86 goals in 89 games across all competitions for Dortmund."},{title:"Manchester City (2022-present)",content:"In his first season, he won the treble (Premier League, FA Cup, and Champions League) and broke the single-season Premier League goalscoring record."}]},{title:"Playing Style",content:"Haaland is a true number 9, characterized by his explosive pace, immense physical strength, and predatory finishing instincts."}],personalInfo:{fullName:"Erling Braut Haaland",dateOfBirth:"21 July 2000",placeOfBirth:"Leeds, England",height:"1.95 m (6 ft 5 in)",position:"Striker",currentTeam:"Manchester City",number:9,seniorCareer:[{club:"Bryne",years:"2016-2017",apps:16,goals:0},{club:"Molde",years:"2017-2018",apps:50,goals:20},{club:"Red Bull Salzburg",years:"2019-2020",apps:27,goals:29},{club:"Borussia Dortmund",years:"2020-2022",apps:89,goals:86},{club:"Manchester City",years:"2022-present",apps:100,goals:90}]},honours:[{category:"Manchester City",items:["Premier League (2)","UEFA Champions League (1)","FA Cup (1)"]},{category:"Individual",items:["European Golden Shoe (1)","Premier League Golden Boot (2)"]}]},mbappe:{fullBio:`Kylian Mbappé Lottin (born 20 December 1998) is a French professional footballer who plays as a forward for La Liga club Real Madrid and captains the France national team. Regarded as one of the best players in the world, he is renowned for his exceptional speed, dribbling abilities, and finishing.

Born in Paris and raised in nearby Bondy, Mbappé began his senior club career in 2015 playing for Monaco, where he won the Ligue 1 title. In 2017, aged 18, Mbappé signed for Paris Saint-Germain on an eventual permanent transfer worth €180 million, making him the second-most expensive player and most expensive teenage player.

There, he won six Ligue 1 titles and four Coupes de France, including a domestic quadruple in the 2019-20 season, while also leading the club to its first UEFA Champions League final in 2020. He is the club's all-time top goalscorer. After his contract expired in 2024, he signed for Real Madrid.`,sections:[{title:"Club Career",subsections:[{title:"Paris Saint-Germain (2017-2024)",content:"Mbappé became PSG's all-time top scorer with 256 goals. He won numerous domestic titles and reached the Champions League final."},{title:"Real Madrid (2024-present)",content:"Joined Real Madrid in the summer of 2024."}]},{title:"International Career",content:"At the 2018 FIFA World Cup, Mbappé became the youngest French player to score at a World Cup, and became the second teenager, after Pelé, to score in a World Cup Final. He scored a hat-trick in the 2022 final."}],personalInfo:{fullName:"Kylian Mbappé Lottin",dateOfBirth:"20 December 1998",placeOfBirth:"Paris, France",height:"1.78 m (5 ft 10 in)",position:"Forward",currentTeam:"Real Madrid",number:9,seniorCareer:[{club:"Monaco",years:"2015-2018",apps:60,goals:27},{club:"Paris Saint-Germain",years:"2017-2024",apps:308,goals:256},{club:"Real Madrid",years:"2024-present",apps:5,goals:4}]},honours:[{category:"France",items:["FIFA World Cup (1)","UEFA Nations League (1)"]},{category:"PSG",items:["Ligue 1 (6)","Coupe de France (4)"]},{category:"Individual",items:["World Cup Golden Boot (1)","Ligue 1 Player of the Year (5)"]}]},salah:{fullBio:`Mohamed Salah Hamed Mahrous Ghaly (born 15 June 1992) is an Egyptian professional footballer who plays as a right winger or forward for Premier League club Liverpool and captains the Egypt national team. Considered one of the best players of his generation and among the greatest African players of all time, he is known for his clinical finishing, dribbling and speed.

Salah started his senior career in 2010 playing for Al Mokawloon, departing in 2012 to join Basel, where he won two Swiss Super League titles. In 2014, Salah joined Chelsea for a reported fee of £11 million, but limited gametime led to successive loans to Fiorentina and Roma.

He signed permanently for Roma before transferring to Liverpool in 2017. In his first season, he set the record for most Premier League goals scored (32) in a 38-game season. Salah has gone on to win the Premier League, Champions League, FA Cup, and League Cup with Liverpool.`,sections:[{title:"Club Career",subsections:[{title:"Liverpool (2017-present)",content:"Salah has been the talisman for Jurgen Klopp's Liverpool, scoring over 200 goals for the club and leading them to their first Premier League title in 30 years."}]},{title:"International Career",content:"Salah is Egypt's captain and all-time top scorer in World Cup qualification. He led Egypt to the 2018 World Cup."}],personalInfo:{fullName:"Mohamed Salah Hamed Mahrous Ghaly",dateOfBirth:"15 June 1992",placeOfBirth:"Nagrig, Basyoun, Egypt",height:"1.75 m (5 ft 9 in)",position:"Forward",currentTeam:"Liverpool",number:11,seniorCareer:[{club:"Basel",years:"2012-2014",apps:79,goals:20},{club:"Chelsea",years:"2014-2016",apps:19,goals:2},{club:"Roma",years:"2015-2017",apps:83,goals:34},{club:"Liverpool",years:"2017-present",apps:350,goals:211}]},honours:[{category:"Liverpool",items:["Premier League (1)","UEFA Champions League (1)","FA Cup (1)"]},{category:"Individual",items:["Premier League Golden Boot (3)","PFA Players' Player of the Year (2)"]}]},vinicius:{fullBio:`Vinícius José Paixão de Oliveira Júnior (born 12 July 2000), commonly known as Vinícius Júnior or Vini Jr., is a Brazilian professional footballer who plays as a winger for La Liga club Real Madrid and the Brazil national team. Considered one of the best players in the world, he is known for his dribbling skills, pace, and playmaking ability.

Born in São Gonçalo, Vinícius began his professional career at Flamengo, where he made his senior debut in 2017, at age 16. A few weeks later, Vinícius was the subject of a transfer to La Liga club Real Madrid, for whom he signed in a £38 million deal, which was a national record for an U-18 player.

He made his debut for Real Madrid in 2018. Since then, Vinícius has established himself as a prominent member of Real Madrid's squad, helping the club win multiple La Liga titles and UEFA Champions League titles, scoring the winning goal in the 2022 final and scoring in the 2024 final.`,sections:[{title:"Club Career",subsections:[{title:"Real Madrid (2018-present)",content:"Vini Jr. has become one of Real Madrid's most important players, forming a formidable attack and winning multiple European cups."}]}],personalInfo:{fullName:"Vinícius José Paixão de Oliveira Júnior",dateOfBirth:"12 July 2000",placeOfBirth:"São Gonçalo, Brazil",height:"1.76 m (5 ft 9 in)",position:"Forward",currentTeam:"Real Madrid",number:7,seniorCareer:[{club:"Flamengo",years:"2017-2018",apps:69,goals:14},{club:"Real Madrid",years:"2018-present",apps:260,goals:80}]},honours:[{category:"Real Madrid",items:["La Liga (3)","UEFA Champions League (2)"]},{category:"Individual",items:["Champions League Player of the Season (1)"]}]},bellingham:{fullBio:`Jude Victor William Bellingham (born 29 June 2003) is an English professional footballer who plays as a midfielder for La Liga club Real Madrid and the England national team. He is widely considered one of the best players in the world.

Bellingham joined Birmingham City as an under-8, became the club's youngest ever first-team player when he made his senior debut in August 2019, at the age of 16 years, 38 days, and played regularly during the 2019-20 season. He joined Borussia Dortmund in July 2020.

He became Dortmund's youngest ever goalscorer in his first competitive match. After three successful seasons in Germany, Bellingham signed for Real Madrid in June 2023 for a fee of €103 million. He had a stunning debut season, winning La Liga and the Champions League.`,sections:[{title:"Club Career",subsections:[{title:"Borussia Dortmund (2020-2023)",content:"He established himself as a world-class midfielder and won the DFB-Pokal in 2021."},{title:"Real Madrid (2023-present)",content:"Won the Kopa Trophy and Golden Boy award in 2023, and scored numerous crucial goals in his debut season in Spain."}]}],personalInfo:{fullName:"Jude Victor William Bellingham",dateOfBirth:"29 June 2003",placeOfBirth:"Stourbridge, England",height:"1.86 m (6 ft 1 in)",position:"Midfielder",currentTeam:"Real Madrid",number:5,seniorCareer:[{club:"Birmingham City",years:"2019-2020",apps:44,goals:4},{club:"Borussia Dortmund",years:"2020-2023",apps:132,goals:24},{club:"Real Madrid",years:"2023-present",apps:42,goals:23}]},honours:[{category:"Real Madrid",items:["La Liga (1)","UEFA Champions League (1)"]},{category:"Individual",items:["Kopa Trophy (1)","Golden Boy (1)","La Liga Player of the Season (1)"]}]},henry:{fullBio:`Thierry Daniel Henry (born 17 August 1977) is a French professional football coach, pundit, and former player. He is considered one of the greatest strikers of all time and one of the greatest players in the history of the Premier League. He was named by Pelé in the FIFA 100 list of the world's greatest living players in 2004.

Henry made his professional debut with Monaco in 1994 before signing for defending Serie A champions Juventus. However, limited playing time, coupled with disagreements with the club's hierarchy, led to him signing for Premier League club Arsenal for £11 million in 1999.

Under long-time mentor and coach Arsène Wenger, Henry became a prolific striker and Arsenal's all-time leading scorer with 228 goals in all competitions. He won the Premier League Golden Boot a record four times, won two FA Cups and two Premier League titles with the club, including one during an unbeaten season dubbed The Invincibles.`,sections:[{title:"Club Career",subsections:[{title:"Arsenal (1999-2007)",content:'The centerpiece of the "Invincibles", Henry was practically unstoppable in the Premier League, mixing elegance with ruthless finishing.'},{title:"Barcelona (2007-2010)",content:"Joined Barcelona and won the historic sextuple in 2009 under Pep Guardiola."}]},{title:"International Career",content:"Henry won the 1998 FIFA World Cup, Euro 2000, and 2003 FIFA Confederations Cup with France. He is France's second-highest all-time goalscorer."}],personalInfo:{fullName:"Thierry Daniel Henry",dateOfBirth:"17 August 1977",placeOfBirth:"Les Ulis, France",height:"1.88 m (6 ft 2 in)",position:"Striker",currentTeam:"Retired",number:14,seniorCareer:[{club:"Monaco",years:"1994-1999",apps:141,goals:28},{club:"Juventus",years:"1999",apps:20,goals:3},{club:"Arsenal",years:"1999-2007",apps:377,goals:226},{club:"Barcelona",years:"2007-2010",apps:121,goals:49},{club:"New York Red Bulls",years:"2010-2014",apps:135,goals:52}]},honours:[{category:"Arsenal",items:["Premier League (2)","FA Cup (2)"]},{category:"Barcelona",items:["La Liga (2)","Champions League (1)"]},{category:"France",items:["FIFA World Cup (1)","UEFA European Championship (1)"]},{category:"Individual",items:["Premier League Golden Boot (4)","FWA Footballer of the Year (3)"]}]},shearer:{fullBio:`Alan Shearer (born 13 August 1970) is an English television pundit and former professional footballer who played as a striker. Widely regarded as one of the best strikers of his generation and one of the greatest players in the history of the Premier League, he is the Premier League's record goalscorer with 260 goals.

Shearer played his entire career at the top level of English football. He started his career at Southampton in 1988 before moving to Blackburn Rovers in 1992, where he established himself as among the most prolific goalscorers in Europe. While at Blackburn Rovers, he won the 1994-95 Premier League.

In 1996, he joined his hometown club Newcastle United for a then-world record £15 million. He spent the remainder of his career with the club, becoming their all-time top scorer.`,sections:[{title:"Club Career",subsections:[{title:"Blackburn Rovers (1992-1996)",content:"Shearer scored 112 goals in 138 league matches for Blackburn, firing them to the Premier League title in 1995."},{title:"Newcastle United (1996-2006)",content:"He became a Newcastle legend, scoring 206 goals for the club in all competitions."}]}],personalInfo:{fullName:"Alan Shearer",dateOfBirth:"13 August 1970",placeOfBirth:"Newcastle upon Tyne, England",height:"1.83 m (6 ft 0 in)",position:"Striker",currentTeam:"Retired",number:9,seniorCareer:[{club:"Southampton",years:"1988-1992",apps:158,goals:43},{club:"Blackburn Rovers",years:"1992-1996",apps:171,goals:130},{club:"Newcastle United",years:"1996-2006",apps:405,goals:206}]},honours:[{category:"Blackburn Rovers",items:["Premier League (1)"]},{category:"Individual",items:["Premier League Golden Boot (3)","PFA Players' Player of the Year (2)"]}]},rooney:{fullBio:`Wayne Mark Rooney (born 24 October 1985) is an English professional football manager and former player. Widely considered one of the best players of his generation, Rooney is the record goalscorer for Manchester United, and was the record goalscorer for the England national team from 2015 to 2023.

Rooney joined the Everton youth team at age 9 and made his professional debut for the club in 2002 at age 16. After spending two seasons at the Merseyside club, he moved to Manchester United for £25.6 million in the 2004 summer transfer window where he won 16 trophies and became the only English player, alongside teammate Michael Carrick, to win the Premier League, FA Cup, UEFA Champions League, League Cup, UEFA Europa League, and FIFA Club World Cup.

He scored 253 goals for United in all competitions, making him their top goalscorer of all time; his 183 Premier League goals for United is the third-most scored by a player for any single club.`,sections:[{title:"Club Career",subsections:[{title:"Manchester United (2004-2017)",content:"Rooney formed a devastating partnership with Cristiano Ronaldo, and later Carlos Tevez. He won 5 Premier League titles and the 2008 Champions League."}]}],personalInfo:{fullName:"Wayne Mark Rooney",dateOfBirth:"24 October 1985",placeOfBirth:"Liverpool, England",height:"1.76 m (5 ft 9 in)",position:"Forward",currentTeam:"Retired",number:10,seniorCareer:[{club:"Everton",years:"2002-2004",apps:77,goals:17},{club:"Manchester United",years:"2004-2017",apps:559,goals:253},{club:"Everton",years:"2017-2018",apps:40,goals:11},{club:"D.C. United",years:"2018-2019",apps:52,goals:25},{club:"Derby County",years:"2020-2021",apps:35,goals:7}]},honours:[{category:"Manchester United",items:["Premier League (5)","UEFA Champions League (1)","FA Cup (1)","League Cup (3)"]},{category:"Individual",items:["PFA Players' Player of the Year (1)","Premier League Player of the Season (1)"]}]},ronaldinho:{fullBio:`Ronaldo de Assis Moreira (born 21 March 1980), commonly known as Ronaldinho Gaúcho or simply Ronaldinho, is a Brazilian former professional footballer who played mostly as an attacking midfielder, but was also deployed as a winger. Widely regarded as one of the greatest players of all time, he won two FIFA World Player of the Year awards and a Ballon d'Or.

A global icon of the sport, Ronaldinho was renowned for his technical skills, creativity, dribbling ability and accuracy from free-kicks, as well as his use of tricks, feints, no-look passes and overhead kicks.

He made his senior debut for Grêmio in 1998. At age 20, he moved to Paris Saint-Germain in France before signing for Barcelona in 2003. In his second season with Barcelona, he won his first FIFA World Player of the Year award as Barcelona won the 2004-05 La Liga title.`,sections:[{title:"Club Career",subsections:[{title:"Barcelona (2003-2008)",content:"Ronaldinho transformed Barcelona, winning the Champions League in 2006. He famously received a standing ovation at the Santiago Bernabéu after scoring two goals against Real Madrid."}]}],personalInfo:{fullName:"Ronaldo de Assis Moreira",dateOfBirth:"21 March 1980",placeOfBirth:"Porto Alegre, Brazil",height:"1.81 m (5 ft 11 in)",position:"Attacking Midfielder / Winger",currentTeam:"Retired",number:10,seniorCareer:[{club:"Grêmio",years:"1998-2001",apps:145,goals:72},{club:"Paris Saint-Germain",years:"2001-2003",apps:77,goals:25},{club:"Barcelona",years:"2003-2008",apps:207,goals:94},{club:"Milan",years:"2008-2011",apps:95,goals:26}]},honours:[{category:"Brazil",items:["FIFA World Cup (1)","Copa América (1)"]},{category:"Barcelona",items:["La Liga (2)","UEFA Champions League (1)"]},{category:"Individual",items:["Ballon d'Or (1)","FIFA World Player of the Year (2)"]}]},zidane:{fullBio:`Zinedine Yazid Zidane (born 23 June 1972), popularly known as Zizou, is a French professional football manager and former player who played as an attacking midfielder. He most recently coached Spanish club Real Madrid and is one of the most successful coaches in the world. Widely regarded as one of the greatest players of all time, Zidane was a playmaker renowned for his elegance, vision, passing, ball control and technique.

Zidane started his career at Cannes before establishing himself as one of the best players in the French Division 1 at Bordeaux. In 1996, he moved to Italian team Juventus, where he won several trophies including two Serie A titles. He moved to Real Madrid for a world record fee of €77.5 million in 2001, which remained unmatched for the next eight years.

In Spain, Zidane won several trophies, including a La Liga title and the UEFA Champions League. In the 2002 UEFA Champions League Final, he scored a left-foot volleyed winner which is considered to be one of the greatest goals in the competition's history.`,sections:[{title:"Club Career",subsections:[{title:"Juventus (1996-2001)",content:"Won two Serie A titles and reached consecutive Champions League finals."},{title:"Real Madrid (2001-2006)",content:'Part of the "Galácticos" era, winning the Champions League in 2002 with his iconic volley.'}]},{title:"International Career",content:"Scored twice in the 1998 World Cup Final to win it for France. Also won Euro 2000."}],personalInfo:{fullName:"Zinedine Yazid Zidane",dateOfBirth:"23 June 1972",placeOfBirth:"Marseille, France",height:"1.85 m (6 ft 1 in)",position:"Attacking Midfielder",currentTeam:"Retired",number:10,seniorCareer:[{club:"Cannes",years:"1989-1992",apps:71,goals:6},{club:"Bordeaux",years:"1992-1996",apps:176,goals:39},{club:"Juventus",years:"1996-2001",apps:212,goals:31},{club:"Real Madrid",years:"2001-2006",apps:227,goals:49}]},honours:[{category:"France",items:["FIFA World Cup (1)","UEFA European Championship (1)"]},{category:"Juventus",items:["Serie A (2)"]},{category:"Real Madrid",items:["La Liga (1)","UEFA Champions League (1)"]},{category:"Individual",items:["Ballon d'Or (1)","FIFA World Player of the Year (3)"]}]},ramos:{fullBio:`Sergio Ramos García (born 30 March 1986) is a Spanish professional footballer who plays as a centre-back. Widely regarded as one of the greatest defenders of all time, he is known for his tackling, aerial ability, and leadership, as well as his goalscoring ability.

After emerging through Sevilla's youth academy and spending two seasons with the senior side, Ramos moved to Real Madrid in the summer of 2005. He went on to become a mainstay for Real Madrid, and won 22 major honours, including five La Liga titles and four UEFA Champions League titles, becoming one of La Liga's top goalscorers from a defensive position.

He played a crucial part in the build-up to all four UEFA Champions League wins, being named in the competition's Squad of the Season each time. He also famously scored the equalizer in the 93rd minute of the 2014 final.`,sections:[{title:"Club Career",subsections:[{title:"Real Madrid (2005-2021)",content:"Captain of Real Madrid during their historic three-peat in the Champions League."},{title:"Paris Saint-Germain & Sevilla (2021-2024)",content:"Played two seasons at PSG before returning to his boyhood club Sevilla for one season."}]}],personalInfo:{fullName:"Sergio Ramos García",dateOfBirth:"30 March 1986",placeOfBirth:"Camas, Spain",height:"1.84 m (6 ft 0 in)",position:"Centre-back",currentTeam:"Free Agent",number:4,seniorCareer:[{club:"Sevilla",years:"2004-2005",apps:50,goals:3},{club:"Real Madrid",years:"2005-2021",apps:671,goals:101},{club:"Paris Saint-Germain",years:"2021-2023",apps:58,goals:6},{club:"Sevilla",years:"2023-2024",apps:37,goals:7}]},honours:[{category:"Spain",items:["FIFA World Cup (1)","UEFA European Championship (2)"]},{category:"Real Madrid",items:["La Liga (5)","UEFA Champions League (4)"]},{category:"Individual",items:["FIFPro World XI (11)"]}]},iniesta:{fullBio:`Andrés Iniesta Luján (born 11 May 1984) is a Spanish professional footballer who plays as a midfielder for UAE Pro League club Emirates. Widely considered one of the greatest midfielders of all time, Iniesta spent most of his career at Barcelona, where he served as the captain for three seasons.

Iniesta came through La Masia, the Barcelona youth academy, after an early migration from his birthplace, and impressed from an early age. He made his first-team debut aged 18 in 2002. He began playing regularly during the 2004-05 season and remained in the team until 2018.

Iniesta was an integral part of the Barcelona sides that won two historic trebles in 2009 and 2015, and his 35 trophies include nine La Ligas and four UEFA Champions League titles, making him the most decorated Spanish footballer of all time.`,sections:[{title:"Club Career",subsections:[{title:"Barcelona (2002-2018)",content:"Formed a legendary midfield partnership with Xavi, dictating play with his vision, dribbling, and passing."}]},{title:"International Career",content:"Scored the winning goal in the 2010 FIFA World Cup Final against the Netherlands. Also won Euro 2008 and 2012."}],personalInfo:{fullName:"Andrés Iniesta Luján",dateOfBirth:"11 May 1984",placeOfBirth:"Fuentealbilla, Spain",height:"1.71 m (5 ft 7 in)",position:"Midfielder",currentTeam:"Emirates",number:8,seniorCareer:[{club:"Barcelona",years:"2002-2018",apps:674,goals:57},{club:"Vissel Kobe",years:"2018-2023",apps:134,goals:26},{club:"Emirates",years:"2023-present",apps:20,goals:5}]},honours:[{category:"Spain",items:["FIFA World Cup (1)","UEFA European Championship (2)"]},{category:"Barcelona",items:["La Liga (9)","UEFA Champions League (4)"]},{category:"Individual",items:["UEFA Best Player in Europe (1)"]}]},xavi:{fullBio:`Xavier Hernández Creus (born 25 January 1980), known as Xavi, is a Spanish professional football manager and former player. Widely considered one of the greatest midfielders of all time, Xavi was renowned for his passing, vision, ball retention, and positioning.

Xavi joined La Masia, the Barcelona youth academy, at age 11, and made his first-team debut against Mallorca in August 1998. In all, he played 767 official matches, a former club record—now held by Lionel Messi—and scored 85 goals. He is the first player in the club's history to play 150 European and FIFA Club World Cup matches combined.

With Barcelona, Xavi won eight La Liga titles and four UEFA Champions League titles. He won 31 trophies for Barcelona and Spain, a total only surpassed by Andrés Iniesta as the most decorated Spanish player in history.`,sections:[{title:"Club Career",subsections:[{title:"Barcelona (1998-2015)",content:"The metronome of Pep Guardiola's Barcelona, dictating the tempo and rhythm of matches with unmatched precision."}]}],personalInfo:{fullName:"Xavier Hernández Creus",dateOfBirth:"25 January 1980",placeOfBirth:"Terrassa, Spain",height:"1.70 m (5 ft 7 in)",position:"Midfielder",currentTeam:"Retired",number:6,seniorCareer:[{club:"Barcelona",years:"1998-2015",apps:767,goals:85},{club:"Al Sadd",years:"2015-2019",apps:117,goals:25}]},honours:[{category:"Spain",items:["FIFA World Cup (1)","UEFA European Championship (2)"]},{category:"Barcelona",items:["La Liga (8)","UEFA Champions League (4)"]},{category:"Individual",items:["World Soccer Player of the Year (1)"]}]},yamal:{fullBio:`Lamine Yamal Nasraoui Ebana (born 13 July 2007) is a Spanish professional footballer who plays as a right winger for La Liga club Barcelona and the Spain national team. Known for his dribbling, pace, and playmaking, he is widely regarded as one of the best young players in the world.

A product of Barcelona's La Masia academy, Yamal became the youngest player to debut for Barcelona's first team in over a century, aged 15 years, 9 months, and 16 days.

Yamal established himself as a regular starter for Barcelona and Spain. He broke numerous records at the 2024 UEFA European Championship, becoming the youngest player to appear, assist, and score in the tournament's history, while helping Spain win the title.`,sections:[{title:"Club Career",subsections:[{title:"Barcelona (2023-present)",content:"Emerged as one of Barcelona's most important attackers at just 16 years old."}]},{title:"International Career",content:"Won Euro 2024 with Spain and was named Young Player of the Tournament."}],personalInfo:{fullName:"Lamine Yamal Nasraoui Ebana",dateOfBirth:"13 July 2007",placeOfBirth:"Esplugues de Llobregat, Spain",height:"1.80 m (5 ft 11 in)",position:"Winger",currentTeam:"Barcelona",number:27,seniorCareer:[{club:"Barcelona",years:"2023-present",apps:51,goals:7}]},honours:[{category:"Spain",items:["UEFA European Championship (1)"]},{category:"Individual",items:["UEFA European Championship Young Player of the Tournament (1)"]}]},debruyne:{fullBio:`Kevin De Bruyne (born 28 June 1991) is a Belgian professional footballer who plays as a midfielder for and captains both Premier League club Manchester City and the Belgium national team. He is widely regarded as one of the greatest players of his generation and one of the best midfielders in the world.

De Bruyne began his career at Genk, where he was a regular player when they won the 2010-11 Belgian Pro League. In 2012, he joined English club Chelsea, where he was used sparingly and then loaned to Werder Bremen. He signed with Wolfsburg for £18 million in 2014, where he established himself as one of the best players in the Bundesliga.

In the summer of 2015, De Bruyne joined Manchester City for a club record £54 million. He has since won numerous trophies with the club, including the Premier League and the Champions League, providing incredible numbers of assists.`,sections:[{title:"Club Career",subsections:[{title:"Manchester City (2015-present)",content:"The creative heartbeat of Pep Guardiola's City side, winning everything in club football."}]}],personalInfo:{fullName:"Kevin De Bruyne",dateOfBirth:"28 June 1991",placeOfBirth:"Drongen, Belgium",height:"1.81 m (5 ft 11 in)",position:"Midfielder",currentTeam:"Manchester City",number:17,seniorCareer:[{club:"Genk",years:"2008-2012",apps:113,goals:17},{club:"Wolfsburg",years:"2014-2015",apps:73,goals:20},{club:"Manchester City",years:"2015-present",apps:382,goals:102}]},honours:[{category:"Manchester City",items:["Premier League (6)","UEFA Champions League (1)","FA Cup (2)"]},{category:"Individual",items:["PFA Players' Player of the Year (2)"]}]},saka:{fullBio:`Bukayo Ayoyinka T. M. Saka (born 5 September 2001) is an English professional footballer who plays as a right winger for Premier League club Arsenal and the England national team. He is considered to be one of the best young wingers in the world.

Saka spent his entire first-team club career with Arsenal, where he has won an FA Cup and two FA Community Shields, progressively becoming one of Arsenal's most prolific and influential players. Following the 2020-21 and 2021-22 seasons, he was named as Arsenal's Player of the Season.

Saka represented England at various youth levels before making his debut for the senior team in October 2020. He was part of the England squads that reached the finals of UEFA Euro 2020 and UEFA Euro 2024.`,sections:[{title:"Club Career",subsections:[{title:"Arsenal (2018-present)",content:`Arsenal's "Starboy" has been crucial in the club's resurgence as title contenders under Mikel Arteta.`}]}],personalInfo:{fullName:"Bukayo Ayoyinka T. M. Saka",dateOfBirth:"5 September 2001",placeOfBirth:"London, England",height:"1.78 m (5 ft 10 in)",position:"Winger",currentTeam:"Arsenal",number:7,seniorCareer:[{club:"Arsenal",years:"2018-present",apps:226,goals:58}]},honours:[{category:"Arsenal",items:["FA Cup (1)","FA Community Shield (2)"]},{category:"Individual",items:["England Men's Player of the Year (2)","PFA Young Player of the Year (1)"]}]},lewandowski:{fullBio:`Robert Lewandowski (born 21 August 1988) is a Polish professional footballer who plays as a striker for La Liga club Barcelona and captains the Poland national team. Recognised for his positioning, technique and finishing, Lewandowski is considered one of the best strikers of all time, as well as one of the most successful players in Bundesliga history.

Lewandowski spent a large part of his career in Germany, playing for Borussia Dortmund and Bayern Munich. At Bayern, he won the Bundesliga title in every one of his eight seasons, as well as the Champions League in 2020. In the 2020-21 season, he scored 41 goals, breaking Gerd Müller's 49-year-old record for most Bundesliga goals in a season.

He moved to Barcelona in 2022, winning the Pichichi Trophy and La Liga in his first season.`,sections:[{title:"Club Career",subsections:[{title:"Bayern Munich (2014-2022)",content:"Scored 344 goals for Bayern, becoming their second all-time top scorer."},{title:"Barcelona (2022-present)",content:"Won La Liga and the top scorer award in his debut season in Spain."}]}],personalInfo:{fullName:"Robert Lewandowski",dateOfBirth:"21 August 1988",placeOfBirth:"Warsaw, Poland",height:"1.85 m (6 ft 1 in)",position:"Striker",currentTeam:"Barcelona",number:9,seniorCareer:[{club:"Borussia Dortmund",years:"2010-2014",apps:187,goals:103},{club:"Bayern Munich",years:"2014-2022",apps:375,goals:344},{club:"Barcelona",years:"2022-present",apps:95,goals:59}]},honours:[{category:"Bayern Munich",items:["Bundesliga (8)","UEFA Champions League (1)"]},{category:"Barcelona",items:["La Liga (1)"]},{category:"Individual",items:["The Best FIFA Men's Player (2)","European Golden Shoe (2)"]}]},maradona:{fullBio:`Diego Armando Maradona (30 October 1960 – 25 November 2020) was an Argentine professional football player and manager. Widely regarded as one of the greatest players in the history of the sport, he was one of the two joint winners of the FIFA Player of the 20th Century award.

An advanced playmaker who operated in the classic number 10 position, Maradona's vision, passing, ball control, and dribbling skills were combined with his small stature, which gave him a low centre of gravity allowing him to manoeuvre better than most other players. His presence and leadership on the field had a great effect on his team's general performance.

Maradona played for Argentinos Juniors, Boca Juniors, Barcelona, Napoli, Sevilla, and Newell's Old Boys during his club career, and is most famous for his time at Napoli where he won numerous accolades. In his international career with Argentina, he earned 91 caps and scored 34 goals, winning the 1986 World Cup almost single-handedly.`,sections:[{title:"Club Career",subsections:[{title:"Napoli (1984-1991)",content:"Elevated Napoli to the pinnacle of Italian football, winning two Serie A titles and a UEFA Cup. He is revered as a god in Naples."}]},{title:"International Career",content:'Captain of Argentina at the 1986 World Cup, where he scored the "Hand of God" and the "Goal of the Century" against England in the quarter-final.'}],personalInfo:{fullName:"Diego Armando Maradona",dateOfBirth:"30 October 1960",placeOfBirth:"Lanús, Buenos Aires, Argentina",height:"1.65 m (5 ft 5 in)",position:"Attacking Midfielder",currentTeam:"Deceased",number:10,seniorCareer:[{club:"Argentinos Juniors",years:"1976-1981",apps:167,goals:116},{club:"Boca Juniors",years:"1981-1982",apps:40,goals:28},{club:"Barcelona",years:"1982-1984",apps:58,goals:38},{club:"Napoli",years:"1984-1991",apps:259,goals:115}]},honours:[{category:"Argentina",items:["FIFA World Cup (1)"]},{category:"Napoli",items:["Serie A (2)","Coppa Italia (1)","UEFA Cup (1)"]},{category:"Individual",items:["FIFA World Cup Golden Ball (1)","FIFA Player of the Century (joint)"]}]}};let Ui="",Hs="all",Gs="all",Vs="all";function Wr(i){if(i.isLegend)return`${window.appBasePath}images/player-legend.jpg`;switch(i.position){case"Forward":return`${window.appBasePath}images/player-forward.jpg`;case"Midfielder":return`${window.appBasePath}images/player-midfielder.jpg`;case"Defender":return`${window.appBasePath}images/player-defender.jpg`;case"Goalkeeper":return`${window.appBasePath}images/player-goalkeeper.jpg`;default:return`${window.appBasePath}images/player-1.jpg`}}const pd={render(){return`
      <div class="players-page">
        <img src="${window.appBasePath}images/hero-3.jpg" class="section-image-banner" alt="Players" style="height: 220px; margin-bottom: var(--space-xl);" />
        <div class="section-header animate-fade-in">
          <div>
            <h1 class="section-title">⚽ Player Database</h1>
            <div class="section-subtitle">${Yi.length} legendary & current stars — click any player for a full Wikipedia-style profile</div>
          </div>
        </div>

        <div class="players-filters animate-fade-in-up delay-1">
          <div class="search-box" style="flex: 1; max-width: 300px;">
            <span class="search-icon">🔍</span>
            <input type="text" id="player-search" class="search-input" placeholder="Search players..." />
          </div>
          <div class="btn-group" id="position-filter">
            <button class="btn-tab active" data-pos="all">All</button>
            <button class="btn-tab" data-pos="Forward">⚽ FW</button>
            <button class="btn-tab" data-pos="Midfielder">🎯 MF</button>
            <button class="btn-tab" data-pos="Defender">🛡️ DF</button>
            <button class="btn-tab" data-pos="Goalkeeper">🧤 GK</button>
          </div>
          <div class="btn-group" id="league-filter">
            <button class="btn-tab active" data-league="all">Both</button>
            <button class="btn-tab" data-league="PL">PL</button>
            <button class="btn-tab" data-league="LL">LL</button>
          </div>
          <div class="btn-group" id="legend-filter">
            <button class="btn-tab active" data-legend="all">All</button>
            <button class="btn-tab" data-legend="current">Current</button>
            <button class="btn-tab" data-legend="legends">Legends</button>
          </div>
        </div>

        <div id="players-count" class="animate-fade-in-up delay-1" style="color: var(--text-muted); font-size: var(--fs-sm); margin-bottom: var(--space-lg);"></div>
        <div id="players-grid" class="players-grid animate-fade-in-up delay-2"></div>
        <div id="player-modal-container"></div>
      </div>
    `},mount(){wi(),document.getElementById("player-search").addEventListener("input",i=>{Ui=i.target.value.toLowerCase(),wi()}),document.getElementById("position-filter").addEventListener("click",i=>{const e=i.target.closest(".btn-tab");e&&(Hs=e.dataset.pos,document.querySelectorAll("#position-filter .btn-tab").forEach(t=>t.classList.remove("active")),e.classList.add("active"),wi())}),document.getElementById("league-filter").addEventListener("click",i=>{const e=i.target.closest(".btn-tab");e&&(Gs=e.dataset.league,document.querySelectorAll("#league-filter .btn-tab").forEach(t=>t.classList.remove("active")),e.classList.add("active"),wi())}),document.getElementById("legend-filter").addEventListener("click",i=>{const e=i.target.closest(".btn-tab");e&&(Vs=e.dataset.legend,document.querySelectorAll("#legend-filter .btn-tab").forEach(t=>t.classList.remove("active")),e.classList.add("active"),wi())})}};function md(){let i=[...Yi];return Ui&&(i=i.filter(e=>e.name.toLowerCase().includes(Ui)||e.currentClub?.toLowerCase().includes(Ui)||e.nationality?.toLowerCase().includes(Ui))),Hs!=="all"&&(i=i.filter(e=>e.position===Hs)),Gs!=="all"&&(i=i.filter(e=>e.league===Gs)),Vs==="legends"?i=i.filter(e=>e.isLegend):Vs==="current"&&(i=i.filter(e=>!e.isLegend)),i.sort((e,t)=>(t.goals||0)-(e.goals||0))}function wi(){const i=document.getElementById("players-grid"),e=document.getElementById("players-count");if(!i)return;const t=md();if(e&&(e.textContent=`Showing ${t.length} of ${Yi.length} players`),t.length===0){i.innerHTML='<div class="empty-state" style="grid-column: 1/-1;"><div class="empty-icon">⚽</div><div class="empty-title">No players found</div></div>';return}i.innerHTML=t.map(n=>{n.name.split(" ").map(o=>o[0]).join("").slice(0,2);const a=n.position==="Forward"?"pos-fw":n.position==="Midfielder"?"pos-mf":n.position==="Defender"?"pos-df":"pos-gk",s=!!$l[n.id],r=Wr(n);return`
      <div class="player-card" onclick="showPlayerDetail('${n.id}')">
        <div class="player-card-image" style="height: 140px; overflow: hidden; border-radius: var(--radius-lg) var(--radius-lg) 0 0; margin: -16px -16px 12px -16px; position: relative;">
          <img src="${r}" alt="${n.name}" style="width: 100%; height: 100%; object-fit: cover; filter: brightness(0.7);" loading="lazy" />
          <div style="position: absolute; bottom: 8px; left: 12px; display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 28px; text-shadow: 0 2px 8px rgba(0,0,0,0.5);">${n.nationalityFlag||""}</span>
            ${n.isLegend?'<span class="badge badge-warning" style="font-size: 9px;">🏆 Legend</span>':""}
          </div>
          <span class="badge ${n.league==="PL"?"badge-pl":"badge-liga"}" style="position: absolute; top: 8px; right: 8px; font-size: 9px;">${n.league}</span>
        </div>
        <div style="padding: 0 4px;">
          <div class="player-name" style="margin-bottom: 4px;">${n.name} ${s?'<span style="font-size:11px;color:var(--accent-blue);">📖</span>':""}</div>
          <div class="player-meta" style="margin-bottom: 8px;">
            ${n.currentClub||"Retired"} •
            <span class="badge ${a}" style="font-size: 9px; padding: 1px 6px;">${n.position}</span>
          </div>
        </div>
        <div class="player-stats">
          <div class="player-stat"><div class="player-stat-value">${n.goals||0}</div><div class="player-stat-label">Goals</div></div>
          <div class="player-stat"><div class="player-stat-value">${n.assists||0}</div><div class="player-stat-label">Assists</div></div>
          <div class="player-stat"><div class="player-stat-value">${n.appearances||0}</div><div class="player-stat-label">Apps</div></div>
        </div>
      </div>
    `}).join("")}window.showPlayerDetail=function(i){const e=Yi.find(a=>a.id===i);if(!e)return;const t=$l[i],n=document.getElementById("player-modal-container");t?n.innerHTML=gd(e,t):n.innerHTML=vd(e)};function gd(i,e){const t=i.name.split(" ").map(a=>a[0]).join("").slice(0,2),n=e.personalInfo||{};return`
    <div class="modal-overlay" onclick="closePlayerModal(event)">
      <div class="modal-content" style="max-width: 960px; padding: 0; overflow: hidden;" onclick="event.stopPropagation()">
        <!-- Hero Banner -->
        <div style="position: relative; height: 200px; overflow: hidden;">
          <img src="${Wr(i)}" alt="${i.name}" style="width: 100%; height: 100%; object-fit: cover; filter: brightness(0.5);" />
          <div style="position: absolute; inset: 0; background: linear-gradient(to top, var(--bg-primary) 0%, transparent 60%);"></div>
          <div style="position: absolute; bottom: 20px; left: 28px; z-index: 2;">
            <div style="font-size: 40px; margin-bottom: 4px;">${i.nationalityFlag||""}</div>
            <h2 style="font-family: var(--font-heading); font-size: var(--fs-3xl); font-weight: 900; color: white; text-shadow: 0 2px 10px rgba(0,0,0,0.5);">${i.name}</h2>
            <div style="display: flex; gap: 8px; margin-top: 6px;">
              <span class="badge ${i.league==="PL"?"badge-pl":"badge-liga"}">${i.league}</span>
              <span class="badge badge-info">${i.position}</span>
              ${i.isLegend?'<span class="badge badge-warning">🏆 Legend</span>':'<span class="badge badge-success">✅ Active</span>'}
            </div>
          </div>
          <button class="modal-close" onclick="closePlayerModal()" style="position: absolute; top: 12px; right: 12px; z-index: 3;">✕</button>
        </div>
        <div style="padding: 0 28px 28px 28px;">
          <div class="wiki-profile">
            <div class="wiki-profile-header">
              <!-- Wiki Content -->
              <div class="wiki-content">
                <!-- Table of Contents -->
                <div class="wiki-toc">
                  <div class="wiki-toc-title">Contents</div>
                  <ul class="wiki-toc-list">
                    ${(e.sections||[]).map(a=>`<li><span>${a.title}</span></li>`).join("")}
                    <li><span>Honours</span></li>
                    <li><span>Career Statistics</span></li>
                  </ul>
                </div>

                <!-- Lead paragraph -->
                <div class="wiki-lead">${e.fullBio||""}</div>

                <!-- Sections -->
                ${(e.sections||[]).map(a=>`
                  <div class="wiki-section">
                    <h3 class="wiki-section-title">${a.title}</h3>
                    ${a.content?`<div class="wiki-text">${a.content}</div>`:""}
                    ${(a.subsections||[]).map(s=>`
                      <h4 class="wiki-subsection-title">${s.title}</h4>
                      <div class="wiki-text">${s.content}</div>
                    `).join("")}
                  </div>
                `).join("")}

                <!-- Honours -->
                ${e.honours&&e.honours.length>0?`
                  <div class="wiki-section">
                    <h3 class="wiki-section-title">🏆 Honours</h3>
                    <div class="wiki-honours">
                      ${e.honours.map(a=>`
                        <div>
                          <div class="wiki-honour-category">${a.category}</div>
                          <div class="wiki-honour-list">
                            ${(a.items||[]).map(s=>`<span class="badge badge-info">${s}</span>`).join("")}
                          </div>
                        </div>
                      `).join("")}
                    </div>
                  </div>
                `:""}

                <!-- Career Stats Table -->
                ${n.seniorCareer&&n.seniorCareer.length>0?`
                  <div class="wiki-section">
                    <h3 class="wiki-section-title">📊 Career Statistics</h3>
                    <table class="wiki-career-table">
                      <thead>
                        <tr><th>Club</th><th>Years</th><th>Apps</th><th>Goals</th></tr>
                      </thead>
                      <tbody>
                        ${n.seniorCareer.map(a=>`
                          <tr>
                            <td style="font-weight: 600;">${a.club}</td>
                            <td>${a.years}</td>
                            <td>${a.apps||"—"}</td>
                            <td style="font-weight: 700; color: var(--accent-blue);">${a.goals||"—"}</td>
                          </tr>
                        `).join("")}
                        <tr style="font-weight: 700; background: var(--bg-glass);">
                          <td>Total</td>
                          <td></td>
                          <td>${n.seniorCareer.reduce((a,s)=>a+(s.apps||0),0)}</td>
                          <td style="color: var(--accent-gold);">${n.seniorCareer.reduce((a,s)=>a+(s.goals||0),0)}</td>
                        </tr>
                      </tbody>
                    </table>
                    ${n.internationalCareer?`
                      <div style="margin-top: var(--space-lg);">
                        <h4 class="wiki-subsection-title">International Career</h4>
                        <table class="wiki-career-table">
                          <thead><tr><th>Team</th><th>Years</th><th>Apps</th><th>Goals</th></tr></thead>
                          <tbody>
                            <tr>
                              <td style="font-weight: 600;">${n.internationalCareer.team}</td>
                              <td>${n.internationalCareer.years}</td>
                              <td>${n.internationalCareer.apps||"—"}</td>
                              <td style="font-weight: 700; color: var(--accent-blue);">${n.internationalCareer.goals||"—"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    `:""}
                  </div>
                `:""}
              </div>

              <!-- Infobox -->
              <div class="wiki-infobox">
                <div class="wiki-infobox-header">
                  <div class="wiki-infobox-avatar">${i.nationalityFlag||t}</div>
                  <div class="wiki-infobox-name">${i.name}</div>
                  <div class="wiki-infobox-subtitle">${i.nationality||""} ${i.nationalityFlag||""}</div>
                </div>
                <table class="wiki-infobox-table">
                  <tr class="wiki-infobox-section"><td colspan="2">Personal Information</td></tr>
                  ${n.fullName?`<tr><th>Full name</th><td>${n.fullName}</td></tr>`:""}
                  ${n.dateOfBirth?`<tr><th>Date of birth</th><td>${n.dateOfBirth}</td></tr>`:""}
                  ${n.placeOfBirth?`<tr><th>Place of birth</th><td>${n.placeOfBirth}</td></tr>`:""}
                  ${n.height?`<tr><th>Height</th><td>${n.height}</td></tr>`:""}
                  ${n.position?`<tr><th>Position</th><td>${n.position}</td></tr>`:""}
                  <tr class="wiki-infobox-section"><td colspan="2">Team Information</td></tr>
                  ${n.currentTeam?`<tr><th>Current team</th><td>${n.currentTeam}</td></tr>`:""}
                  ${n.number?`<tr><th>Number</th><td>${n.number}</td></tr>`:""}
                  ${n.youthCareer?`<tr><th>Youth career</th><td style="font-size: 12px;">${n.youthCareer}</td></tr>`:""}
                </table>
                <div style="padding: var(--space-md); text-align: center;">
                  ${i.isLegend?'<span class="badge badge-warning" style="padding: 6px 16px;">🏆 Legend</span>':'<span class="badge badge-success" style="padding: 6px 16px;">✅ Active</span>'}
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  `}function vd(i){const e=i.name.split(" ").map(t=>t[0]).join("").slice(0,2);return`
    <div class="modal-overlay" onclick="closePlayerModal(event)">
      <div class="modal-content" style="padding: 0; overflow: hidden;" onclick="event.stopPropagation()">
        <!-- Hero Banner -->
        <div style="position: relative; height: 180px; overflow: hidden;">
          <img src="${Wr(i)}" alt="${i.name}" style="width: 100%; height: 100%; object-fit: cover; filter: brightness(0.5);" />
          <div style="position: absolute; inset: 0; background: linear-gradient(to top, var(--bg-primary) 0%, transparent 60%);"></div>
          <div style="position: absolute; bottom: 16px; left: 24px; z-index: 2;">
            <div style="font-size: 36px; margin-bottom: 4px;">${i.nationalityFlag||e}</div>
            <h2 style="font-family: var(--font-heading); font-size: var(--fs-2xl); font-weight: 900; color: white; text-shadow: 0 2px 10px rgba(0,0,0,0.5);">${i.name}</h2>
            <div style="color: rgba(255,255,255,0.7); font-size: var(--fs-sm);">${i.fullName||i.name} • ${i.nationality||""}</div>
          </div>
          <button class="modal-close" onclick="closePlayerModal()" style="position: absolute; top: 12px; right: 12px; z-index: 3;">✕</button>
        </div>
        <div style="padding: 20px 24px 24px 24px;">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 12px; margin-bottom: 24px;">
            <div class="factor-card"><div class="factor-label">Position</div><div class="factor-value" style="font-size: var(--fs-sm);">${i.position||"?"}</div></div>
            <div class="factor-card"><div class="factor-label">Club</div><div class="factor-value" style="font-size: var(--fs-sm);">${i.currentClub||"Retired"}</div></div>
            <div class="factor-card"><div class="factor-label">Born</div><div class="factor-value" style="font-size: var(--fs-sm);">${i.birthYear||"?"}</div></div>
            <div class="factor-card"><div class="factor-label">League</div><div class="factor-value" style="font-size: var(--fs-sm);">${i.league==="PL"?"Premier League":"La Liga"}</div></div>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap: 12px; margin-bottom: 24px;">
            <div class="stat-card" style="text-align: center; padding: 16px;"><div class="stat-value" style="color: var(--accent-blue); font-size: var(--fs-3xl);">${i.goals||0}</div><div class="stat-label">Goals</div></div>
            <div class="stat-card" style="text-align: center; padding: 16px;"><div class="stat-value" style="color: var(--accent-green); font-size: var(--fs-3xl);">${i.assists||0}</div><div class="stat-label">Assists</div></div>
            <div class="stat-card" style="text-align: center; padding: 16px;"><div class="stat-value" style="color: var(--accent-purple); font-size: var(--fs-3xl);">${i.appearances||0}</div><div class="stat-label">Apps</div></div>
            <div class="stat-card" style="text-align: center; padding: 16px;"><div class="stat-value" style="color: var(--accent-gold); font-size: var(--fs-3xl);">${i.leagueTitles||0}</div><div class="stat-label">Titles</div></div>
          </div>
          ${i.careerHistory&&i.careerHistory.length>0?`
            <h3 style="font-family: var(--font-heading); font-size: var(--fs-lg); font-weight: 700; margin-bottom: 16px;">📅 Career</h3>
            <div class="player-career-timeline">
              ${i.careerHistory.map(t=>`
                <div class="timeline-item">
                  <div><span class="timeline-years">${t.years}</span></div>
                  <div><div class="timeline-club">${t.club}</div>${t.goals!==void 0?`<div style="font-size: var(--fs-xs); color: var(--text-muted);">${t.goals} goals</div>`:""}</div>
                </div>
              `).join("")}
            </div>
          `:""}
        </div>
      </div>
    </div>
  `}window.closePlayerModal=function(i){i&&i.target!==i.currentTarget||(document.getElementById("player-modal-container").innerHTML="")};const yd=[{id:1,player:"Enzo Fernández",fromClub:"Benfica",toClub:"Chelsea",fee:"£106.8m",feeValue:106.8,year:2023,season:"2022-23",league:"PL",type:"transfer",isRecord:!0},{id:2,player:"Jack Grealish",fromClub:"Aston Villa",toClub:"Manchester City",fee:"£100m",feeValue:100,year:2021,season:"2021-22",league:"PL",type:"transfer",isRecord:!1},{id:3,player:"Declan Rice",fromClub:"West Ham",toClub:"Arsenal",fee:"£100m",feeValue:100,year:2023,season:"2023-24",league:"PL",type:"transfer",isRecord:!1},{id:4,player:"Moisés Caicedo",fromClub:"Brighton",toClub:"Chelsea",fee:"£115m",feeValue:115,year:2023,season:"2023-24",league:"PL",type:"transfer",isRecord:!0},{id:5,player:"Romelu Lukaku",fromClub:"Inter Milan",toClub:"Chelsea",fee:"£97.5m",feeValue:97.5,year:2021,season:"2021-22",league:"PL",type:"transfer",isRecord:!1},{id:6,player:"Paul Pogba",fromClub:"Juventus",toClub:"Manchester United",fee:"£89m",feeValue:89,year:2016,season:"2016-17",league:"PL",type:"transfer",isRecord:!1},{id:7,player:"Antony",fromClub:"Ajax",toClub:"Manchester United",fee:"£82m",feeValue:82,year:2022,season:"2022-23",league:"PL",type:"transfer",isRecord:!1},{id:8,player:"Harry Maguire",fromClub:"Leicester City",toClub:"Manchester United",fee:"£80m",feeValue:80,year:2019,season:"2019-20",league:"PL",type:"transfer",isRecord:!1},{id:9,player:"Jadon Sancho",fromClub:"Borussia Dortmund",toClub:"Manchester United",fee:"£73m",feeValue:73,year:2021,season:"2021-22",league:"PL",type:"transfer",isRecord:!1},{id:10,player:"Nicolas Pépé",fromClub:"Lille",toClub:"Arsenal",fee:"£72m",feeValue:72,year:2019,season:"2019-20",league:"PL",type:"transfer",isRecord:!1},{id:11,player:"Kepa Arrizabalaga",fromClub:"Athletic Bilbao",toClub:"Chelsea",fee:"£71.6m",feeValue:71.6,year:2018,season:"2018-19",league:"PL",type:"transfer",isRecord:!1},{id:12,player:"Erling Haaland",fromClub:"Borussia Dortmund",toClub:"Manchester City",fee:"£51.2m",feeValue:51.2,year:2022,season:"2022-23",league:"PL",type:"transfer",isRecord:!1},{id:13,player:"Virgil van Dijk",fromClub:"Southampton",toClub:"Liverpool",fee:"£75m",feeValue:75,year:2018,season:"2017-18",league:"PL",type:"transfer",isRecord:!1},{id:14,player:"Alisson Becker",fromClub:"Roma",toClub:"Liverpool",fee:"£66.8m",feeValue:66.8,year:2018,season:"2018-19",league:"PL",type:"transfer",isRecord:!1},{id:15,player:"Darwin Núñez",fromClub:"Benfica",toClub:"Liverpool",fee:"£64m",feeValue:64,year:2022,season:"2022-23",league:"PL",type:"transfer",isRecord:!1},{id:16,player:"Kevin De Bruyne",fromClub:"Wolfsburg",toClub:"Manchester City",fee:"£55m",feeValue:55,year:2015,season:"2015-16",league:"PL",type:"transfer",isRecord:!1},{id:17,player:"Rasmus Højlund",fromClub:"Atalanta",toClub:"Manchester United",fee:"£64m",feeValue:64,year:2023,season:"2023-24",league:"PL",type:"transfer",isRecord:!1},{id:18,player:"Josko Gvardiol",fromClub:"RB Leipzig",toClub:"Manchester City",fee:"£77m",feeValue:77,year:2023,season:"2023-24",league:"PL",type:"transfer",isRecord:!1},{id:19,player:"Mykhailo Mudryk",fromClub:"Shakhtar Donetsk",toClub:"Chelsea",fee:"£62m",feeValue:62,year:2023,season:"2022-23",league:"PL",type:"transfer",isRecord:!1},{id:20,player:"Thierry Henry",fromClub:"Juventus",toClub:"Arsenal",fee:"£11m",feeValue:11,year:1999,season:"1999-00",league:"PL",type:"transfer",isRecord:!1},{id:21,player:"Philippe Coutinho",fromClub:"Liverpool",toClub:"Barcelona",fee:"€135m",feeValue:135,year:2018,season:"2017-18",league:"LL",type:"transfer",isRecord:!0},{id:22,player:"Ousmane Dembélé",fromClub:"Borussia Dortmund",toClub:"Barcelona",fee:"€135m",feeValue:135,year:2017,season:"2017-18",league:"LL",type:"transfer",isRecord:!0},{id:23,player:"João Félix",fromClub:"Benfica",toClub:"Atletico Madrid",fee:"€126m",feeValue:126,year:2019,season:"2019-20",league:"LL",type:"transfer",isRecord:!1},{id:24,player:"Antoine Griezmann",fromClub:"Atletico Madrid",toClub:"Barcelona",fee:"€120m",feeValue:120,year:2019,season:"2019-20",league:"LL",type:"transfer",isRecord:!1},{id:25,player:"Eden Hazard",fromClub:"Chelsea",toClub:"Real Madrid",fee:"€115m",feeValue:115,year:2019,season:"2019-20",league:"LL",type:"transfer",isRecord:!1},{id:26,player:"Jude Bellingham",fromClub:"Borussia Dortmund",toClub:"Real Madrid",fee:"€103m",feeValue:103,year:2023,season:"2023-24",league:"LL",type:"transfer",isRecord:!1},{id:27,player:"Gareth Bale",fromClub:"Tottenham Hotspur",toClub:"Real Madrid",fee:"€100m",feeValue:100,year:2013,season:"2013-14",league:"LL",type:"transfer",isRecord:!1},{id:28,player:"Cristiano Ronaldo",fromClub:"Manchester United",toClub:"Real Madrid",fee:"€94m",feeValue:94,year:2009,season:"2009-10",league:"LL",type:"transfer",isRecord:!1},{id:29,player:"Kylian Mbappé",fromClub:"Paris Saint-Germain",toClub:"Real Madrid",fee:"Free Transfer",feeValue:0,year:2024,season:"2024-25",league:"LL",type:"free",isRecord:!1},{id:30,player:"Neymar",fromClub:"Santos",toClub:"Barcelona",fee:"€88m",feeValue:88,year:2013,season:"2013-14",league:"LL",type:"transfer",isRecord:!1},{id:31,player:"Aurélien Tchouaméni",fromClub:"Monaco",toClub:"Real Madrid",fee:"€80m",feeValue:80,year:2022,season:"2022-23",league:"LL",type:"transfer",isRecord:!1},{id:32,player:"Zinedine Zidane",fromClub:"Juventus",toClub:"Real Madrid",fee:"€77.5m",feeValue:77.5,year:2001,season:"2001-02",league:"LL",type:"transfer",isRecord:!1},{id:33,player:"James Rodríguez",fromClub:"Monaco",toClub:"Real Madrid",fee:"€75m",feeValue:75,year:2014,season:"2014-15",league:"LL",type:"transfer",isRecord:!1},{id:34,player:"Thomas Lemar",fromClub:"Monaco",toClub:"Atletico Madrid",fee:"€72m",feeValue:72,year:2018,season:"2018-19",league:"LL",type:"transfer",isRecord:!1},{id:35,player:"Luis Suárez",fromClub:"Liverpool",toClub:"Barcelona",fee:"€81.7m",feeValue:81.7,year:2014,season:"2014-15",league:"LL",type:"transfer",isRecord:!1},{id:36,player:"Frenkie de Jong",fromClub:"Ajax",toClub:"Barcelona",fee:"€75m",feeValue:75,year:2019,season:"2019-20",league:"LL",type:"transfer",isRecord:!1},{id:37,player:"Vitor Roque",fromClub:"Athletico Paranaense",toClub:"Barcelona",fee:"€40m",feeValue:40,year:2024,season:"2023-24",league:"LL",type:"transfer",isRecord:!1},{id:38,player:"Kaká",fromClub:"AC Milan",toClub:"Real Madrid",fee:"€67m",feeValue:67,year:2009,season:"2009-10",league:"LL",type:"transfer",isRecord:!1},{id:39,player:"Figo",fromClub:"Barcelona",toClub:"Real Madrid",fee:"€60m",feeValue:60,year:2e3,season:"2000-01",league:"LL",type:"transfer",isRecord:!1},{id:40,player:"Robert Lewandowski",fromClub:"Bayern Munich",toClub:"Barcelona",fee:"€45m",feeValue:45,year:2022,season:"2022-23",league:"LL",type:"transfer",isRecord:!1}],rt={mostExpensivePL:{player:"Moisés Caicedo",fee:"£115m",year:2023,from:"Brighton",to:"Chelsea"},mostExpensiveLaLiga:{player:"Philippe Coutinho & Ousmane Dembélé",fee:"€135m",year:"2017/2018",from:"Liverpool/Dortmund",to:"Barcelona"},mostExpensiveEver:{player:"Neymar",fee:"€222m",year:2017,from:"Barcelona",to:"Paris Saint-Germain"},biggestPLTransfers:[{player:"Moisés Caicedo",to:"Chelsea",fee:"£115m"},{player:"Enzo Fernández",to:"Chelsea",fee:"£106.8m"},{player:"Declan Rice",to:"Arsenal",fee:"£100m"},{player:"Jack Grealish",to:"Man City",fee:"£100m"},{player:"Romelu Lukaku",to:"Chelsea",fee:"£97.5m"},{player:"Paul Pogba",to:"Man Utd",fee:"£89m"},{player:"Antony",to:"Man Utd",fee:"£82m"},{player:"Harry Maguire",to:"Man Utd",fee:"£80m"},{player:"Josko Gvardiol",to:"Man City",fee:"£77m"},{player:"Virgil van Dijk",to:"Liverpool",fee:"£75m"}],biggestLaLigaTransfers:[{player:"Philippe Coutinho",to:"Barcelona",fee:"€135m"},{player:"Ousmane Dembélé",to:"Barcelona",fee:"€135m"},{player:"João Félix",to:"Atletico Madrid",fee:"€126m"},{player:"Antoine Griezmann",to:"Barcelona",fee:"€120m"},{player:"Eden Hazard",to:"Real Madrid",fee:"€115m"},{player:"Jude Bellingham",to:"Real Madrid",fee:"€103m"},{player:"Gareth Bale",to:"Real Madrid",fee:"€100m"},{player:"Cristiano Ronaldo",to:"Real Madrid",fee:"€94m"},{player:"Neymar",to:"Barcelona",fee:"€88m"},{player:"Luis Suárez",to:"Barcelona",fee:"€81.7m"}]};let Ws="all",$s="all",Xl="year";const _d={render(){return`
      <div class="transfers-page">
        <div class="section-header animate-fade-in">
          <div>
            <h1 class="section-title">🔄 Transfer Hub</h1>
            <div class="section-subtitle">Blockbuster deals, record transfers, and major moves</div>
          </div>
        </div>

        <!-- Transfer Records Highlight -->
        <div class="grid-3 animate-fade-in-up delay-1" style="margin-bottom: var(--space-2xl);">
          ${rt?.mostExpensivePL?`
            <div class="transfer-record-card">
              <div style="font-size: var(--fs-xs); color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">
                🏴󠁧󠁢󠁥󠁮󠁧󠁿 PL Record Transfer
              </div>
              <div style="font-family: var(--font-heading); font-size: var(--fs-xl); font-weight: 800; margin-bottom: 4px;">
                ${rt.mostExpensivePL.player}
              </div>
              <div style="font-size: var(--fs-sm); color: var(--text-secondary); margin-bottom: 8px;">
                ${rt.mostExpensivePL.from} → ${rt.mostExpensivePL.to} (${rt.mostExpensivePL.year})
              </div>
              <div style="font-family: var(--font-heading); font-size: var(--fs-2xl); font-weight: 900; color: var(--accent-green);">
                ${rt.mostExpensivePL.fee}
              </div>
            </div>
          `:""}
          ${rt?.mostExpensiveLaLiga?`
            <div class="transfer-record-card">
              <div style="font-size: var(--fs-xs); color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">
                🇪🇸 La Liga Record Transfer
              </div>
              <div style="font-family: var(--font-heading); font-size: var(--fs-xl); font-weight: 800; margin-bottom: 4px;">
                ${rt.mostExpensiveLaLiga.player}
              </div>
              <div style="font-size: var(--fs-sm); color: var(--text-secondary); margin-bottom: 8px;">
                ${rt.mostExpensiveLaLiga.from} → ${rt.mostExpensiveLaLiga.to} (${rt.mostExpensiveLaLiga.year})
              </div>
              <div style="font-family: var(--font-heading); font-size: var(--fs-2xl); font-weight: 900; color: var(--accent-green);">
                ${rt.mostExpensiveLaLiga.fee}
              </div>
            </div>
          `:""}
          ${rt?.mostExpensiveEver?`
            <div class="transfer-record-card" style="border-color: rgba(251, 191, 36, 0.3);">
              <div style="font-size: var(--fs-xs); color: var(--accent-gold); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">
                🌍 World Record Transfer
              </div>
              <div style="font-family: var(--font-heading); font-size: var(--fs-xl); font-weight: 800; margin-bottom: 4px;">
                ${rt.mostExpensiveEver.player}
              </div>
              <div style="font-size: var(--fs-sm); color: var(--text-secondary); margin-bottom: 8px;">
                ${rt.mostExpensiveEver.from} → ${rt.mostExpensiveEver.to} (${rt.mostExpensiveEver.year})
              </div>
              <div style="font-family: var(--font-heading); font-size: var(--fs-2xl); font-weight: 900; color: var(--accent-gold);">
                ${rt.mostExpensiveEver.fee}
              </div>
            </div>
          `:""}
        </div>

        <!-- Filters -->
        <div class="standings-controls animate-fade-in-up delay-2">
          <div class="btn-group" id="transfer-league-filter">
            <button class="btn-tab active" data-league="all">All</button>
            <button class="btn-tab" data-league="PL">🏴󠁧󠁢󠁥󠁮󠁧󠁿 PL</button>
            <button class="btn-tab" data-league="LL">🇪🇸 La Liga</button>
          </div>
          <div class="btn-group" id="transfer-type-filter">
            <button class="btn-tab active" data-type="all">All Types</button>
            <button class="btn-tab" data-type="transfer">💰 Paid</button>
            <button class="btn-tab" data-type="free">🆓 Free</button>
            <button class="btn-tab" data-type="loan">📋 Loan</button>
          </div>
          <div class="btn-group" id="transfer-sort">
            <button class="btn-tab active" data-sort="year">Latest</button>
            <button class="btn-tab" data-sort="fee">Highest Fee</button>
          </div>
        </div>

        <div id="transfers-grid" class="transfers-grid animate-fade-in-up delay-3"></div>

        <!-- Top 10 Lists -->
        <div class="grid-2 animate-fade-in-up delay-4" style="margin-top: var(--space-2xl);">
          ${rt?.biggestPLTransfers?`
            <div class="card">
              <h3 style="font-family: var(--font-heading); font-size: var(--fs-lg); font-weight: 700; margin-bottom: var(--space-lg);">
                🏴󠁧󠁢󠁥󠁮󠁧󠁿 Top 10 PL Transfers
              </h3>
              <div style="display: grid; gap: 8px;">
                ${rt.biggestPLTransfers.map((i,e)=>`
                  <div style="display: flex; align-items: center; gap: 12px; padding: 10px; background: var(--bg-glass); border-radius: var(--radius-sm);">
                    <span style="font-family: var(--font-heading); font-weight: 800; color: ${e<3?"var(--accent-gold)":"var(--text-muted)"}; min-width: 24px;">${e+1}</span>
                    <div style="flex: 1;">
                      <div style="font-weight: 600; font-size: var(--fs-sm);">${i.player}</div>
                      <div style="font-size: 11px; color: var(--text-muted);">${i.from} → ${i.to} (${i.year})</div>
                    </div>
                    <span style="font-weight: 700; color: var(--accent-green); font-size: var(--fs-sm);">${i.fee}</span>
                  </div>
                `).join("")}
              </div>
            </div>
          `:""}
          ${rt?.biggestLaLigaTransfers?`
            <div class="card">
              <h3 style="font-family: var(--font-heading); font-size: var(--fs-lg); font-weight: 700; margin-bottom: var(--space-lg);">
                🇪🇸 Top 10 La Liga Transfers
              </h3>
              <div style="display: grid; gap: 8px;">
                ${rt.biggestLaLigaTransfers.map((i,e)=>`
                  <div style="display: flex; align-items: center; gap: 12px; padding: 10px; background: var(--bg-glass); border-radius: var(--radius-sm);">
                    <span style="font-family: var(--font-heading); font-weight: 800; color: ${e<3?"var(--accent-gold)":"var(--text-muted)"}; min-width: 24px;">${e+1}</span>
                    <div style="flex: 1;">
                      <div style="font-weight: 600; font-size: var(--fs-sm);">${i.player}</div>
                      <div style="font-size: 11px; color: var(--text-muted);">${i.from} → ${i.to} (${i.year})</div>
                    </div>
                    <span style="font-weight: 700; color: var(--accent-green); font-size: var(--fs-sm);">${i.fee}</span>
                  </div>
                `).join("")}
              </div>
            </div>
          `:""}
        </div>
      </div>
    `},mount(){ta(),document.getElementById("transfer-league-filter").addEventListener("click",i=>{const e=i.target.closest(".btn-tab");e&&(Ws=e.dataset.league,document.querySelectorAll("#transfer-league-filter .btn-tab").forEach(t=>t.classList.remove("active")),e.classList.add("active"),ta())}),document.getElementById("transfer-type-filter").addEventListener("click",i=>{const e=i.target.closest(".btn-tab");e&&($s=e.dataset.type,document.querySelectorAll("#transfer-type-filter .btn-tab").forEach(t=>t.classList.remove("active")),e.classList.add("active"),ta())}),document.getElementById("transfer-sort").addEventListener("click",i=>{const e=i.target.closest(".btn-tab");e&&(Xl=e.dataset.sort,document.querySelectorAll("#transfer-sort .btn-tab").forEach(t=>t.classList.remove("active")),e.classList.add("active"),ta())})}};function ta(){const i=document.getElementById("transfers-grid");if(!i)return;let e=[...yd];if(Ws!=="all"&&(e=e.filter(t=>t.league===Ws)),$s!=="all"&&(e=e.filter(t=>t.type===$s)),Xl==="fee"?e.sort((t,n)=>(n.feeValue||0)-(t.feeValue||0)):e.sort((t,n)=>n.year-t.year),e.length===0){i.innerHTML=`
      <div class="empty-state">
        <div class="empty-icon">🔄</div>
        <div class="empty-title">No transfers found</div>
        <div class="empty-text">Try adjusting your filters</div>
      </div>
    `;return}i.innerHTML=e.map(t=>{const n=t.player.split(" ").map(r=>r[0]).join("").slice(0,2),a=t.type==="free"?"🆓":t.type==="loan"?"📋":"💰",s=t.league==="PL"?"badge-pl":"badge-liga";return`
      <div class="transfer-card">
        <div class="transfer-avatar">${n}</div>
        <div class="transfer-info">
          <div class="transfer-player">${t.player}</div>
          <div class="transfer-clubs">
            <span>${t.fromClub}</span>
            <span class="transfer-arrow">→</span>
            <span>${t.toClub}</span>
            <span class="badge ${s}" style="font-size: 9px; padding: 1px 5px; margin-left: 4px;">${t.league}</span>
          </div>
          <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">
            ${a} ${t.season||t.year} ${t.isRecord?"🔴 Record":""}
          </div>
        </div>
        <div class="transfer-fee">${t.fee}</div>
      </div>
    `}).join("")}const Xs=[{id:1,text:'Arsenal went the entire 2003-04 Premier League season unbeaten, earning the nickname "The Invincibles".',league:"PL",category:"records",emoji:"🏆",highlight:"Invincibles"},{id:2,text:"Alan Shearer holds the record for most Premier League goals with 260.",league:"PL",category:"players",emoji:"⚽",highlight:"260 goals"},{id:3,text:"Manchester City recorded 100 points in the 2017-18 season, the highest ever in a PL campaign.",league:"PL",category:"records",emoji:"💯",highlight:"100 points"},{id:4,text:"Ryan Giggs has the most assists in Premier League history with 162.",league:"PL",category:"players",emoji:"👟",highlight:"162 assists"},{id:5,text:"Manchester United have won the most Premier League titles with 13.",league:"PL",category:"history",emoji:"🥇",highlight:"13 titles"},{id:6,text:"Sadio Mané scored the fastest hat-trick in PL history in 2 minutes and 56 seconds.",league:"PL",category:"records",emoji:"⏱️",highlight:"2m 56s"},{id:7,text:"Gareth Barry holds the record for most Premier League appearances with 653.",league:"PL",category:"records",emoji:"🏟️",highlight:"653 appearances"},{id:8,text:"Only seven clubs have played in every Premier League season since its inception.",league:"PL",category:"clubs",emoji:"🛡️",highlight:"seven clubs"},{id:9,text:"Chelsea conceded only 15 goals in the 2004-05 PL season, a record low.",league:"PL",category:"records",emoji:"🧱",highlight:"15 goals"},{id:10,text:"Erling Haaland holds the record for most goals in a single 38-game PL season with 36.",league:"PL",category:"players",emoji:"🤖",highlight:"36 goals"},{id:11,text:"Peter Schmeichel was the first goalkeeper to score in the Premier League.",league:"PL",category:"fun",emoji:"🧤",highlight:"first goalkeeper"},{id:12,text:"Leicester City won the PL title in 2015-16 despite being 5000/1 outsiders.",league:"PL",category:"history",emoji:"🦊",highlight:"5000/1"},{id:13,text:"Petr Cech holds the record for most clean sheets in PL history with 202.",league:"PL",category:"players",emoji:"🥅",highlight:"202 clean sheets"},{id:14,text:"Thierry Henry won the Golden Boot a record four times in the Premier League.",league:"PL",category:"players",emoji:"👟",highlight:"four times"},{id:15,text:"Marcus Bent has played for a record eight different Premier League clubs.",league:"PL",category:"fun",emoji:"🔄",highlight:"eight clubs"},{id:16,text:"The highest scoring PL match was Portsmouth 7-4 Reading in 2007.",league:"PL",category:"records",emoji:"🥅",highlight:"11 goals"},{id:17,text:"James Milner has made the second-most appearances in PL history and is still active.",league:"PL",category:"players",emoji:"🏃",highlight:"second-most"},{id:18,text:"Liverpool and Man City both recorded 18 consecutive wins in the Premier League.",league:"PL",category:"records",emoji:"🔥",highlight:"18 consecutive wins"},{id:19,text:"Derby County recorded the lowest ever points total in a PL season with 11 in 2007-08.",league:"PL",category:"records",emoji:"📉",highlight:"11 points"},{id:20,text:"Shane Long scored the fastest goal in PL history after just 7.69 seconds.",league:"PL",category:"records",emoji:"⚡",highlight:"7.69 seconds"},{id:21,text:"Sir Alex Ferguson won 13 Premier League titles as a manager.",league:"PL",category:"history",emoji:"👔",highlight:"13 titles"},{id:22,text:"Sunderland once lost 15 consecutive matches in the Premier League.",league:"PL",category:"records",emoji:"😞",highlight:"15 consecutive"},{id:23,text:"Arsène Wenger managed 828 Premier League games, the most in history.",league:"PL",category:"history",emoji:"📋",highlight:"828 games"},{id:24,text:"Only three players have scored over 200 PL goals: Shearer, Kane, and Rooney.",league:"PL",category:"players",emoji:"👑",highlight:"200 goals"},{id:25,text:"No English manager has ever won the Premier League title.",league:"PL",category:"history",emoji:"🏴󠁧󠁢󠁥󠁮󠁧󠁿",highlight:"No English manager"},{id:26,text:"Lionel Messi holds the record for most La Liga goals with 474.",league:"LL",category:"players",emoji:"🐐",highlight:"474 goals"},{id:27,text:"Real Madrid have won the most La Liga titles with 36.",league:"LL",category:"history",emoji:"👑",highlight:"36 titles"},{id:28,text:"Lionel Messi scored 50 goals in the 2011-12 La Liga season, a record.",league:"LL",category:"records",emoji:"👽",highlight:"50 goals"},{id:29,text:"Athletic Bilbao, Barcelona, and Real Madrid have never been relegated from La Liga.",league:"LL",category:"clubs",emoji:"🛡️",highlight:"never been relegated"},{id:30,text:"Cristiano Ronaldo holds the record for most La Liga hat-tricks with 34.",league:"LL",category:"players",emoji:"🎩",highlight:"34 hat-tricks"},{id:31,text:"Andoni Zubizarreta holds the record for most La Liga appearances with 622.",league:"LL",category:"records",emoji:"🏟️",highlight:"622 appearances"},{id:32,text:"Real Madrid reached 100 points in the 2011-12 season, later matched by Barcelona in 2012-13.",league:"LL",category:"records",emoji:"💯",highlight:"100 points"},{id:33,text:"Lionel Messi holds the record for most assists in La Liga history with 192.",league:"LL",category:"players",emoji:"👟",highlight:"192 assists"},{id:34,text:"Paco Gento won a record 12 La Liga titles during his playing career.",league:"LL",category:"history",emoji:"🥇",highlight:"12 titles"},{id:35,text:"The highest scoring game in La Liga history was Athletic Bilbao 12-1 Barcelona in 1931.",league:"LL",category:"records",emoji:"⚽",highlight:"12-1"},{id:36,text:"Lamine Yamal is the youngest goalscorer in La Liga history at 16 years and 87 days.",league:"LL",category:"players",emoji:"👶",highlight:"16 years"},{id:37,text:"Real Madrid scored 121 goals in the 2011-12 season, a La Liga record.",league:"LL",category:"records",emoji:"🥅",highlight:"121 goals"},{id:38,text:"Jan Oblak and Paco Liaño hold the record for fewest goals conceded in a 38-game season (18).",league:"LL",category:"records",emoji:"🧱",highlight:"18 goals"},{id:39,text:"Luis Aragonés managed a record 756 matches in La Liga.",league:"LL",category:"history",emoji:"📋",highlight:"756 matches"},{id:40,text:"Lionel Messi scored in 21 consecutive La Liga matches during the 2012-13 season.",league:"LL",category:"records",emoji:"🔥",highlight:"21 consecutive"},{id:41,text:"Telmo Zarra won the Pichichi (top scorer) award 6 times, a record held for decades until broken by Messi.",league:"LL",category:"history",emoji:"👟",highlight:"Zarra"},{id:42,text:"Barcelona won 16 consecutive La Liga matches under Pep Guardiola in 2010-11.",league:"LL",category:"records",emoji:"💪",highlight:"16 consecutive"},{id:43,text:"Claudio Bravo holds the record for most consecutive minutes without conceding at the start of a season (754).",league:"LL",category:"records",emoji:"🧤",highlight:"754 minutes"},{id:44,text:"Karim Benzema has the most assists for Real Madrid in La Liga history.",league:"LL",category:"players",emoji:"👟",highlight:"Benzema"},{id:45,text:"Deportivo La Coruña won their only La Liga title in the 1999-00 season.",league:"LL",category:"history",emoji:"🏆",highlight:"Deportivo"},{id:46,text:"Real Sociedad holds the record for the longest unbeaten run in La Liga history (38 games, matching Barca later).",league:"LL",category:"records",emoji:"🛡️",highlight:"38 games"},{id:47,text:"Sergio Ramos holds the record for the most red cards in La Liga history.",league:"LL",category:"players",emoji:"🟥",highlight:"red cards"},{id:48,text:"Joaquín is the outfield player with the most appearances in La Liga (622).",league:"LL",category:"players",emoji:"🏃",highlight:"Joaquín"},{id:49,text:"Antoine Griezmann is Atletico Madrid’s all-time top scorer.",league:"LL",category:"players",emoji:"👑",highlight:"Griezmann"},{id:50,text:"Girona FC qualified for the Champions League for the first time in their history in the 2023-24 season.",league:"LL",category:"history",emoji:"🌟",highlight:"Girona FC"},{id:51,text:"Cristiano Ronaldo is the only player to score 100+ goals in both the Premier League and La Liga.",league:"both",category:"players",emoji:"🌟",highlight:"100+ goals in both"}],bo=[{year:1888,event:"The Football League was founded in England, the oldest in the world.",league:"PL"},{year:1929,event:"La Liga was founded with 10 founding clubs.",league:"LL"},{year:1992,event:"The Premier League was founded, replacing the First Division.",league:"PL"},{year:1995,event:"The Bosman ruling changed football transfers forever, allowing free agent moves.",league:"both"},{year:2004,event:"Arsenal complete the Premier League season unbeaten.",league:"PL"},{year:2012,event:"Lionel Messi scores a record 91 goals in a calendar year.",league:"LL"},{year:2018,event:"VAR (Video Assistant Referee) was officially introduced into La Liga.",league:"LL"},{year:2019,event:"VAR was introduced into the English Premier League.",league:"PL"}],An={pl:{founded:1992,currentTeams:20,totalSeasons:33,description:"The Premier League is the highest level of the English football league system. Contested by 20 clubs, it operates on a system of promotion and relegation with the English Football League (EFL). It is the most-watched sports league in the world."},laliga:{founded:1929,currentTeams:20,totalSeasons:94,description:"The Campeonato Nacional de Liga de Primera División, commonly known as Primera División in Spain, and as La Liga in English-speaking countries, is the men's top professional football division of the Spanish football league system."}};let Ys="all",qs="all";const bd={render(){return`
      <div class="facts-page">
        <img src="${window.appBasePath}images/hero-4.jpg" class="section-image-banner" alt="Football History" style="height: 240px; margin-bottom: var(--space-xl);" />
        <div class="section-header animate-fade-in">
          <div>
            <h1 class="section-title">📖 Facts & History</h1>
            <div class="section-subtitle">Fascinating stories, records, milestones, and trivia from the beautiful game</div>
          </div>
        </div>

        <!-- League History Cards -->
        <div class="grid-2 animate-fade-in-up delay-1" style="margin-bottom: var(--space-2xl);">
          <div class="card-glow" style="border-color: rgba(61, 25, 91, 0.3);">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
              <span style="font-size: 36px;">🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>
              <div>
                <h3 style="font-family: var(--font-heading); font-size: var(--fs-xl); font-weight: 800;">Premier League</h3>
                <div style="font-size: var(--fs-xs); color: var(--text-muted);">Founded ${An?.pl?.founded}</div>
              </div>
            </div>
            <p style="color: var(--text-secondary); font-size: var(--fs-sm); line-height: 1.7; margin-bottom: 16px;">
              ${An?.pl?.description}
            </p>
            <div style="display: flex; gap: 16px; flex-wrap: wrap;">
              <div style="text-align: center;">
                <div style="font-family: var(--font-heading); font-size: var(--fs-2xl); font-weight: 800; color: var(--accent-blue);">${An?.pl?.totalSeasons}</div>
                <div style="font-size: 11px; color: var(--text-muted);">Seasons</div>
              </div>
              <div style="text-align: center;">
                <div style="font-family: var(--font-heading); font-size: var(--fs-2xl); font-weight: 800; color: var(--accent-blue);">${An?.pl?.currentTeams}</div>
                <div style="font-size: 11px; color: var(--text-muted);">Teams</div>
              </div>
            </div>
          </div>
          <div class="card-glow" style="border-color: rgba(238, 135, 7, 0.3);">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
              <span style="font-size: 36px;">🇪🇸</span>
              <div>
                <h3 style="font-family: var(--font-heading); font-size: var(--fs-xl); font-weight: 800;">La Liga</h3>
                <div style="font-size: var(--fs-xs); color: var(--text-muted);">Founded ${An?.laliga?.founded}</div>
              </div>
            </div>
            <p style="color: var(--text-secondary); font-size: var(--fs-sm); line-height: 1.7; margin-bottom: 16px;">
              ${An?.laliga?.description}
            </p>
            <div style="display: flex; gap: 16px; flex-wrap: wrap;">
              <div style="text-align: center;">
                <div style="font-family: var(--font-heading); font-size: var(--fs-2xl); font-weight: 800; color: var(--accent-orange);">${An?.laliga?.totalSeasons}</div>
                <div style="font-size: 11px; color: var(--text-muted);">Seasons</div>
              </div>
              <div style="text-align: center;">
                <div style="font-family: var(--font-heading); font-size: var(--fs-2xl); font-weight: 800; color: var(--accent-orange);">${An?.laliga?.currentTeams}</div>
                <div style="font-size: 11px; color: var(--text-muted);">Teams</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Fun Facts Section -->
        <div class="section-header animate-fade-in-up delay-2">
          <div>
            <h2 class="section-title" style="font-size: var(--fs-2xl);">🤯 Did You Know?</h2>
            <div class="section-subtitle">${Xs?.length||0} fascinating facts about Premier League & La Liga</div>
          </div>
        </div>

        <div class="standings-controls animate-fade-in-up delay-2" style="margin-bottom: var(--space-lg);">
          <div class="btn-group" id="fact-league-filter">
            <button class="btn-tab active" data-league="all">All</button>
            <button class="btn-tab" data-league="PL">🏴󠁧󠁢󠁥󠁮󠁧󠁿 PL</button>
            <button class="btn-tab" data-league="LL">🇪🇸 La Liga</button>
            <button class="btn-tab" data-league="both">🌍 Both</button>
          </div>
          <div class="btn-group" id="fact-category-filter">
            <button class="btn-tab active" data-cat="all">All</button>
            <button class="btn-tab" data-cat="records">🏆 Records</button>
            <button class="btn-tab" data-cat="history">📜 History</button>
            <button class="btn-tab" data-cat="fun">😄 Fun</button>
            <button class="btn-tab" data-cat="players">⚽ Players</button>
            <button class="btn-tab" data-cat="clubs">🏟️ Clubs</button>
          </div>
        </div>

        <div id="facts-grid" class="facts-grid animate-fade-in-up delay-3"></div>

        <!-- Milestones Timeline -->
        <div class="section-header animate-fade-in-up delay-4" style="margin-top: var(--space-2xl);">
          <div>
            <h2 class="section-title" style="font-size: var(--fs-2xl);">📅 Key Milestones</h2>
            <div class="section-subtitle">Important moments in football history</div>
          </div>
        </div>

        <div id="milestones-timeline" class="history-timeline animate-fade-in-up delay-5"></div>
      </div>
    `},mount(){Qa(),xd(),document.getElementById("fact-league-filter")?.addEventListener("click",i=>{const e=i.target.closest(".btn-tab");e&&(qs=e.dataset.league,document.querySelectorAll("#fact-league-filter .btn-tab").forEach(t=>t.classList.remove("active")),e.classList.add("active"),Qa())}),document.getElementById("fact-category-filter")?.addEventListener("click",i=>{const e=i.target.closest(".btn-tab");e&&(Ys=e.dataset.cat,document.querySelectorAll("#fact-category-filter .btn-tab").forEach(t=>t.classList.remove("active")),e.classList.add("active"),Qa())})}};function Qa(){const i=document.getElementById("facts-grid");if(!i||!Xs)return;let e=[...Xs];if(qs!=="all"&&(e=e.filter(t=>t.league===qs)),Ys!=="all"&&(e=e.filter(t=>t.category===Ys)),e.length===0){i.innerHTML=`
      <div class="empty-state" style="grid-column: 1 / -1;">
        <div class="empty-icon">📖</div>
        <div class="empty-title">No facts found</div>
        <div class="empty-text">Try a different filter</div>
      </div>
    `;return}i.innerHTML=e.map((t,n)=>{const a=t.highlight?t.text.replace(new RegExp(`(${t.highlight})`,"gi"),'<span class="fact-highlight">$1</span>'):t.text;return`
      <div class="fact-card" style="animation-delay: ${n%6*.05}s;">
        <div class="fact-number">#${t.id||n+1}</div>
        <div class="fact-emoji">${t.emoji||"⚽"}</div>
        <div class="fact-text">${a}</div>
        <div style="margin-top: 12px; display: flex; gap: 6px;">
          <span class="badge ${t.league==="PL"?"badge-pl":t.league==="LL"?"badge-liga":"badge-info"}" 
                style="font-size: 10px;">
            ${t.league==="PL"?"Premier League":t.league==="LL"?"La Liga":"Both Leagues"}
          </span>
          <span class="badge badge-info" style="font-size: 10px;">${t.category||"general"}</span>
        </div>
      </div>
    `}).join("")}function xd(){const i=document.getElementById("milestones-timeline");if(!i||!bo)return;const e={};bo.forEach(n=>{const s=`${Math.floor(n.year/10)*10}s`;e[s]||(e[s]=[]),e[s].push(n)});const t=Object.keys(e).sort((n,a)=>parseInt(a)-parseInt(n));i.innerHTML=t.map(n=>`
    <div class="timeline-section">
      <div class="timeline-year">${n}</div>
      ${e[n].sort((a,s)=>s.year-a.year).map(a=>`
          <div class="timeline-event">
            <strong style="color: var(--accent-blue);">${a.year}</strong> — 
            ${a.event}
            <span class="badge ${a.league==="PL"?"badge-pl":a.league==="LL"?"badge-liga":"badge-info"}" 
                  style="font-size: 9px; padding: 1px 5px; margin-left: 6px;">
              ${a.league||"both"}
            </span>
          </div>
        `).join("")}
    </div>
  `).join("")}const Md={render(){const i=ea.filter(a=>a.isHeadline),e=ea.filter(a=>!a.isHeadline),t=ea.filter(a=>a.isTrending),n={"MATCH REPORT":"var(--accent-blue)",TRANSFER:"var(--accent-green)",UCL:"var(--accent-purple)",ANALYSIS:"var(--accent-orange)",INTERNATIONAL:"var(--accent-crimson)",RECORD:"var(--accent-gold)",PREVIEW:"var(--accent-blue)","LA LIGA":"var(--ll-primary)","PREMIER LEAGUE":"var(--pl-primary)"};return`
      <div class="news-page">
        <div class="section-header animate-fade-in">
          <div>
            <h1 class="section-title">📰 Football News</h1>
            <div class="section-subtitle">Latest headlines, match reports, transfers, and analysis</div>
          </div>
        </div>

        <div class="news-layout animate-fade-in-up delay-1">
          <!-- Main News Column -->
          <div class="news-main">
            <!-- Top Headline -->
            ${i.length>0?`
              <div class="news-headline-card" onclick="showNewsDetail(${i[0].id})">
                <div style="height: 280px; overflow: hidden;">
                  <img src="${window.appBasePath}images/news-1.jpg" alt="${i[0].title}" class="news-card-image" style="height: 280px;" />
                </div>
                <div class="news-headline-body">
                  <div class="news-category" style="color: ${n[i[0].category]||"var(--accent-blue)"};">
                    ${i[0].category}
                  </div>
                  <h2 class="news-title">${i[0].title}</h2>
                  <p class="news-subtitle">${i[0].subtitle}</p>
                  <div class="news-meta">
                    <span>${i[0].timeAgo}</span>
                    <span>•</span>
                    <span>${i[0].source}</span>
                  </div>
                </div>
              </div>
            `:""}

            <!-- Other Headlines -->
            ${i.slice(1).map((a,s)=>`
              <div class="news-headline-card" onclick="showNewsDetail(${a.id})">
                <div style="height: 200px; overflow: hidden;">
                  <img src="${window.appBasePath}images/news-${s%3+1}.jpg" alt="${a.title}" class="news-card-image" style="height: 200px;" />
                </div>
                <div class="news-headline-body">
                  <div class="news-category" style="color: ${n[a.category]||"var(--accent-blue)"};">
                    ${a.category}
                  </div>
                  <h3 class="news-title" style="font-size: var(--fs-xl);">${a.title}</h3>
                  <p class="news-subtitle">${a.subtitle}</p>
                  <div class="news-meta">
                    <span>${a.timeAgo}</span>
                    <span>•</span>
                    <span>${a.source}</span>
                  </div>
                </div>
              </div>
            `).join("")}

            <!-- Regular Articles -->
            ${e.map((a,s)=>`
              <div class="news-article-card" onclick="showNewsDetail(${a.id})">
                <div style="width: 200px; height: 150px; overflow: hidden; flex-shrink: 0;">
                  <img src="${window.appBasePath}images/news-${s%3+1}.jpg" alt="${a.title}" class="news-card-image" style="width: 200px; height: 150px;" />
                </div>
                <div class="news-article-body">
                  <div class="news-category" style="color: ${n[a.category]||"var(--accent-blue)"};">
                    ${a.category}
                  </div>
                  <h3 class="news-title">${a.title}</h3>
                  <p class="news-subtitle">${a.subtitle}</p>
                  <div class="news-meta">
                    <span>${a.timeAgo}</span>
                    <span>•</span>
                    <span>${a.source}</span>
                  </div>
                </div>
              </div>
            `).join("")}
          </div>

          <!-- Sidebar -->
          <div class="news-sidebar">
            <!-- Top Headlines -->
            <div class="headlines-list">
              <h3>📋 Top Headlines</h3>
              ${(Vc||[]).map(a=>`
                <div class="headline-item">${a}</div>
              `).join("")}
            </div>

            <!-- Trending -->
            <div class="headlines-list">
              <h3>🔥 Trending Now</h3>
              ${t.map(a=>`
                <div class="headline-item" onclick="showNewsDetail(${a.id})">${a.title}</div>
              `).join("")}
            </div>

            <!-- Quick Links -->
            <div class="headlines-list">
              <h3>⚡ Quick Links</h3>
              <div class="headline-item" onclick="navigateTo('predictions')">🔮 Match Predictions</div>
              <div class="headline-item" onclick="navigateTo('standings')">📊 League Standings</div>
              <div class="headline-item" onclick="navigateTo('transfers')">🔄 Transfer Hub</div>
              <div class="headline-item" onclick="navigateTo('streaming')">📺 Live Streaming</div>
              <div class="headline-item" onclick="navigateTo('players')">⚽ Player Database</div>
            </div>
          </div>
        </div>

        <div id="news-modal-container"></div>
      </div>
    `},mount(){window.showNewsDetail=function(i){const e=ea.find(a=>a.id===i);if(!e)return;const t=document.getElementById("news-modal-container"),n=(e.body||"").split(`

`).filter(a=>a.trim());t.innerHTML=`
        <div class="modal-overlay" onclick="closeNewsModal(event)">
          <div class="modal-content" style="max-width: 700px;" onclick="event.stopPropagation()">
            <div class="modal-header">
              <div>
                <div class="news-category" style="margin-bottom: 4px;">${e.category}</div>
                <h2 style="font-family: var(--font-heading); font-size: var(--fs-2xl); font-weight: 800;">${e.title}</h2>
              </div>
              <button class="modal-close" onclick="closeNewsModal()">✕</button>
            </div>
            <div class="modal-body">
              <div class="news-meta" style="margin-bottom: var(--space-xl);">
                <span>${e.timeAgo}</span>
                <span>•</span>
                <span>${e.source}</span>
                <span>•</span>
                <span>${e.date}</span>
              </div>
              <div class="news-detail-body">
                ${n.map(a=>`<p>${a}</p>`).join("")}
              </div>
              ${e.tags&&e.tags.length>0?`
                <div class="news-tags">
                  ${e.tags.map(a=>`<span class="badge badge-info">${a}</span>`).join("")}
                </div>
              `:""}
            </div>
          </div>
        </div>
      `},window.closeNewsModal=function(i){if(i&&i.target!==i.currentTarget)return;const e=document.getElementById("news-modal-container");e&&(e.innerHTML="")}}},Sd=[{id:1,name:"TotalSportek",url:"https://totalsportek24.is/",description:"Free live football streams for Premier League, La Liga, Champions League and more.",category:"free",leagues:["PL","LL","UCL","International"],rating:4.5,features:["HD Quality","No Registration","Mobile Friendly"],icon:"📺",color:"#1a73e8",isRecommended:!0},{id:2,name:"YosinTV",url:"https://www.yosintv.me/",description:"Reliable free streams for top European leagues with multiple language options.",category:"free",leagues:["PL","LL","UCL"],rating:4.2,features:["Multiple Links","Low Buffering","No Registration"],icon:"📱",color:"#E1306C"},{id:3,name:"ESPN+",url:"https://www.espn.com/watch/",description:"Premium streaming service for La Liga, Bundesliga, and cup competitions.",category:"premium",leagues:["LL","Cup","International"],rating:4.8,features:["4K Streaming","Expert Analysis","On-Demand Replays"],icon:"⭐",color:"#DD0000",isRecommended:!0},{id:4,name:"DAZN",url:"https://www.dazn.com",description:"Global sports streaming platform with exclusive rights to major leagues in various regions.",category:"premium",leagues:["PL","LL","UCL"],rating:4.6,features:["Multi-view","Original Content","High Quality"],icon:"⚡",color:"#F4FF00"},{id:5,name:"Peacock",url:"https://www.peacocktv.com",description:"Official US broadcaster for the Premier League, offering live matches and highlights.",category:"premium",leagues:["PL"],rating:4.4,features:["Exclusive Matches","Goal Rush","Documentaries"],icon:"🦚",color:"#00A850",isRecommended:!0},{id:6,name:"Sky Sports",url:"https://www.skysports.com",description:"The home of Premier League football in the UK, featuring top-tier analysis.",category:"premium",leagues:["PL","EFL"],rating:4.9,features:["Top Punditry","Ultra HD","In-depth Stats"],icon:"📡",color:"#000099"},{id:7,name:"TNT Sports",url:"https://www.tntsports.co.uk",description:"Premium broadcaster for Premier League and exclusive home of UEFA Champions League in the UK.",category:"premium",leagues:["PL","UCL","UEL"],rating:4.7,features:["Exclusive UCL","Discovery+ Bundle","4K HDR"],icon:"🎯",color:"#FF0055"},{id:8,name:"beIN Sports",url:"https://www.beinsports.com",description:"Leading broadcaster for La Liga, Ligue 1, and international tournaments in multiple regions.",category:"premium",leagues:["LL","International"],rating:4.5,features:["Multi-language","Extensive Coverage","Live Scores"],icon:"🟣",color:"#5E0085"},{id:9,name:"Movistar+",url:"https://ver.movistarplus.es",description:"Official broadcaster for La Liga in Spain, offering comprehensive match coverage.",category:"premium",leagues:["LL","UCL"],rating:4.6,features:["Spanish Commentary","Tactical Cams","Post-match Shows"],icon:"M",color:"#00A9E0"},{id:10,name:"LaLiga TV",url:"https://www.laliga.com",description:"24/7 channel dedicated to Spanish football with live matches and daily news.",category:"premium",leagues:["LL"],rating:4.3,features:["24/7 Content","English Commentary","Inside Access"],icon:"⚽",color:"#E90F2E"},{id:11,name:"NBC Sports",url:"https://www.nbcsports.com",description:"Home of Premier League mornings and extensive US broadcast coverage.",category:"premium",leagues:["PL"],rating:4.7,features:["Studio Shows","Match Highlights","Interviews"],icon:"🦚",color:"#002C77"},{id:12,name:"Amazon Prime Video Sport",url:"https://www.amazon.com/primevideo/sport",description:"Exclusive broadcaster for selected Premier League matchweeks and Champions League games.",category:"premium",leagues:["PL","UCL"],rating:4.5,features:["X-Ray Stats","Stadium FX","Multi-match viewing"],icon:"📦",color:"#00A8E1"},{id:13,name:"Fubo TV",url:"https://www.fubo.tv",description:"Sports-focused streaming service with access to major networks broadcasting football.",category:"premium",leagues:["PL","LL","International"],rating:4.4,features:["Cloud DVR","Multiple Screens","Sports Add-ons"],icon:"📺",color:"#FF4500"},{id:14,name:"LiveScore",url:"https://www.livescore.com",description:"The go-to destination for real-time scores, match statistics, and text commentary.",category:"highlights",leagues:["PL","LL","UCL","International"],rating:4.9,features:["Fast Updates","Lineups","Push Notifications"],icon:"📈",color:"#FF6600",isRecommended:!0},{id:15,name:"FotMob",url:"https://www.fotmob.com",description:"Comprehensive football app providing deep stats, player ratings, and news.",category:"highlights",leagues:["PL","LL","UCL","International"],rating:4.8,features:["Expected Goals (xG)","Shot Maps","Audio Commentary"],icon:"📱",color:"#00B16A"}],xo=[{id:1,homeTeam:"Manchester United",awayTeam:"Arsenal",league:"Premier League",date:"2026-08-15",time:"12:30 GMT",venue:"Old Trafford",streamLinks:["TotalSportek","TNT Sports","Peacock"],isFeatured:!0},{id:2,homeTeam:"Chelsea",awayTeam:"Manchester City",league:"Premier League",date:"2026-08-16",time:"16:30 GMT",venue:"Stamford Bridge",streamLinks:["TotalSportek","Sky Sports","Peacock","NBC Sports"],isFeatured:!0},{id:3,homeTeam:"Real Madrid",awayTeam:"Athletic Club",league:"La Liga",date:"2026-08-15",time:"20:00 GMT",venue:"Santiago Bernabeu",streamLinks:["YosinTV","ESPN+","Movistar+"],isFeatured:!0},{id:4,homeTeam:"Barcelona",awayTeam:"Valencia",league:"La Liga",date:"2026-08-16",time:"20:00 GMT",venue:"Spotify Camp Nou",streamLinks:["TotalSportek","ESPN+","DAZN"],isFeatured:!0},{id:5,homeTeam:"Liverpool",awayTeam:"Aston Villa",league:"Premier League",date:"2026-08-15",time:"15:00 GMT",venue:"Anfield",streamLinks:["TotalSportek","Peacock"],isFeatured:!1},{id:6,homeTeam:"Tottenham Hotspur",awayTeam:"Newcastle United",league:"Premier League",date:"2026-08-16",time:"14:00 GMT",venue:"Tottenham Hotspur Stadium",streamLinks:["YosinTV","Sky Sports","Peacock"],isFeatured:!0},{id:7,homeTeam:"Atletico Madrid",awayTeam:"Real Sociedad",league:"La Liga",date:"2026-08-15",time:"18:00 GMT",venue:"Civitas Metropolitano",streamLinks:["ESPN+","LaLiga TV"],isFeatured:!1},{id:8,homeTeam:"Sevilla",awayTeam:"Real Betis",league:"La Liga",date:"2026-08-17",time:"20:00 GMT",venue:"Ramon Sanchez Pizjuan",streamLinks:["TotalSportek","ESPN+","DAZN"],isFeatured:!0},{id:9,homeTeam:"Brighton",awayTeam:"West Ham United",league:"Premier League",date:"2026-08-15",time:"15:00 GMT",venue:"Amex Stadium",streamLinks:["Peacock"],isFeatured:!1},{id:10,homeTeam:"Everton",awayTeam:"Crystal Palace",league:"Premier League",date:"2026-08-15",time:"15:00 GMT",venue:"Goodison Park",streamLinks:["Peacock"],isFeatured:!1},{id:11,homeTeam:"Girona",awayTeam:"Villarreal",league:"La Liga",date:"2026-08-16",time:"18:00 GMT",venue:"Montilivi",streamLinks:["ESPN+","LaLiga TV"],isFeatured:!1},{id:12,homeTeam:"Brentford",awayTeam:"Fulham",league:"Premier League",date:"2026-08-17",time:"20:00 GMT",venue:"Gtech Community Stadium",streamLinks:["Sky Sports","Peacock"],isFeatured:!1},{id:13,homeTeam:"Celta Vigo",awayTeam:"Osasuna",league:"La Liga",date:"2026-08-14",time:"20:00 GMT",venue:"Abanca-Balaidos",streamLinks:["ESPN+"],isFeatured:!1},{id:14,homeTeam:"Nottingham Forest",awayTeam:"Bournemouth",league:"Premier League",date:"2026-08-15",time:"15:00 GMT",venue:"City Ground",streamLinks:["Peacock"],isFeatured:!1},{id:15,homeTeam:"Mallorca",awayTeam:"Getafe",league:"La Liga",date:"2026-08-16",time:"16:00 GMT",venue:"Son Moix",streamLinks:["ESPN+"],isFeatured:!1}];let Ks="all";const Ed={render(){return`
      <div class="streaming-page">
        <div class="section-header animate-fade-in">
          <div>
            <h1 class="section-title">📺 Live TV & Streaming</h1>
            <div class="section-subtitle">Watch live football from the best streaming sites and channels</div>
          </div>
        </div>

        <!-- Warning Banner -->
        <div class="card-glow animate-fade-in-up delay-1" style="margin-bottom: var(--space-2xl); border-color: rgba(251, 191, 36, 0.2);">
          <div style="display: flex; align-items: center; gap: 12px;">
            <span style="font-size: 28px;">⚠️</span>
            <div>
              <div style="font-weight: 700; margin-bottom: 4px;">Disclaimer</div>
              <div style="font-size: var(--fs-sm); color: var(--text-secondary);">
                FootballIQ provides links to external streaming sites for informational purposes. We do not host, control, or verify the legality of content on external websites. Always use official, licensed sources where available.
              </div>
            </div>
          </div>
        </div>

        <!-- Filters -->
        <div class="standings-controls animate-fade-in-up delay-1">
          <div class="btn-group" id="stream-filter">
            <button class="btn-tab active" data-cat="all">All Sites</button>
            <button class="btn-tab" data-cat="free">🆓 Free</button>
            <button class="btn-tab" data-cat="premium">💎 Premium</button>
            <button class="btn-tab" data-cat="highlights">📹 Highlights</button>
          </div>
        </div>

        <!-- Streaming Sites Grid -->
        <div id="streaming-grid" class="streaming-grid animate-fade-in-up delay-2"></div>

        <!-- Upcoming Matches -->
        <div class="section-header animate-fade-in-up delay-3" style="margin-top: var(--space-2xl);">
          <div>
            <h2 class="section-title" style="font-size: var(--fs-2xl);">📅 Upcoming Matches</h2>
            <div class="section-subtitle">Featured fixtures you won't want to miss</div>
          </div>
        </div>

        <div id="match-schedule" class="animate-fade-in-up delay-4" style="display: grid; gap: var(--space-md);"></div>
      </div>
    `},mount(){Mo(),Td(),document.getElementById("stream-filter")?.addEventListener("click",i=>{const e=i.target.closest(".btn-tab");e&&(Ks=e.dataset.cat,document.querySelectorAll("#stream-filter .btn-tab").forEach(t=>t.classList.remove("active")),e.classList.add("active"),Mo())})}};function Mo(){const i=document.getElementById("streaming-grid");if(!i)return;let e=[...Sd];Ks!=="all"&&(e=e.filter(t=>t.category===Ks)),e.sort((t,n)=>(n.isRecommended?1:0)-(t.isRecommended?1:0)),i.innerHTML=e.map(t=>{const n="⭐".repeat(Math.floor(t.rating||0))+(t.rating%1>=.5?"½":""),a=t.category==="free"?"🆓 Free":t.category==="premium"?"💎 Premium":"📹 Highlights";return`
      <div class="stream-card ${t.isRecommended?"recommended":""}">
        <div class="stream-header">
          <div class="stream-icon" style="background: ${t.color||"#333"}20; color: ${t.color||"#fff"};">
            ${t.icon||"📺"}
          </div>
          <div>
            <div class="stream-name">${t.name}</div>
            <div class="stream-category">${a}</div>
          </div>
        </div>

        <div class="stream-description">${t.description}</div>

        <div class="stream-rating">
          ${n} <span style="color: var(--text-muted); margin-left: 4px;">${t.rating||"?"}/5</span>
        </div>

        <div class="stream-leagues">
          ${(t.leagues||[]).map(s=>`<span class="badge ${s==="PL"?"badge-pl":s==="LL"?"badge-liga":"badge-info"}" style="font-size: 10px;">${s}</span>`).join("")}
        </div>

        <div class="stream-features">
          ${(t.features||[]).map(s=>`
            <span class="badge badge-success" style="font-size: 10px;">✓ ${s}</span>
          `).join("")}
        </div>

        <a href="${t.url}" target="_blank" rel="noopener noreferrer" class="stream-link">
          🔗 Visit ${t.name}
        </a>
      </div>
    `}).join("")}function Td(){const i=document.getElementById("match-schedule");!i||!xo||(i.innerHTML=xo.map(e=>`
    <div class="schedule-card ${e.isFeatured?"featured":""}">
      <div class="schedule-team home">
        <div style="font-weight: 700;">${e.homeTeam}</div>
      </div>
      <div class="schedule-vs">VS</div>
      <div class="schedule-team">
        <div style="font-weight: 700;">${e.awayTeam}</div>
      </div>
      <div class="schedule-info">
        <div class="schedule-time">${e.time}</div>
        <div>${e.date}</div>
        <div style="margin-top: 4px;">
          <span class="badge badge-info" style="font-size: 9px;">${e.league}</span>
        </div>
        ${e.streamLinks?`
          <div style="margin-top: 6px; font-size: 10px; color: var(--text-muted);">
            📺 ${e.streamLinks.join(", ")}
          </div>
        `:""}
      </div>
    </div>
  `).join(""))}let Da="all",Js=!1;const Yl={"Premier League":{bg:"#3d195b",badge:"badge-pl",emoji:"🏴󠁧󠁢󠁥󠁮󠁧󠁿"},"La Liga":{bg:"#1a3668",badge:"badge-liga",emoji:"🇪🇸"},"Champions League":{bg:"#1a428a",badge:"badge-info",emoji:"⭐"},"Ligue 1":{bg:"#091c3e",badge:"badge-info",emoji:"🇫🇷"},Bundesliga:{bg:"#DC052D20",badge:"badge-danger",emoji:"🇩🇪"}},wd={render(){const i=Wc||{},e=Object.values(i).reduce((t,n)=>t+n,0);return`
      <div class="fixtures-page">
        <img src="${window.appBasePath}images/hero-1.jpg" class="section-image-banner" alt="Fixtures" style="height: 220px; margin-bottom: var(--space-xl);" />
        <div class="section-header animate-fade-in">
          <div>
            <h1 class="section-title">📅 Fixtures & Head-to-Head</h1>
            <div class="section-subtitle">${e} upcoming matches across 5 leagues — with full H2H records</div>
          </div>
        </div>

        <!-- League Quick Stats -->
        <div class="grid-auto animate-fade-in-up delay-1" style="margin-bottom: var(--space-2xl);">
          ${Object.entries(i).map(([t,n])=>{const a=Yl[t]||{};return`
              <div class="stat-card" style="cursor:pointer; border-left: 3px solid ${a.bg||"#333"};" onclick="filterFixtureLeague('${t}')">
                <div class="stat-icon">${a.emoji||"⚽"}</div>
                <div class="stat-value text-gradient">${n}</div>
                <div class="stat-label">${t}</div>
              </div>
            `}).join("")}
        </div>

        <!-- Filters -->
        <div class="standings-controls animate-fade-in-up delay-1">
          <div class="btn-group" id="fixture-league-filter">
            <button class="btn-tab active" data-league="all">All Leagues</button>
            <button class="btn-tab" data-league="Premier League">🏴󠁧󠁢󠁥󠁮󠁧󠁿 PL</button>
            <button class="btn-tab" data-league="La Liga">🇪🇸 La Liga</button>
            <button class="btn-tab" data-league="Champions League">⭐ UCL</button>
            <button class="btn-tab" data-league="Ligue 1">🇫🇷 Ligue 1</button>
            <button class="btn-tab" data-league="Bundesliga">🇩🇪 Bundesliga</button>
          </div>
          <button class="btn btn-secondary btn-sm" id="big-match-toggle">🔥 Big Matches Only</button>
        </div>

        <div id="fixtures-list" class="animate-fade-in-up delay-2" style="display: grid; gap: var(--space-lg);"></div>
        <div id="h2h-modal-container"></div>
      </div>
    `},mount(){na(),document.getElementById("fixture-league-filter")?.addEventListener("click",i=>{const e=i.target.closest(".btn-tab");e&&(Da=e.dataset.league,document.querySelectorAll("#fixture-league-filter .btn-tab").forEach(t=>t.classList.remove("active")),e.classList.add("active"),na())}),document.getElementById("big-match-toggle")?.addEventListener("click",i=>{Js=!Js,i.target.classList.toggle("btn-primary"),i.target.classList.toggle("btn-secondary"),na()}),window.filterFixtureLeague=i=>{Da=i,document.querySelectorAll("#fixture-league-filter .btn-tab").forEach(e=>{e.classList.toggle("active",e.dataset.league===i)}),na()}}};function na(){const i=document.getElementById("fixtures-list");if(!i)return;let e=[...$c||[]];if(Da!=="all"&&(e=e.filter(t=>t.league===Da)),Js&&(e=e.filter(t=>t.isBigMatch)),e.length===0){i.innerHTML='<div class="empty-state"><div class="empty-icon">📅</div><div class="empty-title">No fixtures found</div></div>';return}i.innerHTML=e.map(t=>{const n=Yl[t.league]||{},a=t.h2h||{},s=(a.homeWins||0)+(a.draws||0)+(a.awayWins||0),r=s?Math.round(a.homeWins/s*100):33,o=s?Math.round(a.draws/s*100):34,l=100-r-o;return`
      <div class="card" style="border-left: 4px solid ${n.bg||"#333"}; ${t.isBigMatch?"border-color: var(--accent-gold); box-shadow: 0 0 15px rgba(251,191,36,0.08);":""}">
        <!-- Match Header -->
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; flex-wrap: wrap; gap: 8px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span class="badge ${n.badge||"badge-info"}" style="font-size: 11px;">${n.emoji||"⚽"} ${t.league}</span>
            ${t.matchday?`<span style="font-size: 11px; color: var(--text-muted);">${t.matchday}</span>`:""}
            ${t.isBigMatch?'<span class="badge badge-warning" style="font-size: 10px;">🔥 BIG MATCH</span>':""}
          </div>
          <div style="font-size: var(--fs-xs); color: var(--text-muted);">
            📅 ${t.date} • ⏰ ${t.time} ${t.venue?`• 🏟️ ${t.venue}`:""}
          </div>
        </div>

        <!-- Teams -->
        <div style="display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; gap: 20px; margin-bottom: 20px;">
          <div style="text-align: right;">
            <div style="font-family: var(--font-heading); font-size: var(--fs-xl); font-weight: 800;">${t.homeTeam}</div>
            <div style="font-size: 11px; color: var(--text-muted);">Home</div>
          </div>
          <div style="font-family: var(--font-heading); font-size: var(--fs-2xl); font-weight: 900; color: var(--text-muted);">VS</div>
          <div>
            <div style="font-family: var(--font-heading); font-size: var(--fs-xl); font-weight: 800;">${t.awayTeam}</div>
            <div style="font-size: 11px; color: var(--text-muted);">Away</div>
          </div>
        </div>

        <!-- H2H Summary -->
        ${a.totalMatches?`
          <div style="background: var(--bg-glass); border-radius: var(--radius-md); padding: 16px;">
            <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: var(--text-muted); margin-bottom: 12px; font-weight: 700;">
              📊 Head-to-Head Record (${a.totalMatches} matches)
            </div>

            <!-- H2H Bar -->
            <div style="display: flex; height: 32px; border-radius: var(--radius-full); overflow: hidden; margin-bottom: 12px;">
              <div style="width: ${r}%; background: var(--accent-blue); display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700; color: white; min-width: 30px;">
                ${a.homeWins}W
              </div>
              <div style="width: ${o}%; background: var(--text-muted); display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700; color: white; min-width: 30px;">
                ${a.draws}D
              </div>
              <div style="width: ${l}%; background: var(--accent-crimson); display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700; color: white; min-width: 30px;">
                ${a.awayWins}W
              </div>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 11px; color: var(--text-muted); margin-bottom: 12px;">
              <span>${t.homeTeam}</span>
              <span>Draws</span>
              <span>${t.awayTeam}</span>
            </div>

            <!-- Stats Grid -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 8px; margin-bottom: 12px;">
              <div style="text-align: center; padding: 8px; background: var(--bg-glass); border-radius: var(--radius-sm);">
                <div style="font-family: var(--font-heading); font-size: var(--fs-lg); font-weight: 800; color: var(--accent-blue);">${a.homeGoals||"?"}</div>
                <div style="font-size: 10px; color: var(--text-muted);">${t.homeTeam} Goals</div>
              </div>
              <div style="text-align: center; padding: 8px; background: var(--bg-glass); border-radius: var(--radius-sm);">
                <div style="font-family: var(--font-heading); font-size: var(--fs-lg); font-weight: 800; color: var(--accent-crimson);">${a.awayGoals||"?"}</div>
                <div style="font-size: 10px; color: var(--text-muted);">${t.awayTeam} Goals</div>
              </div>
              <div style="text-align: center; padding: 8px; background: var(--bg-glass); border-radius: var(--radius-sm);">
                <div style="font-family: var(--font-heading); font-size: var(--fs-lg); font-weight: 800; color: var(--accent-gold);">${a.totalMatches}</div>
                <div style="font-size: 10px; color: var(--text-muted);">Total Matches</div>
              </div>
            </div>

            ${a.topScorerInFixture?`
              <div style="font-size: 12px; color: var(--text-secondary); margin-bottom: 8px;">
                🏆 <strong>Top scorer in this fixture:</strong> ${a.topScorerInFixture}
              </div>
            `:""}

            ${a.lastMeeting?`
              <div style="font-size: 12px; color: var(--text-secondary); margin-bottom: 8px;">
                📋 <strong>Last meeting:</strong> ${a.lastMeeting}
              </div>
            `:""}

            <!-- Last 5 Results -->
            ${a.lastFiveResults&&a.lastFiveResults.length>0?`
              <div style="margin-top: 8px;">
                <div style="font-size: 11px; color: var(--text-muted); margin-bottom: 6px; font-weight: 600;">Last 5 results:</div>
                <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                  ${a.lastFiveResults.map(c=>`<span class="badge ${c.startsWith("H")?"badge-success":c.startsWith("A")?"badge-danger":"badge-warning"}" style="font-size: 10px; padding: 3px 8px;">${c}</span>`).join("")}
                </div>
              </div>
            `:""}
          </div>
        `:""}

        <!-- Action Buttons -->
        <div style="display: flex; gap: 8px; margin-top: 16px; flex-wrap: wrap;">
          <button class="btn btn-outline btn-sm" onclick="navigateTo('predictions')">🔮 Predict</button>
          <button class="btn btn-outline btn-sm" onclick="navigateTo('streaming')">📺 Watch Live</button>
        </div>
      </div>
    `}).join("")}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $r="185",Ad=0,So=1,Ld=2,La=1,Cd=2,Ni=3,Nn=0,Rt=1,yn=2,bn=0,pi=1,Zs=2,Eo=3,To=4,Rd=5,Wn=100,Pd=101,Fd=102,Id=103,Dd=104,Ud=200,Nd=201,Bd=202,Od=203,js=204,Qs=205,kd=206,zd=207,Hd=208,Gd=209,Vd=210,Wd=211,$d=212,Xd=213,Yd=214,er=0,tr=1,nr=2,_i=3,ir=4,ar=5,sr=6,rr=7,Xr=0,qd=1,Kd=2,rn=0,ql=1,Kl=2,Jl=3,Zl=4,jl=5,Ql=6,ec=7,tc=300,Kn=301,bi=302,es=303,ts=304,Wa=306,or=1e3,_n=1001,lr=1002,_t=1003,Jd=1004,ia=1005,St=1006,ns=1007,Yn=1008,Nt=1009,nc=1010,ic=1011,Gi=1012,Yr=1013,cn=1014,an=1015,Mn=1016,qr=1017,Kr=1018,Vi=1020,ac=35902,sc=35899,rc=1021,oc=1022,Kt=1023,Sn=1026,qn=1027,lc=1028,Jr=1029,Jn=1030,Zr=1031,jr=1033,Ca=33776,Ra=33777,Pa=33778,Fa=33779,cr=35840,dr=35841,ur=35842,hr=35843,fr=36196,pr=37492,mr=37496,gr=37488,vr=37489,Ua=37490,yr=37491,_r=37808,br=37809,xr=37810,Mr=37811,Sr=37812,Er=37813,Tr=37814,wr=37815,Ar=37816,Lr=37817,Cr=37818,Rr=37819,Pr=37820,Fr=37821,Ir=36492,Dr=36494,Ur=36495,Nr=36283,Br=36284,Na=36285,Or=36286,Zd=3200,kr=0,jd=1,Dn="",Gt="srgb",Ba="srgb-linear",Oa="linear",Ye="srgb",ei=7680,wo=519,Qd=512,eu=513,tu=514,Qr=515,nu=516,iu=517,eo=518,au=519,Ao=35044,Lo="300 es",sn=2e3,Wi=2001;function su(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ka(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ru(){const i=ka("canvas");return i.style.display="block",i}const Co={};function Ro(...i){const e="THREE."+i.shift();console.log(e,...i)}function cc(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ae(...i){i=cc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ge(...i){i=cc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function mi(...i){const e=i.join(" ");e in Co||(Co[e]=!0,Ae(...i))}function ou(i,e,t){return new Promise(function(n,a){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const lu={[er]:tr,[nr]:sr,[ir]:rr,[_i]:ar,[tr]:er,[sr]:nr,[rr]:ir,[ar]:_i};class Zn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const a=n[e];if(a!==void 0){const s=a.indexOf(t);s!==-1&&a.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const a=n.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],is=Math.PI/180,zr=180/Math.PI;function Ki(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xt[i&255]+xt[i>>8&255]+xt[i>>16&255]+xt[i>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[n&255]+xt[n>>8&255]+xt[n>>16&255]+xt[n>>24&255]).toLowerCase()}function ke(i,e,t){return Math.max(e,Math.min(t,i))}function cu(i,e){return(i%e+e)%e}function as(i,e,t){return(1-t)*i+t*e}function Ai(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}class Ne{static{Ne.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6],this.y=a[1]*t+a[4]*n+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),a=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*a+e.x,this.y=s*a+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Si{constructor(e=0,t=0,n=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=a}static slerpFlat(e,t,n,a,s,r,o){let l=n[a+0],c=n[a+1],f=n[a+2],g=n[a+3],d=s[r+0],m=s[r+1],y=s[r+2],x=s[r+3];if(g!==x||l!==d||c!==m||f!==y){let p=l*d+c*m+f*y+g*x;p<0&&(d=-d,m=-m,y=-y,x=-x,p=-p);let u=1-o;if(p<.9995){const E=Math.acos(p),w=Math.sin(E);u=Math.sin(u*E)/w,o=Math.sin(o*E)/w,l=l*u+d*o,c=c*u+m*o,f=f*u+y*o,g=g*u+x*o}else{l=l*u+d*o,c=c*u+m*o,f=f*u+y*o,g=g*u+x*o;const E=1/Math.sqrt(l*l+c*c+f*f+g*g);l*=E,c*=E,f*=E,g*=E}}e[t]=l,e[t+1]=c,e[t+2]=f,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,a,s,r){const o=n[a],l=n[a+1],c=n[a+2],f=n[a+3],g=s[r],d=s[r+1],m=s[r+2],y=s[r+3];return e[t]=o*y+f*g+l*m-c*d,e[t+1]=l*y+f*d+c*g-o*m,e[t+2]=c*y+f*m+o*d-l*g,e[t+3]=f*y-o*g-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,a){return this._x=e,this._y=t,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,a=e._y,s=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(n/2),f=o(a/2),g=o(s/2),d=l(n/2),m=l(a/2),y=l(s/2);switch(r){case"XYZ":this._x=d*f*g+c*m*y,this._y=c*m*g-d*f*y,this._z=c*f*y+d*m*g,this._w=c*f*g-d*m*y;break;case"YXZ":this._x=d*f*g+c*m*y,this._y=c*m*g-d*f*y,this._z=c*f*y-d*m*g,this._w=c*f*g+d*m*y;break;case"ZXY":this._x=d*f*g-c*m*y,this._y=c*m*g+d*f*y,this._z=c*f*y+d*m*g,this._w=c*f*g-d*m*y;break;case"ZYX":this._x=d*f*g-c*m*y,this._y=c*m*g+d*f*y,this._z=c*f*y-d*m*g,this._w=c*f*g+d*m*y;break;case"YZX":this._x=d*f*g+c*m*y,this._y=c*m*g+d*f*y,this._z=c*f*y-d*m*g,this._w=c*f*g-d*m*y;break;case"XZY":this._x=d*f*g-c*m*y,this._y=c*m*g-d*f*y,this._z=c*f*y+d*m*g,this._w=c*f*g+d*m*y;break;default:Ae("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,a=Math.sin(n);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],a=t[4],s=t[8],r=t[1],o=t[5],l=t[9],c=t[2],f=t[6],g=t[10],d=n+o+g;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(r-a)*m}else if(n>o&&n>g){const m=2*Math.sqrt(1+n-o-g);this._w=(f-l)/m,this._x=.25*m,this._y=(a+r)/m,this._z=(s+c)/m}else if(o>g){const m=2*Math.sqrt(1+o-n-g);this._w=(s-c)/m,this._x=(a+r)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+g-n-o);this._w=(r-a)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const a=Math.min(1,t/n);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,a=e._y,s=e._z,r=e._w,o=t._x,l=t._y,c=t._z,f=t._w;return this._x=n*f+r*o+a*c-s*l,this._y=a*f+r*l+s*o-n*c,this._z=s*f+r*c+n*l-a*o,this._w=r*f-n*o-a*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,a=e._y,s=e._z,r=e._w,o=this.dot(e);o<0&&(n=-n,a=-a,s=-s,r=-r,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,t=Math.sin(t*c)/f,this._x=this._x*l+n*t,this._y=this._y*l+a*t,this._z=this._z*l+s*t,this._w=this._w*l+r*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+a*t,this._z=this._z*l+s*t,this._w=this._w*l+r*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),a=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(a*Math.sin(e),a*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{static{U.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Po.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Po.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*a,this.y=s[1]*t+s[4]*n+s[7]*a,this.z=s[2]*t+s[5]*n+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*a+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*a+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*a+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*a+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,a=this.z,s=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*a-o*n),f=2*(o*t-s*a),g=2*(s*n-r*t);return this.x=t+l*c+r*g-o*f,this.y=n+l*f+o*c-s*g,this.z=a+l*g+s*f-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*a,this.y=s[1]*t+s[5]*n+s[9]*a,this.z=s[2]*t+s[6]*n+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,a=e.y,s=e.z,r=t.x,o=t.y,l=t.z;return this.x=a*l-s*o,this.y=s*r-n*l,this.z=n*o-a*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ss.copy(this).projectOnVector(e),this.sub(ss)}reflect(e){return this.sub(ss.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,a=this.z-e.z;return t*t+n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const a=Math.sin(t)*e;return this.x=a*Math.sin(n),this.y=Math.cos(t)*e,this.z=a*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ss=new U,Po=new Si;class Ce{static{Ce.prototype.isMatrix3=!0}constructor(e,t,n,a,s,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,a,s,r,o,l,c)}set(e,t,n,a,s,r,o,l,c){const f=this.elements;return f[0]=e,f[1]=a,f[2]=o,f[3]=t,f[4]=s,f[5]=l,f[6]=n,f[7]=r,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,s=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],f=n[4],g=n[7],d=n[2],m=n[5],y=n[8],x=a[0],p=a[3],u=a[6],E=a[1],w=a[4],b=a[7],A=a[2],S=a[5],L=a[8];return s[0]=r*x+o*E+l*A,s[3]=r*p+o*w+l*S,s[6]=r*u+o*b+l*L,s[1]=c*x+f*E+g*A,s[4]=c*p+f*w+g*S,s[7]=c*u+f*b+g*L,s[2]=d*x+m*E+y*A,s[5]=d*p+m*w+y*S,s[8]=d*u+m*b+y*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return t*r*f-t*o*c-n*s*f+n*o*l+a*s*c-a*r*l}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],f=e[8],g=f*r-o*c,d=o*l-f*s,m=c*s-r*l,y=t*g+n*d+a*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/y;return e[0]=g*x,e[1]=(a*c-f*n)*x,e[2]=(o*n-a*r)*x,e[3]=d*x,e[4]=(f*t-a*l)*x,e[5]=(a*s-o*t)*x,e[6]=m*x,e[7]=(n*l-c*t)*x,e[8]=(r*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,a,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*o)+r+e,-a*c,a*l,-a*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return mi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(rs.makeScale(e,t)),this}rotate(e){return mi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(rs.makeRotation(-e)),this}translate(e,t){return mi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(rs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<9;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const rs=new Ce,Fo=new Ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Io=new Ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function du(){const i={enabled:!0,workingColorSpace:Ba,spaces:{},convert:function(a,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===Ye&&(a.r=xn(a.r),a.g=xn(a.g),a.b=xn(a.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Ye&&(a.r=gi(a.r),a.g=gi(a.g),a.b=gi(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Dn?Oa:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,r){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return mi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return mi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(a,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ba]:{primaries:e,whitePoint:n,transfer:Oa,toXYZ:Fo,fromXYZ:Io,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:n,transfer:Ye,toXYZ:Fo,fromXYZ:Io,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),i}const Oe=du();function xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ti;class uu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ti===void 0&&(ti=ka("canvas")),ti.width=e.width,ti.height=e.height;const a=ti.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),n=ti}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ka("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const a=n.getImageData(0,0,e.width,e.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=xn(s[r]/255)*255;return n.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xn(t[n]/255)*255):t[n]=xn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hu=0;class to{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=Ki(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(os(a[r].image)):s.push(os(a[r]))}else s=os(a);n.url=s}return t||(e.images[this.uuid]=n),n}}function os(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?uu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ae("Texture: Unable to serialize Texture."),{})}let fu=0;const ls=new U;class Tt extends Zn{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,n=_n,a=_n,s=St,r=Yn,o=Kt,l=Nt,c=Tt.DEFAULT_ANISOTROPY,f=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=Ki(),this.name="",this.source=new to(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ls).x}get height(){return this.source.getSize(ls).y}get depth(){return this.source.getSize(ls).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ae(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Ae(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&n&&a.isVector2&&n.isVector2||a&&n&&a.isVector3&&n.isVector3||a&&n&&a.isMatrix3&&n.isMatrix3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case or:e.x=e.x-Math.floor(e.x);break;case _n:e.x=e.x<0?0:1;break;case lr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case or:e.y=e.y-Math.floor(e.y);break;case _n:e.y=e.y<0?0:1;break;case lr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=tc;Tt.DEFAULT_ANISOTROPY=1;class tt{static{tt.prototype.isVector4=!0}constructor(e=0,t=0,n=0,a=1){this.x=e,this.y=t,this.z=n,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,a){return this.x=e,this.y=t,this.z=n,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*a+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*a+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*a+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*a+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,a,s;const l=e.elements,c=l[0],f=l[4],g=l[8],d=l[1],m=l[5],y=l[9],x=l[2],p=l[6],u=l[10];if(Math.abs(f-d)<.01&&Math.abs(g-x)<.01&&Math.abs(y-p)<.01){if(Math.abs(f+d)<.1&&Math.abs(g+x)<.1&&Math.abs(y+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,b=(m+1)/2,A=(u+1)/2,S=(f+d)/4,L=(g+x)/4,v=(y+p)/4;return w>b&&w>A?w<.01?(n=0,a=.707106781,s=.707106781):(n=Math.sqrt(w),a=S/n,s=L/n):b>A?b<.01?(n=.707106781,a=0,s=.707106781):(a=Math.sqrt(b),n=S/a,s=v/a):A<.01?(n=.707106781,a=.707106781,s=0):(s=Math.sqrt(A),n=L/s,a=v/s),this.set(n,a,s,t),this}let E=Math.sqrt((p-y)*(p-y)+(g-x)*(g-x)+(d-f)*(d-f));return Math.abs(E)<.001&&(E=1),this.x=(p-y)/E,this.y=(g-x)/E,this.z=(d-f)/E,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pu extends Zn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:St,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:n.depth},s=new Tt(a),r=n.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:St,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=n,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new to(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class on extends pu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class dc extends Tt{constructor(e=null,t=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=_t,this.minFilter=_t,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mu extends Tt{constructor(e=null,t=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=_t,this.minFilter=_t,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class et{static{et.prototype.isMatrix4=!0}constructor(e,t,n,a,s,r,o,l,c,f,g,d,m,y,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,a,s,r,o,l,c,f,g,d,m,y,x,p)}set(e,t,n,a,s,r,o,l,c,f,g,d,m,y,x,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=a,u[1]=s,u[5]=r,u[9]=o,u[13]=l,u[2]=c,u[6]=f,u[10]=g,u[14]=d,u[3]=m,u[7]=y,u[11]=x,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,a=1/ni.setFromMatrixColumn(e,0).length(),s=1/ni.setFromMatrixColumn(e,1).length(),r=1/ni.setFromMatrixColumn(e,2).length();return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,a=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(a),c=Math.sin(a),f=Math.cos(s),g=Math.sin(s);if(e.order==="XYZ"){const d=r*f,m=r*g,y=o*f,x=o*g;t[0]=l*f,t[4]=-l*g,t[8]=c,t[1]=m+y*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=y+m*c,t[10]=r*l}else if(e.order==="YXZ"){const d=l*f,m=l*g,y=c*f,x=c*g;t[0]=d+x*o,t[4]=y*o-m,t[8]=r*c,t[1]=r*g,t[5]=r*f,t[9]=-o,t[2]=m*o-y,t[6]=x+d*o,t[10]=r*l}else if(e.order==="ZXY"){const d=l*f,m=l*g,y=c*f,x=c*g;t[0]=d-x*o,t[4]=-r*g,t[8]=y+m*o,t[1]=m+y*o,t[5]=r*f,t[9]=x-d*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const d=r*f,m=r*g,y=o*f,x=o*g;t[0]=l*f,t[4]=y*c-m,t[8]=d*c+x,t[1]=l*g,t[5]=x*c+d,t[9]=m*c-y,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const d=r*l,m=r*c,y=o*l,x=o*c;t[0]=l*f,t[4]=x-d*g,t[8]=y*g+m,t[1]=g,t[5]=r*f,t[9]=-o*f,t[2]=-c*f,t[6]=m*g+y,t[10]=d-x*g}else if(e.order==="XZY"){const d=r*l,m=r*c,y=o*l,x=o*c;t[0]=l*f,t[4]=-g,t[8]=c*f,t[1]=d*g+x,t[5]=r*f,t[9]=m*g-y,t[2]=y*g-m,t[6]=o*f,t[10]=x*g+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gu,e,vu)}lookAt(e,t,n){const a=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),Ln.crossVectors(n,Ft),Ln.lengthSq()===0&&(Math.abs(n.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),Ln.crossVectors(n,Ft)),Ln.normalize(),aa.crossVectors(Ft,Ln),a[0]=Ln.x,a[4]=aa.x,a[8]=Ft.x,a[1]=Ln.y,a[5]=aa.y,a[9]=Ft.y,a[2]=Ln.z,a[6]=aa.z,a[10]=Ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,s=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],f=n[1],g=n[5],d=n[9],m=n[13],y=n[2],x=n[6],p=n[10],u=n[14],E=n[3],w=n[7],b=n[11],A=n[15],S=a[0],L=a[4],v=a[8],T=a[12],C=a[1],R=a[5],N=a[9],X=a[13],q=a[2],z=a[6],$=a[10],G=a[14],Z=a[3],Q=a[7],de=a[11],pe=a[15];return s[0]=r*S+o*C+l*q+c*Z,s[4]=r*L+o*R+l*z+c*Q,s[8]=r*v+o*N+l*$+c*de,s[12]=r*T+o*X+l*G+c*pe,s[1]=f*S+g*C+d*q+m*Z,s[5]=f*L+g*R+d*z+m*Q,s[9]=f*v+g*N+d*$+m*de,s[13]=f*T+g*X+d*G+m*pe,s[2]=y*S+x*C+p*q+u*Z,s[6]=y*L+x*R+p*z+u*Q,s[10]=y*v+x*N+p*$+u*de,s[14]=y*T+x*X+p*G+u*pe,s[3]=E*S+w*C+b*q+A*Z,s[7]=E*L+w*R+b*z+A*Q,s[11]=E*v+w*N+b*$+A*de,s[15]=E*T+w*X+b*G+A*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],a=e[8],s=e[12],r=e[1],o=e[5],l=e[9],c=e[13],f=e[2],g=e[6],d=e[10],m=e[14],y=e[3],x=e[7],p=e[11],u=e[15],E=l*m-c*d,w=o*m-c*g,b=o*d-l*g,A=r*m-c*f,S=r*d-l*f,L=r*g-o*f;return t*(x*E-p*w+u*b)-n*(y*E-p*A+u*S)+a*(y*w-x*A+u*L)-s*(y*b-x*S+p*L)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],a=e[8],s=e[1],r=e[5],o=e[9],l=e[2],c=e[6],f=e[10];return t*(r*f-o*c)-n*(s*f-o*l)+a*(s*c-r*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],f=e[8],g=e[9],d=e[10],m=e[11],y=e[12],x=e[13],p=e[14],u=e[15],E=t*o-n*r,w=t*l-a*r,b=t*c-s*r,A=n*l-a*o,S=n*c-s*o,L=a*c-s*l,v=f*x-g*y,T=f*p-d*y,C=f*u-m*y,R=g*p-d*x,N=g*u-m*x,X=d*u-m*p,q=E*X-w*N+b*R+A*C-S*T+L*v;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/q;return e[0]=(o*X-l*N+c*R)*z,e[1]=(a*N-n*X-s*R)*z,e[2]=(x*L-p*S+u*A)*z,e[3]=(d*S-g*L-m*A)*z,e[4]=(l*C-r*X-c*T)*z,e[5]=(t*X-a*C+s*T)*z,e[6]=(p*b-y*L-u*w)*z,e[7]=(f*L-d*b+m*w)*z,e[8]=(r*N-o*C+c*v)*z,e[9]=(n*C-t*N-s*v)*z,e[10]=(y*S-x*b+u*E)*z,e[11]=(g*b-f*S-m*E)*z,e[12]=(o*T-r*R-l*v)*z,e[13]=(t*R-n*T+a*v)*z,e[14]=(x*w-y*A-p*E)*z,e[15]=(f*A-g*w+d*E)*z,this}scale(e){const t=this.elements,n=e.x,a=e.y,s=e.z;return t[0]*=n,t[4]*=a,t[8]*=s,t[1]*=n,t[5]*=a,t[9]*=s,t[2]*=n,t[6]*=a,t[10]*=s,t[3]*=n,t[7]*=a,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,a))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),a=Math.sin(t),s=1-n,r=e.x,o=e.y,l=e.z,c=s*r,f=s*o;return this.set(c*r+n,c*o-a*l,c*l+a*o,0,c*o+a*l,f*o+n,f*l-a*r,0,c*l-a*o,f*l+a*r,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,a,s,r){return this.set(1,n,s,0,e,1,r,0,t,a,1,0,0,0,0,1),this}compose(e,t,n){const a=this.elements,s=t._x,r=t._y,o=t._z,l=t._w,c=s+s,f=r+r,g=o+o,d=s*c,m=s*f,y=s*g,x=r*f,p=r*g,u=o*g,E=l*c,w=l*f,b=l*g,A=n.x,S=n.y,L=n.z;return a[0]=(1-(x+u))*A,a[1]=(m+b)*A,a[2]=(y-w)*A,a[3]=0,a[4]=(m-b)*S,a[5]=(1-(d+u))*S,a[6]=(p+E)*S,a[7]=0,a[8]=(y+w)*L,a[9]=(p-E)*L,a[10]=(1-(d+x))*L,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,n){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let r=ni.set(a[0],a[1],a[2]).length();const o=ni.set(a[4],a[5],a[6]).length(),l=ni.set(a[8],a[9],a[10]).length();s<0&&(r=-r),Wt.copy(this);const c=1/r,f=1/o,g=1/l;return Wt.elements[0]*=c,Wt.elements[1]*=c,Wt.elements[2]*=c,Wt.elements[4]*=f,Wt.elements[5]*=f,Wt.elements[6]*=f,Wt.elements[8]*=g,Wt.elements[9]*=g,Wt.elements[10]*=g,t.setFromRotationMatrix(Wt),n.x=r,n.y=o,n.z=l,this}makePerspective(e,t,n,a,s,r,o=sn,l=!1){const c=this.elements,f=2*s/(t-e),g=2*s/(n-a),d=(t+e)/(t-e),m=(n+a)/(n-a);let y,x;if(l)y=s/(r-s),x=r*s/(r-s);else if(o===sn)y=-(r+s)/(r-s),x=-2*r*s/(r-s);else if(o===Wi)y=-r/(r-s),x=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=g,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=y,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,a,s,r,o=sn,l=!1){const c=this.elements,f=2/(t-e),g=2/(n-a),d=-(t+e)/(t-e),m=-(n+a)/(n-a);let y,x;if(l)y=1/(r-s),x=r/(r-s);else if(o===sn)y=-2/(r-s),x=-(r+s)/(r-s);else if(o===Wi)y=-1/(r-s),x=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=g,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=y,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<16;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ni=new U,Wt=new et,gu=new U(0,0,0),vu=new U(1,1,1),Ln=new U,aa=new U,Ft=new U,Do=new et,Uo=new Si;class Bn{constructor(e=0,t=0,n=0,a=Bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,a=this._order){return this._x=e,this._y=t,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const a=e.elements,s=a[0],r=a[4],o=a[8],l=a[1],c=a[5],f=a[9],g=a[2],d=a[6],m=a[10];switch(t){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-g,s),this._z=0);break;case"ZXY":this._x=Math.asin(ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-g,m),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ke(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-g,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ke(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:Ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Do.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Do,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Uo.setFromEuler(this),this.setFromQuaternion(Uo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bn.DEFAULT_ORDER="XYZ";class uc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yu=0;const No=new U,ii=new Si,un=new et,sa=new U,Li=new U,_u=new U,bu=new Si,Bo=new U(1,0,0),Oo=new U(0,1,0),ko=new U(0,0,1),zo={type:"added"},xu={type:"removed"},ai={type:"childadded",child:null},cs={type:"childremoved",child:null};class wt extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new U,t=new Bn,n=new Si,a=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new et},normalMatrix:{value:new Ce}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ii.setFromAxisAngle(e,t),this.quaternion.multiply(ii),this}rotateOnWorldAxis(e,t){return ii.setFromAxisAngle(e,t),this.quaternion.premultiply(ii),this}rotateX(e){return this.rotateOnAxis(Bo,e)}rotateY(e){return this.rotateOnAxis(Oo,e)}rotateZ(e){return this.rotateOnAxis(ko,e)}translateOnAxis(e,t){return No.copy(e).applyQuaternion(this.quaternion),this.position.add(No.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bo,e)}translateY(e){return this.translateOnAxis(Oo,e)}translateZ(e){return this.translateOnAxis(ko,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?sa.copy(e):sa.set(e,t,n);const a=this.parent;this.updateWorldMatrix(!0,!1),Li.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(Li,sa,this.up):un.lookAt(sa,Li,this.up),this.quaternion.setFromRotationMatrix(un),a&&(un.extractRotation(a.matrixWorld),ii.setFromRotationMatrix(un),this.quaternion.premultiply(ii.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ge("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zo),ai.child=e,this.dispatchEvent(ai),ai.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xu),cs.child=e,this.dispatchEvent(cs),cs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),un.multiply(e.parent.matrixWorld)),e.applyMatrix4(un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zo),ai.child=e,this.dispatchEvent(ai),ai.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,a=this.children.length;n<a;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,e,_u),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,bu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,a=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*a,s[13]+=n-s[1]*t-s[5]*n-s[9]*a,s[14]+=a-s[2]*t-s[6]*n-s[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const g=l[c];s(e.shapes,g)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));a.material=o}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(s(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),f=r(e.images),g=r(e.shapes),d=r(e.skeletons),m=r(e.animations),y=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),g.length>0&&(n.shapes=g),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),y.length>0&&(n.nodes=y)}return n.object=a,n;function r(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const a=e.children[n];this.add(a.clone())}return this}}wt.DEFAULT_UP=new U(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Bi extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mu={type:"move"};class ds{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let a=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,n),u=this._getHandJoint(c,x);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const f=c.joints["index-finger-tip"],g=c.joints["thumb-tip"],d=f.position.distanceTo(g.position),m=.02,y=.005;c.inputState.pinching&&d>m+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(a=t.getPose(e.targetRaySpace,n),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mu)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Bi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const hc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},ra={h:0,s:0,l:0};function us(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ie{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Oe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,a=Oe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Oe.colorSpaceToWorking(this,a),this}setHSL(e,t,n,a=Oe.workingColorSpace){if(e=cu(e,1),t=ke(t,0,1),n=ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=us(r,s,e+1/3),this.g=us(r,s,e),this.b=us(r,s,e-1/3)}return Oe.colorSpaceToWorking(this,a),this}setStyle(e,t=Gt){function n(s){s!==void 0&&parseFloat(s)<1&&Ae("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ae("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);Ae("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){const n=hc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ae("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xn(e.r),this.g=xn(e.g),this.b=xn(e.b),this}copyLinearToSRGB(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return Oe.workingToColorSpace(Mt.copy(this),e),Math.round(ke(Mt.r*255,0,255))*65536+Math.round(ke(Mt.g*255,0,255))*256+Math.round(ke(Mt.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Oe.workingColorSpace){Oe.workingToColorSpace(Mt.copy(this),t);const n=Mt.r,a=Mt.g,s=Mt.b,r=Math.max(n,a,s),o=Math.min(n,a,s);let l,c;const f=(o+r)/2;if(o===r)l=0,c=0;else{const g=r-o;switch(c=f<=.5?g/(r+o):g/(2-r-o),r){case n:l=(a-s)/g+(a<s?6:0);break;case a:l=(s-n)/g+2;break;case s:l=(n-a)/g+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,t=Oe.workingColorSpace){return Oe.workingToColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=Gt){Oe.workingToColorSpace(Mt.copy(this),e);const t=Mt.r,n=Mt.g,a=Mt.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(e,t,n){return this.getHSL(Cn),this.setHSL(Cn.h+e,Cn.s+t,Cn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Cn),e.getHSL(ra);const n=as(Cn.h,ra.h,t),a=as(Cn.s,ra.s,t),s=as(Cn.l,ra.l,t);return this.setHSL(n,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,a=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*a,this.g=s[1]*t+s[4]*n+s[7]*a,this.b=s[2]*t+s[5]*n+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mt=new Ie;Ie.NAMES=hc;class no{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ie(e),this.density=t}clone(){return new no(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Su extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const $t=new U,hn=new U,hs=new U,fn=new U,si=new U,ri=new U,Ho=new U,fs=new U,ps=new U,ms=new U,gs=new tt,vs=new tt,ys=new tt;class qt{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,a){a.subVectors(n,t),$t.subVectors(e,t),a.cross($t);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,t,n,a,s){$t.subVectors(a,t),hn.subVectors(n,t),hs.subVectors(e,t);const r=$t.dot($t),o=$t.dot(hn),l=$t.dot(hs),c=hn.dot(hn),f=hn.dot(hs),g=r*c-o*o;if(g===0)return s.set(0,0,0),null;const d=1/g,m=(c*l-o*f)*d,y=(r*f-o*l)*d;return s.set(1-m-y,y,m)}static containsPoint(e,t,n,a){return this.getBarycoord(e,t,n,a,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(e,t,n,a,s,r,o,l){return this.getBarycoord(e,t,n,a,fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,fn.x),l.addScaledVector(r,fn.y),l.addScaledVector(o,fn.z),l)}static getInterpolatedAttribute(e,t,n,a,s,r){return gs.setScalar(0),vs.setScalar(0),ys.setScalar(0),gs.fromBufferAttribute(e,t),vs.fromBufferAttribute(e,n),ys.fromBufferAttribute(e,a),r.setScalar(0),r.addScaledVector(gs,s.x),r.addScaledVector(vs,s.y),r.addScaledVector(ys,s.z),r}static isFrontFacing(e,t,n,a){return $t.subVectors(n,t),hn.subVectors(e,t),$t.cross(hn).dot(a)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,a){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,n,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $t.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),$t.cross(hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,a,s){return qt.getInterpolation(e,this.a,this.b,this.c,t,n,a,s)}containsPoint(e){return qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,a=this.b,s=this.c;let r,o;si.subVectors(a,n),ri.subVectors(s,n),fs.subVectors(e,n);const l=si.dot(fs),c=ri.dot(fs);if(l<=0&&c<=0)return t.copy(n);ps.subVectors(e,a);const f=si.dot(ps),g=ri.dot(ps);if(f>=0&&g<=f)return t.copy(a);const d=l*g-f*c;if(d<=0&&l>=0&&f<=0)return r=l/(l-f),t.copy(n).addScaledVector(si,r);ms.subVectors(e,s);const m=si.dot(ms),y=ri.dot(ms);if(y>=0&&m<=y)return t.copy(s);const x=m*c-l*y;if(x<=0&&c>=0&&y<=0)return o=c/(c-y),t.copy(n).addScaledVector(ri,o);const p=f*y-m*g;if(p<=0&&g-f>=0&&m-y>=0)return Ho.subVectors(s,a),o=(g-f)/(g-f+(m-y)),t.copy(a).addScaledVector(Ho,o);const u=1/(p+x+d);return r=x*u,o=d*u,t.copy(n).addScaledVector(si,r).addScaledVector(ri,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ji{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Xt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,Xt):Xt.fromBufferAttribute(s,r),Xt.applyMatrix4(e.matrixWorld),this.expandByPoint(Xt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),oa.copy(n.boundingBox)),oa.applyMatrix4(e.matrixWorld),this.union(oa)}const a=e.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xt),Xt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ci),la.subVectors(this.max,Ci),oi.subVectors(e.a,Ci),li.subVectors(e.b,Ci),ci.subVectors(e.c,Ci),Rn.subVectors(li,oi),Pn.subVectors(ci,li),kn.subVectors(oi,ci);let t=[0,-Rn.z,Rn.y,0,-Pn.z,Pn.y,0,-kn.z,kn.y,Rn.z,0,-Rn.x,Pn.z,0,-Pn.x,kn.z,0,-kn.x,-Rn.y,Rn.x,0,-Pn.y,Pn.x,0,-kn.y,kn.x,0];return!_s(t,oi,li,ci,la)||(t=[1,0,0,0,1,0,0,0,1],!_s(t,oi,li,ci,la))?!1:(ca.crossVectors(Rn,Pn),t=[ca.x,ca.y,ca.z],_s(t,oi,li,ci,la))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const pn=[new U,new U,new U,new U,new U,new U,new U,new U],Xt=new U,oa=new Ji,oi=new U,li=new U,ci=new U,Rn=new U,Pn=new U,kn=new U,Ci=new U,la=new U,ca=new U,zn=new U;function _s(i,e,t,n,a){for(let s=0,r=i.length-3;s<=r;s+=3){zn.fromArray(i,s);const o=a.x*Math.abs(zn.x)+a.y*Math.abs(zn.y)+a.z*Math.abs(zn.z),l=e.dot(zn),c=t.dot(zn),f=n.dot(zn);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const ht=new U,da=new Ne;let Eu=0;class Ot extends Zn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Eu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ao,this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=t.array[n+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)da.fromBufferAttribute(this,t),da.applyMatrix3(e),this.setXY(t,da.x,da.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ai(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,a){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),a=Ct(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this}setXYZW(e,t,n,a,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),a=Ct(a,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ao&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class fc extends Ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class pc extends Ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class At extends Ot{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Tu=new Ji,Ri=new U,bs=new U;class $a{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Tu.setFromPoints(e).getCenter(n);let a=0;for(let s=0,r=e.length;s<r;s++)a=Math.max(a,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ri.subVectors(e,this.center);const t=Ri.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),a=(n-this.radius)*.5;this.center.addScaledVector(Ri,a/n),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ri.copy(e.center).add(bs)),this.expandByPoint(Ri.copy(e.center).sub(bs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let wu=0;const Ht=new et,xs=new wt,di=new U,It=new Ji,Pi=new Ji,vt=new U;class kt extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(su(e)?pc:fc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ce().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,n){return Ht.makeTranslation(e,t,n),this.applyMatrix4(Ht),this}scale(e,t,n){return Ht.makeScale(e,t,n),this.applyMatrix4(Ht),this}lookAt(e){return xs.lookAt(e),xs.updateMatrix(),this.applyMatrix4(xs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(di).negate(),this.translate(di.x,di.y,di.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let a=0,s=e.length;a<s;a++){const r=e[a];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new At(n,3))}else{const n=Math.min(e.length,t.count);for(let a=0;a<n;a++){const s=e[a];t.setXYZ(a,s.x,s.y,s.z||0)}e.length>t.count&&Ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const s=t[n];It.setFromBufferAttribute(s),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,It.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,It.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(It.min),this.boundingBox.expandByPoint(It.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $a);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(It.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const o=t[s];Pi.setFromBufferAttribute(o),this.morphTargetsRelative?(vt.addVectors(It.min,Pi.min),It.expandByPoint(vt),vt.addVectors(It.max,Pi.max),It.expandByPoint(vt)):(It.expandByPoint(Pi.min),It.expandByPoint(Pi.max))}It.getCenter(n);let a=0;for(let s=0,r=e.count;s<r;s++)vt.fromBufferAttribute(e,s),a=Math.max(a,n.distanceToSquared(vt));if(t)for(let s=0,r=t.length;s<r;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)vt.fromBufferAttribute(o,c),l&&(di.fromBufferAttribute(e,c),vt.add(di)),a=Math.max(a,n.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,a=t.normal,s=t.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new Ot(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));const o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new U,l[v]=new U;const c=new U,f=new U,g=new U,d=new Ne,m=new Ne,y=new Ne,x=new U,p=new U;function u(v,T,C){c.fromBufferAttribute(n,v),f.fromBufferAttribute(n,T),g.fromBufferAttribute(n,C),d.fromBufferAttribute(s,v),m.fromBufferAttribute(s,T),y.fromBufferAttribute(s,C),f.sub(c),g.sub(c),m.sub(d),y.sub(d);const R=1/(m.x*y.y-y.x*m.y);isFinite(R)&&(x.copy(f).multiplyScalar(y.y).addScaledVector(g,-m.y).multiplyScalar(R),p.copy(g).multiplyScalar(m.x).addScaledVector(f,-y.x).multiplyScalar(R),o[v].add(x),o[T].add(x),o[C].add(x),l[v].add(p),l[T].add(p),l[C].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let v=0,T=E.length;v<T;++v){const C=E[v],R=C.start,N=C.count;for(let X=R,q=R+N;X<q;X+=3)u(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const w=new U,b=new U,A=new U,S=new U;function L(v){A.fromBufferAttribute(a,v),S.copy(A);const T=o[v];w.copy(T),w.sub(A.multiplyScalar(A.dot(T))).normalize(),b.crossVectors(S,T);const R=b.dot(l[v])<0?-1:1;r.setXYZW(v,w.x,w.y,w.z,R)}for(let v=0,T=E.length;v<T;++v){const C=E[v],R=C.start,N=C.count;for(let X=R,q=R+N;X<q;X+=3)L(e.getX(X+0)),L(e.getX(X+1)),L(e.getX(X+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const a=new U,s=new U,r=new U,o=new U,l=new U,c=new U,f=new U,g=new U;if(e)for(let d=0,m=e.count;d<m;d+=3){const y=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);a.fromBufferAttribute(t,y),s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,p),f.subVectors(r,s),g.subVectors(a,s),f.cross(g),o.fromBufferAttribute(n,y),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),o.add(f),l.add(f),c.add(f),n.setXYZ(y,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)a.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),f.subVectors(r,s),g.subVectors(a,s),f.cross(g),n.setXYZ(d+0,f.x,f.y,f.z),n.setXYZ(d+1,f.x,f.y,f.z),n.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,g=o.normalized,d=new c.constructor(l.length*f);let m=0,y=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*f;for(let u=0;u<f;u++)d[y++]=c[m++]}return new Ot(d,f,g)}if(this.index===null)return Ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kt,n=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,g=c.length;f<g;f++){const d=c[f],m=e(d,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let g=0,d=c.length;g<d;g++){const m=c[g];f.push(m.toJSON(e.data))}f.length>0&&(a[l]=f,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const a=e.attributes;for(const c in a){const f=a[c];this.setAttribute(c,f.clone(t))}const s=e.morphAttributes;for(const c in s){const f=[],g=s[c];for(let d=0,m=g.length;d<m;d++)f.push(g[d].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,f=r.length;c<f;c++){const g=r[c];this.addGroup(g.start,g.count,g.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Au=0;class Ei extends Zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=pi,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=js,this.blendDst=Qs,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=_i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ei,this.stencilZFail=ei,this.stencilZPass=ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ae(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Ae(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector2&&n&&n.isVector2||a&&a.isEuler&&n&&n.isEuler||a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pi&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==js&&(n.blendSrc=this.blendSrc),this.blendDst!==Qs&&(n.blendDst=this.blendDst),this.blendEquation!==Wn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_i&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ei&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ei&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ei&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(t){const s=a(e.textures),r=a(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ie().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ne().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ne().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const a=t.length;n=new Array(a);for(let s=0;s!==a;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const mn=new U,Ms=new U,ua=new U,Fn=new U,Ss=new U,ha=new U,Es=new U;class mc{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mn.copy(this.origin).addScaledVector(this.direction,t),mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,a){Ms.copy(e).add(t).multiplyScalar(.5),ua.copy(t).sub(e).normalize(),Fn.copy(this.origin).sub(Ms);const s=e.distanceTo(t)*.5,r=-this.direction.dot(ua),o=Fn.dot(this.direction),l=-Fn.dot(ua),c=Fn.lengthSq(),f=Math.abs(1-r*r);let g,d,m,y;if(f>0)if(g=r*l-o,d=r*o-l,y=s*f,g>=0)if(d>=-y)if(d<=y){const x=1/f;g*=x,d*=x,m=g*(g+r*d+2*o)+d*(r*g+d+2*l)+c}else d=s,g=Math.max(0,-(r*d+o)),m=-g*g+d*(d+2*l)+c;else d=-s,g=Math.max(0,-(r*d+o)),m=-g*g+d*(d+2*l)+c;else d<=-y?(g=Math.max(0,-(-r*s+o)),d=g>0?-s:Math.min(Math.max(-s,-l),s),m=-g*g+d*(d+2*l)+c):d<=y?(g=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(g=Math.max(0,-(r*s+o)),d=g>0?s:Math.min(Math.max(-s,-l),s),m=-g*g+d*(d+2*l)+c);else d=r>0?-s:s,g=Math.max(0,-(r*d+o)),m=-g*g+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,g),a&&a.copy(Ms).addScaledVector(ua,d),m}intersectSphere(e,t){mn.subVectors(e.center,this.origin);const n=mn.dot(this.direction),a=mn.dot(mn)-n*n,s=e.radius*e.radius;if(a>s)return null;const r=Math.sqrt(s-a),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,a,s,r,o,l;const c=1/this.direction.x,f=1/this.direction.y,g=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,a=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,a=(e.min.x-d.x)*c),f>=0?(s=(e.min.y-d.y)*f,r=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,r=(e.min.y-d.y)*f),n>r||s>a||((s>n||isNaN(n))&&(n=s),(r<a||isNaN(a))&&(a=r),g>=0?(o=(e.min.z-d.z)*g,l=(e.max.z-d.z)*g):(o=(e.max.z-d.z)*g,l=(e.min.z-d.z)*g),n>l||o>a)||((o>n||n!==n)&&(n=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(n>=0?n:a,t)}intersectsBox(e){return this.intersectBox(e,mn)!==null}intersectTriangle(e,t,n,a,s){Ss.subVectors(t,e),ha.subVectors(n,e),Es.crossVectors(Ss,ha);let r=this.direction.dot(Es),o;if(r>0){if(a)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Fn.subVectors(this.origin,e);const l=o*this.direction.dot(ha.crossVectors(Fn,ha));if(l<0)return null;const c=o*this.direction.dot(Ss.cross(Fn));if(c<0||l+c>r)return null;const f=-o*Fn.dot(Es);return f<0?null:this.at(f/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zi extends Ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=Xr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Go=new et,Hn=new mc,fa=new $a,Vo=new U,pa=new U,ma=new U,ga=new U,Ts=new U,va=new U,Wo=new U,ya=new U;class Bt extends wt{constructor(e=new kt,t=new zi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,a=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(s&&o){va.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],g=s[l];f!==0&&(Ts.fromBufferAttribute(g,e),r?va.addScaledVector(Ts,f):va.addScaledVector(Ts.sub(t),f))}t.add(va)}return t}raycast(e,t){const n=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(s),Hn.copy(e.ray).recast(e.near),!(fa.containsPoint(Hn.origin)===!1&&(Hn.intersectSphere(fa,Vo)===null||Hn.origin.distanceToSquared(Vo)>(e.far-e.near)**2))&&(Go.copy(s).invert(),Hn.copy(e.ray).applyMatrix4(Go),!(n.boundingBox!==null&&Hn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Hn)))}_computeIntersections(e,t,n){let a;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,g=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(r))for(let y=0,x=d.length;y<x;y++){const p=d[y],u=r[p.materialIndex],E=Math.max(p.start,m.start),w=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let b=E,A=w;b<A;b+=3){const S=o.getX(b),L=o.getX(b+1),v=o.getX(b+2);a=_a(this,u,e,n,c,f,g,S,L,v),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const y=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=y,u=x;p<u;p+=3){const E=o.getX(p),w=o.getX(p+1),b=o.getX(p+2);a=_a(this,r,e,n,c,f,g,E,w,b),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let y=0,x=d.length;y<x;y++){const p=d[y],u=r[p.materialIndex],E=Math.max(p.start,m.start),w=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let b=E,A=w;b<A;b+=3){const S=b,L=b+1,v=b+2;a=_a(this,u,e,n,c,f,g,S,L,v),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const y=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=y,u=x;p<u;p+=3){const E=p,w=p+1,b=p+2;a=_a(this,r,e,n,c,f,g,E,w,b),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}}}function Lu(i,e,t,n,a,s,r,o){let l;if(e.side===Rt?l=n.intersectTriangle(r,s,a,!0,o):l=n.intersectTriangle(a,s,r,e.side===Nn,o),l===null)return null;ya.copy(o),ya.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ya);return c<t.near||c>t.far?null:{distance:c,point:ya.clone(),object:i}}function _a(i,e,t,n,a,s,r,o,l,c){i.getVertexPosition(o,pa),i.getVertexPosition(l,ma),i.getVertexPosition(c,ga);const f=Lu(i,e,t,n,pa,ma,ga,Wo);if(f){const g=new U;qt.getBarycoord(Wo,pa,ma,ga,g),a&&(f.uv=qt.getInterpolatedAttribute(a,o,l,c,g,new Ne)),s&&(f.uv1=qt.getInterpolatedAttribute(s,o,l,c,g,new Ne)),r&&(f.normal=qt.getInterpolatedAttribute(r,o,l,c,g,new U),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new U,materialIndex:0};qt.getNormal(pa,ma,ga,d.normal),f.face=d,f.barycoord=g}return f}class Cu extends Tt{constructor(e=null,t=1,n=1,a,s,r,o,l,c=_t,f=_t,g,d){super(null,r,o,l,c,f,a,s,g,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ws=new U,Ru=new U,Pu=new Ce;class Vn{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,a){return this.normal.set(e,t,n),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const a=ws.subVectors(n,t).cross(Ru.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const a=e.delta(ws),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(a,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Pu.getNormalMatrix(e),a=this.coplanarPoint(ws).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gn=new $a,Fu=new Ne(.5,.5),ba=new U;class io{constructor(e=new Vn,t=new Vn,n=new Vn,a=new Vn,s=new Vn,r=new Vn){this.planes=[e,t,n,a,s,r]}set(e,t,n,a,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=sn,n=!1){const a=this.planes,s=e.elements,r=s[0],o=s[1],l=s[2],c=s[3],f=s[4],g=s[5],d=s[6],m=s[7],y=s[8],x=s[9],p=s[10],u=s[11],E=s[12],w=s[13],b=s[14],A=s[15];if(a[0].setComponents(c-r,m-f,u-y,A-E).normalize(),a[1].setComponents(c+r,m+f,u+y,A+E).normalize(),a[2].setComponents(c+o,m+g,u+x,A+w).normalize(),a[3].setComponents(c-o,m-g,u-x,A-w).normalize(),n)a[4].setComponents(l,d,p,b).normalize(),a[5].setComponents(c-l,m-d,u-p,A-b).normalize();else if(a[4].setComponents(c-l,m-d,u-p,A-b).normalize(),t===sn)a[5].setComponents(c+l,m+d,u+p,A+b).normalize();else if(t===Wi)a[5].setComponents(l,d,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gn)}intersectsSprite(e){Gn.center.set(0,0,0);const t=Fu.distanceTo(e.center);return Gn.radius=.7071067811865476+t,Gn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(e){const t=this.planes,n=e.center,a=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const a=t[n];if(ba.x=a.normal.x>0?e.max.x:e.min.x,ba.y=a.normal.y>0?e.max.y:e.min.y,ba.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(ba)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gc extends Ei{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const $o=new et,Hr=new mc,xa=new $a,Ma=new U;class Iu extends wt{constructor(e=new kt,t=new gc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,a=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(a),xa.radius+=s,e.ray.intersectsSphere(xa)===!1)return;$o.copy(a).invert(),Hr.copy(e.ray).applyMatrix4($o);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,g=n.attributes.position;if(c!==null){const d=Math.max(0,r.start),m=Math.min(c.count,r.start+r.count);for(let y=d,x=m;y<x;y++){const p=c.getX(y);Ma.fromBufferAttribute(g,p),Xo(Ma,p,l,a,e,t,this)}}else{const d=Math.max(0,r.start),m=Math.min(g.count,r.start+r.count);for(let y=d,x=m;y<x;y++)Ma.fromBufferAttribute(g,y),Xo(Ma,y,l,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Xo(i,e,t,n,a,s,r){const o=Hr.distanceSqToPoint(i);if(o<t){const l=new U;Hr.closestPointToPoint(i,l),l.applyMatrix4(n);const c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class vc extends Tt{constructor(e=[],t=Kn,n,a,s,r,o,l,c,f){super(e,t,n,a,s,r,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xi extends Tt{constructor(e,t,n=cn,a,s,r,o=_t,l=_t,c,f=Sn,g=1){if(f!==Sn&&f!==qn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:g};super(d,a,s,r,o,l,f,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new to(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Du extends xi{constructor(e,t=cn,n=Kn,a,s,r=_t,o=_t,l,c=Sn){const f={width:e,height:e,depth:1},g=[f,f,f,f,f,f];super(e,e,t,n,a,s,r,o,l,c),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class yc extends Tt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Zi extends kt{constructor(e=1,t=1,n=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:a,heightSegments:s,depthSegments:r};const o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],f=[],g=[];let d=0,m=0;y("z","y","x",-1,-1,n,t,e,r,s,0),y("z","y","x",1,-1,n,t,-e,r,s,1),y("x","z","y",1,1,e,n,t,a,r,2),y("x","z","y",1,-1,e,n,-t,a,r,3),y("x","y","z",1,-1,e,t,n,a,s,4),y("x","y","z",-1,-1,e,t,-n,a,s,5),this.setIndex(l),this.setAttribute("position",new At(c,3)),this.setAttribute("normal",new At(f,3)),this.setAttribute("uv",new At(g,2));function y(x,p,u,E,w,b,A,S,L,v,T){const C=b/L,R=A/v,N=b/2,X=A/2,q=S/2,z=L+1,$=v+1;let G=0,Z=0;const Q=new U;for(let de=0;de<$;de++){const pe=de*R-X;for(let ve=0;ve<z;ve++){const Ve=ve*C-N;Q[x]=Ve*E,Q[p]=pe*w,Q[u]=q,c.push(Q.x,Q.y,Q.z),Q[x]=0,Q[p]=0,Q[u]=S>0?1:-1,f.push(Q.x,Q.y,Q.z),g.push(ve/L),g.push(1-de/v),G+=1}}for(let de=0;de<v;de++)for(let pe=0;pe<L;pe++){const ve=d+pe+z*de,Ve=d+pe+z*(de+1),nt=d+(pe+1)+z*(de+1),We=d+(pe+1)+z*de;l.push(ve,Ve,We),l.push(Ve,nt,We),Z+=6}o.addGroup(m,Z,T),m+=Z,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ao extends kt{constructor(e=[],t=[],n=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:a};const s=[],r=[];o(a),c(n),f(),this.setAttribute("position",new At(s,3)),this.setAttribute("normal",new At(s.slice(),3)),this.setAttribute("uv",new At(r,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(E){const w=new U,b=new U,A=new U;for(let S=0;S<t.length;S+=3)m(t[S+0],w),m(t[S+1],b),m(t[S+2],A),l(w,b,A,E)}function l(E,w,b,A){const S=A+1,L=[];for(let v=0;v<=S;v++){L[v]=[];const T=E.clone().lerp(b,v/S),C=w.clone().lerp(b,v/S),R=S-v;for(let N=0;N<=R;N++)N===0&&v===S?L[v][N]=T:L[v][N]=T.clone().lerp(C,N/R)}for(let v=0;v<S;v++)for(let T=0;T<2*(S-v)-1;T++){const C=Math.floor(T/2);T%2===0?(d(L[v][C+1]),d(L[v+1][C]),d(L[v][C])):(d(L[v][C+1]),d(L[v+1][C+1]),d(L[v+1][C]))}}function c(E){const w=new U;for(let b=0;b<s.length;b+=3)w.x=s[b+0],w.y=s[b+1],w.z=s[b+2],w.normalize().multiplyScalar(E),s[b+0]=w.x,s[b+1]=w.y,s[b+2]=w.z}function f(){const E=new U;for(let w=0;w<s.length;w+=3){E.x=s[w+0],E.y=s[w+1],E.z=s[w+2];const b=p(E)/2/Math.PI+.5,A=u(E)/Math.PI+.5;r.push(b,1-A)}y(),g()}function g(){for(let E=0;E<r.length;E+=6){const w=r[E+0],b=r[E+2],A=r[E+4],S=Math.max(w,b,A),L=Math.min(w,b,A);S>.9&&L<.1&&(w<.2&&(r[E+0]+=1),b<.2&&(r[E+2]+=1),A<.2&&(r[E+4]+=1))}}function d(E){s.push(E.x,E.y,E.z)}function m(E,w){const b=E*3;w.x=e[b+0],w.y=e[b+1],w.z=e[b+2]}function y(){const E=new U,w=new U,b=new U,A=new U,S=new Ne,L=new Ne,v=new Ne;for(let T=0,C=0;T<s.length;T+=9,C+=6){E.set(s[T+0],s[T+1],s[T+2]),w.set(s[T+3],s[T+4],s[T+5]),b.set(s[T+6],s[T+7],s[T+8]),S.set(r[C+0],r[C+1]),L.set(r[C+2],r[C+3]),v.set(r[C+4],r[C+5]),A.copy(E).add(w).add(b).divideScalar(3);const R=p(A);x(S,C+0,E,R),x(L,C+2,w,R),x(v,C+4,b,R)}}function x(E,w,b,A){A<0&&E.x===1&&(r[w]=E.x-1),b.x===0&&b.z===0&&(r[w]=A/2/Math.PI+.5)}function p(E){return Math.atan2(E.z,-E.x)}function u(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ao(e.vertices,e.indices,e.radius,e.detail)}}class so extends ao{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,a=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new so(e.radius,e.detail)}}class Xa extends kt{constructor(e=1,t=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:a};const s=e/2,r=t/2,o=Math.floor(n),l=Math.floor(a),c=o+1,f=l+1,g=e/o,d=t/l,m=[],y=[],x=[],p=[];for(let u=0;u<f;u++){const E=u*d-r;for(let w=0;w<c;w++){const b=w*g-s;y.push(b,-E,0),x.push(0,0,1),p.push(w/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let E=0;E<o;E++){const w=E+c*u,b=E+c*(u+1),A=E+1+c*(u+1),S=E+1+c*u;m.push(w,b,S),m.push(b,A,S)}this.setIndex(m),this.setAttribute("position",new At(y,3)),this.setAttribute("normal",new At(x,3)),this.setAttribute("uv",new At(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xa(e.width,e.height,e.widthSegments,e.heightSegments)}}class za extends kt{constructor(e=1,t=.4,n=12,a=48,s=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:a,arc:s,thetaStart:r,thetaLength:o},n=Math.floor(n),a=Math.floor(a);const l=[],c=[],f=[],g=[],d=new U,m=new U,y=new U;for(let x=0;x<=n;x++){const p=r+x/n*o;for(let u=0;u<=a;u++){const E=u/a*s;m.x=(e+t*Math.cos(p))*Math.cos(E),m.y=(e+t*Math.cos(p))*Math.sin(E),m.z=t*Math.sin(p),c.push(m.x,m.y,m.z),d.x=e*Math.cos(E),d.y=e*Math.sin(E),y.subVectors(m,d).normalize(),f.push(y.x,y.y,y.z),g.push(u/a),g.push(x/n)}}for(let x=1;x<=n;x++)for(let p=1;p<=a;p++){const u=(a+1)*x+p-1,E=(a+1)*(x-1)+p-1,w=(a+1)*(x-1)+p,b=(a+1)*x+p;l.push(u,E,b),l.push(E,w,b)}this.setIndex(l),this.setAttribute("position",new At(c,3)),this.setAttribute("normal",new At(f,3)),this.setAttribute("uv",new At(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new za(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Mi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const a=i[t][n];if(Yo(a))a.isRenderTargetTexture?(Ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=a.clone();else if(Array.isArray(a))if(Yo(a[0])){const s=[];for(let r=0,o=a.length;r<o;r++)s[r]=a[r].clone();e[t][n]=s}else e[t][n]=a.slice();else e[t][n]=a}}return e}function Et(i){const e={};for(let t=0;t<i.length;t++){const n=Mi(i[t]);for(const a in n)e[a]=n[a]}return e}function Yo(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Uu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function _c(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Oe.workingColorSpace}const Nu={clone:Mi,merge:Et};var Bu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ou=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dn extends Ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bu,this.fragmentShader=Ou,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mi(e.uniforms),this.uniformsGroups=Uu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?t.uniforms[a]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[a]={type:"m4",value:r.toArray()}:t.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const a=e.uniforms[n];switch(this.uniforms[n]={},a.type){case"t":this.uniforms[n].value=t[a.value]||null;break;case"c":this.uniforms[n].value=new Ie().setHex(a.value);break;case"v2":this.uniforms[n].value=new Ne().fromArray(a.value);break;case"v3":this.uniforms[n].value=new U().fromArray(a.value);break;case"v4":this.uniforms[n].value=new tt().fromArray(a.value);break;case"m3":this.uniforms[n].value=new Ce().fromArray(a.value);break;case"m4":this.uniforms[n].value=new et().fromArray(a.value);break;default:this.uniforms[n].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class ku extends dn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class zu extends Ei{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ie(16777215),this.specular=new Ie(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kr,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=Xr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Hu extends Ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gu extends Ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class bc extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const As=new et,qo=new U,Ko=new U;class Vu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.mapType=Nt,this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new io,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;qo.setFromMatrixPosition(e.matrixWorld),t.position.copy(qo),Ko.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ko),t.updateMatrixWorld(),As.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(As,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Wi||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(As)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Sa=new U,Ea=new Si,en=new U;class xc extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Sa,Ea,en),en.x===1&&en.y===1&&en.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sa,Ea,en.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Sa,Ea,en),en.x===1&&en.y===1&&en.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sa,Ea,en.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const In=new U,Jo=new Ne,Zo=new Ne;class Ut extends xc{constructor(e=50,t=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(is*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zr*2*Math.atan(Math.tan(is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){In.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(In.x,In.y).multiplyScalar(-e/In.z),In.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(In.x,In.y).multiplyScalar(-e/In.z)}getViewSize(e,t){return this.getViewBounds(e,Jo,Zo),t.subVectors(Zo,Jo)}setViewOffset(e,t,n,a,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(is*.5*this.fov)/this.zoom,n=2*t,a=this.aspect*n,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*a/l,t-=r.offsetY*n/c,a*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Wu extends Vu{constructor(){super(new Ut(90,1,.5,500)),this.isPointLightShadow=!0}}class Ls extends bc{constructor(e,t,n=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=a,this.shadow=new Wu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Mc extends xc{constructor(e=-1,t=1,n=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=n-e,r=n+e,o=a+t,l=a-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class $u extends bc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ui=-90,hi=1;class Xu extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Ut(ui,hi,e,t);a.layers=this.layers,this.add(a);const s=new Ut(ui,hi,e,t);s.layers=this.layers,this.add(s);const r=new Ut(ui,hi,e,t);r.layers=this.layers,this.add(r);const o=new Ut(ui,hi,e,t);o.layers=this.layers,this.add(o);const l=new Ut(ui,hi,e,t);l.layers=this.layers,this.add(l);const c=new Ut(ui,hi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,a,s,r,o,l]=t;for(const c of t)this.remove(c);if(e===sn)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wi)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,c,f]=this.children,g=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,2,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,a),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(g,d,m),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}}class Yu extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Sc{static{Sc.prototype.isMatrix2=!0}constructor(e,t,n,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,a){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=a,this}}function jo(i,e,t,n){const a=qu(n);switch(t){case rc:return i*e;case lc:return i*e/a.components*a.byteLength;case Jr:return i*e/a.components*a.byteLength;case Jn:return i*e*2/a.components*a.byteLength;case Zr:return i*e*2/a.components*a.byteLength;case oc:return i*e*3/a.components*a.byteLength;case Kt:return i*e*4/a.components*a.byteLength;case jr:return i*e*4/a.components*a.byteLength;case Ca:case Ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Pa:case Fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case dr:case hr:return Math.max(i,16)*Math.max(e,8)/4;case cr:case ur:return Math.max(i,8)*Math.max(e,8)/2;case fr:case pr:case gr:case vr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case mr:case Ua:case yr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _r:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case br:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case xr:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Mr:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Sr:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Er:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Tr:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case wr:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ar:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Lr:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Cr:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Rr:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Pr:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Fr:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ir:case Dr:case Ur:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Nr:case Br:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Na:case Or:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function qu(i){switch(i){case Nt:case nc:return{byteLength:1,components:1};case Gi:case ic:case Mn:return{byteLength:2,components:1};case qr:case Kr:return{byteLength:2,components:4};case cn:case Yr:case an:return{byteLength:4,components:1};case ac:case sc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$r}}));typeof window<"u"&&(window.__THREE__?Ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$r);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ec(){let i=null,e=!1,t=null,n=null;function a(s,r){t(s,r),n=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(a),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Ku(i){const e=new WeakMap;function t(o,l){const c=o.array,f=o.usage,g=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,f),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:g}}function n(o,l,c){const f=l.array,g=l.updateRanges;if(i.bindBuffer(c,o),g.length===0)i.bufferSubData(c,0,f);else{g.sort((m,y)=>m.start-y.start);let d=0;for(let m=1;m<g.length;m++){const y=g[d],x=g[m];x.start<=y.start+y.count+1?y.count=Math.max(y.count,x.start+x.count-y.start):(++d,g[d]=x)}g.length=d+1;for(let m=0,y=g.length;m<y;m++){const x=g[m];i.bufferSubData(c,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:a,remove:s,update:r}}var Ju=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ju=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,th=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ih=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ah=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,sh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ch=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,uh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ph=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,vh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,yh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,_h=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Mh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Eh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Th=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ah=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ch=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Rh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ph=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ih=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Oh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Gh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Vh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$h=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qh=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Kh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zh=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jh=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Qh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ef=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,af=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,of=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,df=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ff=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_f=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,bf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ef=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Af=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ff=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,If=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Df=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Uf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Nf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Of=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,kf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Hf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$f=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Jf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ep=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,np=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ip=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ap=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,up=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_p=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Mp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ep=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ap=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,De={alphahash_fragment:Ju,alphahash_pars_fragment:Zu,alphamap_fragment:ju,alphamap_pars_fragment:Qu,alphatest_fragment:eh,alphatest_pars_fragment:th,aomap_fragment:nh,aomap_pars_fragment:ih,batching_pars_vertex:ah,batching_vertex:sh,begin_vertex:rh,beginnormal_vertex:oh,bsdfs:lh,iridescence_fragment:ch,bumpmap_pars_fragment:dh,clipping_planes_fragment:uh,clipping_planes_pars_fragment:hh,clipping_planes_pars_vertex:fh,clipping_planes_vertex:ph,color_fragment:mh,color_pars_fragment:gh,color_pars_vertex:vh,color_vertex:yh,common:_h,cube_uv_reflection_fragment:bh,defaultnormal_vertex:xh,displacementmap_pars_vertex:Mh,displacementmap_vertex:Sh,emissivemap_fragment:Eh,emissivemap_pars_fragment:Th,colorspace_fragment:wh,colorspace_pars_fragment:Ah,envmap_fragment:Lh,envmap_common_pars_fragment:Ch,envmap_pars_fragment:Rh,envmap_pars_vertex:Ph,envmap_physical_pars_fragment:Gh,envmap_vertex:Fh,fog_vertex:Ih,fog_pars_vertex:Dh,fog_fragment:Uh,fog_pars_fragment:Nh,gradientmap_pars_fragment:Bh,lightmap_pars_fragment:Oh,lights_lambert_fragment:kh,lights_lambert_pars_fragment:zh,lights_pars_begin:Hh,lights_toon_fragment:Vh,lights_toon_pars_fragment:Wh,lights_phong_fragment:$h,lights_phong_pars_fragment:Xh,lights_physical_fragment:Yh,lights_physical_pars_fragment:qh,lights_fragment_begin:Kh,lights_fragment_maps:Jh,lights_fragment_end:Zh,lightprobes_pars_fragment:jh,logdepthbuf_fragment:Qh,logdepthbuf_pars_fragment:ef,logdepthbuf_pars_vertex:tf,logdepthbuf_vertex:nf,map_fragment:af,map_pars_fragment:sf,map_particle_fragment:rf,map_particle_pars_fragment:of,metalnessmap_fragment:lf,metalnessmap_pars_fragment:cf,morphinstance_vertex:df,morphcolor_vertex:uf,morphnormal_vertex:hf,morphtarget_pars_vertex:ff,morphtarget_vertex:pf,normal_fragment_begin:mf,normal_fragment_maps:gf,normal_pars_fragment:vf,normal_pars_vertex:yf,normal_vertex:_f,normalmap_pars_fragment:bf,clearcoat_normal_fragment_begin:xf,clearcoat_normal_fragment_maps:Mf,clearcoat_pars_fragment:Sf,iridescence_pars_fragment:Ef,opaque_fragment:Tf,packing:wf,premultiplied_alpha_fragment:Af,project_vertex:Lf,dithering_fragment:Cf,dithering_pars_fragment:Rf,roughnessmap_fragment:Pf,roughnessmap_pars_fragment:Ff,shadowmap_pars_fragment:If,shadowmap_pars_vertex:Df,shadowmap_vertex:Uf,shadowmask_pars_fragment:Nf,skinbase_vertex:Bf,skinning_pars_vertex:Of,skinning_vertex:kf,skinnormal_vertex:zf,specularmap_fragment:Hf,specularmap_pars_fragment:Gf,tonemapping_fragment:Vf,tonemapping_pars_fragment:Wf,transmission_fragment:$f,transmission_pars_fragment:Xf,uv_pars_fragment:Yf,uv_pars_vertex:qf,uv_vertex:Kf,worldpos_vertex:Jf,background_vert:Zf,background_frag:jf,backgroundCube_vert:Qf,backgroundCube_frag:ep,cube_vert:tp,cube_frag:np,depth_vert:ip,depth_frag:ap,distance_vert:sp,distance_frag:rp,equirect_vert:op,equirect_frag:lp,linedashed_vert:cp,linedashed_frag:dp,meshbasic_vert:up,meshbasic_frag:hp,meshlambert_vert:fp,meshlambert_frag:pp,meshmatcap_vert:mp,meshmatcap_frag:gp,meshnormal_vert:vp,meshnormal_frag:yp,meshphong_vert:_p,meshphong_frag:bp,meshphysical_vert:xp,meshphysical_frag:Mp,meshtoon_vert:Sp,meshtoon_frag:Ep,points_vert:Tp,points_frag:wp,shadow_vert:Ap,shadow_frag:Lp,sprite_vert:Cp,sprite_frag:Rp},ce={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ce}},envmap:{envMap:{value:null},envMapRotation:{value:new Ce},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ce},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0},uvTransform:{value:new Ce}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}}},nn={basic:{uniforms:Et([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:Et([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ie(0)},envMapIntensity:{value:1}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:Et([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:Et([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:Et([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ie(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:Et([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:Et([ce.points,ce.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:Et([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:Et([ce.common,ce.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:Et([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:Et([ce.sprite,ce.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ce}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distance:{uniforms:Et([ce.common,ce.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distance_vert,fragmentShader:De.distance_frag},shadow:{uniforms:Et([ce.lights,ce.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};nn.physical={uniforms:Et([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ce},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ce},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ce},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ce},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ce},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ce}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const Ta={r:0,b:0,g:0},Pp=new et,Tc=new Ce;Tc.set(-1,0,0,0,1,0,0,0,1);function Fp(i,e,t,n,a,s){const r=new Ie(0);let o=a===!0?0:1,l,c,f=null,g=0,d=null;function m(E){let w=E.isScene===!0?E.background:null;if(w&&w.isTexture){const b=E.backgroundBlurriness>0;w=e.get(w,b)}return w}function y(E){let w=!1;const b=m(E);b===null?p(r,o):b&&b.isColor&&(p(b,1),w=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(E,w){const b=m(w);b&&(b.isCubeTexture||b.mapping===Wa)?(c===void 0&&(c=new Bt(new Zi(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:Mi(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,S,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Pp.makeRotationFromEuler(w.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Tc),c.material.toneMapped=Oe.getTransfer(b.colorSpace)!==Ye,(f!==b||g!==b.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=b,g=b.version,d=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Bt(new Xa(2,2),new dn({name:"BackgroundMaterial",uniforms:Mi(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Oe.getTransfer(b.colorSpace)!==Ye,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||g!==b.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,f=b,g=b.version,d=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function p(E,w){E.getRGB(Ta,_c(i)),t.buffers.color.setClear(Ta.r,Ta.g,Ta.b,w,s)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(E,w=1){r.set(E),o=w,p(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,p(r,o)},render:y,addToRenderList:x,dispose:u}}function Ip(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},a=d(null);let s=a,r=!1;function o(R,N,X,q,z){let $=!1;const G=g(R,q,X,N);s!==G&&(s=G,c(s.object)),$=m(R,q,X,z),$&&y(R,q,X,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),($||r)&&(r=!1,b(R,N,X,q),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(R){return i.bindVertexArray(R)}function f(R){return i.deleteVertexArray(R)}function g(R,N,X,q){const z=q.wireframe===!0;let $=n[N.id];$===void 0&&($={},n[N.id]=$);const G=R.isInstancedMesh===!0?R.id:0;let Z=$[G];Z===void 0&&(Z={},$[G]=Z);let Q=Z[X.id];Q===void 0&&(Q={},Z[X.id]=Q);let de=Q[z];return de===void 0&&(de=d(l()),Q[z]=de),de}function d(R){const N=[],X=[],q=[];for(let z=0;z<t;z++)N[z]=0,X[z]=0,q[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:X,attributeDivisors:q,object:R,attributes:{},index:null}}function m(R,N,X,q){const z=s.attributes,$=N.attributes;let G=0;const Z=X.getAttributes();for(const Q in Z)if(Z[Q].location>=0){const pe=z[Q];let ve=$[Q];if(ve===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(ve=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(ve=R.instanceColor)),pe===void 0||pe.attribute!==ve||ve&&pe.data!==ve.data)return!0;G++}return s.attributesNum!==G||s.index!==q}function y(R,N,X,q){const z={},$=N.attributes;let G=0;const Z=X.getAttributes();for(const Q in Z)if(Z[Q].location>=0){let pe=$[Q];pe===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(pe=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(pe=R.instanceColor));const ve={};ve.attribute=pe,pe&&pe.data&&(ve.data=pe.data),z[Q]=ve,G++}s.attributes=z,s.attributesNum=G,s.index=q}function x(){const R=s.newAttributes;for(let N=0,X=R.length;N<X;N++)R[N]=0}function p(R){u(R,0)}function u(R,N){const X=s.newAttributes,q=s.enabledAttributes,z=s.attributeDivisors;X[R]=1,q[R]===0&&(i.enableVertexAttribArray(R),q[R]=1),z[R]!==N&&(i.vertexAttribDivisor(R,N),z[R]=N)}function E(){const R=s.newAttributes,N=s.enabledAttributes;for(let X=0,q=N.length;X<q;X++)N[X]!==R[X]&&(i.disableVertexAttribArray(X),N[X]=0)}function w(R,N,X,q,z,$,G){G===!0?i.vertexAttribIPointer(R,N,X,z,$):i.vertexAttribPointer(R,N,X,q,z,$)}function b(R,N,X,q){x();const z=q.attributes,$=X.getAttributes(),G=N.defaultAttributeValues;for(const Z in $){const Q=$[Z];if(Q.location>=0){let de=z[Z];if(de===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(de=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(de=R.instanceColor)),de!==void 0){const pe=de.normalized,ve=de.itemSize,Ve=e.get(de);if(Ve===void 0)continue;const nt=Ve.buffer,We=Ve.type,J=Ve.bytesPerElement,ie=We===i.INT||We===i.UNSIGNED_INT||de.gpuType===Yr;if(de.isInterleavedBufferAttribute){const ee=de.data,Le=ee.stride,Re=de.offset;if(ee.isInstancedInterleavedBuffer){for(let Te=0;Te<Q.locationSize;Te++)u(Q.location+Te,ee.meshPerAttribute);R.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Te=0;Te<Q.locationSize;Te++)p(Q.location+Te);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let Te=0;Te<Q.locationSize;Te++)w(Q.location+Te,ve/Q.locationSize,We,pe,Le*J,(Re+ve/Q.locationSize*Te)*J,ie)}else{if(de.isInstancedBufferAttribute){for(let ee=0;ee<Q.locationSize;ee++)u(Q.location+ee,de.meshPerAttribute);R.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ee=0;ee<Q.locationSize;ee++)p(Q.location+ee);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let ee=0;ee<Q.locationSize;ee++)w(Q.location+ee,ve/Q.locationSize,We,pe,ve*J,ve/Q.locationSize*ee*J,ie)}}else if(G!==void 0){const pe=G[Z];if(pe!==void 0)switch(pe.length){case 2:i.vertexAttrib2fv(Q.location,pe);break;case 3:i.vertexAttrib3fv(Q.location,pe);break;case 4:i.vertexAttrib4fv(Q.location,pe);break;default:i.vertexAttrib1fv(Q.location,pe)}}}}E()}function A(){T();for(const R in n){const N=n[R];for(const X in N){const q=N[X];for(const z in q){const $=q[z];for(const G in $)f($[G].object),delete $[G];delete q[z]}}delete n[R]}}function S(R){if(n[R.id]===void 0)return;const N=n[R.id];for(const X in N){const q=N[X];for(const z in q){const $=q[z];for(const G in $)f($[G].object),delete $[G];delete q[z]}}delete n[R.id]}function L(R){for(const N in n){const X=n[N];for(const q in X){const z=X[q];if(z[R.id]===void 0)continue;const $=z[R.id];for(const G in $)f($[G].object),delete $[G];delete z[R.id]}}}function v(R){for(const N in n){const X=n[N],q=R.isInstancedMesh===!0?R.id:0,z=X[q];if(z!==void 0){for(const $ in z){const G=z[$];for(const Z in G)f(G[Z].object),delete G[Z];delete z[$]}delete X[q],Object.keys(X).length===0&&delete n[N]}}}function T(){C(),r=!0,s!==a&&(s=a,c(s.object))}function C(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:T,resetDefaultState:C,dispose:A,releaseStatesOfGeometry:S,releaseStatesOfObject:v,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:p,disableUnusedAttributes:E}}function Dp(i,e,t){let n;function a(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function r(l,c,f){f!==0&&(i.drawArraysInstanced(n,l,c,f),t.update(c,n,f))}function o(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,f);let d=0;for(let m=0;m<f;m++)d+=c[m];t.update(d,n,1)}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function Up(i,e,t,n){let a;function s(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(L){return!(L!==Kt&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const v=L===Mn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Nt&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==an&&!v)}function l(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const f=l(c);f!==c&&(Ae("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const g=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ae("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:g,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:y,maxTextureSize:x,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:E,maxVaryings:w,maxFragmentUniforms:b,maxSamples:A,samples:S}}function Np(i){const e=this;let t=null,n=0,a=!1,s=!1;const r=new Vn,o=new Ce,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(g,d){const m=g.length!==0||d||n!==0||a;return a=d,n=g.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(g,d){t=f(g,d,0)},this.setState=function(g,d,m){const y=g.clippingPlanes,x=g.clipIntersection,p=g.clipShadows,u=i.get(g);if(!a||y===null||y.length===0||s&&!p)s?f(null):c();else{const E=s?0:n,w=E*4;let b=u.clippingState||null;l.value=b,b=f(y,d,w,m);for(let A=0;A!==w;++A)b[A]=t[A];u.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(g,d,m,y){const x=g!==null?g.length:0;let p=null;if(x!==0){if(p=l.value,y!==!0||p===null){const u=m+x*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<u)&&(p=new Float32Array(u));for(let w=0,b=m;w!==x;++w,b+=4)r.copy(g[w]).applyMatrix4(E,o),r.normal.toArray(p,b),p[b+3]=r.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}const Un=4,Qo=[.125,.215,.35,.446,.526,.582],$n=20,Bp=256,Fi=new Mc,el=new Ie;let Cs=null,Rs=0,Ps=0,Fs=!1;const Op=new U;class tl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,a=100,s={}){const{size:r=256,position:o=Op}=s;Cs=this._renderer.getRenderTarget(),Rs=this._renderer.getActiveCubeFace(),Ps=this._renderer.getActiveMipmapLevel(),Fs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,a,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=al(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=il(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Cs,Rs,Ps),this._renderer.xr.enabled=Fs,e.scissorTest=!1,fi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Kn||e.mapping===bi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cs=this._renderer.getRenderTarget(),Rs=this._renderer.getActiveCubeFace(),Ps=this._renderer.getActiveMipmapLevel(),Fs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:St,minFilter:St,generateMipmaps:!1,type:Mn,format:Kt,colorSpace:Ba,depthBuffer:!1},a=nl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nl(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=kp(s)),this._blurMaterial=Hp(s,e,t),this._ggxMaterial=zp(s,e,t)}return a}_compileMaterial(e){const t=new Bt(new kt,e);this._renderer.compile(t,Fi)}_sceneToCubeUV(e,t,n,a,s){const l=new Ut(90,1,t,n),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],g=this._renderer,d=g.autoClear,m=g.toneMapping;g.getClearColor(el),g.toneMapping=rn,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(a),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Bt(new Zi,new zi({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,p=x.material;let u=!1;const E=e.background;E?E.isColor&&(p.color.copy(E),e.background=null,u=!0):(p.color.copy(el),u=!0);for(let w=0;w<6;w++){const b=w%3;b===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[w],s.y,s.z)):b===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[w]));const A=this._cubeSize;fi(a,b*A,w>2?A:0,A,A),g.setRenderTarget(a),u&&g.render(x,l),g.render(e,l)}g.toneMapping=m,g.autoClear=d,e.background=E}_textureToCubeUV(e,t){const n=this._renderer,a=e.mapping===Kn||e.mapping===bi;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=al()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=il());const s=a?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;fi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,Fi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let s=1;s<a;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const a=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[n];o.material=r;const l=r.uniforms,c=n/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),g=Math.sqrt(c*c-f*f),d=0+c*1.25,m=g*d,{_lodMax:y}=this,x=this._sizeLods[n],p=3*x*(n>y-Un?n-y+Un:0),u=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=y-t,fi(s,p,u,3*x,2*x),a.setRenderTarget(s),a.render(o,Fi),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=y-n,fi(e,p,u,3*x,2*x),a.setRenderTarget(e),a.render(o,Fi)}_blur(e,t,n,a,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,a,"latitudinal",s),this._halfBlur(r,e,n,n,a,"longitudinal",s)}_halfBlur(e,t,n,a,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&Ge("blur direction must be either latitudinal or longitudinal!");const f=3,g=this._lodMeshes[a];g.material=c;const d=c.uniforms,m=this._sizeLods[n]-1,y=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*$n-1),x=s/y,p=isFinite(s)?1+Math.floor(f*x):$n;p>$n&&Ae(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${$n}`);const u=[];let E=0;for(let L=0;L<$n;++L){const v=L/x,T=Math.exp(-v*v/2);u.push(T),L===0?E+=T:L<p&&(E+=2*T)}for(let L=0;L<u.length;L++)u[L]=u[L]/E;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=u,d.latitudinal.value=r==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:w}=this;d.dTheta.value=y,d.mipInt.value=w-n;const b=this._sizeLods[a],A=3*b*(a>w-Un?a-w+Un:0),S=4*(this._cubeSize-b);fi(t,A,S,3*b,2*b),l.setRenderTarget(t),l.render(g,Fi)}}function kp(i){const e=[],t=[],n=[];let a=i;const s=i-Un+1+Qo.length;for(let r=0;r<s;r++){const o=Math.pow(2,a);e.push(o);let l=1/o;r>i-Un?l=Qo[r-i+Un-1]:r===0&&(l=0),t.push(l);const c=1/(o-2),f=-c,g=1+c,d=[f,f,g,f,g,g,f,f,g,g,f,g],m=6,y=6,x=3,p=2,u=1,E=new Float32Array(x*y*m),w=new Float32Array(p*y*m),b=new Float32Array(u*y*m);for(let S=0;S<m;S++){const L=S%3*2/3-1,v=S>2?0:-1,T=[L,v,0,L+2/3,v,0,L+2/3,v+1,0,L,v,0,L+2/3,v+1,0,L,v+1,0];E.set(T,x*y*S),w.set(d,p*y*S);const C=[S,S,S,S,S,S];b.set(C,u*y*S)}const A=new kt;A.setAttribute("position",new Ot(E,x)),A.setAttribute("uv",new Ot(w,p)),A.setAttribute("faceIndex",new Ot(b,u)),n.push(new Bt(A,null)),a>Un&&a--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function nl(i,e,t){const n=new on(i,e,t);return n.texture.mapping=Wa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fi(i,e,t,n,a){i.viewport.set(e,t,n,a),i.scissor.set(e,t,n,a)}function zp(i,e,t){return new dn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Bp,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ya(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Hp(i,e,t){const n=new Float32Array($n),a=new U(0,1,0);return new dn({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function il(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function al(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Ya(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class wc extends on{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},a=[n,n,n,n,n,n];this.texture=new vc(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Zi(5,5,5),s=new dn({name:"CubemapFromEquirect",uniforms:Mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rt,blending:bn});s.uniforms.tEquirect.value=t;const r=new Bt(a,s),o=t.minFilter;return t.minFilter===Yn&&(t.minFilter=St),new Xu(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,n=!0,a=!0){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,a);e.setRenderTarget(s)}}function Gp(i){let e=new WeakMap,t=new WeakMap,n=null;function a(d,m=!1){return d==null?null:m?r(d):s(d)}function s(d){if(d&&d.isTexture){const m=d.mapping;if(m===es||m===ts)if(e.has(d)){const y=e.get(d).texture;return o(y,d.mapping)}else{const y=d.image;if(y&&y.height>0){const x=new wc(y.height);return x.fromEquirectangularTexture(i,d),e.set(d,x),d.addEventListener("dispose",c),o(x.texture,d.mapping)}else return null}}return d}function r(d){if(d&&d.isTexture){const m=d.mapping,y=m===es||m===ts,x=m===Kn||m===bi;if(y||x){let p=t.get(d);const u=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==u)return n===null&&(n=new tl(i)),p=y?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{const E=d.image;return y&&E&&E.height>0||x&&E&&l(E)?(n===null&&(n=new tl(i)),p=y?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",f),p.texture):null}}}return d}function o(d,m){return m===es?d.mapping=Kn:m===ts&&(d.mapping=bi),d}function l(d){let m=0;const y=6;for(let x=0;x<y;x++)d[x]!==void 0&&m++;return m===y}function c(d){const m=d.target;m.removeEventListener("dispose",c);const y=e.get(m);y!==void 0&&(e.delete(m),y.dispose())}function f(d){const m=d.target;m.removeEventListener("dispose",f);const y=t.get(m);y!==void 0&&(t.delete(m),y.dispose())}function g(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:g}}function Vp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const a=i.getExtension(n);return e[n]=a,a}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const a=t(n);return a===null&&mi("WebGLRenderer: "+n+" extension not supported."),a}}}function Wp(i,e,t,n){const a={},s=new WeakMap;function r(g){const d=g.target;d.index!==null&&e.remove(d.index);for(const y in d.attributes)e.remove(d.attributes[y]);d.removeEventListener("dispose",r),delete a[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(g,d){return a[d.id]===!0||(d.addEventListener("dispose",r),a[d.id]=!0,t.memory.geometries++),d}function l(g){const d=g.attributes;for(const m in d)e.update(d[m],i.ARRAY_BUFFER)}function c(g){const d=[],m=g.index,y=g.attributes.position;let x=0;if(y===void 0)return;if(m!==null){const E=m.array;x=m.version;for(let w=0,b=E.length;w<b;w+=3){const A=E[w+0],S=E[w+1],L=E[w+2];d.push(A,S,S,L,L,A)}}else{const E=y.array;x=y.version;for(let w=0,b=E.length/3-1;w<b;w+=3){const A=w+0,S=w+1,L=w+2;d.push(A,S,S,L,L,A)}}const p=new(y.count>=65535?pc:fc)(d,1);p.version=x;const u=s.get(g);u&&e.remove(u),s.set(g,p)}function f(g){const d=s.get(g);if(d){const m=g.index;m!==null&&d.version<m.version&&c(g)}else c(g);return s.get(g)}return{get:o,update:l,getWireframeAttribute:f}}function $p(i,e,t){let n;function a(g){n=g}let s,r;function o(g){s=g.type,r=g.bytesPerElement}function l(g,d){i.drawElements(n,d,s,g*r),t.update(d,n,1)}function c(g,d,m){m!==0&&(i.drawElementsInstanced(n,d,s,g*r,m),t.update(d,n,m))}function f(g,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,g,0,m);let x=0;for(let p=0;p<m;p++)x+=d[p];t.update(x,n,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function Xp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(t.calls++,r){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:Ge("WebGLInfo: Unknown draw mode:",r);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:n}}function Yp(i,e,t){const n=new WeakMap,a=new tt;function s(r,o,l){const c=r.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,g=f!==void 0?f.length:0;let d=n.get(o);if(d===void 0||d.count!==g){let T=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let w=0;m===!0&&(w=1),y===!0&&(w=2),x===!0&&(w=3);let b=o.attributes.position.count*w,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const S=new Float32Array(b*A*4*g),L=new dc(S,b,A,g);L.type=an,L.needsUpdate=!0;const v=w*4;for(let C=0;C<g;C++){const R=p[C],N=u[C],X=E[C],q=b*A*4*C;for(let z=0;z<R.count;z++){const $=z*v;m===!0&&(a.fromBufferAttribute(R,z),S[q+$+0]=a.x,S[q+$+1]=a.y,S[q+$+2]=a.z,S[q+$+3]=0),y===!0&&(a.fromBufferAttribute(N,z),S[q+$+4]=a.x,S[q+$+5]=a.y,S[q+$+6]=a.z,S[q+$+7]=0),x===!0&&(a.fromBufferAttribute(X,z),S[q+$+8]=a.x,S[q+$+9]=a.y,S[q+$+10]=a.z,S[q+$+11]=X.itemSize===4?a.w:1)}}d={count:g,texture:L,size:new Ne(b,A)},n.set(o,d),o.addEventListener("dispose",T)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,t);else{let m=0;for(let x=0;x<c.length;x++)m+=c[x];const y=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",y),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function qp(i,e,t,n,a){let s=new WeakMap;function r(c){const f=a.render.frame,g=c.geometry,d=e.get(c,g);if(s.get(d)!==f&&(e.update(d),s.set(d,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==f&&(m.update(),s.set(m,f))}return d}function o(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),n.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:r,dispose:o}}const Kp={[ql]:"LINEAR_TONE_MAPPING",[Kl]:"REINHARD_TONE_MAPPING",[Jl]:"CINEON_TONE_MAPPING",[Zl]:"ACES_FILMIC_TONE_MAPPING",[Ql]:"AGX_TONE_MAPPING",[ec]:"NEUTRAL_TONE_MAPPING",[jl]:"CUSTOM_TONE_MAPPING"};function Jp(i,e,t,n,a,s){const r=new on(e,t,{type:i,depthBuffer:a,stencilBuffer:s,samples:n?4:0,depthTexture:a?new xi(e,t):void 0}),o=new on(e,t,{type:Mn,depthBuffer:!1,stencilBuffer:!1}),l=new kt;l.setAttribute("position",new At([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new At([0,2,0,0,2,0],2));const c=new ku({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Bt(l,c),g=new Mc(-1,1,1,-1,0,1);let d=null,m=null,y=!1,x,p=null,u=[],E=!1;this.setSize=function(w,b){r.setSize(w,b),o.setSize(w,b);for(let A=0;A<u.length;A++){const S=u[A];S.setSize&&S.setSize(w,b)}},this.setEffects=function(w){u=w,E=u.length>0&&u[0].isRenderPass===!0;const b=r.width,A=r.height;for(let S=0;S<u.length;S++){const L=u[S];L.setSize&&L.setSize(b,A)}},this.begin=function(w,b){if(y||w.toneMapping===rn&&u.length===0)return!1;if(p=b,b!==null){const A=b.width,S=b.height;(r.width!==A||r.height!==S)&&this.setSize(A,S)}return E===!1&&w.setRenderTarget(r),x=w.toneMapping,w.toneMapping=rn,!0},this.hasRenderPass=function(){return E},this.end=function(w,b){w.toneMapping=x,y=!0;let A=r,S=o;for(let L=0;L<u.length;L++){const v=u[L];if(v.enabled!==!1&&(v.render(w,S,A,b),v.needsSwap!==!1)){const T=A;A=S,S=T}}if(d!==w.outputColorSpace||m!==w.toneMapping){d=w.outputColorSpace,m=w.toneMapping,c.defines={},Oe.getTransfer(d)===Ye&&(c.defines.SRGB_TRANSFER="");const L=Kp[m];L&&(c.defines[L]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=A.texture,w.setRenderTarget(p),w.render(f,g),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),l.dispose(),c.dispose()}}const Ac=new Tt,Gr=new xi(1,1),Lc=new dc,Cc=new mu,Rc=new vc,sl=[],rl=[],ol=new Float32Array(16),ll=new Float32Array(9),cl=new Float32Array(4);function Ti(i,e,t){const n=i[0];if(n<=0||n>0)return i;const a=e*t;let s=sl[a];if(s===void 0&&(s=new Float32Array(a),sl[a]=s),e!==0){n.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,i[r].toArray(s,o)}return s}function pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function qa(i,e){let t=rl[e];t===void 0&&(t=new Int32Array(e),rl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Zp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function jp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2fv(this.addr,e),mt(t,e)}}function Qp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;i.uniform3fv(this.addr,e),mt(t,e)}}function em(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4fv(this.addr,e),mt(t,e)}}function tm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;cl.set(n),i.uniformMatrix2fv(this.addr,!1,cl),mt(t,n)}}function nm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;ll.set(n),i.uniformMatrix3fv(this.addr,!1,ll),mt(t,n)}}function im(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;ol.set(n),i.uniformMatrix4fv(this.addr,!1,ol),mt(t,n)}}function am(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function sm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2iv(this.addr,e),mt(t,e)}}function rm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;i.uniform3iv(this.addr,e),mt(t,e)}}function om(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4iv(this.addr,e),mt(t,e)}}function lm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function cm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2uiv(this.addr,e),mt(t,e)}}function dm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;i.uniform3uiv(this.addr,e),mt(t,e)}}function um(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4uiv(this.addr,e),mt(t,e)}}function hm(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);let s;this.type===i.SAMPLER_2D_SHADOW?(Gr.compareFunction=t.isReversedDepthBuffer()?eo:Qr,s=Gr):s=Ac,t.setTexture2D(e||s,a)}function fm(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture3D(e||Cc,a)}function pm(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTextureCube(e||Rc,a)}function mm(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture2DArray(e||Lc,a)}function gm(i){switch(i){case 5126:return Zp;case 35664:return jp;case 35665:return Qp;case 35666:return em;case 35674:return tm;case 35675:return nm;case 35676:return im;case 5124:case 35670:return am;case 35667:case 35671:return sm;case 35668:case 35672:return rm;case 35669:case 35673:return om;case 5125:return lm;case 36294:return cm;case 36295:return dm;case 36296:return um;case 35678:case 36198:case 36298:case 36306:case 35682:return hm;case 35679:case 36299:case 36307:return fm;case 35680:case 36300:case 36308:case 36293:return pm;case 36289:case 36303:case 36311:case 36292:return mm}}function vm(i,e){i.uniform1fv(this.addr,e)}function ym(i,e){const t=Ti(e,this.size,2);i.uniform2fv(this.addr,t)}function _m(i,e){const t=Ti(e,this.size,3);i.uniform3fv(this.addr,t)}function bm(i,e){const t=Ti(e,this.size,4);i.uniform4fv(this.addr,t)}function xm(i,e){const t=Ti(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Mm(i,e){const t=Ti(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Sm(i,e){const t=Ti(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Em(i,e){i.uniform1iv(this.addr,e)}function Tm(i,e){i.uniform2iv(this.addr,e)}function wm(i,e){i.uniform3iv(this.addr,e)}function Am(i,e){i.uniform4iv(this.addr,e)}function Lm(i,e){i.uniform1uiv(this.addr,e)}function Cm(i,e){i.uniform2uiv(this.addr,e)}function Rm(i,e){i.uniform3uiv(this.addr,e)}function Pm(i,e){i.uniform4uiv(this.addr,e)}function Fm(i,e,t){const n=this.cache,a=e.length,s=qa(t,a);pt(n,s)||(i.uniform1iv(this.addr,s),mt(n,s));let r;this.type===i.SAMPLER_2D_SHADOW?r=Gr:r=Ac;for(let o=0;o!==a;++o)t.setTexture2D(e[o]||r,s[o])}function Im(i,e,t){const n=this.cache,a=e.length,s=qa(t,a);pt(n,s)||(i.uniform1iv(this.addr,s),mt(n,s));for(let r=0;r!==a;++r)t.setTexture3D(e[r]||Cc,s[r])}function Dm(i,e,t){const n=this.cache,a=e.length,s=qa(t,a);pt(n,s)||(i.uniform1iv(this.addr,s),mt(n,s));for(let r=0;r!==a;++r)t.setTextureCube(e[r]||Rc,s[r])}function Um(i,e,t){const n=this.cache,a=e.length,s=qa(t,a);pt(n,s)||(i.uniform1iv(this.addr,s),mt(n,s));for(let r=0;r!==a;++r)t.setTexture2DArray(e[r]||Lc,s[r])}function Nm(i){switch(i){case 5126:return vm;case 35664:return ym;case 35665:return _m;case 35666:return bm;case 35674:return xm;case 35675:return Mm;case 35676:return Sm;case 5124:case 35670:return Em;case 35667:case 35671:return Tm;case 35668:case 35672:return wm;case 35669:case 35673:return Am;case 5125:return Lm;case 36294:return Cm;case 36295:return Rm;case 36296:return Pm;case 35678:case 36198:case 36298:case 36306:case 35682:return Fm;case 35679:case 36299:case 36307:return Im;case 35680:case 36300:case 36308:case 36293:return Dm;case 36289:case 36303:case 36311:case 36292:return Um}}class Bm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=gm(t.type)}}class Om{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Nm(t.type)}}class km{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const o=a[s];o.setValue(e,t[o.id],n)}}}const Is=/(\w+)(\])?(\[|\.)?/g;function dl(i,e){i.seq.push(e),i.map[e.id]=e}function zm(i,e,t){const n=i.name,a=n.length;for(Is.lastIndex=0;;){const s=Is.exec(n),r=Is.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===a){dl(t,c===void 0?new Bm(o,i,e):new Om(o,i,e));break}else{let g=t.map[o];g===void 0&&(g=new km(o),dl(t,g)),t=g}}}class Ia{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),l=e.getUniformLocation(t,o.name);zm(o,l,this)}const a=[],s=[];for(const r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(r):s.push(r);a.length>0&&(this.seq=a.concat(s))}setValue(e,t,n,a){const s=this.map[t];s!==void 0&&s.setValue(e,n,a)}setOptional(e,t,n){const a=t[n];a!==void 0&&this.setValue(e,n,a)}static upload(e,t,n,a){for(let s=0,r=t.length;s!==r;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,t){const n=[];for(let a=0,s=e.length;a!==s;++a){const r=e[a];r.id in t&&n.push(r)}return n}}function ul(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Hm=37297;let Gm=0;function Vm(i,e){const t=i.split(`
`),n=[],a=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=a;r<s;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}const hl=new Ce;function Wm(i){Oe._getMatrix(hl,Oe.workingColorSpace,i);const e=`mat3( ${hl.elements.map(t=>t.toFixed(4))} )`;switch(Oe.getTransfer(i)){case Oa:return[e,"LinearTransferOETF"];case Ye:return[e,"sRGBTransferOETF"];default:return Ae("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function fl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Vm(i.getShaderSource(e),o)}else return s}function $m(i,e){const t=Wm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Xm={[ql]:"Linear",[Kl]:"Reinhard",[Jl]:"Cineon",[Zl]:"ACESFilmic",[Ql]:"AgX",[ec]:"Neutral",[jl]:"Custom"};function Ym(i,e){const t=Xm[e];return t===void 0?(Ae("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const wa=new U;function qm(){Oe.getLuminanceCoefficients(wa);const i=wa.x.toFixed(4),e=wa.y.toFixed(4),t=wa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Km(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oi).join(`
`)}function Jm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Zm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const s=i.getActiveAttrib(e,a),r=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[r]={type:s.type,location:i.getAttribLocation(e,r),locationSize:o}}return t}function Oi(i){return i!==""}function pl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ml(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vr(i){return i.replace(jm,eg)}const Qm=new Map;function eg(i,e){let t=De[e];if(t===void 0){const n=Qm.get(e);if(n!==void 0)t=De[n],Ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Vr(t)}const tg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gl(i){return i.replace(tg,ng)}function ng(i,e,t,n){let a="";for(let s=parseInt(e);s<parseInt(t);s++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function vl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const ig={[La]:"SHADOWMAP_TYPE_PCF",[Ni]:"SHADOWMAP_TYPE_VSM"};function ag(i){return ig[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const sg={[Kn]:"ENVMAP_TYPE_CUBE",[bi]:"ENVMAP_TYPE_CUBE",[Wa]:"ENVMAP_TYPE_CUBE_UV"};function rg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":sg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const og={[bi]:"ENVMAP_MODE_REFRACTION"};function lg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":og[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const cg={[Xr]:"ENVMAP_BLENDING_MULTIPLY",[qd]:"ENVMAP_BLENDING_MIX",[Kd]:"ENVMAP_BLENDING_ADD"};function dg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":cg[i.combine]||"ENVMAP_BLENDING_NONE"}function ug(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function hg(i,e,t,n){const a=i.getContext(),s=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=ag(t),c=rg(t),f=lg(t),g=dg(t),d=ug(t),m=Km(t),y=Jm(s),x=a.createProgram();let p,u,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Oi).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Oi).join(`
`),u.length>0&&(u+=`
`)):(p=[vl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oi).join(`
`),u=[vl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+g:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==rn?"#define TONE_MAPPING":"",t.toneMapping!==rn?De.tonemapping_pars_fragment:"",t.toneMapping!==rn?Ym("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,$m("linearToOutputTexel",t.outputColorSpace),qm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Oi).join(`
`)),r=Vr(r),r=pl(r,t),r=ml(r,t),o=Vr(o),o=pl(o,t),o=ml(o,t),r=gl(r),o=gl(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",t.glslVersion===Lo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const w=E+p+r,b=E+u+o,A=ul(a,a.VERTEX_SHADER,w),S=ul(a,a.FRAGMENT_SHADER,b);a.attachShader(x,A),a.attachShader(x,S),t.index0AttributeName!==void 0?a.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(x,0,"position"),a.linkProgram(x);function L(R){if(i.debug.checkShaderErrors){const N=a.getProgramInfoLog(x)||"",X=a.getShaderInfoLog(A)||"",q=a.getShaderInfoLog(S)||"",z=N.trim(),$=X.trim(),G=q.trim();let Z=!0,Q=!0;if(a.getProgramParameter(x,a.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,x,A,S);else{const de=fl(a,A,"vertex"),pe=fl(a,S,"fragment");Ge("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(x,a.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+z+`
`+de+`
`+pe)}else z!==""?Ae("WebGLProgram: Program Info Log:",z):($===""||G==="")&&(Q=!1);Q&&(R.diagnostics={runnable:Z,programLog:z,vertexShader:{log:$,prefix:p},fragmentShader:{log:G,prefix:u}})}a.deleteShader(A),a.deleteShader(S),v=new Ia(a,x),T=Zm(a,x)}let v;this.getUniforms=function(){return v===void 0&&L(this),v};let T;this.getAttributes=function(){return T===void 0&&L(this),T};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(x,Hm)),C},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Gm++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=S,this}let fg=0;class pg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(n)===!1&&(a.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new mg(e),t.set(e,n)),n}}class mg{constructor(e){this.id=fg++,this.code=e,this.usedTimes=0}}function gg(i){return i===Jn||i===Ua||i===Na}function vg(i,e,t,n,a,s){const r=new uc,o=new pg,l=new Set,c=[],f=new Map,g=n.logarithmicDepthBuffer;let d=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,T,C,R,N,X){const q=R.fog,z=N.geometry,$=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?R.environment:null,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Z=e.get(v.envMap||$,G),Q=Z&&Z.mapping===Wa?Z.image.height:null,de=m[v.type];v.precision!==null&&(d=n.getMaxPrecision(v.precision),d!==v.precision&&Ae("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const pe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ve=pe!==void 0?pe.length:0;let Ve=0;z.morphAttributes.position!==void 0&&(Ve=1),z.morphAttributes.normal!==void 0&&(Ve=2),z.morphAttributes.color!==void 0&&(Ve=3);let nt,We,J,ie;if(de){const ye=nn[de];nt=ye.vertexShader,We=ye.fragmentShader}else{nt=v.vertexShader,We=v.fragmentShader;const ye=o.getVertexShaderStage(v),at=o.getFragmentShaderStage(v);o.update(v,ye,at),J=ye.id,ie=at.id}const ee=i.getRenderTarget(),Le=i.state.buffers.depth.getReversed(),Re=N.isInstancedMesh===!0,Te=N.isBatchedMesh===!0,ot=!!v.map,Be=!!v.matcap,Ke=!!Z,$e=!!v.aoMap,ze=!!v.lightMap,dt=!!v.bumpMap&&v.wireframe===!1,ft=!!v.normalMap,gt=!!v.displacementMap,yt=!!v.emissiveMap,it=!!v.metalnessMap,ut=!!v.roughnessMap,F=v.anisotropy>0,Lt=v.clearcoat>0,Xe=v.dispersion>0,M=v.iridescence>0,h=v.sheen>0,D=v.transmission>0,k=F&&!!v.anisotropyMap,V=Lt&&!!v.clearcoatMap,te=Lt&&!!v.clearcoatNormalMap,ae=Lt&&!!v.clearcoatRoughnessMap,W=M&&!!v.iridescenceMap,K=M&&!!v.iridescenceThicknessMap,se=h&&!!v.sheenColorMap,xe=h&&!!v.sheenRoughnessMap,le=!!v.specularMap,re=!!v.specularColorMap,Ee=!!v.specularIntensityMap,we=D&&!!v.transmissionMap,Pe=D&&!!v.thicknessMap,P=!!v.gradientMap,ne=!!v.alphaMap,Y=v.alphaTest>0,oe=!!v.alphaHash,fe=!!v.extensions;let j=rn;v.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(j=i.toneMapping);const be={shaderID:de,shaderType:v.type,shaderName:v.name,vertexShader:nt,fragmentShader:We,defines:v.defines,customVertexShaderID:J,customFragmentShaderID:ie,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Te,batchingColor:Te&&N._colorsTexture!==null,instancing:Re,instancingColor:Re&&N.instanceColor!==null,instancingMorph:Re&&N.morphTexture!==null,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Oe.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:ot,matcap:Be,envMap:Ke,envMapMode:Ke&&Z.mapping,envMapCubeUVHeight:Q,aoMap:$e,lightMap:ze,bumpMap:dt,normalMap:ft,displacementMap:gt,emissiveMap:yt,normalMapObjectSpace:ft&&v.normalMapType===jd,normalMapTangentSpace:ft&&v.normalMapType===kr,packedNormalMap:ft&&v.normalMapType===kr&&gg(v.normalMap.format),metalnessMap:it,roughnessMap:ut,anisotropy:F,anisotropyMap:k,clearcoat:Lt,clearcoatMap:V,clearcoatNormalMap:te,clearcoatRoughnessMap:ae,dispersion:Xe,iridescence:M,iridescenceMap:W,iridescenceThicknessMap:K,sheen:h,sheenColorMap:se,sheenRoughnessMap:xe,specularMap:le,specularColorMap:re,specularIntensityMap:Ee,transmission:D,transmissionMap:we,thicknessMap:Pe,gradientMap:P,opaque:v.transparent===!1&&v.blending===pi&&v.alphaToCoverage===!1,alphaMap:ne,alphaTest:Y,alphaHash:oe,combine:v.combine,mapUv:ot&&y(v.map.channel),aoMapUv:$e&&y(v.aoMap.channel),lightMapUv:ze&&y(v.lightMap.channel),bumpMapUv:dt&&y(v.bumpMap.channel),normalMapUv:ft&&y(v.normalMap.channel),displacementMapUv:gt&&y(v.displacementMap.channel),emissiveMapUv:yt&&y(v.emissiveMap.channel),metalnessMapUv:it&&y(v.metalnessMap.channel),roughnessMapUv:ut&&y(v.roughnessMap.channel),anisotropyMapUv:k&&y(v.anisotropyMap.channel),clearcoatMapUv:V&&y(v.clearcoatMap.channel),clearcoatNormalMapUv:te&&y(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&y(v.clearcoatRoughnessMap.channel),iridescenceMapUv:W&&y(v.iridescenceMap.channel),iridescenceThicknessMapUv:K&&y(v.iridescenceThicknessMap.channel),sheenColorMapUv:se&&y(v.sheenColorMap.channel),sheenRoughnessMapUv:xe&&y(v.sheenRoughnessMap.channel),specularMapUv:le&&y(v.specularMap.channel),specularColorMapUv:re&&y(v.specularColorMap.channel),specularIntensityMapUv:Ee&&y(v.specularIntensityMap.channel),transmissionMapUv:we&&y(v.transmissionMap.channel),thicknessMapUv:Pe&&y(v.thicknessMap.channel),alphaMapUv:ne&&y(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ft||F),vertexNormals:!!z.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!z.attributes.uv&&(ot||ne),fog:!!q,useFog:v.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||z.attributes.normal===void 0&&ft===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Le,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Ve,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:j,decodeVideoTexture:ot&&v.map.isVideoTexture===!0&&Oe.getTransfer(v.map.colorSpace)===Ye,decodeVideoTextureEmissive:yt&&v.emissiveMap.isVideoTexture===!0&&Oe.getTransfer(v.emissiveMap.colorSpace)===Ye,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===yn,flipSided:v.side===Rt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:fe&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&v.extensions.multiDraw===!0||Te)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return be.vertexUv1s=l.has(1),be.vertexUv2s=l.has(2),be.vertexUv3s=l.has(3),l.clear(),be}function p(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const C in v.defines)T.push(C),T.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(u(T,v),E(T,v),T.push(i.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function u(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function E(v,T){r.disableAll(),T.instancing&&r.enable(0),T.instancingColor&&r.enable(1),T.instancingMorph&&r.enable(2),T.matcap&&r.enable(3),T.envMap&&r.enable(4),T.normalMapObjectSpace&&r.enable(5),T.normalMapTangentSpace&&r.enable(6),T.clearcoat&&r.enable(7),T.iridescence&&r.enable(8),T.alphaTest&&r.enable(9),T.vertexColors&&r.enable(10),T.vertexAlphas&&r.enable(11),T.vertexUv1s&&r.enable(12),T.vertexUv2s&&r.enable(13),T.vertexUv3s&&r.enable(14),T.vertexTangents&&r.enable(15),T.anisotropy&&r.enable(16),T.alphaHash&&r.enable(17),T.batching&&r.enable(18),T.dispersion&&r.enable(19),T.batchingColor&&r.enable(20),T.gradientMap&&r.enable(21),T.packedNormalMap&&r.enable(22),T.vertexNormals&&r.enable(23),v.push(r.mask),r.disableAll(),T.fog&&r.enable(0),T.useFog&&r.enable(1),T.flatShading&&r.enable(2),T.logarithmicDepthBuffer&&r.enable(3),T.reversedDepthBuffer&&r.enable(4),T.skinning&&r.enable(5),T.morphTargets&&r.enable(6),T.morphNormals&&r.enable(7),T.morphColors&&r.enable(8),T.premultipliedAlpha&&r.enable(9),T.shadowMapEnabled&&r.enable(10),T.doubleSided&&r.enable(11),T.flipSided&&r.enable(12),T.useDepthPacking&&r.enable(13),T.dithering&&r.enable(14),T.transmission&&r.enable(15),T.sheen&&r.enable(16),T.opaque&&r.enable(17),T.pointsUvs&&r.enable(18),T.decodeVideoTexture&&r.enable(19),T.decodeVideoTextureEmissive&&r.enable(20),T.alphaToCoverage&&r.enable(21),T.numLightProbeGrids>0&&r.enable(22),T.hasPositionAttribute&&r.enable(23),v.push(r.mask)}function w(v){const T=m[v.type];let C;if(T){const R=nn[T];C=Nu.clone(R.uniforms)}else C=v.uniforms;return C}function b(v,T){let C=f.get(T);return C!==void 0?++C.usedTimes:(C=new hg(i,T,v,a),c.push(C),f.set(T,C)),C}function A(v){if(--v.usedTimes===0){const T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),f.delete(v.cacheKey),v.destroy()}}function S(v){o.remove(v)}function L(){o.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:w,acquireProgram:b,releaseProgram:A,releaseShaderCache:S,programs:c,dispose:L}}function yg(){let i=new WeakMap;function e(r){return i.has(r)}function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function n(r){i.delete(r)}function a(r,o,l){i.get(r)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:a,dispose:s}}function _g(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function yl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function _l(){const i=[];let e=0;const t=[],n=[],a=[];function s(){e=0,t.length=0,n.length=0,a.length=0}function r(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function o(d,m,y,x,p,u){let E=i[e];return E===void 0?(E={id:d.id,object:d,geometry:m,material:y,materialVariant:r(d),groupOrder:x,renderOrder:d.renderOrder,z:p,group:u},i[e]=E):(E.id=d.id,E.object=d,E.geometry=m,E.material=y,E.materialVariant=r(d),E.groupOrder=x,E.renderOrder=d.renderOrder,E.z=p,E.group=u),e++,E}function l(d,m,y,x,p,u){const E=o(d,m,y,x,p,u);y.transmission>0?n.push(E):y.transparent===!0?a.push(E):t.push(E)}function c(d,m,y,x,p,u){const E=o(d,m,y,x,p,u);y.transmission>0?n.unshift(E):y.transparent===!0?a.unshift(E):t.unshift(E)}function f(d,m,y){t.length>1&&t.sort(d||_g),n.length>1&&n.sort(m||yl),a.length>1&&a.sort(m||yl),y&&(t.reverse(),n.reverse(),a.reverse())}function g(){for(let d=e,m=i.length;d<m;d++){const y=i[d];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:n,transparent:a,init:s,push:l,unshift:c,finish:g,sort:f}}function bg(){let i=new WeakMap;function e(n,a){const s=i.get(n);let r;return s===void 0?(r=new _l,i.set(n,[r])):a>=s.length?(r=new _l,s.push(r)):r=s[a],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function xg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ie};break;case"SpotLight":t={position:new U,direction:new U,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function Mg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Sg=0;function Eg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Tg(i){const e=new xg,t=Mg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const a=new U,s=new et,r=new et;function o(c){let f=0,g=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let m=0,y=0,x=0,p=0,u=0,E=0,w=0,b=0,A=0,S=0,L=0;c.sort(Eg);for(let T=0,C=c.length;T<C;T++){const R=c[T],N=R.color,X=R.intensity,q=R.distance;let z=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Jn?z=R.shadow.map.texture:z=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)f+=N.r*X,g+=N.g*X,d+=N.b*X;else if(R.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(R.sh.coefficients[$],X);L++}else if(R.isDirectionalLight){const $=e.get(R);if($.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const G=R.shadow,Z=t.get(R);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,n.directionalShadow[m]=Z,n.directionalShadowMap[m]=z,n.directionalShadowMatrix[m]=R.shadow.matrix,E++}n.directional[m]=$,m++}else if(R.isSpotLight){const $=e.get(R);$.position.setFromMatrixPosition(R.matrixWorld),$.color.copy(N).multiplyScalar(X),$.distance=q,$.coneCos=Math.cos(R.angle),$.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),$.decay=R.decay,n.spot[x]=$;const G=R.shadow;if(R.map&&(n.spotLightMap[A]=R.map,A++,G.updateMatrices(R),R.castShadow&&S++),n.spotLightMatrix[x]=G.matrix,R.castShadow){const Z=t.get(R);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,n.spotShadow[x]=Z,n.spotShadowMap[x]=z,b++}x++}else if(R.isRectAreaLight){const $=e.get(R);$.color.copy(N).multiplyScalar(X),$.halfWidth.set(R.width*.5,0,0),$.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=$,p++}else if(R.isPointLight){const $=e.get(R);if($.color.copy(R.color).multiplyScalar(R.intensity),$.distance=R.distance,$.decay=R.decay,R.castShadow){const G=R.shadow,Z=t.get(R);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,Z.shadowCameraNear=G.camera.near,Z.shadowCameraFar=G.camera.far,n.pointShadow[y]=Z,n.pointShadowMap[y]=z,n.pointShadowMatrix[y]=R.shadow.matrix,w++}n.point[y]=$,y++}else if(R.isHemisphereLight){const $=e.get(R);$.skyColor.copy(R.color).multiplyScalar(X),$.groundColor.copy(R.groundColor).multiplyScalar(X),n.hemi[u]=$,u++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=g,n.ambient[2]=d;const v=n.hash;(v.directionalLength!==m||v.pointLength!==y||v.spotLength!==x||v.rectAreaLength!==p||v.hemiLength!==u||v.numDirectionalShadows!==E||v.numPointShadows!==w||v.numSpotShadows!==b||v.numSpotMaps!==A||v.numLightProbes!==L)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=p,n.point.length=y,n.hemi.length=u,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=b+A-S,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=L,v.directionalLength=m,v.pointLength=y,v.spotLength=x,v.rectAreaLength=p,v.hemiLength=u,v.numDirectionalShadows=E,v.numPointShadows=w,v.numSpotShadows=b,v.numSpotMaps=A,v.numLightProbes=L,n.version=Sg++)}function l(c,f){let g=0,d=0,m=0,y=0,x=0;const p=f.matrixWorldInverse;for(let u=0,E=c.length;u<E;u++){const w=c[u];if(w.isDirectionalLight){const b=n.directional[g];b.direction.setFromMatrixPosition(w.matrixWorld),a.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(p),g++}else if(w.isSpotLight){const b=n.spot[m];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(w.matrixWorld),a.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(p),m++}else if(w.isRectAreaLight){const b=n.rectArea[y];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(p),r.identity(),s.copy(w.matrixWorld),s.premultiply(p),r.extractRotation(s),b.halfWidth.set(w.width*.5,0,0),b.halfHeight.set(0,w.height*.5,0),b.halfWidth.applyMatrix4(r),b.halfHeight.applyMatrix4(r),y++}else if(w.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(p),d++}else if(w.isHemisphereLight){const b=n.hemi[x];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(p),x++}}}return{setup:o,setupView:l,state:n}}function bl(i){const e=new Tg(i),t=[],n=[],a=[];function s(d){g.camera=d,t.length=0,n.length=0,a.length=0}function r(d){t.push(d)}function o(d){n.push(d)}function l(d){a.push(d)}function c(){e.setup(t)}function f(d){e.setupView(t,d)}const g={lightsArray:t,shadowsArray:n,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:g,setupLights:c,setupLightsView:f,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function wg(i){let e=new WeakMap;function t(a,s=0){const r=e.get(a);let o;return r===void 0?(o=new bl(i),e.set(a,[o])):s>=r.length?(o=new bl(i),r.push(o)):o=r[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Ag=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Cg=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Rg=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],xl=new et,Ii=new U,Ds=new U;function Pg(i,e,t){let n=new io;const a=new Ne,s=new Ne,r=new tt,o=new Hu,l=new Gu,c={},f=t.maxTextureSize,g={[Nn]:Rt,[Rt]:Nn,[yn]:yn},d=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:Ag,fragmentShader:Lg}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const y=new kt;y.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Bt(y,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=La;let u=this.type;this.render=function(S,L,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;this.type===Cd&&(Ae("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=La);const T=i.getRenderTarget(),C=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),N=i.state;N.setBlending(bn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const X=u!==this.type;X&&L.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(z=>z.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,z=S.length;q<z;q++){const $=S[q],G=$.shadow;if(G===void 0){Ae("WebGLShadowMap:",$,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;a.copy(G.mapSize);const Z=G.getFrameExtents();a.multiply(Z),s.copy(G.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/Z.x),a.x=s.x*Z.x,G.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/Z.y),a.y=s.y*Z.y,G.mapSize.y=s.y));const Q=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=Q,G.map===null||X===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Ni){if($.isPointLight){Ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new on(a.x,a.y,{format:Jn,type:Mn,minFilter:St,magFilter:St,generateMipmaps:!1}),G.map.texture.name=$.name+".shadowMap",G.map.depthTexture=new xi(a.x,a.y,an),G.map.depthTexture.name=$.name+".shadowMapDepth",G.map.depthTexture.format=Sn,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=_t,G.map.depthTexture.magFilter=_t}else $.isPointLight?(G.map=new wc(a.x),G.map.depthTexture=new Du(a.x,cn)):(G.map=new on(a.x,a.y),G.map.depthTexture=new xi(a.x,a.y,cn)),G.map.depthTexture.name=$.name+".shadowMap",G.map.depthTexture.format=Sn,this.type===La?(G.map.depthTexture.compareFunction=Q?eo:Qr,G.map.depthTexture.minFilter=St,G.map.depthTexture.magFilter=St):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=_t,G.map.depthTexture.magFilter=_t);G.camera.updateProjectionMatrix()}const de=G.map.isWebGLCubeRenderTarget?6:1;for(let pe=0;pe<de;pe++){if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,pe),i.clear();else{pe===0&&(i.setRenderTarget(G.map),i.clear());const ve=G.getViewport(pe);r.set(s.x*ve.x,s.y*ve.y,s.x*ve.z,s.y*ve.w),N.viewport(r)}if($.isPointLight){const ve=G.camera,Ve=G.matrix,nt=$.distance||ve.far;nt!==ve.far&&(ve.far=nt,ve.updateProjectionMatrix()),Ii.setFromMatrixPosition($.matrixWorld),ve.position.copy(Ii),Ds.copy(ve.position),Ds.add(Cg[pe]),ve.up.copy(Rg[pe]),ve.lookAt(Ds),ve.updateMatrixWorld(),Ve.makeTranslation(-Ii.x,-Ii.y,-Ii.z),xl.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),G._frustum.setFromProjectionMatrix(xl,ve.coordinateSystem,ve.reversedDepth)}else G.updateMatrices($);n=G.getFrustum(),b(L,v,G.camera,$,this.type)}G.isPointLightShadow!==!0&&this.type===Ni&&E(G,v),G.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(T,C,R)};function E(S,L){const v=e.update(x);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new on(a.x,a.y,{format:Jn,type:Mn})),d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(L,null,v,d,x,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(L,null,v,m,x,null)}function w(S,L,v,T){let C=null;const R=v.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(R!==void 0)C=R;else if(C=v.isPointLight===!0?l:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const N=C.uuid,X=L.uuid;let q=c[N];q===void 0&&(q={},c[N]=q);let z=q[X];z===void 0&&(z=C.clone(),q[X]=z,L.addEventListener("dispose",A)),C=z}if(C.visible=L.visible,C.wireframe=L.wireframe,T===Ni?C.side=L.shadowSide!==null?L.shadowSide:L.side:C.side=L.shadowSide!==null?L.shadowSide:g[L.side],C.alphaMap=L.alphaMap,C.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,C.map=L.map,C.clipShadows=L.clipShadows,C.clippingPlanes=L.clippingPlanes,C.clipIntersection=L.clipIntersection,C.displacementMap=L.displacementMap,C.displacementScale=L.displacementScale,C.displacementBias=L.displacementBias,C.wireframeLinewidth=L.wireframeLinewidth,C.linewidth=L.linewidth,v.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const N=i.properties.get(C);N.light=v}return C}function b(S,L,v,T,C){if(S.visible===!1)return;if(S.layers.test(L.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&C===Ni)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,S.matrixWorld);const X=e.update(S),q=S.material;if(Array.isArray(q)){const z=X.groups;for(let $=0,G=z.length;$<G;$++){const Z=z[$],Q=q[Z.materialIndex];if(Q&&Q.visible){const de=w(S,Q,T,C);S.onBeforeShadow(i,S,L,v,X,de,Z),i.renderBufferDirect(v,null,X,de,S,Z),S.onAfterShadow(i,S,L,v,X,de,Z)}}}else if(q.visible){const z=w(S,q,T,C);S.onBeforeShadow(i,S,L,v,X,z,null),i.renderBufferDirect(v,null,X,z,S,null),S.onAfterShadow(i,S,L,v,X,z,null)}}const N=S.children;for(let X=0,q=N.length;X<q;X++)b(N[X],L,v,T,C)}function A(S){S.target.removeEventListener("dispose",A);for(const v in c){const T=c[v],C=S.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function Fg(i,e){function t(){let P=!1;const ne=new tt;let Y=null;const oe=new tt(0,0,0,0);return{setMask:function(fe){Y!==fe&&!P&&(i.colorMask(fe,fe,fe,fe),Y=fe)},setLocked:function(fe){P=fe},setClear:function(fe,j,be,ye,at){at===!0&&(fe*=ye,j*=ye,be*=ye),ne.set(fe,j,be,ye),oe.equals(ne)===!1&&(i.clearColor(fe,j,be,ye),oe.copy(ne))},reset:function(){P=!1,Y=null,oe.set(-1,0,0,0)}}}function n(){let P=!1,ne=!1,Y=null,oe=null,fe=null;return{setReversed:function(j){if(ne!==j){const be=e.get("EXT_clip_control");j?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),ne=j;const ye=fe;fe=null,this.setClear(ye)}},getReversed:function(){return ne},setTest:function(j){j?ee(i.DEPTH_TEST):Le(i.DEPTH_TEST)},setMask:function(j){Y!==j&&!P&&(i.depthMask(j),Y=j)},setFunc:function(j){if(ne&&(j=lu[j]),oe!==j){switch(j){case er:i.depthFunc(i.NEVER);break;case tr:i.depthFunc(i.ALWAYS);break;case nr:i.depthFunc(i.LESS);break;case _i:i.depthFunc(i.LEQUAL);break;case ir:i.depthFunc(i.EQUAL);break;case ar:i.depthFunc(i.GEQUAL);break;case sr:i.depthFunc(i.GREATER);break;case rr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=j}},setLocked:function(j){P=j},setClear:function(j){fe!==j&&(fe=j,ne&&(j=1-j),i.clearDepth(j))},reset:function(){P=!1,Y=null,oe=null,fe=null,ne=!1}}}function a(){let P=!1,ne=null,Y=null,oe=null,fe=null,j=null,be=null,ye=null,at=null;return{setTest:function(je){P||(je?ee(i.STENCIL_TEST):Le(i.STENCIL_TEST))},setMask:function(je){ne!==je&&!P&&(i.stencilMask(je),ne=je)},setFunc:function(je,Zt,jt){(Y!==je||oe!==Zt||fe!==jt)&&(i.stencilFunc(je,Zt,jt),Y=je,oe=Zt,fe=jt)},setOp:function(je,Zt,jt){(j!==je||be!==Zt||ye!==jt)&&(i.stencilOp(je,Zt,jt),j=je,be=Zt,ye=jt)},setLocked:function(je){P=je},setClear:function(je){at!==je&&(i.clearStencil(je),at=je)},reset:function(){P=!1,ne=null,Y=null,oe=null,fe=null,j=null,be=null,ye=null,at=null}}}const s=new t,r=new n,o=new a,l=new WeakMap,c=new WeakMap;let f={},g={},d={},m=new WeakMap,y=[],x=null,p=!1,u=null,E=null,w=null,b=null,A=null,S=null,L=null,v=new Ie(0,0,0),T=0,C=!1,R=null,N=null,X=null,q=null,z=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Z=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Q)[1]),G=Z>=1):Q.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),G=Z>=2);let de=null,pe={};const ve=i.getParameter(i.SCISSOR_BOX),Ve=i.getParameter(i.VIEWPORT),nt=new tt().fromArray(ve),We=new tt().fromArray(Ve);function J(P,ne,Y,oe){const fe=new Uint8Array(4),j=i.createTexture();i.bindTexture(P,j),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let be=0;be<Y;be++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(ne,0,i.RGBA,1,1,oe,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(ne+be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return j}const ie={};ie[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),ie[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ie[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ee(i.DEPTH_TEST),r.setFunc(_i),dt(!1),ft(So),ee(i.CULL_FACE),$e(bn);function ee(P){f[P]!==!0&&(i.enable(P),f[P]=!0)}function Le(P){f[P]!==!1&&(i.disable(P),f[P]=!1)}function Re(P,ne){return d[P]!==ne?(i.bindFramebuffer(P,ne),d[P]=ne,P===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ne),P===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ne),!0):!1}function Te(P,ne){let Y=y,oe=!1;if(P){Y=m.get(ne),Y===void 0&&(Y=[],m.set(ne,Y));const fe=P.textures;if(Y.length!==fe.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let j=0,be=fe.length;j<be;j++)Y[j]=i.COLOR_ATTACHMENT0+j;Y.length=fe.length,oe=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,oe=!0);oe&&i.drawBuffers(Y)}function ot(P){return x!==P?(i.useProgram(P),x=P,!0):!1}const Be={[Wn]:i.FUNC_ADD,[Pd]:i.FUNC_SUBTRACT,[Fd]:i.FUNC_REVERSE_SUBTRACT};Be[Id]=i.MIN,Be[Dd]=i.MAX;const Ke={[Ud]:i.ZERO,[Nd]:i.ONE,[Bd]:i.SRC_COLOR,[js]:i.SRC_ALPHA,[Vd]:i.SRC_ALPHA_SATURATE,[Hd]:i.DST_COLOR,[kd]:i.DST_ALPHA,[Od]:i.ONE_MINUS_SRC_COLOR,[Qs]:i.ONE_MINUS_SRC_ALPHA,[Gd]:i.ONE_MINUS_DST_COLOR,[zd]:i.ONE_MINUS_DST_ALPHA,[Wd]:i.CONSTANT_COLOR,[$d]:i.ONE_MINUS_CONSTANT_COLOR,[Xd]:i.CONSTANT_ALPHA,[Yd]:i.ONE_MINUS_CONSTANT_ALPHA};function $e(P,ne,Y,oe,fe,j,be,ye,at,je){if(P===bn){p===!0&&(Le(i.BLEND),p=!1);return}if(p===!1&&(ee(i.BLEND),p=!0),P!==Rd){if(P!==u||je!==C){if((E!==Wn||A!==Wn)&&(i.blendEquation(i.FUNC_ADD),E=Wn,A=Wn),je)switch(P){case pi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zs:i.blendFunc(i.ONE,i.ONE);break;case Eo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case To:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ge("WebGLState: Invalid blending: ",P);break}else switch(P){case pi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Eo:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case To:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",P);break}w=null,b=null,S=null,L=null,v.set(0,0,0),T=0,u=P,C=je}return}fe=fe||ne,j=j||Y,be=be||oe,(ne!==E||fe!==A)&&(i.blendEquationSeparate(Be[ne],Be[fe]),E=ne,A=fe),(Y!==w||oe!==b||j!==S||be!==L)&&(i.blendFuncSeparate(Ke[Y],Ke[oe],Ke[j],Ke[be]),w=Y,b=oe,S=j,L=be),(ye.equals(v)===!1||at!==T)&&(i.blendColor(ye.r,ye.g,ye.b,at),v.copy(ye),T=at),u=P,C=!1}function ze(P,ne){P.side===yn?Le(i.CULL_FACE):ee(i.CULL_FACE);let Y=P.side===Rt;ne&&(Y=!Y),dt(Y),P.blending===pi&&P.transparent===!1?$e(bn):$e(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),r.setFunc(P.depthFunc),r.setTest(P.depthTest),r.setMask(P.depthWrite),s.setMask(P.colorWrite);const oe=P.stencilWrite;o.setTest(oe),oe&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),yt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):Le(i.SAMPLE_ALPHA_TO_COVERAGE)}function dt(P){R!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),R=P)}function ft(P){P!==Ad?(ee(i.CULL_FACE),P!==N&&(P===So?i.cullFace(i.BACK):P===Ld?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Le(i.CULL_FACE),N=P}function gt(P){P!==X&&(G&&i.lineWidth(P),X=P)}function yt(P,ne,Y){P?(ee(i.POLYGON_OFFSET_FILL),(q!==ne||z!==Y)&&(q=ne,z=Y,r.getReversed()&&(ne=-ne),i.polygonOffset(ne,Y))):Le(i.POLYGON_OFFSET_FILL)}function it(P){P?ee(i.SCISSOR_TEST):Le(i.SCISSOR_TEST)}function ut(P){P===void 0&&(P=i.TEXTURE0+$-1),de!==P&&(i.activeTexture(P),de=P)}function F(P,ne,Y){Y===void 0&&(de===null?Y=i.TEXTURE0+$-1:Y=de);let oe=pe[Y];oe===void 0&&(oe={type:void 0,texture:void 0},pe[Y]=oe),(oe.type!==P||oe.texture!==ne)&&(de!==Y&&(i.activeTexture(Y),de=Y),i.bindTexture(P,ne||ie[P]),oe.type=P,oe.texture=ne)}function Lt(){const P=pe[de];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Xe(){try{i.compressedTexImage2D(...arguments)}catch(P){Ge("WebGLState:",P)}}function M(){try{i.compressedTexImage3D(...arguments)}catch(P){Ge("WebGLState:",P)}}function h(){try{i.texSubImage2D(...arguments)}catch(P){Ge("WebGLState:",P)}}function D(){try{i.texSubImage3D(...arguments)}catch(P){Ge("WebGLState:",P)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(P){Ge("WebGLState:",P)}}function V(){try{i.compressedTexSubImage3D(...arguments)}catch(P){Ge("WebGLState:",P)}}function te(){try{i.texStorage2D(...arguments)}catch(P){Ge("WebGLState:",P)}}function ae(){try{i.texStorage3D(...arguments)}catch(P){Ge("WebGLState:",P)}}function W(){try{i.texImage2D(...arguments)}catch(P){Ge("WebGLState:",P)}}function K(){try{i.texImage3D(...arguments)}catch(P){Ge("WebGLState:",P)}}function se(P){return g[P]!==void 0?g[P]:i.getParameter(P)}function xe(P,ne){g[P]!==ne&&(i.pixelStorei(P,ne),g[P]=ne)}function le(P){nt.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),nt.copy(P))}function re(P){We.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),We.copy(P))}function Ee(P,ne){let Y=c.get(ne);Y===void 0&&(Y=new WeakMap,c.set(ne,Y));let oe=Y.get(P);oe===void 0&&(oe=i.getUniformBlockIndex(ne,P.name),Y.set(P,oe))}function we(P,ne){const oe=c.get(ne).get(P);l.get(ne)!==oe&&(i.uniformBlockBinding(ne,oe,P.__bindingPointIndex),l.set(ne,oe))}function Pe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},g={},de=null,pe={},d={},m=new WeakMap,y=[],x=null,p=!1,u=null,E=null,w=null,b=null,A=null,S=null,L=null,v=new Ie(0,0,0),T=0,C=!1,R=null,N=null,X=null,q=null,z=null,nt.set(0,0,i.canvas.width,i.canvas.height),We.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ee,disable:Le,bindFramebuffer:Re,drawBuffers:Te,useProgram:ot,setBlending:$e,setMaterial:ze,setFlipSided:dt,setCullFace:ft,setLineWidth:gt,setPolygonOffset:yt,setScissorTest:it,activeTexture:ut,bindTexture:F,unbindTexture:Lt,compressedTexImage2D:Xe,compressedTexImage3D:M,texImage2D:W,texImage3D:K,pixelStorei:xe,getParameter:se,updateUBOMapping:Ee,uniformBlockBinding:we,texStorage2D:te,texStorage3D:ae,texSubImage2D:h,texSubImage3D:D,compressedTexSubImage2D:k,compressedTexSubImage3D:V,scissor:le,viewport:re,reset:Pe}}function Ig(i,e,t,n,a,s,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,f=new WeakMap,g=new Set;let d;const m=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(M,h){return y?new OffscreenCanvas(M,h):ka("canvas")}function p(M,h,D){let k=1;const V=Xe(M);if((V.width>D||V.height>D)&&(k=D/Math.max(V.width,V.height)),k<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const te=Math.floor(k*V.width),ae=Math.floor(k*V.height);d===void 0&&(d=x(te,ae));const W=h?x(te,ae):d;return W.width=te,W.height=ae,W.getContext("2d").drawImage(M,0,0,te,ae),Ae("WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+te+"x"+ae+")."),W}else return"data"in M&&Ae("WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),M;return M}function u(M){return M.generateMipmaps}function E(M){i.generateMipmap(M)}function w(M){return M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?i.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(M,h,D,k,V,te=!1){if(M!==null){if(i[M]!==void 0)return i[M];Ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let ae;k&&(ae=e.get("EXT_texture_norm16"),ae||Ae("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let W=h;if(h===i.RED&&(D===i.FLOAT&&(W=i.R32F),D===i.HALF_FLOAT&&(W=i.R16F),D===i.UNSIGNED_BYTE&&(W=i.R8),D===i.UNSIGNED_SHORT&&ae&&(W=ae.R16_EXT),D===i.SHORT&&ae&&(W=ae.R16_SNORM_EXT)),h===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&(W=i.R8UI),D===i.UNSIGNED_SHORT&&(W=i.R16UI),D===i.UNSIGNED_INT&&(W=i.R32UI),D===i.BYTE&&(W=i.R8I),D===i.SHORT&&(W=i.R16I),D===i.INT&&(W=i.R32I)),h===i.RG&&(D===i.FLOAT&&(W=i.RG32F),D===i.HALF_FLOAT&&(W=i.RG16F),D===i.UNSIGNED_BYTE&&(W=i.RG8),D===i.UNSIGNED_SHORT&&ae&&(W=ae.RG16_EXT),D===i.SHORT&&ae&&(W=ae.RG16_SNORM_EXT)),h===i.RG_INTEGER&&(D===i.UNSIGNED_BYTE&&(W=i.RG8UI),D===i.UNSIGNED_SHORT&&(W=i.RG16UI),D===i.UNSIGNED_INT&&(W=i.RG32UI),D===i.BYTE&&(W=i.RG8I),D===i.SHORT&&(W=i.RG16I),D===i.INT&&(W=i.RG32I)),h===i.RGB_INTEGER&&(D===i.UNSIGNED_BYTE&&(W=i.RGB8UI),D===i.UNSIGNED_SHORT&&(W=i.RGB16UI),D===i.UNSIGNED_INT&&(W=i.RGB32UI),D===i.BYTE&&(W=i.RGB8I),D===i.SHORT&&(W=i.RGB16I),D===i.INT&&(W=i.RGB32I)),h===i.RGBA_INTEGER&&(D===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),D===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),D===i.UNSIGNED_INT&&(W=i.RGBA32UI),D===i.BYTE&&(W=i.RGBA8I),D===i.SHORT&&(W=i.RGBA16I),D===i.INT&&(W=i.RGBA32I)),h===i.RGB&&(D===i.UNSIGNED_SHORT&&ae&&(W=ae.RGB16_EXT),D===i.SHORT&&ae&&(W=ae.RGB16_SNORM_EXT),D===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),D===i.UNSIGNED_INT_10F_11F_11F_REV&&(W=i.R11F_G11F_B10F)),h===i.RGBA){const K=te?Oa:Oe.getTransfer(V);D===i.FLOAT&&(W=i.RGBA32F),D===i.HALF_FLOAT&&(W=i.RGBA16F),D===i.UNSIGNED_BYTE&&(W=K===Ye?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT&&ae&&(W=ae.RGBA16_EXT),D===i.SHORT&&ae&&(W=ae.RGBA16_SNORM_EXT),D===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function A(M,h){let D;return M?h===null||h===cn||h===Vi?D=i.DEPTH24_STENCIL8:h===an?D=i.DEPTH32F_STENCIL8:h===Gi&&(D=i.DEPTH24_STENCIL8,Ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):h===null||h===cn||h===Vi?D=i.DEPTH_COMPONENT24:h===an?D=i.DEPTH_COMPONENT32F:h===Gi&&(D=i.DEPTH_COMPONENT16),D}function S(M,h){return u(M)===!0||M.isFramebufferTexture&&M.minFilter!==_t&&M.minFilter!==St?Math.log2(Math.max(h.width,h.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?h.mipmaps.length:1}function L(M){const h=M.target;h.removeEventListener("dispose",L),T(h),h.isVideoTexture&&f.delete(h),h.isHTMLTexture&&g.delete(h)}function v(M){const h=M.target;h.removeEventListener("dispose",v),R(h)}function T(M){const h=n.get(M);if(h.__webglInit===void 0)return;const D=M.source,k=m.get(D);if(k){const V=k[h.__cacheKey];V.usedTimes--,V.usedTimes===0&&C(M),Object.keys(k).length===0&&m.delete(D)}n.remove(M)}function C(M){const h=n.get(M);i.deleteTexture(h.__webglTexture);const D=M.source,k=m.get(D);delete k[h.__cacheKey],r.memory.textures--}function R(M){const h=n.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),n.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(h.__webglFramebuffer[k]))for(let V=0;V<h.__webglFramebuffer[k].length;V++)i.deleteFramebuffer(h.__webglFramebuffer[k][V]);else i.deleteFramebuffer(h.__webglFramebuffer[k]);h.__webglDepthbuffer&&i.deleteRenderbuffer(h.__webglDepthbuffer[k])}else{if(Array.isArray(h.__webglFramebuffer))for(let k=0;k<h.__webglFramebuffer.length;k++)i.deleteFramebuffer(h.__webglFramebuffer[k]);else i.deleteFramebuffer(h.__webglFramebuffer);if(h.__webglDepthbuffer&&i.deleteRenderbuffer(h.__webglDepthbuffer),h.__webglMultisampledFramebuffer&&i.deleteFramebuffer(h.__webglMultisampledFramebuffer),h.__webglColorRenderbuffer)for(let k=0;k<h.__webglColorRenderbuffer.length;k++)h.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(h.__webglColorRenderbuffer[k]);h.__webglDepthRenderbuffer&&i.deleteRenderbuffer(h.__webglDepthRenderbuffer)}const D=M.textures;for(let k=0,V=D.length;k<V;k++){const te=n.get(D[k]);te.__webglTexture&&(i.deleteTexture(te.__webglTexture),r.memory.textures--),n.remove(D[k])}n.remove(M)}let N=0;function X(){N=0}function q(){return N}function z(M){N=M}function $(){const M=N;return M>=a.maxTextures&&Ae("WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+a.maxTextures),N+=1,M}function G(M){const h=[];return h.push(M.wrapS),h.push(M.wrapT),h.push(M.wrapR||0),h.push(M.magFilter),h.push(M.minFilter),h.push(M.anisotropy),h.push(M.internalFormat),h.push(M.format),h.push(M.type),h.push(M.generateMipmaps),h.push(M.premultiplyAlpha),h.push(M.flipY),h.push(M.unpackAlignment),h.push(M.colorSpace),h.join()}function Z(M,h){const D=n.get(M);if(M.isVideoTexture&&F(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&D.__version!==M.version){const k=M.image;if(k===null)Ae("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)Ae("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(D,M,h);return}}else M.isExternalTexture&&(D.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+h)}function Q(M,h){const D=n.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&D.__version!==M.version){Le(D,M,h);return}else M.isExternalTexture&&(D.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+h)}function de(M,h){const D=n.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&D.__version!==M.version){Le(D,M,h);return}t.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+h)}function pe(M,h){const D=n.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&D.__version!==M.version){Re(D,M,h);return}t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+h)}const ve={[or]:i.REPEAT,[_n]:i.CLAMP_TO_EDGE,[lr]:i.MIRRORED_REPEAT},Ve={[_t]:i.NEAREST,[Jd]:i.NEAREST_MIPMAP_NEAREST,[ia]:i.NEAREST_MIPMAP_LINEAR,[St]:i.LINEAR,[ns]:i.LINEAR_MIPMAP_NEAREST,[Yn]:i.LINEAR_MIPMAP_LINEAR},nt={[Qd]:i.NEVER,[au]:i.ALWAYS,[eu]:i.LESS,[Qr]:i.LEQUAL,[tu]:i.EQUAL,[eo]:i.GEQUAL,[nu]:i.GREATER,[iu]:i.NOTEQUAL};function We(M,h){if(h.type===an&&e.has("OES_texture_float_linear")===!1&&(h.magFilter===St||h.magFilter===ns||h.magFilter===ia||h.magFilter===Yn||h.minFilter===St||h.minFilter===ns||h.minFilter===ia||h.minFilter===Yn)&&Ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(M,i.TEXTURE_WRAP_S,ve[h.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,ve[h.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,ve[h.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,Ve[h.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,Ve[h.minFilter]),h.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,nt[h.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(h.magFilter===_t||h.minFilter!==ia&&h.minFilter!==Yn||h.type===an&&e.has("OES_texture_float_linear")===!1)return;if(h.anisotropy>1||n.get(h).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");i.texParameterf(M,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(h.anisotropy,a.getMaxAnisotropy())),n.get(h).__currentAnisotropy=h.anisotropy}}}function J(M,h){let D=!1;M.__webglInit===void 0&&(M.__webglInit=!0,h.addEventListener("dispose",L));const k=h.source;let V=m.get(k);V===void 0&&(V={},m.set(k,V));const te=G(h);if(te!==M.__cacheKey){V[te]===void 0&&(V[te]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,D=!0),V[te].usedTimes++;const ae=V[M.__cacheKey];ae!==void 0&&(V[M.__cacheKey].usedTimes--,ae.usedTimes===0&&C(h)),M.__cacheKey=te,M.__webglTexture=V[te].texture}return D}function ie(M,h,D){return Math.floor(Math.floor(M/D)/h)}function ee(M,h,D,k){const te=M.updateRanges;if(te.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,h.width,h.height,D,k,h.data);else{te.sort((xe,le)=>xe.start-le.start);let ae=0;for(let xe=1;xe<te.length;xe++){const le=te[ae],re=te[xe],Ee=le.start+le.count,we=ie(re.start,h.width,4),Pe=ie(le.start,h.width,4);re.start<=Ee+1&&we===Pe&&ie(re.start+re.count-1,h.width,4)===we?le.count=Math.max(le.count,re.start+re.count-le.start):(++ae,te[ae]=re)}te.length=ae+1;const W=t.getParameter(i.UNPACK_ROW_LENGTH),K=t.getParameter(i.UNPACK_SKIP_PIXELS),se=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,h.width);for(let xe=0,le=te.length;xe<le;xe++){const re=te[xe],Ee=Math.floor(re.start/4),we=Math.ceil(re.count/4),Pe=Ee%h.width,P=Math.floor(Ee/h.width),ne=we,Y=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Pe),t.pixelStorei(i.UNPACK_SKIP_ROWS,P),t.texSubImage2D(i.TEXTURE_2D,0,Pe,P,ne,Y,D,k,h.data)}M.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,W),t.pixelStorei(i.UNPACK_SKIP_PIXELS,K),t.pixelStorei(i.UNPACK_SKIP_ROWS,se)}}function Le(M,h,D){let k=i.TEXTURE_2D;(h.isDataArrayTexture||h.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),h.isData3DTexture&&(k=i.TEXTURE_3D);const V=J(M,h),te=h.source;t.bindTexture(k,M.__webglTexture,i.TEXTURE0+D);const ae=n.get(te);if(te.version!==ae.__version||V===!0){if(t.activeTexture(i.TEXTURE0+D),(typeof ImageBitmap<"u"&&h.image instanceof ImageBitmap)===!1){const Y=Oe.getPrimaries(Oe.workingColorSpace),oe=h.colorSpace===Dn?null:Oe.getPrimaries(h.colorSpace),fe=h.colorSpace===Dn||Y===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,h.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe)}t.pixelStorei(i.UNPACK_ALIGNMENT,h.unpackAlignment);let K=p(h.image,!1,a.maxTextureSize);K=Lt(h,K);const se=s.convert(h.format,h.colorSpace),xe=s.convert(h.type);let le=b(h.internalFormat,se,xe,h.normalized,h.colorSpace,h.isVideoTexture);We(k,h);let re;const Ee=h.mipmaps,we=h.isVideoTexture!==!0,Pe=ae.__version===void 0||V===!0,P=te.dataReady,ne=S(h,K);if(h.isDepthTexture)le=A(h.format===qn,h.type),Pe&&(we?t.texStorage2D(i.TEXTURE_2D,1,le,K.width,K.height):t.texImage2D(i.TEXTURE_2D,0,le,K.width,K.height,0,se,xe,null));else if(h.isDataTexture)if(Ee.length>0){we&&Pe&&t.texStorage2D(i.TEXTURE_2D,ne,le,Ee[0].width,Ee[0].height);for(let Y=0,oe=Ee.length;Y<oe;Y++)re=Ee[Y],we?P&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,re.width,re.height,se,xe,re.data):t.texImage2D(i.TEXTURE_2D,Y,le,re.width,re.height,0,se,xe,re.data);h.generateMipmaps=!1}else we?(Pe&&t.texStorage2D(i.TEXTURE_2D,ne,le,K.width,K.height),P&&ee(h,K,se,xe)):t.texImage2D(i.TEXTURE_2D,0,le,K.width,K.height,0,se,xe,K.data);else if(h.isCompressedTexture)if(h.isCompressedArrayTexture){we&&Pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ne,le,Ee[0].width,Ee[0].height,K.depth);for(let Y=0,oe=Ee.length;Y<oe;Y++)if(re=Ee[Y],h.format!==Kt)if(se!==null)if(we){if(P)if(h.layerUpdates.size>0){const fe=jo(re.width,re.height,h.format,h.type);for(const j of h.layerUpdates){const be=re.data.subarray(j*fe/re.data.BYTES_PER_ELEMENT,(j+1)*fe/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,j,re.width,re.height,1,se,be)}h.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,re.width,re.height,K.depth,se,re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,le,re.width,re.height,K.depth,0,re.data,0,0);else Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?P&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,re.width,re.height,K.depth,se,xe,re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Y,le,re.width,re.height,K.depth,0,se,xe,re.data)}else{we&&Pe&&t.texStorage2D(i.TEXTURE_2D,ne,le,Ee[0].width,Ee[0].height);for(let Y=0,oe=Ee.length;Y<oe;Y++)re=Ee[Y],h.format!==Kt?se!==null?we?P&&t.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,re.width,re.height,se,re.data):t.compressedTexImage2D(i.TEXTURE_2D,Y,le,re.width,re.height,0,re.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?P&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,re.width,re.height,se,xe,re.data):t.texImage2D(i.TEXTURE_2D,Y,le,re.width,re.height,0,se,xe,re.data)}else if(h.isDataArrayTexture)if(we){if(Pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ne,le,K.width,K.height,K.depth),P)if(h.layerUpdates.size>0){const Y=jo(K.width,K.height,h.format,h.type);for(const oe of h.layerUpdates){const fe=K.data.subarray(oe*Y/K.data.BYTES_PER_ELEMENT,(oe+1)*Y/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,oe,K.width,K.height,1,se,xe,fe)}h.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,se,xe,K.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,le,K.width,K.height,K.depth,0,se,xe,K.data);else if(h.isData3DTexture)we?(Pe&&t.texStorage3D(i.TEXTURE_3D,ne,le,K.width,K.height,K.depth),P&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,se,xe,K.data)):t.texImage3D(i.TEXTURE_3D,0,le,K.width,K.height,K.depth,0,se,xe,K.data);else if(h.isFramebufferTexture){if(Pe)if(we)t.texStorage2D(i.TEXTURE_2D,ne,le,K.width,K.height);else{let Y=K.width,oe=K.height;for(let fe=0;fe<ne;fe++)t.texImage2D(i.TEXTURE_2D,fe,le,Y,oe,0,se,xe,null),Y>>=1,oe>>=1}}else if(h.isHTMLTexture){if("texElementImage2D"in i){const Y=i.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),K.parentNode!==Y){Y.appendChild(K),g.add(h),Y.onpaint=oe=>{const fe=oe.changedElements;for(const j of g)fe.includes(j.image)&&(j.needsUpdate=!0)},Y.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{const fe=i.RGBA,j=i.RGBA,be=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,fe,j,be,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ee.length>0){if(we&&Pe){const Y=Xe(Ee[0]);t.texStorage2D(i.TEXTURE_2D,ne,le,Y.width,Y.height)}for(let Y=0,oe=Ee.length;Y<oe;Y++)re=Ee[Y],we?P&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,se,xe,re):t.texImage2D(i.TEXTURE_2D,Y,le,se,xe,re);h.generateMipmaps=!1}else if(we){if(Pe){const Y=Xe(K);t.texStorage2D(i.TEXTURE_2D,ne,le,Y.width,Y.height)}P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,se,xe,K)}else t.texImage2D(i.TEXTURE_2D,0,le,se,xe,K);u(h)&&E(k),ae.__version=te.version,h.onUpdate&&h.onUpdate(h)}M.__version=h.version}function Re(M,h,D){if(h.image.length!==6)return;const k=J(M,h),V=h.source;t.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+D);const te=n.get(V);if(V.version!==te.__version||k===!0){t.activeTexture(i.TEXTURE0+D);const ae=Oe.getPrimaries(Oe.workingColorSpace),W=h.colorSpace===Dn?null:Oe.getPrimaries(h.colorSpace),K=h.colorSpace===Dn||ae===W?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,h.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,h.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const se=h.isCompressedTexture||h.image[0].isCompressedTexture,xe=h.image[0]&&h.image[0].isDataTexture,le=[];for(let j=0;j<6;j++)!se&&!xe?le[j]=p(h.image[j],!0,a.maxCubemapSize):le[j]=xe?h.image[j].image:h.image[j],le[j]=Lt(h,le[j]);const re=le[0],Ee=s.convert(h.format,h.colorSpace),we=s.convert(h.type),Pe=b(h.internalFormat,Ee,we,h.normalized,h.colorSpace),P=h.isVideoTexture!==!0,ne=te.__version===void 0||k===!0,Y=V.dataReady;let oe=S(h,re);We(i.TEXTURE_CUBE_MAP,h);let fe;if(se){P&&ne&&t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,Pe,re.width,re.height);for(let j=0;j<6;j++){fe=le[j].mipmaps;for(let be=0;be<fe.length;be++){const ye=fe[be];h.format!==Kt?Ee!==null?P?Y&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,be,0,0,ye.width,ye.height,Ee,ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,be,Pe,ye.width,ye.height,0,ye.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,be,0,0,ye.width,ye.height,Ee,we,ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,be,Pe,ye.width,ye.height,0,Ee,we,ye.data)}}}else{if(fe=h.mipmaps,P&&ne){fe.length>0&&oe++;const j=Xe(le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,Pe,j.width,j.height)}for(let j=0;j<6;j++)if(xe){P?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,le[j].width,le[j].height,Ee,we,le[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Pe,le[j].width,le[j].height,0,Ee,we,le[j].data);for(let be=0;be<fe.length;be++){const at=fe[be].image[j].image;P?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,be+1,0,0,at.width,at.height,Ee,we,at.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,be+1,Pe,at.width,at.height,0,Ee,we,at.data)}}else{P?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ee,we,le[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Pe,Ee,we,le[j]);for(let be=0;be<fe.length;be++){const ye=fe[be];P?Y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,be+1,0,0,Ee,we,ye.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,be+1,Pe,Ee,we,ye.image[j])}}}u(h)&&E(i.TEXTURE_CUBE_MAP),te.__version=V.version,h.onUpdate&&h.onUpdate(h)}M.__version=h.version}function Te(M,h,D,k,V,te){const ae=s.convert(D.format,D.colorSpace),W=s.convert(D.type),K=b(D.internalFormat,ae,W,D.normalized,D.colorSpace),se=n.get(h),xe=n.get(D);if(xe.__renderTarget=h,!se.__hasExternalTextures){const le=Math.max(1,h.width>>te),re=Math.max(1,h.height>>te);V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?t.texImage3D(V,te,K,le,re,h.depth,0,ae,W,null):t.texImage2D(V,te,K,le,re,0,ae,W,null)}t.bindFramebuffer(i.FRAMEBUFFER,M),ut(h)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,V,xe.__webglTexture,0,it(h)):(V===i.TEXTURE_2D||V>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,V,xe.__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(M,h,D){if(i.bindRenderbuffer(i.RENDERBUFFER,M),h.depthBuffer){const k=h.depthTexture,V=k&&k.isDepthTexture?k.type:null,te=A(h.stencilBuffer,V),ae=h.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ut(h)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it(h),te,h.width,h.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,it(h),te,h.width,h.height):i.renderbufferStorage(i.RENDERBUFFER,te,h.width,h.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,M)}else{const k=h.textures;for(let V=0;V<k.length;V++){const te=k[V],ae=s.convert(te.format,te.colorSpace),W=s.convert(te.type),K=b(te.internalFormat,ae,W,te.normalized,te.colorSpace);ut(h)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it(h),K,h.width,h.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,it(h),K,h.width,h.height):i.renderbufferStorage(i.RENDERBUFFER,K,h.width,h.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Be(M,h,D){const k=h.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,M),!(h.depthTexture&&h.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const V=n.get(h.depthTexture);if(V.__renderTarget=h,(!V.__webglTexture||h.depthTexture.image.width!==h.width||h.depthTexture.image.height!==h.height)&&(h.depthTexture.image.width=h.width,h.depthTexture.image.height=h.height,h.depthTexture.needsUpdate=!0),k){if(V.__webglInit===void 0&&(V.__webglInit=!0,h.depthTexture.addEventListener("dispose",L)),V.__webglTexture===void 0){V.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),We(i.TEXTURE_CUBE_MAP,h.depthTexture);const se=s.convert(h.depthTexture.format),xe=s.convert(h.depthTexture.type);let le;h.depthTexture.format===Sn?le=i.DEPTH_COMPONENT24:h.depthTexture.format===qn&&(le=i.DEPTH24_STENCIL8);for(let re=0;re<6;re++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,le,h.width,h.height,0,se,xe,null)}}else Z(h.depthTexture,0);const te=V.__webglTexture,ae=it(h),W=k?i.TEXTURE_CUBE_MAP_POSITIVE_X+D:i.TEXTURE_2D,K=h.depthTexture.format===qn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(h.depthTexture.format===Sn)ut(h)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,W,te,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,K,W,te,0);else if(h.depthTexture.format===qn)ut(h)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,W,te,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,K,W,te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ke(M){const h=n.get(M),D=M.isWebGLCubeRenderTarget===!0;if(h.__boundDepthTexture!==M.depthTexture){const k=M.depthTexture;if(h.__depthDisposeCallback&&h.__depthDisposeCallback(),k){const V=()=>{delete h.__boundDepthTexture,delete h.__depthDisposeCallback,k.removeEventListener("dispose",V)};k.addEventListener("dispose",V),h.__depthDisposeCallback=V}h.__boundDepthTexture=k}if(M.depthTexture&&!h.__autoAllocateDepthBuffer)if(D)for(let k=0;k<6;k++)Be(h.__webglFramebuffer[k],M,k);else{const k=M.texture.mipmaps;k&&k.length>0?Be(h.__webglFramebuffer[0],M,0):Be(h.__webglFramebuffer,M,0)}else if(D){h.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(i.FRAMEBUFFER,h.__webglFramebuffer[k]),h.__webglDepthbuffer[k]===void 0)h.__webglDepthbuffer[k]=i.createRenderbuffer(),ot(h.__webglDepthbuffer[k],M,!1);else{const V=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=h.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,V,i.RENDERBUFFER,te)}}else{const k=M.texture.mipmaps;if(k&&k.length>0?t.bindFramebuffer(i.FRAMEBUFFER,h.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,h.__webglFramebuffer),h.__webglDepthbuffer===void 0)h.__webglDepthbuffer=i.createRenderbuffer(),ot(h.__webglDepthbuffer,M,!1);else{const V=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=h.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,V,i.RENDERBUFFER,te)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function $e(M,h,D){const k=n.get(M);h!==void 0&&Te(k.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&Ke(M)}function ze(M){const h=M.texture,D=n.get(M),k=n.get(h);M.addEventListener("dispose",v);const V=M.textures,te=M.isWebGLCubeRenderTarget===!0,ae=V.length>1;if(ae||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=h.version,r.memory.textures++),te){D.__webglFramebuffer=[];for(let W=0;W<6;W++)if(h.mipmaps&&h.mipmaps.length>0){D.__webglFramebuffer[W]=[];for(let K=0;K<h.mipmaps.length;K++)D.__webglFramebuffer[W][K]=i.createFramebuffer()}else D.__webglFramebuffer[W]=i.createFramebuffer()}else{if(h.mipmaps&&h.mipmaps.length>0){D.__webglFramebuffer=[];for(let W=0;W<h.mipmaps.length;W++)D.__webglFramebuffer[W]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(ae)for(let W=0,K=V.length;W<K;W++){const se=n.get(V[W]);se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture(),r.memory.textures++)}if(M.samples>0&&ut(M)===!1){D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let W=0;W<V.length;W++){const K=V[W];D.__webglColorRenderbuffer[W]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[W]);const se=s.convert(K.format,K.colorSpace),xe=s.convert(K.type),le=b(K.internalFormat,se,xe,K.normalized,K.colorSpace,M.isXRRenderTarget===!0),re=it(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,re,le,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+W,i.RENDERBUFFER,D.__webglColorRenderbuffer[W])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(D.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),We(i.TEXTURE_CUBE_MAP,h);for(let W=0;W<6;W++)if(h.mipmaps&&h.mipmaps.length>0)for(let K=0;K<h.mipmaps.length;K++)Te(D.__webglFramebuffer[W][K],M,h,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+W,K);else Te(D.__webglFramebuffer[W],M,h,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);u(h)&&E(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let W=0,K=V.length;W<K;W++){const se=V[W],xe=n.get(se);let le=i.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(le=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,xe.__webglTexture),We(le,se),Te(D.__webglFramebuffer,M,se,i.COLOR_ATTACHMENT0+W,le,0),u(se)&&E(le)}t.unbindTexture()}else{let W=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(W=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(W,k.__webglTexture),We(W,h),h.mipmaps&&h.mipmaps.length>0)for(let K=0;K<h.mipmaps.length;K++)Te(D.__webglFramebuffer[K],M,h,i.COLOR_ATTACHMENT0,W,K);else Te(D.__webglFramebuffer,M,h,i.COLOR_ATTACHMENT0,W,0);u(h)&&E(W),t.unbindTexture()}M.depthBuffer&&Ke(M)}function dt(M){const h=M.textures;for(let D=0,k=h.length;D<k;D++){const V=h[D];if(u(V)){const te=w(M),ae=n.get(V).__webglTexture;t.bindTexture(te,ae),E(te),t.unbindTexture()}}}const ft=[],gt=[];function yt(M){if(M.samples>0){if(ut(M)===!1){const h=M.textures,D=M.width,k=M.height;let V=i.COLOR_BUFFER_BIT;const te=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=n.get(M),W=h.length>1;if(W)for(let se=0;se<h.length;se++)t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const K=M.texture.mipmaps;K&&K.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let se=0;se<h.length;se++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(V|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(V|=i.STENCIL_BUFFER_BIT)),W){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ae.__webglColorRenderbuffer[se]);const xe=n.get(h[se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,xe,0)}i.blitFramebuffer(0,0,D,k,0,0,D,k,V,i.NEAREST),l===!0&&(ft.length=0,gt.length=0,ft.push(i.COLOR_ATTACHMENT0+se),M.depthBuffer&&M.resolveDepthBuffer===!1&&(ft.push(te),gt.push(te),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,gt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ft))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),W)for(let se=0;se<h.length;se++){t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,ae.__webglColorRenderbuffer[se]);const xe=n.get(h[se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,xe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const h=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[h])}}}function it(M){return Math.min(a.maxSamples,M.samples)}function ut(M){const h=n.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&h.__useRenderToTexture!==!1}function F(M){const h=r.render.frame;f.get(M)!==h&&(f.set(M,h),M.update())}function Lt(M,h){const D=M.colorSpace,k=M.format,V=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||D!==Ba&&D!==Dn&&(Oe.getTransfer(D)===Ye?(k!==Kt||V!==Nt)&&Ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",D)),h}function Xe(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=X,this.getTextureUnits=q,this.setTextureUnits=z,this.setTexture2D=Z,this.setTexture2DArray=Q,this.setTexture3D=de,this.setTextureCube=pe,this.rebindTextures=$e,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=ut,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Dg(i,e){function t(n,a=Dn){let s;const r=Oe.getTransfer(a);if(n===Nt)return i.UNSIGNED_BYTE;if(n===qr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Kr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ac)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===sc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===nc)return i.BYTE;if(n===ic)return i.SHORT;if(n===Gi)return i.UNSIGNED_SHORT;if(n===Yr)return i.INT;if(n===cn)return i.UNSIGNED_INT;if(n===an)return i.FLOAT;if(n===Mn)return i.HALF_FLOAT;if(n===rc)return i.ALPHA;if(n===oc)return i.RGB;if(n===Kt)return i.RGBA;if(n===Sn)return i.DEPTH_COMPONENT;if(n===qn)return i.DEPTH_STENCIL;if(n===lc)return i.RED;if(n===Jr)return i.RED_INTEGER;if(n===Jn)return i.RG;if(n===Zr)return i.RG_INTEGER;if(n===jr)return i.RGBA_INTEGER;if(n===Ca||n===Ra||n===Pa||n===Fa)if(r===Ye)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ca)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ca)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ra)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===cr||n===dr||n===ur||n===hr)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===cr)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===dr)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ur)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===hr)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fr||n===pr||n===mr||n===gr||n===vr||n===Ua||n===yr)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===fr||n===pr)return r===Ye?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===mr)return r===Ye?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===gr)return s.COMPRESSED_R11_EAC;if(n===vr)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Ua)return s.COMPRESSED_RG11_EAC;if(n===yr)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===_r||n===br||n===xr||n===Mr||n===Sr||n===Er||n===Tr||n===wr||n===Ar||n===Lr||n===Cr||n===Rr||n===Pr||n===Fr)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===_r)return r===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===br)return r===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xr)return r===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Mr)return r===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Sr)return r===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Er)return r===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Tr)return r===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wr)return r===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ar)return r===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Lr)return r===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Cr)return r===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Rr)return r===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Pr)return r===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fr)return r===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ir||n===Dr||n===Ur)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ir)return r===Ye?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Dr)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ur)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nr||n===Br||n===Na||n===Or)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Nr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Br)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Na)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Or)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Ug=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ng=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Bg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new yc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new dn({vertexShader:Ug,fragmentShader:Ng,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Bt(new Xa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Og extends Zn{constructor(e,t){super();const n=this;let a=null,s=1,r=null,o="local-floor",l=1,c=null,f=null,g=null,d=null,m=null,y=null;const x=typeof XRWebGLBinding<"u",p=new Bg,u={},E=t.getContextAttributes();let w=null,b=null;const A=[],S=[],L=new Ne;let v=null;const T=new Ut;T.viewport=new tt;const C=new Ut;C.viewport=new tt;const R=[T,C],N=new Yu;let X=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ie=A[J];return ie===void 0&&(ie=new ds,A[J]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(J){let ie=A[J];return ie===void 0&&(ie=new ds,A[J]=ie),ie.getGripSpace()},this.getHand=function(J){let ie=A[J];return ie===void 0&&(ie=new ds,A[J]=ie),ie.getHandSpace()};function z(J){const ie=S.indexOf(J.inputSource);if(ie===-1)return;const ee=A[ie];ee!==void 0&&(ee.update(J.inputSource,J.frame,c||r),ee.dispatchEvent({type:J.type,data:J.inputSource}))}function $(){a.removeEventListener("select",z),a.removeEventListener("selectstart",z),a.removeEventListener("selectend",z),a.removeEventListener("squeeze",z),a.removeEventListener("squeezestart",z),a.removeEventListener("squeezeend",z),a.removeEventListener("end",$),a.removeEventListener("inputsourceschange",G);for(let J=0;J<A.length;J++){const ie=S[J];ie!==null&&(S[J]=null,A[J].disconnect(ie))}X=null,q=null,p.reset();for(const J in u)delete u[J];e.setRenderTarget(w),m=null,d=null,g=null,a=null,b=null,We.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&Ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return g===null&&x&&(g=new XRWebGLBinding(a,t)),g},this.getFrame=function(){return y},this.getSession=function(){return a},this.setSession=async function(J){if(a=J,a!==null){if(w=e.getRenderTarget(),a.addEventListener("select",z),a.addEventListener("selectstart",z),a.addEventListener("selectend",z),a.addEventListener("squeeze",z),a.addEventListener("squeezestart",z),a.addEventListener("squeezeend",z),a.addEventListener("end",$),a.addEventListener("inputsourceschange",G),E.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(L),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ee=null,Le=null,Re=null;E.depth&&(Re=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=E.stencil?qn:Sn,Le=E.stencil?Vi:cn);const Te={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:s};g=this.getBinding(),d=g.createProjectionLayer(Te),a.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new on(d.textureWidth,d.textureHeight,{format:Kt,type:Nt,depthTexture:new xi(d.textureWidth,d.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ee={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(a,t,ee),a.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new on(m.framebufferWidth,m.framebufferHeight,{format:Kt,type:Nt,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await a.requestReferenceSpace(o),We.setContext(a),We.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function G(J){for(let ie=0;ie<J.removed.length;ie++){const ee=J.removed[ie],Le=S.indexOf(ee);Le>=0&&(S[Le]=null,A[Le].disconnect(ee))}for(let ie=0;ie<J.added.length;ie++){const ee=J.added[ie];let Le=S.indexOf(ee);if(Le===-1){for(let Te=0;Te<A.length;Te++)if(Te>=S.length){S.push(ee),Le=Te;break}else if(S[Te]===null){S[Te]=ee,Le=Te;break}if(Le===-1)break}const Re=A[Le];Re&&Re.connect(ee)}}const Z=new U,Q=new U;function de(J,ie,ee){Z.setFromMatrixPosition(ie.matrixWorld),Q.setFromMatrixPosition(ee.matrixWorld);const Le=Z.distanceTo(Q),Re=ie.projectionMatrix.elements,Te=ee.projectionMatrix.elements,ot=Re[14]/(Re[10]-1),Be=Re[14]/(Re[10]+1),Ke=(Re[9]+1)/Re[5],$e=(Re[9]-1)/Re[5],ze=(Re[8]-1)/Re[0],dt=(Te[8]+1)/Te[0],ft=ot*ze,gt=ot*dt,yt=Le/(-ze+dt),it=yt*-ze;if(ie.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(it),J.translateZ(yt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Re[10]===-1)J.projectionMatrix.copy(ie.projectionMatrix),J.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const ut=ot+yt,F=Be+yt,Lt=ft-it,Xe=gt+(Le-it),M=Ke*Be/F*ut,h=$e*Be/F*ut;J.projectionMatrix.makePerspective(Lt,Xe,M,h,ut,F),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function pe(J,ie){ie===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ie.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(a===null)return;let ie=J.near,ee=J.far;p.texture!==null&&(p.depthNear>0&&(ie=p.depthNear),p.depthFar>0&&(ee=p.depthFar)),N.near=C.near=T.near=ie,N.far=C.far=T.far=ee,(X!==N.near||q!==N.far)&&(a.updateRenderState({depthNear:N.near,depthFar:N.far}),X=N.near,q=N.far),N.layers.mask=J.layers.mask|6,T.layers.mask=N.layers.mask&-5,C.layers.mask=N.layers.mask&-3;const Le=J.parent,Re=N.cameras;pe(N,Le);for(let Te=0;Te<Re.length;Te++)pe(Re[Te],Le);Re.length===2?de(N,T,C):N.projectionMatrix.copy(T.projectionMatrix),ve(J,N,Le)};function ve(J,ie,ee){ee===null?J.matrix.copy(ie.matrixWorld):(J.matrix.copy(ee.matrixWorld),J.matrix.invert(),J.matrix.multiply(ie.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ie.projectionMatrix),J.projectionMatrixInverse.copy(ie.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=zr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(N)},this.getCameraTexture=function(J){return u[J]};let Ve=null;function nt(J,ie){if(f=ie.getViewerPose(c||r),y=ie,f!==null){const ee=f.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let Le=!1;ee.length!==N.cameras.length&&(N.cameras.length=0,Le=!0);for(let Be=0;Be<ee.length;Be++){const Ke=ee[Be];let $e=null;if(m!==null)$e=m.getViewport(Ke);else{const dt=g.getViewSubImage(d,Ke);$e=dt.viewport,Be===0&&(e.setRenderTargetTextures(b,dt.colorTexture,dt.depthStencilTexture),e.setRenderTarget(b))}let ze=R[Be];ze===void 0&&(ze=new Ut,ze.layers.enable(Be),ze.viewport=new tt,R[Be]=ze),ze.matrix.fromArray(Ke.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Ke.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set($e.x,$e.y,$e.width,$e.height),Be===0&&(N.matrix.copy(ze.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Le===!0&&N.cameras.push(ze)}const Re=a.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&x){g=n.getBinding();const Be=g.getDepthInformation(ee[0]);Be&&Be.isValid&&Be.texture&&p.init(Be,a.renderState)}if(Re&&Re.includes("camera-access")&&x){e.state.unbindTexture(),g=n.getBinding();for(let Be=0;Be<ee.length;Be++){const Ke=ee[Be].camera;if(Ke){let $e=u[Ke];$e||($e=new yc,u[Ke]=$e);const ze=g.getCameraImage(Ke);$e.sourceTexture=ze}}}}for(let ee=0;ee<A.length;ee++){const Le=S[ee],Re=A[ee];Le!==null&&Re!==void 0&&Re.update(Le,ie,c||r)}Ve&&Ve(J,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),y=null}const We=new Ec;We.setAnimationLoop(nt),this.setAnimationLoop=function(J){Ve=J},this.dispose=function(){}}}const kg=new et,Pc=new Ce;Pc.set(-1,0,0,0,1,0,0,0,1);function zg(i,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,_c(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function a(p,u,E,w,b){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?s(p,u):u.isMeshLambertMaterial?(s(p,u),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(s(p,u),g(p,u)):u.isMeshPhongMaterial?(s(p,u),f(p,u),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(s(p,u),d(p,u),u.isMeshPhysicalMaterial&&m(p,u,b)):u.isMeshMatcapMaterial?(s(p,u),y(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),x(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(r(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,E,w):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Rt&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Rt&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const E=e.get(u),w=E.envMap,b=E.envMapRotation;w&&(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(kg.makeRotationFromEuler(b)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Pc),p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function r(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,E,w){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*E,p.scale.value=w*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function f(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function g(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,E){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Rt&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function y(p,u){u.matcap&&(p.matcap.value=u.matcap)}function x(p,u){const E=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function Hg(i,e,t,n){let a={},s={},r=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,A){const S=A.program;n.uniformBlockBinding(b,S)}function c(b,A){let S=a[b.id];S===void 0&&(p(b),S=f(b),a[b.id]=S,b.addEventListener("dispose",E));const L=A.program;n.updateUBOMapping(b,L);const v=e.render.frame;s[b.id]!==v&&(d(b),s[b.id]=v)}function f(b){const A=g();b.__bindingPointIndex=A;const S=i.createBuffer(),L=b.__size,v=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,L,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,S),S}function g(){for(let b=0;b<o;b++)if(r.indexOf(b)===-1)return r.push(b),b;return Ge("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const A=a[b.id],S=b.uniforms,L=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let v=0,T=S.length;v<T;v++){const C=S[v];if(Array.isArray(C))for(let R=0,N=C.length;R<N;R++)m(C[R],v,R,L);else m(C,v,0,L)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,A,S,L){if(x(b,A,S,L)===!0){const v=b.__offset,T=b.value;if(Array.isArray(T)){let C=0;for(let R=0;R<T.length;R++){const N=T[R],X=u(N);y(N,b.__data,C),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(C+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else y(T,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,b.__data)}}function y(b,A,S){typeof b=="number"||typeof b=="boolean"?A[0]=b:b.isMatrix3?(A[0]=b.elements[0],A[1]=b.elements[1],A[2]=b.elements[2],A[3]=0,A[4]=b.elements[3],A[5]=b.elements[4],A[6]=b.elements[5],A[7]=0,A[8]=b.elements[6],A[9]=b.elements[7],A[10]=b.elements[8],A[11]=0):ArrayBuffer.isView(b)?A.set(new b.constructor(b.buffer,b.byteOffset,A.length)):b.toArray(A,S)}function x(b,A,S,L){const v=b.value,T=A+"_"+S;if(L[T]===void 0)return typeof v=="number"||typeof v=="boolean"?L[T]=v:ArrayBuffer.isView(v)?L[T]=v.slice():L[T]=v.clone(),!0;{const C=L[T];if(typeof v=="number"||typeof v=="boolean"){if(C!==v)return L[T]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(C.equals(v)===!1)return C.copy(v),!0}}return!1}function p(b){const A=b.uniforms;let S=0;const L=16;for(let T=0,C=A.length;T<C;T++){const R=Array.isArray(A[T])?A[T]:[A[T]];for(let N=0,X=R.length;N<X;N++){const q=R[N],z=Array.isArray(q.value)?q.value:[q.value];for(let $=0,G=z.length;$<G;$++){const Z=z[$],Q=u(Z),de=S%L,pe=de%Q.boundary,ve=de+pe;S+=pe,ve!==0&&L-ve<Q.storage&&(S+=L-ve),q.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=S,S+=Q.storage}}}const v=S%L;return v>0&&(S+=L-v),b.__size=S,b.__cache={},this}function u(b){const A={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(A.boundary=4,A.storage=4):b.isVector2?(A.boundary=8,A.storage=8):b.isVector3||b.isColor?(A.boundary=16,A.storage=12):b.isVector4?(A.boundary=16,A.storage=16):b.isMatrix3?(A.boundary=48,A.storage=48):b.isMatrix4?(A.boundary=64,A.storage=64):b.isTexture?Ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(A.boundary=16,A.storage=b.byteLength):Ae("WebGLRenderer: Unsupported uniform value type.",b),A}function E(b){const A=b.target;A.removeEventListener("dispose",E);const S=r.indexOf(A.__bindingPointIndex);r.splice(S,1),i.deleteBuffer(a[A.id]),delete a[A.id],delete s[A.id]}function w(){for(const b in a)i.deleteBuffer(a[b]);r=[],a={},s={}}return{bind:l,update:c,dispose:w}}const Gg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let tn=null;function Vg(){return tn===null&&(tn=new Cu(Gg,16,16,Jn,Mn),tn.name="DFG_LUT",tn.minFilter=St,tn.magFilter=St,tn.wrapS=_n,tn.wrapT=_n,tn.generateMipmaps=!1,tn.needsUpdate=!0),tn}class Wg{constructor(e={}){const{canvas:t=ru(),context:n=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:d=!1,outputBufferType:m=Nt}=e;this.isWebGLRenderer=!0;let y;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=n.getContextAttributes().alpha}else y=r;const x=m,p=new Set([jr,Zr,Jr]),u=new Set([Nt,cn,Gi,Vi,qr,Kr]),E=new Uint32Array(4),w=new Int32Array(4),b=new U;let A=null,S=null;const L=[],v=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let R=!1,N=null,X=null,q=null,z=null;this._outputColorSpace=Gt;let $=0,G=0,Z=null,Q=-1,de=null;const pe=new tt,ve=new tt;let Ve=null;const nt=new Ie(0);let We=0,J=t.width,ie=t.height,ee=1,Le=null,Re=null;const Te=new tt(0,0,J,ie),ot=new tt(0,0,J,ie);let Be=!1;const Ke=new io;let $e=!1,ze=!1;const dt=new et,ft=new U,gt=new tt,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function ut(){return Z===null?ee:1}let F=n;function Lt(_,I){return t.getContext(_,I)}try{const _={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$r}`),t.addEventListener("webglcontextlost",at,!1),t.addEventListener("webglcontextrestored",je,!1),t.addEventListener("webglcontextcreationerror",Zt,!1),F===null){const I="webgl2";if(F=Lt(I,_),F===null)throw Lt(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(_){throw Ge("WebGLRenderer: "+_.message),_}let Xe,M,h,D,k,V,te,ae,W,K,se,xe,le,re,Ee,we,Pe,P,ne,Y,oe,fe,j;function be(){Xe=new Vp(F),Xe.init(),oe=new Dg(F,Xe),M=new Up(F,Xe,e,oe),h=new Fg(F,Xe),M.reversedDepthBuffer&&d&&h.buffers.depth.setReversed(!0),X=F.createFramebuffer(),q=F.createFramebuffer(),z=F.createFramebuffer(),D=new Xp(F),k=new yg,V=new Ig(F,Xe,h,k,M,oe,D),te=new Gp(C),ae=new Ku(F),fe=new Ip(F,ae),W=new Wp(F,ae,D,fe),K=new qp(F,W,ae,fe,D),P=new Yp(F,M,V),Ee=new Np(k),se=new vg(C,te,Xe,M,fe,Ee),xe=new zg(C,k),le=new bg,re=new wg(Xe),Pe=new Fp(C,te,h,K,y,l),we=new Pg(C,K,M),j=new Hg(F,D,M,h),ne=new Dp(F,Xe,D),Y=new $p(F,Xe,D),D.programs=se.programs,C.capabilities=M,C.extensions=Xe,C.properties=k,C.renderLists=le,C.shadowMap=we,C.state=h,C.info=D}be(),x!==Nt&&(T=new Jp(x,t.width,t.height,o,a,s));const ye=new Og(C,F);this.xr=ye,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const _=Xe.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){const _=Xe.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(_){_!==void 0&&(ee=_,this.setSize(J,ie,!1))},this.getSize=function(_){return _.set(J,ie)},this.setSize=function(_,I,H=!0){if(ye.isPresenting){Ae("WebGLRenderer: Can't change size while VR device is presenting.");return}J=_,ie=I,t.width=Math.floor(_*ee),t.height=Math.floor(I*ee),H===!0&&(t.style.width=_+"px",t.style.height=I+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,_,I)},this.getDrawingBufferSize=function(_){return _.set(J*ee,ie*ee).floor()},this.setDrawingBufferSize=function(_,I,H){J=_,ie=I,ee=H,t.width=Math.floor(_*H),t.height=Math.floor(I*H),this.setViewport(0,0,_,I)},this.setEffects=function(_){if(x===Nt){Ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(_){for(let I=0;I<_.length;I++)if(_[I].isOutputPass===!0){Ae("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(_||[])},this.getCurrentViewport=function(_){return _.copy(pe)},this.getViewport=function(_){return _.copy(Te)},this.setViewport=function(_,I,H,B){_.isVector4?Te.set(_.x,_.y,_.z,_.w):Te.set(_,I,H,B),h.viewport(pe.copy(Te).multiplyScalar(ee).round())},this.getScissor=function(_){return _.copy(ot)},this.setScissor=function(_,I,H,B){_.isVector4?ot.set(_.x,_.y,_.z,_.w):ot.set(_,I,H,B),h.scissor(ve.copy(ot).multiplyScalar(ee).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(_){h.setScissorTest(Be=_)},this.setOpaqueSort=function(_){Le=_},this.setTransparentSort=function(_){Re=_},this.getClearColor=function(_){return _.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(_=!0,I=!0,H=!0){let B=0;if(_){let O=!1;if(Z!==null){const he=Z.texture.format;O=p.has(he)}if(O){const he=Z.texture.type,ge=u.has(he),ue=Pe.getClearColor(),_e=Pe.getClearAlpha(),Me=ue.r,Fe=ue.g,Ue=ue.b;ge?(E[0]=Me,E[1]=Fe,E[2]=Ue,E[3]=_e,F.clearBufferuiv(F.COLOR,0,E)):(w[0]=Me,w[1]=Fe,w[2]=Ue,w[3]=_e,F.clearBufferiv(F.COLOR,0,w))}else B|=F.COLOR_BUFFER_BIT}I&&(B|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(B|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&F.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(_){_.setRenderer(this),N=_},this.dispose=function(){t.removeEventListener("webglcontextlost",at,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",Zt,!1),Pe.dispose(),le.dispose(),re.dispose(),k.dispose(),te.dispose(),K.dispose(),fe.dispose(),j.dispose(),se.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",oo),ye.removeEventListener("sessionend",lo),On.stop()};function at(_){_.preventDefault(),Ro("WebGLRenderer: Context Lost."),R=!0}function je(){Ro("WebGLRenderer: Context Restored."),R=!1;const _=D.autoReset,I=we.enabled,H=we.autoUpdate,B=we.needsUpdate,O=we.type;be(),D.autoReset=_,we.enabled=I,we.autoUpdate=H,we.needsUpdate=B,we.type=O}function Zt(_){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function jt(_){const I=_.target;I.removeEventListener("dispose",jt),Nc(I)}function Nc(_){Bc(_),k.remove(_)}function Bc(_){const I=k.get(_).programs;I!==void 0&&(I.forEach(function(H){se.releaseProgram(H)}),_.isShaderMaterial&&se.releaseShaderCache(_))}this.renderBufferDirect=function(_,I,H,B,O,he){I===null&&(I=yt);const ge=O.isMesh&&O.matrixWorld.determinantAffine()<0,ue=zc(_,I,H,B,O);h.setMaterial(B,ge);let _e=H.index,Me=1;if(B.wireframe===!0){if(_e=W.getWireframeAttribute(H),_e===void 0)return;Me=2}const Fe=H.drawRange,Ue=H.attributes.position;let Se=Fe.start*Me,qe=(Fe.start+Fe.count)*Me;he!==null&&(Se=Math.max(Se,he.start*Me),qe=Math.min(qe,(he.start+he.count)*Me)),_e!==null?(Se=Math.max(Se,0),qe=Math.min(qe,_e.count)):Ue!=null&&(Se=Math.max(Se,0),qe=Math.min(qe,Ue.count));const lt=qe-Se;if(lt<0||lt===1/0)return;fe.setup(O,B,ue,H,_e);let st,Je=ne;if(_e!==null&&(st=ae.get(_e),Je=Y,Je.setIndex(st)),O.isMesh)B.wireframe===!0?(h.setLineWidth(B.wireframeLinewidth*ut()),Je.setMode(F.LINES)):Je.setMode(F.TRIANGLES);else if(O.isLine){let bt=B.linewidth;bt===void 0&&(bt=1),h.setLineWidth(bt*ut()),O.isLineSegments?Je.setMode(F.LINES):O.isLineLoop?Je.setMode(F.LINE_LOOP):Je.setMode(F.LINE_STRIP)}else O.isPoints?Je.setMode(F.POINTS):O.isSprite&&Je.setMode(F.TRIANGLES);if(O.isBatchedMesh)if(Xe.get("WEBGL_multi_draw"))Je.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const bt=O._multiDrawStarts,me=O._multiDrawCounts,Pt=O._multiDrawCount,He=_e?ae.get(_e).bytesPerElement:1,zt=k.get(B).currentProgram.getUniforms();for(let Qt=0;Qt<Pt;Qt++)zt.setValue(F,"_gl_DrawID",Qt),Je.render(bt[Qt]/He,me[Qt])}else if(O.isInstancedMesh)Je.renderInstances(Se,lt,O.count);else if(H.isInstancedBufferGeometry){const bt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,me=Math.min(H.instanceCount,bt);Je.renderInstances(Se,lt,me)}else Je.render(Se,lt)};function ro(_,I,H){_.transparent===!0&&_.side===yn&&_.forceSinglePass===!1?(_.side=Rt,_.needsUpdate=!0,Qi(_,I,H),_.side=Nn,_.needsUpdate=!0,Qi(_,I,H),_.side=yn):Qi(_,I,H)}this.compile=function(_,I,H=null){H===null&&(H=_),S=re.get(H),S.init(I),v.push(S),H.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(S.pushLight(O),O.castShadow&&S.pushShadow(O))}),_!==H&&_.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(S.pushLight(O),O.castShadow&&S.pushShadow(O))}),S.setupLights();const B=new Set;return _.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const he=O.material;if(he)if(Array.isArray(he))for(let ge=0;ge<he.length;ge++){const ue=he[ge];ro(ue,H,O),B.add(ue)}else ro(he,H,O),B.add(he)}),S=v.pop(),B},this.compileAsync=function(_,I,H=null){const B=this.compile(_,I,H);return new Promise(O=>{function he(){if(B.forEach(function(ge){k.get(ge).currentProgram.isReady()&&B.delete(ge)}),B.size===0){O(_);return}setTimeout(he,10)}Xe.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Ka=null;function Oc(_){Ka&&Ka(_)}function oo(){On.stop()}function lo(){On.start()}const On=new Ec;On.setAnimationLoop(Oc),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(_){Ka=_,ye.setAnimationLoop(_),_===null?On.stop():On.start()},ye.addEventListener("sessionstart",oo),ye.addEventListener("sessionend",lo),this.render=function(_,I){if(I!==void 0&&I.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;N!==null&&N.renderStart(_,I);const H=ye.enabled===!0&&ye.isPresenting===!0,B=T!==null&&(Z===null||H)&&T.begin(C,Z);if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(I),I=ye.getCamera()),_.isScene===!0&&_.onBeforeRender(C,_,I,Z),S=re.get(_,v.length),S.init(I),S.state.textureUnits=V.getTextureUnits(),v.push(S),dt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ke.setFromProjectionMatrix(dt,sn,I.reversedDepth),ze=this.localClippingEnabled,$e=Ee.init(this.clippingPlanes,ze),A=le.get(_,L.length),A.init(),L.push(A),ye.enabled===!0&&ye.isPresenting===!0){const ge=C.xr.getDepthSensingMesh();ge!==null&&Ja(ge,I,-1/0,C.sortObjects)}Ja(_,I,0,C.sortObjects),A.finish(),C.sortObjects===!0&&A.sort(Le,Re,I.reversedDepth),it=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,it&&Pe.addToRenderList(A,_),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),$e===!0&&Ee.beginShadows();const O=S.state.shadowsArray;if(we.render(O,_,I),$e===!0&&Ee.endShadows(),(B&&T.hasRenderPass())===!1){const ge=A.opaque,ue=A.transmissive;if(S.setupLights(),I.isArrayCamera){const _e=I.cameras;if(ue.length>0)for(let Me=0,Fe=_e.length;Me<Fe;Me++){const Ue=_e[Me];uo(ge,ue,_,Ue)}it&&Pe.render(_);for(let Me=0,Fe=_e.length;Me<Fe;Me++){const Ue=_e[Me];co(A,_,Ue,Ue.viewport)}}else ue.length>0&&uo(ge,ue,_,I),it&&Pe.render(_),co(A,_,I)}Z!==null&&G===0&&(V.updateMultisampleRenderTarget(Z),V.updateRenderTargetMipmap(Z)),B&&T.end(C),_.isScene===!0&&_.onAfterRender(C,_,I),fe.resetDefaultState(),Q=-1,de=null,v.pop(),v.length>0?(S=v[v.length-1],V.setTextureUnits(S.state.textureUnits),$e===!0&&Ee.setGlobalState(C.clippingPlanes,S.state.camera)):S=null,L.pop(),L.length>0?A=L[L.length-1]:A=null,N!==null&&N.renderEnd()};function Ja(_,I,H,B){if(_.visible===!1)return;if(_.layers.test(I.layers)){if(_.isGroup)H=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(I);else if(_.isLightProbeGrid)S.pushLightProbeGrid(_);else if(_.isLight)S.pushLight(_),_.castShadow&&S.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||Ke.intersectsSprite(_)){B&&gt.setFromMatrixPosition(_.matrixWorld).applyMatrix4(dt);const ge=K.update(_),ue=_.material;ue.visible&&A.push(_,ge,ue,H,gt.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||Ke.intersectsObject(_))){const ge=K.update(_),ue=_.material;if(B&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),gt.copy(_.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),gt.copy(ge.boundingSphere.center)),gt.applyMatrix4(_.matrixWorld).applyMatrix4(dt)),Array.isArray(ue)){const _e=ge.groups;for(let Me=0,Fe=_e.length;Me<Fe;Me++){const Ue=_e[Me],Se=ue[Ue.materialIndex];Se&&Se.visible&&A.push(_,ge,Se,H,gt.z,Ue)}}else ue.visible&&A.push(_,ge,ue,H,gt.z,null)}}const he=_.children;for(let ge=0,ue=he.length;ge<ue;ge++)Ja(he[ge],I,H,B)}function co(_,I,H,B){const{opaque:O,transmissive:he,transparent:ge}=_;S.setupLightsView(H),$e===!0&&Ee.setGlobalState(C.clippingPlanes,H),B&&h.viewport(pe.copy(B)),O.length>0&&ji(O,I,H),he.length>0&&ji(he,I,H),ge.length>0&&ji(ge,I,H),h.buffers.depth.setTest(!0),h.buffers.depth.setMask(!0),h.buffers.color.setMask(!0),h.setPolygonOffset(!1)}function uo(_,I,H,B){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[B.id]===void 0){const Se=Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[B.id]=new on(1,1,{generateMipmaps:!0,type:Se?Mn:Nt,minFilter:Yn,samples:Math.max(4,M.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Oe.workingColorSpace})}const he=S.state.transmissionRenderTarget[B.id],ge=B.viewport||pe;he.setSize(ge.z*C.transmissionResolutionScale,ge.w*C.transmissionResolutionScale);const ue=C.getRenderTarget(),_e=C.getActiveCubeFace(),Me=C.getActiveMipmapLevel();C.setRenderTarget(he),C.getClearColor(nt),We=C.getClearAlpha(),We<1&&C.setClearColor(16777215,.5),C.clear(),it&&Pe.render(H);const Fe=C.toneMapping;C.toneMapping=rn;const Ue=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),S.setupLightsView(B),$e===!0&&Ee.setGlobalState(C.clippingPlanes,B),ji(_,H,B),V.updateMultisampleRenderTarget(he),V.updateRenderTargetMipmap(he),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let qe=0,lt=I.length;qe<lt;qe++){const st=I[qe],{object:Je,geometry:bt,material:me,group:Pt}=st;if(me.side===yn&&Je.layers.test(B.layers)){const He=me.side;me.side=Rt,me.needsUpdate=!0,ho(Je,H,B,bt,me,Pt),me.side=He,me.needsUpdate=!0,Se=!0}}Se===!0&&(V.updateMultisampleRenderTarget(he),V.updateRenderTargetMipmap(he))}C.setRenderTarget(ue,_e,Me),C.setClearColor(nt,We),Ue!==void 0&&(B.viewport=Ue),C.toneMapping=Fe}function ji(_,I,H){const B=I.isScene===!0?I.overrideMaterial:null;for(let O=0,he=_.length;O<he;O++){const ge=_[O],{object:ue,geometry:_e,group:Me}=ge;let Fe=ge.material;Fe.allowOverride===!0&&B!==null&&(Fe=B),ue.layers.test(H.layers)&&ho(ue,I,H,_e,Fe,Me)}}function ho(_,I,H,B,O,he){_.onBeforeRender(C,I,H,B,O,he),_.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),O.onBeforeRender(C,I,H,B,_,he),O.transparent===!0&&O.side===yn&&O.forceSinglePass===!1?(O.side=Rt,O.needsUpdate=!0,C.renderBufferDirect(H,I,B,O,_,he),O.side=Nn,O.needsUpdate=!0,C.renderBufferDirect(H,I,B,O,_,he),O.side=yn):C.renderBufferDirect(H,I,B,O,_,he),_.onAfterRender(C,I,H,B,O,he)}function Qi(_,I,H){I.isScene!==!0&&(I=yt);const B=k.get(_),O=S.state.lights,he=S.state.shadowsArray,ge=O.state.version,ue=se.getParameters(_,O.state,he,I,H,S.state.lightProbeGridArray),_e=se.getProgramCacheKey(ue);let Me=B.programs;B.environment=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,B.fog=I.fog;const Fe=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap;B.envMap=te.get(_.envMap||B.environment,Fe),B.envMapRotation=B.environment!==null&&_.envMap===null?I.environmentRotation:_.envMapRotation,Me===void 0&&(_.addEventListener("dispose",jt),Me=new Map,B.programs=Me);let Ue=Me.get(_e);if(Ue!==void 0){if(B.currentProgram===Ue&&B.lightsStateVersion===ge)return po(_,ue),Ue}else ue.uniforms=se.getUniforms(_),N!==null&&_.isNodeMaterial&&N.build(_,H,ue),_.onBeforeCompile(ue,C),Ue=se.acquireProgram(ue,_e),Me.set(_e,Ue),B.uniforms=ue.uniforms;const Se=B.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Se.clippingPlanes=Ee.uniform),po(_,ue),B.needsLights=Gc(_),B.lightsStateVersion=ge,B.needsLights&&(Se.ambientLightColor.value=O.state.ambient,Se.lightProbe.value=O.state.probe,Se.directionalLights.value=O.state.directional,Se.directionalLightShadows.value=O.state.directionalShadow,Se.spotLights.value=O.state.spot,Se.spotLightShadows.value=O.state.spotShadow,Se.rectAreaLights.value=O.state.rectArea,Se.ltc_1.value=O.state.rectAreaLTC1,Se.ltc_2.value=O.state.rectAreaLTC2,Se.pointLights.value=O.state.point,Se.pointLightShadows.value=O.state.pointShadow,Se.hemisphereLights.value=O.state.hemi,Se.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Se.spotLightMatrix.value=O.state.spotLightMatrix,Se.spotLightMap.value=O.state.spotLightMap,Se.pointShadowMatrix.value=O.state.pointShadowMatrix),B.lightProbeGrid=S.state.lightProbeGridArray.length>0,B.currentProgram=Ue,B.uniformsList=null,Ue}function fo(_){if(_.uniformsList===null){const I=_.currentProgram.getUniforms();_.uniformsList=Ia.seqWithValue(I.seq,_.uniforms)}return _.uniformsList}function po(_,I){const H=k.get(_);H.outputColorSpace=I.outputColorSpace,H.batching=I.batching,H.batchingColor=I.batchingColor,H.instancing=I.instancing,H.instancingColor=I.instancingColor,H.instancingMorph=I.instancingMorph,H.skinning=I.skinning,H.morphTargets=I.morphTargets,H.morphNormals=I.morphNormals,H.morphColors=I.morphColors,H.morphTargetsCount=I.morphTargetsCount,H.numClippingPlanes=I.numClippingPlanes,H.numIntersection=I.numClipIntersection,H.vertexAlphas=I.vertexAlphas,H.vertexTangents=I.vertexTangents,H.toneMapping=I.toneMapping}function kc(_,I){if(_.length===0)return null;if(_.length===1)return _[0].texture!==null?_[0]:null;b.setFromMatrixPosition(I.matrixWorld);for(let H=0,B=_.length;H<B;H++){const O=_[H];if(O.texture!==null&&O.boundingBox.containsPoint(b))return O}return null}function zc(_,I,H,B,O){I.isScene!==!0&&(I=yt),V.resetTextureUnits();const he=I.fog,ge=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?I.environment:null,ue=Z===null?C.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Oe.workingColorSpace,_e=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Me=te.get(B.envMap||ge,_e),Fe=B.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ue=!!H.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Se=!!H.morphAttributes.position,qe=!!H.morphAttributes.normal,lt=!!H.morphAttributes.color;let st=rn;B.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(st=C.toneMapping);const Je=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,bt=Je!==void 0?Je.length:0,me=k.get(B),Pt=S.state.lights;if($e===!0&&(ze===!0||_!==de)){const Qe=_===de&&B.id===Q;Ee.setState(B,_,Qe)}let He=!1;B.version===me.__version?(me.needsLights&&me.lightsStateVersion!==Pt.state.version||me.outputColorSpace!==ue||O.isBatchedMesh&&me.batching===!1||!O.isBatchedMesh&&me.batching===!0||O.isBatchedMesh&&me.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&me.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&me.instancing===!1||!O.isInstancedMesh&&me.instancing===!0||O.isSkinnedMesh&&me.skinning===!1||!O.isSkinnedMesh&&me.skinning===!0||O.isInstancedMesh&&me.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&me.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&me.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&me.instancingMorph===!1&&O.morphTexture!==null||me.envMap!==Me||B.fog===!0&&me.fog!==he||me.numClippingPlanes!==void 0&&(me.numClippingPlanes!==Ee.numPlanes||me.numIntersection!==Ee.numIntersection)||me.vertexAlphas!==Fe||me.vertexTangents!==Ue||me.morphTargets!==Se||me.morphNormals!==qe||me.morphColors!==lt||me.toneMapping!==st||me.morphTargetsCount!==bt||!!me.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(He=!0):(He=!0,me.__version=B.version);let zt=me.currentProgram;He===!0&&(zt=Qi(B,I,O),N&&B.isNodeMaterial&&N.onUpdateProgram(B,zt,me));let Qt=!1,En=!1,jn=!1;const Ze=zt.getUniforms(),ct=me.uniforms;if(h.useProgram(zt.program)&&(Qt=!0,En=!0,jn=!0),B.id!==Q&&(Q=B.id,En=!0),me.needsLights){const Qe=kc(S.state.lightProbeGridArray,O);me.lightProbeGrid!==Qe&&(me.lightProbeGrid=Qe,En=!0)}if(Qt||de!==_){h.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),Ze.setValue(F,"projectionMatrix",_.projectionMatrix),Ze.setValue(F,"viewMatrix",_.matrixWorldInverse);const wn=Ze.map.cameraPosition;wn!==void 0&&wn.setValue(F,ft.setFromMatrixPosition(_.matrixWorld)),M.logarithmicDepthBuffer&&Ze.setValue(F,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Ze.setValue(F,"isOrthographic",_.isOrthographicCamera===!0),de!==_&&(de=_,En=!0,jn=!0)}if(me.needsLights&&(Pt.state.directionalShadowMap.length>0&&Ze.setValue(F,"directionalShadowMap",Pt.state.directionalShadowMap,V),Pt.state.spotShadowMap.length>0&&Ze.setValue(F,"spotShadowMap",Pt.state.spotShadowMap,V),Pt.state.pointShadowMap.length>0&&Ze.setValue(F,"pointShadowMap",Pt.state.pointShadowMap,V)),O.isSkinnedMesh){Ze.setOptional(F,O,"bindMatrix"),Ze.setOptional(F,O,"bindMatrixInverse");const Qe=O.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),Ze.setValue(F,"boneTexture",Qe.boneTexture,V))}O.isBatchedMesh&&(Ze.setOptional(F,O,"batchingTexture"),Ze.setValue(F,"batchingTexture",O._matricesTexture,V),Ze.setOptional(F,O,"batchingIdTexture"),Ze.setValue(F,"batchingIdTexture",O._indirectTexture,V),Ze.setOptional(F,O,"batchingColorTexture"),O._colorsTexture!==null&&Ze.setValue(F,"batchingColorTexture",O._colorsTexture,V));const Tn=H.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&P.update(O,H,zt),(En||me.receiveShadow!==O.receiveShadow)&&(me.receiveShadow=O.receiveShadow,Ze.setValue(F,"receiveShadow",O.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&I.environment!==null&&(ct.envMapIntensity.value=I.environmentIntensity),ct.dfgLUT!==void 0&&(ct.dfgLUT.value=Vg()),En){if(Ze.setValue(F,"toneMappingExposure",C.toneMappingExposure),me.needsLights&&Hc(ct,jn),he&&B.fog===!0&&xe.refreshFogUniforms(ct,he),xe.refreshMaterialUniforms(ct,B,ee,ie,S.state.transmissionRenderTarget[_.id]),me.needsLights&&me.lightProbeGrid){const Qe=me.lightProbeGrid;ct.probesSH.value=Qe.texture,ct.probesMin.value.copy(Qe.boundingBox.min),ct.probesMax.value.copy(Qe.boundingBox.max),ct.probesResolution.value.copy(Qe.resolution)}Ia.upload(F,fo(me),ct,V)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Ia.upload(F,fo(me),ct,V),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Ze.setValue(F,"center",O.center),Ze.setValue(F,"modelViewMatrix",O.modelViewMatrix),Ze.setValue(F,"normalMatrix",O.normalMatrix),Ze.setValue(F,"modelMatrix",O.matrixWorld),B.uniformsGroups!==void 0){const Qe=B.uniformsGroups;for(let wn=0,Qn=Qe.length;wn<Qn;wn++){const mo=Qe[wn];j.update(mo,zt),j.bind(mo,zt)}}return zt}function Hc(_,I){_.ambientLightColor.needsUpdate=I,_.lightProbe.needsUpdate=I,_.directionalLights.needsUpdate=I,_.directionalLightShadows.needsUpdate=I,_.pointLights.needsUpdate=I,_.pointLightShadows.needsUpdate=I,_.spotLights.needsUpdate=I,_.spotLightShadows.needsUpdate=I,_.rectAreaLights.needsUpdate=I,_.hemisphereLights.needsUpdate=I}function Gc(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(_,I,H){const B=k.get(_);B.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),k.get(_.texture).__webglTexture=I,k.get(_.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:H,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,I){const H=k.get(_);H.__webglFramebuffer=I,H.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(_,I=0,H=0){Z=_,$=I,G=H;let B=null,O=!1,he=!1;if(_){const ue=k.get(_);if(ue.__useDefaultFramebuffer!==void 0){h.bindFramebuffer(F.FRAMEBUFFER,ue.__webglFramebuffer),pe.copy(_.viewport),ve.copy(_.scissor),Ve=_.scissorTest,h.viewport(pe),h.scissor(ve),h.setScissorTest(Ve),Q=-1;return}else if(ue.__webglFramebuffer===void 0)V.setupRenderTarget(_);else if(ue.__hasExternalTextures)V.rebindTextures(_,k.get(_.texture).__webglTexture,k.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){const Fe=_.depthTexture;if(ue.__boundDepthTexture!==Fe){if(Fe!==null&&k.has(Fe)&&(_.width!==Fe.image.width||_.height!==Fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");V.setupDepthRenderbuffer(_)}}const _e=_.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(he=!0);const Me=k.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Me[I])?B=Me[I][H]:B=Me[I],O=!0):_.samples>0&&V.useMultisampledRTT(_)===!1?B=k.get(_).__webglMultisampledFramebuffer:Array.isArray(Me)?B=Me[H]:B=Me,pe.copy(_.viewport),ve.copy(_.scissor),Ve=_.scissorTest}else pe.copy(Te).multiplyScalar(ee).floor(),ve.copy(ot).multiplyScalar(ee).floor(),Ve=Be;if(H!==0&&(B=X),h.bindFramebuffer(F.FRAMEBUFFER,B)&&h.drawBuffers(_,B),h.viewport(pe),h.scissor(ve),h.setScissorTest(Ve),O){const ue=k.get(_.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+I,ue.__webglTexture,H)}else if(he){const ue=I;for(let _e=0;_e<_.textures.length;_e++){const Me=k.get(_.textures[_e]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+_e,Me.__webglTexture,H,ue)}}else if(_!==null&&H!==0){const ue=k.get(_.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ue.__webglTexture,H)}Q=-1},this.readRenderTargetPixels=function(_,I,H,B,O,he,ge,ue=0){if(!(_&&_.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=k.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ge!==void 0&&(_e=_e[ge]),_e){h.bindFramebuffer(F.FRAMEBUFFER,_e);try{const Me=_.textures[ue],Fe=Me.format,Ue=Me.type;if(_.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ue),!M.textureFormatReadable(Fe)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!M.textureTypeReadable(Ue)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=_.width-B&&H>=0&&H<=_.height-O&&F.readPixels(I,H,B,O,oe.convert(Fe),oe.convert(Ue),he)}finally{const Me=Z!==null?k.get(Z).__webglFramebuffer:null;h.bindFramebuffer(F.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(_,I,H,B,O,he,ge,ue=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=k.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ge!==void 0&&(_e=_e[ge]),_e)if(I>=0&&I<=_.width-B&&H>=0&&H<=_.height-O){h.bindFramebuffer(F.FRAMEBUFFER,_e);const Me=_.textures[ue],Fe=Me.format,Ue=Me.type;if(_.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ue),!M.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!M.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Se=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Se),F.bufferData(F.PIXEL_PACK_BUFFER,he.byteLength,F.STREAM_READ),F.readPixels(I,H,B,O,oe.convert(Fe),oe.convert(Ue),0);const qe=Z!==null?k.get(Z).__webglFramebuffer:null;h.bindFramebuffer(F.FRAMEBUFFER,qe);const lt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await ou(F,lt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Se),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,he),F.deleteBuffer(Se),F.deleteSync(lt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,I=null,H=0){const B=Math.pow(2,-H),O=Math.floor(_.image.width*B),he=Math.floor(_.image.height*B),ge=I!==null?I.x:0,ue=I!==null?I.y:0;V.setTexture2D(_,0),F.copyTexSubImage2D(F.TEXTURE_2D,H,0,0,ge,ue,O,he),h.unbindTexture()},this.copyTextureToTexture=function(_,I,H=null,B=null,O=0,he=0){let ge,ue,_e,Me,Fe,Ue,Se,qe,lt;const st=_.isCompressedTexture?_.mipmaps[he]:_.image;if(H!==null)ge=H.max.x-H.min.x,ue=H.max.y-H.min.y,_e=H.isBox3?H.max.z-H.min.z:1,Me=H.min.x,Fe=H.min.y,Ue=H.isBox3?H.min.z:0;else{const ct=Math.pow(2,-O);ge=Math.floor(st.width*ct),ue=Math.floor(st.height*ct),_.isDataArrayTexture?_e=st.depth:_.isData3DTexture?_e=Math.floor(st.depth*ct):_e=1,Me=0,Fe=0,Ue=0}B!==null?(Se=B.x,qe=B.y,lt=B.z):(Se=0,qe=0,lt=0);const Je=oe.convert(I.format),bt=oe.convert(I.type);let me;I.isData3DTexture?(V.setTexture3D(I,0),me=F.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(V.setTexture2DArray(I,0),me=F.TEXTURE_2D_ARRAY):(V.setTexture2D(I,0),me=F.TEXTURE_2D),h.activeTexture(F.TEXTURE0),h.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,I.flipY),h.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),h.pixelStorei(F.UNPACK_ALIGNMENT,I.unpackAlignment);const Pt=h.getParameter(F.UNPACK_ROW_LENGTH),He=h.getParameter(F.UNPACK_IMAGE_HEIGHT),zt=h.getParameter(F.UNPACK_SKIP_PIXELS),Qt=h.getParameter(F.UNPACK_SKIP_ROWS),En=h.getParameter(F.UNPACK_SKIP_IMAGES);h.pixelStorei(F.UNPACK_ROW_LENGTH,st.width),h.pixelStorei(F.UNPACK_IMAGE_HEIGHT,st.height),h.pixelStorei(F.UNPACK_SKIP_PIXELS,Me),h.pixelStorei(F.UNPACK_SKIP_ROWS,Fe),h.pixelStorei(F.UNPACK_SKIP_IMAGES,Ue);const jn=_.isDataArrayTexture||_.isData3DTexture,Ze=I.isDataArrayTexture||I.isData3DTexture;if(_.isDepthTexture){const ct=k.get(_),Tn=k.get(I),Qe=k.get(ct.__renderTarget),wn=k.get(Tn.__renderTarget);h.bindFramebuffer(F.READ_FRAMEBUFFER,Qe.__webglFramebuffer),h.bindFramebuffer(F.DRAW_FRAMEBUFFER,wn.__webglFramebuffer);for(let Qn=0;Qn<_e;Qn++)jn&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,k.get(_).__webglTexture,O,Ue+Qn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,k.get(I).__webglTexture,he,lt+Qn)),F.blitFramebuffer(Me,Fe,ge,ue,Se,qe,ge,ue,F.DEPTH_BUFFER_BIT,F.NEAREST);h.bindFramebuffer(F.READ_FRAMEBUFFER,null),h.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(O!==0||_.isRenderTargetTexture||k.has(_)){const ct=k.get(_),Tn=k.get(I);h.bindFramebuffer(F.READ_FRAMEBUFFER,q),h.bindFramebuffer(F.DRAW_FRAMEBUFFER,z);for(let Qe=0;Qe<_e;Qe++)jn?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ct.__webglTexture,O,Ue+Qe):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ct.__webglTexture,O),Ze?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Tn.__webglTexture,he,lt+Qe):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Tn.__webglTexture,he),O!==0?F.blitFramebuffer(Me,Fe,ge,ue,Se,qe,ge,ue,F.COLOR_BUFFER_BIT,F.NEAREST):Ze?F.copyTexSubImage3D(me,he,Se,qe,lt+Qe,Me,Fe,ge,ue):F.copyTexSubImage2D(me,he,Se,qe,Me,Fe,ge,ue);h.bindFramebuffer(F.READ_FRAMEBUFFER,null),h.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Ze?_.isDataTexture||_.isData3DTexture?F.texSubImage3D(me,he,Se,qe,lt,ge,ue,_e,Je,bt,st.data):I.isCompressedArrayTexture?F.compressedTexSubImage3D(me,he,Se,qe,lt,ge,ue,_e,Je,st.data):F.texSubImage3D(me,he,Se,qe,lt,ge,ue,_e,Je,bt,st):_.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,he,Se,qe,ge,ue,Je,bt,st.data):_.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,he,Se,qe,st.width,st.height,Je,st.data):F.texSubImage2D(F.TEXTURE_2D,he,Se,qe,ge,ue,Je,bt,st);h.pixelStorei(F.UNPACK_ROW_LENGTH,Pt),h.pixelStorei(F.UNPACK_IMAGE_HEIGHT,He),h.pixelStorei(F.UNPACK_SKIP_PIXELS,zt),h.pixelStorei(F.UNPACK_SKIP_ROWS,Qt),h.pixelStorei(F.UNPACK_SKIP_IMAGES,En),he===0&&I.generateMipmaps&&F.generateMipmap(me),h.unbindTexture()},this.initRenderTarget=function(_){k.get(_).__webglFramebuffer===void 0&&V.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?V.setTextureCube(_,0):_.isData3DTexture?V.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?V.setTexture2DArray(_,0):V.setTexture2D(_,0),h.unbindTexture()},this.resetState=function(){$=0,G=0,Z=null,h.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Oe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Oe._getUnpackColorSpace()}}let vn,Yt,Dt,Xn,Vt,Fc=0,Ic=0,Ml=!1;const ki=800;function $g(i="three-bg"){const e=document.getElementById(i);if(!e||Ml)return;vn=new Su,vn.fog=new no(657946,.0015),Yt=new Ut(60,e.clientWidth/e.clientHeight,1,2e3),Yt.position.set(0,0,500),Dt=new Wg({alpha:!0,antialias:!0}),Dt.setSize(e.clientWidth,e.clientHeight),Dt.setPixelRatio(Math.min(window.devicePixelRatio,2)),Dt.setClearColor(0,0),e.appendChild(Dt.domElement),Dt.domElement.style.position="absolute",Dt.domElement.style.top="0",Dt.domElement.style.left="0",Dt.domElement.style.pointerEvents="none",Xg(),Yg();const t=new Ls(54527,2,600);t.position.set(200,150,200),vn.add(t);const n=new Ls(9133302,1.5,600);n.position.set(-200,-100,100),vn.add(n);const a=new Ls(65416,1,400);a.position.set(0,200,-200),vn.add(a);const s=new $u(2236996,.5);vn.add(s),document.addEventListener("mousemove",qg),window.addEventListener("resize",Kg),Ml=!0,Dc()}function Xg(){const i=new kt,e=new Float32Array(ki*3),t=new Float32Array(ki*3),n=new Float32Array(ki),a=[new Ie(54527),new Ie(9133302),new Ie(65416),new Ie(16498468),new Ie(16739179)];for(let r=0;r<ki;r++){e[r*3]=(Math.random()-.5)*1600,e[r*3+1]=(Math.random()-.5)*1e3,e[r*3+2]=(Math.random()-.5)*1e3;const o=a[Math.floor(Math.random()*a.length)];t[r*3]=o.r,t[r*3+1]=o.g,t[r*3+2]=o.b,n[r]=Math.random()*3+.5}i.setAttribute("position",new Ot(e,3)),i.setAttribute("color",new Ot(t,3)),i.setAttribute("size",new Ot(n,1));const s=new gc({size:2,vertexColors:!0,transparent:!0,opacity:.6,blending:Zs,sizeAttenuation:!0});Xn=new Iu(i,s),vn.add(Xn)}function Yg(){Vt=new Bi;const i=new so(40,1),e=new zu({color:16777215,emissive:1118498,flatShading:!0,transparent:!0,opacity:.12,wireframe:!1}),t=new Bt(i,e);Vt.add(t);const n=new zi({color:54527,wireframe:!0,transparent:!0,opacity:.2}),a=new Bt(i.clone(),n);a.scale.set(1.02,1.02,1.02),Vt.add(a);const s=new za(55,1,16,100),r=new zi({color:9133302,transparent:!0,opacity:.15}),o=new Bt(s,r);o.rotation.x=Math.PI/2,Vt.add(o);const l=new Bt(new za(60,.5,16,100),new zi({color:54527,transparent:!0,opacity:.1}));l.rotation.x=Math.PI/3,l.rotation.y=Math.PI/4,Vt.add(l),Vt.position.set(300,50,-100),vn.add(Vt)}function qg(i){Fc=i.clientX/window.innerWidth*2-1,Ic=i.clientY/window.innerHeight*2-1}function Kg(){const i=Dt?.domElement?.parentElement;!i||!Yt||!Dt||(Yt.aspect=i.clientWidth/i.clientHeight,Yt.updateProjectionMatrix(),Dt.setSize(i.clientWidth,i.clientHeight))}function Dc(){requestAnimationFrame(Dc);const i=Date.now()*.001;if(Xn){Xn.rotation.y+=3e-4,Xn.rotation.x+=1e-4;const e=Xn.geometry.attributes.position.array;for(let t=0;t<ki;t++){const n=t*3+1;e[n]+=Math.sin(i+t*.01)*.05}Xn.geometry.attributes.position.needsUpdate=!0}Vt&&(Vt.rotation.y+=.005,Vt.rotation.x=Math.sin(i*.5)*.1,Vt.position.y=50+Math.sin(i*.8)*15,Vt.children.forEach((e,t)=>{t>1&&(e.rotation.z+=.003*(t+1))})),Yt.position.x+=(Fc*30-Yt.position.x)*.02,Yt.position.y+=(-Ic*20-Yt.position.y)*.02,Yt.lookAt(0,0,0),Dt.render(vn,Yt)}function Jg(i=".player-card, .club-card"){document.querySelectorAll(i).forEach(e=>{e.addEventListener("mousemove",t=>{const n=e.getBoundingClientRect(),a=t.clientX-n.left,s=t.clientY-n.top,r=n.width/2,o=n.height/2,l=(s-o)/o*-8,c=(a-r)/r*8;e.style.transform=`perspective(1000px) rotateX(${l}deg) rotateY(${c}deg) scale3d(1.02, 1.02, 1.02)`,e.style.transition="transform 0.1s ease";const f=`radial-gradient(circle at ${a}px ${s}px, rgba(0,212,255,0.08) 0%, transparent 60%)`;e.style.backgroundImage=f}),e.addEventListener("mouseleave",()=>{e.style.transform="",e.style.transition="transform 0.5s ease",e.style.backgroundImage=""})})}const Ha=new Xc({dashboard:Qc,predictions:id,standings:od,clubs:hd,players:pd,transfers:_d,facts:bd,news:Md,streaming:Ed,fixtures:wd});Ha.resolve();$g("three-bg");Ha.resolve.bind(Ha);const Sl=document.getElementById("app");Sl&&new MutationObserver(()=>{setTimeout(()=>Jg(".player-card, .club-card, .stat-card, .stream-card, .record-card"),150)}).observe(Sl,{childList:!0,subtree:!1});function Zg(){const i=localStorage.getItem("footballiq-theme")||"dark";document.documentElement.setAttribute("data-theme",i),Uc(i)}function jg(){const e=document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",e),localStorage.setItem("footballiq-theme",e),Uc(e)}function Uc(i){const e=document.getElementById("theme-icon"),t=document.getElementById("theme-label");e&&(e.textContent=i==="dark"?"🌙":"☀️"),t&&(t.textContent=i==="dark"?"Dark Mode":"Light Mode")}Zg();document.getElementById("theme-toggle")?.addEventListener("click",jg);window.navigateTo=i=>{Ha.navigate(`/${i==="dashboard"?"":i}`)};
