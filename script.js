/* ================= TOPIC + SET DATA ================= */
const allTopics = {

january: {
set1: [
{q:"मौर्य साम्राज्य का संस्थापक कौन था?",options:["चंद्रगुप्त मौर्य","अशोक","हर्षवर्धन","समुद्रगुप्त"],answer:0,exp:"चंद्रगुप्त मौर्य"},
{q:`निम्नलिखित कथनों पर विचार कीजिए:
1. UNCCD COP16 का आयोजन वर्ष 2024 में सऊदी अरब के रियाद में किया गया।
2. यह सम्मेलन पहली बार पश्चिम एशिया एवं उत्तर अफ्रीका (MENA) क्षेत्र में आयोजित हुआ।
3. भारत ने इस सम्मेलन में 'अरावली ग्रीन वॉल परियोजना' की घोषणा की।

उपर्युक्त में से कौन-सा/से कथन सही है/हैं?`,options:["केवल 1 और 2","केवल 2 और 3","1, 2 और 3","केवल 1 और 3"],answer:2,exp:"तीनों कथन सही हैं। COP16 रियाद में आयोजित हुआ तथा भारत ने अरावली ग्रीन वॉल परियोजना प्रस्तुत की, जिसका उद्देश्य भूमि पुनर्स्थापन एवं मरुस्थलीकरण को रोकना है।"},

{q:"गुप्त काल को क्या कहा जाता है?",options:["स्वर्ण युग","लौह युग","आधुनिक युग","कांस्य युग"],answer:0,exp:"इसे स्वर्ण युग कहते हैं"},
{q:"अशोक किसके लिए प्रसिद्ध था?",options:["युद्ध","धर्म","व्यापार","कृषि"],answer:1,exp:"धम्म नीति"}
],
set2: [
{q:"चाणक्य किसके गुरु थे?",options:["चंद्रगुप्त","अशोक","नेहरू","पटेल"],answer:0,exp:"चंद्रगुप्त मौर्य"},
{q:"पाटलिपुत्र कहाँ था?",options:["बिहार","यूपी","गुजरात","राजस्थान"],answer:0,exp:"बिहार"}
],
set3: [
{q:"गुप्त काल को क्या कहा जाता है?",options:["स्वर्ण युग","लौह युग","आधुनिक","कांस्य"],answer:0,exp:"स्वर्ण युग"},
{q:"नालंदा कहाँ था?",options:["बिहार","MP","UP","राजस्थान"],answer:0,exp:"बिहार"}
],
set4: [
{q:"समुद्रगुप्त को क्या कहा जाता है?",options:["भारत का नेपोलियन","अशोक","चंद्रगुप्त","हर्ष"],answer:0,exp:"नेपोलियन ऑफ इंडिया"},
{q:"हर्षवर्धन कौन था?",options:["शासक","किसान","व्यापारी","सैनिक"],answer:0,exp:"शासक"}
]
},

february: {
set1: [
{q:"बिहार की राजधानी?",options:["पटना","गया","दरभंगा","भागलपुर"],answer:0,exp:"पटना"},
{q:"गंगा कहाँ से निकलती है?",options:["गंगोत्री","यमुना","सतलुज","नर्मदा"],answer:0,exp:"गंगोत्री"}
],
set2: [
{q:"कोसी नदी?",options:["बिहार का शोक","जीवन रेखा","गंगा","यमुना"],answer:0,exp:"शोक नदी"},
{q:"महाबोधि मंदिर कहाँ?",options:["बोधगया","पटना","राजगीर","नालंदा"],answer:0,exp:"बोधगया"}
],
set3: [
{q:"थार मरुस्थल?",options:["राजस्थान","बिहार","यूपी","MP"],answer:0,exp:"राजस्थान"},
{q:"हिमालय कहाँ?",options:["उत्तर भारत","दक्षिण","पूर्व","पश्चिम"],answer:0,exp:"उत्तर भारत"}
],
set4: [
{q:"बिहार दिवस?",options:["22 मार्च","15 अगस्त","26 जनवरी","2 अक्टूबर"],answer:0,exp:"22 मार्च"},
{q:"सबसे बड़ा जिला?",options:["पश्चिम चंपारण","पटना","गया","नालंदा"],answer:0,exp:"पश्चिम चंपारण"}
]
},

march: {
set1: [
{q:"Bihar Budget 2025–26 के अनुसार निम्नलिखित में से कौन-सा संयोजन सही है?",options:["कुल बजट ₹3.17 lakh crore; GSDP ₹10.97 lakh crore","कुल बजट ₹2.94 lakh crore; GSDP ₹9.76 lakh crore","कुल बजट ₹3.17 lakh crore; GSDP ₹9.76 lakh crore","कुल बजट ₹2.61 lakh crore; GSDP ₹10.97 lakh crore"],answer:0,exp:"सही संयोजन: कुल बजट ₹3.17 lakh crore और GSDP ₹10.97 lakh crore"},

{q:"Bihar Budget 2025–26 में Fiscal Deficit का लक्ष्य लगभग कितना रखा गया है?",options:["2.5% of GSDP","3.0% of GSDP","3.4% of GSDP","4.1% of GSDP"],answer:1,exp:"आधिकारिक लक्ष्य लगभग 3% of GSDP के आसपास रखा गया है"},

{q:"Bihar Budget 2025–26 में निम्न में से सबसे अधिक allocation किस sector को मिला है?",options:["Health","Rural Development","Education","Roads & Transport"],answer:2,exp:"Education को सबसे अधिक allocation (~₹60,000 crore) मिला है"},

{q:"Bihar Budget 2025–26 में Revenue Surplus का अनुमान लगभग कितना है?",options:["0.8% of GSDP","1.8% of GSDP","0.3% of GSDP","4.1% of GSDP"],answer:0,exp:"Revenue surplus लगभग 0.8% of GSDP के आसपास अनुमानित है"},

{q:"Bihar Budget 2025–26 में Capital Expenditure का approximate share कितना है?",options:["~10%","~14%","~20%","~25%"],answer:1,exp:"Capital expenditure लगभग 14% के आसपास है"},

{q:"Central Transfers का Bihar की revenue receipts में योगदान सबसे करीब किसके आसपास है?",options:["35%","45%","55%","65%"],answer:2,exp:"Central transfers का योगदान लगभग 55%+ के आसपास माना जाता है"},

{q:"Bihar Budget 2025–26 में GSDP में growth का अनुमान कितना है?",options:["~18%","~20%","~22%","~25%"],answer:2,exp:"GSDP growth का अनुमान लगभग 22% है"},

{q:"निम्न में से सही Revenue Expenditure का share क्या है?",options:["~79%","~82%","~85%","~90%"],answer:2,exp:"Revenue expenditure लगभग 85% के आसपास है"},

{q:"Bihar Budget 2025–26 में Interest Payments का approximate share कितना है?",options:["5%","7%","9%","11%"],answer:1,exp:"Interest payments लगभग 7% के आसपास हैं"},

{q:"निम्न में से कौन-सा pair सही match है?",options:["Education – ₹42,000 crore","Health – ₹34,000 crore","Rural Development – ₹20,000 crore","Energy – ₹17,000 crore"],answer:0,exp:"Education का allocation सबसे अधिक (~₹60,000 crore), इसलिए यही सबसे सही match है"},

{q:"Bihar Budget 2025–26 के संदर्भ में निम्न कथनों पर विचार कीजिए: 1. कुल बजट लगभग ₹3.17 lakh crore है 2. GSDP लगभग ₹10.97 lakh crore अनुमानित है 3. बजट का आकार GSDP का लगभग 30% से अधिक है",options:["केवल 1 और 2","केवल 2 और 3","केवल 1 और 3","1, 2 और 3"],answer:0,exp:"कथन 1 और 2 सही हैं, लेकिन 3 गलत है क्योंकि बजट GSDP का लगभग 28% है, 30% से अधिक नहीं"},

{q:"Bihar Budget 2025–26 में निम्न में से कौन-सा सही है?",options:["Capital Expenditure > Revenue Expenditure","Revenue Expenditure लगभग 80% से अधिक है","Capital Expenditure लगभग 50% के आसपास है","दोनों बराबर हैं"],answer:1,exp:"Revenue expenditure लगभग 80–85% के आसपास है, इसलिए यह सबसे सही कथन है"},

{q:"निम्नलिखित में से सही जोड़ी चुनिए: 1. Education – ~₹60,000 crore 2. Health – ~₹20,000 crore 3. Rural Development – ~₹34,000 crore 4. Roads – ~₹25,000 crore",options:["केवल 1, 2 और 3","केवल 1 और 4","केवल 2, 3 और 4","सभी सही"],answer:0,exp:"Education, Health और Rural Development सही अनुमान के करीब हैं, Roads का ₹25,000 crore अनुमान गलत है"},

{q:"Bihar Budget 2025–26 में Fiscal Deficit को लेकर कौन सा कथन सही है?",options:["यह 2% से कम रखा गया है","यह लगभग 3% of GSDP के करीब है","यह 4% से अधिक है","यह शून्य है"],answer:1,exp:"Fiscal deficit लगभग 3% of GSDP के आसपास रखा गया है"},

{q:"Revenue Surplus के संदर्भ में कौन सा कथन सही है?",options:["यह नकारात्मक है","यह लगभग 0.8% of GSDP है","यह लगभग 5% से अधिक है","यह शून्य है"],answer:1,exp:"Revenue surplus लगभग 0.8% of GSDP के आसपास है"},

{q:"Bihar Budget 2025–26 में Central transfers के बारे में सही कथन कौन सा है?",options:["यह total revenue का 20–30% है","यह total revenue का 50% से अधिक है","यह केवल 10% के आसपास है","यह बंद कर दिया गया है"],answer:1,exp:"Central transfers बिहार की revenue receipts का 50% से अधिक हिस्सा बनाते हैं"},

{q:"GSDP growth rate के संदर्भ में सही अनुमान चुनिए:",options:["~12%","~18%","~22%","~28%"],answer:2,exp:"GSDP growth का अनुमान लगभग 22% है"},



{q:"Interest payment के संदर्भ में कौन सा कथन सही है?",options:["यह negligible है (<2%)","यह लगभग 7% के आसपास है","यह 15% से अधिक है","यह शून्य है"],answer:1,exp:"Interest payments लगभग 7% के आसपास हैं"},

{q:"Bihar Budget 2025–26 का सही macro interpretation क्या है?",options:["Consumption driven budget","Debt trap budget","Growth + welfare + infrastructure balanced budget","Agriculture-only focused budget"],answer:2,exp:"यह budget growth, welfare और infrastructure का balanced combination है"},

{q:"बिहार बजट 2025–26 के संदर्भ में सही क्रम चुनिए (व्यय के आधार पर):",options:["Education > Rural Development > Health > Roads","Rural Development > Education > Health > Roads","Education > Health > Rural Development > Roads","Health > Education > Rural Development > Roads"],answer:0,exp:"सबसे अधिक allocation Education को मिलता है, उसके बाद Rural Development, फिर Health और Roads"},

{q:"निम्न कथनों पर विचार कीजिए: 1. Bihar का कुल बजट GSDP के लगभग 25–30% के बीच है 2. Capital Expenditure, Revenue Expenditure से अधिक है 3. Fiscal Deficit FRBM सीमा के भीतर है",options:["केवल 1 और 3","केवल 2 और 3","केवल 1 और 2","सभी सही"],answer:0,exp:"कथन 1 और 3 सही हैं, लेकिन Capital Expenditure Revenue से अधिक नहीं है"},

{q:"Bihar Budget 2025–26 के Central dependency model के संदर्भ में कौन सा सही है?",options:["राज्य पूर्णतः self-financed है","Central transfers negligible हैं","State revenue में केंद्र का योगदान प्रमुख है","केवल GST से राज्य funding होती है"],answer:2,exp:"बिहार की revenue में केंद्रीय transfers का महत्वपूर्ण योगदान है"},

{q:"निम्न में से कौन-सा pairing सबसे अधिक सटीक है?",options:["Health → ~₹20,000 crore","Education → ~₹45,000 crore","Rural Development → ~₹25,000 crore","Roads → ~₹30,000 crore"],answer:0,exp:"Health का अनुमान लगभग ₹20,000 crore के आसपास सही माना गया है"},

{q:"Bihar Budget 2025–26 में fiscal management के संदर्भ में कौन सा कथन सही है?",options:["Revenue deficit मौजूद है","Revenue surplus marginal positive है","Fiscal deficit 5% से अधिक है","Budget fully balanced (zero deficit) है"],answer:1,exp:"बजट में marginal revenue surplus (~0.8% GSDP) दिखता है"},



{q:"Bihar Budget 2025–26 के growth model के संदर्भ में कौन सा सही है?",options:["Consumption-led growth","Agriculture-only growth","Balanced growth with infrastructure push","Import-driven growth"],answer:2,exp:"यह balanced growth model है जिसमें infrastructure push शामिल है"},

{q:"निम्न में से कौन सा सबसे सही अनुमान है?",options:["Fiscal deficit ~2% of GSDP","Fiscal deficit ~3% of GSDP","Fiscal deficit ~4.5% of GSDP","Fiscal deficit ~5.5% of GSDP"],answer:1,exp:"Fiscal deficit लगभग 3% के आसपास माना गया है"},

{q:"Bihar Budget 2025–26 में capital expenditure का सबसे सही interpretation क्या है?",options:["यह revenue expenditure से अधिक है","यह development-oriented spending को दर्शाता है","यह केवल salary payments है","यह subsidy-based spending है"],answer:1,exp:"Capital expenditure का उद्देश्य infrastructure और asset creation होता है"},

{q:"निम्न में से कौन सा सही macro statement है?",options:["Bihar Budget purely welfare-oriented है","Bihar Budget purely infrastructure-driven है","Bihar Budget growth + welfare + fiscal discipline का मिश्रण है","Bihar Budget only agriculture focused है"],answer:2,exp:"यह balanced budget है जिसमें growth, welfare और fiscal discipline शामिल हैं"},

{q:"Bihar Budget 2025–26 में social sector dominance का सही संकेत क्या है?",options:["Defence spending highest है","Education + Health combined dominant हैं","Energy sector highest है","IT sector dominates total budget"],answer:1,exp:"Social sector में Education और Health का combined dominance है"},

{q:"GSDP और Budget size के relation के संदर्भ में कौन सा सही है?",options:["Budget > GSDP","Budget ≈ 10% of GSDP","Budget ≈ 25–30% of GSDP","Budget = GSDP"],answer:2,exp:"State budget आमतौर पर GSDP का 25–30% range में होता है"},

{q:"यदि Bihar Budget 2025–26 को GSDP के अनुपात में देखा जाए, तो यह किस श्रेणी के सबसे निकट होगा?",options:["10–15%","15–20%","25–30%","35–40%"],answer:2,exp:"बिहार बजट GSDP के लगभग 25–30% के बीच आता है, इसलिए यही सही श्रेणी है"},

{q:"निम्न कथनों में से कौन-सा सबसे उपयुक्त fiscal interpretation देता है?",options:["राज्य का बजट पूर्णतः self-reliant है","राज्य में revenue surplus marginal positive है","राज्य में लगातार revenue deficit trend है","राज्य में zero borrowing policy लागू है"],answer:1,exp:"बजट में marginal revenue surplus दिखता है, बाकी extreme statements गलत हैं"},

{q:"Bihar Budget 2025–26 के expenditure structure के संदर्भ में सही निष्कर्ष क्या है?",options:["Capital expenditure dominant है","Revenue expenditure structural dominance दिखाता है","Subsidy expenditure सबसे बड़ा component है","Defence expenditure highest है"],answer:1,exp:"Revenue expenditure का structural dominance होता है, capex से अधिक होता है"},

{q:"निम्नलिखित में से कौन-सा सबसे logical conclusion है Central transfers के संदर्भ में?",options:["Bihar completely independent revenue state है","Central transfers marginal role निभाते हैं","Central transfers fiscal base को stabilize करते हैं","Central transfers abolished कर दिए गए हैं"],answer:2,exp:"Central transfers बिहार की fiscal stability को support करते हैं"},

{q:"Bihar Budget 2025–26 में “growth strategy” का सबसे सही interpretation क्या है?",options:["Pure industrialization model","Pure agriculture model","Multi-sector balanced model","Import substitution model"],answer:2,exp:"बिहार का growth model multi-sector balanced approach पर आधारित है"},

{q:"यदि fiscal deficit को policy indicator माना जाए, तो Bihar का stance क्या दर्शाता है?",options:["Aggressive expansion beyond FRBM","Strict fiscal discipline within FRBM limit","No borrowing policy","Hyper-expansionary deficit regime"],answer:1,exp:"Fiscal deficit FRBM limit के भीतर रखा गया है, इसलिए discipline दिखता है"},

{q:"Bihar Budget 2025–26 में expenditure composition के आधार पर सबसे सही inference क्या है?",options:["Capital formation negligible है","Human capital formation priority में है","Military expenditure dominant है","Subsidy-only model है"],answer:1,exp:"Education और health के कारण human capital formation priority है"},

{q:"निम्न में से कौन-सा statement “best analytical fit” है Bihar Budget 2025–26 के लिए?",options:["Redistribution without growth focus","Growth without welfare focus","Growth + welfare integration approach","Welfare withdrawal model"],answer:2,exp:"यह budget growth और welfare दोनों को integrate करता है"},

{q:"यदि Bihar के fiscal structure को “dependency model” कहा जाए, तो इसका सबसे सही कारण क्या होगा?",options:["High tax base","High central tax devolution","Zero expenditure policy","Export-driven revenue model"],answer:1,exp:"बिहार की revenue में central tax devolution का बड़ा हिस्सा है"},

{q:"Bihar Budget 2025–26 में “priority sector hierarchy” को सही रूप में कौन दर्शाता है?",options:["Defence → Industry → Agriculture","Education → Rural Development → Health","Energy → Defence → IT","Tourism → Export → Finance"],answer:1,exp:"Education सबसे ऊपर, फिर rural development और health आते हैं"},

{q:"Fiscal deficit stability को देखते हुए Bihar की policy approach क्या है?",options:["Fiscal expansion without limits","Borrowing ban regime","Controlled deficit within legal framework","Surplus-only mandatory policy"],answer:2,exp:"Deficit FRBM framework के भीतर नियंत्रित रखा गया है"},

{q:"Bihar Budget 2025–26 का macroeconomic character सबसे सही कौन दर्शाता है?",options:["Stagnation-driven budget","Crisis-driven budget","Balanced developmental budget","Recessionary contraction budget"],answer:2,exp:"यह balanced developmental budget है जिसमें growth और welfare दोनों शामिल हैं"},

{q:"यदि “capital expenditure” को development proxy माना जाए, तो Bihar का संकेत क्या है?",options:["Infrastructure neglect","Infrastructure push","No investment cycle","Private-only investment model"],answer:1,exp:"Capital expenditure infrastructure development का संकेत देता है"},

{q:"Bihar Budget 2025–26 में “state capacity” का सबसे अच्छा संकेत क्या है?",options:["Revenue shutdown","High dependency + managed fiscal balance","Zero expenditure state","Debt elimination phase"],answer:1,exp:"High dependency के बावजूद fiscal balance manage किया गया है"},

{q:"यदि Bihar के fiscal structure को “transfer-dependent economy” कहा जाए, तो इसका सबसे मजबूत संकेत क्या है?",options:["High internal tax buoyancy","High dependence on Central tax devolution","Zero borrowing requirement","Export surplus dominance"],answer:1,exp:"बिहार की revenue structure में Central tax devolution की high dependence दिखती है"},

{q:"Bihar Budget 2025–26 में “expenditure quality” का सबसे सही संकेत कौन सा है?",options:["Revenue expenditure dominance with welfare orientation","Capital expenditure dominance with military focus","Subsidy-only expenditure pattern","Zero revenue expenditure structure"],answer:0,exp:"Revenue expenditure dominant है और welfare-oriented nature दिखाता है"},

{q:"यदि fiscal deficit 3% के भीतर है, तो इसका सबसे सही implication क्या होगा?",options:["Unlimited borrowing allowed","FRBM compliance maintained","Debt-free economy achieved","Revenue deficit guaranteed"],answer:1,exp:"3% के भीतर deficit होने का मतलब FRBM compliance है"},

{q:"Bihar Budget 2025–26 के “developmental orientation” को सबसे अच्छा कौन दर्शाता है?",options:["Defence + aerospace push","Human capital + infrastructure investment","Import substitution policy","Cryptocurrency adoption"],answer:1,exp:"Education, health और infrastructure पर focus human capital + infrastructure orientation दिखाता है"},

{q:"निम्न में से कौन-सा निष्कर्ष Bihar के revenue structure को सबसे सही दर्शाता है?",options:["Internal revenue completely sufficient","Central transfers play stabilizing role","No dependency on Centre","Tax revenue negligible"],answer:1,exp:"Central transfers बिहार की fiscal stability को support करते हैं"},

{q:"Bihar Budget 2025–26 में capital expenditure का प्रमुख उद्देश्य क्या है?",options:["Salary distribution","Asset creation and infrastructure expansion","Subsidy redistribution","Loan repayment only"],answer:1,exp:"Capital expenditure का मुख्य उद्देश्य asset creation और infrastructure expansion है"},

{q:"यदि Education sector सबसे अधिक allocation प्राप्त करता है, तो इसका सबसे logical inference क्या है?",options:["Military expansion priority","Human capital investment focus","Industrial shutdown policy","Export-led economy shift"],answer:1,exp:"Education सबसे बड़ा allocation होने का मतलब human capital investment focus है"},

{q:"Bihar Budget 2025–26 में “balanced budget approach” का सही अर्थ क्या है?",options:["Zero deficit mandatory","Growth + welfare + fiscal discipline integration","Only welfare spending","Only capital investment"],answer:1,exp:"Balanced approach में growth, welfare और fiscal discipline तीनों शामिल होते हैं"},

{q:"यदि Revenue expenditure ~80%+ है, तो इसका सबसे सही implication क्या है?",options:["Short-term consumption dominance","Long-term asset creation dominance","No government spending","Private sector control"],answer:0,exp:"Revenue expenditure dominance short-term consumption/service delivery को दर्शाता है"},

{q:"Bihar Budget 2025–26 में “fiscal sustainability” किससे best indicated होती है?",options:["Increasing deficit beyond FRBM","Controlled deficit within limits","Zero expenditure policy","Debt elimination instant phase"],answer:1,exp:"Controlled deficit (FRBM limit के भीतर) fiscal sustainability दिखाता है"},



],
set2: [

{q:"Bihar Budget के संदर्भ में “growth constraint” का सबसे संभावित कारण क्या माना जा सकता है?",options:["Excess industrialization","High dependency on central transfers","Excess export surplus","Low population density"],answer:1,exp:"High central dependency growth constraints का प्रमुख कारण माना जाता है"},

{q:"निम्न में से कौन-सा Bihar Budget 2025–26 का सबसे सही macro characterization है?",options:["Crisis restructuring budget","Balanced developmental welfare budget","War economy budget","Export-only economy budget"],answer:1,exp:"यह budget balanced development + welfare approach दिखाता है"},

{q:"यदि capital expenditure बढ़ता है, तो इसका long-term impact क्या होगा?",options:["Asset destruction","Infrastructure creation and productivity gain","Inflation collapse","Revenue loss guarantee"],answer:1,exp:"Capital expenditure से infrastructure और productivity बढ़ती है"},

{q:"Bihar Budget 2025–26 में “policy priority alignment” का सही संकेत क्या है?",options:["Military modernization","Social sector + infrastructure convergence","Cryptocurrency regulation","Oil export dependency"],answer:1,exp:"Social sector और infrastructure का combined focus policy priority दिखाता है"},

{q:"Bihar के fiscal model को best describe कौन करता है?",options:["Fully self-financed model","Hybrid model with central support + state execution","Zero dependency model","Private-only funded model"],answer:1,exp:"बिहार का model hybrid है जिसमें central support और state execution दोनों शामिल हैं"},

{q:"यदि Bihar की fiscal strategy को “high transfer economy with controlled deficit” कहा जाए, तो इसका सबसे सही संकेत क्या होगा?",options:["Internal tax revenue dominance","External grant dependence with fiscal discipline","Export-led surplus economy","Zero borrowing state model"],answer:1,exp:"यह मॉडल central transfers पर निर्भर रहते हुए fiscal discipline दिखाता है"},

{q:"Bihar Budget 2025–26 में “expenditure prioritization” का सबसे मजबूत संकेत कौन सा है?",options:["Capital-heavy defense allocation","Social sector + infrastructure focus","Subsidy-only consumption model","Private sector-led budget structure"],answer:1,exp:"Education, health और infrastructure पर प्राथमिकता दी गई है"},

{q:"यदि Revenue Expenditure लगभग 80–85% range में है, तो इसका सबसे logical interpretation क्या होगा?",options:["Long-term asset creation dominance","Short-term service delivery orientation","No government consumption","Export surplus economy"],answer:1,exp:"Revenue expenditure का dominance service delivery और short-term spending को दर्शाता है"},

{q:"Bihar Budget 2025–26 में fiscal deficit 3% limit के भीतर है, इसका सबसे सही inference क्या होगा?",options:["Fiscal indiscipline","FRBM compliance","Debt-free economy","Surplus economy"],answer:1,exp:"3% limit के भीतर deficit होने का मतलब FRBM compliance है"},

{q:"यदि capital expenditure बढ़ रहा है, तो इसका सबसे सही macro implication क्या होगा?",options:["Consumption reduction only","Infrastructure accumulation","Tax base collapse","Import dependency increase"],answer:1,exp:"Capital expenditure से infrastructure और asset creation बढ़ता है"},

{q:"Bihar Budget 2025–26 में “growth + welfare integration” का सबसे सही उदाहरण कौन सा है?",options:["Defence expansion + exports","Education + infrastructure spending","Cryptocurrency regulation","Oil refinery expansion"],answer:1,exp:"Education और infrastructure spending growth + welfare integration दिखाता है"},

{q:"यदि Central transfers total revenue का major हिस्सा बनाते हैं, तो इसका सबसे सही fiscal conclusion क्या होगा?",options:["Fully independent state","Dependency-driven fiscal base","Zero central role","Export surplus economy"],answer:1,exp:"Central transfers पर निर्भरता fiscal dependency दिखाती है"},

{q:"Bihar Budget 2025–26 में “human capital investment” का सबसे direct indicator क्या होगा?",options:["Defence expenditure","Education + health allocation","Import subsidies","Crypto funding"],answer:1,exp:"Education और health human capital investment के प्रमुख indicators हैं"},

{q:"यदि fiscal deficit stable (~3%) है, तो policy implication क्या होगा?",options:["Aggressive expansion beyond limits","Controlled borrowing under FRBM","Zero expenditure state","Debt elimination phase"],answer:1,exp:"Stable deficit FRBM framework के भीतर controlled borrowing दिखाता है"},

{q:"Bihar Budget 2025–26 में “budget structure” का सबसे सही classification क्या है?",options:["War economy budget","Balanced development budget","Export monopoly budget","Crisis contraction budget"],answer:1,exp:"यह balanced development budget है"},

{q:"यदि Revenue expenditure dominant है, तो इसका सबसे सही implication क्या होगा?",options:["Asset creation dominance","Service delivery and administrative focus","Zero welfare spending","Private sector control"],answer:1,exp:"Revenue expenditure का dominance service delivery और administration को दर्शाता है"},

{q:"Bihar Budget 2025–26 में “state capacity” का सबसे सही संकेत क्या है?",options:["No spending model","Managed dependency with fiscal discipline","Full self-financing model","Export-only revenue model"],answer:1,exp:"Managed dependency के साथ fiscal discipline state capacity दिखाता है"},

{q:"यदि Education सबसे बड़ा sector है, तो इसका सबसे सही macro implication क्या होगा?",options:["Military modernization","Human development priority","Industrial shutdown","Agriculture-only economy"],answer:1,exp:"Education dominance human development priority को दर्शाता है"},

{q:"Bihar Budget 2025–26 का “development pattern” किससे best describe होगा?",options:["Single-sector dominance","Multi-sector balanced investment","Defense-heavy expansion","Private-only financing"],answer:1,exp:"यह multi-sector balanced investment approach है"},

{q:"यदि Bihar Budget को “centrally supported fiscal model” कहा जाए, तो इसका core reason क्या है?",options:["High export surplus","High central devolution share","Zero tax collection","Private funding dominance"],answer:1,exp:"Central devolution का high share इस model का मुख्य कारण है"},

{q:"यदि Bihar Budget 2025–26 में capital expenditure को “future output creator” माना जाए, तो इसका सबसे सही macro implication क्या होगा?",options:["Immediate consumption increase","Long-term productivity expansion","Short-term fiscal stress only","Export decline"],answer:1,exp:"Capital expenditure से long-term productivity और infrastructure बढ़ता है"},

{q:"बिहार बजट में fiscal consolidation का सबसे सही संकेत क्या है?",options:["Deficit beyond FRBM limit","Controlled deficit with stable revenue base","Zero expenditure policy","Debt default situation"],answer:1,exp:"Controlled deficit और stable revenue base fiscal consolidation को दर्शाते हैं"},

{q:"यदि किसी राज्य का budget size GSDP के लगभग 25–30% range में हो, तो इसका सही interpretation क्या होगा?",options:["Economy is fully privatized","High state intervention in development","No fiscal activity","Export-only economy"],answer:1,exp:"यह high state intervention in development को दर्शाता है"},

{q:"Bihar Budget 2025–26 में “social sector dominance” का सबसे मजबूत indicator क्या होगा?",options:["Defence allocation rise","Education + Health priority spending","Energy export surplus","Crypto investment schemes"],answer:1,exp:"Education और Health की priority spending social sector dominance दिखाती है"},

{q:"यदि revenue expenditure share अधिक (~80%+) है, तो इसका सबसे सही economic implication क्या होगा?",options:["Asset creation dominance","Service delivery oriented budget","Industrial collapse","Zero governance cost"],answer:1,exp:"Revenue expenditure dominance service delivery oriented budget को दर्शाता है"},

{q:"Bihar Budget 2025–26 में “dependency fiscal structure” का core driver क्या है?",options:["High internal GST surplus","Central tax devolution mechanism","Zero tax collection policy","Export monopoly"],answer:1,exp:"Central tax devolution बिहार की fiscal dependency का मुख्य कारण है"},

{q:"यदि fiscal deficit 3% के भीतर है, तो इसका सबसे सही macro signal क्या है?",options:["Fiscal instability","Rule-based fiscal discipline","Debt crisis escalation","Inflation collapse"],answer:1,exp:"3% के भीतर deficit FRBM rule-based fiscal discipline दिखाता है"},

{q:"बिहार बजट 2025–26 में “growth model” किस प्रकार का है?",options:["Single sector extractive model","Multi-sector balanced investment model","Pure industrial monopoly model","Agricultural stagnation model"],answer:1,exp:"यह multi-sector balanced investment model है"},

{q:"यदि Central transfers राज्य के revenue का बड़ा हिस्सा हैं, तो इसका सही fiscal implication क्या होगा?",options:["Full self-sufficiency","Structural dependency with stabilizing effect","Zero external support","Export-based surplus"],answer:1,exp:"Central transfers fiscal stability के साथ structural dependency दिखाते हैं"},

{q:"Bihar Budget 2025–26 में “human capital formation” का सबसे direct economic effect क्या होगा?",options:["Consumption decline","Long-term productivity rise","Import dependency increase","Fiscal deficit elimination"],answer:1,exp:"Human capital formation से long-term productivity बढ़ती है"},

{q:"यदि capital expenditure बढ़ाया जाए, तो सबसे logical policy outcome क्या होगा?",options:["Infrastructure stock creation","Revenue collapse","Tax evasion rise","Subsidy elimination"],answer:0,exp:"Capital expenditure से infrastructure stock creation होता है"},

{q:"Bihar Budget 2025–26 में “balanced fiscal design” का सबसे सही अर्थ क्या है?",options:["Zero deficit mandatory policy","Growth + welfare + fiscal prudence combination","Only welfare spending","Only industrial expansion"],answer:1,exp:"Balanced fiscal design में growth, welfare और fiscal prudence शामिल होते हैं"},

{q:"यदि Education allocation highest है, तो इसका macroeconomic interpretation क्या होगा?",options:["Military prioritization","Human development focus","Industrial decline","Export dependency"],answer:1,exp:"Education highest allocation human development focus दिखाता है"},

{q:"Bihar Budget 2025–26 में “fiscal health” का best indicator क्या है?",options:["Unlimited borrowing","Controlled deficit + stable revenue flow","Zero expenditure","Debt default trend"],answer:1,exp:"Controlled deficit और stable revenue flow fiscal health का संकेत है"},

{q:"यदि budget composition में revenue expenditure dominant है, तो यह किस governance model को दर्शाता है?",options:["Asset creation economy","Service delivery governance model","Export surplus model","Private-only economy"],answer:1,exp:"Revenue expenditure dominance service delivery governance model को दर्शाता है"},

{q:"यदि किसी राज्य का budget structure “high revenue expenditure + moderate capital formation” दर्शाता है, तो सबसे सही macro interpretation क्या होगा?",options:["Asset creation dominance","Service-oriented governance model","Export-led industrial model","Private investment monopoly"],answer:1,exp:"Revenue expenditure dominance service-oriented governance को दर्शाता है"},

{q:"Bihar Budget 2025–26 में fiscal behavior को देखते हुए कौन सा inference सबसे सही है?",options:["Uncontrolled deficit expansion","Rule-based fiscal management within legal limits","Debt-free zero borrowing model","Export surplus driven economy"],answer:1,exp:"Fiscal discipline FRBM limits के भीतर दिखाई देता है"},

{q:"यदि Central transfers budget का major stabilizer हैं, तो यह किस structural condition को दर्शाता है?",options:["Fully autonomous fiscal base","Inter-governmental dependency structure","Zero federal interaction","Industrial surplus economy"],answer:1,exp:"Central transfers dependency-based fiscal structure दिखाते हैं"},

{q:"Bihar Budget 2025–26 में “capital formation” का primary objective क्या माना जाएगा?",options:["Salary distribution","Long-term productive asset creation","Subsidy expansion","Revenue deficit increase"],answer:1,exp:"Capital formation का उद्देश्य long-term assets बनाना होता है"},

{q:"यदि Education + Health मिलकर largest share बनाते हैं, तो इसका macro implication क्या होगा?",options:["Military expansion focus","Human development prioritization","Import dependency model","Crypto-based fiscal system"],answer:1,exp:"Education और health human development focus दिखाते हैं"},

{q:"Bihar Budget 2025–26 में “fiscal sustainability” का सबसे strong indicator क्या है?",options:["Unlimited borrowing capacity","Controlled deficit within FRBM framework","Zero government spending","External debt default"],answer:1,exp:"FRBM के भीतर controlled deficit fiscal sustainability को दर्शाता है"},

{q:"यदि revenue expenditure dominant है, तो इसका सबसे logical implication क्या होगा?",options:["Infrastructure-heavy economy","Consumption and service delivery oriented structure","Export monopoly economy","Zero welfare model"],answer:1,exp:"Revenue expenditure dominance service delivery economy दिखाता है"},

{q:"Bihar Budget 2025–26 का “growth strategy” सबसे सही किससे वर्णित होगा?",options:["Single sector industrial push","Multi-sector integrated development approach","Agriculture-only dependency model","Defence expansion strategy"],answer:1,exp:"यह multi-sector integrated development approach है"},

{q:"यदि fiscal deficit ~3% limit में है, तो इसका governance implication क्या है?",options:["Fiscal indiscipline","Rule-compliant macro management","Debt collapse situation","Inflation shock policy"],answer:1,exp:"3% limit के भीतर deficit FRBM compliance दिखाता है"},

{q:"Bihar Budget 2025–26 में “state capacity” का सबसे सही indicator क्या है?",options:["Zero expenditure model","Managed dependency with institutional spending","Private-only governance","Export monopoly state"],answer:1,exp:"Managed dependency के साथ institutional spending state capacity दिखाता है"},

{q:"यदि capital expenditure बढ़ता है, तो long-term effect क्या होगा?",options:["Asset depletion","Productivity-enhancing infrastructure base","Tax collapse","Revenue shutdown"],answer:1,exp:"Capital expenditure से infrastructure और productivity बढ़ती है"},

{q:"Bihar Budget 2025–26 में “policy orientation” को best describe कौन करेगा?",options:["Crisis contraction model","Balanced welfare-growth framework","Military expansion model","Import dependency model"],answer:1,exp:"Balanced welfare-growth framework सही description है"},

{q:"यदि Central tax devolution revenue का major share है, तो इसका सही fiscal meaning क्या है?",options:["Self-sufficient economy","Federal redistribution dependent system","Zero taxation system","Export surplus economy"],answer:1,exp:"Central devolution पर निर्भरता fiscal dependency दिखाती है"},

{q:"Bihar Budget 2025–26 में “development focus” का सबसे accurate interpretation क्या है?",options:["Consumption-driven policy","Human capital + infrastructure investment model","Defence-centric allocation","Crypto economy shift"],answer:1,exp:"Human capital + infrastructure investment development focus है"},

{q:"यदि budget को “balanced development framework” कहा जाए, तो इसका core logic क्या होगा?",options:["Only welfare expansion","Integration of growth, welfare and fiscal prudence","Only industrial growth","Only agricultural focus"],answer:1,exp:"Balanced framework में growth, welfare और fiscal prudence शामिल होते हैं"},





],
set3: [
{q:"गंगा उद्गम?",options:["गंगोत्री","यमुना","सतलुज","नर्मदा"],answer:0,exp:"गंगोत्री"},
{q:"भारत की सबसे बड़ी नदी?",options:["गंगा","यमुना","गोदावरी","कावेरी"],answer:0,exp:"गंगा"}
],
set4: [
{q:"डेल्टा?",options:["सुंदरबन","थार","हिमालय","घाट"],answer:0,exp:"सुंदरबन"},
{q:"राजस्थान?",options:["रेगिस्तान","पहाड़","नदी","समुद्र"],answer:0,exp:"रेगिस्तान"}
]
},

april: {
set1: [
{q:"लोकसभा?",options:["निचला सदन","उच्च सदन","न्यायालय","राज्य"],answer:0,exp:"लोकसभा"},
{q:"प्रधानमंत्री?",options:["सरकार प्रमुख","राज्यपाल","राष्ट्रपति","जज"],answer:0,exp:"सरकार प्रमुख"}
],
set2: [
{q:"राष्ट्रपति?",options:["राज्य प्रमुख","सैनिक","किसान","व्यापारी"],answer:0,exp:"राज्य प्रमुख"},
{q:"संविधान?",options:["कानून","धर्म","नदी","योजना"],answer:0,exp:"कानून"}
],
set3: [
{q:"न्यायपालिका?",options:["न्याय देती","कानून बनाती","टैक्स","सेना"],answer:0,exp:"न्याय देती"},
{q:"संसद?",options:["कानून बनाती","न्याय देती","लड़ाई","व्यापार"],answer:0,exp:"कानून बनाती"}
],
set4: [
{q:"मौलिक अधिकार?",options:["6","5","7","8"],answer:0,exp:"6"},
{q:"लोकतंत्र?",options:["जनता शासन","राजा","सेना","धर्म"],answer:0,exp:"जनता शासन"}
]
},

may: {
set1: [
{q:"गंगा कहाँ से?",options:["गंगोत्री","यमुना","सतलुज","नर्मदा"],answer:0,exp:"गंगोत्री"},
{q:"भारत राज्य?",options:["राजस्थान","नेपाल","चीन","भूटान"],answer:0,exp:"भारत"}
],
set2: [
{q:"सबसे बड़ा राज्य?",options:["राजस्थान","बिहार","UP","MP"],answer:0,exp:"राजस्थान"},
{q:"डेल्टा?",options:["सुंदरबन","थार","हिमालय","घाट"],answer:0,exp:"सुंदरबन"}
],
set3: [
{q:"नदी?",options:["गंगा","थार","हिमालय","रेगिस्तान"],answer:0,exp:"गंगा"},
{q:"मरुस्थल?",options:["थार","गंगा","यमुना","नर्मदा"],answer:0,exp:"थार"}
],
set4: [
{q:"भारत?",options:["लोकतंत्र","राजशाही","तानाशाही","साम्राज्य"],answer:0,exp:"लोकतंत्र"},
{q:"राजधानी?",options:["नई दिल्ली","मुंबई","पटना","कोलकाता"],answer:0,exp:"नई दिल्ली"}
]
},

june: {
set1: [
{q:"संविधान लागू?",options:["1950","1947","1952","1942"],answer:0,exp:"1950"},
{q:"लोकसभा?",options:["निचला","उच्च","न्यायालय","राज्य"],answer:0,exp:"निचला"}
],
set2: [
{q:"COP-29?",options:["जलवायु","युद्ध","व्यापार","कृषि"],answer:0,exp:"जलवायु"},
{q:"जलवायु सम्मेलन?",options:["COP","G20","BRICS","NATO"],answer:0,exp:"COP"}
],
set3: [
{q:"भारत नीति?",options:["विकास","युद्ध","कर","सेना"],answer:0,exp:"विकास"},
{q:"ONOS?",options:["ज्ञान","टैक्स","सेना","राजनीति"],answer:0,exp:"ज्ञान"}
],
set4: [
{q:"बिहार विजन 2047?",options:["विकास","युद्ध","राजनीति","धर्म"],answer:0,exp:"विकास"},
{q:"डिजिटल इंडिया?",options:["टेक","खेती","सेना","धर्म"],answer:0,exp:"टेक"}
]
},

july: {set1:[{q:"बिहार?",options:["राज्य","देश","जिला","नगर"],answer:0,exp:"राज्य"},{q:"गंगा?",options:["नदी","पहाड़","रेगिस्तान","झील"],answer:0,exp:"नदी"}],
set2:[{q:"हिमालय?",options:["पहाड़","नदी","समुद्र","रेगिस्तान"],answer:0,exp:"पहाड़"},{q:"राजस्थान?",options:["राज्य","देश","नगर","द्वीप"],answer:0,exp:"राज्य"}],
set3:[{q:"भारत?",options:["देश","राज्य","नगर","जिला"],answer:0,exp:"देश"},{q:"कोसी?",options:["नदी","पहाड़","झील","घाट"],answer:0,exp:"नदी"}],
set4:[{q:"डेल्टा?",options:["भूमि","जल","आग","हवा"],answer:0,exp:"भूमि"},{q:"लोकतंत्र?",options:["जनता","राजा","सेना","धर्म"],answer:0,exp:"जनता"}]
},

august: {set1:[{q:"भारत?",options:["देश","राज्य","नगर","द्वीप"],answer:0,exp:"देश"},{q:"गंगा?",options:["नदी","पहाड़","झील","रेगिस्तान"],answer:0,exp:"नदी"}],
set2:[{q:"हिमालय?",options:["पहाड़","नदी","समुद्र","रेगिस्तान"],answer:0,exp:"पहाड़"},{q:"बिहार?",options:["राज्य","देश","नगर","द्वीप"],answer:0,exp:"राज्य"}],
set3:[{q:"थार?",options:["रेगिस्तान","नदी","पहाड़","झील"],answer:0,exp:"रेगिस्तान"},{q:"लोकसभा?",options:["सदन","नदी","देश","राज्य"],answer:0,exp:"सदन"}],
set4:[{q:"संविधान?",options:["कानून","धर्म","नदी","पहाड़"],answer:0,exp:"कानून"},{q:"भारत दिवस?",options:["26 जनवरी","15 अगस्त","2 अक्टूबर","1 मई"],answer:0,exp:"26 जनवरी"}]
},

september: {set1:[{q:"गंगा?",options:["नदी","पहाड़","झील","रेगिस्तान"],answer:0,exp:"नदी"},{q:"भारत?",options:["देश","राज्य","नगर","द्वीप"],answer:0,exp:"देश"}],
set2:[{q:"हिमालय?",options:["पहाड़","नदी","समुद्र","रेगिस्तान"],answer:0,exp:"पहाड़"},{q:"बिहार?",options:["राज्य","देश","नगर","द्वीप"],answer:0,exp:"राज्य"}],
set3:[{q:"थार?",options:["रेगिस्तान","नदी","पहाड़","झील"],answer:0,exp:"रेगिस्तान"},{q:"लोकतंत्र?",options:["जनता","राजा","सेना","धर्म"],answer:0,exp:"जनता"}],
set4:[{q:"संविधान?",options:["कानून","धर्म","नदी","पहाड़"],answer:0,exp:"कानून"},{q:"भारत दिवस?",options:["26 जनवरी","15 अगस्त","2 अक्टूबर","1 मई"],answer:0,exp:"26 जनवरी"}]
},

october: {set1:[{q:"गंगा?",options:["नदी","पहाड़","झील","रेगिस्तान"],answer:0,exp:"नदी"},{q:"भारत?",options:["देश","राज्य","नगर","द्वीप"],answer:0,exp:"देश"}],
set2:[{q:"हिमालय?",options:["पहाड़","नदी","समुद्र","रेगिस्तान"],answer:0,exp:"पहाड़"},{q:"बिहार?",options:["राज्य","देश","नगर","द्वीप"],answer:0,exp:"राज्य"}],
set3:[{q:"थार?",options:["रेगिस्तान","नदी","पहाड़","झील"],answer:0,exp:"रेगिस्तान"},{q:"लोकतंत्र?",options:["जनता","राजा","सेना","धर्म"],answer:0,exp:"जनता"}],
set4:[{q:"संविधान?",options:["कानून","धर्म","नदी","पहाड़"],answer:0,exp:"कानून"},{q:"भारत दिवस?",options:["26 जनवरी","15 अगस्त","2 अक्टूबर","1 मई"],answer:0,exp:"26 जनवरी"}]
},

november: {set1:[{q:"गंगा?",options:["नदी","पहाड़","झील","रेगिस्तान"],answer:0,exp:"नदी"},{q:"भारत?",options:["देश","राज्य","नगर","द्वीप"],answer:0,exp:"देश"}],
set2:[{q:"हिमालय?",options:["पहाड़","नदी","समुद्र","रेगिस्तान"],answer:0,exp:"पहाड़"},{q:"बिहार?",options:["राज्य","देश","नगर","द्वीप"],answer:0,exp:"राज्य"}],
set3:[{q:"थार?",options:["रेगिस्तान","नदी","पहाड़","झील"],answer:0,exp:"रेगिस्तान"},{q:"लोकतंत्र?",options:["जनता","राजा","सेना","धर्म"],answer:0,exp:"जनता"}],
set4:[{q:"संविधान?",options:["कानून","धर्म","नदी","पहाड़"],answer:0,exp:"कानून"},{q:"भारत दिवस?",options:["26 जनवरी","15 अगस्त","2 अक्टूबर","1 मई"],answer:0,exp:"26 जनवरी"}]
},

december: {set1:[{q:"बिहार दिवस?",options:["22 मार्च","15 अगस्त","26 जनवरी","2 अक्टूबर"],answer:0,exp:"22 मार्च"},{q:"गांधी जयंती?",options:["2 अक्टूबर","15 अगस्त","26 जनवरी","1 मई"],answer:0,exp:"2 अक्टूबर"}],
set2:[{q:"COP?",options:["जलवायु","युद्ध","धर्म","राजनीति"],answer:0,exp:"जलवायु"},{q:"भारत नीति?",options:["विकास","युद्ध","कर","सेना"],answer:0,exp:"विकास"}],
set3:[{q:"ONOS?",options:["ज्ञान","टैक्स","सेना","राजनीति"],answer:0,exp:"ज्ञान"},{q:"विजन 2047?",options:["विकास","युद्ध","धर्म","राजनीति"],answer:0,exp:"विकास"}],
set4:[{q:"डिजिटल इंडिया?",options:["टेक","खेती","सेना","धर्म"],answer:0,exp:"टेक"},{q:"भारत?",options:["देश","राज्य","नगर","द्वीप"],answer:0,exp:"देश"}]
}

};

