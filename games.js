// Array of cards...
const cardsArray = [
    {
        'name': 'A',
        'num': 1,
        'type': 'spads',
        'vis': '0',
        'img': 'https://img.freepik.com/free-vector/ace-spades-playing-card-isolated_1308-78891.jpg?w=1060&t=st=1698305476~exp=1698306076~hmac=4122941951eb99759aaaa922faa7d30561191428c50c42c77da18a3b25c95ee0',
    },
    {
        'name': 'A',
        'num': 1,
        'type': 'club',
        'vis': '0',
        'img': 'https://img.freepik.com/free-vector/ace-clubs-playing-card-isolated_1308-80924.jpg?w=1060&t=st=1698305733~exp=1698306333~hmac=dacbd6b6d6ae74ca72dad2789814bb31de963ec843de3876992d7e2358577747',
    },
    {
        'name': 'A',
        'num': 1,
        'type': 'heart',
        'vis': '0',
        'img': 'https://img.freepik.com/free-vector/ace-hearts-playing-card-isolated_1308-79361.jpg?w=1060&t=st=1698306609~exp=1698307209~hmac=7fecc714a7436c919661e3ac893aee245c8bc4f1827fec00d5658cd80d9fae4b',
    },
    {
        'name': 'K',
        'num': 13,
        'type': 'heart',
        'vis': '0',
        'img': 'https://img.freepik.com/premium-vector/king-hearts-playing-card-isolated_1308-78856.jpg?w=1060',
    },
    {
        'name': 'Q',
        'num': 12,
        'type': 'heart',
        'vis': '0',
        'img': 'https://img.freepik.com/premium-vector/queen-hearts-playing-card-isolated_1308-78393.jpg?w=1060',
    },
    {
        'name': 'J',
        'num': 11,
        'type': 'heart',
        'vis': '0',
        'img': 'https://img.freepik.com/premium-vector/jack-hearts-playing-card-isolated_1308-78574.jpg?w=1060',
    },
    {
        'name': '2',
        'num': 2,
        'type': 'spads',
        'vis': '0',
        'img': 'https://img.freepik.com/free-vector/two-spades-playing-card-isolated_1308-79142.jpg?w=1060&t=st=1698305544~exp=1698306144~hmac=a2a4f34fe09ea62bf94fd81024fa75c3f67713c2404149f06395d46239f2ad22',
    },
    {
        'name': '3',
        'num': 3,
        'type': 'spads',
        'vis': '0',
        'img': 'https://img.freepik.com/free-vector/three-spades-playing-card-isolated_1308-79269.jpg?w=1060&t=st=1698305448~exp=1698306048~hmac=e9eafe5b6a92a56c3dc7a1856ce41417f06709ce0ea8231e7faf41cbecf3e865',
    },
    {
        'name': '4',
        'num': 4,
        'type': 'spads',
        'vis': '0',
        'img': 'https://img.freepik.com/free-vector/four-spades-playing-card-isolated_1308-78646.jpg?w=1060&t=st=1698305596~exp=1698306196~hmac=9b32afd3259310e51a6495ea4d163987b9ec519d97e7dd9305f96f4169788c33',
    },
    {
        'name': '4',
        'num': 4,
        'type': 'heart',
        'vis': '0',
        'img': 'https://img.freepik.com/free-vector/four-hearts-playing-card-isolated_1308-80559.jpg?w=1060&t=st=1698306437~exp=1698307037~hmac=8e69e7dcdc7748cb4454fa083d765feaca321eda9244d6294e580fed754890ac',
    },
    {
        'name': '5',
        'num': 5,
        'type': 'heart',
        'vis': '0',
        'img': 'https://img.freepik.com/free-vector/five-hearts-playing-card-isolated_1308-79265.jpg?w=1060&t=st=1698306350~exp=1698306950~hmac=7d698593b6c32341330965c4886add68ac591603c0ce419826d25f6cc8dfb5a7',
    },
    {
        'name': '3',
        'num': 3,
        'type': 'heart',
        'vis': '0',
        'img': 'https://img.freepik.com/free-vector/three-hearts-playing-card-isolated_1308-78977.jpg?w=1060&t=st=1698306400~exp=1698307000~hmac=e937af927971fb97f443f08e3fba66e2816abe74a84a86831b80b105b4f71b04',
    }
];

