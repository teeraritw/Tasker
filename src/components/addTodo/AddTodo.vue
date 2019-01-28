<template>
    <div id='addTodo' v-if='getLoggedInStatus'>
        <div id='addForm'>
            <h2 class='header'>CREATE <span>YOUR</span> TODO</h2>

            <p v-if='submitted'>Your todo has been created! You can check it out <router-link to='/todos' exact>here</router-link></p>
            
            <form v-if='!submitted' v-on:submit.prevent='postTodo'>
                <ul>
                    <li>
                        <label for='titleInput'>Title: </label>
                        <input id='titleInput' type='text' v-model='todo.title' placeholder="Todo's Title" required/>
                    </li>
                    <li>
                        <label for='descriptionInput'>Description: </label>
                        <textarea id='descriptionInput' v-model='todo.description' placeholder="Todo's Description" required></textarea>
                    </li>
                </ul>

                <button>CREATE!</button>
            </form>
        </div>
    </div>
</template>

<script>
import { db } from '../../config/firebaseConfig';
import { mapGetters } from 'vuex';
import firebase from 'firebase';

export default {
    data() {
        return {
            todo: {
                title: '',
                description: '',
                date: ''
            },
            submitted: false
        };
    },
    methods: {
        postTodo() {
            this.date = new Date();

            db.collection('todos').add({
                title: this.todo.title,
                description: this.todo.description,
                author: this.getUserEmailName,
                date: firebase.firestore.FieldValue.serverTimestamp()
            });
            this.submitted = true;
        }
    },
    computed: {
        ...mapGetters([
            'getUserEmailName',
            'getLoggedInStatus'
        ])
    }
}
</script>

<style scoped lang='scss'>

a {
    color: #444;
}

#addTodo {
    margin-top: 100px;
    display: flex;
    justify-content: center;
}
#addForm {
    width: 960px;
    background: #fff;
    padding: 20px;

    form {
        text-align: center;
        width: 50%;
        margin: 0 auto;
    }
    textarea {
        margin: 10px 0;
        min-height: 50px;
        font-family: Roboto, Arial, Helvetica, sans-serif;
        resize: none;
        border: 1px solid #ddd;
        width: 100%;
        font-size: 15px;
        height: 200px;
    }
    input:focus, textarea:focus {
        outline: none;

        -webkit-box-shadow: inset 0 0 1px #000;
        box-shadow: inset 0 0 1px #000;
    }
    label {
        text-align: left;
        display: block;
        font-size: 20px;
        margin: 0 0 10px 0;
    }
    input, textarea {
        width: 100%;
        display: block;
        padding: 10px;
        border-radius: 15px;

        -moz-transition: box-shadow 0.2s;
        -webkit-transition: -webkit-box-shadow 0.2s;
        -o-transition: box-shadow 0.2s;
        transition: box-shadow 0.2s;
    }
    input[type=text] {
        border: 0;
        border: 1px solid #ddd;
        font-size: 15px;
    }
    button {
        background: #666;
        border: 0;
        color: #fff;
        padding: 10px;
        font-family: Roboto, Arial, Helvetica, sans-serif;
        cursor: pointer;
        font-size: 20px;
        width: 150px;

        &:hover {
            background: #444;
        }
    }
}

ul {
    padding: 0;
    width: 100%;
    list-style-type: none;
    li {
        margin: 20px 0;
    }
}

.header {
    text-align: center;
    font-size: 35px;

    span {
        font-weight: bold;
    }
}

p {
    text-align: center;
}
</style>