import redDew from '../../../img/MainProjectImg/red-dew.jpg'
import persusVincere from '../../../img/MainProjectImg/persus-vincere.jpg'
import annex from '../../../img/MainProjectImg/annex.jpg'

// Object array for Project Cards
const MainProjectInfo = [
    {
        name: "Persus Vincere",
        desc: `Brochure website for a mockup architect company. 
        HTML, CSS, OwlCarousel and jQuery`,
        image: persusVincere,
        link: "https://persus-vincere.herokuapp.com/"
    },
    {
        name: "Red Dew",
        desc: "Web Development company landing page mockup. HTML, CSS, OwlCarousel & JS",
        image: redDew,
        link: "https://red-dew.herokuapp.com/"
    },
    {
        name: "Annex",
        desc: `RESTful API web app. Features user authentication. Create, delete, & update posts. 
        HTML, CSS, EJS, Express, Mongoose & MongoDB`,
        image: annex,
        link: "https://gar-annex.herokuapp.com/campgrounds"
    },
]

export default MainProjectInfo
