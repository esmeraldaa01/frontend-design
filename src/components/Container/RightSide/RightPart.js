import React from "react";
import { useContext } from "react";
import featured from "../../../assests/featured.jpg";
import "./RightPart.css";
import { Context } from "../../Context/Context";

const RightPart = () => {
  const { posts } = useContext(Context);

  const d = posts.map((x) => x.category);
  const categories = d.filter((item, index) => d.indexOf(item) === index);

  return (
    <div className="container">
      {categories.map((category) => (
        <div style={{ marginTop: "20px" }}>
          {posts
            .filter((post) => post.category === category)
            .map((filterPost) => {
              return (
                <div id={category.toLowerCase()}>
                  {filterPost.subCategories.map((subCategory) => {
                    console.log(subCategory);
                    return (
                      <div>
                        <h1
                          style={{
                            fontSize: 20,
                            fontWeight: 700,
                            marginTop: 50,
                          }}
                        >
                          {subCategory.name}
                        </h1>
                        {subCategory.list.map((subPost) => (
                          <div className="videos">
                            <img
                              className="img"
                              width={200}
                              height={100}
                              src={subPost.image}
                            />
                            <p className="title">
                              {" "}
                              {subPost.title.substring(0, 40)}...
                            </p>
                          </div>
                        ))}
                      </div>
                    );
                  })}
                </div>
              );
            })}
        </div>
      ))}
    </div>
  );
};
export default RightPart;
