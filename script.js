const DayTag = document.getElementById('day')
const timeTag= document.getElementById('time')
function getDayName(){
 date = new Date() 
 locale = 'en-NG'
 return date.toLocaleDateString(locale, {weekday: 'long'})
}
function GetCurrentUTCTime(){
 const now = new Date();
 const hours = now.getUTCHours()
 const minutes = now.getUTCMinutes()
 const seconds = now.getUTCSeconds()
 const milliseconds = now.getUTCMilliseconds()
 return `${hours}:${minutes}:${seconds}:${milliseconds}`
}
const day = getDayName()
const currentTime = GetCurrentUTCTime()
DayTag.innerHTML = `Day of the week: ${day}`
timeTag.innerHTML = `currentUTCTime: ${currentTime}`

