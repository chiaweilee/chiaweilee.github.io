<template>
  <app-page>
    <app-topbar theme="dark-blue">
      <app-button left>
        <span>.</span>
      </app-button>
      <app-button right disabled>
        <span>.</span>
      </app-button>
      <app-title>
        Dear Red
      </app-title>
    </app-topbar>
    <app-content>
      <dl>
        <dd>
          <at :@="'airasia'"/>
          <snake auto-start/>
        </dd>
      </dl>
    </app-content>
  </app-page>
</template>

<script>
export default {
  name: 'Home'
}
</script>
