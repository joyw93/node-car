<template>
<div>
<h1>
    브랜드를 선택해주세요.
  </h1>
<v-row justify="center">
  <v-col
      cols="12"
      sm="7"
      md="6"
      lg="5"
    >
        <v-chip-group
        column
          mandatory
          active-class="primary--text"
        >
          <v-chip
            v-for="tag in tags"
            :key="tag"
          >
            {{ tag }}
          </v-chip>
        </v-chip-group>
      
  </v-col>
      </v-row>
</div>
</template>

<script>
  export default {
    data: () => ({
      tags: [
        '현대',
        '기아',
        'GM대우',
        'BMW',
        'Audi',
        'Benz',
        '포르쉐',
        '람보르기니',
        '렉서스',
        '렉서스',
        '렉서스',
        '렉서스',
      ],
    }),
  }
</script>

<style>

</style>