/* ================= GLOBAL ================= */
let currentTopic = "january";
let currentSet = "set1";
let questions = allTopics[currentTopic][currentSet];

let index = 0;

let selected = {};
let marked = {};
let resultStatus = {};

// Wrong Questions Retry Feature
let wrongQuestions = [];

// Timer
let timer;
let time = 20;

function saveProgress(){
    localStorage.setItem("quizState", JSON.stringify({
        currentTopic,
        currentSet,
        index,
        selected,
        marked,
        time
    }));
}

function loadProgress(){

    const data = localStorage.getItem("quizState");

    if(!data) return false;

    const state = JSON.parse(data);

    currentTopic = state.currentTopic || "january";
    currentSet = state.currentSet || "set1";
    index = state.index || 0;

    selected = state.selected || {};
    marked = state.marked || {};

    time = state.time || 20;

    questions = allTopics[currentTopic][currentSet] || [];

    return true;
}

// ================= ANALYTICS =================
let analytics = {
    total: 0,
    correct: 0,
    wrong: 0,
    negative: 0,
    percentage: 0
};

// Negative marking rule
let negativeMark = 0.25;

/* ================= SAFE INIT ================= */
function initApp(){
    if(!allTopics[currentTopic]){
        currentTopic = Object.keys(allTopics)[0];
    }

    currentSet = Object.keys(allTopics[currentTopic])[0];

    questions = shuffleArray(allTopics[currentTopic][set] || []);

    reset();
}

