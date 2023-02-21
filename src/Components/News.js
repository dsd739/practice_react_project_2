import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Sports Desk",
      title:
        "‘Nobody cares…’: Gavaskar blasts Pakistan for ‘uncomplimentary’ remarks on India - Hindustan Times",
      description:
        "Former India captain Sunil Gavaskar has lashed out at former Pakistan cricketers for passing 'uncomplimentary' remarks on Indian cricketers, which he claims stems from the fact that players across the border cannot participate in the Indian Premier League. | …",
      url: "https://www.hindustantimes.com/cricket/there-is-resentment-towards-indian-players-who-play-the-ipl-gavaskar-snaps-at-pakistan-for-pulling-down-india-101676912705182.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2023/02/20/1600x900/PTI03-05-2022-00003A-0_1652371000055_1676912887550_1676912887550.jpg",
      publishedAt: "2023-02-21T02:00:05Z",
      content:
        "Former India captain Sunil Gavaskar has lashed out at former Pakistan cricketers for passing 'uncomplimentary' remarks on Indian cricketers, which he claims stems from the fact that players across th… [+3861 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Sports Desk",
      title:
        "'Turn off radio, stop reading newspapers...': Border's brutal criticism of Aus - Hindustan Times",
      description:
        "Australia legend Allan Border later blasted at the Pat Cummins-led side in his brutal assessment of their implosion at Arun Jaitley Stadium in New Delhi on that forgettable Sunday morning. | Cricket",
      url: "https://www.hindustantimes.com/cricket/turn-off-radio-stop-reading-newspapers-allan-border-s-brutal-criticism-of-australia-s-implosion-vs-india-in-2nd-test-101676908617181.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2023/02/20/1600x900/New_Project_-_2023-02-20T213310304_1676909108144_1676909108381_1676909108381.jpg",
      publishedAt: "2023-02-21T01:42:52Z",
      content:
        "Where did it all go wrong for Australia in the second Test? The most common answer has been Australia's strategy to use the sweep shot against India's spinners. The result was - five of the nine wick… [+2599 chars]",
    },
    {
      source: {
        id: null,
        name: "Barca Blaugranes",
      },
      author: "Nick Batlle",
      title:
        "Man Utd vs Barcelona: The pressure is on Xavi to win a big game in Europe - Barca Blaugranes",
      description:
        "The manager can quiet critics with a result against Manchester United",
      url: "https://www.barcablaugranes.com/2023/2/20/23607748/the-pressure-is-on-for-xavi-to-win-a-big-game-in-europe",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/bz6xDiGGmselAmfjK3jWFAE1fco=/0x323:4500x2679/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24447376/1247286315.jpg",
      publishedAt: "2023-02-20T22:00:00Z",
      content:
        "Xavi and Barcelona continue to march forward in their campaign to dethrone Real Madrid in La Liga.\r\nIts been a big step forward in terms of results and performances.\r\nThe defense is setting records, … [+3739 chars]",
    },
    {
      source: {
        id: null,
        name: "Fox Sports",
      },
      author: "Nic Savage",
      title:
        "‘Failed’: Coach’s blunt post-loss confession places dark cloud over Australia’s dream - Fox Sports",
      description:
        "‘Failed’: Coach’s blunt post-loss confession places dark cloud over Australia’s dream",
      url: "https://www.foxsports.com.au/cricket/india-vs-australia-third-test-andrew-mcdonald-confesses-batters-abandoned-plans-during-delhi-collapse-in-second-test-whats-next-cricket-news-2023/news-story/2320ff7de86a7839e363c5d0c5993a35",
      urlToImage:
        "https://content.api.news/v3/images/bin/2f28d77b7dc85d4da56014338a23795f",
      publishedAt: "2023-02-20T19:02:58Z",
      content:
        "Twenty-four hours after Cheteshwar Pujara hit the winning runs at Arun Jaitley Cricket Stadium, Australian coach Andrew McDonald was still processing the dramatic 8-28 collapse that effectively hande… [+5502 chars]",
    },
    {
      source: {
        id: null,
        name: "India Today",
      },
      author: "Vidya",
      title:
        "Soon after bail, Sapna Gill files case against cricketer Prithvi Shaw for 'outraging modesty' - India Today",
      description:
        "Sapna Gill, one of the eight booked by Oshiwara Police for vandalising the car of cricketer Prithvi Shaw's friend, alleged that it was the Indian cricketer and his friends who provoked them first.",
      url: "https://www.indiatoday.in/law/story/sapna-gill-new-complaint-cricketer-prithvi-shaw-outrage-modesty-2337372-2023-02-20",
      urlToImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202302/sapnagill-sixteen_nine.jpeg?VersionId=jpqKv7lfIsH75Q7Qj7Z1lBe8IBmlVx5I",
      publishedAt: "2023-02-20T18:12:00Z",
      content:
        "By Vidya : The controversy involving social media influencer Sapna Gill and cricketer Prithvi Shaw does not seem to be near an end as yet. On Monday, the social media fame filed a complaint with Mumb… [+2814 chars]",
    },
    {
      source: {
        id: null,
        name: "The Indian Express",
      },
      author: "Sports Desk",
      title:
        "Quetta Gladiators vs Peshawar Zalmi Highlights: Powell and Neesham star as Peshawar win PSL Clasico by four wickets - The Indian Express",
      description:
        "PSL 2023 Highlights, Quetta Gladiators vs Peshawar: Powell and Neesham helped Peshawar round up the chase with nine balls to spare.",
      url: "https://indianexpress.com/article/sports/cricket/pakistan-super-league-psl-quetta-gladiator-vs-peshawar-zalmi-live-score-updates-8456438/",
      urlToImage: "https://images.indianexpress.com/2023/02/Powell.jpg",
      publishedAt: "2023-02-20T17:52:00Z",
      content:
        "Quetta Gladiators: Jason Roy, Martin Guptill, Abdul Bangalzai, Umar Akmal, Sarfaraz Ahmed(w/c), Iftikhar Ahmed, Mohammad Nawaz, Odean Smith, Qais Ahmad, Naseem Shah, Mohammad Hasnain, Mohammad Hafeez… [+394 chars]",
    },
    {
      source: {
        id: null,
        name: "Cricbuzz",
      },
      author: null,
      title:
        "Gabriel earns ODI recall for South Africa series | Cricbuzz.com - Cricbuzz - Cricbuzz",
      description:
        "The three-match series will see Shai Hope leading the side for the first time after being named ODI skipper",
      url: "https://www.cricbuzz.com/cricket-news/125616/gabriel-earns-odi-recall-for-south-africa-series-cricbuzzcom",
      urlToImage:
        "//m.cricbuzz.com/a/img/v1/600x400/i1/c255591/gabriel-hasnt-played-an-odi-for-west-indies-post-the-2019-world-cup.jpg",
      publishedAt: "2023-02-20T17:46:17Z",
      content:
        "West Indies fast bowler Shannon Gabriel has earned a recall to the ODI side for the upcoming series against South Africa, CWI confirmed on Monday (February 20) while naming the white-ball squads.\r\nGa… [+2463 chars]",
    },
    {
      source: {
        id: null,
        name: "Zoom",
      },
      author: "Aayush Kataria",
      title:
        "Harmanpreet Kaur joins Virat Kohli, Rohit Sharma; becomes first Indian woman to achieve elite milestone - Times Now",
      description:
        "Indian captain Harmanpreet became the third Indian and first Indian woman to achieve the elite milestone. Harmanpreet is the fourth female batter to achieve the milestone. She joins the likes of Suzie Bates, Meg Lanning, and Stafine Taylor as the four women's…",
      url: "https://www.timesnownews.com/sports/cricket/harmanpreet-kaur-joins-virat-kohli-rohit-sharma-becomes-first-indian-women-to-achieve-elite-milestone-article-98101894",
      urlToImage:
        "https://static.tnn.in/thumb/msid-98101894,imgsize-100,updatedat-1676915119362,width-1280,height-720,resizemode-75/98101894.jpg",
      publishedAt: "2023-02-20T17:45:00Z",
      content:
        "Harmanpreet Kaur joins Virat Kohli, Rohit Sharma; becomes first Indian woman to achieve elite milestone",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Sports Desk",
      title:
        "India vs Ireland, Women's T20 World Cup 2023: Action in images - Hindustan Times",
      description:
        "India defeated Ireland to qualify for the Women's T20 World Cup semi-final. Rain played a major role as Harmanpreet Kaur and Co. won by five runs on DLS score.",
      url: "https://www.hindustantimes.com/photos/sports/india-vs-ireland-women-s-t20-world-cup-2023-action-in-images-101676912053240.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2023/02/20/1600x900/ANI-20230220322-0_1676912374084_1676912374084_1676913193947_1676913193947.jpg",
      publishedAt: "2023-02-20T17:13:23Z",
      content: null,
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: "Valkerie Baynes",
      title:
        "Harmanpreet: India need to address high dot-ball count - ESPNcricinfo",
      description:
        "Captain wants more proactivity in likely semi-final showdown with Australia",
      url: "https://www.espncricinfo.com/story/india-need-to-address-dot-ball-count-in-t20-world-cup-semi-final-1360123",
      urlToImage:
        "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/354800/354872.6.jpg",
      publishedAt: "2023-02-20T17:12:00Z",
      content:
        "NewsCaptain wants more proactivity in likely semi-final showdown with Australia\r\nHarmanpreet Kaur has a laugh  •  ICC via Getty Images\r\nHarmanpreet Kaur wants India to address their dot-ball count ah… [+6003 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "TIMESOFINDIA.COM",
      title:
        "Women's T20 World Cup, India vs Ireland Highlights: Smriti Mandhana shines as India beat Ireland by 5 run - Indiatimes.com",
      description:
        "Cricket News: Vice-captain Smriti Mandhana scored a career-best 87 as India qualified for the semi-finals of the ICC Women's T20 World Cup on Monday after registeri",
      url: "https://timesofindia.indiatimes.com/sports/cricket/icc-womens-t20-world-cup/womens-t20-world-cup-india-vs-ireland-highlights-smriti-mandhana-shines-as-india-beat-ireland-by-5-runs-dls-to-qualify-for-semis/articleshow/98101991.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-98102098,width-1070,height-580,imgsize-82960,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2023-02-20T17:00:00Z",
      content:
        "India edge Ireland after rain came down at St George's Park They are through to the semi-finals to join England https://t.co/K3Jay9IaV7\r\n— T20 World Cup (@T20WorldCup) 1676910079000",
    },
    {
      source: {
        id: null,
        name: "Tennis World USA",
      },
      author: "Jovica Ilic",
      title:
        "Rafael Nadal is Laureus World Sportsman of the Year Award Nominee! - Tennis World USA",
      description:
        "Rafael Nadal is chasing his third Laureus World Sportsman of the Year Award",
      url: "https://www.tennisworldusa.org/tennis/news/Rafael_Nadal/128805/rafael-nadal-is-laureus-world-sportsman-of-the-year-award-nominee/",
      urlToImage:
        "https://www.tennisworldusa.org/imgb/131269/rafael-nadal-is-laureus-world-sportsman-of-the-year-award-nominee.webp",
      publishedAt: "2023-02-20T16:43:29Z",
      content:
        "Rafael Nadal is among the Laureus World Sportsman of the Year Award nominees. A 22-time Major winner is in contention for his third Laureus award, two years after winning the second in 2021. Rafa had… [+2259 chars]",
    },
    {
      source: {
        id: null,
        name: "Sporting News",
      },
      author: null,
      title:
        "Liverpool takeover bombshell! Reds owner John Henry says FSG WON'T be selling Liverpool - Goal.com",
      description:
        "Get all the latest Soccer news, highlights, scores, schedules, standings and more from Sporting News Canada.",
      url: "https://www.sportingnews.com/ca/soccer",
      urlToImage:
        "https://static.sportingnews.com/1.25.0.2/themes/custom/tsn/logo.jpg",
      publishedAt: "2023-02-20T16:43:29Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "ESPN India",
      },
      author: "Adrian Wojnarowski",
      title:
        "Russell Westbrook plans to sign with LA Clippers, agent says - ESPN India",
      description:
        "Nine-time All-Star guard Russell Westbrook, officially waived by the Utah Jazz on Monday afternoon, plans to sign with the Los Angeles Clippers, his agent, Jeff Schwartz, told ESPN.",
      url: "https://www.espn.in/nba/story/_/id/35701800/russell-westbrook-plans-sign-la-clippers-agent-says",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0220%2Fr1134009_1296x729_16%2D9.jpg",
      publishedAt: "2023-02-20T16:15:20Z",
      content:
        "After completing a contract buyout, nine-time All-Star guard Russell Westbrook plans to sign with the LA Clippers, his agent, Jeff Schwartz of Excel Sports, told ESPN.\r\nWith Westbrook and the Utah Ja… [+1681 chars]",
    },
    {
      source: {
        id: null,
        name: "Chess.com",
      },
      author: "Anthony Levin",
      title:
        "Fireworks In Clash Of Youth, No Blood Spilled In Day Of Draws - Chess.com",
      description:
        "Round four of the WR Chess Masters 2023 saw all games end in draws. This leaves GM Levon Aronian in the sole lead on three points after his draw with GM Jan-Krzysztof Duda.",
      url: "https://www.chess.com/news/view/2023-wr-chess-masters-round-4",
      urlToImage:
        "https://images.chesscomfiles.com/uploads/v1/news/1164547.76515d71.5000x5000o.f9a1663137a9.png",
      publishedAt: "2023-02-20T16:07:00Z",
      content:
        "Round four of the WR Chess Masters 2023 saw all five games end in draws. This leaves GM Levon Aronian in the sole lead on three points after his draw with GM Jan-Krzysztof Duda.\r\nGM Gukesh D played a… [+5666 chars]",
    },
    {
      source: {
        id: null,
        name: "News18",
      },
      author: "Cricketnext Staff",
      title:
        "'Watch Out India': Brett Lee Fires Away Mystery Spinner Warning For Team India Ahead of 3rd Test - News18",
      description:
        "Despite being 0-2 down in the Border Gavaskar Trophy 2023, Bret Lee has fired a warning for India ahead of the 3rd Test in Indore",
      url: "https://www.news18.com/cricketnext/news/watch-out-india-brett-lee-fires-away-mystery-spinner-warning-for-team-india-ahead-of-3rd-test-7129327.html",
      urlToImage:
        "https://images.news18.com/ibnlive/uploads/2023/02/india-beat-australia-by-6-wickets-in-delhi-test-ap-photo-167686899816x9.jpg",
      publishedAt: "2023-02-20T15:58:32Z",
      content:
        "Even though Australia are currently trailing the Border Gavaskar Trophy 2023, which India successfully retained after beating the visitors by 6 wickets in Delhi taking a 2-0 lead in the series, Brett… [+2174 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "Watch: Yuvraj Singh's Latest Video Featuring His Mother And Brother Is A Laugh Riot - NDTV",
      description:
        "Yuvraj Singh shared a video where he aced the viral 'Kun Faya Kun' trend along with his mother Shabnam Singh, and brother Zorawar Singh.",
      url: "https://www.ndtv.com/offbeat/watch-yuvraj-singhs-kun-faya-kun-video-featuring-his-mother-and-brother-is-a-laugh-riot-3798891",
      urlToImage:
        "https://c.ndtvimg.com/2023-02/o8tko9b_yuvraj-singh_625x300_20_February_23.jpg",
      publishedAt: "2023-02-20T15:03:00Z",
      content:
        "Yuvraj Singh shared a video featuring his mother Shabnam Singh, and brother Zorawar Singh.\r\nFormer cricketer Yuvraj Singh is quite active on social media and keeps his fans updated with whatever he i… [+1653 chars]",
    },
    {
      source: {
        id: null,
        name: "Bavarian Football Works",
      },
      author: "CSmith1919",
      title:
        "Report: Julian Nagelsmann wants Real Madrid’s Dani Ceballos at Bayern Munich - Bavarian Football Works",
      description: "Say what?",
      url: "https://www.bavarianfootballworks.com/2023/2/20/23607062/report-julian-nagelsmann-wants-real-madrids-dani-ceballos-at-bayern-munich-kimmich-musiala-goretzka",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/93YkxJWGoBa3FTjZnYxN-3_-Cyo=/0x543:3333x2288/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24446211/1467708424.jpg",
      publishedAt: "2023-02-20T14:00:00Z",
      content:
        "According to a report from the alliteratively-named Relevo journalist duo of Matteo Moretto and Sergio Santos, Bayern Munich is looking to ink Real Madrid midfielder Dani Ceballos during the summer t… [+1407 chars]",
    },
    {
      source: {
        id: null,
        name: "Managing Madrid",
      },
      author: "Managing Madrid",
      title:
        "Jurgen Klopp talks about his plan to stop Real Madrid, and what he thinks about Vinicius - Managing Madrid",
      description: "Liverpool’s manager spoke to the media today",
      url: "https://www.managingmadrid.com/2023/2/20/23607112/jurgen-klopp-talks-about-his-plan-to-stop-real-madrid-and-what-he-thinks-about-vinicius",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/bPCyvACBeWbW0bVM3EZJ2nqC5Ww=/0x0:1652x865/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24446276/1467910346.jpg",
      publishedAt: "2023-02-20T13:53:06Z",
      content:
        "Liverpool head coach Jurgen Klopp addressed the media today ahead of his sides big Champions League clash against Real Madrid at Anfield tomorrow. Klopp gave updates on his teams health, how special … [+3078 chars]",
    },
    {
      source: {
        id: null,
        name: "Barca Blaugranes",
      },
      author: "Gill Clark",
      title: "Five talking points from Barcelona 2-0 Cadiz - Barca Blaugranes",
      description: "Xavi’s side now eight points clear",
      url: "https://www.barcablaugranes.com/barcelona-la-liga/2023/2/20/23607003/five-talking-points-from-barcelona-2-0-cadiz",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/d-3DtgQyl3BIoO8lGud9boiR_xg=/0x787:4000x2881/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24446156/1467714860.jpg",
      publishedAt: "2023-02-20T13:00:00Z",
      content:
        "Xavi rotates ahead of crunch Man Utd clash\r\nBarcelona manager Xavi promised rotations ahead of the game and was as good as his word as he freshened up his team against Cadiz.\r\nThere were six changes … [+5134 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Sports Desk",
      title:
        "'Turn off radio, stop reading newspapers...': Border's brutal criticism of Aus - Hindustan Times",
      description:
        "Australia legend Allan Border later blasted at the Pat Cummins-led side in his brutal assessment of their implosion at Arun Jaitley Stadium in New Delhi on that forgettable Sunday morning. | Cricket",
      url: "https://www.hindustantimes.com/cricket/turn-off-radio-stop-reading-newspapers-allan-border-s-brutal-criticism-of-australia-s-implosion-vs-india-in-2nd-test-101676908617181.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2023/02/20/1600x900/New_Project_-_2023-02-20T213310304_1676909108144_1676909108381_1676909108381.jpg",
      publishedAt: "2023-02-21T01:42:52Z",
      content:
        "Where did it all go wrong for Australia in the second Test? The most common answer has been Australia's strategy to use the sweep shot against India's spinners. The result was - five of the nine wick… [+2599 chars]",
    },
    {
      source: {
        id: null,
        name: "The Indian Express",
      },
      author: "Peter Vidal",
      title:
        "Horoscope Today, February 21, 2023: Check astrological prediction for Scorpio, Sagittarius, Cancer, Aries and other signs - The Indian Express",
      description:
        "Daily Horoscope: Astrological prediction for February 21 2023: Sagittarius: In recent weeks, you may have inadvertently alienated people in authority or colleagues who might have been useful to you",
      url: "https://indianexpress.com/article/horoscope/horoscope-february-21-2023-check-astrological-prediction-scorpio-sagittarius-cancer-aries-and-other-signs-8444650/",
      urlToImage: "https://images.indianexpress.com/2023/02/horoscope_2-7.jpg",
      publishedAt: "2023-02-21T01:06:00Z",
      content:
        "Gemini, there are domestic projects to be finalised, perhaps decoration or minor repairs. Libra, mystical Mercury is making you aware that nothing can be taken for granted.ARIES (Mar 21 – Apr. 20)\r\nL… [+3657 chars]",
    },
    {
      source: {
        id: null,
        name: "Livemint",
      },
      author: "Karishma Pranav Bhavsar",
      title:
        "Garib Rath train stopped at Rajasthan's Dholpur after bomb hoax, 3 detained | Mint - Mint",
      description:
        "As per the police, Hazrat Nizamuddin - M.G.R.Chennai Central Garib Rath Express (12612), was stopped at the Dholpur station in Rajasthan for three hours, after a passenger claimed that there was a bomb on the train.",
      url: "https://www.livemint.com/news/india/garib-rath-train-stopped-at-rajasthan-s-dholpur-after-bomb-hoax-3-detained-11676939425284.html",
      urlToImage:
        "https://images.livemint.com/img/2023/02/21/600x338/FpbFO1CaQAAnivL_1676940314800_1676940323359_1676940323359.jfif",
      publishedAt: "2023-02-21T00:57:56Z",
      content:
        "Delhi to Chennai Garib Rath train was stopped at Rajasthan's Dholpur Railway station after a bomb threat. Officials told ANI that, three persons have been detained for allegedly spreading rumours reg… [+2334 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "Sumati Yengkhom",
      title:
        "Deadly adenovirus strains combine to lay Kolkata low - Times of India",
      description:
        "It is a combination of two adenovirus strains that is spreading fast and laying children low, even causing deaths, tests have confirmed.",
      url: "https://timesofindia.indiatimes.com/city/kolkata/deadly-adenovirus-strains-combine-to-lay-kolkata-low/articleshow/98107266.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-98107316,width-1070,height-580,imgsize-19026,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2023-02-21T00:37:00Z",
      content: "",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "Aabhas Sharma",
      title:
        "ETtech Preview: Microsoft’s new AI- powered Bing chatbot, here’s what it’s like - Economic Times",
      description:
        "Microsoft sent ET a special preview invite to test the “new” Bing, which comes integrated with ChatGPT. After using it for a few days, this is what we found the AI turbocharged search engine can do.",
      url: "https://economictimes.indiatimes.com/tech/technology/when-microsoft-bing-met-chatgpt/articleshow/98103523.cms",
      urlToImage:
        "https://img.etimg.com/thumb/msid-98103593,width-1070,height-580,imgsize-2325358,overlay-ettech/photo.jpg",
      publishedAt: "2023-02-21T00:30:00Z",
      content:
        "Satya Nadella-led Microsoft stole a march over Google recently with the wildly popular ChatGPT and the AI chatbots integration with the tech giants Bing search engine. Microsoft sent ET a special pre… [+3929 chars]",
    },
    {
      source: {
        id: null,
        name: "Bqprime.com",
      },
      author: "Anjali Rai",
      title:
        "Stocks To Watch: United Breweries, Adani Enterprises, Bharat Petroleum Corp, Asian Paints, BEML - BQ Prime",
      description: "Stocks to watch before going into trade today.",
      url: "https://www.bqprime.com/markets/stocks-to-watch-united-breweries-adani-enterprises-bharat-petroleum-corp-asian-paints-beml",
      urlToImage:
        "https://gumlet.assettype.com/bloombergquint%2F2022-07%2F4cec8dcd-1f66-434e-a1a5-4f2e2c423771%2FA_stock_trader_monitors_financial_data_and_charts_from_multiple_monitors___Source_freepik_.jpg?rect=0%2C0%2C6144%2C3226&w=1200&auto=format%2Ccompress&ogImage=true",
      publishedAt: "2023-02-20T23:30:00Z",
      content:
        "Asian markets saw a muted open on Tuesday while the U.S. equity futures fell as investors weighed the prospect that central banks will have to tighten policy settings more than expected to tame infla… [+1013 chars]",
    },
    {
      source: {
        id: null,
        name: "Deccan Herald",
      },
      author: "DH Web Desk",
      title:
        "Singer Sonu Nigam, colleague manhandled at Mumbai event - Deccan Herald",
      description:
        "Bollywood singer Sonu Nigam and his team members were allegedly manhandled during an event organised by a Shiv Sena (UBT) leader in Mumbai's Chembur on Monday night. Reports said that Nigam's colleague was injured when he was manhandled during an alleged braw…",
      url: "https://www.deccanherald.com/national/west/singer-sonu-nigam-colleague-manhandled-at-mumbai-event-1193349.html",
      urlToImage:
        "https://www.deccanherald.com/sites/dh/files/articleimages/2023/02/21/sonupng-1193349-1676947094.jpg",
      publishedAt: "2023-02-20T23:26:59Z",
      content:
        "Bollywood singer Sonu Nigam and his team members were allegedly manhandled during an event organised by a Shiv Sena (UBT) leader in Mumbai's Chembur on Monday night. Reports said that Nigam's colleag… [+1074 chars]",
    },
    {
      source: {
        id: null,
        name: "The Indian Express",
      },
      author: null,
      title:
        "Booked for murder by Rajasthan Police, three accused worked as Haryana Police informers - The Indian Express",
      description: null,
      url: "https://indianexpress.com/article/cities/delhi/booked-for-murder-by-rajasthan-police-three-accused-worked-as-haryana-police-informers-8457021/",
      urlToImage: null,
      publishedAt: "2023-02-20T22:40:31Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "Jayashree Nandi",
      title:
        "Climate risk: 9 Indian states among top vulnerable places in the world - Hindustan Times",
      description:
        "The vast majority (80%) of 50 provinces facing the highest climate risk to their physical infrastructure by 2050 are in China, the US, and India, according to a ranking released on Monday by Cross Dependency Initiative, which specialises in climate risk analy…",
      url: "https://www.hindustantimes.com/india-news/9-indian-states-among-top-vulnerable-places-101676922251068.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2023/02/21/1600x900/Maharashtra-government-signed-memorandum-of-unders_1674147508130_1676945891478_1676945891478.jpg",
      publishedAt: "2023-02-20T19:44:10Z",
      content:
        "The vast majority (80%) of 50 provinces facing the highest climate risk to their physical infrastructure by 2050 are in China, the US, and India, according to a ranking released on Monday by Cross De… [+3202 chars]",
    },
    {
      source: {
        id: null,
        name: "Dailyexcelsior.com",
      },
      author: "https://www.facebook.com/dailyexcelsior",
      title:
        "New tool could provide insight into powerful future earthquakes - Jammu Kashmir Latest News | Tourism | Breaking News J&K - Daily Excelsior",
      description:
        "Houston, Feb 20: An everyday quirk of physics could be a valuable new way to investigate the causes and potential for a large, damaging earthquake to happen, according to a study. Researchers at The University of Texas at Austin, US, discovered that a frictio…",
      url: "https://www.dailyexcelsior.com/new-tool-could-provide-insight-into-powerful-future-earthquakes/",
      urlToImage:
        "https://cdndailyexcelsior.b-cdn.net/wp-content/uploads/2023/02/download-6-18.jpg",
      publishedAt: "2023-02-20T19:20:43Z",
      content:
        "Houston, Feb 20: An everyday quirk of physics could be a valuable new way to investigate the causes and potential for a large, damaging earthquake to happen, according to a study.Researchers at The U… [+2841 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "Prawesh Lama",
      title:
        "‘Can never forget the faces’: NDRF heroes recount Turkey relief ops - Hindustan Times",
      description:
        "Paramilitary forces personnel are sent to NDRF on seven-year deputations, and in the final year of his stint, constable Sandeep Tomar started to believe he would never be part of a heroic mission abroad. | Latest News India",
      url: "https://www.hindustantimes.com/india-news/can-never-forget-the-faces-ndrf-heroes-recount-turkey-relief-ops-101676918600864.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2023/02/20/1600x900/Prime-Minister-Narendra-Modi-interacts-with-NDRF-p_1676918596148.jpg",
      publishedAt: "2023-02-20T18:43:20Z",
      content:
        "For six years, constable Sandeep Tomar heard stories of his former colleagues at the National Disaster Response Force (NDRF) who went to Nepal during the 2015 earthquake as part of the Indian rescue … [+4685 chars]",
    },
    {
      source: {
        id: null,
        name: "PINKVILLA",
      },
      author: "Drishti Doel",
      title:
        "Dadasaheb Phalke Awards: Alia Bhatt clicks SELFIE with her Best Actress award for Gangubai Kathiawadi - PINKVILLA",
      description:
        "Alia Bhatt Clicks Selfie With Her Best Actress Award For Her Blockbuster Film Gangubai Kathiawadi At Dadasaheb Phalke Awards 2023. Check Out Her Pictures Here.",
      url: "https://www.pinkvilla.com/entertainment/news/dadasaheb-phalke-awards-alia-bhatt-clicks-selfie-with-her-best-actress-award-for-gangubai-kathiawadi-1209994",
      urlToImage:
        "https://www.pinkvilla.com/english/images/2023/02/12907950_fotojet-2023-02-21t003929-298_1280*720.jpg",
      publishedAt: "2023-02-20T18:42:37Z",
      content:
        "Dadasaheb Phalke International Film Festival Awards 2023 is taking place today, and it is going to be a star-studded event with the whos who of Bollywood in attendance. Celebrities such as Alia Bhatt… [+1542 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        '"Thought Earth Was Going To Split Open": 6.3 Magnitude Quake Hits Turkey - NDTV',
      description:
        "Another earthquake struck the border region of Turkey and Syria on Monday, just two weeks after the area was devastated by a larger quake which killed more than 47,000 people and damaged or destroyed hundreds of thousands of homes.",
      url: "https://www.ndtv.com/world-news/6-3-magnitude-earthquake-strikes-near-the-turkey-syria-border-region-3799576",
      urlToImage:
        "https://c.ndtvimg.com/2023-02/2r1ck1j_turkey-earthquake-feb-20_625x300_20_February_23.jpg",
      publishedAt: "2023-02-20T18:24:00Z",
      content:
        "This earthquake has struck 2 weeks after 2 devastating quakes rocked Syria and Turkey. (File)\r\nAntakya, Turkey: Another earthquake struck the border region of Turkey and Syria on Monday, just two wee… [+3840 chars]",
    },
    {
      source: {
        id: null,
        name: "Livemint",
      },
      author: "Alisha Sachdev",
      title:
        "Tata Motors to supply 25k EVs for Uber fleet network | Mint - Mint",
      description:
        "Tata Motors has agreed to supply 25,000 of its X-Pres-T electric sedans to ride-hailing giant Uber’s network of fleet partners in India’s largest order for electric vehicles. According to a top Tata Motors executive, the cars will be delivered over 12-15 mont…",
      url: "https://www.livemint.com/companies/news/tata-motors-to-supply-25k-evs-for-uber-fleet-network-11676917255577.html",
      urlToImage:
        "https://images.livemint.com/img/2023/02/20/600x338/tatamotors_1676920954695_1676920961114_1676920961114.jpg",
      publishedAt: "2023-02-20T18:20:55Z",
      content:
        "NEW DELHI : Tata Motors, the largest maker of electric cars in India, has agreed to supply 25,000 of its X-Pres-T electric sedans to ride-hailing giant Ubers network of fleet partners in Indias large… [+3696 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "Cracks Have Appeared On Badrinath Highway Near Joshimath: Official - NDTV",
      description:
        "With the Kedarnath Temple Committee announcing the dates for opening doors of Shri Kedarnath Dham, cracks have been found on a stretch of road along the Badrinath Highway near Joshimath between JP and Marwari.",
      url: "https://www.ndtv.com/india-news/cracks-have-appeared-on-badrinath-highway-near-joshimath-official-3799114",
      urlToImage:
        "https://c.ndtvimg.com/2023-01/jl4kocsc_badrinath-highway-ani-650_625x300_24_January_23.jpg",
      publishedAt: "2023-02-20T18:19:31Z",
      content:
        "The Border force will test the cracks and take appropriate measures. (File)\r\nChamoli, Uttarakhand: With the Kedarnath Temple Committee announcing the dates for opening doors of Shri Kedarnath Dham, c… [+2021 chars]",
    },
    {
      source: {
        id: null,
        name: "ThePrint",
      },
      author: "ANI",
      title:
        "Study finds human contact linked to happier, healthier dairy calves - ThePrint",
      description:
        "Washington [US], February 20 (ANI): The well-being of calves, including their physical and emotional health, is always top of mind for those in the dairy industry, particularly during the weaning stage. In a recent study appearing in JDS Communications, publi…",
      url: "https://theprint.in/science/study-finds-human-contact-linked-to-happier-healthier-dairy-calves/1386839/",
      urlToImage: null,
      publishedAt: "2023-02-20T18:16:03Z",
      content:
        "Washington [US], February 20 (ANI): The well-being of calves, including their physical and emotional health, is always top of mind for those in the dairy industry, particularly during the weaning sta… [+3148 chars]",
    },
    {
      source: {
        id: null,
        name: "Thewire.in",
      },
      author: null,
      title:
        "ABVP Attacks Tamil Students at JNU, Deface Portraits of Periyar, Marx; CM Stalin Demands Action - The Wire",
      description:
        "The attack took place when Tamil students tried to hold a meeting in memory of a Dalit student who died by suicide at IIT Bombay recently.",
      url: "https://thewire.in/rights/abvp-attacks-tamil-students-at-jnu-deface-portraits-of-periyar-marx-cm-stalin-demands-action",
      urlToImage:
        "https://cdn.thewire.in/wp-content/uploads/2023/02/20225449/Untitled-design-31-800x400.png",
      publishedAt: "2023-02-20T17:30:47Z",
      content:
        "Chennai: Tamil Nadu chief minister M.K. Stalin condemned the “cowardly attack on Tamil students by ABVP [Akhil Bharatiya Vidhyarthi Parishad] ” and took strong objection to defacing of portraits of P… [+4986 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "TIMESOFINDIA.COM",
      title:
        "Women's T20 World Cup, India vs Ireland Highlights: Smriti Mandhana shines as India beat Ireland by 5 run - Indiatimes.com",
      description:
        "Cricket News: Vice-captain Smriti Mandhana scored a career-best 87 as India qualified for the semi-finals of the ICC Women's T20 World Cup on Monday after registeri",
      url: "https://timesofindia.indiatimes.com/sports/cricket/icc-womens-t20-world-cup/womens-t20-world-cup-india-vs-ireland-highlights-smriti-mandhana-shines-as-india-beat-ireland-by-5-runs-dls-to-qualify-for-semis/articleshow/98101991.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-98102098,width-1070,height-580,imgsize-82960,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2023-02-20T17:00:00Z",
      content:
        "India edge Ireland after rain came down at St George's Park They are through to the semi-finals to join England https://t.co/K3Jay9IaV7\r\n— T20 World Cup (@T20WorldCup) 1676910079000",
    },
    {
      source: {
        id: null,
        name: "Business Standard",
      },
      author: "Press Trust of India",
      title:
        "Adani Ports & SEZ repays Rs 1,500-crore SBI MF loan in comback strategy - Business Standard",
      description:
        "Adani groups gross debt stood at Rs 226 lakh crore as of September 2022 and had cash of Rs 31646 crore",
      url: "https://www.business-standard.com/article/companies/adani-ports-sez-repays-rs-1-500-crore-sbi-mf-loan-in-comback-strategy-123022001272_1.html",
      urlToImage:
        "https://bsmedia.business-standard.com/_media/bs/img/article/2023-02/08/full/1675823817-8872.jpg",
      publishedAt: "2023-02-20T16:42:00Z",
      content:
        "Adani group firm Adani Ports &amp; SEZ paid Rs 1,500 crore loan and promised to repay more as the embattled conglomerate mapped a comeback strategy after a sellout triggered by a damning report by US… [+2415 chars]",
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
                description={e.description}
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
