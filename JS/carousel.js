const track = document.getElementById("carouselTrack");
const carousel = document.getElementById("carousel");

let data = [
    {
        title: "Department of Humanities, Education and Social Sciences",
        icon_path: "PNG/DepartmentIcons/dhess.png",
        discription: "The Department of Humanities, Education and Social Sciences focuses on developing students’ understanding of human behavior, culture, and society. It prepares future educators and professionals by enhancing critical thinking, communication skills, and social awareness, while promoting values formation and community engagement.",
        full_disc_path: "http://msumcest.edu.ph/pages/academics/acad_dept_dhess.php"
    },
    {
        title: "Department of Computer Science",
        icon_path: "PNG/DepartmentIcons/dcs.png",
        discription: "The Department of Computer Science provides students with a strong foundation in programming, software development, and modern computing technologies. It prepares learners to become competent professionals in areas such as web development, data management, and emerging digital innovations.",
        full_disc_path: "http://msumcest.edu.ph/pages/academics/acad_dept_dcs.php"
    },
    {
        title: "Department of Hospitality Management",
        icon_path: "PNG/DepartmentIcons/dhm.png",
        discription: "The Department of Hospitality Management trains students in the principles of tourism, hotel operations, and customer service excellence. It develops skills in food service, event planning, and hospitality leadership, preparing graduates for careers in the global tourism and service industry.",
        full_disc_path: "http://msumcest.edu.ph/pages/academics/acad_dept_dhm.php"
    },
    {
        title: "Department of Industrial Technologies",
        icon_path: "PNG/DepartmentIcons/dit.png",
        discription: "The Department of Industrial Technology offers practical and technical training in areas such as electronics, mechanics, and manufacturing processes. It aims to produce skilled and industry-ready graduates capable of meeting the demands of modern industrial workplaces.",
        full_disc_path: "http://msumcest.edu.ph/pages/academics/acad_dept_dit.php"
    },
    {
        title: "Department of Engineering Technology",
        icon_path: "PNG/LogoMCEST.png",
        discription: "The Department of Engineering Technology bridges theoretical engineering concepts with hands-on application. It prepares students to apply engineering principles in real-world settings, focusing on design, construction, maintenance, and technological innovation.",
        full_disc_path: "http://msumcest.edu.ph/pages/academics/acad_dept_det.php"
    },
    {
        title: "Department of Natural Science and Mathematics",
        icon_path: "PNG/DepartmentIcons/dnsm.png",
        discription: "The Department of Natural Science and Mathematics provides a solid foundation in scientific inquiry and mathematical reasoning. It enhances students’ analytical, problem-solving, and research skills essential for understanding natural phenomena and supporting other fields of study.",
        full_disc_path: "http://msumcest.edu.ph/pages/academics/acad_dept_dncm.php"
    },
    {
        title: "Department of Criminal Justice Education",
        icon_path: "PNG/DepartmentIcons/dcje.png",
        discription: "The Department of Criminal Justice Education focuses on the study of law enforcement, criminal justice, and public safety. It prepares students for careers in policing, corrections, and security services by instilling discipline, ethical standards, and legal knowledge.",
        full_disc_path: "http://msumcest.edu.ph/pages/academics/acad_dept_dcje.php"
    },
    {
        title: "Department of Social Work",
        icon_path: "PNG/DepartmentIcons/dsw.png",
        discription: "The Department of Social Work develops compassionate and competent professionals dedicated to helping individuals, families, and communities. It equips students with the skills to address social issues, promote welfare, and support community development through service and advocacy.",
        full_disc_path: "http://msumcest.edu.ph/pages/academics/acad_dept_dsw.php"
    },
];

let index = 0;
let slideWidth = 250;
let auto;

/* Create slides */

function createSlides(){

    track.innerHTML="";

    data.forEach(dict => {
        
        let slide = document.createElement("div");
        slide.className="slide";
        
        let tittle_text = document.createElement("div");
        tittle_text.className = "slide-tittle";
        tittle_text.innerText=dict.title;
        
        let icon = document.createElement("img");
        icon.width = 80;
        icon.height = 80;
        icon.src = dict.icon_path;
        
        let c_div = document.createElement("div");
        c_div.className = "slide-content";
        
        let c_div_text = document.createElement("div");
        c_div_text.className = "slide-content-text";
        c_div_text.innerText = dict.discription;
        
        let b_to_main = document.createElement("button");
        b_to_main.className = "slide-button";
        b_to_main.innerText = "See more...";
        b_to_main.onclick = () => location.href = dict.full_disc_path;
        
        slide.appendChild(tittle_text);
        slide.appendChild(icon);
        slide.appendChild(c_div);
        c_div.appendChild(c_div_text);
        c_div.appendChild(b_to_main);
        
        track.appendChild(slide);

    });

    updateSlides();

}

/* Update active slide */

function updateSlides(){

    let slides = document.querySelectorAll(".slide");

    slides.forEach((s,i)=>{

        s.classList.remove("active");

        if(i===index){
            s.classList.add("active");
        }

    });

    track.style.transform = `translateX(${-index*slideWidth + (window.innerWidth * 0.45) - 8 - slideWidth/2}px)`;

}

/* Next slide */

function next(){

    index++;

    if(index>=data.length){
        index=0;
    }

    updateSlides();

}

/* Previous slide */

function prev(){

    index--;

    if(index<0){
        index=data.length-1;
    }

    updateSlides();

}

/* Swipe support */

let startX=0;

track.addEventListener("touchstart",(e)=>{
    startX=e.touches[0].clientX;
});

track.addEventListener("touchend",(e)=>{

    let endX=e.changedTouches[0].clientX;

    if(startX-endX>50){
        next();
    }

    if(endX-startX>50){
        prev();
    }

})

/* Auto scroll */

function startAuto(){

    auto = setInterval(()=>{
        next();
    },3000);

}

function stopAuto(){
    clearInterval(auto);
}

track.addEventListener("mouseenter",stopAuto);
track.addEventListener("mouseleave",startAuto);

/* Start */

createSlides();
startAuto();