/* ================= LOAD TOPIC ================= */
function loadTopic(topic){

if(!allTopics[topic]){
alert("Topic not found: " + topic);
return;
}

currentTopic = topic;
currentSet = Object.keys(allTopics[topic])[0];

questions = shuffleArray(allTopics[currentTopic][currentSet] || []);

index = 0;

reset();
updateActiveButtons();
}

/* ================= LOAD SET ================= */
function loadSet(set){

if(!allTopics[currentTopic] || !allTopics[currentTopic][set]){
alert("Set not found: " + set);
return;
}

currentSet = set;
questions = allTopics[currentTopic][currentSet] || [];

index = 0;

reset();
updateActiveButtons();
}

/* ================= RESET ================= */
function reset(){

document.getElementById("resultBox").style.display = "none";
document.getElementById("quizBox").style.display = "block";

index = 0;
selected = {};
marked = {};
resultStatus = {};
wrongQuestions = [];

clearInterval(timer);

load();
render();
startTimer();
updateActiveButtons();

}

/* ================= LOAD QUESTION ================= */
function load(){

if(!questions.length) return;

let q = questions[index];

document.getElementById("qText").innerText =
"Q" + (index + 1) + ": " + q.q;

document.getElementById("status").innerText =
currentTopic + " | " + currentSet + " | " + (index + 1) + "/" + questions.length;

let box = document.getElementById("options");
box.innerHTML = "";

q.options.forEach((o,i)=>{

let div = document.createElement("div");
div.className = "option";
div.innerText = o;

if(selected[index] === i){
div.classList.add("selected");
}

div.onclick = ()=>{

if(selected[index] === i){
delete selected[index];
} else {
selected[index] = i;
}

saveProgress();

load();
render();

};

box.appendChild(div);

});

updateBar();
}

