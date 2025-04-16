<script>
import Onboarding from '@/components/Onboarding.vue';
import NavBar from '@/components/Navbar.vue';

export default {
  name: 'OnboardingPage',
  components: {
    NavBar,
    Onboarding
  }
}
</script>

<template>
    <div>
        <NavBar />
        <Onboarding />
    </div>
</template>