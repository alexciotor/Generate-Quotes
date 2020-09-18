const quotes = [
    { author : 'Marilyn Monroe' ,
      quote : " I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best. "} ,

   { author: 'Oscar Wilde',
     quote: 'Be yourself; everyone else is already taken.'},

    {author: 'Albert Einstein', 
     quote: 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.'},

   { author: 'Dr. Seuss',
     quote :'You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.'},

    { author: 'Mae West',
     quote: 'You only live once, but if you do it right, once is enough.'},

    {author: ' Mahatma Gandhi',
    quote: 'Be the change that you wish to see in the world.'},

    {author: 'Robert Frost',
     quote : 'In three words I can sum up everything I\'ve learned about life: it goes on. '}

]
  

 const citat = document.getElementById('quote')
 const autor = document.getElementById('author')
 


 const getText = ()=>{
    let quote = quotes[Math.floor(Math.random()*quotes.length)]
citat.innerHTML= quote.quote
autor.innerHTML=quote.author


 }