/* ================= NAV ================= */
function next(){
if(index < questions.length - 1){
index++;

saveProgress();

load();
render();
startTimer();
}else{
submitQuiz();
}
}

function prev(){
if(index > 0){
index--;

saveProgress();

load();
render();
startTimer();
}
}

function mark(){
marked[index] = true;

saveProgress();

render();
}

/* ================= PALETTE ================= */
function render(){

let p = document.getElementById("palette");
p.innerHTML = "";

questions.forEach((q,i)=>{

let b = document.createElement("div");
b.className = "qbtn";
b.innerText = i + 1;

if(resultStatus[i] === "correct"){
b.classList.add("correct");
b.innerHTML = i + 1 + " ✔";
}
else if(resultStatus[i] === "wrong"){
b.classList.add("wrong");
b.innerHTML = i + 1 + " ❌";
}
else if(marked[i]){
b.classList.add("marked");
}
else if(selected[i] !== undefined){
b.classList.add("answered");
}

b.onclick = ()=>{
index = i;
load();
render();
startTimer();
};

p.appendChild(b);
});
}

/* ================= PROGRESS ================= */
function updateBar(){
document.getElementById("bar").style.width =
((index + 1) / questions.length) * 100 + "%";
}

/* ================= TIMER ================= */
function startTimer(){

clearInterval(timer);

time = 20;

timer = setInterval(()=>{

time--;
saveProgress();

document.getElementById("timerText").innerText = "⏳ " + time;
document.getElementById("timerBar").style.width = (time/20)*100 + "%";

if(time <= 0){
next();
}

},1000);
}

