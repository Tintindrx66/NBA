import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const GenerateBlocks = ({ blocks }) =>
  blocks
    ? blocks.map(item => (
        <Fade key={item.id} buttom duration={300}>
          <div className={`item ${item.type}`}>
            <div className="veil"></div>
            <div
              className="image"
              style={{
                background: `url(/images/blocks/${item.image}) no-repeat`
              }}
            ></div>
            <div className="title">
              <Link to={item.link}>{item.title}</Link>
            </div>
          </div>
        </Fade>
      ))
    : null;
export default GenerateBlocks;
