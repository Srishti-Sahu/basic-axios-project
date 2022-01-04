const { default: axios } = require("axios");

const postsDiv = document.querySelector("#postsDiv");
const button = document.querySelector("button");

button.addEventListener("click", async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(response.data);
    for (let i = 0; i < response.data.length; i++) {
      const div = document.createElement("div");
      const h2 = document.createElement("h2");
      const p = document.createElement("p");
      h2.innerText = response.data[i].title;
      p.innerText = response.data[i].body;
      div.appendChild(h2);
      div.appendChild(p);
      div.setAttribute("class", "post");
      postsDiv.appendChild(div);
    }
  } catch (e) {
    console.log(e);
  }
});