/* ================= SUBMIT ================= */
function submitQuiz(){

clearInterval(timer);

let score = 0;
resultStatus = {};
wrongQuestions = [];

questions.forEach((q,i)=>{

if(selected[i] === q.answer){
score++;
resultStatus[i] = "correct";
}else{
resultStatus[i] = "wrong";
wrongQuestions.push(q);
}
localStorage.removeItem("quizState");

});


document.getElementById("quizBox").style.display = "none";
document.getElementById("resultBox").style.display = "block";

let percent = Math.round((score / questions.length) * 100);

document.getElementById("scoreText").innerHTML =
`<h3>Score: ${score}/${questions.length}</h3>
<h3>Percentage: ${percent}%</h3>
<button onclick="retryWrongQuestions()">
🔄 Retry Wrong Questions (${wrongQuestions.length})
</button>`;

let rev = document.getElementById("review");
rev.innerHTML = "";

questions.forEach((q,i)=>{

let div = document.createElement("div");

let userAnswer = selected[i];
let isCorrect = userAnswer === q.answer;

div.className = isCorrect ? "result-correct" : "result-wrong";

div.innerHTML =
"<b>Q:</b> " + q.q +
"<br><b>Your Answer:</b> " +
(userAnswer !== undefined ? q.options[userAnswer] : "<span style='color:gray'>Not Attempted</span>") +
"<br><b>Correct Answer:</b> <span class='correct-answer'>" + q.options[q.answer] + "</span>" +
"<br><b>Explanation:</b> " + q.exp +
"<hr>";

rev.appendChild(div);

});

render();
}

