# FullStack Node + ReactJS Interview

## Run the client
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
```bash
cd ./client
npm run start
```

## Run the server
No configurations for the node server, just move to the directory.
```bash
cd server
```
You will create your own way to run your Node.js server, [don't forget to have Node.js installed](https://nodejs.org/en/).

# Instructions

### Front-end

I. Create a Rating component. The Rating component consists of 5 stars. Each star is represented by a span element. The component should render to this HTML code:

```html
<div class='StarRating'>
  <span>*</span>
  <span>*</span>
  <span>*</span>
  <span>*</span>
  <span>*</span>
</div>
```

When a span element is clicked, the active class should be added to that span element and to all span elements before it. Also, the active class should be removed from all span elements after it, if there are any.

For example, after the third span element has been clicked, the HTML code should look like this:

```html
<div class='StarRating'>
  <span class="active">*</span>
  <span class="active">*</span>
  <span class="active">*</span>
  <span>*</span>
  <span>*</span>
</div>
```

Active starts must be color yellow, the rest must not.

### Back-end

I. Create a simple endpoint `/rates` that receives `{ rates: number }` as body. Using Node JS (you can use Vanilla Node or Express).

II. The received rates must be saved into a file `ratings.txt` with the format: `ISODate -> {rate}`
The text file should look like:
```txt
2022-10-17T22:21:18.114Z -> 1
2022-10-17T22:21:19.380Z -> 3
2022-10-17T22:21:19.964Z -> 5
```

III. After save the rate, the server must respond with 200 and a JSON: `{ status: 'I did it!' }`

IV. Connect the component you did on ReactJS with the Server, when the user click a rate, send a HTTP Request to the crated `/rates` endpoint.