// create variable for cards...
 let trio=0;
 let colours=0;
 let pure_sequence=0;
 let sequence = 0;
 let pair=0;

 // For shuffling card whenever we refresh it...(Algo:- Fisher-Yates)
const shuffling = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

const shuffleCards = shuffling(cardsArray);
const parentDiv = document.querySelector('#cards_section');

// create div for each cards...

// for(let i=0;i<shuffleCards.length;i++){
    
//     const childDiv = document.createElement('div');
//     childDiv.classList.add('card');
//     childDiv.dataset.name = shuffleCards[i].name;
//     childDiv.dataset.num = shuffleCards[i].num;
//     childDiv.dataset.type = shuffleCards[i].type;
//     childDiv.dataset.vis = shuffleCards[i].vis;

//     const front_div = document.createElement('div');
//     front_div.classList.add('front_card');

//     const back_div = document.createElement('div');
//     back_div.classList.add('back_card');
//     back_div.style.backgroundImage = `url(${shuffleCards[i].img})`;

//     parentDiv.appendChild(childDiv);
//     childDiv.appendChild(front_div);
//     childDiv.appendChild(back_div);

// }

let score = 0;

let firstCard = "";
let secondCard = "";
let thirdCard = "";

let firstCard_num = 0;
let secondCard_num = 0;
let thirdCard_num = 0;

let firstCard_type = "";
let secondCard_type = "";
let thirdCard_type = "";

let flipflop = 0;
let click_count = 0;
let match_count = 0;

parentDiv.addEventListener('click',function listener(event){

    let currentCard = event.target;
    var visited = Number(currentCard.parentNode.dataset.vis);

    console.log("vis"+visited);
    // console.log(currentCard.classList);
    if(currentCard.id === 'cards_section'){
        unvisited();
        reset();
        return 0;
    }

    if(visited){
        return false;
    }

    click_count++;
    flipflop++;
    document.getElementById('flipflop').innerHTML = "No. of flips :   " + flipflop;

    // console.log(click_count);
    if(click_count === 1 && !visited){
        currentCard.parentNode.dataset.vis = '1';
        currentCard.parentNode.classList.add('selected_card');
        firstCard = currentCard.parentNode.dataset.name;
        firstCard_num = currentCard.parentNode.dataset.num;
        firstCard_type = currentCard.parentNode.dataset.type;
    }
    else if(click_count === 2 && !visited){
        currentCard.parentNode.dataset.vis = '1';
        currentCard.parentNode.classList.add('selected_card');
        secondCard = currentCard.parentNode.dataset.name;
        secondCard_num = currentCard.parentNode.dataset.num;
        secondCard_type = currentCard.parentNode.dataset.type;
    }
    else if(click_count === 3 && !visited){
        currentCard.parentNode.dataset.vis = '1';
        currentCard.parentNode.classList.add('selected_card');
        thirdCard = currentCard.parentNode.dataset.name;
        thirdCard_num = currentCard.parentNode.dataset.num;
        thirdCard_type = currentCard.parentNode.dataset.type;
    }

    // score:-
    /*  
        trio ------------> 50,
        pure sequence ---> 40,
        sequence --------> 30,
        colours --------->20,
        pair ------------> 10,
    */

    if(firstCard !== "" && secondCard !== "" && thirdCard !== ""){

        const sort_arr = [firstCard_num, secondCard_num, thirdCard_num];
        //sort_arr.sort();
        sort_arr.sort(function (a, b) { return a - b; });
        // console.log(sort_arr);

        if(firstCard === secondCard && secondCard === thirdCard && firstCard === thirdCard){
            trio = 1;
            setTimeout(function twocall() {
                match();
                reset();
            }, 600)
            score += 50;
        }
        else if(firstCard === secondCard || secondCard === thirdCard || firstCard === thirdCard){
            pair = 1;
            setTimeout(function twocall() {
                match();
                reset();
            }, 600)
            score += 10;
        }
        else if(((sort_arr[2] - sort_arr[1] == 1 && sort_arr[1] - sort_arr[0] == 1 && sort_arr[2] - sort_arr[0] == 2) || (sort_arr[0] === '1' && sort_arr[1] === '12' && sort_arr[2] === '13')) && 
        firstCard_type === secondCard_type && secondCard_type === thirdCard_type && firstCard_type === thirdCard_type ){
            pure_sequence = 1;
            setTimeout(function twocall() {
                match();
                reset();
            }, 600)
            score += 40;
        }
        else if((sort_arr[2] - sort_arr[1] == 1 && sort_arr[1] - sort_arr[0] == 1 && sort_arr[2] - sort_arr[0] == 2) || sort_arr[0] === '1' && sort_arr[1] === '12' && sort_arr[2] === '13'){
            sequence = 1;
            setTimeout(function twocall() {
                match();
                reset();
            }, 600)
            score += 20;
        }
        else if(firstCard_type === secondCard_type && secondCard_type === thirdCard_type &&firstCard_type === thirdCard_type){
            colours = 1;
            setTimeout(function twocall() {
                match();
                reset();
            }, 600)
            score += 20;
        }
        else{
            if(match_count==3){
                setTimeout(function call() {
                    match();
                    reset();
                }, 2000);
            }
            setTimeout(function call(){
                unvisited();
                reset()
            },600);
        }

        if(match_count==3){
            restart();
        }
        
        console.log("trio"+trio);
        console.log("p seq"+pure_sequence);
        console.log("seq"+sequence);
        console.log("pair"+pair);
        console.log("color"+colours);

    }

});

