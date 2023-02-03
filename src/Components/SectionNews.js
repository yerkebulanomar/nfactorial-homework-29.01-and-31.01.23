import "../App.css";
import News from "./News";
// import imgLinkedin from "./assets/LinkedIn.png";
// import imgFacebook from "./assets/Facebook Circled.png";
// import imgTwitter from "./assets/Twitter.png";
import RyanHoliday from "./assets/Ryan Holiday.png";
import bookArticle from "./assets/books article.jpg";
import SamerBuna from "./assets/Samer Buna.jpeg";
import programming from "./assets/programming.jpeg";
import Aytekin from "./assets/Aytekin Tank.jpeg";
import Last from "./assets/do nothing.jpeg";

// function NewsTime(props) {
//   return (
//     <div class="news">
//       <div class="left">
//         <div class="top">
//           <img class="img-ava" src={props.avatarImg} alt="avatar1" />
//           <h5>{props.authorName}</h5>
//           <h5 class="grey-text">in</h5>
//           <h5>{props.topicName}</h5>
//           <h5>·</h5>
//           <h5 class="grey-text">{props.date}</h5>
//         </div>
//         <div class="text">
//           <h2>{props.title}</h2>
//           <p>{props.summary}</p>
//         </div>
//         <div class="articles-bottom">
//           <div class="articles">
//             <button class="javascript">
//               <p id="button-text">{props.button}</p>
//             </button>
//             <h4 class="grey-text">{props.readingTime}</h4>
//             <h4>·</h4>
//             <h4 class="grey-text">Selected for you</h4>
//           </div>
//           <div class="actions">
//             <img class="img-action" src={imgLinkedin} alt="LinkedIn" />
//             <img class="img-action" src={imgFacebook} alt="Facebook" />
//             <img class="img-action" src={imgTwitter} alt="Twitter" />
//           </div>
//         </div>
//       </div>
//       <img class="img-text" src={props.articleImg} alt="laptop" />
//     </div>
//   );
// }

function SectionNews() {
  const articles = [
    {
      id: 0,
      avatarImg: RyanHoliday,
      authorName: "Ryan Holiday",
      topicName: "Better humans",
      date: "Jan 12",
      title: "If You Only Read A Few Books In 2023, Read These",
      summary:
        "It’d be wonderful if a new year magically marked a new beginning. But 2022, like all years, reminded us that the same things keep happening, that world events continue on in their own unpredictable way and that...",
      button: "Stoicism",
      readingTime: "9 min read",
      articleImg: bookArticle,
    },
    {
      id: 1,
      avatarImg: SamerBuna,
      authorName: "Samer Buna",
      topicName: "EdgeCoders",
      date: "Jan 03",
      title: "The Mistakes I Made As a Beginner Programmer",
      summary:
        "Learn to identify them, make habits to avoid them — Update: This article is now part of my book “The Professional Programmer”. Read the updated version of this content, and more programming advice at...",
      button: "IT",
      readingTime: "29 min read",
      articleImg: programming,
    },
    {
      id: 2,
      avatarImg: Aytekin,
      authorName: "Aytekin Tank",
      topicName: "TheStartup",
      date: "Dec 28",
      title: "The power of doing nothing at all",
      summary:
        "The old crocodile was floating at the river’s edge when a younger crocodile swam up next to him, “I’ve heard from many that you’re the fiercest hunter in all of the river bottoms. Please, teach me your ways....",
      button: "Business",
      readingTime: "7 min read",
      articleImg: Last,
    },
  ];

  return (
    <section class="section-news">
      {articles.map((item) => (
        <News
          key={item.id}
          avatarImg={item.avatarImg}
          authorName={item.authorName}
          topicName={item.topicName}
          date={item.date}
          title={item.title}
          summary={item.summary}
          button={item.button}
          readingTime={item.readingTime}
          articleImg={item.articleImg}
        />
      ))}
    </section>
  );
}

export default SectionNews;
