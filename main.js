console.log(`bismiillah`) ;
const nabar=document.querySelector('.navbar')
// console.log(nabar) ;
nabar.classList.remove('fixed','shadow-md')
const section1=document.querySelector('.section--1')
console.log(section1) ;

const sticky=function(entery,bserver){
const [enter]=entery
if(!enter.isIntersecting) {
nabar.classList.remove('fixed','shadow-md','bg-black')

}

else{
    console.log(`wuu shaqayn`) ;
    nabar.classList.add('fixed','shadow-md' ,'bg-black')
    nabar.classList.remove('bg-transparent')


}

}
const sect=new IntersectionObserver(sticky,{
    root:null,
    threshold:0.2,
    rootMargin:`-100px`,
})
sect.observe(section1)
const list=document.querySelector('.listi')
const drop=document.querySelectorAll('.dropdown')
// console.log(list) ;
// list.addEventListener('mouseover',function(e){
//     const click=e.target
//     console.log(click) ;
// })
const links=document.querySelector('.likss')
const lkkl=document.querySelector('.linkrs')
const dropd=document.querySelector('.dor')
// console.log(lkkl.childNodes) ;
nabar.addEventListener('mouseover',function(e){
    const tiger=e.target.closest('.likss')
  console.log(tiger) ;  
})