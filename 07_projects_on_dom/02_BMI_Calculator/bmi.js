const form = document.querySelector('form')

//form jab bhi submit hota hai to post type se ya get type se 
//default action form ka rokna pdega 

form.addEventListener('submit' , function(e){
  e.preventDefault()

 const height = parseInt (document.querySelector('#height').value) //string mai milti hai value by parseInt 
 const weight = parseInt (document.querySelector('#weight').value)
 const results =  document.querySelector('#results');
 if(height === '' || height < 0 || isNaN(height)){//is nan means convertable hai number mai 
  results.innerHTML = `Please give a valid height ${height}`;
}

else if(weight === '' || weight < 0 || isNaN(weight)){//is nan means convertable hai number mai 
  results.innerHTML = `Please give a valid weight ${weight}`;
}
else{
  const bmi = (weight/((height * height)/10000)).toFixed(2)//2 decimal value tk btaado
  let ans = '';
  // show the result
  if (bmi < 18.6) {
    ans = `underweight`;
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    ans = `Normal`;
  } else {
    ans = `overweight`;
  }

  results.innerHTML = `<span>${bmi} and ${ans}</span>`
}

})
//form ke bahar likhne mai jese hi page load hua empty value store hojaaegi 

