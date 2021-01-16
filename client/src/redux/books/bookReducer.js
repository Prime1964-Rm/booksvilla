import { GET_BOOKS } from "./bookActionType"

const initialState = {
    bookList : [
        {
            title: 'CUDA',
            id: 1,
            src: "https://www.pearson.com.au/MC_images/_amazon/9780134177410.jpg",
            description: "CUDA book for engineers",
            price: 250
        },
        {
            title: '7 Easy',
            id: 2,
            src: "https://m.media-amazon.com/images/I/51d2e+67u1L.jpg",
            description: "7 easy steps for book cover design",
            price: 300
        },
        {
            title: 'Stock Images',
            id: 3,
            src: 'https://www.creativindie.com/wp-content/uploads/2012/07/stock-image-site-pinterest-graphic.jpg',
            Author: '',
            price: 150,
            category: ''
        },
        {
            title: 'Let us C',
            id: 4,
            src: 'https://images-na.ssl-images-amazon.com/images/I/51khzq8EVJL.jpg',
            Author: '',
            price: 200,
            catrgory: 'Programming'
        },
        {
            title: 'React JS',
            id: 5,
            src: 'https://images-na.ssl-images-amazon.com/images/I/517oJSt-2vL._SX331_BO1,204,203,200_.jpg',
            Author: 'Claudia Alves',
            price: 300,
            category: 'Front-end-Development'
        },
        {
            title:'Twilight',
            id:6,
            src:'https://upload.wikimedia.org/wikipedia/en/1/1d/Twilightbook.jpg',
            Author:'Stephenie Meyer',
            price:300,
            category:''
        },
    ],
     Stories : [
        {
            title: 'Journey To the Stars',
            id: 1,
            src: 'https://marketplace.canva.com/EAD7YHrjZYY/1/0/251w/canva-blue-illustrated-stars-children%27s-book-cover-NEr4a_2BWkE.jpg',
            Author: 'Matt Zhang',
            price: 250,
            category: 'Story book'
        },
        {
            title: 'Amara The Brave',
            id: 2,
            src: 'https://marketplace.canva.com/EAD7WWWtKSQ/1/0/251w/canva-purple-and-red-leaves-illustration-children%27s-book-cover-hNI7HYnNVQQ.jpg',
            Author: 'Matt Zhang',
            price: 250,
            category: 'Story book'
        },
        {
            title: 'Twice in a blue moon',
            id: 3,
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAtq3P4dutwLoCtakzV_D3cucRt6Tz2bPTpQ&usqp=CAU',
            Author: 'Christina Lauren',
            price: 300,
            category: ''
        },
        {
            title: 'The little Mermaid',
            id: 4,
            src: 'https://img2-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/37836/optimized_large_thumb_stage.jpg',
            Author: 'Hans Christian Andersen',
            price: 250,
            category: ''
        },
        {
            title: 'Cinderella',
            id: 5,
            src: 'https://cdn.shortpixel.ai/spai/w_844+q_lossy+ret_img+to_webp/https://sooperbooks.com/wp-content/uploads/2019/11/Cinderella_COVER_FINAL-1000px-.jpg',
            Author: 'Simon Hoods',
            price: 300,
            category: ''
        }
    ],


     Manga: [
        
        {
            title:'Tokyo Ghoul',
            id: 1,
            src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcwSv05sPc853fycIixKh_uZpchG4CdibnTA&usqp=CAU',
            Author:'Ishida Sui',
            price:300,
            category:'Manga'
        },
        {
            title:'Dragon Ball Super',
            id:2,
            src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ6j_7z7aPO3A-HrjLsVHo4g7ipO7yRTCLLA&usqp=CAU',
            Author:'Akira Toriyama',
            price:300,
            category:'Manga'
        },
        {
            title:'City Hunter',
            id:3,
            src:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1453060508l/9657768._SX318_.jpg',
            Author:'Tsukasa Hojo',
            price:250,
            category:'Manga'
        },
        {
            title:'FullMetal Alchemist',
            id:4,
            src: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348990451l/873.jpg',
            Author:'Hiromu Arakawa',
            price:450,
            category:'Manga'
        }
    ]

}
const bookReducer=(state=initialState,action) =>{
    switch(action.type){
        case GET_BOOKS:{
            return{
                ...state,
            }
        }
        default: return state
    }
}
export default bookReducer