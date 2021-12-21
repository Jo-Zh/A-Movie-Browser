import Hero from "./Hero";
import "./Gingerbreadman.css";
const Home = () => {
  return (
    <>
      <Hero text="Welcome to browse a movie" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Moviebrowser, a simple application allow your browser and search
              movies.
            </p>
            <svg
              class="gingerbread"
              width="200"
              height="200"
              viewBox="-100 -100 200 200"
            >
              <circle class="body" cx="0" cy="-50" r="30" />

              <circle class="eye" cx="-12" cy="-55" r="3" />
              <circle class="eye" cx="12" cy="-55" r="3" />
              <rect
                class="mouth"
                x="-10"
                y="-40"
                width="20"
                height="5"
                rx="2"
              />

              <line class="limb" x1="-40" y1="-10" x2="40" y2="-10" />
              <line class="limb" x1="-25" y1="50" x2="0" y2="-15" />
              <line class="limb" x1="25" y1="50" x2="0" y2="-15" />

              <circle class="button" cx="0" cy="-10" r="5" />
              <circle class="button" cx="0" cy="10" r="5" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
