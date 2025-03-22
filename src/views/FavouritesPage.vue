<script>
import Favourites from '@/components/Favourites.vue';
import NavBar from '@/components/Navbar.vue';

export default {
  name: 'FavouritesPage',
  components: {
    NavBar,
    Favourites
  }
}
</script>

<template>
    <div>
        <NavBar />
        <Favourites />
    </div>
</template>