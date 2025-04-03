import React from 'react'
import "../styles/about.css"

const About = () => {
  return (
    <div className="s-container">
      <div className='scontainer'>
        <h3 className="main-heading">
          A one stop learning hub for the community
        </h3>
        <div className="features">
          <div className="skills">
            <img src="https://aarohaninitiative.org/images/1.svg" alt="image" />
            <h3 className="skill-title">Education for children</h3>
            <p>
              An after school program for children that supplements school
              teaching to further deepen their concepts and enhance their skills
              coupled with an added advantage of developing social skills
            </p>
          </div>
          <div className="skills">
            <img src="https://aarohaninitiative.org/images/2.svg" alt="image" />
            <h3>Skill building</h3>
            <p>
              for adults The center also provides relevant skill building
              courses such as sewing, stitching and embroidery for adults to
              help them earn sustainable livelihoods
            </p>
          </div>
          <div className="skills">
            <img src="https://aarohaninitiative.org/images/3.svg" alt="image" />
            <h3>Upliftment for the community</h3>
            <p>
              We focus on extracting, building and using local human capital of
              the community. It also creates an avenue for sharing among
              different community members
            </p>
          </div>
        </div>
        <div className="objective">
          <div className="objective-1">
            <div className="Goal">
              <h2>Goal</h2>
              <p>
                To create self-sustainable community centers that provides
                meaningful education to children, impart livelihood skills and
                generates employment for women to make them independent. Provide
                quality education to all and mobilize the potential work force
                in low-income communities.
              </p>
            </div>
            <div className="vision">
              <h2>Vision</h2>
              <p>
                Aid the nation building process by creating dynamic,
                self-sustainable and knowledgeable societies by creating
                holistic learning hubs for all the members of the community and
                providing everyone valuable learning opportunities
              </p>
            </div>
          </div>
          <div className="mission">
            <h2>Mission</h2>
            <ul>
              <li>
                Provide quality education through after school learning centers
                that focus on holistic development of those seeking education
              </li>
              <li>
                Educate students so that they are able to explore both the world
                and their inner self
              </li>
              <li>
                Impart necessary skills to youth and women in order to build
                entrepreneurial attitudes and help them establish their own
                micro-enterprises
              </li>
            </ul>
          </div>
        </div>

        {/* Team memebers */}
        <div className="team-members">
          <h3 className="team-title">The Team</h3>
          <div className="team">
            <div className="candidate">
              <img
                src="https://aarohaninitiative.org/images/R.jpg"
                alt="team-image"
                width="200px"
                height="200px"
              />
              <p>
                <h3>Raghav Gajula</h3>
                <h5 class="card-description">Co-Founder</h5>
                Raghav graduated from BITS-Pilani in 2011 and completed his
                2-year fellowship with Teach for India in 2011. During his TFI
                fellowship he was working as a Grade 2,3 and 4 teacher at a
                low-income private school in East Delhi. He collaborated with
                Self Employed Women's Association (SEWA) and a local government
                skill-building center to impart livelihood skills to women for
                six months. He believes this is an active parental investment
                model that will have long-term impact on education of kids.
                Raghav also volunteers at a free progress school, Mirambika in
                Hauz Khas, where he discusses science with secondary school
                children. He likes to read and play cricket in his leisure time.
              </p>
            </div>
            <div className="candidate">
              <img
                src="https://aarohaninitiative.org/images/Sr.jpg"
                alt="team-image"
                width="200px"
                height="200px"
              />
              <p>
                <h3>Srikanth Kumar Manne </h3>
                <h5 class="card-description">Co-Founder</h5>
                Srikanth graduated from IIT Bombay in the year 2012 and joined
                Bank of India. Keen to pursue his entrepreneurial aspirations,
                quit his job and set up an educational LLC that aimed at
                providing alternate innovative learning platforms for tertiary
                learners. Social intent in him ensured participation with
                Aarohan where he continues to actively engage in marketing
                activities centered around its self sustaining goal.
              </p>
            </div>
            <div className="candidate">
              <img
                src="https://aarohaninitiative.org/images/C.jpg"
                alt="team-image"
                width="200px"
                height="200px"
              />
              <p>
                <h3>Chetan K</h3>
                <h5 class="card-description">Co-Founder</h5>
                Chetan graduated from BITS-Pilani in 2009, and recently
                completed his 2-year fellowship with Teach for India. During his
                TFI fellowship he was working at Ummeed Aman Ghar, a residential
                home for street kids, run by Aman Biradari Foundation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About