/* ================= RETRY ================= */
function retryWrongQuestions(){

if(!wrongQuestions.length){
alert("🎉 कोई गलत प्रश्न नहीं है");
return;
}

questions = [...wrongQuestions];

index = 0;
selected = {};
marked = {};
resultStatus = {};

clearInterval(timer);

document.getElementById("resultBox").style.display = "none";
document.getElementById("quizBox").style.display = "block";

load();
render();
startTimer();
}

/* ================= SAFE INIT ================= */
function initApp() {
    // अगर current topic मौजूद नहीं है तो पहला topic set करो
    if (!allTopics[currentTopic]) {
        currentTopic = Object.keys(allTopics)[0];
    }

    // उस topic का पहला set auto select करो
    currentSet = Object.keys(allTopics[currentTopic])[0];

    // ✔️ IMPORTANT FIX: "set" नहीं, currentSet use करना है
    questions = shuffleArray(allTopics[currentTopic][currentSet] || []);

    index = 0;

    reset();
}

function updateActiveButtons(){

    // TOPIC BUTTONS (MONTHS)
    document.querySelectorAll(".topic-btn").forEach(b => {
        b.classList.remove("active-btn");

        if (b.dataset.topic === currentTopic) {
            b.classList.add("active-btn");
        }
    });

    // SET BUTTONS
    document.querySelectorAll(".set-btn").forEach(b => {
        b.classList.remove("active-btn");

        if (b.dataset.set === currentSet) {
            b.classList.add("active-btn");
        }
    });

}


document.querySelectorAll(".topic-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const topic = btn.getAttribute("data-topic");
        loadTopic(topic);
    });
});

document.querySelectorAll(".set-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const set = btn.getAttribute("data-set");
        loadSet(set);
    });
});

function shuffleArray(arr){
    return arr
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
}

window.onload = () => {

    if(loadProgress()){

        load();
        render();
        startTimer();
        updateActiveButtons();

    }else{

        initApp();

    }

};

// TOPIC BUTTON CLICK
document.querySelectorAll(".topic-btn").forEach(btn=>{
    btn.onclick = () => loadTopic(btn.dataset.topic);
});

// SET BUTTON CLICK
document.querySelectorAll(".set-btn").forEach(btn=>{
    btn.onclick = () => loadSet(btn.dataset.set);
});