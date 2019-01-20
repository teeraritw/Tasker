<template>
  <nav id='navbar'>
    <ul>
      <li>
        <router-link to='/' exact><img class='logo' src='../../assets/tasker_logo.png' alt='LOGO'></router-link>
      </li>
      <div>
        <li>
            <router-link class='textLink' to='/add' exact>Create</router-link>
            <router-link class='textLink' to='/' exact>Sign Out</router-link>
        </li>
        <li>
          <router-link to='/' exact>
            <div class='circle'>
              <span>F</span>
            </div>
          </router-link>
        </li>
      </div>
    </ul>
  </nav>
</template>

<script>
export default {
    data() {
        return {

        };
    }
};
</script>

<style scoped lang='scss'>
$navbarHeight: 60px;

#navbar {
    margin: 0;
    background: #fff;
    width: 100%;
    height: $navbarHeight;

    ul {
        margin: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
    }

    li {
        display: inline-block;
        vertical-align: middle;
        margin: 0 10px;

        div.circle {
            margin-right: 50px;
            width: 50px;
            height: 50px;
            background: #ddd;
            position: relative;

            span {
                position: absolute;
                top: 13px;
                left: 20px;
                font-size: 18px;
            }
        }
    }
}

a {
    color: #222;
    text-decoration: none;
    transition: opacity 0.5s;

    &:hover {
        opacity: 0.5;
    }
}

.logo {
    height: $navbarHeight - 10;
}

.circle {
    border-radius: 50%;
}
</style>
