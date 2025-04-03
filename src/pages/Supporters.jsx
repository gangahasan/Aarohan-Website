import React from 'react'

const Supporters = () => {
  return (
    <div id="supporters" className='s-container'>
      <div className="scontainer">
        <h3 className="mainheading">Our Supporters</h3>
        <div className="small-card">
          <img
            src="https://aarohaninitiative.org/images/sflogo_new.jpg"
            width="130px"
            height="130px"
          />
          <div className="card-right">
            <h2 className="card-subheading">Srijan Foundation</h2>
            <div className="card-description">www.srijanfn.org</div>
            <div>
              Srijan Foundation Trust started out at the turn of this millenium
              with running a few non-formal after-schools, two in Odisha at
              Kumarpara and Nadakhand villages in Puri district, and one in
              Kishangarh, New Delhi.. Aaorhan is extremely grateful for the
              financial support Srijan foundation has been providing in running
              its operations.
            </div>
          </div>
        </div>
        <div className="small-card">
          <img src="https://aarohaninitiative.org/images/Rectangle-Copy-4.png" />
          <div className="card-right">
            <h2 className="card-subheading">Smiley Faction</h2>
            <div className="card-description">www.smileyfaction.org</div>
            <div>
              “Smiley faction is delighted to extend its support to Aarohan, a
              commendable initiative by our fellow college alumnus Raghav. We
              had already seen the good work done by him as a TFI member in
              Shadara. After understanding his vision & mission for Aarohan, we
              felt he certainly deserves support by all means. Aarohan is a role
              model initiative which should grow and serve many more people in
              future. Our heartfelt wishes and support will always be there for
              Aarohan & Raghav.”
            </div>
            <div className="card-description" style={{float:"right",fontWeight:"700",paddinngTop:"10px"}}>
              -Gauri Shanker, Smiley faction
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Supporters