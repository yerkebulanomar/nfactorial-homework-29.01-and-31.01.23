import "../App.css";
import imgAuthor from "./assets/author.jpg";
import imgLaptop from "./assets/Img.png";
import imgLinkedin from "./assets/LinkedIn.png";
import imgFacebook from "./assets/Facebook Circled.png";
import imgTwitter from "./assets/Twitter.png";

function News() {
  return (
    <div class="news">
      <div class="left">
        <div class="top">
          <img class="img-ava" src={imgAuthor} alt="avatar1" />
          <h5>Authors name</h5>
          <h5 class="grey-text">in</h5>
          <h5>Topics name</h5>
          <h5>·</h5>
          <h5 class="grey-text">7 july</h5>
        </div>
        <div class="text">
          <h2>7 Practical CSS Tips</h2>
          <p>
            You not only learn more Python by implementing what you already know
            but, in the end, you can see how all your hard work pays off.
          </p>
        </div>
        <div class="info-bottom">
          <div class="info">
            <button class="javascript">
              <p id="button-text">Java Script</p>
            </button>
            <h4 class="grey-text">12 min read</h4>
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
      <img class="img-text" src={imgLaptop} alt="laptop" />
    </div>
  );
}

export default News;
