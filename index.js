let day = document.querySelector(".day")
let month = document.querySelector(".month")
let year = document.querySelector(".year")
let errorTxt = document.querySelectorAll(".error")
  
function myFunction(){

  let array = new Array()
  array.push(Number(year.value))
  array.push(Number(month.value))
  array.push(Number(day.value))

  dob = new Date(...array)

  dobYear = dob.getFullYear()
  dobMonth = dob.getMonth()
  dobDate = dob.getDate()
  
  current = new Date()
  currentYear = current.getFullYear()
  currentMonth = current.getMonth() + 1
  currentDate = current.getDate()

  yAge = currentYear - dobYear

  if (currentMonth >= dobMonth){
    mAge = currentMonth - dobMonth
  }
  else {
    yAge--
    mAge = 12 + currentMonth - dobMonth
  }
 

  if (currentDate >= dobDate){
    dAge = currentDate - dobDate
  }
  else {
    mAge--
    dAge = 31 + currentDate - dobDate
  }

  if (mAge < 0){
    mAge = 11
    yAge--
  }

  document.querySelector(".span1").textContent = yAge
  document.querySelector(".span2").textContent = mAge
  document.querySelector(".span3").textContent = dAge

  if (year.value === "" || month.value === "" || day.value === ""){
    errorTxt[0].style.display = "block"
    errorTxt[1].style.display = "block"
    errorTxt[2].style.display = "block"

    day.style.border = "1px solid hsl(0, 100%, 67%)"
    month.style.border = "1px solid hsl(0, 100%, 67%)"
    year.style.border = "1px solid hsl(0, 100%, 67%)"
    document.querySelector(".flex").style.color = "hsl(0, 100%, 67%)"
    
    document.querySelector(".span1").textContent = "--"
    document.querySelector(".span2").textContent = "--"
    document.querySelector(".span3").textContent = "--"
  }
  else if (year.value > currentYear){
    errorTxt[0].style.display = "none"
    errorTxt[1].style.display = "none"
    errorTxt[2].style.display = "block"
    errorTxt[2].textContent = "Must be in the past"

    day.style.border = "1px solid hsl(0, 100%, 67%)"
    month.style.border = "1px solid hsl(0, 100%, 67%)"
    year.style.border = "1px solid hsl(0, 100%, 67%)"
    document.querySelector(".flex").style.color = "hsl(0, 100%, 67%)"
    
    document.querySelector(".span1").textContent = "--"
    document.querySelector(".span2").textContent = "--"
    document.querySelector(".span3").textContent = "--"
  }
  else if (month.value > 12 || month.value < 1){
    errorTxt[0].style.display = "none"
    errorTxt[1].style.display = "block"
    errorTxt[1].textContent = "Must be a valid month"
    errorTxt[2].style.display = "none"

    day.style.border = "1px solid hsl(0, 100%, 67%)"
    month.style.border = "1px solid hsl(0, 100%, 67%)"
    year.style.border = "1px solid hsl(0, 100%, 67%)"
    document.querySelector(".flex").style.color = "hsl(0, 100%, 67%)"
    
    document.querySelector(".span1").textContent = "--"
    document.querySelector(".span2").textContent = "--"
    document.querySelector(".span3").textContent = "--"
  }
  else if (day.value > 31 || day.value < 1){
    errorTxt[0].style.display = "block"
    errorTxt[0].textContent = "Must be a valid day"
    errorTxt[1].style.display = "none"
    errorTxt[2].style.display = "none"

    day.style.border = "1px solid hsl(0, 100%, 67%)"
    month.style.border = "1px solid hsl(0, 100%, 67%)"
    year.style.border = "1px solid hsl(0, 100%, 67%)"
    document.querySelector(".flex").style.color = "hsl(0, 100%, 67%)"
    
    document.querySelector(".span1").textContent = "--"
    document.querySelector(".span2").textContent = "--"
    document.querySelector(".span3").textContent = "--"
  }
  else {
    errorTxt[0].style.display = "none"
    errorTxt[1].style.display = "none"
    errorTxt[2].style.display = "none"

    day.style.border = "1px solid hsl(0, 0%, 86%)"
    month.style.border = "1px solid hsl(0, 0%, 86%)"
    year.style.border = "1px solid hsl(0, 0%, 86%)"

    document.querySelector(".flex").style.color = "hsl(0, 1%, 44%)"
  }
}