<template>
    <div id='addTodo'>
        <h2 class='header'>ADD TODO</h2>
        <div id='addForm'>
            <form>
                <ul>
                    <li>
                        <label for='titleInput'>Title: </label>
                        <input id='titleInput' type='text' placeholder="Title" required/>
                    </li>
                    <li>
                        <label for='descriptionInput'>Description: </label>
                        <textarea id='descriptionInput' required></textarea>
                    </li>
                </ul>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    }
}
</script>

<style scoped lang='scss'>
#addTodo {
    margin-top: 100px;
    display: flex;
    justify-content: center;
}

#addForm {
    width: 960px;
    background: #fff;
    padding: 20px;
    box-sizing: border-box;

    form {
        width: 50%;
        margin: 0 auto;
    }

    textarea {
        width: 100%;
    }

    label {
        font-size: 20px;
    }

    label[for=descriptionInput] {
        display: block;
    }
}

ul {
    list-style-type: none;

    li {
        margin: 20px 0;
    }
}
</style>