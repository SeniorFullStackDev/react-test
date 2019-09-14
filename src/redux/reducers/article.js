import { actionTypes } from '../actions';

let initState = {
    articles: [
        {
            "avatar": "",
            "author": "Samuel Spencer",
            "email": "chacha@aurora.app",
            "isRead": true,
            "jobTitle": "Creative Director",
            "title": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
            "tags": [
                "UI design",
                "Creative"
            ],
            "id": 0
        },
        {
            "avatar": "",
            "author": "Kit Laframboise",
            "email": "anna@aurora.app",
            "isRead": false,
            "jobTitle": "Front-end developer",
            "title": "Aenean commodo ligula eget dolor Aenean massa",
            "desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
            "tags": [
                "Develop",
                "React",
                "Redux",
                "Front-end development"
            ],
            "id": 1
        },
        {
            "avatar": "",
            "author": "Abagael Enno",
            "email": "abagael@aurora.app",
            "isRead": false,
            "jobTitle": "Backend developer",
            "title": "Donec pede justo, fringilla vel",
            "desc": "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. ",
            "tags": [
                "Web",
                "Nodejs",
                "API"
            ],
            "id": 2
        },
        {
            "avatar": "",
            "author": "Amy Dettmering",
            "email": "amy@aurora.app",
            "isRead": false,
            "jobTitle": "Data Analysit",
            "title": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
            "tags": [
                "Database",
                "Neo4j",
                "Mysql",
                "MongoDB"
            ],
            "id": 3
        },
        {
            "avatar": "",
            "author": "Carl Durk",
            "email": "carl@aurora.app",
            "isRead": false,
            "jobTitle": "Backend developer",
            "title": "Nullam dictum felis eu pede mollis pretium",
            "desc": "Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim",
            "tags": [
                "PHP",
                "Java",
                "Mysql"
            ],
            "id": 4
        },
        {
            "avatar": "",
            "author": "Luciano Niswander",
            "email": "luciano@aurora.app",
            "isRead": false,
            "jobTitle": "Project Manager",
            "title": "Aliquam lorem ante, dapibus in, viverra quis",
            "desc": "Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.",
            "tags": [
                "Management",
                "Web Development",
                "UX"
            ],
            "id": 5
        }
    ]
};

export default (state = initState, action) => {

    switch (action.type) {
        case actionTypes.ARTICLE_SET_ALL:
            return {
                ...state,
                articles: action.articles
            };
        case actionTypes.ARTICLE_READ:
            // console.log(action.id);
            // console.log(state.articles);
            var articles = state.articles;
            articles[action.id].isRead = true;
            
            return {
                ...state,
                articles
            };

        default: return state;
    }
};