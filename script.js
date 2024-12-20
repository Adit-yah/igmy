let stories = document.querySelector('.stories')
let arr = [
{
  profile: 'https://plus.unsplash.com/premium_photo-1664366737698-3a98169201c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdpcmx8ZW58MHx8MHx8fDA%3D',
  name : 'Choti'
},
{
  profile: 'https://media.istockphoto.com/id/2155996192/photo/full-size-photo-of-pretty-girl-sit-floor-netbook-modern-clothes-isolated-on-white-color.webp?a=1&b=1&s=612x612&w=0&k=20&c=cHZWNwouwgXYGHmq1-OAoP18WgA4-99nnAKwsO_N27A=',
  name : 'hella '
},
{
  profile: 'https://images.unsplash.com/photo-1631947430066-48c30d57b943?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D',
  name : 'jenni'
},
{
  profile: 'https://images.unsplash.com/photo-1596245195341-b33a7f275fdb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdpcmx8ZW58MHx8MHx8fDA%3D',
  name : 'Rohit'
},
{
  profile: 'https://images.unsplash.com/photo-1467307983825-619715426c70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdpcmx8ZW58MHx8MHx8fDA%3D',
  name : 'Ammanda'
},
]

// console.log(arr);
let my = ` <div class="scontain">
                    <div class="story">
                        <img src="https://media.istockphoto.com/id/1450052495/photo/happy-family-with-car-travel-road-trip-summer-vacation-in-car-in-the-sunset-dad-mom-and.jpg?s=612x612&w=0&k=20&c=yj4tsXvfofdNC9yaWotQrJ0CJPeMQoU2zffXFsDCOxM=" alt="">
                        <div class="bl"><i class="ri-add-line"></i></div>
                    </div>
                        <h5>Your Story</h5>
                 </div>`



arr.forEach(function(elem){
        // console.log(elem);
        
    // console.log(othr);
    my +=  `  <div class="scontain">
    <div class="story">
        <img src="${elem.profile}" alt="">
    </div>
        <h5>${elem.name}</h5>
 </div>`
        
})
console.log(my);
stories.innerHTML = my


// new property white space