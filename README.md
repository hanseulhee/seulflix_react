## Seulflix

React with API

---

### **_Result_**

#### Movie API

![ezgif com-gif-maker (6)](https://user-images.githubusercontent.com/63100352/109459945-22616c00-7aa3-11eb-944f-99709dd63c80.gif)

#### - Movie introduction page

<img src="https://user-images.githubusercontent.com/63100352/109460890-b1bb4f00-7aa4-11eb-8ec3-78478583c164.PNG" width="600px">

<img src="https://user-images.githubusercontent.com/63100352/109460893-b3851280-7aa4-11eb-9b2d-63a050e6e75b.PNG" width="600px">

#### React Router: router, link

![ezgif com-gif-maker (5)](https://user-images.githubusercontent.com/63100352/109459611-7ddf2a00-7aa2-11eb-958d-d6f5dbe7973d.gif)

---

### **_Of development_**

#### movie api

##### nomadcoders의 api 사용, api 주소에 따로 장르 · 영화 개수 제한

```js
getMovies = async () => {
  const {
    data: {
      data: { movies },
    },
  } = await axios.get(
    "https://yts-proxy.now.sh/list_movies.json?genre=ADVENTURE&limit=18&sort_by=rating"
  );
  this.setState({ movies });
  console.log(movies);
};
```

#### Render Movies

```js

render() {
    const { movies } = this.state;
    return (
          <div className="movietitle">
            <h2>Adventure</h2>
            <div className="movies">
              {movies.map((movie) => (
                <Home
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  poster={movie.medium_cover_image}
                  rating={movie.rating}
                  summary={movie.summary}
                  background_image={movie.background_image}
                />
              ))}
            </div>
          </div>
    );
```

#### Get the star rating for the movie

##### hover시 해당 영화의 별점 나타냄

![ezgif com-gif-maker (7)](https://user-images.githubusercontent.com/63100352/109472785-e7b4ff00-7ab5-11eb-81d5-71f18908bb00.gif)

```js
<div className="rate">
  <img src={poster} alt={title} title={title} className="img" />
  <span className="star">⭐ {rating} / 10</span>
</div>
```

```css
.star {
  all: unset;
  position: absolute;
  font-size: 11px;
  font-family: "Noto Sans", sans-serif;
  opacity: 0;
  transition: all 0.1s ease-in-out;
}

.rate:hover .star {
  opacity: 1;
}

.rate:hover img {
  filter: brightness(60%);
}
```

#### Deploying to Github Pages

```js
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "deploy": "gh-pages -d build",
    "predeploy": "npm run build"
  },

"homepage": "https://hanseulhee.github.io/seulflix_react/"
```

---

#### **_Additional development items_**

- 로그인 기능
- 회원가입 기능
- summary 마침표를 기준으로 줄바꿈
- ~~media query~~
