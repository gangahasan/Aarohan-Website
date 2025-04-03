import React from 'react'
import "../styles/mentors.css"

const Mentors = () => {
  return (
    <div id="mentors" class="s-container">
      <div className="scontainer">
        <h3 className="mainheading">Our Mentors</h3>
        <div className="small-card">
          <div className="card-left">
            <img
              src="https://aarohaninitiative.org/images/D.jpg"
              width="130"
              alt=""
              className="image"
            />
          </div>
          <div className="card-right">
            <h2 className="card-subheading">Darshan Bhat</h2>
            <div className="card-description">Educator and Entrepreneur</div>
            <div className="body">
              Darshan is the co-founder and Managing Director of Creatnet
              Services Ltd and CIAM. He is actively involved with incubating
              socially relevant enterprises, projects and ideas in energy,
              education and fashion. He leads Creatnet Education- a network of
              companies, not-for-profits,and people enabling learning and
              growth. He designs and leads educational programs and actively
              coaches entrepreneurs and leaders in schools. He has a natural
              inclination towards spirituality, practices meditation and is
              constantly learning
            </div>
          </div>
        </div>
        <div className="small-card">
          <div className="card-left">
            <img
              src="https://aarohaninitiative.org/images/S.jpg"
              width="130"
              alt=""
            />
          </div>
          <div className="card-right">
            <h2 className="card-subheading">Sunita Sain</h2>
            <div className="card-description">Educationist and Social Worker</div>
            <div className="body">
              Teaching has been Sunita’s forte which she has been pursuing in a
              low income community of Shahdara for the past 20 years. Expert in
              community mobilization and understanding how low income
              communities operate, she mentors team Aarohan on community related
              issues and a wing of skill development. She regularly practices
              meditation and is an avid reader.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mentors