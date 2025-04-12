// Question Sets for the In-Basket Exercise
const questionSets = [
  {
  "title": "सुर्योदय नगरपालिकाका प्रमुख प्रशासकीय अधिकृत",
  "background": "<p>तपाईं रामप्रसाद पौडेल, मिति २०७९।२।२० गते बिहान १० बजे सुर्योदय नगरपालिकामा प्रमुख प्रशासकीय अधिकृतको रूपमा कार्यभार सम्हाल्दै हुनुहुन्छ। नगर प्रमुख, उपप्रमुख, कार्यपालिका सदस्यहरू सहितको नगर कार्यपालिकाले तपाईंलाई कार्यालयमा स्वागत गरेको छ।</p><p>तपाईं मातहत लेखा शाखा, योजना शाखा लगायतका शाखाहरू रहेका छन्। योजना शाखामा कर्मचारी रिक्त रहेको हुँदा प्रशासन शाखाका नायव सुब्बाले उक्त जिम्मेवारी सम्हाल्दै आएका छन्। नगरपालिकाका १० वडाहरू मध्ये २ वटा वडामा वडा सचिवको पद रिक्त रहेको छ। आज तपाईं कार्यभार सम्हाल्ने क्रममा तपाईंको टेबलमा विभिन्न १० वटा कार्यहरू छन्। ती कार्यहरूलाई वर्गीकरण र प्राथमिकीकरण गरी मुख्य कार्य र प्राथमिकता निर्धारणको कारणसहित प्रस्तुत गर्नुहोस्।</p>",

  "q1": "संघीय मामिला तथा सामान्य प्रशासन मन्त्रालयले चालु आर्थिक वर्षको हालसम्म सम्पन्न भएका योजनाहरूको विवरण १५ दिनभित्र पठाउन अनुरोध गर्दै २०७९।२।१० मा लेखिएको पत्र (कार्यालयमा दर्ता मिति २०७९।२।१८)।",
  "q2": "खानेपानी आयोजनाको उपभोक्ता समिति गठनमा राजनीतिक पक्षपात भएको भन्दै असन्तुष्ट समूहबाट १०० जना उपभोक्ताहरूको हस्ताक्षरसहित ज्ञापनपत्र प्राप्त, नगरप्रमुखले ३ दिनभित्र सत्यतथ्य बुझी आवश्यक कारवाही गर्न निर्देशन दिएका।",
  "q3": "प्रदेश नं. १ को सामाजिक विकास मन्त्रालयबाट राहत वितरणको विवरण ७ दिनभित्र पठाउन अनुरोध गरिएको ईमेल (प्राप्त मिति २०७९।२।१७)।",
  "q4": "जिल्ला प्रशासन कार्यालयबाट मिति २०७९।२।२० गते दिउँसो २ बजे प्रकोप व्यवस्थापन सम्बन्धी बैठकमा अनिवार्य रूपमा उपस्थित हुन निर्देशन आएको।",
  "q5": "नेपाल रेडक्रस सोसाइटी, सुर्योदय शाखाद्वारा मिति २०७९।२।२१ गते झाडापखालाग्रस्त क्षेत्रमा आयोजना गरिएको सचेतना कार्यक्रममा प्रमुख अतिथिको रूपमा उपस्थित हुन अनुरोध।",
  "q6": "प्रदेश नं. १ को पर्यटन मन्त्रालयले आगामी आर्थिक वर्षका लागि २ करोडसम्मको पर्यटकीय योजना छनोट गरी जेठ मसान्तभित्र पठाउन अनुरोध गरेको पत्र।",
  "q7": "कान्छा काकालाई हृदयघात भएर बि एण्ड सी अस्पतालमा भर्ना गरिएको, आवश्यक रकमसहित तुरुन्त अस्पताल जान भाईको फोन।",
  "q8": "न्यायिक समितिको बैठक २ महिनादेखि बस्न नसकेको, ३० वटा उजुरीहरू फछ्र्योट हुन बाँकी, उपप्रमुखले आज मिति २०७९।२।२० मा बैठक आह्वान गर्नुभएको।",
  "q9": "आगामी आर्थिक वर्षको योजना तर्जुमाका लागि वडास्तरीय बैठक जेठ मसान्तभित्र सम्पन्न गर्नुपर्ने, तर योजना शाखा रिक्त रहेकाले हालसम्म कुनै बैठक नबसिएको।",
  "q10": "वडा नं. १० को ५०० मिटर सडक कालोपत्रे भइसकेको, भुक्तानी प्रक्रिया अघि बढाउन अनुगमनको निवेदन मिति २०७९।२।१ मा दर्ता भइसकेको, तर हालसम्म अनुगमन नभएको।"
},

  {
  "title": "उच्च सरकारी वकिल कार्यालय, विराटनगरको उपन्यायाधिवक्ता",
  "background": "<p>तपाईं उच्च सरकारी वकिल कार्यालय, विराटनगरको उपन्यायाधिवक्ताको पदमा कार्यरत हुनुहुन्छ। कार्यालयमा १ सहन्यायाधिवक्ता, २ उपन्यायाधिवक्ता र ४ जना सहायक न्यायाधिवक्ताको दरबन्दी रहेको भए तापनि १ जना उपन्यायाधिवक्ता र २ जना सहायक न्यायाधिवक्ताको दरबन्दी रिक्त रहेको छ। साथै सहन्यायाधिवक्ता ७ दिनको लागि विदामा हुनुहुन्छ।</p><p>कार्यालयमा प्रशासन शाखा, दर्ता शाखा, मुद्दा शाखा, सूचना प्रविधि शाखा रहेका छन्। तपाईंलाई प्रशासन शाखा र मुद्दा शाखाको जिम्मेवारी तोकिएको छ र सोही दिन कार्यालय प्रमुखको जिम्मेवारी पनि तपाईंमाथि आएको छ। आज मिति २०७१।१२।२९ गते १०:२५ बजे कार्यालय पुग्दा तपाईंको टेबलमा १० वटा कार्यहरू राखिएका छन्। ती कार्यहरूको प्राथमिकता निर्धारण गरी गर्नुपर्ने कार्य र प्राथमिकता निर्धारणका कारणहरू पहिचान गर्नुहोस्।</p>",

  "q1": "जिल्ला सरकारी वकिल कार्यालय, झापाबाट मिति २०७१।११।२७ गते आएको, कानुनी विवादमा परेका बालबालिका संलग्न मुद्दाको फैसलाको पुनरावेदन मस्यौदा।",
  "q2": "मातहत जिल्ला सरकारी वकील कार्यालयहरूबाट कर्मचारी पदपूर्ति नहुँदा कार्यसम्पादनमा समस्या परेको भनी सरुवा गरिदिन अनुरोधसहित आएको गुनासो।",
  "q3": "आजको पेशीको १० वटा मिसिल तपाईंको टेबलमा राखिएको।",
  "q4": "भवन निर्माणमा भुक्तानीको लागि निर्माण व्यवसायी कार्यसम्पन्न प्रतिवेदन र पत्रसहित उपस्थित भएको।",
  "q5": "समुदायमा सरकारी वकिल कार्यक्रम आज ३:३० बजे तोकिएको।",
  "q6": "नायब महान्यायाधिवक्ता ज्यू निजी भ्रमणमा ताप्लेजुङ जान लाग्नुभएको र विराटनगरमा ४ बजे पुग्ने भएकाले स्वागत गर्न आउनु भनी निजी सचिवको फोन।",
  "q7": "विराटनगर महानगरपालिकाले मिति २०७१।१२।३० गते ४ बजे नयाँ वर्षको शुभकामना आदानप्रदान कार्यक्रममा निमन्त्रणा पठाएको।",
  "q8": "कम्प्युटर अपरेटरको सरुवा भएको र रमाना लिनको लागि रमाना पत्रसहित अगाडि उभिएको।",
  "q9": "महान्यायाधिवक्ता कार्यालयले मिति २०७२।०१।०४ गतेदेखि शुरु हुने तालिमको लागि एकजना सहायक न्यायाधिवक्ता पठाइदिन भनी पठाएको पत्र।",
  "q10": "जिल्ला प्रशासन कार्यालयले कानुनी राय माग गरी मिति २०७१।१२।२७ मा लेखेको पत्र।"
},

  {
  "title": "बाग्लुङ जिल्ला अदालतको श्रेस्तेदार",
  "background": "<p>तपाई जिल्ला अदालत बागलुङको श्रेस्तेदार पदमा कार्यरत हुनुहुन्छ। तपाईको कार्यालयमा दर्ता शाखा, मुद्दा शाखा, तहसिल शाखा, अभिलेख शाखा लगायतका शाखाहरु रहेका छन्। कार्यालयमा ३ जना न्यायाधिस, १ श्रेस्तेदार, ३ इजलास अधिकृत, १ तहसिलदार, ४ नायव सुव्वा, ३ तामेलदारको दरवन्दी रहेको छ। हाल १ जना न्यायाधीस र १ जना इजलास अधिकृतको दरवन्दी रिक्त छ भने तहसिलदार ७ दिनको लागि विदामा जानुभएको छ।</p><p>आज मिति २०७२।१२।२८ गते १० बजेर १५ मिनेटमा कार्यालय पुग्दा तपाइको टेवलमा १० वटा कामहरु राखिएको छ। ती कामहरुलाई प्राथमिकता निर्धारण गरी गर्नुपर्ने कार्य र प्राथमिकता निर्धारणका कारणहरु पहिचान गर्नुहोस्।</p>",
  
  "q1": "उच्च अदालतबाट निरीक्षणको लागि भोली २ बजे मुख्य न्यायाधीश आउनुहुने भनी उच्च अदालत, पोखरा बागलुङ इजलासको पत्र।",
  "q2": "एक जना कार्यालय सहयोगी मादक पदार्थ सेवन गरी कार्यालय आएको भनी प्रशासन शाखाको नायव सुव्वा तपाई समक्ष आउनुभएको।",
  "q3": "आफूलाई लागुऔषध मुद्दामा लागेको जरिवाना बुझाउन भनी सेवाग्राही निवेदनसहित उपस्थित भएका।",
  "q4": "बागलुङ नगरपालिकाले दिशामुक्त क्षेत्र घोषणा कार्यक्रममा अतिथिको रूपमा मिति २०७१।१२।२९ गते ११ बजे नगरपालिकाको सभाहलमा उपस्थितको लागि पत्र पठाएको।",
  "q5": "सम्बन्ध विच्छेदको फिरादपत्रको साथ एक जना महिला उपस्थित हुनुभएको।",
  "q6": "कानुनको विवादमा परेका बालक लिएर म्याद थपको जिल्ला प्रहरी कार्यालय बागलुङबाट सादा पोशाकसहित प्रहरी आईपुगेको।",
  "q7": "सर्वोच्च अदालतले २ वर्ष भन्दा बढी अवधि नाघेको मुद्दाहरूको अभिलेख ७ दिनभित्र पठाउन भनी मिति २०७२।१२।१५ गते लेखेको पत्र।",
  "q8": "सरकारी वकिल कार्यलयबाट सार्वजनिक अपराध मुद्दाको अभियोगपत्रसहित कार्यालय सहयोगी आईपुगेको।",
  "q9": "तपाईको साथी बुर्तिबाङबाट आईपुगेको र जरुरी काम परेकोले आज ३ बजेभित्र भेट्नुपर्ने भनी फोन गरेको।",
  "q10": "कार्यालयमा २ बजेर ३० मिनेटमा स्टाफ मिटिङ भनी तपाईको सूचना पाटीमा लेखिएको।"
},
  
  {
      title: "Healthcare Management Scenario",
      background: `<p>You are the newly appointed Hospital Administrator at District Hospital. 
      You have just taken charge today, and the previous administrator left several pending matters. 
      The Medical Director is away attending a conference for the next three days.</p>
      
      <p>You have 50 minutes to review the items in your in-basket and decide on appropriate actions. 
      You need to prioritize issues based on urgency and importance while ensuring patient care is not compromised.</p>`,
      
      q1: "An urgent notice from the Department of Health Services about a possible outbreak of a contagious disease in neighboring districts, requiring immediate preparedness measures.",
      
      q2: "A letter from the hospital's main medical supplier stating that due to payment delays, they will halt delivery of essential supplies after tomorrow unless outstanding bills are cleared.",
      
      q3: "A complaint from a patient's family about negligence in the emergency department that allegedly resulted in serious complications for the patient. They are threatening legal action.",
      
      q4: "A reminder that the hospital's annual licensing inspection is scheduled for next week, with several compliance issues from last year still unresolved.",
      
      q5: "A request from the nursing department head for emergency staffing due to three nurses calling in sick today, potentially compromising patient care in critical wards.",
      
      q6: "A notification that the hospital's backup generator failed during routine testing yesterday and requires immediate repair before the next power outage.",
      
      q7: "An email from a local medical college requesting confirmation that the hospital will continue to accept medical students for clinical rotations starting next week.",
      
      q8: "A memo from the maintenance department reporting water leakage in the laboratory ceiling that could potentially damage expensive equipment if not addressed within 48 hours.",
      
      q9: "A request from the Ministry of Health to submit a report on the hospital's COVID-19 preparedness status by the end of the week.",
      
      q10: "An invitation to an important fundraising dinner tonight where potential donors for the new pediatric wing will be present."
  },
  
  {
      title: "Education Administration Challenge",
      background: `<p>You are the newly appointed Principal of a secondary school with 800 students. 
      Today is your first day, and you find numerous matters requiring your attention. 
      The Assistant Principal is on sick leave for the next week.</p>
      
      <p>You have 50 minutes to go through these items and decide on the best course of action for each. 
      You must prioritize effectively to ensure both immediate concerns and long-term educational goals 
      are addressed appropriately.</p>`,
      
      q1: "An email from the District Education Office informing you of an immediate safety inspection tomorrow following reports of structural issues in one of the school buildings.",
      
      q2: "A group of parents waiting in the reception area demanding to meet with you regarding allegations of bullying that the previous principal allegedly ignored.",
      
      q3: "A reminder that teacher evaluations need to be completed and submitted to the education board by the end of the week.",
      
      q4: "A notice that the school bus has broken down this morning, leaving 50 students stranded and unable to get to school.",
      
      q5: "A message from a major educational foundation offering a significant grant, but requiring a proposal submission within 48 hours.",
      
      q6: "A complaint from a neighboring property owner about students trespassing and causing damage after school hours.",
      
      q7: "A request from the student council to approve plans for the annual cultural festival scheduled for next month.",
      
      q8: "An urgent email from the accounting department reporting a discrepancy in the school's budget that needs to be resolved before monthly financial reporting.",
      
      q9: "A notification that a television crew will arrive in two hours to film a segment about the school's award-winning science program.",
      
      q10: "A letter from the teachers' union expressing concerns about work conditions and requesting a meeting this week to avoid potential labor action."
  },
  
  // Template for adding new question sets
  /*
  {
      title: "Your Title Here",
      background: `<p>Background information paragraph 1.</p>
      <p>Background information paragraph 2.</p>`,
      
      q1: "Question 1",
      q2: "Question 2",
      q3: "Question 3",
      q4: "Question 4",
      q5: "Question 5",
      q6: "Question 6",
      q7: "Question 7",
      q8: "Question 8",
      q9: "Question 9",
      q10: "Question 10"
  }
  */
];
