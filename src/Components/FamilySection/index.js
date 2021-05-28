import React, { useState } from 'react';
import Wedding from '../../images/familyphotos/married.jpg';
import Baby from '../../images/familyphotos/baby.jpg';
import ChristmasCard from '../../images/familyphotos/christmasCard.jpg';
import WeddingWebsite from '../../images/familyphotos/WillAndRachelsWedding.PNG';
import TenLessons from '../../images/familyphotos/PhilosophiesProgramming.PNG';
import TenSteps from '../../images/familyphotos/tenSteps.PNG';
import CodeLessons from '../../images/familyphotos/lessonsInCode.jpg';
import Me from '../../images/me.jpg';
import ImageCard from '../Images';

export default function Family(props) {
  const { bioData } = props;
  const picArray = [[Wedding, 'Our Story', 'We were married in 2018', 'The story of us started in 2016, when we first met. I was between jobs and we met online. We spent some time together and traded stories about each others church and traveling. We talked about Dr. Who and music. We liked one another. But she wasn\'t sure. We spent some time apart when she broke up with me. But she kept looking at my spotify to see what I was listening to and would periodically check my linkedin. In the summer of 2017, she called wanting to return a coat I had loaned her. We met, and she had conveniently forgotten the coat. We have not been apart since. \n This is a site I made, courtesy of the wayback machine: \n', WeddingWebsite],
    [Baby, 'Max', 'Our baby was born in 2019', 'Max was born in late 2019. Shortly after we found out the gender, we found out he would be born with a heart defect called Hypoplastic Left Heart Syndrome, which we\'d never heard of but found out soon that it was a condition where only the right side of his heart functioned. After being born he had to have two surgeries, and when he\'s three he needs another. \n \n Max is a sweet boy who loves playing with his toys, loves the movie soundtrack to the "Greatest Showman" and loves to steal the remote control and plays with anything musical or electronic. \n Caring Bridge: https://www.caringbridge.org/public/maxthemighty', ChristmasCard],
    [CodeLessons, 'Lessons', 'What I learned from code', 'What code has taught me: \nCode has taught me a lot. Its taught me to persevere through hard problems. I worked on an issue with code that was not decoupled from the UI and learned the importance of decoupling and dry code. I\'ve learned about race conditions in calling APIs that use the result to call other APIs and print to screen, and I\'ve learned when you need to step back from a problem (talk through it with someone). In my current job we call that swarming (others call this rubber duckying). Often I just need someone else to look at something so I can walk through it with fresh eyes! I\'ve learned about end-to-end testing, and about good acceptance criteria, and about wikis. \n This is my ten steps of coding:', TenSteps],
    [Me, 'My Coding Journey', 'My philosophy of coding', 'I  remember copying code out of a book as a kid to make a ball bounce around the screen, or "coding" a triangle turtle. Then some toy programs. \n My modern beginnings started when I noticed the phrase .php on a facebook page and first wondered about it, piquing my interest in programming. \n Then came my first html page after a class at WKU... \n Then the first time I learned CSS wrestling with a UI for the library, the first time I understood objects in Java were like cookie cutters in CS101, then later when I rediscovered objects via interfaces and started to think of them as Russian dolls... \n All of these experiences (and more) culminated with lessons I took away at Nashville Software School, when I used Axios.get via Promises to pull from a Firebase API, when I learned about events & callbacks in javascript and how to pass them, when I learned how to modularize my code, how to turn an object into an array and map it to a function, when I learned dependency injection and repository pattern in C#, and when I learned that creating APIs wasn\'t really all that hard (that\'s not to say that API security isn\'t though)! \n This is my philosophy of coding:', TenLessons]];
  return (
<section className="fullpage bio">
    <div id="bio">
    <h1 className="font">Life right now</h1>
      <div className="family-section">
        {picArray.map((pic, index) => <ImageCard key={index} imageUrl={pic} />)}
      </div>
      <div className="personal">
      <h1 className="font">About me</h1>
      {bioData[0].info[0].personal}
      </div>
    </div>
</section>
  );
}
