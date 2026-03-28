import React from "react";
import Cards from "./components/Cards.jsx";

const jobs = [
  { id: 1, title: "Senior UI Developer", rate: "$120/hr", company: "Nike", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg", bg: "#eeecf9" },
  { id: 2, title: "Senior Backend Engineer", rate: "$150/hr", company: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", bg: "#fdfbf0" },
  { id: 3, title: "Azure Data Engineer", rate: "$125-145/hr", company: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", bg: "#eef6ec" },
  { id: 4, title: "Frontend Developer", rate: "$130/hr", company: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg", bg: "#fef6ee" },
  { id: 5, title: "DevOps Engineer", rate: "$140/hr", company: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", bg: "#eef2fb" },
  { id: 6, title: "ML Engineer", rate: "$160/hr", company: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", bg: "#faeef0" },
  { id: 7, title: "Full Stack Developer", rate: "$135/hr", company: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg", bg: "#eef6ec" },
  { id: 8, title: "Data Scientist", rate: "$145/hr", company: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg", bg: "#eeecf9" },
];
const App=()=>{

  return(
    <div className="app">
      {jobs.map(job=>{
      return  <Cards key={job.id}  title={job.title} rate={job.rate}   bg={job.bg} img={job.logo}  cmp ={job.company}/>
})}
    </div>
  );
}

export default App;