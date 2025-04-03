import React from 'react'
import "../styles/home.css"

const Home = () => {
  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          width:"65%"
        }}
      >
        <div className="content">
          <h1>A community learning center</h1>
          <p>
            Aarohan is a place where people of a community can come together to
            plan, develop and participate in activities that are local,
            friendly, welcoming, non-judgmental, and most importantly engaging
            and educative for everyone involved.
          </p>
        </div>
        <div className="imagescroll">image scrolling</div>
      </div>

      <div className="history">
        <div className='history-content'>
          <h3> The Aarohan Story</h3>
          <div className="video">
            <iframe
              width="940"
              height="528"
              src="https://www.youtube.com/embed/OrmO9n45iB0"
              title="Aarohan in Shahdara"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <p className="video-content">
              Aarohan community learning centers act as vehicles of education,
              learning, innovation and creation for all the members of the
              community. It not only offers definite scientific, artistic,
              sporting arrears for the kids but also similar interest oriented,
              job oriented vocational help for adults. We will be looking at
              taking up community projects that engage the community and enhance
              their understanding of their own problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home