<template>
<v-container justify="center">
    <h1>
    브랜드를 선택해주세요.
    </h1>
      <v-sheet
        class="px-1"    
      >
        <v-chip-group
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
      </v-sheet>
      </v-container>
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