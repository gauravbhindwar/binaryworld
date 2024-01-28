import React from "react"
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Binary World</h1>
          <p>Solution To All Your Code</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="VectorGraphics" />

        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, laborum.

            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, repellendus.

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, possimus?

          </p>
        </div>
      </div>

      <div className="home3" id="about">

        <div>
          <h1>Who We are?</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ratione maiores quibusdam animi, nisi cupiditate amet, praesentium voluptas et, exercitationem laudantium quasi provident id iste accusantium voluptatum aliquid suscipit. Minima ipsum maxime cumque, excepturi ea quam totam provident dolorem tempore quidem obcaecati distinctio adipisci. Aperiam nulla et consequatur sit, illum sint laudantium minus odio! Inventore voluptatum culpa cum repellat soluta voluptas. Nam officiis deleniti natus ipsa magnam placeat, rerum perspiciatis? Voluptates excepturi aspernatur ut maiores autem nulla ratione quae delectus quis iure dolorem facilis assumenda quam, expedita provident ad? Et alias, itaque soluta nisi vitae cum sunt nobis autem ex.</p>
        </div>
      </div>

      <div className="home4" id="brands">

        <div>
          <h1>Brands</h1>

          <article>

            <div 
              style={{
                animationDelay:"0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div 
              style={{
                animationDelay:"0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div 
              style={{
                animationDelay:"0.7s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>

            <div 
              style={{
                animationDelay:"1s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>


          </article>
        </div>
      </div>
      
    </>
  );
};

export default Home;
