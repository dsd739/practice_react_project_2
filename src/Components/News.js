import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "News18",
      },
      author: "Entertainment Bureau",
      title:
        "Golden Globes LIVE Updates: Rajinikanth Congratulates SS Rajamouli; Ram Charan Thanks Salman 'Bhai'; 'Congr - News18",
      description:
        "Live Updates from the 80th Golden Globe Awards: RRR won Golden Globe in Best Song (Motion Picture) category for Naatu Naatu.",
      url: "https://www.news18.com/news/movies/golden-globes-2023-live-updates-rrr-ss-rajamouli-ram-charan-jr-ntr-naatu-naatu-livenews-6803599.html",
      urlToImage:
        "https://images.news18.com/ibnlive/uploads/2023/01/rrr-rajinikanth-167344656316x9.jpg",
      publishedAt: "2023-01-11T14:24:52Z",
      content:
        "Social media is flooded with fans, friends and industry colleagues sending wishes to team RRR. From Rajinikanth to Shah Rukh Khan, Salman Khan and Amitabh Bachchan among others; several superstars to… [+2248 chars]",
    },
    {
      source: {
        id: null,
        name: "Moneycontrol",
      },
      author: "Moneycontrol News",
      title:
        "Auto Expo 2023 Live Updates: Bookings to begin today at all Lexus Guest Experience Centers across the... - Moneycontrol",
      description:
        "Auto Expo 2023 Live Updates: Ushering in a new era, the fifth-generation Lexus RX undergoes a complete renewal, pursuing the\r\nnext-generation Lexus design.",
      url: "https://www.moneycontrol.com/news/automobile/auto-expo-2023-live-updates-biggest-motown-jamboreee-back-in-india-after-3-years-9844311.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2023/01/image-1-2-655x435.jpg",
      publishedAt: "2023-01-11T14:19:52Z",
      content:
        "January 11, 2023 / 05:07 PM IST\r\nAuto Expo 2023 Live Updates: Matter Motorbike\r\n- The Matter-bike is designed from the ground up in India for India, with the next-generation features and experiences.… [+516 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Tech",
      title:
        "Top 5 Samsung phones under 20000: Galaxy M13, Galaxy A23, Galaxy A13, more; Check prices - HT Tech",
      description:
        "Know the best Samsung smartphones under Rs. 20000. The list includes Samsung Galaxy M13, Samsung Galaxy A23, Samsung Galaxy A13 and more.",
      url: "https://tech.hindustantimes.com/mobile/news/top-5-samsung-phones-under-20000-galaxy-m13-galaxy-a23-galaxy-a13-more-check-prices-71673445475380.html",
      urlToImage:
        "https://images.hindustantimes.com/tech/img/2023/01/11/1600x900/download_1669180405391_1673445540512_1673445540512.jpg",
      publishedAt: "2023-01-11T14:05:25Z",
      content:
        "Budget smartphones are not known for featuring cutting edge technology, but they are made to take care of all day-to-day needs. But nowadays, shopping for smartphones under Rs. 20000 does not necessa… [+2648 chars]",
    },
    {
      source: {
        id: null,
        name: "The Siasat Daily",
      },
      author: "Indo-Asian News Service",
      title:
        "NASA mission spots 2nd Earth-size world within ‘habitable zone’ - The Siasat Daily",
      description:
        "Astronomers previously discovered three planets in this system, called TOI 700 b, c, and d.",
      url: "https://www.siasat.com/nasa-mission-spots-2nd-earth-size-world-within-habitable-zone-2500441/",
      urlToImage:
        "https://cdn.siasat.com/wp-content/uploads/2022/09/nasa-3.jpg",
      publishedAt: "2023-01-11T13:59:00Z",
      content:
        "Washington: NASA mission has discovered a second Earth-sized, rocky planet within the habitable zone of its star — the range of distances where liquid water could occur on a planet’s surface.\r\nUsing … [+2542 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "US Rules Out Cyberattack As 3,700 Flights Delayed: What We Know So Far - NDTV",
      description:
        'Operations are gradually resuming after flights across the US were grounded  stranded due to a glitch in a computer system of the US regulator FAA.\r\n\r\nThe White House has denied any evidence of cyberattack "at this point"',
      url: "https://www.ndtv.com/world-news/us-flights-grounded-what-we-know-so-far-3683130",
      urlToImage:
        "https://c.ndtvimg.com/2022-01/2skuvbt_us-air-travel-afp-us-flights-us-airport-650_625x300_03_January_22.jpg",
      publishedAt: "2023-01-11T13:58:00Z",
      content:
        "<li>US Regulator Federal Aviation Administration says flight operations are gradually resuming and it expects departures to resume at airports at 9 am Eastern Time.\r\n</li><li>At least 3,700 flights a… [+698 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "Pakistan's Passport Among World's Weakest. Most Powerful Are... - NDTV",
      description:
        "Japan starts 2023 with the world's most powerful passport, allowing visa-free entry to 193 global destinations, according to the latest Henley Passport Index, which the country tops for the fifth consecutive year.",
      url: "https://www.ndtv.com/world-news/the-best-passports-to-hold-in-2023-and-the-worst-3683565",
      urlToImage:
        "https://c.ndtvimg.com/2023-01/6spboq5g_pakistan-passport-generic-_625x300_11_January_23.jpg",
      publishedAt: "2023-01-11T13:48:00Z",
      content:
        "The US was among the top 22, with visa-free access to 186 places. (Representational)\r\nJapan starts 2023 with the world's most powerful passport, allowing visa-free entry to 193 global destinations, a… [+2092 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "This Asthma Medicine Could Solve Memory Loss Problem, Worked On Mice - NDTV",
      description:
        "University of Groningen neuroscientist Robbert Havekes discovered that what you learn while being sleep deprived is not necessarily lost, it is just difficult to recall.",
      url: "https://www.ndtv.com/feature/this-asthma-medicine-could-solve-memory-loss-problem-worked-on-mice-3683506",
      urlToImage:
        "https://c.ndtvimg.com/2021-09/oplbdieg_memory_625x300_21_September_21.jpg",
      publishedAt: "2023-01-11T13:11:18Z",
      content:
        'Human-approved medication brings back "lost" memories in mice.\r\nModern civilization is notorious for its widespread problem with sleep deprivation, which affects people of all ages and has a negative… [+2185 chars]',
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "21 Parties Invited To Join The Close Of Rahul Gandhi's Yatra In Srinagar - NDTV",
      description:
        "The Congress has written to 21 parties inviting them to the close of Rahul Gandhi's Bharat Jodo Yatra in Srinagar on January 30.",
      url: "https://www.ndtv.com/india-news/21-parties-invited-to-join-the-close-of-rahul-gandhis-yatra-in-srinagar-3683275",
      urlToImage:
        "https://c.ndtvimg.com/2023-01/t55tabf8_rahul-gandhi-_625x300_11_January_23.jpg",
      publishedAt: "2023-01-11T13:07:30Z",
      content:
        "21 Parties have been invited to the close of Rahul Gandhi's Bharat Jodo Yatra in Srinagar.\r\nNew Delhi: The Congress has invited 21 like-minded parties to participate in the concluding programme of it… [+2271 chars]",
    },
    {
      source: {
        id: null,
        name: "The Tribune India",
      },
      author: "The Tribune India",
      title:
        "Bharat Jodo Yatra is all about spreading love, Rahul Gandhi says at Sirhind - The Tribune India",
      description:
        "Congress leader Rahul Gandhi paid obeisance at Gurdwara Fatehgarh Sahib on Wednesday morning before beginning the Punjab leg of the Bharat Jodo Yatra.&nbsp;",
      url: "https://www.tribuneindia.com/news/punjab/rahul-gandhi-pays-obeisance-at-fatehgarh-sahib-gurdwara-before-starting-punjab-leg-of-bharat-jodo-yatra-469371",
      urlToImage:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2023/1/2023_1$largeimg_545075326.jpg",
      publishedAt: "2023-01-11T12:24:00Z",
      content:
        "Tribune News Service\r\nAman Sood and Surinder Bhardwaj\r\nFatehgarh Sahib, January 11\r\nCongress leader Rahul Gandhi paid obeisance at Gurdwara Fatehgarh Sahib on Wednesday morning before beginning the P… [+1698 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Sports Desk",
      title:
        "Watch: Kohli-Shami's unmissable exchange after India pacer takes last-ball run - Hindustan Times",
      description:
        "If you think Virat Kohli's cold stare at Hardik Pandya for denying a second run was the only time the former India captain disagreed with his teammate's judgment, you got another thing coming. | Cricket",
      url: "https://www.hindustantimes.com/cricket/watch-video-virat-kohli-and-mohammed-shami-s-totally-unmissable-exchange-after-india-pacer-takes-single-off-last-ball-to-deny-batter-strike-101673437306652.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2023/01/11/1600x900/shami-kohli-batting-screengrab_1673437684656_1673437699440_1673437699440.jpg",
      publishedAt: "2023-01-11T11:52:38Z",
      content:
        "If you think Virat Kohli's cold stare at Hardik Pandya for denying a second run was the only time the former India captain disagreed with his teammate's judgment, you got another thing coming. Kohli … [+2207 chars]",
    },
    {
      source: {
        id: null,
        name: "The Tribune India",
      },
      author: "The Tribune India",
      title:
        "Joyce Meyer Keto Gummies Reviews| Is Slim Candy Keto Gummies a Scam? Know More About Accent Slim Keto Gummies & Super Slim Keto Gummies. - The Tribune India",
      description:
        "Obesity is defined as an abnormal accumulation of fat in your body that causes a variety of health problems. It is a problem that both men and women face, as well as children. Obesity is defined as a BMI greater than 30. This is a problem that children face, …",
      url: "https://www.tribuneindia.com/news/brand-connect/joyce-meyer-keto-gummies-reviews-is-slim-candy-keto-gummies-a-scam-know-more-about-accent-slim-keto-gummies-super-slim-keto-gummies-469488",
      urlToImage:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2023/1/2023_1$largeimg_1399062468.jpg",
      publishedAt: "2023-01-11T11:17:00Z",
      content:
        "Obesity is defined as an abnormal accumulation of fat in your body that causes a variety of health problems. It is a problem that both men and women face, as well as children. Obesity is defined as a… [+10620 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        'Pics From Inside MV Ganga Vilas, 51-Day River Cruise, "World\'s Longest" - NDTV',
      description:
        "Prime Minister Narendra Modi will flag off the \"world's longest river cruise\", MV Ganga Vilas, and inaugurate a 'Tent City' on the banks of the Ganga river in Varanasi on January 13 via video conferencing.",
      url: "https://www.ndtv.com/india-news/pics-pm-narendra-modi-to-launch-worlds-longest-river-cruise-on-ganga-on-friday-3682482",
      urlToImage:
        "https://c.ndtvimg.com/2023-01/kffb99jo_ganga-river-cruise-worlds-longest-river-cruise-facebook_625x300_11_January_23.jpg",
      publishedAt: "2023-01-11T10:52:00Z",
      content:
        'PM Narendra Modi will flag off the "world\'s longest river cruise", MV Ganga Vilas on Friday\r\nNew Delhi: Prime Minister Narendra Modi will flag off the "world\'s longest river cruise", MV Ganga Vilas, … [+4462 chars]',
    },
    {
      source: {
        id: null,
        name: "The Indian Express",
      },
      author: "Anuj Bhatia",
      title:
        "With 900 million paid subscribers, Apple’s services gamble seems to have paid off - The Indian Express",
      description:
        "With iPhone sales peaking in many matured markets and the company struggling with supply chain issues in China, the service segment has never been more important for Apple.",
      url: "https://indianexpress.com/article/technology/with-900-million-paid-subscribers-apples-services-gamble-seems-to-have-paid-off-8375762/",
      urlToImage: "https://images.indianexpress.com/2023/01/Apple-fb-1.jpg",
      publishedAt: "2023-01-11T10:50:03Z",
      content:
        "Apple now has over 900 million subscribers for its popular services, including Apple Music and Apple TV+. The figure is astounding, but more than that, it gives a sense of how quickly Apples services… [+4857 chars]",
    },
    {
      source: {
        id: null,
        name: "Tech Explorist",
      },
      author: "Amit Malewar",
      title: "Astronomers detected a superheavy neutron star - Tech Explorist",
      description:
        "This fleeting, massive object likely formed from the collision of two neutron stars.",
      url: "https://www.techexplorist.com/superheavy-neutron-star/55921/",
      urlToImage:
        "https://www.techexplorist.com/wp-content/uploads/2023/01/neutron-star-merger.jpg",
      publishedAt: "2023-01-11T10:31:33Z",
      content:
        "Short gamma-ray bursts (GRBs) are associated with binary neutron star mergers, multimessenger astronomical events observed in gravitational waves, and the multiband electromagnetic spectrum. Dependin… [+3670 chars]",
    },
    {
      source: {
        id: null,
        name: "Moneycontrol",
      },
      author: "Rakesh Patil",
      title:
        "Closing Bell: Sensex, Nifty end flat amid high volatility; metals shine, FMCG drags - Moneycontrol",
      description:
        "On the sectoral front, selling was seen in the FMCG, auto, pharma, power and oil &amp; gas, while buying was seen in the bank, metal and information technology names.",
      url: "https://www.moneycontrol.com/news/business/markets/share-market-live-updates-stock-market-today-january-11-latest-news-bse-nse-sensex-nifty-covid-coronavirus-adani-ports-pc-jeweller-uttam-sugar-mills-tata-motors-bank-of-baroda-cupid-bilcare-tuticorin-9844141.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2021/06/Sensex-3-770x433.jpg",
      publishedAt: "2023-01-11T10:31:27Z",
      content:
        "<li>Expect Rupee to trade with a positive bias: Anuj Choudhary\r\n</li><li>Morgan Stanley keeps 'Underweight' rating on Samvardhana Motherson; target at Rs 70.67\r\n</li><li>Morgan Stanley keeps 'Underwe… [+4709 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: "NDTV Sports Desk",
      title:
        'India vs Sri Lanka - "Not Many Captains...": Ex Sri Lanka Stars On Rohit Sharma Withdrawing Mohammed.. - NDTV Sports',
      description:
        "In first ODI between India and Sri Lanka in Guwahati, Mohammed Shami attempted to run out rival skipper Dasun Shanaka at the non-striker's end in the last over of the match",
      url: "https://sports.ndtv.com/india-vs-sri-lanka-2023/not-many-captains-ex-sri-lanka-stars-on-rohit-sharma-withdrawing-mohammed-shamis-appeal-to-run-out-dasun-shanaka-3682771",
      urlToImage:
        "https://c.ndtvimg.com/2023-01/7kionnu8_shami_625x300_10_January_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675",
      publishedAt: "2023-01-11T10:18:19Z",
      content:
        "The first ODI between India and Sri Lanka in Guwahati almost had its controversial moment when Mohammed Shami attempted to run out rival skipper Dasun Shanaka at the non-striker's end in the last ove… [+1670 chars]",
    },
    {
      source: {
        id: null,
        name: "India Today",
      },
      author: "Prachi Arya",
      title:
        "After pics from Rakhi Sawant's court wedding goes VIRAL, boyfriend Adil Durrani denies union - India Today",
      description:
        "Did Rakhi Sawant secretly marry beau Adil Durrani? Pictures from their court wedding have gone viral. However, Adil has denied rumours of his marriage to the actress.",
      url: "https://www.indiatoday.in/television/celebrity/story/after-pics-from-rakhi-sawants-court-wedding-goes-viral-boyfriend-adil-durrani-denies-union-2320180-2023-01-11",
      urlToImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202301/rakhi_1-sixteen_nine.jpg?VersionId=b8spyqvR7atcmxYEQHenocI373AD5g2L",
      publishedAt: "2023-01-11T09:47:31Z",
      content:
        "By Prachi Arya: Bigg Boss fame Rakhi Sawant seems to have tied the knot once again with her longtime boyfriend Adil Durrani. Though the actress has not made it official, pictures from their court wed… [+1285 chars]",
    },
    {
      source: {
        id: null,
        name: "Crictracker.com",
      },
      author: "CricTracker Staff",
      title:
        "Pakistan vs New Zealand 2nd ODI Match Prediction – Who will win today's match between PAK vs NZ? - CricTracker",
      description:
        "Following the win for hosts in the first ODI contest at the National Bank Arena in Karachi, Pakistan will lock horns with New Zealand in the second of the three-match series at the same venue on Janua",
      url: "https://www.crictracker.com/cricket-match-predictions/pakistan-vs-new-zealand-2nd-odi-match-prediction-who-will-win-todays-match-between-pak-vs-nz/",
      urlToImage:
        "https://media.crictracker.com/media/attachments/1673285143482_Pakistan-Team.jpeg",
      publishedAt: "2023-01-11T09:15:00Z",
      content:
        "Following the win for hosts in the first ODI contest at the National Bank Arena in Karachi, Pakistan will lock horns with New Zealand in the second of the three-match series at the same venue on Janu… [+2595 chars]",
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
      articles: this.articles,    // this.articles yani is class ke upper jo array hai vo abb iske state ke pass ja chuka hai
      loading: false,
    };
  }
  render() {
    return (
      <>
        {" "}
        <h2 className="container">NewsMonkey-Top Headlines</h2>
        <div  className="container my-3">
          {this.state.articles.map((e) => {     // mtlb jo is class ke state mai articles(group of objects) pda hua hai use har object ke liye is jsx ko put kro
             //  console.log(this)   x120 {props: (), context: (), refs: (), updater: (), articles: Array(28) [{...},.......................]
          //   console.log(this.state)    x120 {articles: Array(20) [ {...}, ..................................], Loading: false }{articles: Array(28) [{...},.....
            return (                
              <Newsitem
              key={e.url}
                title={e.title}
                description={e.description.slice(0, 88)}
                imageUrl={e.urlToImage}
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
