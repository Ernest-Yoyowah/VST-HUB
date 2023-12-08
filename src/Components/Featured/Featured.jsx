import React from "react";
import "./Featured.css";
import image from "../../assets/kontakt1.jpg";

const Featured = () => {
  // Sample data for featured plugins
  const featuredPlugins = [
    {
      id: 1,
      name: "KOMPLETE bundles",
      imageUrl: image,
    },
    {
      id: 2,
      name: "Instruments & effects",
      imageUrl:
        "https://www.native-instruments.com/typo3temp/pics/img-tile-homepage-featured-products-instruments-effects-v2-35a4943fb72aea8760100c5f46195f25-d.jpg",
    },
    {
      id: 3,
      name: "KOMPLETE bundles",
      imageUrl:
        "https://www.native-instruments.com/typo3temp/pics/img-tile-homepage-featured-product-komplete-start-fa06377ce049d5595e5873ee6d887884-d.jpg",
    },
    {
      id: 4,
      name: "Instruments & effects",
      imageUrl:
        "https://www.native-instruments.com/typo3temp/pics/img-tile-homepage-featured-products-keyboards-new-b6471e1742981e62ac330935c622a9fd-d.jpg",
    },
    // Add more plugins as needed
  ];

  return (
    <div
      id="c835757"
      className="text-image theme-default ce-3-pf text-left cols-3 cols-tiles padding-20-20"
    >
      <div className="container">
        <div className="row-text">
          <div className="row">
            <div className="col-sm-9">
              <h2>Featured products</h2>
            </div>
            <div className="col-sm-3 text-sm-right">
              <a className="btn btn-cta" href="/en/catalog/">
                See all products
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          {featuredPlugins.map((plugin) => (
            <div key={plugin.id} className="col-sm-4 col-tile">
              <div className="col-container">
                <div className="col-image">
                  <a
                    href={`/en/catalog/${plugin.name
                      .toLowerCase()
                      .replace(/ /g, "-")}/`}
                  >
                    <div className="image-container">
                      <img
                        data-src={plugin.imageUrl}
                        src={plugin.imageUrl}
                        alt={plugin.name}
                        className="tile retina lazy loaded"
                        data-media-query="m@2x"
                      />
                      <div className="image-caption text-left">
                        <h4>{plugin.name}</h4>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
