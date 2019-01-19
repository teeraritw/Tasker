import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        todos: [
            {
                title: 'Buy milk',
                description: `Look at that text! Would anyone use that? Can you imagine that, the text of your next webpage?! 
                You know, it really doesn’t matter what you write as long as you’ve got a young, and beautiful, piece of text. 
                Despite the constant negative ipsum covfefe. 
                Lorem Ipsum better hope that there are no "tapes" of our conversations before he starts leaking to the press!`,
                author: 'Fester',
                date: new Date().toLocaleDateString()
            },
            {
                title: 'Play games',
                description: `I don't think anybody knows it was Russia that wrote Lorem Ipsum, but I don't know, maybe it was. 
                It could be Russia, but it could also be China. It could also be lots of other people. 
                It also could be some wordsmith sitting on their bed that weights 400 pounds. Ok?`,
                author: 'Mitch',
                date: new Date().toLocaleDateString()
            },
            {
                title: 'Eat fish',
                description: `I think my strongest asset maybe by far is my temperament. 
                I have a placeholding temperament. I don't think anybody knows it was Russia that wrote Lorem Ipsum, but I don't know, maybe it was. 
                It could be Russia, but it could also be China. It could also be lots of other people. 
                It also could be some wordsmith sitting on their bed that weights 400 pounds. Ok? 
                You know, it really doesn’t matter what you write as long as you’ve got a young, and beautiful, piece of text.`,
                author: 'Salmon',
                date: new Date().toLocaleDateString()
            },
            {
                title: 'Having fun',
                description: `I don't think anybody knows it was Russia that wrote Lorem Ipsum, 
                but I don't know, maybe it was. It could be Russia, but it could also be China. 
                It could also be lots of other people. It also could be some wordsmith sitting on their bed that weights 400 pounds. Ok?`,
                author: 'Emily',
                date: new Date().toLocaleDateString()
            }
        ]
    }
});

export default store;