const match = () => {
    var selectedCard = document.querySelectorAll('.selected_card');
    match_count++;
    console.log("enter match");

    selectedCard.forEach(function call(current_element){
        current_element.classList.add('cm');
        
        if(trio){
            current_element.style.boxShadow='5px 5px 5px red';
        }
        else if(pure_sequence){
            current_element.style.boxShadow='5px 5px 5px orange';
        }
        else if(sequence){
            current_element.style.boxShadow='5px 5px 5px yellow';
        }
        else if(pair){
            current_element.style.boxShadow='5px 5px 5px blue';
        }
        else if(colours){
            current_element.style.boxShadow='5px 5px 5px cyan';
        }

    });

}

const reset = () => {

    trio=0;
    colours=0;
    pure_sequence=0;
    sequence = 0;
    pair=0;

    firstCard = ""; secondCard = ""; thirdCard = "";
    firstCard_num = 0; secondCard_num = 0; thirdCard_num = 0;
    firstCard_type = ""; secondCard_type = ""; secondCard_type = "";

    click_count = 0;

    var selectedCard = document.querySelectorAll('.selected_card');
    selectedCard.forEach(function call(current_element){
        current_element.classList.remove('selected_card');
    });

    document.getElementById('score').textContent = "Score :" + score;
}

function restart(){
    if(match_count==3){
        document.getElementById('win').textContent = "Congratulation! you can get " + score + " score";
        setTimeout(function call() {
            alert("Do you want to restart the game?");
            location.reload();
        }, 1000);
    }else{
        location.reload();
    }
}

const unvisited = () =>{
    var selectedCard = document.querySelectorAll('.selected_card');
    selectedCard.forEach(function call(current_element){
        current_element.dataset.vis = '0';
    });
}

function start(){
    // let cards = document.getElementsByClassName('front_card');
    // console.log(typeof(cards));
    // cards.forEach(function call(element){
    //     console.log("hello");
    //     element.classList.add('selected_card');
    // });
    
    let back=[];
    let front=[];
    for(let i=0;i<shuffleCards.length;i++){
    
        var childDiv = document.createElement('div');
        
        childDiv.classList.add('card');
        childDiv.dataset.name = shuffleCards[i].name;
        childDiv.dataset.num = shuffleCards[i].num;
        childDiv.dataset.type = shuffleCards[i].type;
        childDiv.dataset.vis = shuffleCards[i].vis;
    
        var front_div = document.createElement('div');
        // front_div.classList.add('front_card');
        front[i]=front_div;

        var back_div = document.createElement('div');
        back_div.classList.add('start_backcard');
        back_div.style.backgroundImage = `url(${shuffleCards[i].img})`;
        back[i]=back_div;

        parentDiv.appendChild(childDiv);
        childDiv.appendChild(front_div);
        childDiv.appendChild(back_div);
    
    }

    setTimeout(function call(){
        for(let i=0;i<shuffleCards.length;i++){
            front[i].classList.add('front_card');
            back[i].classList.remove('start_backcard')
            back[i].classList.add('back_card');
        }
    },5000);

    let min=0;
    let sec=0;
    setTimeout(function call(){
        setInterval(function call(){
            document.getElementById('time').innerHTML="min:sec :- " + min+":"+sec;
            sec++;
            if(sec==60){
                sec=0;
                min++;
            }
        },1000);
    },5000);
    
}

