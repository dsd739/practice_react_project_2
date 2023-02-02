import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        '"Better Off Without Your Blessing": Bengal University To Mamata Banerjee - NDTV',
      description:
        "What began as a row over Visva-Bharati University alleging that Nobel Laureate Amartya Sen had illegally occupied land has now turned into a full-blown political battle, with the university coming out with a statement against Mamata Banerjee.",
      url: "https://www.ndtv.com/india-news/better-off-without-your-blessing-bengal-university-to-mamata-banerjee-3745552",
      urlToImage:
        "https://c.ndtvimg.com/2022-11/plb495q8_mamata-banerjee-ani_625x300_23_November_22.jpg",
      publishedAt: "2023-02-02T04:15:00Z",
      content:
        "Mamata Banerjee also asked the university to apologise to Amartya Sen (File)\r\nKolkata: What began as a row over Visva Bharati University's allegation that Nobel Laureate Amartya Sen had illegally occ… [+2621 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        'Gautam Adani Tells Investors FPO Called Off Due To "Market Volatility" - NDTV Profit',
      description:
        'Billionaire Gautam Adani today said the "interest of my investors is paramount and everything else is secondary" as he explained the decision to call off a blockbuster share sale amid plunging stocks after a US short-seller\'s critical report.',
      url: "https://www.ndtv.com/business/interest-of-investors-paramount-everything-is-secondary-says-gautam-adani-after-calling-off-fpo-3745574",
      urlToImage:
        "https://c.ndtvimg.com/2023-02/kebd3nhg_gautam-adani-_625x300_02_February_23.jpg",
      publishedAt: "2023-02-02T03:56:00Z",
      content:
        'Adani Enterprises announced its decision late last night to call off its 20,000 crore share sale.\r\nNew Delhi: Billionaire Gautam Adani today said the "interest of my investors is paramount and everyt… [+2979 chars]',
    },
    {
      source: {
        id: null,
        name: "Cgtn.com",
      },
      author: "CGTN,China Global Television Network",
      title:
        "Live: 'Green Comet' comes close to Earth, reaching the minimum distance - CGTN",
      description:
        "A green-hued comet known as C/2022 E3 (ZTF) comes close to Earth again, for the first time since the Stone Age. It's expected to be most visible to the naked eye for stargazers while reaching the minimum distance.",
      url: "https://news.cgtn.com/news/2023-02-02/Live-Green-Comet-comes-close-to-Earth-1h5DbuPqA6s/index.html",
      urlToImage:
        "https://news.cgtn.com/news/2023-02-02/Live-Green-Comet-comes-close-to-Earth-1h5DbuPqA6s/img/9fe88f17bdb549db8ece6af02bdf5497/9fe88f17bdb549db8ece6af02bdf5497-750.jpeg",
      publishedAt: "2023-02-02T03:47:22Z",
      content:
        "A green-hued comet known as C/2022 E3 (ZTF) makes its closest approach to Earth. It was last visible in the night sky during the Stone Age. It's expected to be most visible to the naked eye for starg… [+91 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT News Desk",
      title:
        "'Too expensive at ₹3,200 when you can...': Mahua Moitra's jibe at Adani FPO - Hindustan Times",
      description:
        "Gautam Adani, in a rare address to investors, said his flagship firm withdrew its $2.5 billion share sale to insulate investors from potential losses. | Latest News India",
      url: "https://www.hindustantimes.com/india-news/too-expensive-at-3200-when-you-can-mahua-moitra-s-jibe-on-adani-fpo-101675309107326.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2023/02/02/1600x900/lok_sabha_mp_mahua_moitra_on_adani_fpo_1675309406857_1675309407032_1675309407032.jpg",
      publishedAt: "2023-02-02T03:45:43Z",
      content:
        "Trinamool Congress MP Mahua Moitra on Wednesday hit out at billionaire Gautam Adani after his flagship firm called off its $2.5 billion share sale as a rout sparked by a US short-seller's report wipe… [+1730 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: "Asian News International",
      title:
        "\"Slap On Our System\": Misbah-ul-Haq's Scathing Remarks On Mickey Arthur's Potential Return - NDTV Sports",
      description:
        "Misbah-ul-Haq blamed former Pakistan players for damaging the credibility of the system and making PCB look outside the home territory for coaching roles.",
      url: "https://sports.ndtv.com/cricket/former-pakistan-skipper-misbah-feels-potential-rehiring-of-mickey-arthur-as-slap-on-countrys-cricket-3745028",
      urlToImage:
        "https://c.ndtvimg.com/2020-08/76u2t348_misbah-ul-haq-afp_625x300_10_August_20.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675",
      publishedAt: "2023-02-02T03:32:09Z",
      content:
        'Former Pakistan skipper and coach Misbah-Ul-Haq opines that the likely re-hiring of Mickey Arthur as national men side\'s coach is a "slap on Pakistan Cricket". Arthur is likely to return to Pakistan … [+5199 chars]',
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "Gaurav Gupta",
      title:
        "3rd T20I: Shubman Gill's sparkling century leads India to crushing win over New Zealand - Indiatimes.com",
      description:
        "Cricket News: This is a mauling the Kiwis won't forget for a long time.",
      url: "https://timesofindia.indiatimes.com/sports/cricket/new-zealand-in-india/3rd-t20i-shubman-gills-sparkling-century-leads-india-to-crushing-win-over-new-zealand/articleshow/97540382.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-97540352,width-1070,height-580,imgsize-105476,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2023-02-02T03:16:00Z",
      content:
        "Shubman Gill smashes maiden T20I ton, becomes 5th Indian to score centuries across formatsIn the form of his life, Shubman Gill smashed a scintillating century in the series deciding third T20I again… [+69 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "Snehashish Roy",
      title:
        "'Modernising before selling': CM Baghel questions budget allocation to Railways - Hindustan Times",
      description:
        "Chhattisgarh chief minister Bhupesh Baghel said the money allotted for Railways will be used in modernising before it is sold to private companies. | Latest News India",
      url: "https://www.hindustantimes.com/india-news/modernising-before-selling-cm-baghel-questions-budget-allocation-to-railways-101675302577122.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2023/02/02/1600x900/Chhattisgarh-chief-minister-Bhupesh-Baghel--HT-Fil_1672408129136_1675305082056_1675305082056.jpg",
      publishedAt: "2023-02-02T02:38:54Z",
      content:
        "Chhattisgarh chief minister Bhupesh Baghel questioned the budgetary allocation to Railways and asked if the money will be invested in modernising purpose before selling it to public companies.\r\nAroun… [+1584 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Sports Desk",
      title:
        "Watch: Gavaskar, Manjrekar flabbergasted at Suryakumar's 'action-replay' catch - Hindustan Times",
      description:
        "Sunil Gavaskar and Sanjay Manjrekar were left flabbergasted with Suryakumar Yadav's fielding skills during the third T20I between India and New Zealand. | Cricket",
      url: "https://www.hindustantimes.com/cricket/watch-sunil-gavaskar-sanjay-manjrekar-totally-flabbergasted-at-suryakumar-yadav-s-action-replay-of-a-catch-in-ind-vs-nz-3rd-t20i-101675282139876.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2023/02/02/1600x900/SURYAKUMAR_1675305179412_1675305179607_1675305179607.jpg",
      publishedAt: "2023-02-02T02:26:56Z",
      content:
        "India grabbed a 2-1 series-clinching victory vs New Zealand in the third T20I of the three-match series, at the Narendra Modi Stadium in Ahmedabad, on Wednesday. Chasing a target of 235 runs, New Zea… [+2676 chars]",
    },
    {
      source: {
        id: null,
        name: "Biopharminternational.com",
      },
      author: "Cynthia A. Challener",
      title:
        "Technology for In Vivo CAR T-cell Therapy Advances - BioPharm International",
      description:
        "In vivo CAR-T gene therapies could overcome the challenges faced by autologous and allogeneic treatments.",
      url: "https://www.biopharminternational.com/view/technology-for-in-vivo-car-t-cell-therapy-advances",
      urlToImage: null,
      publishedAt: "2023-02-02T02:11:13Z",
      content:
        "There is no doubt that chimeric antigen receptor (CAR) T-cell therapies have had a tremendous positive impact on patients that have received them; however, autologous cell therapies produced in centr… [+18368 chars]",
    },
    {
      source: {
        id: null,
        name: "The Indian Express",
      },
      author: "Udit Misra",
      title:
        "Union Budget 2023 big picture: Capex push, tax reform - The Indian Express",
      description:
        "Union Budget 2023 Explained: Finance Minister Nirmala Sitharaman has stuck to the growth strategy that she first unveiled in 2019: stay on the path of fiscal prudence and incentivise the private sector to invest more in the economy’s productive capacity, writ…",
      url: "https://indianexpress.com/article/explained/nirmala-sitharaman-union-budget-2023-big-picture-capex-push-tax-reform-8418721/",
      urlToImage:
        "https://images.indianexpress.com/2023/02/budget-explained-Illustration-Mithun-Chakraborty.jpg",
      publishedAt: "2023-02-02T01:55:19Z",
      content:
        "Even though it is the last full-fledged Union Budget (for 2023-24) before the Lok Sabha elections of 2024, Finance Minister Nirmala Sitharaman chose to stick to the growth strategy that she first unv… [+8876 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Entertainment Desk",
      title:
        "Anurag Kashyap recalls how ex-wife Aarti had kicked him out for being alcoholic - Hindustan Times",
      description:
        "Did you know Anurag Kashyap was once a heavy drinker? He said he was once kicked out the house by his ex-wife Aarti Bajaj. | Bollywood",
      url: "https://www.hindustantimes.com/entertainment/bollywood/anurag-kashyap-recalls-how-ex-wife-aarti-had-kicked-him-out-of-house-for-being-alcoholic-101675269091748.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2023/02/01/1600x900/Anurag-Kashyap_1675270836069_1675270836361_1675270836361.jpg",
      publishedAt: "2023-02-02T01:53:56Z",
      content:
        "Filmmaker Anurag Kashyap recently opened up about his past when he used to be a heavy drinker. He said things were so serious that once his ex-wife Aarti Bajaj kicked him out of their house while the… [+1976 chars]",
    },
    {
      source: {
        id: null,
        name: "Livemint",
      },
      author: "Livemint",
      title:
        "Stocks to Watch: Adani Enterprises, Britannia, Maruti, Syngene, LIC, TVS | Mint - Mint",
      description:
        "HDFC, Titan, Tata Consumer, Dabur India, Zydus, Berger Paints, Max Healthcare, Apollo Tyres, and Bajaj Electricals will be among the stocks in focus as they declare their December quarter earnings today.",
      url: "https://www.livemint.com/market/stock-market-news/stocks-to-watch-adani-enterprises-britannia-maruti-syngene-lic-tvs-11675298351080.html",
      urlToImage:
        "https://images.livemint.com/img/2023/02/02/600x338/stock-kpeE--621x414LiveMint_1675298426463_1675298426658_1675298426658.jpg",
      publishedAt: "2023-02-02T01:46:58Z",
      content:
        "Adani Enterprises: Adani Enterprises on 1 February announced that its board has decided not to go ahead with the fully subscribed Follow-on Public Offer (FPO). The company aims to protect the interes… [+6089 chars]",
    },
    {
      source: {
        id: null,
        name: "Moneycontrol",
      },
      author: "Sandip Das",
      title:
        "Stock Market Today: Top 10 things to know before the market opens - Moneycontrol",
      description:
        "Stock Market News: In the previous session, BSE Sensex closed just 158 points (0.27 percent) higher at 59,708, while the Nifty50 fell 46 points (0.26 percent) to settle at 17,616",
      url: "https://www.moneycontrol.com/news/business/markets/stock-market-today-top-10-things-to-know-before-the-market-opens-8-9985161.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2020/01/BSE_Sensex_Stocks_market-770x433.png",
      publishedAt: "2023-02-02T01:31:54Z",
      content:
        "The market is expected to open in the red on February 2 as trends in the SGX Nifty indicate a negative opening for the broader index in India with a loss of 84 points.\r\nIn the previous session, BSE S… [+5473 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "etimes.in",
      title:
        "Bigg Boss 16: Archana Gautam throws chilly and haldi powder in Nimrit Kaur Ahluwalia's eyes during tortur - Indiatimes.com",
      description:
        "In the upcoming promo, we will see Archana Gautam along with her team members Priyanka Chahar and Shalin Bhanot try",
      url: "https://timesofindia.indiatimes.com/tv/news/hindi/bigg-boss-16-archana-gautam-throws-chilly-and-haldi-powder-in-nimrit-kaur-ahluwalias-eyes-in-torture-task-the-latter-cries-her-heart-out/articleshow/97537234.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-97537389,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75/97537389.jpg",
      publishedAt: "2023-02-02T01:30:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "Samsung Galaxy Book 3 Hands-On: Pro Level Specs With a Price Tag To Match - CNET",
      description:
        "The new 16-inch Ultra laptop is joined by refreshes to the Galaxy Book Pro and Pro 360, all featuring 16:10 AMOLED displays, 13th-gen Intel chips and sturdie...",
      url: "https://www.youtube.com/watch?v=_FePDSjRat8",
      urlToImage: "https://i.ytimg.com/vi/_FePDSjRat8/maxresdefault.jpg",
      publishedAt: "2023-02-02T00:00:19Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "The Lancet",
      },
      author: null,
      title:
        "Efficacy and safety of the SGLT2 inhibitor empagliflozin versus placebo and the DPP-4 inhibitor linagliptin versus placebo in young people with type 2 diabetes (DINAMO): a multicentre, randomised, double-blind, parallel group, phase 3 trial - The Lancet",
      description:
        "Empagliflozin provided clinically relevant placebo-corrected reductions in HbA1c,\nwhereas linagliptin did not, and might offer a new treatment option for young people\nwith type 2 diabetes.",
      url: "https://www.thelancet.com/journals/landia/article/PIIS2213-8587(22)00387-4/fulltext",
      urlToImage:
        "https://www.thelancet.com/cms/asset/25f37280-b0ea-48ec-bd27-ea8f7eb371bf/gr1a.jpg",
      publishedAt: "2023-02-01T23:30:58Z",
      content:
        "We use cookies to help provide and enhance our service and tailor content and ads. To update your cookie settings, please visit the Cookie Preference Center for this site.Copyright © 2023 Elsevier In… [+173 chars]",
    },
    {
      source: {
        id: null,
        name: "The Indian Express",
      },
      author: "Bashaarat Masood",
      title:
        "Gulmarg: Two Polish skiers killed in avalanche - The Indian Express",
      description:
        "While the police and rescue teams managed to safely pull out 19 skiers and their two local guides, the bodies of Krzysctof and Adam Grzech were retrieved from under a mound of snow.",
      url: "https://indianexpress.com/article/cities/srinagar/massive-avalanche-hits-upper-reaches-gulmarg-ski-resort-8417472/",
      urlToImage:
        "https://images.indianexpress.com/2023/02/PTI02_01_2023_000183B.jpg",
      publishedAt: "2023-02-01T22:20:59Z",
      content:
        "Two Polish skiers were killed when a massive avalanche hit the upper reaches of the Gulmarg ski resort in Kashmir Wednesday. They were part of a group of 21 foreign tourists skiing down the slopes of… [+1114 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title: "Samsung Galaxy Unpacked 2023 in under 10 minutes - Engadget",
      description:
        "At Samsungs first Unpacked event of 2023, new devices such as an all new line of Galaxy S23 phones were announced, along with new laptops, features, and much...",
      url: "https://www.youtube.com/watch?v=ZsszYeYBXT0",
      urlToImage: "https://i.ytimg.com/vi/ZsszYeYBXT0/maxresdefault.jpg",
      publishedAt: "2023-02-01T20:32:49Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "Gravitas: Adani shares plunge after credit suisse decision - WION",
      description: null,
      url: "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dt8ggvrN-5D4",
      urlToImage: null,
      publishedAt: "2023-02-01T18:28:16Z",
      content:
        "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "Joe Biden's Beach Home In Delaware Searched By FBI: Report - NDTV",
      description:
        "Federal law enforcement began a search Tuesday of President Joe Biden's beach house in Delaware, his lawyer said, in the latest stage of an operation to track down improperly stored classified documents.",
      url: "https://www.ndtv.com/world-news/joe-bidens-beach-home-in-delaware-searched-by-authorities-report-3744550",
      urlToImage:
        "https://c.ndtvimg.com/2023-01/8m15kkug_joe-biden_625x300_27_January_23.jpg",
      publishedAt: "2023-02-01T17:07:00Z",
      content:
        "Federal law enforcement began a search of Joe Biden's beach house in Delaware. (File_\r\nWashington: US law enforcement began a search Wednesday of President Joe Biden's beach house in Delaware, his la… [+1991 chars]",
    },
    {
      source: {
        id: null,
        name: "India.com",
      },
      author: "Zee Media Bureau",
      title:
        "SL: 29-1 (6) | IND VS SL, 2nd ODI LIVE Cricket Score and Updates: Sri Lanka lose first wicket in for - Zee News",
      description:
        "SL: 51-1 (10) | IND VS SL, 2nd ODI LIVE Cricket Score and Updates: Sri Lanka steady innings after lo",
      url: "https://zeenews.india.com/cricket/live-updates/live-cricket-score-ind-vs-sl-2nd-odi-2023-cricket-match-today-india-vs-sri-lanka-cricket-live-score-and-updates-eden-gardens-kolkata-rohit-sharma-dasun-shanaka-2560369",
      urlToImage:
        "https://english.cdn.zeenews.com/sites/default/files/2023/01/11/1140219-untitled-design-2023-01-11t160630.939.png",
      publishedAt: "2023-01-12T08:30:01Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Sports Desk",
      title:
        "‘Jay Shah sir’: Prithvi Shaw's reply to BCCI secretary after record-smashing 379 - Hindustan Times",
      description:
        "On Wednesday, Board of Control for Cricket in India(BCCI) secretary Jay Shah took to Twitter to acknowledge his explosive triple ton and congratulated him for hitting the second-highest Ranji Trophy score of all time. | Cricket",
      url: "https://www.hindustantimes.com/cricket/jay-shah-sir-prithvi-shaw-s-reply-to-bcci-secretary-after-smashing-multiple-records-with-towering-379-in-ranji-match-101673501162396.html",
      urlToImage: null,
      content:
        "Talented young cricketer Prithvi Shaw slammed a triple century (379 off 383 balls) in the Ranji Trophy on Wednesday. Playing for Mumbai, he helped his team pile up 687/4 in the first innings against … [+2082 chars]",
    },
    {
      source: {
        id: null,
        name: "Moneycontrol",
      },
      author: "Rakesh Patil",
      title:
        "Market LIVE Updates: Indices trade lower, Nifty around 17,800; Divis Labs, Axis Bank top losers - Moneycontrol",
      description:
        "Stock Market LIVE Updates: Oil &amp; Gas, PSU Bank indices down 1 percent each, while metal and pharma indices down 0.5 percent each.",
      url: "https://www.moneycontrol.com/news/business/markets/share-market-live-updates-stock-market-today-january-12-latest-news-bse-nse-sensex-nifty-covid-coronavirus-infosys-hcl-technologies-cyient-den-networks-hindustan-unilever-sbi-route-mobile-antony-waste-9851411.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2023/01/sensex_nifty_sensexdown-1-770x433.jpg",
      publishedAt: "2023-01-12T08:34:56Z",
      content:
        "<li>Nifty Private Bank index falls 0.75 percent dragged by Axis Bank, Bandhan Bank and RBL Bank; HDFC Bank lone gainer\r\n</li><li>Alibaba likely to have sold stake in Paytm via bulk deal; stock down 5… [+3838 chars]",
    },
    {
      source: {
        id: null,
        name: "India.com",
      },
      author: "Zee Media Bureau",
      title:
        "SL: 29-1 (6) | IND VS SL, 2nd ODI LIVE Cricket Score and Updates: Sri Lanka lose first wicket in for - Zee News",
      description:
        "SL: 51-1 (10) | IND VS SL, 2nd ODI LIVE Cricket Score and Updates: Sri Lanka steady innings after lo",
      url: "https://zeenews.india.com/cricket/live-updates/live-cricket-score-ind-vs-sl-2nd-odi-2023-cricket-match-today-india-vs-sri-lanka-cricket-live-score-and-updates-eden-gardens-kolkata-rohit-sharma-dasun-shanaka-2560369",
      urlToImage:
        "https://english.cdn.zeenews.com/sites/default/files/2023/01/11/1140219-untitled-design-2023-01-11t160630.939.png",
      publishedAt: "2023-01-12T08:30:01Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Tech",
      title:
        "Wow! NASA James Webb Telescope snaps unparalleled dusty disk near red dwarf - HT Tech",
      description:
        "NASA's James Webb Telescope has snapped an image of dusty disk around the red dwarf star that was never viewed before. Know more details.",
      url: "https://tech.hindustantimes.com/tech/news/wow-nasa-james-webb-telescope-snaps-unparalleled-dusty-disk-near-red-dwarf-71673510644081.html",
      urlToImage:
        "https://images.hindustantimes.com/tech/img/2023/01/12/1600x900/stsci-01gmr6d76cha8ke2g8ct9meebn_1673510971477_1673510996988_1673510996988.png",
      publishedAt: "2023-01-12T08:12:03Z",
      content:
        "NASA's most expensive telescope, the James Webb Space Telescope has again amazed scientists by snapping till-now unseen images of the deep cosmos. Here again, the Webb Telescope has clicked the inner… [+1718 chars]",
    },
    {
      source: {
        id: null,
        name: "The Indian Express",
      },
      author: "Express News Service",
      title:
        "Arvind Kejriwal asked to pay Rs 163 crore ‘mis-spent’ on ads ‘within 10 days’ - The Indian Express",
      description:
        "The Committee had directed the Delhi Government to get the entire expenditure incurred on such categories of ads reimbursed to the state exchequer from the Aam Aadmi Party.",
      url: "https://indianexpress.com/article/cities/delhi/delhi-govt-publicity-wing-asks-aap-to-pay-over-rs-163-crore-allegedly-misspent-on-ads-8376911/",
      urlToImage:
        "https://images.indianexpress.com/2023/01/arvind-kejriwal-4.jpeg",
      publishedAt: "2023-01-12T07:53:32Z",
      content:
        "The Delhi governments publicity wing, the Directorate of Information and Publicity (DIP), has asked Chief Minister Arvind Kejriwal, in his capacity as AAP National Convenor, to reimburse over Rs.163 … [+3629 chars]",
    },
    {
      source: {
        id: null,
        name: "The Siasat Daily",
      },
      author: "Indo-Asian News Service",
      title:
        "Samsung Galaxy S23 series pre-order now available in India - The Siasat Daily",
      description:
        "New Delhi: Samsung on Thursday announced that pre-reservations of its upcoming flagship series, Galaxy S23, have started in India. Customers can pre-reserve the new Galaxy S series by paying a token amount of Rs 1,999 on the company's official website, Samsun…",
      url: "https://www.siasat.com/samsung-galaxy-s23-series-pre-order-now-available-in-india-2500856/",
      urlToImage:
        "https://cdn.siasat.com/wp-content/uploads/2022/12/Galaxy-S23.jpg",
      publishedAt: "2023-01-12T07:17:00Z",
      content:
        "New Delhi: Samsung on Thursday announced that pre-reservations of its upcoming flagship series, Galaxy S23, have started in India.\r\nCustomers can pre-reserve the new Galaxy S series by paying a token… [+1072 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Tech",
      title:
        "Deadline destroyer! Windows 11 Snap Assist, Your Multi-Tasking Partner - HT Tech",
      description:
        "If you have work to do, then most likely than not, you have to depend on a computer to do the job nowadays. This applies to almost everything nowadays, barring the physical labour types. And most likely, multi-tasking will be necessary to meet the deadlines s…",
      url: "https://tech.hindustantimes.com/photos/streamline-work-on-windows-11-with-a-snap-71673505976000.html",
      urlToImage:
        "https://images.hindustantimes.com/tech/img/2023/01/12/1600x900/pexels-cottonbro-studio-5077047_1673148674825_1673506480858_1673506480858.jpg",
      publishedAt: "2023-01-12T06:55:46Z",
      content:
        "Top SectionsExplore Tech Copyright © HT Media Limited All rights reserved.",
    },
    {
      source: {
        id: null,
        name: "Business Standard",
      },
      author: "BS Web Team",
      title:
        "Samsung Galaxy F04 budget smartphone goes on sale with introductory offers - Business Standard",
      description:
        "Powered by MediaTek Helio P35 processor the Samsung Galaxy F04 smartphone comes in 4GB RAM and 64GB onboard storage at Rs 9499",
      url: "https://www.business-standard.com/article/technology/samsung-galaxy-f04-budget-smartphone-goes-on-sale-with-introductory-offers-123011200392_1.html",
      urlToImage:
        "https://bsmedia.business-standard.com/_media/bs/img/article/2023-01/05/full/1672904771-1328.jpg",
      publishedAt: "2023-01-12T06:24:00Z",
      content:
        "Samsung Galaxy F04 budget smartphone will be available for purchase on January 12 at 12pm. Priced at Rs 9,499, the smartphone will be available on Samsung online store, Flipkart and select retail sto… [+1256 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: "ESPNcricinfo staff",
      title:
        "CA withdraws from scheduled ODIs against Afghanistan in March - ESPNcricinfo",
      description:
        "CA made the decision following consultation with the Australian government citing Taliban's \"further restrictions on women's and girls' education\"",
      url: "https://www.espncricinfo.com/story/australia-withdraw-from-odis-against-afghanistan-over-taliban-restrictions-1353368",
      urlToImage:
        "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/348700/348770.6.jpg",
      publishedAt: "2023-01-12T06:19:32Z",
      content:
        "NewsCA made the decision following consultation with the Australian government citing Taliban's \"further restrictions on women's and girls' education\"",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "Poulomi Ghosh",
      title:
        "No scope of repair in Joshimath, NTPC engineers punctured aquifer: Expert - Hindustan Times",
      description:
        "Joshimath land sinking: The government has assured help and compensation to the residents of Joshimath while the demolition of the two precarious hotels is yet to begin. A team of experts will study the land subsidence issue in the Uttarakhand town. | Latest …",
      url: "https://www.hindustantimes.com/india-news/no-scope-of-repair-in-joshimath-ntpc-engineers-punctured-aquifer-environment-expert-101673503547658.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2023/01/12/1600x900/PTI01-12-2023-000026A-0_1673503740182_1673503740182_1673503797365_1673503797365.jpg",
      publishedAt: "2023-01-12T06:15:08Z",
      content:
        "With a rehabilitation package being prepared by the Uttarakhand government, as Joshimath looks to stymy the crisis of its gradual sinking, environment expert Vimlendu Jha said the town has been broug… [+3203 chars]",
    },
    {
      source: {
        id: null,
        name: "CarToq.com",
      },
      author: "Shantonil Nag",
      title:
        "Maruti Suzuki Jimny 5 door unveiled at Auto Expo 2023: Bookings open! - CarToq.com",
      description:
        "Maruti Suzuki has finally unveiled the five-door variant of the much-awaited Jimny. India is the first market where the 5-door Jimny will be launched. Suzuki Motor Company will also export the model from its Indian plant located in Gujarat. Maruti Suzuki has …",
      url: "https://www.cartoq.com/maruti-suzuki-jimny-5-door-unveiled-auto-expo-2023-bookings/",
      urlToImage:
        "https://www.cartoq.com/wp-content/uploads/2023/01/jimny-featured-1.jpg",
      publishedAt: "2023-01-12T05:56:48Z",
      content:
        "Maruti Suzuki has finally unveiled the five-door variant of the much-awaited Jimny. India is the first market where the 5-door Jimny will be launched. Suzuki Motor Company will also export the model … [+2906 chars]",
    },
    {
      source: {
        id: null,
        name: "India Today",
      },
      author: "India Today Web Desk",
      title:
        "Webb telescope finds its first planet outside Solar System. It's 99% like Earth - India Today",
      description:
        "The planet is almost exactly the same size as our home planet with a 99 per cent Earth diameter.",
      url: "https://www.indiatoday.in/science/story/james-webb-telescope-makes-its-first-planet-discovery-outside-solar-system-its-99-like-earth-2320513-2023-01-12",
      urlToImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202301/webb_planet-sixteen_nine.jpg?VersionId=mymw5OF2TIe1AH1nreL5NTobHtr8QdFj",
      publishedAt: "2023-01-12T05:56:38Z",
      content:
        "By India Today Web Desk: After spending over a year in the vacuum of space, about 15,00,000 kilometers away from Earth, the James Webb Telescope has now become a planet hunter. The world's most power… [+2548 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        '-4 Degree "Never Seen" Cold Wave Forecast For North India: Expert - NDTV',
      description:
        "After bone-chilling nights for the past several weeks, the IMD had predicted only temporary relief for residents of Northwest India from the excruciating cold this week.",
      url: "https://www.ndtv.com/india-news/delhi-weather-today-4-degree-coldblast-days-ahead-for-north-india-warns-expert-3685118",
      urlToImage:
        "https://c.ndtvimg.com/2023-01/o72pbsck_delhi-cold-reuters_625x300_12_January_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675?ver-20221221.02",
      publishedAt: "2023-01-12T05:41:00Z",
      content:
        "Delhi could see light rain this week, the IMD has said.\r\nNew Delhi: As temperatures in North India blip up briefly this week, January 2023 could still go down in the books as the coldest for the regi… [+2786 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Sports Desk",
      title:
        "‘Jay Shah sir’: Prithvi Shaw's reply to BCCI secretary after record-smashing 379 - Hindustan Times",
      description:
        "On Wednesday, Board of Control for Cricket in India(BCCI) secretary Jay Shah took to Twitter to acknowledge his explosive triple ton and congratulated him for hitting the second-highest Ranji Trophy score of all time. | Cricket",
      url: "https://www.hindustantimes.com/cricket/jay-shah-sir-prithvi-shaw-s-reply-to-bcci-secretary-after-smashing-multiple-records-with-towering-379-in-ranji-match-101673501162396.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2023/01/12/1600x900/Jay_shah-prithvi_1673501793854_1673501815142_1673501815142.jpg",
      publishedAt: "2023-01-12T05:40:46Z",
      content:
        "Talented young cricketer Prithvi Shaw slammed a triple century (379 off 383 balls) in the Ranji Trophy on Wednesday. Playing for Mumbai, he helped his team pile up 687/4 in the first innings against … [+2082 chars]",
    },
    {
      source: {
        id: null,
        name: "Herzindagi.com",
      },
      author: "Krati Purwar",
      title:
        "HPV Vaccine: Everything About Cervical Cancer Prevention Answered By Expert - HerZindagi English",
      description:
        "HPV vaccine is crucial to build immunity against attacks of human papillomavirus (HPV) which usually gets transmitted via sexual activity. It is not specific to women only, hence, men and people identifying with other genders must consult their doctors for th…",
      url: "https://www.herzindagi.com/health/hpv-vaccine-cervical-cancer-awareness-who-needs-it-how-it-works-article-219384",
      urlToImage:
        "https://images.herzindagi.info/image/2023/Jan/hpv-vaccine-cervical-cancer-prevention.jpg",
      publishedAt: "2023-01-12T05:36:33Z",
      content:
        "January is cervical cancer awareness month, and the only prevention method that exists in the world is the HPV vaccine.  Millions of women in India suffer from cervical cancer. \r\nThe main cause of ce… [+7271 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        '"We Can\'t Have Ostrich-Like Stance": Vice President Takes On Judiciary - NDTV',
      description:
        "Vice President Jagdeep Dhankhar questioned the landmark 1973 Kesavananda Bharati case verdict that gave the basic structure doctrine, saying it set a bad precedent and if any authority questions Parliament's power to amend the Constitution.",
      url: "https://www.ndtv.com/india-news/court-cant-dilute-parliaments-sovereignty-vice-president-jagdeep-dhankhar-amid-row-over-judicial-appointments-3684810",
      urlToImage:
        "https://c.ndtvimg.com/2022-12/2lhsm0hg_jagdeep-dhankhar-pti_625x300_23_December_22.jpg",
      publishedAt: "2023-01-12T05:21:00Z",
      content:
        "Vice President again criticised the scrapping of the National Judicial Appointments Commission.\r\nJaipur: Vice President Jagdeep Dhankhar on Wednesday questioned the landmark 1973 Kesavananda Bharati … [+2868 chars]",
    },
    {
      source: {
        id: null,
        name: "The Tribune India",
      },
      author: "The Tribune India",
      title:
        "Punjab CM's threat works, PCS officers end stir - The Tribune India",
      description:
        "PCS officers withdrew their protest and resumed duties after a meeting with top officers of the Punjab Government today. The issue of the officers proceeding on mass casual leave in protest had put the government functioning in a limbo and its resolution was …",
      url: "https://www.tribuneindia.com/news/punjab/cms-threat-works-pcs-officers-end-stir-469531",
      urlToImage:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2023/1/2023_1$largeimg_1880663812.jpg",
      publishedAt: "2023-01-12T05:20:00Z",
      content:
        "Tribune News Service\r\nRuchika M Khanna\r\nChandigarh, January 11\r\nPCS officers withdrew their protest and resumed duties after a meeting with top officers of the Punjab Government today. The issue of t… [+2897 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: "NDTV Sports Desk",
      title:
        "Who's Greater Between Sachin Tendulkar And Virat Kohli? Sourav Ganguly Says This - NDTV Sports",
      description:
        "Virat Kohli slammed his 45th ODI century and, overall his 73rd in international cricket, on Tuesday",
      url: "https://sports.ndtv.com/cricket/whos-better-between-sachin-tendulkar-and-virat-kohli-sourav-ganguly-says-this-3685114",
      urlToImage:
        "https://c.ndtvimg.com/2022-07/39tng1oo_sourav-ganguly_625x300_08_July_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675",
      publishedAt: "2023-01-12T05:13:49Z",
      content:
        "Star batter Virat Kohli has become the talk of the town after he smashed his 45th ODI century during India's first ODI against Sri Lanka in Guwahati on Tuesday. The 34-year-old batter scored 113 runs… [+1553 chars]",
    },
    {
      source: {
        id: null,
        name: "Business Standard",
      },
      author: "BS Web Team",
      title:
        "No amount of alcohol safe, even low consumption hikes cancer risk: WHO - Business Standard",
      description:
        "The agency has previously found that alcohol causes at least 7 types of cancer including the most common cancer types such as bowel cancer and female breast cancer",
      url: "https://www.business-standard.com/article/current-affairs/no-amount-of-alcohol-safe-even-low-consumption-hikes-cancer-risk-who-123011200237_1.html",
      urlToImage:
        "https://bsmedia.business-standard.com/_media/bs/img/article/2020-09/26/full/1601100134-8273.jpg",
      publishedAt: "2023-01-12T04:51:00Z",
      content:
        'There is no "safe" amount of alcohol for consumption and it can lead to at least 7 types of cancer, according to the World Health Organisation (WHO). In a statement published in The Lancet Public Hea… [+2827 chars]',
    },
    {
      source: {
        id: null,
        name: "Livemint",
      },
      author: "Livemint",
      title:
        "Garena Free Fire Max redeem codes January 12, 2023: Claim daily rewards | Mint - Mint",
      description:
        "Developers of the Garena Free Fire Max game keep updating these codes daily. There is also a dedicated microsite where players can visit to redeem the available codes.",
      url: "https://www.livemint.com/technology/tech-news/garena-free-fire-max-redeem-codes-january-12-2023-claim-daily-rewards-11673497687407.html",
      urlToImage:
        "https://images.livemint.com/img/2023/01/12/600x338/Garena_Free_Fire_Max_1660531820245_1673497782517_1673497782517.jpg",
      publishedAt: "2023-01-12T04:30:17Z",
      content:
        "Garena Free Fire Max redeem codes are 12 digit alphanumeric codes consisting of capital letters and numbers. The daily codes can be used to win in-game items like weapons, diamonds, skins and more us… [+1687 chars]",
    },

    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: "NDTV Sports Desk",
      title:
        "Who's Greater Between Sachin Tendulkar And Virat Kohli? Sourav Ganguly Says This - NDTV Sports",
      description:
        "Virat Kohli slammed his 45th ODI century and, overall his 73rd in international cricket, on Tuesday",
      url: "https://sports.ndtv.com/cricket/whos-better-between-sachin-tendulkar-and-virat-kohli-sourav-ganguly-says-this-3685114",
      urlToImage:
        "https://c.ndtvimg.com/2022-07/39tng1oo_sourav-ganguly_625x300_08_July_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675",
      publishedAt: "2023-01-12T05:13:49Z",
      content:
        "Star batter Virat Kohli has become the talk of the town after he smashed his 45th ODI century during India's first ODI against Sri Lanka in Guwahati on Tuesday. The 34-year-old batter scored 113 runs… [+1553 chars]",
    },
    {
      source: {
        id: null,
        name: "Moneycontrol",
      },
      author: "Rakesh Patil",
      title:
        "Market LIVE Updates: Indices trade lower, Nifty around 17,800; Divis Labs, Axis Bank top losers - Moneycontrol",
      description:
        "Stock Market LIVE Updates: Oil &amp; Gas, PSU Bank indices down 1 percent each, while metal and pharma indices down 0.5 percent each.",
      url: "https://www.moneycontrol.com/news/business/markets/share-market-live-updates-stock-market-today-january-12-latest-news-bse-nse-sensex-nifty-covid-coronavirus-infosys-hcl-technologies-cyient-den-networks-hindustan-unilever-sbi-route-mobile-antony-waste-9851411.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2023/01/sensex_nifty_sensexdown-1-770x433.jpg",
      publishedAt: "2023-01-12T08:34:56Z",
      content:
        "<li>Nifty Private Bank index falls 0.75 percent dragged by Axis Bank, Bandhan Bank and RBL Bank; HDFC Bank lone gainer\r\n</li><li>Alibaba likely to have sold stake in Paytm via bulk deal; stock down 5… [+3838 chars]",
    },
    {
      source: {
        id: null,
        name: "Indiacarnews.com",
      },
      author: "Chhavi Kaushik",
      title:
        "2 New Tata Petrol Engines (Turbo) Revealed – All Details - India Car News",
      description:
        "Tata Motors showcased an exciting range of the new models and concepts along with its advanced technology and two new turbocharged petrol engines. The new Tata petrol engines are turbocharged including a new 1.2L, 3-cylinder and a 1.5L, 4-cylinder unit. While…",
      url: "https://www.indiacarnews.com/news/2-new-tata-petrol-engines-turbo-revealed-all-details-55841/",
      urlToImage:
        "https://www.indiacarnews.com/wp-content/uploads/2021/02/Tata-Safari-Electric-SUV-1000x600.jpg",
      publishedAt: "2023-01-12T07:46:55Z",
      content:
        "Tata Motors showcased an exciting range of the new models and concepts along with its advanced technology and two new turbocharged petrol engines. The new Tata petrol engines are turbocharged includi… [+1703 chars]",
    },
    {
      source: {
        id: null,
        name: "Moneycontrol",
      },
      author: "Bhavya Dua",
      title:
        "Where to invest Rs 10 lakh today? Tata MF’s Rahul Singh is betting on these 3 sectors - Moneycontrol",
      description:
        "The Tata Mutual Fund's Chief Investment Officer (Equities) says debt allocation will play a crucial role over the next two years. A combination of short-term funds, target maturity funds, and dynamic bond funds is good for debt allocation, which should be aro…",
      url: "https://www.moneycontrol.com/news/business/personal-finance/where-to-invest-rs-10-lakh-tata-mfs-rahul-singh-betting-on-these-three-sectors-9853481.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2023/01/Rahul-Singh-Tata-Mutua-Fund-770x433.jpg",
      publishedAt: "2023-01-12T07:33:29Z",
      content:
        "The Rs 40-trillion Indian mutual funds (MF) industry has seen many instances of fund managers moving on to set up their own portfolio management service (PMS) or alternate investment fund (AIF) offic… [+6089 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "World's Richest Man Sparks Succession Buzz With Daughter's Promotion - NDTV",
      description:
        "Bernard Arnault named his daughter Delphine to run LVMH's second-biggest brand, Dior, the latest step by the 73-year-old billionaire to elevate his children to key posts in his luxury empire.",
      url: "https://www.ndtv.com/world-news/worlds-richest-man-sparks-succession-buzz-with-daughters-promotion-3685301",
      urlToImage:
        "https://c.ndtvimg.com/2023-01/mlkvc3eo_bernard-arnault-delphine-arnault-_625x300_12_January_23.jpg",
      publishedAt: "2023-01-12T07:05:00Z",
      content:
        "Bernard Arnault has appointed his daughter, Delphine Arnault, to run Dior. (File)\r\nBernard Arnault named his daughter Delphine to run LVMH's second-biggest brand, Dior, the latest step by the 73-year… [+3005 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "Twitter Orders Workers In Asia Headquarters To Clear Desks, WFH - NDTV",
      description:
        "Workers at Twitter Inc.'s Singapore office were told to empty out their desks and vacate the premises, said people familiar with the situation, as Elon Musk continues to pare expenses around the globe.",
      url: "https://www.ndtv.com/world-news/twitter-orders-workers-in-asia-headquarters-to-clear-desks-wfh-3685399",
      urlToImage:
        "https://c.ndtvimg.com/2022-11/okp9rero_twitter-bloomberg_625x300_01_November_22.jpg",
      publishedAt: "2023-01-12T06:47:24Z",
      content:
        "The Singapore office employees have been told to work from home starting Thursday. (Representational)\r\nWorkers at Twitter Inc.'s Singapore office were told to empty out their desks and vacate the pre… [+1534 chars]",
    },
    {
      source: {
        id: null,
        name: "CarToq.com",
      },
      author: "Shantonil Nag",
      title:
        "Maruti Suzuki Jimny 5 door unveiled at Auto Expo 2023: Bookings open! - CarToq.com",
      description:
        "Maruti Suzuki has finally unveiled the five-door variant of the much-awaited Jimny. India is the first market where the 5-door Jimny will be launched. Suzuki Motor Company will also export the model from its Indian plant located in Gujarat. Maruti Suzuki has …",
      url: "https://www.cartoq.com/maruti-suzuki-jimny-5-door-unveiled-auto-expo-2023-bookings/",
      urlToImage:
        "https://www.cartoq.com/wp-content/uploads/2023/01/jimny-featured-1.jpg",
      publishedAt: "2023-01-12T05:56:48Z",
      content:
        "Maruti Suzuki has finally unveiled the five-door variant of the much-awaited Jimny. India is the first market where the 5-door Jimny will be launched. Suzuki Motor Company will also export the model … [+2906 chars]",
    },
    {
      source: {
        id: null,
        name: "Ipowatch.in",
      },
      author: "IPOWatch Team",
      title:
        "Aristo Bio-Tech IPO GMP, Date, Price, Review, Allotment - IPO Watch",
      description:
        "Aristo Bio-Tech IPO date is January 16. Check Aristo Bio-Tech IPO GMP, review, price band, lot size, form, listing & IPO allotment status.",
      url: "https://ipowatch.in/aristo-bio-tech-ipo-gmp-date-price-review-allotment/",
      urlToImage:
        "https://ipowatch.in/wp-content/uploads/2023/01/aristo-bio-tech-and-lifescience-ipo.webp",
      publishedAt: "2023-01-12T05:55:58Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Daijiworld.com",
      },
      author: null,
      title:
        "Mangaluru: Advaith Hyundai launches new Aura, Grand i10 NIOS – Bookings open - Daijiworld.com",
      description:
        "Media Release Mangaluru, Jan 12: Advaith Hyundai has opened bookings for the new Hyundai Aura, a superior sedan and Grand i10 NIOS. The new Hyundai Aura is equipped with a series of best-in-class safety features, superior styling and advanced convenience with…",
      url: "https://www.daijiworld.com/news/newsDisplay?newsID=1038926",
      urlToImage:
        "https://daijiworld.ap-south-1.linodeobjects.com/Linode/images3/rayan_040123_Hyundai1.jpg",
      publishedAt: "2023-01-12T05:19:52Z",
      content:
        "Media Release\r\nMangaluru, Jan 12: Advaith Hyundai has opened bookings for the new Hyundai Aura, a superior sedan and Grand i10 NIOS.\r\nThe new Hyundai Aura is equipped with a series of best-in-class s… [+2163 chars]",
    },
    {
      source: {
        id: null,
        name: "Livemint",
      },
      author: "Livemint",
      title:
        "Auto Expo 2023, Day 2: Maruti Suzuki reveals its Jimny and Fronx | Mint - Mint",
      description:
        "Auto Expo 2023 kickstarted in India with new launches from Tata Motors Maruti Suzuki, MG Motors, Kia Motors, Hyundai and others",
      url: "https://www.livemint.com/auto-news/auto-expo-2023-day-2-maruti-suzuki-reveals-its-jimny-and-fronx-11673412113754.html",
      urlToImage:
        "https://images.livemint.com/img/2023/01/12/600x338/fronx_and_jimy_1673500096694_1673500104937_1673500104937.png",
      publishedAt: "2023-01-12T05:12:16Z",
      content:
        "First day of Auto Expo 2023 concluded with brands betting big on electric vehicles across two-wheeler, three-wheeler and four-wheeler vehicle categories. Maruti Suzuki showcased its concept electric … [+13646 chars]",
    },
    {
      source: {
        id: null,
        name: "Moneycontrol",
      },
      author: "Moneycontrol News",
      title:
        "This smallcap stock gains 25% in 3 sessions as Rekha Jhunjunwala sells her stake - Moneycontrol",
      description:
        "Between January 9-11, Rekha Jhunjhunwala has cumulatively amount sold by her stands at 15.9 lakh shares",
      url: "https://www.moneycontrol.com/news/business/stocks/this-smallcap-stock-gains-25-in-3-sessions-as-rekha-jhunjunwala-sells-her-stake-9852691.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2022/11/sensex_nifty-marketup_sensexup-Niftyup-1-770x433.jpg",
      publishedAt: "2023-01-12T05:09:23Z",
      content:
        "Pharma packaging solutions provider Bilcare has been in the limelight through the past few trading sessions after Rekha Jhunjhunwala, wife of legendary investor Rakesh Jhunjhunwala, began selling sta… [+1392 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "Snehashish Roy",
      title:
        "Non-resident Indians from 10 countries soon be able to make UPI payments. List - Hindustan Times",
      description:
        "NCPI said in a circular asked UPI participants to devise a mechanism by April 30 that will allow NRIs to make digital payments without having to get an Indian mobile number. | Latest News India",
      url: "https://www.hindustantimes.com/india-news/nonresident-indians-from-10-countries-soon-be-able-to-make-upi-payments-list-101673493621543.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2023/01/12/1600x900/_f99995ca-d532-11e9-ab55-f69b78c5f02d_1673496485954_1673496485954.jpg",
      publishedAt: "2023-01-12T04:13:00Z",
      content:
        "Non-resident Indians (NRI) from ten countries can soon transfer funds online using the unified payments interface (UPI) using their Non-Resident (External) Rupee (NRE) or Non-Resident Ordinary (NRO) … [+2128 chars]",
    },
    {
      source: {
        id: null,
        name: "Moneycontrol",
      },
      author: "Moneycontrol News",
      title:
        "Indian woman laid off by Goldman Sachs in US: 'I come from a rural family' - Moneycontrol",
      description:
        "Goldman Sachs is laying off nearly 3,200 employees or nearly 6.5 per cent of its workforce, in its biggest job cuts.",
      url: "https://www.moneycontrol.com/news/trends/indian-woman-laid-off-by-goldman-sachs-in-us-i-come-from-a-rural-family-9852181.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2023/01/Shilpi-Soni-LinkedIn-770x435.jpg",
      publishedAt: "2023-01-12T04:04:14Z",
      content:
        "Goldman Sachs on Wednesday began its job cuts that is feared to affect some 3,200 employees or nearly 6.5 per cent of its workforce. This is the biggest round of layoffs by the investment giant.\r\nAff… [+2222 chars]",
    },
    {
      source: {
        id: null,
        name: "Rediff.com",
      },
      author: "Nitin Kumar, Shine Jacob & Deepak Patel",
      title: "Auto Expo 2023 Day 1: EVs Rule! - Rediff.com",
      description:
        "Almost all of these companies either unveiled their new electric vehicle or alternative energy-powered models.",
      url: "https://www.rediff.com/business/report/auto-expo-2023-day-1-evs-rule/20230112.htm",
      urlToImage: "https://im.rediff.com/money/2023/jan/12auto-expo-2023-1.jpg",
      publishedAt: "2023-01-12T03:35:50Z",
      content:
        "IMAGE: Shah Rukh Khan shows his signature pose at the launch of the Hyundai IONIQ 5 at the Auto Expo 2023 at India Expo Mart in Greater Noida, January 11, 2023. Photograph: Rahul Singh/ANI Photo\r\nFro… [+3240 chars]",
    },
    {
      source: {
        id: null,
        name: "CarToq.com",
      },
      author: "Utkarsh Deshmukh",
      title:
        "Maruti Suzuki Satin Black Edition Grand Vitara and Brezza unveiled the Auto Expo 2023 - CarToq.com",
      description:
        "Amongst the total of 16 cars on display at its booth at the Auto Expo 2023, the country’s largest carmaker Maruti Suzuki India Limited has showcased the Satin Black Editions of two of its most popular SUVs. Maruti Suzuki displayed a Grand Vitara and a Brezza …",
      url: "https://www.cartoq.com/maruti-suzuki-satin-black-edition-grand-vitara-and-brezza-unveiled-the-auto-expo-2023/",
      urlToImage:
        "https://www.cartoq.com/wp-content/uploads/2023/01/maruti-suzuki-grand-vitara-black-edition-featured.jpg",
      publishedAt: "2023-01-12T02:17:54Z",
      content:
        "Amongst the total of 16 cars on display at its booth at the Auto Expo 2023, the country’s largest carmaker Maruti Suzuki India Limited has showcased the Satin Black Editions of two of its most popula… [+2980 chars]",
    },
    
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "Rashmi Rajput",
      title: "DRI issues show cause notice to Samsung India - Economic Times",
      description:
        "The agency in the notice also asked why a penalty should not be imposed against the senior management of the company. The DRI also issued a show cause notice to PricewaterhouseCoopers Pvt Ltd (PwC) and an associate director, who was questioned during the prob…",
      url: "https://economictimes.indiatimes.com/news/india/dri-issues-show-cause-notice-to-samsung-india/articleshow/96925150.cms",
      urlToImage:
        "https://img.etimg.com/thumb/msid-96925171,width-1070,height-580,imgsize-23320,overlay-economictimes/photo.jpg",
      publishedAt: "2023-01-12T01:55:00Z",
      content:
        "The Directorate of Revenue Intelligence (DRI) has issued a show cause notice to Samsung India Electronics (SIEL), asking why the agency should not recover Rs 1,728.47 crore as duty along with interes… [+8540 chars]",
    },
    {
      source: {
        id: null,
        name: "Moneycontrol",
      },
      author: "Sandip Das",
      title:
        "Buzzing Stocks | Infosys, Hindustan Unilever, HCL Technologies and others in news today - Moneycontrol",
      description:
        "Stocks to Watch: Check out the companies making headlines before the opening bell.",
      url: "https://www.moneycontrol.com/news/photos/business/stocks/buzzing-stocks-infosys-hindustan-unilever-hcl-technologies-and-others-in-news-today-9850431.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2021/03/BUZZING-STOCKS-770x433.jpg",
      publishedAt: "2023-01-12T01:27:31Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "OilPrice.com",
      },
      author: "Alex Kimani",
      title:
        "Why Oil's 7-Month Downturn May Be About To Reverse - OilPrice.com",
      description:
        "Commodity analysts at Standard Chartered have expressed optimism that the prolonged selloff could have reached an inflection point and that the 7-month downturn could be about to reverse",
      url: "https://oilprice.com/Metals/Gold/Why-Oils-7-Month-Downturn-May-Be-About-To-Reverse.html",
      urlToImage:
        "https://d32r1sh890xpii.cloudfront.net/article/718x300/2023-01-11_whnjkx6e85.jpg",
      publishedAt: "2023-01-12T01:00:00Z",
      content:
        "A lot of Western institutions…\r\nWhile most aluminum producers operate…\r\nGold, silver, platinum, and palladium…\r\nBy Alex Kimani - Jan 11, 2023, 7:00 PM CSTOil prices have kicked off the new year on th… [+4909 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "GM, Ford, Google partner to promote 'virtual' power plants - Reuters",
      description:
        "Companies including GM, Ford, Google and solar energy producers said on Tuesday they would work together to establish standards for scaling up the use of virtual power plants (VPPs), systems for easing loads on electricity grids when supply is short.",
      url: "https://www.reuters.com/business/energy/gm-ford-google-partner-promote-virtual-power-plants-2023-01-10/",
      urlToImage:
        "https://www.reuters.com/resizer/WEIKyCH4ynrBV-PmXbMuzCFHkxA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/LNWA2XBSGFPXRMMKWQUWOVZSJM.jpg",
      publishedAt: "2023-01-12T00:26:00Z",
      content:
        "WASHINGTON, Jan 10 (Reuters) - Companies including GM, Ford, Google and solar energy producers said on Tuesday they would work together to establish standards for scaling up the use of virtual power … [+2773 chars]",
    },
    {
      source: {
        id: null,
        name: "Investing.com",
      },
      author: "Yasin Ebrahim/Investing.com",
      title:
        "Inflation to slump to 2.2% by year-end, setting up rally for stocks: Wells Fargo By Investing.com - Investing.com",
      description:
        "Inflation to slump to 2.2% by year-end, setting up rally for stocks: Wells Fargo",
      url: "https://www.investing.com/news/economy/inflation-to-slump-to-22-by-yearend-setting-up-rally-for-stocks-wells-fargo-2978551",
      urlToImage: "https://i-invdn-com.investing.com/news/LYNXNPEC0D0AP_L.jpg",
      publishedAt: "2023-01-11T21:49:00Z",
      content:
        "By Yasin Ebrahim\r\nInvesting.com -- Inflation is widely expected to show further signs of easing on Thursday, and could fall by a staggering 76% in this cycle and fall to 2.2% by year-end, helping sto… [+2903 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: null,
      title:
        "Varun Dhawan extends support to Samantha Ruth Prabhu, slams trolls stating actress 'lost charm and glow' post myositis diagnosis - Times of India",
      description:
        "Samantha Ruth Prabhu is going through a tough time as she is undergoing treatment for Myositis. Recently, Samantha was spotted at the trailer launch of her upcoming film 'Shakuntalam' after which a news outlet claimed that she wasn't glowing as earlier. Now, …",
      url: "https://timesofindia.indiatimes.com/videos/entertainment/hindi/varun-dhawan-extends-support-to-samantha-ruth-prabhu-slams-trolls-stating-actress-lost-charm-and-glow-post-myositis-diagnosis/videoshow/96907235.cms",
      urlToImage:
        "https://timesofindia.indiatimes.com/photo/96907235/size-63156/96907235.jpg",
      publishedAt: "2023-01-11T08:32:40Z",
      content:
        "Samantha Ruth Prabhu\r\n is going through a tough time as she is undergoing treatment for Myositis. Recently, Samantha was spotted at the trailer launch of her upcoming film 'Shakuntalam' after which a… [+402 chars]",
    },
    {
      source: {
        id: null,
        name: "The Indian Express",
      },
      author: "Science Desk",
      title:
        "In a first, scientists observe pair of supermassive black holes closest to collision course - The Indian Express",
      description:
        "A newly-discovered pair of supermassive black holes are on their way to colliding with each other and are also the closest pair of supermassive black holes ever discovered.",
      url: "https://indianexpress.com/article/technology/two-supermassive-black-holes-collision-8375134/",
      urlToImage:
        "https://images.indianexpress.com/2023/01/Supermassive-black-holes-20230111.jpg",
      publishedAt: "2023-01-11T08:01:25Z",
      content:
        "Astronomers have spotted a pair of supermassive black holes that are well on their way to crashing into each other in a cataclysmic collision. According to the Simons Foundation, this doomed pair of … [+1859 chars]",
    },
  ];
  constructor() {
    super(); //  Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    this.state = {
      articles: this.articles, // this.articles yani is class ke upper jo array hai vo abb iske state ke pass ja chuka hai
      loading: false,
    };
  }
  render() {
    return (
      <>
        {" "}
        <h2 className="container">NewsMonkey-Top Headlines</h2>
        <div className="container my-3">
          {this.state.articles.map((e) => {
            // mtlb jo is class ke state mai articles(group of objects) pda hua hai use har object ke liye is jsx ko put kro
            //  console.log(this)   x120 {props: (), context: (), refs: (), updater: (), articles: Array(28) [{...},.......................]
            //   console.log(this.state)    x120 {articles: Array(20) [ {...}, ..................................], Loading: false }{articles: Array(28) [{...},.....
            return (
              <Newsitem
                key={e.url}
                title={e.title}
                description={e.description.slice(0, 88)}
                imageUrl={
                  e.urlToImage
                    ? e.urlToImage
                    : "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png"
                }
                url={e.url}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default News;
