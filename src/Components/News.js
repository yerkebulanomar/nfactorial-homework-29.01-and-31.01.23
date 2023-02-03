import "../App.css";
// import imgAuthor from "./assets/author.jpg";
// import imgLaptop from "./assets/Img.png";
import imgLinkedin from "./assets/LinkedIn.png";
import imgFacebook from "./assets/Facebook Circled.png";
import imgTwitter from "./assets/Twitter.png";
// import RyanHoliday from "./assets/Ryan Holiday.png";
// import bookArticle from "./assets/books article.jpg";
// import SamerBuna from "./assets/Samer Buna.jpeg";
// import programming from "./assets/programming.jpeg";
// import Aytekin from "./assets/Aytekin Tank.jpeg";
// import Last from "./assets/do nothing.jpeg";

function News(props) {
  return (
    <div class="news">
      <div class="left">
        <div class="top">
          <img class="img-ava" src={props.avatarImg} alt="avatar1" />
          <h5>{props.authorName}</h5>
          <h5 class="grey-text">in</h5>
          <h5>{props.topicName}</h5>
          <h5>·</h5>
          <h5 class="grey-text">{props.date}</h5>
        </div>
        <div class="text">
          <h2>{props.title}</h2>
          <p>{props.summary}</p>
        </div>
        <div class="info-bottom">
          <div class="info">
            <button class="javascript">
              <p id="button-text">{props.button}</p>
            </button>
            <h4 class="grey-text">{props.readingTime}</h4>
            <h4>·</h4>
            <h4 class="grey-text">Selected for you</h4>
          </div>
          <div class="actions">
            <img class="img-action" src={imgLinkedin} alt="LinkedIn" />
            <img class="img-action" src={imgFacebook} alt="Facebook" />
            <img class="img-action" src={imgTwitter} alt="Twitter" />
          </div>
        </div>
      </div>
      <img class="img-text" src={props.articleImg} alt="laptop" />
    </div>
  );
}

export default News;
