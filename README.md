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

<!-- #### - Main page

<img src="https://user-images.githubusercontent.com/63100352/109461343-589feb00-7aa5-11eb-8a2a-41906a94f06f.PNG" width="600px">

#### - Signup page

<img src="https://user-images.githubusercontent.com/63100352/109461350-5a69ae80-7aa5-11eb-8fef-9b1a62e0b32d.PNG" width="600px">

<img src="https://user-images.githubusercontent.com/63100352/109461352-5b024500-7aa5-11eb-8a13-4c85e99f142f.PNG" width="600px">

#### - Signin page

<img src="https://user-images.githubusercontent.com/63100352/109461555-a87eb200-7aa5-11eb-9d0a-7853d7dddccd.PNG" width="600px"> -->

---

### **_Of development_**

#### movie api

##### nomadcoders의 api 사용, api주소에 따로 장르 · 영화 개수 제한

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
      <div className="main">
        <div className="main">
          <Animation />
          <Movieanother />

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
        </div>
      </div>
    );
```

#### Get the star rating for the movie

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
-----
#### ***Additional development items***
* 로그인 기능
* 회원가입 기능
* summary 마침표를 기준으로 줄바꿈
* ~~media query~~